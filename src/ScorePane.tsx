import React, { useState, useRef, useEffect } from "react";
import Container from "@material-ui/core/Container";
import {
  createStyles,
  Theme,
  makeStyles,
  rgbToHex
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AddIcon from "@material-ui/icons/Add";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import { Client } from "../src/Client/Client";
import SettingsInputSvideoTwoToneIcon from "@material-ui/icons/SettingsInputSvideoTwoTone";
import {
  Fab,
  Box,
  Paper,
  FormGroup,
  FormControlLabel,
  Switch,
  InputBase
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookTwoToneIcon from "@material-ui/icons/MenuBookTwoTone";
import clsx from "clsx";
import { SightReaderClient } from "./SightReaderClient";
import {
  EnumerateMidiDevicesResponse,
  EnumerateScoresResponse
} from "./Client/Commands/Command";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import SearchIcon from "@material-ui/icons/Search";
import IconButton from "@material-ui/core/IconButton";
import theme from "./theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paperTableContainer: {
      marginTop: theme.spacing(3),
      width: "100%",
      overflowX: "auto",
      marginBottom: theme.spacing(2),
      background: theme.palette.primary.light
    },
    tableCell: {
      cursor: "pointer"
    },
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: 400,
      background: theme.palette.primary.light
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1
    },
    iconButton: {
      padding: 10
    },
    divider: {
      height: 28,
      margin: 4
    },
    activeScoreSection: {
      marginBottom: theme.spacing(2)
    },
    stage: {
      width: "100%",
      height: "100%",
      padding: 10,
      paddingLeft: 5
    },
    noScoreLoadedIcon: {
      color: theme.palette.primary.dark,
      width: "23vw",
      height: "auto",
      transform: "translateY(-10%)",
      opacity: 0.3
    }
  })
);

export default function ScorePane() {
  const classes = useStyles();
  const stageRef = useRef(null);
  const [pageSvg, setPageSvg] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(1);
  const measureHighlightRef = useRef(null);
  const [measureNumber, setMeasureNumber] = useState(1);
  const [measureHighlightDetails, setMeasureHighlightDetails] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  });

  useEffect(() => {
    highlightMeasure(measureNumber);
  }, [measureNumber]);

  useEffect(() => {
    if (
      SightReaderClient.Instance.Score.length === 0 ||
      !stageRef ||
      !stageRef.current
    ) {
      return;
    }

    var stageBounds = (stageRef!
      .current! as HTMLElement).getBoundingClientRect();

    SightReaderClient.Instance.setupScore({
      pageHeight: stageBounds.height * window.devicePixelRatio,
      pageWidth: stageBounds.width * 3,
      scale: 100 /* Scale 100 means pageHeight and pageWidth are pixel units: https://github.com/rism-ch/verovio/issues/1055 */,
      adjustPageHeight: false
    })
      .then(() => {
        return rerenderScore(pageNumber);
      })
      .then(() => {
        highlightMeasure(measureNumber);
      });
  }, [SightReaderClient.Instance.Score]);

  async function rerenderScore(page: number) {
    setPageNumber(page);
    console.log("Rendering Page:", page);
    return SightReaderClient.Instance.renderScore(page).then((svg: any) => {
      setPageSvg(svg);
    });
  }
  if (typeof window !== "undefined") {
    (window as any).rerenderScore = rerenderScore;
  }

  useEffect(() => {
    rerenderScore(pageNumber);
    (window as any).pageNumber = pageNumber;
  }, [pageNumber]);
  if (typeof window !== "undefined") {
    (window as any).pageNumber = pageNumber;
  }

  function getPageMeasureRange(): [number, number] {
    const navigableMeasureNumberEl = document.querySelector(".mNum");

    if (!navigableMeasureNumberEl) {
      console.error(
        "Cannot highlight measure because no measure numbers are present on any system on the page."
      );
      return [-1, -1];
    }

    const navigableMeasureNumber = navigableMeasureNumberEl.textContent
      ? +navigableMeasureNumberEl.textContent.trim()
      : -1;

    if (navigableMeasureNumber === -1) {
      console.error(
        "Found measure number element .mNum, but it has no text content so cannot extract measure number."
      );
      return [-1, -1];
    }

    const navigableMeasureEl = navigableMeasureNumberEl.closest(".measure");
    const pageMeasures = document.querySelectorAll(".measure");

    const navigableMeasureNumberElIndex = -1;

    let measureRangeLow = 0;
    let measureRangeHigh = 0;

    let measuresBeforeNavigable = 0;
    let measuresAfterNavigable = 0;

    let foundTargetMeasureEl = false;
    pageMeasures.forEach(measureEl => {
      if (foundTargetMeasureEl) {
        return;
      }

      if (measureEl === navigableMeasureEl) {
        measuresAfterNavigable =
          pageMeasures.length - measuresBeforeNavigable - 1;
        foundTargetMeasureEl = true;
      } else {
        measuresBeforeNavigable += 1;
      }
    });

    measureRangeLow = navigableMeasureNumber - measuresBeforeNavigable;
    measureRangeHigh = navigableMeasureNumber + measuresAfterNavigable;

    return [measureRangeLow, measureRangeHigh];
  }
  if (typeof window !== "undefined") {
    (window as any).getPageMeasureRange = getPageMeasureRange;
  }

  function highlightMeasure(targetMeasureNum: number) {
    const [measureRangeLow, measureRangeHigh] = getPageMeasureRange();

    if (
      targetMeasureNum < measureRangeLow ||
      targetMeasureNum > measureRangeHigh
    ) {
      console.error(
        `Cannot highlight measure ${targetMeasureNum}. This page only shows measures ${measureRangeLow} - ${measureRangeHigh}.`
      );
    }

    const relativeMeasureNum = targetMeasureNum - measureRangeLow;
    const measureEls = document.querySelectorAll(`.measure`);
    const measureEl = measureEls[relativeMeasureNum];

    if (!measureEl) {
      return;
    }

    const measureBoundingBox = measureEl.getBoundingClientRect();
    setMeasureHighlightDetails({
      top: measureBoundingBox.top,
      left: measureBoundingBox.left,
      width: measureBoundingBox.width,
      height: measureBoundingBox.height
    });
  }
  if (typeof window !== "undefined") {
    (window as any).highlightMeasure = highlightMeasure;
  }

  return (
    <Box flexGrow={1} flexShrink={0} maxWidth={1024}>
      {pageSvg.length === 0 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100%"
        >
          <MenuBookTwoToneIcon className={classes.noScoreLoadedIcon} />
        </Box>
      )}
      <style jsx global>{`
        /* Hide double dashed lines above each system */
        #stage .system > polygon {
          display: none;
        }

        /* Hide all rests */
        #stage .rest {
          display: none;
        }

        /* Hide instrument names on each system */
        // #stage .system > .label {
        //   display: none;
        // }
        // #stage .system > .labelAbbr {
        //   display: none;
        // }
      `}</style>
      <div
        id="measure-highlight"
        ref={measureHighlightRef}
        style={{
          position: "absolute",
          width: measureHighlightDetails.width,
          height: measureHighlightDetails.height,
          top: measureHighlightDetails.top,
          left: measureHighlightDetails.left,
          background: "#457c97",
          opacity: 0.25,
          borderRadius: 0,
          boxShadow: `0 0 0 1px #d4d4d5, 0 2px 4px 0 rgba(34,36,38,.12), 0 2px 10px 0 rgba(34,36,38,.15)`
        }}
      />
      <div
        id="stage"
        ref={stageRef}
        className={classes.stage}
        dangerouslySetInnerHTML={{ __html: pageSvg }}
      />
    </Box>
  );
}

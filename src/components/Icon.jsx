import React from "react";
import {
  FaDatabase,
  FaMoneyBill,
  FaChartBar,
  FaAngleDown,
} from "react-icons/fa";
import {
  HiClipboardDocumentList,
  HiDocumentChartBar,
  HiChartPie,
  HiOutlineQuestionMarkCircle,
  HiDocumentCheck,
  HiOutlineUserGroup,
} from "react-icons/hi2";
import {
  MdQuiz,
  MdOutlineLocalOffer,
  MdOutlinePictureAsPdf,
  MdHelpCenter,
  MdOutlineHelpCenter,
  MdOutlineWorkHistory,
} from "react-icons/md";
import { TbReportMoney, TbReport } from "react-icons/tb";
import { BsUiChecksGrid } from "react-icons/bs";
import { VscGitPullRequestGoToChanges, VscPreview } from "react-icons/vsc";
import { MdOutlineQuestionAnswer, MdCalculate } from "react-icons/md";
import {
  BiMailSend,
  BiCalendarPlus,
  BiAperture,
  BiFoodMenu,
  BiNotification,
} from "react-icons/bi";
import {
  AiFillDashboard,
  AiOutlineCalculator,
  AiOutlineMail,
  AiOutlineUsergroupAdd,
  AiOutlineCodeSandbox,
  AiOutlineNotification,
} from "react-icons/ai";
import { TiFlowSwitch } from "react-icons/ti";
import { GrSystem, GrStackOverflow } from "react-icons/gr";
import { RiAccountBoxLine, RiFileList3Line } from "react-icons/ri";

const iconMappings = {
  FaAngleDown: FaAngleDown,
  FaMoneyBill: FaMoneyBill,
  FaChartBar: FaChartBar,
  FaDatabase: FaDatabase,
  HiClipboardDocumentList: HiClipboardDocumentList,
  HiDocumentCheck: HiDocumentCheck,
  HiDocumentChartBar: HiDocumentChartBar,
  HiChartPie: HiChartPie,
  HiOutlineQuestionMarkCircle: HiOutlineQuestionMarkCircle,
  HiOutlineUserGroup: HiOutlineUserGroup,
  MdQuiz: MdQuiz,
  TbReportMoney: TbReportMoney,
  VscGitPullRequestGoToChanges: VscGitPullRequestGoToChanges,
  VscPreview: VscPreview,
  MdOutlineQuestionAnswer: MdOutlineQuestionAnswer,
  BiMailSend: BiMailSend,
  AiFillDashboard: AiFillDashboard,
  AiOutlineUsergroupAdd: AiOutlineUsergroupAdd,
  TiFlowSwitch: TiFlowSwitch,
  MdOutlineLocalOffer: MdOutlineLocalOffer,
  AiOutlineCalculator: AiOutlineCalculator,
  AiOutlineMail: AiOutlineMail,
  TbReport: TbReport,
  MdOutlinePictureAsPdf: MdOutlinePictureAsPdf,
  RiAccountBoxLine: RiAccountBoxLine,
  MdCalculate: MdCalculate,
  BiCalendarPlus: BiCalendarPlus,
  GrSystem: GrSystem,
  GrStackOverflow: GrStackOverflow,
  BiAperture: BiAperture,
  RiFileList3Line: RiFileList3Line,
  BsUiChecksGrid: BsUiChecksGrid,
  AiOutlineCodeSandbox: AiOutlineCodeSandbox,
  BiFoodMenu: BiFoodMenu,
  MdHelpCenter: MdHelpCenter,
  MdOutlineHelpCenter: MdOutlineHelpCenter,
  MdOutlineWorkHistory: MdOutlineWorkHistory,
  BiNotification: BiNotification,
  AiOutlineNotification: AiOutlineNotification,
};

const Icon = (props) => {
  const IconComponent = iconMappings[props.icon];

  if (!IconComponent) {
    return null; // Handle the case when the icon is not found
  }

  return <IconComponent className={props.cname} />;
};

export default Icon;

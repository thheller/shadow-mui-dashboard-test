"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Person = require("@material-ui/icons/Person");

var _Person2 = _interopRequireDefault(_Person);

var _LibraryBooks = require("@material-ui/icons/LibraryBooks");

var _LibraryBooks2 = _interopRequireDefault(_LibraryBooks);

var _BubbleChart = require("@material-ui/icons/BubbleChart");

var _BubbleChart2 = _interopRequireDefault(_BubbleChart);

var _LocationOn = require("@material-ui/icons/LocationOn");

var _LocationOn2 = _interopRequireDefault(_LocationOn);

var _Notifications = require("@material-ui/icons/Notifications");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Unarchive = require("@material-ui/icons/Unarchive");

var _Unarchive2 = _interopRequireDefault(_Unarchive);

var _Dashboard3 = require("../views/Dashboard/Dashboard");

var _Dashboard4 = _interopRequireDefault(_Dashboard3);

var _UserProfile = require("../views/UserProfile/UserProfile");

var _UserProfile2 = _interopRequireDefault(_UserProfile);

var _TableList = require("../views/TableList/TableList");

var _TableList2 = _interopRequireDefault(_TableList);

var _Typography = require("../views/Typography/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Icons = require("../views/Icons/Icons");

var _Icons2 = _interopRequireDefault(_Icons);

var _Maps = require("../views/Maps/Maps");

var _Maps2 = _interopRequireDefault(_Maps);

var _Notifications3 = require("../views/Notifications/Notifications");

var _Notifications4 = _interopRequireDefault(_Notifications3);

var _UpgradeToPro = require("../views/UpgradeToPro/UpgradeToPro");

var _UpgradeToPro2 = _interopRequireDefault(_UpgradeToPro);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components/views
var dashboardRoutes = [{
  path: "/dashboard",
  sidebarName: "Dashboard",
  navbarName: "Material Dashboard",
  icon: _Dashboard2.default,
  component: _Dashboard4.default
}, {
  path: "/user",
  sidebarName: "User Profile",
  navbarName: "Profile",
  icon: _Person2.default,
  component: _UserProfile2.default
}, {
  path: "/table",
  sidebarName: "Table List",
  navbarName: "Table List",
  icon: "content_paste",
  component: _TableList2.default
}, {
  path: "/typography",
  sidebarName: "Typography",
  navbarName: "Typography",
  icon: _LibraryBooks2.default,
  component: _Typography2.default
}, {
  path: "/icons",
  sidebarName: "Icons",
  navbarName: "Icons",
  icon: _BubbleChart2.default,
  component: _Icons2.default
}, {
  path: "/maps",
  sidebarName: "Maps",
  navbarName: "Map",
  icon: _LocationOn2.default,
  component: _Maps2.default
}, {
  path: "/notifications",
  sidebarName: "Notifications",
  navbarName: "Notifications",
  icon: _Notifications2.default,
  component: _Notifications4.default
}, {
  path: "/upgrade-to-pro",
  sidebarName: "Upgrade To PRO",
  navbarName: "Upgrade To PRO",
  icon: _Unarchive2.default,
  component: _UpgradeToPro2.default
}, { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }];
// import ContentPaste from "@material-ui/icons/ContentPaste";
// @material-ui/icons
exports.default = dashboardRoutes;
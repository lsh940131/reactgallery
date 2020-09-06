import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};
  html {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;

    -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
  }
  body {
    height: 100%;
    overflow: hidden;
    font-family: 'Noto Sans KR', sans-serif;
  }
  .dx-widget,
  .dx-widget input,
  .dx-widget textarea,
  input,
  text {
    font-family: 'Noto Sans KR' !important;
  }
  input:disabled {
    background-color: rgb(237,237,237);
  }
  #container {
    height: 100%;
    display: flex;
    // min-width: 1440px;
  }
  p {
    margin: 0;
  }
  .leaflet-container {
    height: 1024px;
    width: 100%;
  }
  .leaflet-top {
    top: 80px;
  }
  .leaflet-popup.specific-popup.leaflet-zoom-animated {
    bottom: 38px !important;
    left: -272px !important;
  }
  .leaflet-popup-content-wrapper {
    text-align:center
    width:550px;
    height: 400px;
    background-color: rgb(255,255,255,0.8)
  }
  .leaflet-popup-content-wrapper .leaflet-popup-content {
    width: auto !important;
    height:auto;
  }

  .leaflet-right .leaflet-control {
    margin-right:13px;
  } 

  .leaflet-top .leaflet-control{
    margin-top:13px;
  }

  .leaflet-marker-icon.map-label.leaflet-zoom-animated.leaflet-interactive {
    width : 200px !important;
    height : auto !important;
    position: absolute;
    display: inline-block;
    left: -100px;
    text-align : center;
    margin-left : 5px !important;
    margin-top : 0px !important;
  }
  .MuiToolbar-regular {
    min-height: 48px !important;
  }

  //////////////////// DataGrid ////////////////////
  #gridContainer {
    width: 100%;
    height: 100%;
  }
  #gridContainer tr {
    height: 50px;
  }
  //////////////////// DataGrid ////////////////////

  //////////////////// TabPanel ////////////////////

  .dx-tabs-wrapper{
    background-color:white;
    width:100%;
    height:55px;
    box-shadow:0px 5px 5px 0px rgb(167,167,167,0.5);
   
  }

  .dx-tabpanel-container .dx-tabs-wrapper{
      background-color:#EDEDED!important;
      height:50px;
      box-shadow:none;
  }

  .dx-tabpanel .dx-tab {
    width: 150px;
    height: 55px !important;
    margin: 0 15px;
    line-height: 2.5em;
  }
  .dx-tabpanel-container .dx-tabpanel .dx-tab{
    width: 120px;
    height: 50px !important;
    margin: 0;
  }

  .dx-tabpanel-container .dx-tab.dx-state-hover{
    background-color:#EDEDED!important;
  }
  .dx-tabs{
    border:none;
  }
  #settingsTab .dx-tabs{
    border:none;
    z-index:999;
  }
  .dx-tab{
    display:block;
    float:left;
    font-weight:bold;
    color:#d1d1d1;
  }
    
    .dx-tabpanel .dx-multiview-wrapper{
      border:none !important;
    }

    .dx-tab-selected:after {  
      border-left: none!important;  
      border-right: none!important;  
      border-top: 1px solid white!important;
      border-bottom: 3px solid #b54549!important;  
    }  

    .dx-tabpanel-container .dx-tab-selected:after {
      border-left: none!important;  
      border-right: none!important;  
      border-top:none!important;
      border-bottom: 3px solid #b54549!important;  
      color:black;
    }
 

    .dx-tab-selected:before {
      border-bottom: 0px solid white!important;  
    }

    .dx-tabpanel-container .dx-tab-selected:before {
      border-left: none!important;  
      border-right: none!important;  
      border-top:none!important;
    }

 
    .dx-tabpanel-container .dx-tab.dx-tab-selected {
      font-weight:bold;
      background-color:#EDEDED!important;
      color:black;

    }

    .dx-tabpanel.dx-state-focused .dx-tab:not(.dx-tab-selected):before {  
        border-bottom: 0px solid white!important;  
    }  

    .dx-tabpanel.dx-state-focused .dx-multiview-wrapper {  
        border: 1px solid white!important;  
    }

    .sub-tab {
      display: flex;
      flex-direction: row-reverse;
    }

    .sub-tab .dx-tabpanel-tabs {
      width: 60px;
      overflow: hidden;
    }

    .sub-tab .dx-tabpanel-tabs .dx-tab {
      width: 60px;
    }

    .sub-tab .dx-tabpanel-tabs .dx-tabs {
      background-color: rgb(237,237,237);
    }

    .sub-tab .dx-tabpanel-tabs .dx-tab.dx-tab-selected {
      background-color: #fff !important;
    }

    .sub-tab .dx-tabpanel-container {
      flex: 1;
      overflow: hidden;
      padding-top:0px !important;
      margin-top:0px !important;
    }

    .sub-tab .dx-tabs-wrapper {
      border: 0;
    }

    .sub-tab .dx-tabs-scrollable {
      margin: 0;
      height: 100%;
    }

    //////////////////// TabPanel ////////////////////

    /////////////////// GroupRadio ///////////////////
    .dx-radiogroup-horizontal .dx-radiobutton {
      margin-right: 30px !important;
      @media (max-width:1600px){
        margin-right: 15px !important;
      }
    }
    .dx-radiobutton-icon-checked .dx-radiobutton-icon-dot{
      display: block;
      margin-top: -18px;
      margin-left: 4px;
      width: 14px;
      height: 14px;
      background: #b54549;
      content: "";
      border-radius: 7px;
    }
    /////////////////// GroupRadio ///////////////////
    
    /////////////////// Analysis > History > DataGrid ///////////////////
    /* .analysisDatagrid {
      overflow: hidden auto;
    } */
    
    /* alignment={"right"}로 alignment를 먹이면 컬럼명도 우측정렬되기때문에 
        해당 컬럼의 td부분에만 우측정렬되도록 설정하려면 left-alignment 클래스를 설정해주어야함 */
    /* 이상하게 컬럼명도 td로 들어가서.. 컬럼명은 role="columnheader" 이고 컬럼은 role="gridcell" 이라서 이렇게 지정.. */
    .analysisDatagrid .left-alignment[role="gridcell"] {
      text-align: left !important;
    }
    
    .analysisDatagrid .right-alignment[role="gridcell"] {
      text-align: right !important;
    }
    /////////////////// Analysis > History > DataGrid ///////////////////

    ////////////////////////DatePicker css///////////////////////////////

    .react-datepicker-wrapper{
      width:35%;
    }
    .UserAreaDate .react-datepicker-wrapper {
      width:100%;
    }
    .ReportDate .react-datepicker-wrapper{
      width:168px;
    }
    .ReportDate .react-datepicker__input-container > input{
      text-align:center;
      border: 1px solid #b7b7b7;
      height:32px;
    }

    .react-datepicker__input-container {
      width:100%;
    }
    .react-datepicker__input-container > input{
      width:100%;
      height:40px;
      text-align:center;
      border: 1px solid #b7b7b7;
    }

    .react-datepicker-popper {
      z-index: 2 !important;
    }

    ////////////////////////DatePicker css///////////////////////////////

    
    ///////////////////////// DevTagCountLimit //////////////////////////

    .dx-texteditor.dx-editor-outlined{
      font-size:12px;
    }

    ///////////////////////// DevTagCountLimit //////////////////////////


    //////////////////////////// DevTimeline ////////////////////////////

    #timeline-table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 15px;
    }

    #timeline-table thead tr {
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ddd;
    }

    #timeline-table tbody tr:first-child {
      background-color: rgb(250, 225, 225, 0.4) !important;
    }

    #timeline-table tbody tr:last-child {
      background-color: rgb(225, 250, 255, 0.5);
    }
    
    #timeline-table.type1 thead td:not(:last-child),
    #timeline-table.type1 tbody td:nth-child(4n+1):not(:last-child) {
      border-right: 1px solid #ededed;
    }

    #timeline-table.type2 thead td:not(:last-child),
    #timeline-table.type2 tbody td:nth-child(4n):not(:last-child),
    #timeline-table.type3 thead td:not(:last-child),
    #timeline-table.type3 tbody td:nth-child(4n):not(:last-child) {
      border-right: 1px solid #ededed;
    }

    #timeline-table.type1 tbody td:nth-child(4n+3) {
      border-right: 1px solid rgb(238, 238, 238, 0.6);
    }

    #timeline-table.type2 tbody td:nth-child(4n+2),
    #timeline-table.type3 tbody td:nth-child(4n+2) {
      border-right: 1px solid rgb(238, 238, 238, 0.6);
    }

    #timeline-table.type1 tr td:first-child {
      width: 100px;
    }

    #timeline-table td {
      border-bottom: 1px solid #ddd;
      text-align: center;
      height : 40px;
      vertical-align: middle;
      position: relative;
    }

    // .hour {
    //   width: 53px;
    // }
    
    .col-time > div,
    .timeline-selected > div,
    .usertimeline-selected > div {
      width: 100%;
      height: 20px;
    }
    .timeline-selected > div {
      background-color: rgb(139, 202, 218);
      width: calc(100% + 1px);
    }
    .usertimeline-selected > div {
      background-color: rgb(55, 190, 82);
      width: calc(100% + 1px);
    }
    .col-time {
      width : 13px;
    }

    //////////////////////////// DevTimeline ////////////////////////////

    //////////////////////////// Schedule DevTimeline ////////////////////////////

    #schedule-table {
      border-collapse: collapse;
      width: 100%;
      margin-bottom: 15px;
      text-align: center;

      > thead {
        > tr {
          border-top: 2px solid #ccc;
          border-bottom: 2px solid #ddd;
          height: 40px;
          line-height: 40px;

          & td:not(:last-child) {
            border-right: 1px solid #ededed;
          }
        }
      }

      & tbody {
        & tr {
          & td {
            border-bottom: 1px solid #ddd;
            text-align: center;
            vertical-align: middle;
            height: 40px;
            position: relative;

            &:not(:last-child) {
              border-right: 1px solid #ededed;
            }
          }

          & td.timeline-selected {
            > div {
              background-color: rgb(238, 228, 44);
              width: calc(100% + 1px);
            }
          }
        }

        & tr:first-child, & tr:nth-child(2) {
          background-color: rgb(250, 225, 225, 0.4) !important;
        }

        & tr:last-child, & tr:nth-child(14n-1) {
          background-color: rgb(225, 250, 255, 0.5);
        }

        & tr.userzone-info-week {
          & td {
            height: 10px;

            &:nth-child(2n) {
              border-right: none;
            }
            > div {
              height: 5px;
            }
          }
        }

        & tr.schedule-info-week {
          & td {
            &:nth-child(2n+1) {
              border-right: none;
            }
            > div {
              height: 20px;
              position: absolute;
              bottom: 10px;
            }
          }
        }

        & tr.userzone-info-day {
          & td {
            height: 10px;

            &:nth-child(2n-1) {
              border-right: none;
            }
            > div {
              height: 5px;
            }
          }
        }

        & tr.schedule-info-day {
          & td {
            &:nth-child(2n-1) {
              border-right: none;
            }
            > div {
              height: 20px;
            }
          }
        }
      }
    }

    //////////////////////////// Schedule DevTimeline ////////////////////////////

    //////////////////////////// DevCalendar ////////////////////////////

    #calendar-container {

    }

    .dx-calendar-cell {
      padding: 0;
      vertical-align: middle;
      line-height: 1.0em;
    }

    .dx-calendar-cell > span {
      display: block;
      width: calc(100% - 8px);
      padding: 6px 0;
    }

    .dx-calendar-cell.selected > span {
      border: 4px solid rgb(250,225,225);
      border-radius: 4px;
      padding: 2px 0px;
    }

    .dx-calendar-cell .holiday,
    .dx-calendar-cell .userzone-holiday,
    .dx-calendar-cell .specificday,
    .dx-calendar-cell .userzone-specificday {
      font-weight: bold;
      color: rgb(255, 255, 255);
      border-radius: 50%;
      overflow: hidden;
    }

    .dx-calendar-cell .holiday {
      background-color: #e34f4f;
    }

    .dx-calendar-cell .userzone-holiday,
    .dx-calendar-cell .userzone-specificday {
      background-color: rgb(55,190,82);
    }
    
    .dx-calendar-cell .specificday {
      background-color: #337ab7;
    }

    #calendar-container.type2 .specificday,
    #calendar-container.type2 .userzone-specificday,
    #calendar-container.type3 .holiday,
    #calendar-container.type3 .userzone-holiday {
      font-weight: initial;
      color: rgb(51, 51, 51);
      background-color: transparent;
    }

    .dx-calendar {
      width: calc((282px * 3) + 72px) !important;
    }

    .dx-calendar-views-wrapper {
      /* padding: 0 36px !important; */
      padding: 0 317px !important;
      transform: none !important;
    }

    .dx-calendar-body .dx-widget {
      width: 282px !important;
      padding: 0 10px !important;
      /* transform: none !important; */
    }

    .dx-calendar-body .dx-widget:first-child {
      border: 1px solid #ddd;
      border-top: 0;
      border-bottom: 0;
    }

    .dx-calendar-body table {
      width: calc(100% - 20px) !important;
    }

    .dx-calendar-navigator .dx-button-has-text .dx-button-text {
      width: 33%;
    }

    .dx-calendar-navigator > a:first-child,
    .dx-calendar-navigator > a:last-child {
      top: 140px;
      border: 0;
      border-radius: 0;
      background-color: rgb(230, 230, 230);
    }

    .dx-calendar-navigator .dx-calendar-caption-button {
      right: 36px !important;
      left: 36px !important;
      border-right: 0 !important;
      border-left: 0 !important;
    }

    .dx-calendar-cell.dx-calendar-empty-cell {
      cursor: pointer;
      background: none;
      color: inherit;
    }

    .dx-calendar-cell.dx-calendar-empty-cell.dx-state-hover,
    .dx-calendar-cell.dx-calendar-empty-cell.dx-state-active {
      color: inherit;
    }

    .dx-calendar-cell.dx-calendar-other-view {
      color: #b0b0b0;
    }

    .dx-calendar-contoured-date {
      /* outline-offset: 0; */
      box-shadow: none !important;
    }

    ///////////////////////////// year-picker /////////////////////////
    .report_picker > .year-picker {
      position: relative;
      outline: none;
      width: 168px;
      height:34px;
      list-style: none;
      font-size: 14px;
      text-align: left;
      background-color: #fff;
      background-clip: padding-box;
      line-height: 1.5;
      // transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      transition:;
      border: 1px solid #b7b7b7;
      border-radius: 0;
      
    }
    .report_picker > .year-picker input{
      text-align:center;
      color:black;
      width:100%;

      ::placeholder{
        color:white;
      } 
     
    }
     .report_picker > .year-picker i{
       display:none;
     }
     .report_picker > .year-picker i{
       display:none;
     }
     .report_picker > .year-picker .imput-wrapper-selected:hover > .input-icon-close{
       display:none;
     }

     .report_picker > .year-picker .picker-panel.popup-left {
       z-index:1;
     }
     .report.year-picker{
       width:40px;
       height:40px;
       border:none;
     }

     //////////////////////////// reportGrid ///////////////////////////////

     #reportGrid .dx-datagrid-nowrap .dx-header-row > td > .dx-datagrid-text-content {
      white-space: unset !important; 
      word-break: keep-all;
      // vertical-align: middle !important;
    }
     #reportGrid .dx-datagrid-nowrap {
       white-space: unset !important; 
  }
  #reportGrid .dx-header-row > td {
       white-space: unset !important ;
      //  vertical-align: middle !important;
  }
  #reportGrid .dx-datagrid-content .dx-datagrid-table .dx-row > td {
    // vertical-align: middle !important;
  } 
  #reportGrid .dx-datagrid-content .dx-datagrid-table .dx-row > td[role='columnheader'] {
    line-height: 1.4em;
  }

  #reportGrid .dx-datagrid .dx-row > td  {
    padding:5px;
  } 


     //////////////////////////// DevRadioGroup ////////////////////////////

     #user-activation {

     }

     #user-activation .dx-collection {
       display: flex;
       flex-direction: row;
       justify-content: center;
       align-items: center;
       background-color: rgb(237,237,237);
       border-radius: 4px;
       padding: 8px;
       height: 36px;
     }

     #user-activation .dx-collection .dx-radiobutton {
       flex: 1;
     }

     #user-activation .dx-collection .dx-radiobutton .dx-radio-value-container {
       display: inline-block;
     }

     #user-activation .dx-collection .dx-radiobutton .dx-item-content {
       display: inline-block;
       vertical-align: middle;
     }


     //////////////////////////// ManageUsers DatePicker ////////////////////////////

    .date-align-left {
      text-align: left !important;
      width: calc(100% - 18px) !important;
      height: 34px !important;
      padding: 0 9px;
      border-color: #ddd !important;
      border-radius: 4px;
   }

     //////////////////////////// ManageUsers Checkbox ////////////////////////////

     #user-validation-unlimit {
      margin-left: 5px;
      flex: 1;
     }

     #user-validation-unlimit .dx-checkbox-container {
       vertical-align: unset;
     }

     #user-validation-unlimit .dx-checkbox-icon {
       width: 12px;
       height: 12px;
     }

     #user-validation-unlimit.dx-checkbox-checked .dx-checkbox-icon {
       font-size: 10px;
     }

     #user-validation-unlimit .dx-checkbox-text {
       font-size: 0.5em;
       line-height: unset;
       vertical-align: unset;
       width: auto;
     }

    //////////////////////////// ENGINEER MENU DataGrid ////////////////////////////

    #for-engineer .dx-datagrid-headers,
    #for-engineer .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
       border-bottom-color: #b54549 !important;
     }

    #for-engineer .dx-datagrid-borders .dx-datagrid-rowsview,
    #for-engineer .dx-datagrid-headers + .dx-datagrid-rowsview {
       border-top-color: #b54549 !important;
     }

    #for-engineer .dx-datagrid-headers .dx-datagrid-table .dx-row > td {
      text-align: center !important;
      font-weight: bold;
      color: #333;
    }

    #for-engineer .dx-datagrid .dx-row > td {
      text-align: center !important;
    }

    #for-engineer .dx-datagrid-rowsview .dx-selection.dx-row > td,
    #for-engineer .dx-datagrid-rowsview .dx-selection.dx-row:hover > td,
    #for-engineer .dx-datagrid-rowsview .dx-selection.dx-row > tr > td,
    #for-engineer #for-engineer .dx-datagrid-rowsview .dx-selection.dx-row:hover > tr > td {
      background-color: rgb(181, 69, 73, 0.3);
      color: #b54549;
      font-weight: bold;
    }


    #chart-general {

    }

    #chart-general .dxc-legend > g {

    }

    ///////////////////////// ManageBuildings ///////////////////////////

    
    #buildingList .dx-scrollable-content > ul >li >.dx-treeview-toggle-item-visibility{
      width:30px;
      background-image: url('/img/tree_1depth.png');
      background-repeat: no-repeat;
      font:'';
      left: 0px;
      background-size: 20px 20px;
      background-position: center;
      
    }

    #graphic-treeview .dx-scrollable-content > ul >li > .dx-treeview-item,
    #buildingList .dx-scrollable-content > ul >li > .dx-treeview-item{
      padding:5px 20px;
      font-weight:bold;
    }

    #graphic-treeview-checkbox .dx-scrollable-content > ul >li > .dx-treeview-item{
      padding:5px 35px;
      font-weight:bold;
    }
    #graphic-treeview .dx-treeview-item,
    #buildingList .dx-treeview-item {
      padding:5px 10px;
    }

    #graphic-treeview-checkbox .dx-treeview-item {
      padding:5px 35px;
    }

    #buildingList .dx-scrollable-content > ul >li > .dx-treeview-toggle-item-visibility:before{
      content:'';
    }
    #graphic-treeview .dx-scrollable-content > ul >li >.dx-treeview-toggle-item-visibility,
    #graphic-treeview-checkbox .dx-scrollable-content > ul >li >.dx-treeview-toggle-item-visibility,
    #graphic-treeview .dx-treeview-toggle-item-visibility:before,
    #graphic-treeview-checkbox .dx-treeview-toggle-item-visibility:before,
    #buildingList .dx-treeview-toggle-item-visibility:before{
      color:#b54549;
    }
    #graphic-treeview .dx-treeview-toggle-item-visibility,
    #graphic-treeview-checkbox .dx-treeview-toggle-item-visibility,
    #buildingList .dx-treeview-toggle-item-visibility{
      width:30px;
    }

    #buildingList .dx-scrollable-content > ul >li > .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened {
      width:30px;
      background-image: url('/img/tree_1depth.png');
      background-repeat: no-repeat;
      font:'';
      left: 0px;
      background-size: 20px 20px;
      background-position: center;
    }

    #graphic-treeview .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened,
    #graphic-treeview-checkbox .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened,
    #buildingList .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened{
      width:30px;
    }
    #graphic-treeview .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened:before,
    #graphic-treeview-checkbox .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened:before,
    #buildingList .dx-treeview-toggle-item-visibility.dx-treeview-toggle-item-visibility-opened:before{
    }


    #graphic-treeview .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item,
    #graphic-treeview-checkbox .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item,
    #buildingList .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item {
      background-color:white;
    }
    #graphic-treeview .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item,
    #graphic-treeview-checkbox .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item,
    #buildingList .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item{
      background-color:white;
    }
    #graphic-treeview .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *,
    #graphic-treeview-checkbox .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *,
    #buildingList .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *{
      background-color:white;
      color:black;
      font-weight:bold;
    }

    #graphic-treeview  ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf,
    #graphic-treeview-checkbox ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf,
    #buildingList  ul  ul ul  .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf {
      background-image:url('/img/tree_3depth_off.png');
      background-position: 5px;
      background-repeat: no-repeat;

      > div > span{
        margin-left:10px;
      }
    }
    // #graphic-treeview  ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item,
    // #graphic-treeview-checkbox ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item,
    // #buildingList  ul  ul ul  .dx-treeview-item-without-checkbox.dx-treeview-node-is-leaf > .dx-treeview-item {
    //   background-image:url('/img/tree_3depth_off.png');
    //   background-position: left;
    //   background-repeat: no-repeat;

    //   > div > span{
    //     margin-left:10px;
    //   }
    // }

    #graphic-treeview ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused,
    #graphic-treeview-checkbox ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused,
    #buildingList ul  ul ul  .dx-treeview-item-without-checkbox.dx-state-focused {
      background-color:white;
      background-image:url('/img/tree_3depth_on.png');
      background-position: 5px;
      background-repeat: no-repeat;

      > div > span{
        margin-left:10px;
      }
    }
    // #graphic-treeview ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item,
    // #graphic-treeview-checkbox ul  ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item,
    // #buildingList ul  ul ul  .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item {
    //   background-color:white;
    //   background-image:url('/img/tree_3depth_on.png');
    //   background-position: left;
    //   background-repeat: no-repeat;

    //   > div > span{
    //     margin-left:10px;
    //   }
    // }

    #graphic-treeview ul  ul ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *,
    #graphic-treeview-checkbox ul  ul ul ul ul ul .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *,
    #buildingList ul  ul ul  .dx-treeview-item-without-checkbox.dx-state-focused > .dx-treeview-item *{
      background-color:white;
      color:#b54549;
      font-weight:bold;
    
    }

    #graphic-treeview .dx-treeview-item.dx-state-hover,
    #graphic-treeview-checkbox  .dx-treeview-item.dx-state-hover,
    #buildingList .dx-treeview-item.dx-state-hover {
      background-color: transparent;
    }

    #graphic-treeview-checkbox .dx-checkbox-checked .dx-checkbox-icon {
      color:#b54549
    }

    #graphic-treeview-checkbox .dx-checkbox-indeterminate .dx-checkbox-icon {
      color:#b54549
    }

    #graphic-treeview-checkbox .dx-checkbox.dx-state-hover .dx-checkbox-icon {
      border:1px solid #b54549
    }
    #graphic-treeview-checkbox .dx-treeview-item-with-checkbox.dx-state-focused > .dx-checkbox .dx-checkbox-icon {
      border:1px solid #b54549
    }
    

    ///////////////////////// ManageBuildings ///////////////////////////

    ///////////////////////// EMGINEER MENU TEXTBOX ///////////////////////////

    button:focus {
      outline:0;
    }

    .dx-texteditor.dx-state-readonly {
      border-color: transparent !important;
      background-color: rgb(237,237,237) !important;
    }

    .dx-texteditor.dx-state-readonly.dx-editor-filled.dx-state-hover {
      background-color: rgb(237,237,237) !important;
    }


    ///////////////////////// USERZONE COMfORTZONE ///////////////////////////

    div[id*='_temp.high'] input {
      color: red;
    }

    div[id*='_temp.low'] input {
      color: blue;
    }

    div[id*='_temp.'] {
      margin: 12px 0;
    }
    
  //////////////////////  REPORT  /////////////////////////////
  #pages {
    position: absolute;
    left:-10000px;
  }

  //////////////////////  UserZoneRegist  /////////////////////////////

  #userzone-regist-list, #facility-grid {
    > .dx-datagrid {
      padding: 10px;
      border-radius: 10px;
    }
  }


  //////////////////////////// reportGrid ///////////////////////////////

  #operation-grid .dx-datagrid-nowrap .dx-header-row > td > .dx-datagrid-text-content {
   white-space: unset !important; 
   word-break: keep-all;
   text-overflow:initial;
   min-width:100px;
    // vertical-align: middle !important;
 }
 #operation-grid .dx-datagrid-nowrap {
    white-space: unset !important; 
}
#operation-grid .dx-header-row > td {
    white-space: unset !important ;
    //  vertical-align: middle !important;
}
#operation-grid .dx-datagrid-content .dx-datagrid-table .dx-row > td {
  // vertical-align: middle !important;
} 
#operation-grid .dx-datagrid-content .dx-datagrid-table .dx-row > td[role='columnheader'] {
 line-height: 1.4em;
}

#operation-grid .dx-datagrid .dx-row > td  {
 padding:5px;
} 

`;

export default GlobalStyle;

import "/apogeejs-model-lib/src/webGlobals.js";
import "/apogeejs-model-lib/src/debugHook.js";

//expose these apogee libraries globally so plugins can use them
import apogeeutil from "/apogeejs-util-lib/src/apogeeUtilLib.js";
import * as apogeebase from "/apogeejs-base-lib/src/apogeeBaseLib.js";
import * as apogee from "/apogeejs-model-lib/src/apogeeModelLib.js";
import * as apogeeapp from "/apogeejs-app-lib/src/apogeeAppLib.js";
import * as apogeeui from "/apogeejs-ui-lib/src/apogeeUiLib.js";
import * as apogeeview from "/apogeejs-view-lib/src/apogeeViewLib.js";
import includePathInfo from "/apogeejs-web-runtime/includePathInfo.js";

export {default as ApogeeWebView} from "/apogeejs-web-runtime/src/ApogeeWebView.js";

//set lib globals (future - make these accessible through load module)
//__globals__._ = aogeeutil._; - add this later, depending on whether or not the user does not supress it
__globals__.apogeeutil = apogeeutil;
__globals__.apogeebase = apogeebase;
__globals__.apogee = apogee;
__globals__.apogeeapp = apogeeapp;
__globals__.apogeeui = apogeeui;
__globals__.apogeeview = apogeeview;

__globals__.addDataToModelGlobals("_",apogeeutil._,true); //use our version of lodash. Maybe we should give the user the option of replacing?
__globals__.addNameToModelGlobals("apogeeutil",true);
__globals__.addNameToModelGlobals("apogeebase",true);
__globals__.addNameToModelGlobals("apogee",true);
__globals__.addNameToModelGlobals("apogeeapp",true);
__globals__.addNameToModelGlobals("apogeeui",true);
__globals__.addNameToModelGlobals("apogeeview",true);

//implementation of global alert functions
__globals__.apogeeLog = (msg) => console.log(message);
__globals__.apogeeUserAlert = (msg) => apogeeui.showSimpleActionDialog(msg,null,["OK"]);
__globals__.apogeeUserConfirm = (msg,okText,cancelText,okAction,cancelAction,defaultToOk) => apogeeui.showSimpleActionDialog(msg,null,[okText,cancelText],[okAction,cancelAction]);
__globals__.apogeeUserConfirmSynchronous = (msg,okText,cancelText,defaultToOk) => confirm(msg);

__globals__.addNameToModelGlobals("apogeeLog",true);
__globals__.addNameToModelGlobals("apogeeUserAlert",true);
__globals__.addNameToModelGlobals("apogeeUserConfirm",true);

//initialize resource path
apogeeview.initIncludePath(includePathInfo);
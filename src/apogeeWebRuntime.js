import "/apogeejs-model-lib/src/webGlobals.js";
import "/apogeejs-model-lib/src/debugHook.js";

//expose these apogee libraries globally so plugins can use them
import apogeeutil from "/apogeejs-util-lib/src/apogeeUtilLib.js";
import * as apogeebase from "/apogeejs-base-lib/src/apogeeBaseLib.js";
import * as apogee from "/apogeejs-model-lib/src/apogeeModelLib.js";
import * as apogeeapp from "/apogeejs-app-lib/src/apogeeAppLib.js";
import * as apogeeui from "/apogeejs-ui-lib/src/apogeeUiLib.js";
import * as apogeeview from "/apogeejs-view-lib/src/apogeeViewLib.js";
import {APOGEE_BUNDLE_PATH} from "./bundleVersion.js";

__globals__.apogeeutil = apogeeutil;
__globals__.apogeebase = apogeebase;
__globals__.apogee = apogee;
__globals__.apogeeapp = apogeeapp;
__globals__.apogeeui = apogeeui;
__globals__.apogeeview = apogeeview;

export {default as ApogeeWebView} from "/apogeejs-web-runtime/src/ApogeeWebView.js";

//implementation of global alert functions
__globals__.apogeeUserAlert = (msg) => apogeeui.showSimpleActionDialog(msg,null,["OK"]);
__globals__.apogeeUserConfirm = (msg,okText,cancelText,okAction,cancelAction,defaultToOk) => apogeeui.showSimpleActionDialog(msg,null,[okText,cancelText],[okAction,cancelAction]);
__globals__.apogeeUserConfirmSynchronous = (msg,okText,cancelText,defaultToOk) => confirm(msg);

//initialize resource path
const INCLUDE_PATH_INFO = {
    "resources": APOGEE_BUNDLE_PATH + "/resources",
    "aceIncludes": APOGEE_BUNDLE_PATH + "/ace_includes"
};
apogeeview.initIncludePath(INCLUDE_PATH_INFO);
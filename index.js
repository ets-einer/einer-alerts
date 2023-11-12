"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alert = exports.useAlert = exports.useAlertStore = void 0;
const react_1 = require("@headlessui/react");
const clsx_1 = __importDefault(require("clsx"));
const zustand_1 = require("zustand");
const react_2 = __importDefault(require("react"));
exports.useAlertStore = (0, zustand_1.create)()((set) => ({
    alertText: '',
    alertTitle: '',
    isShowing: false,
    type: "Info",
    trigger: ({ duration = 2000, type = "Info", text, title }) => {
        set(_state => ({ alertText: text, alertTitle: title, type: type, isShowing: true }));
        setTimeout(() => {
            set(_state => ({ alertText: text, alertTitle: title, type: type, isShowing: false }));
        }, duration);
    }
}));
const useAlert = () => (0, exports.useAlertStore)(state => state.trigger);
exports.useAlert = useAlert;
const Alert = () => {
    const { alertText, alertTitle, isShowing, type } = (0, exports.useAlertStore)();
    return (react_2.default.createElement(react_1.Transition, { show: isShowing, enter: "transition ease-in-out duration-300 transform", enterFrom: "translate-x-full", enterTo: "-translate-x-0", leave: "transition ease-in-out duration-300 transform", leaveFrom: "-translate-x-0", leaveTo: "translate-x-full", className: (0, clsx_1.default)("border-l-4 z-[100] fixed right-6 bottom-4 w-1/4 rounded px-5 py-3 flex flex-col", {
            "border-blue-500 bg-blue-50 text-blue-900": type === "Info",
            "border-red-500 bg-red-100 text-red-900": type === "Error",
            "border-orange-500 bg-orange-50 text-orange-900": type === "Warning",
            "border-green-500 bg-green-100 text-green-900": type === "Success"
        }) },
        react_2.default.createElement("div", { className: "text font-bold" }, alertTitle),
        react_2.default.createElement("p", { className: "text-sm" }, alertText)));
};
exports.Alert = Alert;

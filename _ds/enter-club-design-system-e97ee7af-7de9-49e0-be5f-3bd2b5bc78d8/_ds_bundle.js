/* @ds-bundle: {"format":3,"namespace":"EnterClubDesignSystem_e97ee7","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"4d0d6e40f144","components/core/Badge.jsx":"1fa91d0dfcbe","components/core/Button.jsx":"5778f2be1204","components/core/Card.jsx":"e2fd8c2a8847","components/feedback/ProgressBar.jsx":"3685c08d1c32","components/forms/Input.jsx":"8e6c844e26bb","components/forms/Switch.jsx":"4d6a2915c37c","components/navigation/Tabs.jsx":"bc88f7c67c38","ui_kits/community/Community.jsx":"4fd9640394d0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EnterClubDesignSystem_e97ee7 = window.EnterClubDesignSystem_e97ee7 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar — circular member image with initials fallback and optional level ring.
 */
function Avatar({
  src = null,
  name = "",
  size = 44,
  ring = false,
  badge = null,
  style = {},
  ...rest
}) {
  const initials = name.split(" ").filter(Boolean).slice(0, 2).map(w => w[0]).join("").toUpperCase();

  // deterministic warm bg from name
  const palette = ["var(--rust-500)", "var(--olive-500)", "var(--rust-700)", "var(--olive-600)", "var(--rust-400)"];
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) % palette.length;
  const bg = palette[h];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: "relative",
      display: "inline-flex",
      flex: "none",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      overflow: "hidden",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      background: src ? "transparent" : bg,
      color: "var(--cream-100)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: size * 0.38,
      letterSpacing: "0.01em",
      boxShadow: ring ? "0 0 0 2px var(--bg-page), 0 0 0 4px var(--brand)" : "none",
      userSelect: "none"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "?"), badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -2,
      bottom: -2,
      minWidth: size * 0.42,
      height: size * 0.42,
      padding: "0 4px",
      borderRadius: "var(--radius-pill)",
      background: "var(--brand)",
      color: "#fff",
      border: "2px solid var(--bg-page)",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: size * 0.24,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      lineHeight: 1
    }
  }, badge));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge / pill label — for counts, statuses, categories.
 */
function Badge({
  children,
  tone = "brand",
  variant = "soft",
  size = "md",
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      solid: ["var(--brand)", "#fff"],
      soft: ["var(--rust-50)", "var(--rust-700)"]
    },
    olive: {
      solid: ["var(--olive-500)", "#fff"],
      soft: ["var(--olive-100)", "var(--olive-700)"]
    },
    neutral: {
      solid: ["var(--ink-700)", "#fff"],
      soft: ["var(--ink-100)", "var(--ink-700)"]
    },
    success: {
      solid: ["var(--color-success)", "#fff"],
      soft: ["#e6efe0", "#3f5733"]
    },
    warning: {
      solid: ["var(--color-warning)", "#fff"],
      soft: ["#f8ecd4", "#8a5d16"]
    },
    danger: {
      solid: ["var(--color-danger)", "#fff"],
      soft: ["#f4ddd9", "#8a2920"]
    }
  };
  const sizes = {
    sm: {
      padding: "2px 8px",
      fontSize: "11px",
      height: 20
    },
    md: {
      padding: "3px 11px",
      fontSize: "12px",
      height: 24
    }
  };
  const t = tones[tone] || tones.brand;
  const [bg, fg] = t[variant] || t.soft;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      background: bg,
      color: fg,
      padding: s.padding,
      height: s.height,
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: s.fontSize,
      lineHeight: 1,
      borderRadius: "var(--radius-pill)",
      letterSpacing: "0.01em",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: fg,
      opacity: 0.9
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Enter Club Button — friendly, rounded, terracotta-forward.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  type = "button",
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 14px",
      height: 36,
      fontSize: "var(--fs-sm)",
      gap: 7
    },
    md: {
      padding: "0 20px",
      height: 44,
      fontSize: "var(--fs-base)",
      gap: 8
    },
    lg: {
      padding: "0 28px",
      height: 54,
      fontSize: "var(--fs-lg)",
      gap: 10
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      border: "1.5px solid var(--brand)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--text-brand)",
      border: "1.5px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-brand)",
      border: "1.5px solid transparent",
      boxShadow: "none"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      border: "1.5px solid var(--accent)",
      boxShadow: "var(--shadow-sm)"
    },
    danger: {
      background: "var(--color-danger)",
      color: "#fff",
      border: "1.5px solid var(--color-danger)",
      boxShadow: "var(--shadow-sm)"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: "var(--ls-snug)",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.filter = "none";
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — warm surface container with optional cover image and hover lift.
 */
function Card({
  children,
  cover = null,
  coverHeight = 160,
  padding = "var(--space-5)",
  interactive = false,
  onClick,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: interactive && hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: interactive && hover ? "translateY(-2px)" : "translateY(0)",
      transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), cover && /*#__PURE__*/React.createElement("div", {
    style: {
      height: coverHeight,
      overflow: "hidden",
      background: "var(--rust-600)"
    }
  }, typeof cover === "string" ? /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : cover), /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/**
 * ProgressBar — course / level progress in brand terracotta.
 */
function ProgressBar({
  value = 0,
  max = 100,
  label = null,
  showValue = false,
  tone = "brand",
  size = "md",
  style = {}
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const colors = {
    brand: "var(--brand)",
    olive: "var(--accent)",
    success: "var(--color-success)"
  };
  const heights = {
    sm: 6,
    md: 10,
    lg: 14
  };
  const h = heights[size] || heights.md;
  const fill = colors[tone] || colors.brand;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 6,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-body)",
      fontWeight: 500
    }
  }, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)",
      fontWeight: 500
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: h,
      borderRadius: "var(--radius-pill)",
      background: "var(--cream-300)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      borderRadius: "var(--radius-pill)",
      background: fill,
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input / textarea with label, helper and error states.
 */
function Input({
  label = null,
  hint = null,
  error = null,
  type = "text",
  multiline = false,
  rows = 4,
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || "fld-" + Math.random().toString(36).slice(2, 8);
  const borderColor = error ? "var(--color-danger)" : focus ? "var(--brand)" : "var(--border-default)";
  const fieldStyle = {
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--fs-base)",
    color: "var(--text-strong)",
    background: "var(--surface-raised)",
    border: `1.5px solid ${borderColor}`,
    borderRadius: "var(--radius-md)",
    padding: multiline ? "12px 14px" : "0 14px",
    paddingLeft: iconLeft ? 40 : 14,
    height: multiline ? "auto" : 46,
    lineHeight: multiline ? "1.5" : "44px",
    outline: "none",
    boxShadow: focus ? "0 0 0 3px var(--rust-50)" : "none",
    transition: "border-color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    resize: multiline ? "vertical" : undefined,
    ...style
  };
  const Field = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex"
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 13,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)",
      display: "inline-flex",
      pointerEvents: "none"
    }
  }, iconLeft), /*#__PURE__*/React.createElement(Field, _extends({
    id: fieldId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: fieldStyle
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs)",
      color: error ? "var(--color-danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
/**
 * Switch — pill toggle in brand terracotta.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label = null,
  id,
  style = {}
}) {
  const fieldId = id || "sw-" + Math.random().toString(36).slice(2, 8);
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    id: fieldId,
    type: "button",
    role: "switch",
    "aria-checked": checked,
    onClick: toggle,
    disabled: disabled,
    style: {
      width: 44,
      height: 26,
      flex: "none",
      borderRadius: "var(--radius-pill)",
      border: "none",
      padding: 3,
      background: checked ? "var(--brand)" : "var(--ink-300)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background var(--dur-base) var(--ease-out)",
      display: "inline-flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      background: "#fff",
      boxShadow: "var(--shadow-sm)",
      transform: checked ? "translateX(18px)" : "translateX(0)",
      transition: "transform var(--dur-base) var(--ease-out)"
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-base)",
      color: "var(--text-body)"
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — underline-style segmented navigation.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  const [internal, setInternal] = React.useState(tabs[0]?.id);
  const active = value !== undefined ? value : internal;
  const select = id => {
    if (value === undefined) setInternal(id);
    if (onChange) onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      borderBottom: "1.5px solid var(--border-subtle)",
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      type: "button",
      onClick: () => select(t.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "10px 14px 12px",
        fontFamily: "var(--font-sans)",
        fontWeight: on ? 700 : 500,
        fontSize: "var(--fs-base)",
        color: on ? "var(--text-brand)" : "var(--text-muted)",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        transition: "color var(--dur-base) var(--ease-out)"
      }
    }, t.label, t.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500,
        color: on ? "var(--rust-500)" : "var(--text-muted)",
        background: on ? "var(--rust-50)" : "var(--ink-100)",
        borderRadius: "var(--radius-pill)",
        padding: "1px 7px"
      }
    }, t.count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: -1.5,
        height: 3,
        borderRadius: "3px 3px 0 0",
        background: "var(--brand)",
        transform: on ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "center",
        transition: "transform var(--dur-base) var(--ease-out)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/community/Community.jsx
try { (() => {
/* Enter Club — Community UI kit surfaces.
   Composes the design-system primitives (Button, Badge, Avatar, Card,
   Tabs, ProgressBar, Input) into real product views.
   All components are exported to window for the index.html app shell. */

const DS = window.EnterClubDesignSystem_e97ee7;
const {
  Button,
  Badge,
  Avatar,
  Card,
  Tabs,
  ProgressBar,
  Input
} = DS;

/* ---------- tiny inline icons (stroke, 1.6, currentColor) ---------- */
function Icon({
  d,
  size = 20,
  fill = "none"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      flex: "none"
    }
  }, d);
}
const Icons = {
  home: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 4l9 6.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V20h14V9.5"
  })),
  book: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M18 19H6"
  })),
  calendar: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4.5",
    width: "18",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 9h18M8 3v3M16 3v3"
  })),
  trophy: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 4h10v4a5 5 0 0 1-10 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M9 16h6M10 16v3M14 16v3M8 21h8"
  })),
  members: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "8",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 20a6 6 0 0 1 12 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 5.5a3 3 0 0 1 0 5.8M21 20a6 6 0 0 0-4-5.6"
  })),
  heart: /*#__PURE__*/React.createElement("path", {
    d: "M12 20s-7-4.5-9.5-8.5C1 8.5 2.5 5 6 5c2 0 3 1.2 4 2.5C11 6.2 12 5 14 5c3.5 0 5 3.5 3.5 6.5C19 15.5 12 20 12 20z"
  }),
  comment: /*#__PURE__*/React.createElement("path", {
    d: "M21 12a8 8 0 0 1-11.5 7.2L3 21l1.8-6.5A8 8 0 1 1 21 12z"
  }),
  pin: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 21v-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 3h6l-1 6 3 2H7l3-2-1-6z"
  })),
  search: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.2-3.2"
  })),
  play: /*#__PURE__*/React.createElement("path", {
    d: "M8 5.5v13l11-6.5z",
    fill: "currentColor",
    stroke: "none"
  }),
  check: /*#__PURE__*/React.createElement("path", {
    d: "m5 12 4.5 4.5L19 7"
  }),
  lock: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "5",
    y: "11",
    width: "14",
    height: "9",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 11V8a4 4 0 0 1 8 0v3"
  })),
  bell: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 19a2 2 0 0 0 4 0"
  })),
  plus: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }))
};

/* ---------- Top bar ---------- */
function TopBar({
  onSearch
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 18,
      padding: "0 24px",
      background: "var(--surface-raised)",
      borderBottom: "1px solid var(--border-subtle)",
      position: "sticky",
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/enter-club-logo.svg",
    alt: "Enter Club",
    style: {
      height: 34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      flex: "0 1 360px",
      marginLeft: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 12,
      top: "50%",
      transform: "translateY(-50%)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.search,
    size: 18
  })), /*#__PURE__*/React.createElement("input", {
    placeholder: "Buscar en la comunidad\u2026",
    style: {
      width: "100%",
      boxSizing: "border-box",
      height: 40,
      paddingLeft: 38,
      paddingRight: 14,
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--border-default)",
      background: "var(--bg-page)",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      color: "var(--text-strong)",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      alignItems: "center",
      gap: 14,
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "soft"
  }, "\uD83D\uDD25 12 d\xEDas"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.bell
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -3,
      right: -3,
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: "var(--brand)",
      border: "1.5px solid var(--surface-raised)"
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa Romero",
    size: 36,
    ring: true,
    badge: 3
  })));
}

/* ---------- Left nav ---------- */
function SideNav({
  active,
  onNav
}) {
  const items = [{
    id: "comunidad",
    label: "Comunidad",
    icon: Icons.home
  }, {
    id: "cursos",
    label: "Cursos",
    icon: Icons.book
  }, {
    id: "calendario",
    label: "Calendario",
    icon: Icons.calendar
  }, {
    id: "ranking",
    label: "Ranking",
    icon: Icons.trophy
  }, {
    id: "miembros",
    label: "Miembros",
    icon: Icons.members
  }];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 232,
      flex: "none",
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      onClick: () => onNav(it.id),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "11px 14px",
        border: "none",
        borderRadius: "var(--radius-md)",
        cursor: "pointer",
        textAlign: "left",
        background: on ? "var(--rust-50)" : "transparent",
        color: on ? "var(--text-brand)" : "var(--text-body)",
        fontFamily: "var(--font-sans)",
        fontWeight: on ? 700 : 500,
        fontSize: 15,
        transition: "background var(--dur-base) var(--ease-out)"
      },
      onMouseEnter: e => {
        if (!on) e.currentTarget.style.background = "var(--bg-page-alt)";
      },
      onMouseLeave: e => {
        if (!on) e.currentTarget.style.background = "transparent";
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      d: it.icon
    }), " ", it.label);
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18,
      padding: "0 4px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: ".06em",
      textTransform: "uppercase",
      color: "var(--text-muted)",
      marginBottom: 10,
      paddingLeft: 10
    }
  }, "Tu progreso"), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 10px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProgressBar, {
    value: 64,
    tone: "brand",
    label: "Direcci\xF3n",
    size: "sm",
    showValue: true
  }), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 30,
    tone: "olive",
    label: "Acci\xF3n",
    size: "sm",
    showValue: true
  }))));
}

/* ---------- Post composer ---------- */
function Composer({
  onPost
}) {
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");
  return /*#__PURE__*/React.createElement(Card, {
    padding: "16px",
    style: {
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      alignItems: open ? "flex-start" : "center"
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Luc\xEDa Romero",
    size: 42
  }), !open ? /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(true),
    style: {
      flex: 1,
      textAlign: "left",
      height: 44,
      padding: "0 16px",
      borderRadius: "var(--radius-pill)",
      border: "1.5px solid var(--border-default)",
      background: "var(--bg-page)",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-muted)"
    }
  }, "Comparte una victoria, una duda o un recurso\u2026") : /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("textarea", {
    autoFocus: true,
    value: text,
    onChange: e => setText(e.target.value),
    rows: 3,
    placeholder: "\xBFQu\xE9 has puesto en acci\xF3n hoy?",
    style: {
      width: "100%",
      boxSizing: "border-box",
      border: "1.5px solid var(--border-default)",
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      fontFamily: "var(--font-sans)",
      fontSize: 15,
      color: "var(--text-strong)",
      resize: "vertical",
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "olive",
    variant: "soft"
  }, "Acci\xF3n"), /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral",
    variant: "soft"
  }, "+ categor\xEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => {
      setOpen(false);
      setText("");
    }
  }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    disabled: !text.trim(),
    onClick: () => {
      onPost(text.trim());
      setText("");
      setOpen(false);
    }
  }, "Publicar"))))));
}

/* ---------- Post card ---------- */
function PostCard({
  post,
  onLike
}) {
  return /*#__PURE__*/React.createElement(Card, {
    padding: "0",
    style: {
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: post.author,
    size: 42,
    badge: post.level
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)",
      fontSize: 15
    }
  }, post.author), post.pinned && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.pin,
    size: 15
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, post.time)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: post.tag.tone,
    variant: "soft"
  }, post.tag.label))), post.title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 19,
      marginBottom: 6
    }
  }, post.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      lineHeight: 1.55,
      color: "var(--text-body)"
    }
  }, post.body)), post.cover && /*#__PURE__*/React.createElement("img", {
    src: post.cover,
    alt: "",
    style: {
      width: "100%",
      height: 200,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 20,
      padding: "12px 18px",
      borderTop: "1px solid var(--border-subtle)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onLike,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      border: "none",
      background: "none",
      cursor: "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500,
      color: post.liked ? "var(--brand)" : "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.heart,
    fill: post.liked ? "var(--brand)" : "none",
    size: 19
  }), " ", post.likes), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 7,
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.comment,
    size: 19
  }), " ", post.comments)));
}

/* ---------- Right rail ---------- */
function RightRail() {
  const leaders = [{
    name: "Marco Díaz",
    pts: 1840,
    lvl: 6
  }, {
    name: "Ana Polo",
    pts: 1605,
    lvl: 5
  }, {
    name: "Javier Ruiz",
    pts: 1422,
    lvl: 5
  }, {
    name: "Lucía Romero",
    pts: 1290,
    lvl: 3
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 300,
      flex: "none",
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "0"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/portada-direccion.png",
    alt: "",
    style: {
      width: "100%",
      height: 120,
      objectFit: "cover",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      marginBottom: 4
    }
  }, "Enter Club"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 12px",
      fontSize: 13.5,
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, "J\xF3venes que han hecho click y construyen una vida m\xE1s libre. Entre iguales, sin gur\xFAs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      marginBottom: 14
    }
  }, [["2.4k", "Miembros"], ["38", "En línea"], ["12", "Cursos"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 17,
      color: "var(--text-strong)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, l)))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Invitar a un amigo"))), /*#__PURE__*/React.createElement(Card, {
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.trophy,
    size: 18
  })), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Ranking semanal")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, leaders.map((m, i) => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      fontWeight: 700,
      color: i === 0 ? "var(--brand)" : "var(--text-muted)",
      fontSize: 14
    }
  }, i + 1), /*#__PURE__*/React.createElement(Avatar, {
    name: m.name,
    size: 32,
    badge: m.lvl
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-body)"
    }
  }, m.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontSize: 13,
      fontWeight: 700,
      color: "var(--text-brand)"
    }
  }, m.pts))))));
}

/* ---------- Classroom (courses) ---------- */
function Classroom({
  onOpen
}) {
  const courses = [{
    id: "direccion",
    title: "Dirección",
    sub: "Saber a dónde vas",
    cover: "../../assets/illustrations/portada-direccion.png",
    progress: 64,
    modules: 8,
    tag: {
      tone: "brand",
      label: "En curso"
    }
  }, {
    id: "accion",
    title: "Acción",
    sub: "De saber a hacer",
    cover: "../../assets/illustrations/portada-accion.png",
    progress: 30,
    modules: 10,
    tag: {
      tone: "olive",
      label: "En curso"
    }
  }, {
    id: "mentalidad",
    title: "Mentalidad",
    sub: "Pensar en libre",
    cover: null,
    progress: 100,
    modules: 6,
    tag: {
      tone: "success",
      label: "Completado"
    }
  }, {
    id: "dinero",
    title: "Dinero",
    sub: "Primeros ingresos",
    cover: null,
    progress: 0,
    modules: 12,
    locked: true,
    tag: {
      tone: "neutral",
      label: "Bloqueado"
    }
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      marginBottom: 6
    }
  }, "Cursos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      color: "var(--text-muted)"
    }
  }, "Convierte el conocimiento en acci\xF3n real. Avanza m\xF3dulo a m\xF3dulo.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: 18
    }
  }, courses.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.id,
    interactive: !c.locked,
    onClick: () => !c.locked && onOpen(c),
    padding: "0",
    style: {
      opacity: c.locked ? 0.72 : 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 150,
      background: c.cover ? "var(--rust-600)" : "var(--olive-200)",
      position: "relative",
      overflow: "hidden"
    }
  }, c.cover ? /*#__PURE__*/React.createElement("img", {
    src: c.cover,
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 30,
      color: "var(--olive-700)"
    }
  }, c.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: c.tag.tone,
    variant: "solid"
  }, c.tag.label)), c.locked && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--cream-100)",
      background: "rgba(42,29,18,.35)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.lock,
    size: 30
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      marginBottom: 2
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 14px",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, c.sub, " \xB7 ", c.modules, " m\xF3dulos"), !c.locked && /*#__PURE__*/React.createElement(ProgressBar, {
    value: c.progress,
    tone: c.progress === 100 ? "success" : "brand",
    showValue: true,
    size: "sm"
  }), c.locked && /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true
  }, "Desbloquear nivel 4"))))));
}

/* ---------- Course detail (lesson view) ---------- */
function CourseDetail({
  course,
  onBack
}) {
  const [active, setActive] = React.useState(0);
  const lessons = [{
    t: "Bienvenida: por qué la dirección lo es todo",
    done: true,
    dur: "6 min"
  }, {
    t: "Tu brújula personal: valores y no-negociables",
    done: true,
    dur: "14 min"
  }, {
    t: "Diseña tu destino a 12 meses",
    done: true,
    dur: "18 min"
  }, {
    t: "El mapa: de la visión a los hitos",
    done: false,
    dur: "16 min"
  }, {
    t: "Revisión semanal y ajuste de rumbo",
    done: false,
    dur: "11 min"
  }];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "var(--text-brand)",
      fontFamily: "var(--font-sans)",
      fontWeight: 500,
      fontSize: 14,
      marginBottom: 16,
      display: "inline-flex",
      gap: 6
    }
  }, "\u2190 Volver a cursos"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 22,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-md)",
      marginBottom: 18,
      position: "relative",
      background: "var(--rust-700)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: course.cover || "../../assets/illustrations/portada-direccion.png",
    alt: "",
    style: {
      width: "100%",
      height: 280,
      objectFit: "cover",
      display: "block",
      opacity: .92
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 68,
      height: 68,
      borderRadius: "50%",
      background: "var(--cream-100)",
      color: "var(--brand)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "var(--shadow-lg)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: Icons.play,
    size: 30
  })))), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    variant: "soft"
  }, "M\xF3dulo 1"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      margin: "10px 0 8px"
    }
  }, course.title, " \u2014 ", course.sub), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--text-body)"
    }
  }, "Antes de correr, hay que saber a d\xF3nde vas. En este m\xF3dulo defines tu direcci\xF3n: tus valores, tu destino a 12 meses y el mapa de hitos que convierte la intenci\xF3n en un plan que de verdad sigues.")), /*#__PURE__*/React.createElement(Card, {
    padding: "16px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 15,
      fontWeight: 700
    }
  }, "Lecciones"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-muted)"
    }
  }, "3 / ", lessons.length)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 4
    }
  }, lessons.map((l, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    onClick: () => setActive(i),
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      padding: "10px 10px",
      textAlign: "left",
      border: "none",
      borderRadius: "var(--radius-sm)",
      cursor: "pointer",
      background: i === active ? "var(--rust-50)" : "transparent",
      fontFamily: "var(--font-sans)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      flex: "none",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: l.done ? "var(--color-success)" : "var(--cream-300)",
      color: l.done ? "#fff" : "var(--text-muted)"
    }
  }, l.done ? /*#__PURE__*/React.createElement(Icon, {
    d: Icons.check,
    size: 14
  }) : /*#__PURE__*/React.createElement(Icon, {
    d: Icons.play,
    size: 12
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 13.5,
      fontWeight: i === active ? 700 : 500,
      color: i === active ? "var(--text-brand)" : "var(--text-body)",
      lineHeight: 1.3
    }
  }, l.t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: "var(--text-muted)"
    }
  }, l.dur)))))));
}

/* ---------- Login ---------- */
function Login({
  onEnter
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: 380
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logos/enter-club-logo.svg",
    alt: "Enter Club",
    style: {
      height: 48,
      marginBottom: 28
    }
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 36,
      marginBottom: 8
    }
  }, "Has hecho click."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "0 0 28px",
      fontSize: 16,
      color: "var(--text-muted)",
      lineHeight: 1.55
    }
  }, "Entra al club donde el conocimiento se convierte en acci\xF3n. Entre iguales, sin gur\xFAs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    placeholder: "tu@correo.com",
    defaultValue: "lucia@correo.com"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Contrase\xF1a",
    type: "password",
    defaultValue: "enterclub"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onEnter
  }, "Entrar al club"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      textAlign: "center",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, "\xBFA\xFAn no eres miembro? ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onEnter();
    }
  }, "\xDAnete gratis"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rust-600)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 30,
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/illustrations/portada-accion.png",
    alt: "",
    style: {
      width: "100%",
      maxWidth: 520,
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)"
    }
  })));
}
Object.assign(window, {
  EC_TopBar: TopBar,
  EC_SideNav: SideNav,
  EC_Composer: Composer,
  EC_PostCard: PostCard,
  EC_RightRail: RightRail,
  EC_Classroom: Classroom,
  EC_CourseDetail: CourseDetail,
  EC_Login: Login,
  EC_Tabs: Tabs
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/community/Community.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

export const ZOOM_CONFIGS = {
  DEFAULT_MIN_ZOOM: 0.1,
  DEFAULT_MAX_ZOOM: 4,
  FIT_TO_VIEW_MAX_ZOOM: 1,
  ZOOM_RATIO: 0.00001,
  TIME_FRAME: 500,
  INITIAL_POSITION_X: 0,
  INITIAL_POSITION_Y: 0,
  SCROLL_POS_RATIO: 3,
  LAYOUT_FALLBACK: 500,
  DEFAULT_LAYOUT: 4000,
  INITIAL_SCROLLBAR_SIZE: 50,
  MIN_SCROLLBAR_SIZE: 15,
  SCROLL_DELTA_DIFF: 1.5,
  NODE_Y_OFFSET: 110,
};

export const ZOOM_CONTROLS = {
  ZOOM_IN: "zoom-in",
  ZOOM_OUT: "zoom-out",
  FIT_TO_VIEW: "fit-to-view",
  FIT_TO_HUNDRED: "fit-to-100",
};

export const COMPONENT_POSITIONS = {
  TOP_LEFT: "top-left",
  TOP_RIGHT: "top-right",
  BOTTOM_LEFT: "bottom-left",
  BOTTOM_CENTER: "bottom-center",
};

export const SCROLL_NODE_POSITIONS = {
  ...COMPONENT_POSITIONS,
  TOP_CENTER: "top-center",
  BOTTOM_RIGHT: "bottom-right",
  CENTER_LEFT: "center-left",
  CENTER_RIGHT: "center-right",
  CENTER_CENTER: "center-center",
};

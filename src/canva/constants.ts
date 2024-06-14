export const ZOOM_KEY_CODES = {
  ZOOM_IN: 187,
  ZOOM_OUT: 189,
  ZOOM_IN_2: 61,
  ZOOM_OUT_2: 173,
  FIT_TO_VIEW: 48,
  FIT_TO_HUNDRED: 49,
};

export const isSafari = /^((?!chrome|android).)*safari/i.test(
  navigator.userAgent
);
export const TIME_TO_WAIT = isSafari ? 600 : 300;
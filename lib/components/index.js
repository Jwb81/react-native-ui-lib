module.exports = {
  get HighlighterOverlayView() { return require('./HighlighterOverlayView').default; },
  get SafeAreaSpacerView() { return require('./SafeArea/SafeAreaSpacerView').default; },
  get WheelPicker() { return require('./WheelPicker').default; },
  get SafeAreaInsetsManager() { return require('./SafeArea/SafeAreaInsetsManager').default; },
  get KeyboardAwareInsetsView() { return require('./KeyboardTracking/KeyboardAwareInsetsView').default; },
  get KeyboardTrackingView() { return require('./KeyboardTracking/KeyboardTrackingView').default; },
  get KeyboardRegistry() { return require('./KeyboardInput').KeyboardRegistry; },
  get KeyboardAccessoryView() { return require('./KeyboardInput').KeyboardAccessoryView; },
  get KeyboardUtils() { return require('./KeyboardInput').KeyboardUtils; },
};

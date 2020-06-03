export default function drawer(state = { openDrawer: false }, action) {
  switch (action.type) {
    case 'SHOW_DRAWER':
      return { openDrawer: true };
    case 'CLOSE_DRAWER':
      return { openDrawer: false };
    default:
      return state;
  }
}

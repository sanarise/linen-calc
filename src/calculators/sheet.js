export default (json) => {
  return {
    type: 'sheet',
    along: json.width,
    across: json.height,
  };
};

const getDefaultMatrix = (width, height) => {
  return Array(width * height).fill(false);
};

const getDefaultFrames = (width, height) => {
  return Array(8).fill(getDefaultMatrix(width, height));
};

export { getDefaultMatrix, getDefaultFrames };

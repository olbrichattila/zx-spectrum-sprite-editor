const convertToArrayBlock = (data, elementCount) => {
  let counter = 0;
  let index = 0;
  const list = [...data];
  const result = [];

  while (list.length > 0) {
    if (counter === elementCount) {
      counter = 0;
      index++;
    }
    if (counter === 0) {
      result[index] = [];
    }

    result[index].push(list.shift());
    counter++;
  }

  return result;
};

const rotateSpriteData = (frame, frameId, width) => {
  const frameLines = convertToArrayBlock(frame, width);
  return frameLines.reduce((rotatedFrameLine, frameLine) => {
    return [
      ...rotatedFrameLine,
      ...[
        ...Array(frameId).fill(false),
        ...frameLine,
        ...Array(8 - frameId).fill(false),
      ],
    ];
  }, []);
};

const getSpriteData = (frames, width) => {
  const frameBeakdown = frames.map((frame, frameId) => {
    const rotatedSpriteData = rotateSpriteData(frame, frameId, width);
    return convertToArrayBlock(
      convertToArrayBlock(rotatedSpriteData, 8),
      Math.floor(width / 8) + 1
    );
  });

  return frameBeakdown.map((frame) => {
    return frame.map((lines) => {
      return (
        "db " +
        lines
          .map((bytes) => {
            return (
              "%" +
              bytes
                .map((byte) => {
                  return byte ? "1" : "0";
                })
                .join("")
            );
          })
          .join(",")
      );
    });
  });
};

const convertSpriteDataToText = (spriteName, spriteData) => {
  return spriteData.reduce((resultText, lines, index) => {
    const spriteLines = lines.reduce((resultText, line) => {
      return `${resultText}${line}\n`;
    }, "");

    resultText = `${resultText}${
      spriteName.length ? spriteName : "frame"
    }${index}:\n${spriteLines}\n`;

    return resultText;
  }, "");
};

const isNewFrame = (line) => {
  return /^.{1,}:/.test(line);
};

const isDataLine = (line) => {
  return /[db|DB]\s/.test(line);
};

const getDataLineAsArray = (line) => {
  return [...line].reduce((resultArray, character) => {
    if (character === "0") {
      resultArray.push(false);
    }
    if (character === "1") {
      resultArray.push(true);
    }

    return resultArray;
  }, []);
};

const parseSpriteData = (textData) => {
  let frameIndex = -1;
  let lineArray;
  let unrotatedArray;
  let lineData = [];
  const lines = textData.split("\n");

  for (var key in lines) {
    if (isNewFrame(lines[key])) {
      frameIndex++;
      lineData[frameIndex] = [];
    }

    if (frameIndex >= 0 && isDataLine(lines[key])) {
      lineArray = getDataLineAsArray(lines[key]);
      unrotatedArray = lineArray.splice(frameIndex, lineArray.length - 8);
      lineData[frameIndex] = [...lineData[frameIndex], ...unrotatedArray];
    }
  }

  return lineData;
};

export { getSpriteData, convertSpriteDataToText, parseSpriteData };

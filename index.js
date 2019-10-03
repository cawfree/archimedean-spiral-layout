const defaultOptions = {
  angle: 0,
  a: 10,
  b: 10,
  increment: 0.1,
  padding: 5,
};

const collision = ([x1, y1, r1], [x2, y2, r2], padding) => (
  ((x2-x1) * (x2-x1)) + ((y1-y2) * (y1-y2)) <= ((r1+r2) * (r1+r2) + padding)
);

const hasCollisions = (objects, e, padding) => objects
  .reduce(
    (didCollide, o) => (didCollide || collision(o, e, padding)),
    false,
  );

module.exports = (
  bounds,
  objects = [],
  toPlace = [],
  options,
) => {
  const {
    objects: results,
  } = toPlace
    .reduce(
      ({ ...extras }, radius) => {
        const { angle: lastAngle, a, b, increment, padding, objects } = extras;
        const cx = ((bounds[2] - bounds[0]) * 0.5) + bounds[0];
        const cy = ((bounds[3] - bounds[1]) * 0.5) + bounds[1];
        for (let i = 0; i < Number.MAX_VALUE; i += 1) {
          const angle = lastAngle + (i * increment);
          const x = cx + (a + b * angle) * Math.cos(angle);
          const y = cy + (a + b * angle) * Math.sin(angle);
          if (!hasCollisions(objects, [x, y, radius], padding)) {
            return {
              ...extras,
              angle,
              objects: [
                ...objects,
                [
                  x,
                  y,
                  radius,
                ]
              ],
            };
          }
        }
      },
      {
        ...defaultOptions,
        ...(options || {}),
        objects: [
          ...objects,
        ],
      },
    );  
  return results
    .filter(
      (e, i) => (i >= objects.length),
    )
    .map(
      ([ x, y ]) => ([ x, y ]),
    );
};

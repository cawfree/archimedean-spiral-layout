# archimedean-spiral-layout
An algorithm that can be used to place items collision-free within a bounding box that contains obstacles.

## 🚀 Getting Started

Using [`npm`]():

```sh
npm install --save archimedean-spiral-layout
```

Using [`yarn`]():

```sh
yarn add archimedean-spiral-layout
```

## ✍️ Example

```javascript
import shouldLayout from 'archimedean-spiral-layout';

const bounds = [ 0, 0, 1024, 768 ]; // x, y, (x + w), (y + h)

const obstacles = [
  [ 120, 402, 78 ], // x1, y1, r1
  [ 453, 329, 39 ], // x2, y2, r2
];

const objectsToPlace = [ 205, 404, 90 ]; // r1, r2, r3

shouldLayout(bounds, obstacles, objectsToPlace);  // [[701.9283498160538,335.5931622996223],[478.3142838715479,911.9263893090715],[40.82310481594527,645.7505175634124]]
```

## ✌️  License
[MIT](https://opensource.org/licenses/MIT)

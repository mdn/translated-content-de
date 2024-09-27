---
title: "OrientationSensor: populateMatrix()-Methode"
short-title: populateMatrix()
slug: Web/API/OrientationSensor/populateMatrix
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`populateMatrix()`**-Methode der
[`OrientationSensor`](/de/docs/Web/API/OrientationSensor)-Schnittstelle füllt die gegebene Zielmatrix mit der Rotationsmatrix basierend auf der neuesten Sensorablesung. Die Rotationsmatrix ist unten gezeigt.

![Die Formeln zur Umwandlung des Quaternions des Sensors in die bereitgestellte Matrix.](quaternion_to_rotation_matrix.png)

wobei:

- W = cos(θ/2)
- X = Vx \* sin(θ/2)
- Y = Vy \* sin(θ/2)
- Z = Vz \* sin(θ/2)

## Syntax

```js-nolint
populateMatrix(targetMatrix)
```

Da [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) eine Basisklasse ist, kann `populateMatrix`
nur aus einer ihrer abgeleiteten Klassen gelesen werden.

### Parameter

- `targetMatrix`
  - : TBD

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

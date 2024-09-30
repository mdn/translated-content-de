---
title: "OrientationSensor: quaternion-Eigenschaft"
short-title: quaternion
slug: Web/API/OrientationSensor/quaternion
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die **`quaternion`** schreibgeschützte Eigenschaft des [`OrientationSensor`](/de/docs/Web/API/OrientationSensor)-Interfaces gibt ein vier Elemente umfassendes {{jsxref('Array')}} zurück, dessen Elemente die Komponenten des Einheits-[Quaternions](/de/docs/Glossary/quaternion) enthalten, das die Orientierung des Geräts darstellt.

Da [`OrientationSensor`](/de/docs/Web/API/OrientationSensor) eine Basisklasse ist, kann `quaternion` nur von einer ihrer abgeleiteten Klassen gelesen werden.

## Wert

Ein {{jsxref('Array')}}, dessen Werte die x-, y-, z- und w-Komponenten des Quaternions sind, das die Geräteorientierung darstellt.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

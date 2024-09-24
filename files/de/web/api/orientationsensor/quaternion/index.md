---
title: "OrientationSensor: quaternion-Eigenschaft"
short-title: quaternion
slug: Web/API/OrientationSensor/quaternion
l10n:
  sourceCommit: 4ea748e5f025c2a00a8ca8babd7c505e73ad9def
---

{{securecontext_header}}{{APIRef("Sensor API")}}

Die schreibgeschützte Eigenschaft **`quaternion`** der {{domxref("OrientationSensor")}}-Schnittstelle gibt ein vier Elemente umfassendes {{jsxref('Array')}} zurück, dessen Elemente die Komponenten des Einheits-{{Glossary("quaternion")}} enthalten, der die Orientierung des Geräts repräsentiert.

Da {{domxref('OrientationSensor')}} eine Basisklasse ist, kann `quaternion` nur von einer ihrer abgeleiteten Klassen gelesen werden.

## Wert

Ein {{jsxref('Array')}}, dessen Werte die x-, y-, z- und w-Komponenten des Quaternions sind, das die Orientierung des Geräts darstellt.

## Beispiele

```js
// TBD
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

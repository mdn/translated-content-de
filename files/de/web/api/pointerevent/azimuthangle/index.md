---
title: "PointerEvent: azimuthAngle-Eigenschaft"
short-title: azimuthAngle
slug: Web/API/PointerEvent/azimuthAngle
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die **`azimuthAngle`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Winkel zwischen der Y-Z-Ebene und der Ebene darstellt, die sowohl die Achse des Transducers (Zeiger oder Stift) als auch die Y-Achse enthält.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur ein Werteset für die Orientierung des Transducers relativ zur Bildebene des Bildschirms erhalten — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltx) und [`tiltY`](/de/docs/Web/API/PointerEvent/tilty) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und `azimuthAngle`.

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](azimuth_altitude_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft siehe [Abbildung 5 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_azimuthAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `2π`, wobei `0` einen Transducer darstellt, dessen Spitze in die Richtung der zunehmenden X-Werte zeigt (zeigt auf "3 Uhr", wenn man von oben schaut) auf der X-Y-Ebene, und die Werte steigen progressiv an, wenn man im Uhrzeigersinn geht (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

Wenn der Transducer senkrecht zur Oberfläche steht ([`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) von `π/2`), ist der Wert 0. Bei Hardware und Plattformen, die keine Neigungs- oder Winkelwerte melden, beträgt der Wert `0`.

## Beispiel

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    process_angles(event.altitudeAngle, event.azimuthAngle);
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)

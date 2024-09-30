---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die **`altitudeAngle`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces ist eine schreibgeschützte Eigenschaft, die den Winkel zwischen einer Übertragungsachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräts darstellt. Der Höhenwinkel beschreibt, ob der Transducer senkrecht zum Bildschirm, parallel oder in einem Zwischenausschnitt ist.

Je nach spezifischer Hardware und Plattform erhalten Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung der Übertragungsachse relativ zur Bildebene — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltx) und [`tiltY`](/de/docs/Web/API/PointerEvent/tilty) oder `altitudeAngle` und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Darstellung dieser Eigenschaft siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel in Radianten zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) ist und `π/2` senkrecht zur Oberfläche ist. Standardmäßig `π/2` (senkrecht zur Oberfläche), was sich von der [`altitudeAngle` in Touch-Events](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, die standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keinen Neigungs- oder Winkelbericht geben, beträgt der Wert `π/2`.

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

- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)

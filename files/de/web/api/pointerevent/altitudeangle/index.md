---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`altitudeAngle`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle repräsentiert den Winkel zwischen der Achse eines Transducers (zeigende Vorrichtung oder Stift) und der X-Y-Ebene eines Geräteschirms. Der Höhenwinkel beschreibt, ob der Transducer senkrecht zum Bildschirm, parallel oder in einem Winkel dazwischen steht.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur ein Set von Werten für die Ausrichtung des Transducers relativ zur Bildschirmebene erhalten — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltx) und [`tiltY`](/de/docs/Web/API/PointerEvent/tilty) oder `altitudeAngle` und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft, siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel im Bogenmaß zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) und `π/2` senkrecht zur Oberfläche ist. Standardmäßig ist der Wert `π/2` (senkrecht zur Oberfläche), was sich von dem [`altitudeAngle` in Touch-Ereignissen](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, das standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keine Neigung oder Winkel melden, beträgt der Wert `π/2`.

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

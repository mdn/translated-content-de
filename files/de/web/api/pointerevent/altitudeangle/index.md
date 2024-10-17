---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`altitudeAngle`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräteschirms. Der Höhenwinkel beschreibt, ob der Transducer senkrecht zum Bildschirm, parallel oder in einem Winkel dazwischen ist.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Transducerausrichtung relativ zur Bildschirmebene erhalten — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder `altitudeAngle` und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Darstellung dieser Eigenschaft, siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) und `π/2` senkrecht zur Oberfläche ist. Der Standardwert ist `π/2` (senkrecht zur Oberfläche), was sich von der [`altitudeAngle` in Touch-Ereignissen](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, die standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keine Neigung oder Winkel melden, beträgt der Wert `π/2`.

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

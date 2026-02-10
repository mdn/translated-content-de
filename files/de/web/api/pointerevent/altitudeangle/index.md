---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`altitudeAngle`** des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräteschirms. Der Höhenwinkel beschreibt, ob der Transducer senkrecht zum Bildschirm, parallel oder in einem Zwischenwinkel ist.

Abhängig von der spezifischen Hardware und Plattform erhalten Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Transducers relativ zur Bildschirmebene - entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder `altitudeAngle` und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft, siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) ist und `π/2` senkrecht zur Oberfläche steht. Der Standardwert ist `π/2` (senkrecht zur Oberfläche), was sich vom [`altitudeAngle` in Touch-Ereignissen](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, der standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keine Neigung oder Winkel melden, ist der Wert `π/2`.

## Beispiel

```js
someElement.addEventListener("pointerdown", (event) => {
  process_angles(event.altitudeAngle, event.azimuthAngle);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)
- [`Touch.altitudeAngle`](/de/docs/Web/API/Touch/altitudeAngle)

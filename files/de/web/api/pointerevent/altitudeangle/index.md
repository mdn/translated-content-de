---
title: "PointerEvent: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/PointerEvent/altitudeAngle
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`altitudeAngle`** schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces repräsentiert den Winkel zwischen der Achse eines Transducers (einem Eingabegerät oder Stylus) und der X-Y-Ebene eines Gerätes Bildschirms. Der Höhenwinkel beschreibt, ob der Transducer senkrecht zum Bildschirm, parallel oder in einem Winkel dazwischen steht.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Transducers relativ zur Bildschirmebene erhalten — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder `altitudeAngle` und [`azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle).

![Der Azimutwinkel eines Pointers im Vergleich zum Höhenwinkel](./azimuth_altitude_angles.svg)

Für eine zusätzliche Illustration dieser Eigenschaft, siehe [Abbildung 4 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_altitudeAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) ist und `π/2` senkrecht zur Oberfläche. Standardmäßig ist der Wert `π/2` (senkrecht zur Oberfläche), was sich von der [`altitudeAngle` in Touch Events](https://w3c.github.io/touch-events/#dom-touch-altitudeangle) unterscheidet, welche standardmäßig `0` (parallel zur Oberfläche) ist. Für Hardware und Plattformen, die keine Neigung oder Winkel melden, ist der Wert `π/2`.

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

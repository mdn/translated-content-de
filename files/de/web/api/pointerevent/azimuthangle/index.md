---
title: "PointerEvent: azimuthAngle Eigenschaft"
short-title: azimuthAngle
slug: Web/API/PointerEvent/azimuthAngle
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`azimuthAngle`** schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent) Schnittstelle stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transducers (Zeiger oder Stift) als auch die Y-Achse enthält.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Transducerausrichtung relativ zur Bildschirmebene empfangen — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und `azimuthAngle`.

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](azimuth_altitude_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 5 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_azimuthAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `2π`, wobei `0` einen Transducer darstellt, dessen Kappe in die Richtung der zunehmenden X-Werte zeigt (zeigt auf "3 Uhr", wenn man direkt nach unten schaut) in der X-Y-Ebene, und die Werte nehmen im Uhrzeigersinn zu (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

Wenn der Transducer senkrecht zur Oberfläche ist ([`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) von `π/2`), ist der Wert 0.
Für Hardware und Plattformen, die Neigung oder Winkel nicht melden, ist der Wert `0`.

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

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX)
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY)

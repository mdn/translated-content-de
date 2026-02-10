---
title: "PointerEvent: azimuthAngle-Eigenschaft"
short-title: azimuthAngle
slug: Web/API/PointerEvent/azimuthAngle
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{ APIRef("Pointer Events") }}

Die **`azimuthAngle`** schreibgeschützte Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (Zeiger oder Stift) als auch die Y-Achse enthält.

Abhängig von der spezifischen Hardware und Plattform werden Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Transducers relativ zur Bildebene erhalten — entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und `azimuthAngle`.

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](azimuth_altitude_angles.svg)

Für eine weitere Veranschaulichung dieser Eigenschaft siehe [Abbildung 5 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_azimuthAngle).

## Wert

Ein Winkel in Bogenmaß zwischen `0` und `2π`, wobei `0` einen Transducer repräsentiert, dessen Spitze in Richtung zunehmender X-Werte zeigt (zeigt auf "3 Uhr", wenn man direkt von oben schaut) auf der X-Y-Ebene, und die Werte erhöhen sich progressiv im Uhrzeigersinn (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

Wenn der Transducer senkrecht zur Oberfläche ist ([`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) von `π/2`), liegt der Wert bei 0.
Für Hardware und Plattformen, die Neigungs- oder Winkelinformationen nicht melden, beträgt der Wert `0`.

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
- [`Touch.azimuthAngle`](/de/docs/Web/API/Touch/azimuthAngle)

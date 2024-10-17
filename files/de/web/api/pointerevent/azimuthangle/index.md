---
title: "PointerEvent: azimuthAngle-Eigenschaft"
short-title: azimuthAngle
slug: Web/API/PointerEvent/azimuthAngle
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ APIRef("Pointer Events") }}

Die **`azimuthAngle`** schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducer-(Zeiger oder Stift-)Achse als auch die Y-Achse enthält.

Je nach spezifischer Hardware und Plattform erhalten Benutzeragenten wahrscheinlich nur einen Satz von Werten für die Orientierung des Transducers relativ zur Bildebene – entweder [`tiltX`](/de/docs/Web/API/PointerEvent/tiltX) und [`tiltY`](/de/docs/Web/API/PointerEvent/tiltY) oder [`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) und `azimuthAngle`.

![Der Azimuthwinkel eines Zeigers im Vergleich zum Höhenwinkel](azimuth_altitude_angles.svg)

Für eine zusätzliche Darstellung dieser Eigenschaft siehe [Abbildung 5 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_azimuthAngle).

## Wert

Ein Winkel in Radiant zwischen `0` und `2π`, wobei `0` einen Transducer repräsentiert, dessen Kappe in die Richtung der steigenden X-Werte zeigt (zeigt auf "3 Uhr", wenn man von oben schaut) auf der X-Y-Ebene, und die Werte sich im Uhrzeigersinn progressiv erhöhen (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

Wenn der Transducer senkrecht zur Oberfläche steht ([`altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) von `π/2`), beträgt der Wert 0.
Für Hardware und Plattformen, die keinen Neigungs- oder Winkelwert melden, beträgt der Wert `0`.

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

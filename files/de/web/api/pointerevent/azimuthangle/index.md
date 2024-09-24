---
title: "PointerEvent: azimuthAngle-Eigenschaft"
short-title: azimuthAngle
slug: Web/API/PointerEvent/azimuthAngle
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die **`azimuthAngle`** Schreibgeschützte Eigenschaft des {{domxref("PointerEvent")}}-Interfaces stellt den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-(Zeiger- oder Stift-)Achse als auch die Y-Achse enthält, dar.

Je nach spezifischer Hardware und Plattform werden Benutzeragenten wahrscheinlich nur ein Satz von Werten für die Transducer-Ausrichtung relativ zur Bildschirmebene erhalten — entweder {{domxref("PointerEvent.tiltx", "tiltX")}} und {{domxref("PointerEvent.tilty", "tiltY")}} oder {{domxref("PointerEvent.altitudeAngle", "altitudeAngle")}} und `azimuthAngle`.

![Der Azimutwinkel eines Zeigers im Vergleich zum Höhenwinkel](azimuth_altitude_angles.svg)

Für eine zusätzliche Veranschaulichung dieser Eigenschaft siehe [Abbildung 5 in der Spezifikation](https://w3c.github.io/pointerevents/#figure_azimuthAngle).

## Wert

Ein Winkel in Radianten zwischen `0` und `2π`, wobei `0` einen Transducer darstellt, dessen Kappe in Richtung der zunehmenden X-Werte zeigt (bei direkter Draufsicht auf "3 Uhr") in der X-Y-Ebene, und die Werte sich beim Uhrzeigersinn schrittweise erhöhen (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

Wenn der Transducer senkrecht zur Oberfläche steht ({{domxref("PointerEvent.altitudeAngle", "altitudeAngle")}} von `π/2`), beträgt der Wert 0.
Für Hardware und Plattformen, die keine Neigungs- oder Winkelwerte melden, beträgt der Wert `0`.

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

- {{ domxref("PointerEvent.altitudeAngle") }}
- {{ domxref("PointerEvent.tiltX") }}
- {{ domxref("PointerEvent.tiltY") }}

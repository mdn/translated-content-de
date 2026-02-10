---
title: "Touch: azimuthAngle-Eigenschaft"
short-title: azimuthAngle
slug: Web/API/Touch/azimuthAngle
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`azimuthAngle`** der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle gibt den Winkel zwischen der Y-Z-Ebene und der Ebene zurück, die sowohl die Achse des Transducers (Zeiger oder Stift) als auch die Y-Achse enthält. Diese stellt die Richtung dar, in die der Transducer relativ zur Geräteoberfläche zeigt.

Für Hardware und Plattformen, die Neigung oder Winkel nicht melden, beträgt der Wert `0`. Wenn der Transducer senkrecht zur Oberfläche ist ([`altitudeAngle`](/de/docs/Web/API/Touch/altitudeAngle) von `π/2`), beträgt der Wert `0`.

## Wert

Ein Winkel im Bogenmaß zwischen `0` und `2π`, wobei `0` einen Transducer darstellt, dessen Spitze in die Richtung der zunehmenden X-Werte zeigt (zeigt auf "3 Uhr" bei direktem Blick von oben) auf der X-Y-Ebene, und die Werte sich beim Uhrzeigersinn allmählich erhöhen (`π/2` bei "6 Uhr", `π` bei "9 Uhr", `3π/2` bei "12 Uhr").

## Beispiel

### Grundlegende Verwendung

```js
someElement.addEventListener(
  "touchstart",
  (event) => {
    for (const touch of event.changedTouches) {
      // Log the altitude and azimuth angles for each stylus touch point.
      if (touch.touchType === "stylus") {
        console.log(`altitudeAngle: ${touch.altitudeAngle}`);
        console.log(`azimuthAngle: ${touch.azimuthAngle}`);
      }
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Touch.altitudeAngle`](/de/docs/Web/API/Touch/altitudeAngle)
- [`Touch.touchType`](/de/docs/Web/API/Touch/touchType)
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle)
- [Touch events](/de/docs/Web/API/Touch_events)

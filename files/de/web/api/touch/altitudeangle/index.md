---
title: "Touch: altitudeAngle-Eigenschaft"
short-title: altitudeAngle
slug: Web/API/Touch/altitudeAngle
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte Eigenschaft **`altitudeAngle`** der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle gibt den Winkel zwischen einer Messeinrichtung (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätebildschirms zurück. Der Höhenwinkel beschreibt, ob die Messeinrichtung senkrecht zum Bildschirm, parallel oder in einem Winkel dazwischen steht.

> [!NOTE]
> Der Standardwert von `altitudeAngle` ist `0` (parallel zur Geräteoberfläche), was sich von der [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)-Eigenschaft unterscheidet, die standardmäßig `π/2` (senkrecht zur Oberfläche) ist.

Für Hardware und Plattformen, die keine Neigung oder Winkel melden, beträgt der Wert `0`.

## Wert

Ein Winkel in Radiant zwischen `0` und `π/2`, wobei `0` parallel zur Geräteoberfläche (X-Y-Ebene) ist und `π/2` senkrecht zur Oberfläche steht.

## Beispiel

### Grundlegende Nutzung

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

- [`Touch.azimuthAngle`](/de/docs/Web/API/Touch/azimuthAngle)
- [`Touch.touchType`](/de/docs/Web/API/Touch/touchType)
- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle)
- [Touch Events](/de/docs/Web/API/Touch_events)

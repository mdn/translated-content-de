---
title: "Touch: touchType-Eigenschaft"
short-title: touchType
slug: Web/API/Touch/touchType
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{ APIRef("Touch Events") }}

Die schreibgeschützte **`touchType`**-Eigenschaft der [`Touch`](/de/docs/Web/API/Touch)-Schnittstelle gibt den Gerätetyp zurück, der die Berührung ausgelöst hat, wie zum Beispiel ein Stylus oder eine direkte Berührung durch einen Finger.

## Wert

Ein String aus der `TouchType`-Enumeration. Mögliche Werte sind:

- `"direct"`
  - : Die Berührung wurde durch direkten Kontakt, wie beispielsweise einem Finger auf dem Bildschirm, ausgelöst.
- `"stylus"`
  - : Die Berührung wurde mit einem Stylus- oder Stiftgerät ausgeführt.

## Beispiel

### Grundlegende Nutzung

```js
someElement.addEventListener(
  "touchstart",
  (event) => {
    for (const touch of event.changedTouches) {
      console.log(`Touch type: ${touch.touchType}`);

      if (touch.touchType === "stylus") {
        // Handle stylus-specific input, such as altitude and azimuth angles.
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
- [`Touch.azimuthAngle`](/de/docs/Web/API/Touch/azimuthAngle)
- [Touch Events](/de/docs/Web/API/Touch_events)

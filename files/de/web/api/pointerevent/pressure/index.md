---
title: "PointerEvent: pressure-Eigenschaft"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die **`pressure`**-Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt den normalisierten Druck des Zeigereingangs an.

## Wert

Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, einschließlich, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann. Für Hardware, die keinen Druck unterstützt, wie z. B. eine Maus, beträgt der Wert `0.5`, wenn der Zeiger aktiviert ist, und `0` andernfalls.

## Beispiele

In diesem Beispiel werden bei einem [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis verschiedene Funktionen aufgerufen, abhängig vom Wert der `pressure`-Eigenschaft des Ereignisses.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.pressure === 0) {
      // No pressure
      process_no_pressure(event);
    } else if (event.pressure === 1) {
      // Maximum pressure
      process_max_pressure(event);
    } else {
      // Default
      process_pressure(event);
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

- [`Touch.force`](/de/docs/Web/API/Touch/force)

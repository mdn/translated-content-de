---
title: "PointerEvent: pressure-Eigenschaft"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{ APIRef("Pointer Events") }}

Die **`pressure`** schreibgeschützte Eigenschaft des [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Interfaces gibt den normalisierten Druck des Zeigereingangs an.

## Wert

Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1` einschließlich, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann. Für Hardware, die keinen Druck unterstützt, wie zum Beispiel eine Maus, ist der Wert `0.5`, wenn der Zeiger sich im aktiven Tastenstatus befindet, und ansonsten `0`.

## Beispiele

In diesem Beispiel wird, wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, abhängig vom Wert der `pressure`-Eigenschaft des Ereignisses, unterschiedliche Funktionen aufgerufen.

```js
someElement.addEventListener("pointerdown", (event) => {
  if (event.pressure === 0) {
    // No pressure
    process_no_pressure(event);
  } else if (event.pressure === 1) {
    // Maximum pressure
    process_max_pressure(event);
  } else {
    // Default
    processPressure(event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Touch.force`](/de/docs/Web/API/Touch/force)

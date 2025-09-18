---
title: "PointerEvent: pressure-Eigenschaft"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{ APIRef("Pointer Events") }}

Die **`pressure`** schreibgeschützte Eigenschaft der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle gibt den normalisierten Druck des Zeigereingabe an.

## Wert

Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, einschließlich, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann. Bei Hardware, die keinen Druck unterstützt, wie z. B. eine Maus, beträgt der Wert `0.5`, wenn sich der Zeiger im aktiven Tastenzustand befindet, und `0` andernfalls.

## Beispiele

In diesem Beispiel werden, wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, verschiedene Funktionen aufgerufen, abhängig vom Wert der `pressure`-Eigenschaft des Ereignisses.

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
    process_pressure(event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Touch.force`](/de/docs/Web/API/Touch/force)

---
title: "PointerEvent: pressure-Eigenschaft"
short-title: pressure
slug: Web/API/PointerEvent/pressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die **`pressure`**-Eigenschaft der schreibgeschützten [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle zeigt den normalisierten Druck des Zeigereingangs an.

## Wert

Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, inklusive, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann. Bei Hardware, die keinen Druck unterstützt, wie z.B. eine Maus, ist der Wert `0.5`, wenn der Zeiger aktiv in den Tastenstatus ist, und `0` andernfalls.

## Beispiele

In diesem Codeausschnitt wird, wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, je nach Wert der `pressure`-Eigenschaft des Ereignisses, eine andere Funktion aufgerufen.

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

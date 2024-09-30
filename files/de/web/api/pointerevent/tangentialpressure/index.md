---
title: "PointerEvent: tangentialPressure-Eigenschaft"
short-title: tangentialPressure
slug: Web/API/PointerEvent/tangentialPressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`tangentialPressure`** der [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Schnittstelle repräsentiert den normalisierten tangentialen Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)).

## Wert

Ein `float`, der den normalisierten tangentialen Druck des Zeigereingangs im Bereich von `-1` bis `1` darstellt, einschließlich, wobei `0` die neutrale Position der Steuerung ist.

Beachten Sie, dass einige Hardware möglicherweise nur positive Werte im Bereich von `0` bis `1` unterstützt. Für Hardware, die keinen tangentialen Druck unterstützt, wird der Wert `0` sein.

## Beispiele

In diesem Ausschnitt werden, wenn ein [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignis ausgelöst wird, verschiedene Funktionen aufgerufen, abhängig vom Wert der `tangentialPressure`-Eigenschaft des Ereignisses.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.tangentialPressure === 0) {
      // No pressure
      process_no_tanPressure(event);
    } else if (event.tangentialPressure === 1) {
      // Maximum pressure
      process_max_tanPressure(event);
    } else {
      // Default
      process_tanPressure(event);
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

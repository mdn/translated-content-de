---
title: "PointerEvent: tangentialPressure-Eigenschaft"
short-title: tangentialPressure
slug: Web/API/PointerEvent/tangentialPressure
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ APIRef("Pointer Events") }}

Die schreibgeschützte Eigenschaft **`tangentialPressure`** der
{{domxref("PointerEvent")}}-Schnittstelle repräsentiert den normierten tangentialen Druck der Zeigereingabe (auch bekannt als Barrel-Druck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)).

## Wert

Ein `float`, der den normierten tangentialen Druck der Zeigereingabe im Bereich von `-1` bis `1` inklusive darstellt, wobei `0` die neutrale Position des Steuerungselements ist.

Beachten Sie, dass einige Hardware möglicherweise nur positive Werte im Bereich von `0` bis `1` unterstützt. Für Hardware, die keinen tangentialen Druck unterstützt, beträgt der Wert `0`.

## Beispiele

In diesem Beispiel, wenn ein {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis ausgelöst wird, werden je nach Wert der `tangentialPressure`-Eigenschaft des Ereignisses unterschiedliche Funktionen aufgerufen.

```js
someElement.addEventListener(
  "pointerdown",
  (event) => {
    if (event.tangentialPressure === 0) {
      // Kein Druck
      process_no_tanPressure(event);
    } else if (event.tangentialPressure === 1) {
      // Maximaler Druck
      process_max_tanPressure(event);
    } else {
      // Standard
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

- {{ domxref("Touch.force") }}

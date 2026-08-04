---
title: "StylePropertyMapReadOnly: size-Eigenschaft"
short-title: size
slug: Web/API/StylePropertyMapReadOnly/size
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`size`** schreibgeschützte Eigenschaft des [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly) Interfaces gibt eine positive ganze Zahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Wert

Eine positive ganze Zahl.

## Beispiele

### Grundlegende Verwendung

Hier verwenden wir die size-Eigenschaft, um die Gesamteinträge innerhalb der [`computedStyleMap`](/de/docs/Web/API/Element/computedStyleMap) der Button-Elemente zurückzugeben.

```js
// grab our element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// use size to get the total styles within the map
const amountStyles = allComputedStyles.size;
console.log(amountStyles); // logs 338
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

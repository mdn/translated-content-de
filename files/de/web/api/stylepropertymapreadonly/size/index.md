---
title: "StylePropertyMapReadOnly: size-Eigenschaft"
short-title: size
slug: Web/API/StylePropertyMapReadOnly/size
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die schreibgeschützte Eigenschaft **`size`** des [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Interfaces gibt eine vorzeichenlose Ganzzahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Wert

Eine vorzeichenlose Ganzzahl.

## Beispiele

Hier verwenden wir die size-Eigenschaft, um die gesamte Anzahl der Einträge innerhalb des [`computedStyleMap`](/de/docs/Web/API/Element/computedStyleMap) der Schaltflächenelemente zurückzugeben.

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

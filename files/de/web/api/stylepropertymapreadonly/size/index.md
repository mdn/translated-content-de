---
title: "StylePropertyMapReadOnly: size-Eigenschaft"
short-title: size
slug: Web/API/StylePropertyMapReadOnly/size
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die schreibgeschützte **`size`**-Eigenschaft der [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle gibt eine positive Ganzzahl zurück, die die Größe des `StylePropertyMapReadOnly`-Objekts enthält.

## Wert

Eine positive Ganzzahl.

## Beispiele

### Grundlegende Verwendung

Hier nutzen wir die size-Eigenschaft, um die Gesamtzahl der Einträge innerhalb der [`computedStyleMap`](/de/docs/Web/API/Element/computedStyleMap) der Button-Elemente zurückzugeben.

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

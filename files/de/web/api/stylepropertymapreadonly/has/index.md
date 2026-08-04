---
title: "StylePropertyMapReadOnly: has() Methode"
short-title: has()
slug: Web/API/StylePropertyMapReadOnly/has
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`has()`**-Methode der [`StylePropertyMapReadOnly`](/de/docs/Web/API/StylePropertyMapReadOnly)-Schnittstelle gibt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly`-Objekt vorhanden ist.

## Syntax

```js-nolint
has(property)
```

### Parameter

- `property`
  - : Der Name einer Eigenschaft.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

### Grundlegende Nutzung

Hier verwenden wir die `has()`-Methode, um zu überprüfen, ob die `padding-top`-Eigenschaft im Stilattribut der Button-Elemente vorhanden ist.

```js
// get the button element
const buttonEl = document.querySelector(".example");

// find what's in the style attribute with attributeStyleMap and has()
const hasPadTop = buttonEl.attributeStyleMap.has("padding-top");

console.log(hasPadTop); // logs true if padding-top is present in style attribute
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

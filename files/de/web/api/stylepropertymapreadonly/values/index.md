---
title: "StylePropertyMapReadOnly: values()-Methode"
short-title: values()
slug: Web/API/StylePropertyMapReadOnly/values
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`StylePropertyMapReadOnly.values()`** gibt einen neuen _Array-Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly`-Objekt enthält.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Array")}}.

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel verwenden wir die `values()`-Methode, um auf die Werte innerhalb des [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zuzugreifen.

```js
// get a button element
const buttonEl = document.querySelector("button");

// we can retrieve all computed styles with `computedStyleMap`
const allComputedStyles = buttonEl.computedStyleMap();

// values returns an iterable list of the CSS values
const vals = allComputedStyles.values();
console.log(vals.next().value); // returns a CSSStyleValue
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

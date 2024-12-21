---
title: "DOMTokenList: toString()-Methode"
short-title: toString()
slug: Web/API/DOMTokenList/toString
l10n:
  sourceCommit: 494edeb208c312a26b7f5efb0902799d89a2bb33
---

{{APIRef("DOM")}}

Die **`toString()`**-Methode des [`DOMTokenList`](/de/docs/Web/API/DOMTokenList)-Interfaces gibt die Werte der Token-Liste als String serialisiert zurück. Der Rückgabewert ist eine durch Leerzeichen getrennte Liste von Tokens, die der [`DOMTokenList.value`](/de/docs/Web/API/DOMTokenList/value)-Eigenschaft entspricht.

## Syntax

```js-nolint
toString()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

```js
const element = document.createElement("div");
const classes = element.classList;

element.className = "shop empty-cart";
classes.add("logged-in", "dark-mode");

console.log(classes.toString());
// "shop empty-cart logged-in dark-mode"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.classList`](/de/docs/Web/API/Element/classList)
- [`DOMTokenList.add()`](/de/docs/Web/API/DOMTokenList/add)

---
title: "StylePropertyMap: clear() Methode"
short-title: clear()
slug: Web/API/StylePropertyMap/clear
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`clear()`** Methode des [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Interface entfernt alle Deklarationen im `StylePropertyMap`.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel entfernt alle Stile innerhalb des [style-Attributs](/de/docs/Web/HTML/Global_attributes/style) der Elemente.

```js
// get the button element
const buttonEl = document.querySelector(".example");

// remove all styles from the style attribute
buttonEl.attributeStyleMap.clear();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

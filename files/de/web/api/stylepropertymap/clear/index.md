---
title: "StylePropertyMap: clear() Methode"
short-title: clear()
slug: Web/API/StylePropertyMap/clear
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSS Typed Object Model API")}}

Die **`clear()`**-Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle entfernt alle Deklarationen im `StylePropertyMap`.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel entfernt alle Stile innerhalb der Elemente [style-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style).

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

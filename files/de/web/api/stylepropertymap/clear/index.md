---
title: "StylePropertyMap: clear()-Methode"
short-title: clear()
slug: Web/API/StylePropertyMap/clear
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
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

### Grundlegende Verwendung

Das folgende Beispiel entfernt alle Stile innerhalb des [style-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/style) der Elemente.

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

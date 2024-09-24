---
title: "StylePropertyMapReadOnly: values()-Methode"
short-title: values()
slug: Web/API/StylePropertyMapReadOnly/values
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.values()`**-Methode gibt einen neuen _Array-Iterator_ zurück, der die Werte für jeden Index im `StylePropertyMapReadOnly`-Objekt enthält.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Array")}}.

## Beispiele

In diesem Beispiel verwenden wir die `values()`-Methode, um auf die Werte in unserem [`Element.computedStyleMap()`](/de/docs/Web/API/Element/computedStyleMap) zugreifen zu können.

```js
// ein Button-Element abrufen
const buttonEl = document.querySelector("button");

// wir können alle berechneten Styles mit `computedStyleMap` abrufen
const allComputedStyles = buttonEl.computedStyleMap();

// values gibt eine iterierbare Liste der CSS-Werte zurück
const vals = allComputedStyles.values();
console.log(vals.next().value); // gibt ein CSSStyleValue zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

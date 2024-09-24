---
title: "StylePropertyMapReadOnly: keys()-Methode"
short-title: keys()
slug: Web/API/StylePropertyMapReadOnly/keys
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`StylePropertyMapReadOnly.keys()`**-Methode gibt einen neuen
_Array-Iterator_ zurück, der die Schlüssel für jedes Element
in `StylePropertyMapReadOnly` enthält.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues {{jsxref("Array")}}.

## Beispiele

In diesem Beispiel verwenden wir die `keys()`-Methode, um Zugriff auf die
Eigenschaften innerhalb unseres {{domxref('Element.computedStyleMap()')}} zu erhalten.

```js
// ein Button-Element abrufen
const buttonEl = document.querySelector("button");

// wir können alle berechneten Stile mit `computedStyleMap` abrufen
const allComputedStyles = buttonEl.computedStyleMap();

// keys gibt eine iterierbare Liste von Eigenschaften zurück
const props = allComputedStyles.keys();
console.log(props.next().value); // gibt align-content zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

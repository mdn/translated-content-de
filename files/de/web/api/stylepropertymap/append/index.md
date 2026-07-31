---
title: "StylePropertyMap: append() Methode"
short-title: append()
slug: Web/API/StylePropertyMap/append
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`append()`** Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle fügt den übergebenen CSS-Wert dem `StylePropertyMap` mit der angegebenen Eigenschaft hinzu.

## Syntax

```js-nolint
append(property, value)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z. B. Schriftart, Breite, Hintergrundfarbe), das hinzugefügt werden soll.
- `value`
  - : Der Wert, den die angegebene Eigenschaft haben soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt, wie ein zusätzlicher Hintergrundbildwert mithilfe von [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap) zur Eigenschaft {{cssxref('background-image')}} des Elements hinzugefügt wird.

```js
// get the button element
const buttonEl = document.querySelector("button");

// append another value to the background-image property set on the attribute
buttonEl.attributeStyleMap.append(
  "background-image",
  "linear-gradient(180deg, blue, black)",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

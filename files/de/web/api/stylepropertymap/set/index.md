---
title: "StylePropertyMap: set() Methode"
short-title: set()
slug: Web/API/StylePropertyMap/set
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}}

Die **`set()`** Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap) Schnittstelle ändert die CSS-Deklaration mit der angegebenen Eigenschaft.

## Syntax

```js-nolint
set(property)
set(property, value1)
set(property, value1, value2)
set(property, value1, value2, /* …, */ valueN)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal (z. B. Schriftart, Breite, Hintergrundfarbe) angibt, das geändert werden soll.
- `value1`, …, `valueN`
  - : Der bzw. die Wert(e), den bzw. die die angegebene Eigenschaft haben soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel setzt den angegebenen Wert für die {{cssxref('padding-top')}} Eigenschaft innerhalb des [style-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements.

```js
// get the button element
const buttonEl = document.querySelector("button");

// set padding-top on button style attribute
buttonEl.attributeStyleMap.set("padding-top", CSS.px(10));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

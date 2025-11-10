---
title: "StylePropertyMap: set() Methode"
short-title: set()
slug: Web/API/StylePropertyMap/set
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSS Typed Object Model API")}}

Die **`set()`** Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle ändert die CSS-Deklaration mit der angegebenen Eigenschaft.

## Syntax

```js-nolint
set(property, value)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z. B. Schriftart, Breite, Hintergrundfarbe), das geändert werden soll.
- `value`
  - : Der Wert, den die angegebene Eigenschaft haben soll.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel setzt die {{cssxref('padding-top')}}-Eigenschaft mit dem angegebenen Wert im [style-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements.

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

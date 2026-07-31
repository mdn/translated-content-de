---
title: "StylePropertyMap: set()-Methode"
short-title: set()
slug: Web/API/StylePropertyMap/set
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`set()`**-Methode des [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Interfaces ändert die CSS-Deklaration mithilfe der angegebenen Eigenschaft.

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

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Verwendung

In diesem Beispiel wird der angegebene Wert für die {{cssxref('padding-top')}}-Eigenschaft innerhalb des [style-Attributs](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements festgelegt.

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

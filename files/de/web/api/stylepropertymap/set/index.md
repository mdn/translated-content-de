---
title: "StylePropertyMap: set()-Methode"
short-title: set()
slug: Web/API/StylePropertyMap/set
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`set()`**-Methode des {{domxref("StylePropertyMap")}}-Interfaces ändert die CSS-Deklaration für die angegebene Eigenschaft.

## Syntax

```js-nolint
set(property, value)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal (z. B. Schriftart, Breite, Hintergrundfarbe) angibt, das geändert werden soll.
- `value`
  - : Der Wert, den die angegebene Eigenschaft haben soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel setzt die {{cssxref('padding-top')}}-Eigenschaft mit dem angegebenen Wert im [style-Attribut](/de/docs/Web/HTML/Global_attributes/style) des Elements.

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

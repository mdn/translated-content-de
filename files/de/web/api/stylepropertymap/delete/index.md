---
title: "StylePropertyMap: delete() Methode"
short-title: delete()
slug: Web/API/StylePropertyMap/delete
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("CSS Typed Object Model API")}}

Die **`delete()`**-Methode der
[`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen
Eigenschaft.

## Syntax

```js-nolint
delete(property)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z.B. Schriftart, Breite, Hintergrundfarbe), das entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Beispiel entfernt die {{cssxref('background-image')}}-Eigenschaft vom
[style-Attribut](/de/docs/Web/HTML/Global_attributes/style) des Elements.

```js
// get the button element
const buttonEl = document.querySelector("button");

// remove background-image from style attribute
buttonEl.attributeStyleMap.delete("background-image");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

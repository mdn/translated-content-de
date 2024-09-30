---
title: "StylePropertyMap: delete()-Methode"
short-title: delete()
slug: Web/API/StylePropertyMap/delete
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`delete()`**-Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen Eigenschaft.

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

Das folgende Beispiel entfernt die {{cssxref('background-image')}}-Eigenschaft aus dem [style-Attribut](/de/docs/Web/HTML/Global_attributes/style) des Elements.

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

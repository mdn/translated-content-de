---
title: "StylePropertyMap: delete()-Methode"
short-title: delete()
slug: Web/API/StylePropertyMap/delete
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die **`delete()`**-Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen Eigenschaft.

## Syntax

```js-nolint
delete(property)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z. B. Schriftart, Breite, Hintergrundfarbe), das entfernt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Grundlegende Nutzung

Im folgenden Beispiel wird die {{cssxref('background-image')}}-Eigenschaft aus dem [style-Attribut](/de/docs/Web/HTML/Reference/Global_attributes/style) des Elements entfernt.

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

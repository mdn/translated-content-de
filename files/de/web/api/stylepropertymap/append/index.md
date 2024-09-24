---
title: "StylePropertyMap: append()-Methode"
short-title: append()
slug: Web/API/StylePropertyMap/append
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Typed Object Model API")}}

Die **`append()`**-Methode des
{{domxref("StylePropertyMap")}}-Interfaces fügt den übergebenen CSS-Wert der
`StylePropertyMap` mit der angegebenen Eigenschaft hinzu.

## Syntax

```js-nolint
append(property, value)
```

### Parameter

- `property`
  - : Ein Identifikator, der das stilistische Merkmal angibt (z. B. Schriftart, Breite, Hintergrundfarbe), das hinzugefügt werden soll.
- `value`
  - : Der Wert, den die angegebene Eigenschaft haben soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie ein zusätzlicher Hintergrundbildwert zur
{{cssxref('background-image')}}-Eigenschaft des Elements hinzugefügt wird, indem
{{domxref('HTMLElement.attributeStyleMap')}} verwendet wird.

```js
// Holen Sie sich das Button-Element
const buttonEl = document.querySelector("button");

// Fügen Sie einen weiteren Wert zur background-image-Eigenschaft hinzu, die im Attribut gesetzt ist
buttonEl.attributeStyleMap.append(
  "background-image",
  "linear-gradient(180deg, blue, black)",
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "StylePropertyMap: append()-Methode"
short-title: append()
slug: Web/API/StylePropertyMap/append
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("CSS Typed Object Model API")}}

Die **`append()`**-Methode der [`StylePropertyMap`](/de/docs/Web/API/StylePropertyMap)-Schnittstelle fügt den übergebenen CSS-Wert mit der angegebenen Eigenschaft zum `StylePropertyMap` hinzu.

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

Dieses Beispiel zeigt, wie ein zusätzlicher Hintergrundbildwert zur {{cssxref('background-image')}}-Eigenschaft des Elements hinzugefügt wird, unter Verwendung von [`HTMLElement.attributeStyleMap`](/de/docs/Web/API/HTMLElement/attributeStyleMap).

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

---
title: "StylePropertyMapReadOnly: has() Methode"
short-title: has()
slug: Web/API/StylePropertyMapReadOnly/has
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`has()`**-Methode der {{domxref("StylePropertyMapReadOnly")}}-Schnittstelle zeigt an, ob die angegebene Eigenschaft im `StylePropertyMapReadOnly`-Objekt vorhanden ist.

## Syntax

```js-nolint
has(property)
```

### Parameter

- `property`
  - : Der Name einer Eigenschaft.

### Rückgabewert

Ein boolescher Wert.

## Beispiele

Hier verwenden wir die `has()`-Methode, um festzustellen, ob die Eigenschaft 'padding-top' in dem style-Attribut eines Button-Elements vorhanden ist.

```js
// das Button-Element holen
const buttonEl = document.querySelector(".example");

// überprüft, was im style-Attribut mit attributeStyleMap und has() ist
const hasPadTop = buttonEl.attributeStyleMap.has("padding-top");

console.log(hasPadTop); // gibt true aus, wenn padding-top im style-Attribut vorhanden ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

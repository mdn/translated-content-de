---
title: "StylePropertyMap: delete()-Methode"
short-title: delete()
slug: Web/API/StylePropertyMap/delete
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSS Typed Object Model API")}}

Die **`delete()`**-Methode der {{domxref("StylePropertyMap")}}-Schnittstelle entfernt die CSS-Deklaration mit der angegebenen Eigenschaft.

## Syntax

```js-nolint
delete(property)
```

### Parameter

- `property`
  - : Ein Bezeichner, der das stilistische Merkmal angibt (z. B. Schriftart, Breite, Hintergrundfarbe), das entfernt werden soll.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird die {{cssxref('background-image')}}-Eigenschaft aus dem [Style-Attribut](/de/docs/Web/HTML/Global_attributes/style) des Elements entfernt.

```js
// das Button-Element abrufen
const buttonEl = document.querySelector("button");

// background-image aus dem Style-Attribut entfernen
buttonEl.attributeStyleMap.delete("background-image");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

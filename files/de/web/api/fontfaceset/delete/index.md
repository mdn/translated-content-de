---
title: "FontFaceSet: delete()-Methode"
short-title: delete()
slug: Web/API/FontFaceSet/delete
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`delete()`**-Methode der {{domxref("FontFaceSet")}}-Schnittstelle entfernt eine Schriftart aus der Menge.

Schriftarten, die der Menge mit der CSS-Regel {{cssxref("@font-face")}} hinzugefügt wurden, bleiben mit dem entsprechenden CSS verbunden und können nicht gelöscht werden.

## Syntax

```js-nolint
delete(font)
```

### Parameter

- `font`
  - : Ein {{domxref("FontFace")}}, das aus der Menge entfernt werden soll.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn das Löschen erfolgreich war, und `false` andernfalls.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("FontFace")}}-Objekt erstellt und dann aus dem {{domxref("FontFaceSet")}} gelöscht.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.delete(font);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

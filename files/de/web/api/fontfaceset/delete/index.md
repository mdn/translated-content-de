---
title: "FontFaceSet: delete() Methode"
short-title: delete()
slug: Web/API/FontFaceSet/delete
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`delete()`** Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) Schnittstelle entfernt eine Schriftart aus dem Set.

Schriftschnitte, die mit der CSS-{{cssxref("@font-face")}}-Regel zum Set hinzugefügt wurden, bleiben mit dem entsprechenden CSS verbunden und können nicht gelöscht werden.

## Syntax

```js-nolint
delete(font)
```

### Parameter

- `font`
  - : Ein [`FontFace`](/de/docs/Web/API/FontFace), das aus dem Set entfernt werden soll.

### Rückgabewert

Ein boolescher Wert, der `true` ist, wenn das Löschen erfolgreich war, und `false` andernfalls.

## Beispiele

Im folgenden Beispiel wird ein neues [`FontFace`](/de/docs/Web/API/FontFace) Objekt erstellt und dann aus dem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) gelöscht.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.delete(font);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

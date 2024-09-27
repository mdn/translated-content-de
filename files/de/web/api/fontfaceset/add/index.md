---
title: "FontFaceSet: add() Methode"
short-title: add()
slug: Web/API/FontFaceSet/add
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`add()`** Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle fügt einen neuen Font zum Set hinzu.

## Syntax

```js-nolint
add(font)
```

### Parameter

- `font`
  - : Ein [`FontFace`](/de/docs/Web/API/FontFace), der zum Set hinzugefügt werden soll.

### Rückgabewert

Ein neues [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn dieser Font bereits über die CSS {{cssxref("@font-face")}} Regel eingebunden ist.

## Beispiele

Im folgenden Beispiel wird ein neues [`FontFace`](/de/docs/Web/API/FontFace)-Objekt erstellt und dann der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.add(font);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

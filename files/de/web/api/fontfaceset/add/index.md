---
title: "FontFaceSet: Methode add()"
short-title: add()
slug: Web/API/FontFaceSet/add
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("CSS Font Loading API")}}

Die **`add()`**-Methode der {{domxref("FontFaceSet")}}-Schnittstelle fügt dem Set eine neue Schriftart hinzu.

## Syntax

```js-nolint
add(font)
```

### Parameter

- `font`
  - : Ein {{domxref("FontFace")}}, das dem Set hinzugefügt werden soll.

### Rückgabewert

Ein neues {{domxref("FontFaceSet")}}.

### Ausnahmen

- `InvalidModificationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn diese Schriftart bereits über die CSS-{{cssxref("@font-face")}}-Regel enthalten ist.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("FontFace")}}-Objekt erstellt und dann dem {{domxref("FontFaceSet")}} hinzugefügt.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.add(font);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

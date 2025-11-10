---
title: "FontFaceSet: add()-Methode"
short-title: add()
slug: Web/API/FontFaceSet/add
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`add()`**-Methode des [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Interfaces fügt dem Set eine neue Schriftart hinzu.

## Syntax

```js-nolint
add(font)
```

### Parameter

- `font`
  - : Ein [`FontFace`](/de/docs/Web/API/FontFace), das dem Set hinzugefügt werden soll.

### Rückgabewert

Ein neues [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Schriftart bereits über die CSS {{cssxref("@font-face")}}-Regel enthalten ist.

## Beispiele

Im folgenden Beispiel wird ein neues [`FontFace`](/de/docs/Web/API/FontFace)-Objekt erstellt und anschließend dem [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt.

```js
const font = new FontFace("MyFont", 'url("myFont.woff2")');
document.fonts.add(font);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

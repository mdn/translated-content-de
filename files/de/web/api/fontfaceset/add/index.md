---
title: "FontFaceSet: add() Methode"
short-title: add()
slug: Web/API/FontFaceSet/add
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

Die **`add()`**-Methode der [`FontFaceSet`](/de/docs/Web/API/FontFaceSet)-Schnittstelle fügt ein neues Schriftartobjekt zur Menge hinzu.

## Syntax

```js-nolint
add(font)
```

### Parameter

- `font`
  - : Ein [`FontFace`](/de/docs/Web/API/FontFace), das zur Menge hinzugefügt werden soll.

### Rückgabewert

Eine neue [`FontFaceSet`](/de/docs/Web/API/FontFaceSet).

### Ausnahmen

- `InvalidModificationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn diese Schriftart bereits über die CSS {{cssxref("@font-face")}}-Regel eingebunden ist.

## Beispiele

Im folgenden Beispiel wird ein neues [`FontFace`](/de/docs/Web/API/FontFace)-Objekt erstellt und dann zur [`FontFaceSet`](/de/docs/Web/API/FontFaceSet) hinzugefügt.

```js
const font = new FontFace("MyFont", "url(myFont.woff2)");
document.fonts.add(font);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

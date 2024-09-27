---
title: "HTMLEmbedElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLEmbedElement/src
l10n:
  sourceCommit: a0460b9c26f5ad9b8bbc9cc569f4fdd8058aec8f
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLEmbedElement`](/de/docs/Web/API/HTMLEmbedElement)-Interfaces gibt einen String zurück, der die URL der eingebetteten Ressource angibt.

Sie spiegelt das `src`-Attribut des {{HTMLElement("embed")}}-Elements wider.

## Wert

Ein String.

## Beispiele

```html
<embed
  id="el"
  type="video/quicktime"
  src="movie.mov"
  width="640"
  height="480"
  title="Title of my video" />
```

```js
const el = document.getElementById("el");
console.log(el.src); // Output: "movie.mov"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "HTMLImageElement: src-Eigenschaft"
short-title: src
slug: Web/API/HTMLImageElement/src
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die **`src`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt das Bild an, das im {{HTMLElement("img")}}-Element angezeigt werden soll. Sie spiegelt das [`src`](/de/docs/Web/HTML/Reference/Elements/img#src)-Inhaltsattribut des `<img>`-Elements wider.

## Wert

Ein String. Weitere Informationen zur Syntax des `src`-Attributs finden Sie in der HTML-Referenz des [`<img>`](/de/docs/Web/HTML/Reference/Elements/img#src)-Elements.

## Beispiele

### Das src-Attribut festlegen

```js
const img = new Image();
img.src = "example.png";
img.alt = "An example picture";
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.currentSrc`](/de/docs/Web/API/HTMLImageElement/currentSrc)
- [`HTMLImageElement.srcset`](/de/docs/Web/API/HTMLImageElement/srcset)
- [`HTMLImageElement.sizes`](/de/docs/Web/API/HTMLImageElement/sizes)

---
title: "HighlightRegistry: size-Eigenschaft"
short-title: size
slug: Web/API/HighlightRegistry/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`size`**-Eigenschaft gibt die Anzahl der {{domxref("Highlight")}}-Objekte im {{domxref("HighlightRegistry")}} zurück.

## Wert

Ein schreibgeschützter Integer, der angibt, wie viele `Highlight`-Objekte das Register enthält.

## Beispiele

### Verwendung von size

```js
const highlight1 = new Highlight();
const highlight2 = new Highlight();

CSS.highlights.set("highlight-1", highlight1);
CSS.highlights.set("highlight-2", highlight2);

console.log(CSS.highlights.size); // 2
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

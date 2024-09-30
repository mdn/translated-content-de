---
title: "HighlightRegistry: size Eigenschaft"
short-title: size
slug: Web/API/HighlightRegistry/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`size`**-Eigenschaft gibt die Anzahl der [`Highlight`](/de/docs/Web/API/Highlight)-Objekte im [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) zurück.

## Wert

Ein schreibgeschützter ganzzahliger Wert, der angibt, wie viele `Highlight`-Objekte das Registry enthält.

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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textranges im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

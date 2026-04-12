---
title: "Highlight: size-Eigenschaft"
short-title: size
slug: Web/API/Highlight/size
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`size`**-Eigenschaft gibt die Anzahl der [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekte in einem [`Highlight`](/de/docs/Web/API/Highlight)-Objekt zurück.

## Wert

Der Wert von `size` ist eine schreibgeschützte Ganzzahl, die angibt, wie viele Einträge das Highlight-Objekt hat.

## Beispiele

### Verwendung von size

```js
const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);
highlight.add(range3);

console.log(highlight.size); // 3
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

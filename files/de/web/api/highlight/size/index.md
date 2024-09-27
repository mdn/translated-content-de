---
title: "Highlight: size-Eigenschaft"
short-title: size
slug: Web/API/Highlight/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`size`**-Eigenschaft gibt die Anzahl der [`Range`](/de/docs/Web/API/Range)-Objekte in einem
[`Highlight`](/de/docs/Web/API/Highlight)-Objekt zurück.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "Highlight: Eigenschaft size"
short-title: size
slug: Web/API/Highlight/size
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`size`**-Eigenschaft gibt die Anzahl der {{domxref("Range")}}-Objekte in einem
{{domxref("Highlight")}}-Objekt zurück.

## Wert

Der Wert von `size` ist eine schreibgeschützte Ganzzahl, die angibt, wie viele Einträge das Highlight-Objekt besitzt.

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

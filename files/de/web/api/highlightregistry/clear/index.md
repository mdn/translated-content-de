---
title: "HighlightRegistry: clear()-Methode"
short-title: clear()
slug: Web/API/HighlightRegistry/clear
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`clear()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle entfernt alle in der `HighlightRegistry` registrierten {{domxref("Highlight")}}-Objekte.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Map.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code-Schnipsel registriert zwei Highlight-Objekte im Register und löscht anschließend das Register:

```js
const customHighlight1 = new Highlight(range1, range2);
const customHighlight2 = new Highlight(range3, range4, range5);

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);

console.log(CSS.highlights.size); // 2

CSS.highlights.clear();
console.log(CSS.highlights.size); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Textmarkierens im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

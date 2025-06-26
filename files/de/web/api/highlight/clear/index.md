---
title: "Highlight: clear() Methode"
short-title: clear()
slug: Web/API/Highlight/clear
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`clear()`** Methode der [`Highlight`](/de/docs/Web/API/Highlight) Schnittstelle entfernt alle [`Range`](/de/docs/Web/API/Range) Objekte aus einem `Highlight` Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt, wie ein neues Highlight mit zwei Bereichen erstellt und dann geleert wird:

```js
const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.clear();
console.log(highlight.size); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

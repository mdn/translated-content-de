---
title: "Highlight: clear() Methode"
short-title: clear()
slug: Web/API/Highlight/clear
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`clear()`** Methode des [`Highlight`](/de/docs/Web/API/Highlight) Interfaces entfernt alle [`Range`](/de/docs/Web/API/Range) Objekte aus einem `Highlight` Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und es dann löscht:

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "Highlight: clear()-Methode"
short-title: clear()
slug: Web/API/Highlight/clear
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`clear()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle entfernt alle [`Range`](/de/docs/Web/API/Range)-Objekte von einem `Highlight`-Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich der Verwendung von {{jsxref("Set.clear()")}}.

## Syntax

```js-nolint
clear()
```

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt, wie ein neues Highlight mit zwei Bereichen erstellt wird, und dann gelöscht wird:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

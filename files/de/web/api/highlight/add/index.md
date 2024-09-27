---
title: "Highlight: add()-Methode"
short-title: add()
slug: Web/API/Highlight/add
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`add()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle fügt ein neues [`Range`](/de/docs/Web/API/Range)-Objekt zu einem Highlight hinzu, um mit der [CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api) gestylt zu werden.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.add()")}}.

## Syntax

```js-nolint
add(range)
```

### Parameter

- `range`
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das zum `Highlight` hinzugefügt werden soll.

### Rückgabewert

Das `Highlight`-Objekt, mit dem hinzugefügten Bereich.

## Beispiele

Der folgende Codeausschnitt zeigt, wie zwei Bereiche zu einem neuen Highlight-Objekt hinzugefügt werden:

```js
const highlight = new Highlight();

const range1 = new Range();
const range2 = new Range();

highlight.add(range1).add(range2);

console.log(highlight.size); // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

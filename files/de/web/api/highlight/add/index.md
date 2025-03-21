---
title: "Highlight: add() Methode"
short-title: add()
slug: Web/API/Highlight/add
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`add()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle fügt ein neues [`Range`](/de/docs/Web/API/Range)-Objekt einem Highlight hinzu, das mithilfe der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestylt werden soll.

`Highlight` ist ein objektähnliches {{jsxref("Set")}}, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.add()")}}.

## Syntax

```js-nolint
add(range)
```

### Parameter

- `range`
  - : Ein [`Range`](/de/docs/Web/API/Range)-Objekt, das dem `Highlight` hinzugefügt wird.

### Rückgabewert

Das `Highlight`-Objekt mit dem hinzugefügten Bereich.

## Beispiele

Der folgende Codeausschnitt zeigt, wie man zwei Bereiche zu einem neuen Highlight-Objekt hinzufügt:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

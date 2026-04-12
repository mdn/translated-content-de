---
title: "Highlight: add() Methode"
short-title: add()
slug: Web/API/Highlight/add
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`add()`** Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle fügt ein neues [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt zu einem Highlight hinzu, das mit der [CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API) gestylt werden soll.

`Highlight` ist ein Objekt ähnlich wie ein {{jsxref("Set")}}, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Set.add()")}}.

## Syntax

```js-nolint
add(range)
```

### Parameter

- `range`
  - : Ein [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt, das zum `Highlight` hinzugefügt werden soll.

### Rückgabewert

Das `Highlight`-Objekt mit dem hinzugefügten Bereich.

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

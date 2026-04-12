---
title: "Highlight: delete() Methode"
short-title: delete()
slug: Web/API/Highlight/delete
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`delete()`** Methode des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces entfernt ein angegebenes [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt aus einem `Highlight`-Objekt.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.delete()")}}.

## Syntax

```js-nolint
delete(range)
```

### Parameter

- `range`
  - : Das [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt, das aus dem `Highlight` entfernt werden soll.

### Rückgabewert

Gibt `true` zurück, wenn `range` bereits in `Highlight` war; ansonsten `false`.

## Beispiele

Der folgende Codeausschnitt zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und dann einen davon löscht:

```js
const range1 = new Range();
const range2 = new Range();

const highlight = new Highlight(range1, range2);
console.log(highlight.size); // 2

highlight.delete(range1);
console.log(highlight.size); // 1
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

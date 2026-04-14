---
title: "Highlight: has() Methode"
short-title: has()
slug: Web/API/Highlight/has
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`has()`**-Methode des [`Highlight`](/de/docs/Web/API/Highlight)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob ein [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt in einem `Highlight`-Objekt existiert oder nicht.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.has()")}}.

## Syntax

```js-nolint
has(range)
```

### Parameter

- `range`
  - : Das `AbstractRange`-Objekt, dessen Vorhandensein im `Highlight`-Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Bereich im `Highlight`-Objekt existiert; andernfalls `false`.

## Beispiele

Der folgende Codeausschnitt erstellt zwei Bereiche und ein Highlight-Objekt, das einen davon enthält. Der Code verwendet dann die `has()`-Methode, um zu überprüfen, ob jeder Bereich im Highlight existiert:

```js
const range1 = new Range();
const range2 = new Range();
const myHighlight = new Highlight(range1);

myHighlight.has(range1); // true
myHighlight.has(range2); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

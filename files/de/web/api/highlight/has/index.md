---
title: "Highlight: has()-Methode"
short-title: has()
slug: Web/API/Highlight/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`has()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob ein [`Range`](/de/docs/Web/API/Range)-Objekt in einem `Highlight`-Objekt existiert oder nicht.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.has()")}}.

## Syntax

```js-nolint
has(range)
```

### Parameter

- `range`
  - : Das `Range`-Objekt, das auf seine Existenz im `Highlight`-Objekt getestet werden soll.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Bereich im `Highlight`-Objekt existiert; andernfalls `false`.

## Beispiele

Der folgende Code-Schnipsel erstellt zwei Bereiche und ein Highlight-Objekt, das einen von ihnen enthält. Anschließend wird die `has()`-Methode verwendet, um zu überprüfen, ob jeder Bereich im Highlight existiert:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/Css_custom_highlight_api)
- [CSS Custom Highlight API: Die Zukunft des Text-Hervorhebens im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

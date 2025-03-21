---
title: "Highlight: has() Methode"
short-title: has()
slug: Web/API/Highlight/has
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`has()`** Methode des [`Highlight`](/de/docs/Web/API/Highlight) Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob ein [`Range`](/de/docs/Web/API/Range) Objekt in einem `Highlight` Objekt existiert oder nicht.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.has()")}}.

## Syntax

```js-nolint
has(range)
```

### Parameter

- `range`
  - : Das `Range` Objekt, dessen Vorhandensein im `Highlight` Objekt geprüft werden soll.

### Rückgabewert

Gibt `true` zurück, wenn der angegebene Bereich im `Highlight` Objekt existiert; andernfalls `false`.

## Beispiele

Das folgende Codebeispiel erstellt zwei Bereiche und ein Highlight-Objekt, das einen von ihnen enthält. Der Code verwendet dann die `has()` Methode, um zu prüfen, ob jeder Bereich im Highlight existiert:

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

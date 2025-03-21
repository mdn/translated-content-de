---
title: "HighlightRegistry: values()-Methode"
short-title: values()
slug: Web/API/HighlightRegistry/values
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`**-Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Werte für jedes `Highlight`-Objekt im `HighlightRegistry`-Objekt in Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich zur Verwendung von {{jsxref("Map.values()")}}.

## Syntax

```js-nolint
values()
```

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Highlight`-Objekt im Register in Einfügereihenfolge enthält.

## Beispiele

Der folgende Codeausschnitt zeigt, wie Sie drei `Highlight`-Objekte erstellen und registrieren und den Iterator verwenden, der von der `values()`-Methode zurückgegeben wird, um die Hervorhebungen zu protokollieren:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

const iter = CSS.highlights.values();

console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
console.log(iter.next().value); // Highlight
```

Das folgende Codebeispiel zeigt, wie man mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife über die Hervorhebungen im Register iteriert:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

for (const highlight of CSS.highlights.values()) {
  console.log(highlight); // Highlight
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "HighlightRegistry: values() Methode"
short-title: values()
slug: Web/API/HighlightRegistry/values
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`values()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Objekt zurück, das die Werte für jedes `Highlight` Objekt im `HighlightRegistry` Objekt in Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies vergleichbar mit der Verwendung von {{jsxref("Map.values()")}}.

## Syntax

```js-nolint
values()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das jedes `Highlight` Objekt im Register in Einfügereihenfolge enthält.

## Beispiele

Der folgende Code-Schnipsel zeigt, wie drei `Highlight` Objekte erstellt und registriert werden und wie der durch die `values()` Methode zurückgegebene Iterator verwendet wird, um die Hervorhebungen zu protokollieren:

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

Das folgende Codebeispiel zeigt, wie über die Hervorhebungen im Register mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife iteriert wird:

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
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "HighlightRegistry: keys() Methode"
short-title: keys()
slug: Web/API/HighlightRegistry/keys
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`keys()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel für jedes `Highlight`-Objekt im `HighlightRegistry`-Objekt in Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich zur Verwendung von {{jsxref("Map.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das die Namen jedes `Highlight`-Objekts im Register in Einfügereihenfolge enthält.

## Beispiele

Der folgende Codeausschnitt zeigt, wie man drei `Highlight`-Objekte erstellt und registriert und den Iterator, der von der `keys()`-Methode zurückgegeben wird, verwendet, um ihre Namen zu protokollieren:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

const iter = CSS.highlights.keys();

console.log(iter.next().value); // "foo"
console.log(iter.next().value); // "bar"
console.log(iter.next().value); // "baz"
```

Das folgende Codebeispiel zeigt, wie man über die Highlights im Register mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife iteriert:

```js
const fooHighlight = new Highlight();
const barHighlight = new Highlight();
const bazHighlight = new Highlight();

CSS.highlights.set("foo", fooHighlight);
CSS.highlights.set("bar", barHighlight);
CSS.highlights.set("baz", bazHighlight);

for (const name of CSS.highlights.keys()) {
  console.log(name);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

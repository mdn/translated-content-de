---
title: "HighlightRegistry: Methode keys()"
short-title: keys()
slug: Web/API/HighlightRegistry/keys
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`keys()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die Schlüssel für jedes `Highlight`-Objekt im `HighlightRegistry`-Objekt in der Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.keys()")}}.

## Syntax

```js-nolint
keys()
```

### Rückgabewert

Ein neues Iterator-Objekt, das die Namen jedes `Highlight`-Objekts im Register in der Reihenfolge der Einfügung enthält.

## Beispiele

Das folgende Code-Snippet zeigt, wie Sie drei `Highlight`-Objekte erstellen und registrieren und den Iterator, der von der `keys()`-Methode zurückgegeben wird, verwenden, um deren Namen zu protokollieren:

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

Das folgende Codebeispiel zeigt, wie Sie mithilfe einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife über die Highlights im Register iterieren:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
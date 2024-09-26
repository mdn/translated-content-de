---
title: "HighlightRegistry: entries()-Methode"
short-title: entries()
slug: Web/API/HighlightRegistry/entries
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`entries()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die `[name, highlight]`-Paare für jedes Element im `HighlightRegistry`-Objekt in der Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Ein neues Iterator-Objekt, das ein Array von `[name, highlight]` für jedes `Highlight`-Objekt im `HighlightRegistry` in Einfügereihenfolge enthält.

## Beispiele

Der folgende Code-Schnipsel erstellt und registriert zwei neue Highlights und gibt dann die Highlights und deren Namen aus, indem er den Iterator verwendet, der von der `entries()`-Methode zurückgegeben wird:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

const iter = CSS.highlights.entries();

console.log(iter.next().value); // ['first-highlight', Highlight]
console.log(iter.next().value); // ['second-highlight', Highlight]
```

Das folgende Codebeispiel zeigt, wie man über die Highlights im Register mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife iteriert:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

for (const [name, highlight] of CSS.highlights.entries()) {
  console.log(`Highlight ${name}`, highlight);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)
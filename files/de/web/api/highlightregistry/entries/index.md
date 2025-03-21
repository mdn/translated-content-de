---
title: "HighlightRegistry: entries()-Methode"
short-title: entries()
slug: Web/API/HighlightRegistry/entries
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`entries()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das die `[name, highlight]`-Paare für jedes Element im `HighlightRegistry`-Objekt in Einfügereihenfolge enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Ein neues Iterator-Objekt, das ein Array von `[name, highlight]` für jedes `Highlight`-Objekt in der `HighlightRegistry` in Einfügereihenfolge enthält.

## Beispiele

Der untenstehende Code-Schnipsel erstellt und registriert zwei neue Hervorhebungen und protokolliert dann die Hervorhebungen und ihre Namen, indem der vom `entries()`-Methode zurückgegebene Iterator verwendet wird:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

const iter = CSS.highlights.entries();

console.log(iter.next().value); // ['first-highlight', Highlight]
console.log(iter.next().value); // ['second-highlight', Highlight]
```

Das folgende Code-Beispiel zeigt, wie man über die Hervorhebungen im Register mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife iteriert:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft der Hervorhebung von Textranges im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

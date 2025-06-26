---
title: "HighlightRegistry: entries() Methode"
short-title: entries()
slug: Web/API/HighlightRegistry/entries
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("CSS Custom Highlight API")}}

Die **`entries()`** Methode des [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) Interfaces gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators) Objekt zurück, das die `[name, highlight]` Paare für jedes Element im `HighlightRegistry` Objekt in der Reihenfolge ihrer Einfügung enthält.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das ein Array von `[name, highlight]` für jedes `Highlight` Objekt in der `HighlightRegistry` in der Reihenfolge ihrer Einfügung enthält.

## Beispiele

Das untenstehende Codebeispiel erstellt und registriert zwei neue Highlights und protokolliert dann die Highlights und deren Namen, indem es den durch die `entries()` Methode zurückgegebenen Iterator verwendet:

```js
const myHighlight1 = new Highlight();
const myHighlight2 = new Highlight();

CSS.highlights.set("first-highlight", myHighlight1);
CSS.highlights.set("second-highlight", myHighlight2);

const iter = CSS.highlights.entries();

console.log(iter.next().value); // ['first-highlight', Highlight]
console.log(iter.next().value); // ['second-highlight', Highlight]
```

Das folgende Codebeispiel zeigt, wie man mithilfe einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife über die Highlights im Register iteriert:

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
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

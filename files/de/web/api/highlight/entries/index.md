---
title: "Highlight: entries()-Methode"
short-title: entries()
slug: Web/API/Highlight/entries
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`entries()`**-Methode der {{domxref("Highlight")}}-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das ein Array von `[range, range]` für jedes {{domxref("Range")}}-Objekt im `Highlight`-Objekt in Einfügereihenfolge enthält.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich der Verwendung von {{jsxref("Set.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Rückgabewert

Ein neues Iterator-Objekt, das ein Array von `[range, range]` für jedes `Range`-Objekt im angegebenen `Highlight` in Einfügereihenfolge enthält.

## Beispiele

Der folgende Codeausschnitt zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und dann die Bereiche mit dem Iterator, der von der `entries()`-Methode zurückgegeben wird, ausgibt:

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const myHighlight = new Highlight();
myHighlight.add(range1);
myHighlight.add(range2);

const iter = myHighlight.entries();

console.log(iter.next().value); // [Range, Range]
console.log(iter.next().value); // [Range, Range]
```

Das folgende Codebeispiel zeigt, wie man über die Bereiche in einem Highlight mit einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife iteriert:

```js
const text = new Text("Time is an illusion. Lunchtime doubly so.");

const range1 = document.createRange();
range1.setStart(text, 0);
range1.setEnd(text, 4);

const range2 = document.createRange();
range2.setStart(text, 21);
range2.setEnd(text, 30);

const highlight = new Highlight();
highlight.add(range1);
highlight.add(range2);

for (const [range] of highlight.entries()) {
  console.log(range.toString());
  // Time
  // Lunchtime
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: Die Zukunft des Text-Markierens im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

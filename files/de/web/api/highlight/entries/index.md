---
title: "Highlight: entries()-Methode"
short-title: entries()
slug: Web/API/Highlight/entries
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("CSS Custom Highlight API")}}

Die **`entries()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle gibt ein neues [Iterator](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)-Objekt zurück, das ein Array von `[range, range]` für jedes [`AbstractRange`](/de/docs/Web/API/AbstractRange)-Objekt im `Highlight`-Objekt in Einfügereihenfolge enthält.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.entries()")}}.

## Syntax

```js-nolint
entries()
```

### Parameter

Keine.

### Rückgabewert

Ein neues Iterator-Objekt, das ein Array von `[range, range]` für jedes `AbstractRange`-Objekt im gegebenen `Highlight` in Einfügereihenfolge enthält.

## Beispiele

Der untenstehende Codeausschnitt zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und dann die Bereiche protokolliert, indem man den vom `entries()`-Methode zurückgegebenen Iterator verwendet:

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

Das folgende Codebeispiel zeigt, wie man über die Bereiche in einem Highlight iteriert, indem man eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwendet:

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

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "Highlight: forEach() Methode"
short-title: forEach()
slug: Web/API/Highlight/forEach
l10n:
  sourceCommit: a2d0346638937e9c92c500dcb568803778e8354e
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight) Schnittstelle führt eine bereitgestellte Funktion einmal für jedes [`AbstractRange`](/de/docs/Web/API/AbstractRange) Objekt im `Highlight`-Objekt aus, in Einfügereihenfolge.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`
  - : Funktion, die für jedes `AbstractRange`-Objekt ausgeführt wird, mit drei Argumenten:
    - `range`, `key`
      - : Das aktuelle `AbstractRange`-Objekt, das im `Highlight` verarbeitet wird. Da es in `Highlight` keine
        Schlüssel gibt, wird das `range` für beide Argumente übergeben.
    - `highlight`
      - : Das `Highlight`-Objekt, auf das `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Code-Beispiel zeigt, wie ein neues Highlight mit zwei Bereichen erstellt wird, und dann wie die Bereiche durch die Verwendung der `forEach()`-Methode protokolliert werden:

```js
function logRanges(range, key, highlight) {
  console.log(`Highlight object ${highlight} contains range ${range}`);
}

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

myHighlight.forEach(logRanges);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Hervorhebens von Textbereichen im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

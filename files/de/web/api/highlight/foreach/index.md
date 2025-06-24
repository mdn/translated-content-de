---
title: "Highlight: forEach() Methode"
short-title: forEach()
slug: Web/API/Highlight/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der [`Highlight`](/de/docs/Web/API/Highlight)-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes [`Range`](/de/docs/Web/API/Range)-Objekt im `Highlight`-Objekt in der Einfügereihenfolge aus.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die für jedes `Range`-Objekt ausgeführt werden soll und drei Argumente nimmt:
    - `range`, `key`
      - : Das aktuelle `Range`-Objekt, das im `Highlight` verarbeitet wird. Da es in `Highlight` keine
        Schlüssel gibt, wird das `range` für beide Argumente übergeben.
    - `highlight`
      - : Das `Highlight`-Objekt, bei dem `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und dann die Bereiche mithilfe der `forEach()`-Methode protokolliert:

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
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

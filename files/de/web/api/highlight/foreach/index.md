---
title: "Highlight: forEach()-Methode"
short-title: forEach()
slug: Web/API/Highlight/forEach
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode des {{domxref("Highlight")}} Interfaces führt eine bereitgestellte Funktion einmal für jedes {{domxref("Range")}}-Objekt im `Highlight`-Objekt in Einfügereihenfolge aus.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die für jedes `Range`-Objekt ausgeführt wird und drei Argumente annimmt:

    - `range`, `key`
      - : Das aktuelle `Range`-Objekt, das im `Highlight` verarbeitet wird. Da es in `Highlight` keine Schlüssel gibt, wird `range` für beide Argumente übergeben.
    - `highlight`
      - : Das `Highlight`-Objekt, auf das `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code-Schnipsel zeigt, wie man ein neues Highlight mit zwei Bereichen erstellt und diese dann mithilfe der `forEach()`-Methode protokolliert:

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

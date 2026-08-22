---
title: "Highlight: forEach() Methode"
short-title: forEach()
slug: Web/API/Highlight/forEach
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`** Methode des [`Highlight`](/de/docs/Web/API/Highlight) Interfaces führt eine bereitgestellte Funktion einmal pro [`AbstractRange`](/de/docs/Web/API/AbstractRange) Objekt im `Highlight` Objekt in Einfügereihenfolge aus.

`Highlight` ist ein {{jsxref("Set")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Set.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`
  - : Funktion, die für jedes `AbstractRange` Objekt ausgeführt wird und drei Argumente nimmt:
    - `range`, `key`
      - : Das aktuelle `AbstractRange` Objekt, das im `Highlight` verarbeitet wird. Da es keine
        Schlüssel in `Highlight` gibt, wird das `range` für beide Argumente übergeben.
    - `highlight`
      - : Das `Highlight` Objekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Code-Schnipsel zeigt, wie Sie ein neues Highlight mit zwei Bereichen erstellen und dann die Bereiche mithilfe der `forEach()`-Methode protokollieren:

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

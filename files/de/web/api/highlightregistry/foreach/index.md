---
title: "HighlightRegistry: forEach() Methode"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt in der Registrierung aus, in der Reihenfolge der Einfügung.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ähnelt dies der Verwendung von {{jsxref("Map.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`
  - : Funktion, die für jedes `Highlight`-Objekt ausgeführt wird und drei Argumente annimmt:
    - `highlight`
      - : Das aktuelle Highlight.
    - `name`
      - : Der Name des Highlights.
    - `registry`
      - : Das Registrierungsobjekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` verwendet wird, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt, wie ein neues Highlight mit zwei Bereichen erstellt wird und dann die Bereiche mithilfe der `forEach()`-Methode protokolliert werden:

```js
function logAllHighlights(highlight, name) {
  console.log(`Highlight ${name} exists in the registry`, highlight);
}

const customHighlight1 = new Highlight();
const customHighlight2 = new Highlight();
const customHighlight3 = new Highlight();

CSS.highlights.set("custom-highlight-1", customHighlight1);
CSS.highlights.set("custom-highlight-2", customHighlight2);
CSS.highlights.set("custom-highlight-3", customHighlight3);

CSS.highlights.forEach(logAllHighlights);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die CSS Custom Highlight API](/de/docs/Web/API/CSS_Custom_Highlight_API)
- [CSS Custom Highlight API: Die Zukunft des Textbereichs-Hervorhebens im Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

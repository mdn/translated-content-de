---
title: "HighlightRegistry: forEach() Methode"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der Schnittstelle [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry) führt eine bereitgestellte Funktion einmal für jedes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt im Registry in der Einfügereihenfolge aus.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die für jedes `Highlight`-Objekt ausgeführt wird, nimmt drei Argumente:

    - `highlight`
      - : Das aktuelle Highlight.
    - `name`
      - : Der Name des Highlights.
    - `registry`
      - : Das Registry-Objekt, auf das `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` verwendet werden soll, wenn `callbackFn` ausgeführt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Das folgende Codebeispiel zeigt, wie ein neues Highlight mit zwei Bereichen erstellt wird und dann die Bereiche mithilfe der `forEach()`-Methode protokolliert werden:

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
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

---
title: "HighlightRegistry: forEach() Methode"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der [`HighlightRegistry`](/de/docs/Web/API/HighlightRegistry)-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes [`Highlight`](/de/docs/Web/API/Highlight)-Objekt im Register in der Einfügereihenfolge aus.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich wie die Verwendung von {{jsxref("Map.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`
  - : Funktion, die für jedes `Highlight`-Objekt ausgeführt wird und drei Argumente erhält:
    - `highlight`
      - : Das aktuelle Highlight.
    - `name`
      - : Der Name des Highlights.
    - `registry`
      - : Das Registerobjekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` bei der Ausführung von `callbackFn` verwendet wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Der folgende Codeausschnitt zeigt, wie ein neues Highlight mit zwei Bereichen erstellt wird und anschließend die Bereiche mithilfe der `forEach()`-Methode protokolliert werden:

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

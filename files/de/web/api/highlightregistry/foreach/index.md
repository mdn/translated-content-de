---
title: "HighlightRegistry: forEach()-Methode"
short-title: forEach()
slug: Web/API/HighlightRegistry/forEach
l10n:
  sourceCommit: 47ed48a36b456f8ea9ab6aaa5969c55d2912edcb
---

{{APIRef("CSS Custom Highlight API")}}

Die **`forEach()`**-Methode der {{domxref("HighlightRegistry")}}-Schnittstelle führt eine bereitgestellte Funktion einmal für jedes {{domxref("Highlight")}}-Objekt im Verzeichnis in Einfügereihenfolge aus.

`HighlightRegistry` ist ein {{jsxref("Map")}}-ähnliches Objekt, daher ist dies ähnlich der Verwendung von {{jsxref("Map.forEach()")}}.

## Syntax

```js-nolint
forEach(callbackFn)
forEach(callbackFn, thisArg)
```

### Parameter

- `callback`

  - : Funktion, die für jedes `Highlight`-Objekt ausgeführt wird und drei Argumente entgegennimmt:

    - `highlight`
      - : Das aktuelle Highlight.
    - `name`
      - : Der Name des Highlights.
    - `registry`
      - : Das Verzeichnisobjekt, auf dem `forEach()` aufgerufen wurde.

- `thisArg`
  - : Wert, der als `this` beim Ausführen von `callbackFn` verwendet wird.

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

- {{domxref("css_custom_highlight_api", "Die CSS Custom Highlight API", "", "nocode")}}
- [CSS Custom Highlight API: The Future of Highlighting Text Ranges on the Web](https://css-tricks.com/css-custom-highlight-api-early-look/)

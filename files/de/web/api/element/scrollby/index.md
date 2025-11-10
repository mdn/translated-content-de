---
title: "Element: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

Die **`scrollBy()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces scrollt ein Element um den angegebenen Betrag.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameter

- `xCoord`
  - : Der horizontale Pixelwert, um den Sie scrollen möchten.
- `yCoord`
  - : Der vertikale Pixelwert, um den Sie scrollen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Gibt an, ob das Scrollen sanft animiert (`smooth`), sofort in einem einzigen Sprung (`instant`) erfolgen soll oder der Browser die Methode wählen sollte (`auto`, Standard).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// scroll an element
element.scrollBy(300, 300);
```

Verwendung von `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

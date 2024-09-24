---
title: "Element: scrollBy()-Methode"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`scrollBy()`**-Methode des {{domxref("Element")}}-Interfaces scrollt ein Element um den angegebenen Betrag.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameter

- `xCoord`
  - : Der horizontale Pixelwert, den Sie scrollen möchten.
- `yCoord`
  - : Der vertikale Pixelwert, den Sie scrollen möchten.
- `options`
  - : Ein Objekt, das folgende Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel auf der Y-Achse an, die das Fenster oder Element scrollen soll.
    - `left`
      - : Gibt die Anzahl der Pixel auf der X-Achse an, die das Fenster oder Element scrollen soll.
    - `behavior`
      - : Gibt an, ob das Scrollen sanft animiert (`smooth`), sofort in einem einzigen Sprung (`instant`) oder vom Browser ausgewählt (`auto`, Standard) erfolgen soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Ein Element scrollen
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

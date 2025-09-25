---
title: "Element: scroll() Methode"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

Die **`scroll()`** Methode der [`Element`](/de/docs/Web/API/Element)
Schnittstelle scrollt das Element zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen
Elements.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das Sie in der oberen linken Ecke angezeigt haben möchten.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das Sie in der oberen linken Ecke angezeigt haben möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder weich animiert erfolgen soll. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: das Scrollen sollte weich animiert werden
        - `instant`: das Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Verwendung von `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

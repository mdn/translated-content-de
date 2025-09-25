---
title: "Element: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle scrollt zu einem bestimmten Koordinatensatz innerhalb eines gegebenen Elements.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das in der oberen linken Ecke angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das in der oberen linken Ecke angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgen soll. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Das Scrollen sollte sanft animiert werden
        - `instant`: Das Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
element.scrollTo(0, 1000);
```

Verwendung von `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop), [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)

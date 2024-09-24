---
title: "Element: scroll() Methode"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`scroll()`** Methode der {{domxref("Element")}}-Schnittstelle scrollt das Element zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das Sie in der oberen linken Ecke anzeigen möchten.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das Sie in der oberen linken Ecke anzeigen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um das Fenster oder Element zu scrollen.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um das Fenster oder Element zu scrollen.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgen soll. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: scrolling sollte sanft animieren
        - `instant`: scrolling sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Setzt das 1000. vertikale Pixel an die Spitze des Elements
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

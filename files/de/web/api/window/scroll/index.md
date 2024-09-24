---
title: "Fenster: scroll()-Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.scroll()`**-Methode scrollt das Fenster zu einem bestimmten Ort im Dokument.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Dokuments, das Sie in der oberen linken Ecke anzeigen möchten.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Dokuments, das Sie in der oberen linken Ecke anzeigen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element verschoben werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element verschoben werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder fließend animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Scrollen soll fließend animiert werden
        - `instant`: Scrollen soll sofort in einem Sprung erfolgen
        - `auto`: Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<!-- Setzen Sie das 100. vertikale Pixel oben im Fenster ein -->

<button onclick="scroll(0, 100);">Klicken Sie, um zum 100. Pixel zu scrollen</button>
```

Verwendung von `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Hinweise

{{domxref("Window.scrollTo()")}} ist im Wesentlichen dasselbe wie diese Methode. Für relatives Scrollen siehe {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}} und {{domxref("Window.scrollByPages()")}}.

Für das Scrollen von Elementen siehe {{domxref("Element.scrollTop")}} und {{domxref("Element.scrollLeft")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.scrollByLines()")}}
- {{domxref("Window.scrollByPages()")}}
- {{domxref("Element.scrollIntoView()")}}

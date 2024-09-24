---
title: "Fenster: scrollTo()-Methode"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.scrollTo()`** Methode scrollt zu einem bestimmten Satz von Koordinaten im Dokument.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Dokuments, das Sie in der oberen linken Ecke anzeigen möchten.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Dokuments, das Sie in der oberen linken Ecke anzeigen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte haben muss:
        - `smooth`: Scrollen sollte sanft animiert werden
        - `instant`: Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
window.scrollTo(0, 1000);
```

Verwendung von `options`:

```js
window.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Hinweise

{{domxref("Window.scroll()")}} ist im Wesentlichen dasselbe wie diese Methode. Für relatives Scrollen, siehe {{domxref("Window.scrollBy()")}}, {{domxref("Window.scrollByLines()")}}, und {{domxref("Window.scrollByPages()")}}.

Für das Scrollen von Elementen, siehe {{domxref("Element.scrollTop")}} und {{domxref("Element.scrollLeft")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

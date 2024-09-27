---
title: "Window: scroll()-Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.scroll()`**-Methode scrollt das Fenster zu einer bestimmten Position im Dokument.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Dokuments, das in der oberen linken Ecke angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Dokuments, das in der oberen linken Ecke angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder animiert fließend erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen sollte fließend animiert sein
        - `instant`: Das Scrollen sollte sofort in einem Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<!-- put the 100th vertical pixel at the top of the window -->

<button onclick="scroll(0, 100);">click to scroll to the 100th pixel</button>
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

[`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo) ist im Wesentlichen dasselbe wie diese Methode. Für relatives Scrollen siehe [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) und [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

Für das Scrollen von Elementen siehe [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) und [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines)
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages)
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)

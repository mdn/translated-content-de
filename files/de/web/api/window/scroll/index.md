---
title: "Window: scroll()-Methode"
short-title: scroll()
slug: Web/API/Window/scroll
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}}

Die **`Window.scroll()`**-Methode scrollt das Fenster zu einer bestimmten Stelle im Dokument.

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
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder mit einer sanften Animation erfolgen soll. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Scrollen sollte sanft animiert werden
        - `instant`: Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Put the 100th vertical pixel at the top of the window
window.scroll(0, 100);
```

Verwendung von `options`:

```js
window.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Anmerkungen

[`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo) ist im Wesentlichen dieselbe Methode. Für relatives Scrollen siehe [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) und [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

Für das Scrollen von Elementen siehe [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) und [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines)
- [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages)
- [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)

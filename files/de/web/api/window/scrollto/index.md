---
title: "Window: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

**`Window.scrollTo()`** scrollt zu einem bestimmten Koordinatensatz im Dokument.

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
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um das Fenster oder Element zu scrollen.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um das Fenster oder Element zu scrollen.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sanft animiert wird. Diese Option ist eine Zeichenkette, die einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen sollte sanft animiert werden
        - `instant`: Das Scrollen sollte sofort und in einem einzigen Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

[`Window.scroll()`](/de/docs/Web/API/Window/scroll) ist im Wesentlichen dasselbe wie diese Methode. Für relatives Scrollen siehe [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) und [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

Für das Scrollen von Elementen siehe [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) und
[`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

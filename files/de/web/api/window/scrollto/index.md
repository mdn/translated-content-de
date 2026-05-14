---
title: "Window: scrollTo()-Methode"
short-title: scrollTo()
slug: Web/API/Window/scrollTo
l10n:
  sourceCommit: 3f96229b10f32dcf39352345e84a1c32e831266d
---

{{APIRef}}

Die **`Window.scrollTo()`** Methode scrollt zu einem bestimmten Satz von
Koordinaten im Dokument.

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des Dokuments, zu der die linke Kante des Viewports scrollen soll.
- `yCoord`
  - : Die y-Koordinate des Dokuments, zu der die obere Kante des Viewports scrollen soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Die y-Koordinate des Dokuments, zu der die obere Kante des Viewports scrollen soll. Dies ist dasselbe wie der `yCoord`-Parameter.
    - `left`
      - : Die x-Koordinate des Dokuments, zu der die linke Kante des Viewports scrollen soll. Dies ist dasselbe wie der `xCoord`-Parameter.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert wird. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft im Dokument bestimmt.

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

[`Window.scroll()`](/de/docs/Web/API/Window/scroll) ist im Wesentlichen dasselbe wie diese Methode. Für relatives
Scrollen, siehe [`Window.scrollBy()`](/de/docs/Web/API/Window/scrollBy), [`Window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines),
und [`Window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

Für das Scrollen von Elementen siehe [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop) und
[`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

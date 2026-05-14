---
title: "Window: scrollBy()-Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 3f96229b10f32dcf39352345e84a1c32e831266d
---

{{APIRef}}

Die **`Window.scrollBy()`**-Methode scrollt das Dokument im
Fenster um den angegebenen Betrag.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameter

- `xCoord`
  - : Der horizontale Pixelwert, um den Sie scrollen möchten.
- `yCoord`
  - : Der vertikale Pixelwert, um den Sie scrollen möchten.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder weich animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird weich animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft im Dokument bestimmt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Um eine Seite nach unten zu scrollen:

```js
window.scrollBy(0, window.innerHeight);
```

Um nach oben zu scrollen:

```js
window.scrollBy(0, -window.innerHeight);
```

Verwendung von `options`:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Anmerkungen

`window.scrollBy()` scrollt um einen bestimmten Betrag, während
[`window.scroll()`](/de/docs/Web/API/Window/scroll) zu einer absoluten Position im Dokument scrollt. Siehe auch
[`window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) und [`window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

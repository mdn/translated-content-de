---
title: "Window: scrollBy() Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.scrollBy()`** Methode scrollt das Dokument im Fenster um den angegebenen Betrag.

## Syntax

```js-nolint
scrollBy(xCoord, yCoord)
scrollBy(options)
```

### Parameter

- `xCoord`
  - : Der horizontale Pixelwert, um den gescrollt werden soll.
- `yCoord`
  - : Der vertikale Pixelwert, um den gescrollt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl von Pixeln entlang der Y-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `left`
      - : Gibt die Anzahl von Pixeln entlang der X-Achse an, um die das Fenster oder Element gescrollt werden soll.
    - `behavior`
      - : Gibt an, ob das Scrollen sanft animiert werden soll (`smooth`), sofort in einem Sprung erfolgen soll (`instant`), oder vom Browser gewählt werden soll (`auto`, Standard).

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

`window.scrollBy()` scrollt um einen bestimmten Betrag, während [`window.scroll()`](/de/docs/Web/API/Window/scroll) zu einer absoluten Position im Dokument scrollt. Siehe auch [`window.scrollByLines()`](/de/docs/Web/API/Window/scrollByLines) und [`window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

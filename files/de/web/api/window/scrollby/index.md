---
title: "Fenster: scrollBy()-Methode"
short-title: scrollBy()
slug: Web/API/Window/scrollBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`Window.scrollBy()`**-Methode scrollt das Dokument im Fenster um den angegebenen Betrag.

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
      - : Gibt an, ob das Scrollen sanft animiert (`smooth`), sofort in einem Sprung (`instant`) erfolgen soll oder der Browser wählen kann (`auto`, Standard).

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

Nutzung von `options`:

```js
window.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Anmerkungen

`window.scrollBy()` scrollt um einen bestimmten Betrag, während
{{domxref("window.scroll()")}} zu einer absoluten Position im Dokument scrollt. Siehe auch
{{domxref("window.scrollByLines()")}} und {{domxref("window.scrollByPages()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

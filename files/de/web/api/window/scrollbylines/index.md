---
title: "Window: scrollByLines()-Methode"
short-title: scrollByLines()
slug: Web/API/Window/scrollByLines
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.scrollByLines()`**-Methode scrollt das Dokument um die angegebene Anzahl von Zeilen.

## Syntax

```js-nolint
scrollByLines(lines)
```

### Parameter

- `lines`
  - : Die Anzahl der Zeilen, um die das Dokument gescrollt werden soll. Dies kann eine positive oder negative ganze Zahl sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<!-- Scroll up the document by 5 lines -->
<button id="scroll-up" onclick="scrollByLines(-5);">Up 5 lines</button>

<!-- Scroll down the document by 5 lines -->
<button id="scroll-down" onclick="scrollByLines(5);">Down 5 lines</button>
```

## Spezifikationen

Dies ist Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`window.scroll()`](/de/docs/Web/API/Window/scroll)
- [`window.scrollBy()`](/de/docs/Web/API/Window/scrollBy)
- [`window.scrollByPages()`](/de/docs/Web/API/Window/scrollByPages)
- [`window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)

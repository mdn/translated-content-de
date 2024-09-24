---
title: "Fenster: scrollByLines()-Methode"
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
  - : Die Anzahl der Zeilen, um die das Dokument gescrollt werden soll. Es kann sich um eine positive oder negative ganze Zahl handeln.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<!-- Scrollen Sie das Dokument um 5 Zeilen nach oben -->
<button id="scroll-up" onclick="scrollByLines(-5);">5 Zeilen nach oben</button>

<!-- Scrollen Sie das Dokument um 5 Zeilen nach unten -->
<button id="scroll-down" onclick="scrollByLines(5);">5 Zeilen nach unten</button>
```

## Spezifikationen

Dies ist kein Bestandteil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("window.scroll()")}}
- {{domxref("window.scrollBy()")}}
- {{domxref("window.scrollByPages()")}}
- {{domxref("window.scrollTo()")}}

---
title: "Window: scrollByLines() Methode"
short-title: scrollByLines()
slug: Web/API/Window/scrollByLines
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef}} {{Non-standard_header}}

Die **`Window.scrollByLines()`**-Methode scrollt das Dokument um die angegebene Anzahl von Zeilen.

## Syntax

```js-nolint
scrollByLines(lines)
```

### Parameter

- `lines`
  - : Die Anzahl der Zeilen, um die das Dokument gescrollt wird. Es kann eine positive oder negative Ganzzahl sein.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```html
<button id="scroll-up">Up 5 lines</button>
<button id="scroll-down">Down 5 lines</button>
```

```js
document.getElementById("scroll-up").addEventListener("click", () => {
  window.scrollByLines(-5);
});
document.getElementById("scroll-down").addEventListener("click", () => {
  window.scrollByLines(5);
});
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

---
title: "Element: scrollBy()-Methode"
short-title: scrollBy()
slug: Web/API/Element/scrollBy
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`scrollBy()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle scrollt ein Element um den angegebenen Betrag.

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
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, die das Fenster oder Element scrollen soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, die das Fenster oder Element scrollen soll.
    - `behavior`
      - : Gibt an, ob das Scrollen gleichmäßig animiert werden soll (`smooth`), sofort in einem Sprung geschehen soll (`instant`), oder ob der Browser entscheiden soll (`auto`, Standard).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// scroll an element
element.scrollBy(300, 300);
```

Verwendung von `options`:

```js
element.scrollBy({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

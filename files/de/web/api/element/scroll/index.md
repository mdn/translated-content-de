---
title: "Element: scroll() Methode"
short-title: scroll()
slug: Web/API/Element/scroll
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`scroll()`** Methode des [`Element`](/de/docs/Web/API/Element)
Interfaces scrollt das Element zu einem bestimmten Satz von Koordinaten innerhalb eines
gegebenen Elements.

## Syntax

```js-nolint
scroll(xCoord, yCoord)
scroll(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des Elements, das in der oberen linken Ecke angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements, das in der oberen linken Ecke angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um die das Fenster oder Element scrollen soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um die das Fenster oder Element scrollen soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Scrollen sollte sanft animieren
        - `instant`: Scrollen sollte sofort in einem einzigen Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Put the 1000th vertical pixel at the top of the element
element.scroll(0, 1000);
```

Verwendung von `options`:

```js
element.scroll({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

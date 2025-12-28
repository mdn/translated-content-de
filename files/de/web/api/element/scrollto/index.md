---
title: "Element: scrollTo()-Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: 45c08c0f5fe0fee0ca63e7a2b209ffdc0faa0b27
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`**-Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

Diese Methode ist ein Alias für [`Element.scroll()`](/de/docs/Web/API/Element/scroll).

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Das Pixel entlang der horizontalen Achse des
    Elements, das oben links angezeigt werden soll.
- `yCoord`
  - : Das Pixel entlang der vertikalen Achse des Elements,
    das oben links angezeigt werden soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, die das Fenster oder das Element scrollen soll.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, die das Fenster oder das Element scrollen soll.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder sanft animiert erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Scrollen soll sanft animiert werden
        - `instant`: Scrollen soll sofort in einem einzigen Sprung erfolgen
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
element.scrollTo(0, 1000);
```

Verwendung von `options`:

```js
element.scrollTo({
  top: 100,
  left: 100,
  behavior: "smooth",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.scrollTop`](/de/docs/Web/API/Element/scrollTop), [`Element.scrollLeft`](/de/docs/Web/API/Element/scrollLeft)
- [`Window.scrollTo()`](/de/docs/Web/API/Window/scrollTo)

---
title: "Element: scrollTo() Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef}}

Die **`scrollTo()`** Methode des [`Element`](/de/docs/Web/API/Element)-Interfaces scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

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
      - : Gibt die Anzahl der Pixel entlang der Y-Achse an, um das Fenster oder das Element zu scrollen.
    - `left`
      - : Gibt die Anzahl der Pixel entlang der X-Achse an, um das Fenster oder das Element zu scrollen.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort oder mit sanfter Animation erfolgt. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Scrollen soll sanft animieren
        - `instant`: Scrollen soll sofort in einem Sprung erfolgen
        - `auto`: Das Scroll-Verhalten wird durch den berechneten Wert von {{cssxref("scroll-behavior")}} bestimmt

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

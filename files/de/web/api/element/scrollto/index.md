---
title: "Element: scrollTo()-Methode"
short-title: scrollTo()
slug: Web/API/Element/scrollTo
l10n:
  sourceCommit: 3f96229b10f32dcf39352345e84a1c32e831266d
---

{{APIRef("CSSOM view API")}}

Die **`scrollTo()`**-Methode des [`Element`](/de/docs/Web/API/Element)
Interfaces scrollt zu einem bestimmten Satz von Koordinaten innerhalb eines gegebenen Elements.

Diese Methode ist ein Alias für [`Element.scroll()`](/de/docs/Web/API/Element/scroll).

## Syntax

```js-nolint
scrollTo(xCoord, yCoord)
scrollTo(options)
```

### Parameter

- `xCoord`
  - : Die x-Koordinate des scrollbaren Inhalts des Elements, zu der die linke Kante des Scrollports des Elements scrollen soll.
- `yCoord`
  - : Die y-Koordinate des scrollbaren Inhalts des Elements, zu der die obere Kante des Scrollports des Elements scrollen soll.
- `options`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `top`
      - : Die y-Koordinate des scrollbaren Inhalts des Elements, zu der die obere Kante des Scrollports des Elements scrollen soll. Dies ist das gleiche wie der `yCoord`-Parameter.
    - `left`
      - : Die x-Koordinate des scrollbaren Inhalts des Elements, zu der die linke Kante des Scrollports des Elements scrollen soll. Dies ist das gleiche wie der `xCoord`-Parameter.
    - `behavior`
      - : Bestimmt, ob das Scrollen sofort erfolgt oder sanft animiert wird. Diese Option ist ein String, der einen der folgenden Werte annehmen muss:
        - `smooth`: Das Scrollen wird sanft animiert.
        - `instant`: Das Scrollen erfolgt sofort in einem einzigen Sprung.
        - `auto`: Das Scrollverhalten wird durch den berechneten Wert der {{cssxref("scroll-behavior")}} CSS-Eigenschaft auf dem Element bestimmt.

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

---
title: "Element: scrollIntoViewIfNeeded()-Methode"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die Methode **`Element.scrollIntoViewIfNeeded()`** scrollt das aktuelle Element in den sichtbaren Bereich des Browser-Fensters, wenn es sich nicht bereits innerhalb dieses Bereichs befindet. Sollte sich das Element bereits im sichtbaren Bereich befinden, wird nicht gescrollt. Diese Methode ist eine proprietäre Variation der standardisierten [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)-Methode.

## Syntax

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Parameter

- `centerIfNeeded` {{optional_inline}}

  - : Ein optionaler boolescher Wert mit einem Standardwert von `true`:

    - Wenn `true`, wird das Element so ausgerichtet, dass es zentriert innerhalb des sichtbaren Bereichs des scrollbareren Vorfahren ist.
    - Wenn `false`, wird das Element an der nächstgelegenen Kante des sichtbaren Bereichs des scrollbareren Vorfahren ausgerichtet. Abhängig davon, welche Kante des sichtbaren Bereichs dem Element näher ist, wird entweder die obere Kante des Elements an die obere Kante des sichtbaren Bereichs ausgerichtet, oder die untere Kante des Elements wird an die untere Kante des sichtbaren Bereichs ausgerichtet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // Centers the element in the visible area
element.scrollIntoViewIfNeeded(false); // Aligns the element to the nearest edge in the visible area
```

## Spezifikationen

Nicht Teil einer Spezifikation. Dies ist eine proprietäre, WebKit-spezifische Methode.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [W3C CSSOM Fehler 17152: Unterstützung für das Zentrieren eines Elements beim Scrollen in den sichtbaren Bereich.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (Feature-Request für ein standardisiertes Äquivalent zu `scrollIntoViewIfNeeded`)

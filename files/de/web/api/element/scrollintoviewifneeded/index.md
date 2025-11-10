---
title: "Element: scrollIntoViewIfNeeded() Methode"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`Element.scrollIntoViewIfNeeded()`** Methode scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits im sichtbaren Bereich des Browserfensters befindet. Wenn das Element bereits im sichtbaren Bereich des Browserfensters ist, findet kein Scrollen statt. Diese Methode ist eine proprietäre Variante der standardisierten [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode.

## Syntax

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Parameter

- `centerIfNeeded` {{optional_inline}}
  - : Ein optionaler boolescher Wert mit dem Standardwert `true`:
    - Wenn `true`, wird das Element so ausgerichtet, dass es zentriert im sichtbaren Bereich des scrollbaren Vorfahren ist.
    - Wenn `false`, wird das Element an der nächstgelegenen Kante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Abhängig davon, welche Kante des sichtbaren Bereichs dem Element am nächsten ist, wird entweder der obere Teil des Elements an der oberen Kante des sichtbaren Bereichs ausgerichtet, oder die untere Kante des Elements wird an der unteren Kante des sichtbaren Bereichs ausgerichtet.

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

- [W3C CSSOM Bug 17152: Unterstützung für das Zentrieren eines Elements beim Scrollen in den Sichtbereich.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (Feature-Anfrage für ein standardisiertes Pendant zu `scrollIntoViewIfNeeded`)

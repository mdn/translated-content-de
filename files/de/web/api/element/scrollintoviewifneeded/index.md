---
title: "Element: Methode scrollIntoViewIfNeeded()"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die Methode **`Element.scrollIntoViewIfNeeded()`** scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, wenn es sich nicht bereits im sichtbaren Bereich des Browserfensters befindet. Befindet sich das Element bereits im sichtbaren Bereich des Browserfensters, erfolgt kein Scrollen. Diese Methode ist eine proprietäre Variante der standardmäßigen [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView) Methode.

## Syntax

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Parameter

- `centerIfNeeded` {{optional_inline}}

  - : Ein optionaler boolescher Wert mit einem Standardwert von `true`:

    - Wenn `true`, wird das Element so ausgerichtet, dass es im sichtbaren Bereich des scrollbaren Vorfahren zentriert ist.
    - Wenn `false`, wird das Element an der nächstgelegenen Kante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Je nachdem, welche Kante des sichtbaren Bereichs dem Element am nächsten ist, wird entweder die Oberkante des Elements an der Oberkante des sichtbaren Bereichs ausgerichtet oder die Unterkante des Elements an der Unterkante des sichtbaren Bereichs.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // Zentriert das Element im sichtbaren Bereich
element.scrollIntoViewIfNeeded(false); // Richtet das Element an der nächstgelegenen Kante im sichtbaren Bereich aus
```

## Spezifikationen

Nicht Teil einer Spezifikation. Dies ist eine proprietäre, WebKit-spezifische Methode.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [W3C CSSOM Bug 17152: Support centering an element when scrolling into view.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (Funktionsanfrage für ein standardisiertes Äquivalent zu `scrollIntoViewIfNeeded`)

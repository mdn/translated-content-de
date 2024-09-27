---
title: "Element: scrollIntoViewIfNeeded() Methode"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}{{Non-standard_header}}

Die **`Element.scrollIntoViewIfNeeded()`**-Methode scrollt das aktuelle Element in den sichtbaren Bereich des Browserfensters, falls es sich nicht bereits darin befindet. Wenn das Element bereits im sichtbaren Bereich des Browserfensters ist, erfolgt kein Scrollen. Diese Methode ist eine proprietäre Variante der standardmäßigen [`Element.scrollIntoView()`](/de/docs/Web/API/Element/scrollIntoView)-Methode.

## Syntax

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Parameter

- `centerIfNeeded` {{optional_inline}}

  - : Ein optionaler boolean Wert mit einem Standardwert von `true`:

    - Wenn `true`, wird das Element so ausgerichtet, dass es im sichtbaren Bereich des scrollbaren Vorfahren zentriert ist.
    - Wenn `false`, wird das Element zur nächstgelegenen Kante des sichtbaren Bereichs des scrollbaren Vorfahren ausgerichtet. Abhängig davon, welche Kante des sichtbaren Bereichs dem Element am nächsten ist, wird entweder der obere Rand des Elements zum oberen Rand des sichtbaren Bereichs oder der untere Rand des Elements zum unteren Rand des sichtbaren Bereichs ausgerichtet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const element = document.getElementById("my-el");

element.scrollIntoViewIfNeeded(); // Centers the element in the visible area
element.scrollIntoViewIfNeeded(false); // Aligns the element to the nearest edge in the visible area
```

## Spezifikationen

Teil keiner Spezifikation. Dies ist eine proprietäre, WebKit-spezifische Methode.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [W3C CSSOM Bug 17152: Unterstützung für das Zentrieren eines Elements beim Scrollen in die Ansicht.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (Funktionsanfrage für ein standardisiertes Äquivalent zu `scrollIntoViewIfNeeded`)

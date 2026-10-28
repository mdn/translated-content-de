---
title: "HTMLTextAreaElement: Methode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die Methode **`setSelectionRange()`** der Schnittstelle [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) legt die Anfangs- und Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element fest.

Allgemeine Informationen zu dieser Methode finden Sie unter [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange).

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der nullbasierte Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Werts des Elements ist, wird als Verweis auf das Ende des Werts behandelt. Siehe die Eigenschaft [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart).
- `selectionEnd`
  - : Der nullbasierte Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer als die Länge des Werts des Elements ist, wird als Verweis auf das Ende des Werts behandelt. Ist `selectionEnd` kleiner als `selectionStart`, werden beide als der Wert von `selectionEnd` behandelt. Siehe die Eigenschaft [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd).
- `selectionDirection` {{optional_inline}}
  - : Eine Zeichenfolge, die angibt, in welcher Richtung die Auswahl vorgenommen wurde. Siehe die Eigenschaft [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection). Mögliche Werte:
    - `"forward"`
    - `"backward"`
    - `"none"`, wenn die Richtung unbekannt oder irrelevant ist. Standardwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`Selection`](/de/docs/Web/API/Selection)

---
title: "HTMLTextAreaElement: setSelectionRange()-Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 76d6c2c2bcca61d0d14ed464356716090097bc7a
---

{{APIRef("HTML DOM")}}

Die **`setSelectionRange()`**-Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces setzt die Start- und Endpositionen der aktuellen Textauswahl und optional die Richtung in einem {{HTMLElement("textarea")}}-Element. Dies aktualisiert den Auswahlszustand sofort, obwohl das visuelle Hervorheben nur erscheint, wenn das Element fokussiert ist. Die Richtung gibt an, in welcher Weise die Auswahl erfolgt ist; zum Beispiel, dass die Auswahl durch den Benutzer durch Klicken und Ziehen vom Ende des ausgewählten Textes zum Beginn hin gesetzt wurde. Zusätzlich werden die [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Events ausgelöst.

Diese Methode aktualisiert die [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart), [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) und [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)-Eigenschaften sofort, unabhängig vom Fokuszustand. Das visuelle Auswahl-Hervorheben erfordert, dass das Element fokussiert ist.

> [!NOTE]
> Während `setSelectionRange()` die Auswahl-Eigenschaften sofort aktualisiert, erscheint das visuelle Auswahl-Hervorheben nur, wenn das `<textarea>` fokussiert ist. Das Fokussieren des Elements wird ebenfalls ein `selectionchange`-Event auslösen.

Um **allen** Text eines `<textarea>`-Elements zu markieren, verwenden Sie die [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)-Methode.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer ist als die Länge des Werts des Elements, wird als das Ende des Werts behandelt. Siehe die [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)-Eigenschaft für weitere Informationen.
- `selectionEnd`
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer ist als die Länge des Werts des Elements, wird als das Ende des Werts behandelt. Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als der Wert von `selectionEnd` behandelt. Siehe die [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)-Eigenschaft für weitere Informationen.
- `selectionDirection` {{optional_inline}}
  - : Das Schlüsselwort `"forward"`, `"backward"` oder der Standardwert `"none"`, welches die Richtung angibt, in der die Auswahl erfolgt ist. Siehe die [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)-Eigenschaft für weitere Informationen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const textarea = document.getElementById("text-box");
const chars = textarea.textLength;
// if the value is more than 10 characters long
if (chars > 10) {
  // Element must be focused to select a range of text within it
  textarea.focus();
  // select the text between the fifth character from the start and
  // the fifth character from the end
  textarea.setSelectionRange(5, chars - 5);
} else {
  // otherwise select all the text
  textarea.select();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element

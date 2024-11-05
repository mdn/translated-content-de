---
title: "HTMLTextAreaElement: Methode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 5ec73135c99fc620cdbfec8db62d29cc7ae43f45
---

{{APIRef("HTML DOM")}}

Die **`setSelectionRange()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces legt die Start- und Endpositionen der aktuellen Textauswahl fest und optional die Richtung in einem {{HTMLElement("textarea")}} Element. Die Richtung gibt an, in welcher Auswahl sie als erfolgt angesehen werden soll; beispielsweise, dass die Auswahl durch Klicken und Ziehen des Benutzers vom Ende des markierten Textes zum Anfang festgelegt wurde. Zusätzlich werden die Ereignisse [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) ausgelöst.

Diese Methode aktualisiert auch die Eigenschaften [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart), [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) und [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection).

> [!NOTE]
> Das `<textarea>` muss fokussiert sein, um die Auswahl eines Textunterabschnitts mit der Methode `setSelectionRange()` zu ermöglichen. Das Setzen des Fokus löst auch ein `selectchange` Ereignis aus.

Um **den gesamten** Text eines `<textarea>` Elements auszuwählen, verwenden Sie die Methode [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select).

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer ist als die Länge des Wertes des Elements, wird als zeigend auf das Ende des Wertes behandelt. Siehe die Eigenschaft [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) für weitere Informationen.
- `selectionEnd`
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer ist als die Länge des Wertes des Elements, wird als zeigend auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als Wert von `selectionEnd` behandelt. Siehe die Eigenschaft [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) für weitere Informationen.
- `selectionDirection` {{optional_inline}}
  - : Das Schlüsselwort `"forward"`, `"backward"` oder der Standardwert `"none"` — zeigt die Richtung an, in der die Auswahl erfolgt ist. Siehe die Eigenschaft [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection) für weitere Informationen.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

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

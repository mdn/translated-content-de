---
title: "HTMLTextAreaElement: setSelectionRange() Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

Die **`setSelectionRange()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces setzt die Start- und Endpositionen der aktuellen Textauswahl und optional die Richtung in einem {{HTMLElement("textarea")}}-Element. Die Richtung gibt an, in welcher die Auswahl erfolgt sein soll, zum Beispiel, dass die Auswahl durch Klicken und Ziehen des Benutzers vom Ende des ausgewählten Textes zum Anfang gesetzt wurde. Zusätzlich werden die [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Ereignisse ausgelöst.

Diese Methode aktualisiert auch die Eigenschaften [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart), [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) und [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection).

> [!NOTE]
> Der `<textarea>` muss fokussiert sein, um eine Untersektion des Textes mit der `setSelectionRange()` Methode auszuwählen. Das Setzen des Fokus löst ebenfalls ein `selectchange` Ereignis aus.

Um **alle** Texte eines `<textarea>` Elements auszuwählen, verwenden Sie die [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select) Methode.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer ist als die Länge des Wertes des Elements, wird als Zeiger auf das Ende des Wertes behandelt. Weitere Informationen finden Sie in der [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) Eigenschaft.
- `selectionEnd`
  - : Der Index des Zeichens _nach_ dem zuletzt ausgewählten Zeichen. Ein Index, der größer ist als die Länge des Wertes des Elements, wird als Zeiger auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als der Wert von `selectionEnd` behandelt. Weitere Informationen finden Sie in der [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) Eigenschaft.
- `selectionDirection` {{optional_inline}}
  - : Das Schlüsselwort `"forward"`, `"backward"` oder der Standardwert `"none"` — dies gibt die Richtung an, in der die Auswahl als durchgeführt betrachtet wird. Weitere Informationen finden Sie in der [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection) Eigenschaft.

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

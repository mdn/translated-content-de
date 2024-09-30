---
title: "HTMLTextAreaElement: Methode setSelectionRange()"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{APIRef("HTML DOM")}}

Die **`setSelectionRange()`**-Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces legt die Start- und Endpositionen der aktuellen Textauswahl und optional die Richtung in einem {{HTMLElement("textarea")}}-Element fest. Die Richtung gibt an, in welcher Weise die Auswahl erfolgt ist; zum Beispiel, dass die Auswahl durch Klicken und Ziehen des Benutzers vom Ende des ausgewählten Textes zum Anfang gesetzt wurde. Zusätzlich werden die Ereignisse [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) ausgelöst.

Diese Methode aktualisiert auch die Eigenschaften [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart), [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) und [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection).

> [!NOTE]
> Das `<textarea>` muss fokussiert sein, um eine Untersektion des Textes mit der `setSelectionRange()`-Methode auszuwählen. Das Setzen des Fokus löst ebenfalls ein `selectchange`-Ereignis aus.

Um den **gesamten** Text eines `<textarea>`-Elements auszuwählen, verwenden Sie die Methode [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select).

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als am Ende des Wertes liegend behandelt. Siehe die Eigenschaft [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) für weitere Informationen.
- `selectionEnd`
  - : Der Index des Zeichens _nach_ dem zuletzt ausgewählten Zeichen. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als am Ende des Wertes liegend behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt. Siehe die Eigenschaft [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) für weitere Informationen.
- `selectionDirection` {{optional_inline}}
  - : Das Schlüsselwort `"forward"`, `"backward"` oder der Standard `"none"` — das angibt, in welcher Richtung die Auswahl als erfolgt betrachtet wird. Siehe die Eigenschaft [`selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection) für weitere Informationen.

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

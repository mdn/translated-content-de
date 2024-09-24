---
title: "HTMLTextAreaElement: setSelectionRange()-Methode"
short-title: setSelectionRange()
slug: Web/API/HTMLTextAreaElement/setSelectionRange
l10n:
  sourceCommit: 4cf65c9c822d91583db20f6f160571c7ac303dec
---

{{APIRef("HTML DOM")}}

Die **setSelectionRange()**-Methode der {{domxref("HTMLTextAreaElement")}}-Schnittstelle setzt die Start- und Endpositionen der aktuellen Textauswahl und optional die Richtung in einem {{HTMLElement("textarea")}}-Element. Die Richtung zeigt an, in welcher der Auswahlvorgang stattgefunden haben soll; beispielsweise, dass die Auswahl dadurch gesetzt wurde, dass der Benutzer vom Ende des ausgewählten Textes zum Anfang geklickt und gezogen hat. Darüber hinaus werden die Ereignisse {{domxref("HTMLTextAreaElement.select_event", "select")}} und {{domxref("HTMLTextAreaElement.selectionchange_event", "selectchange")}} ausgelöst.

Diese Methode aktualisiert auch die Eigenschaften {{domxref("HTMLTextAreaElement.selectionStart")}}, {{domxref("HTMLTextAreaElement.selectionEnd")}} und {{domxref("HTMLTextAreaElement.selectionDirection")}}.

> [!NOTE]
> Das `<textarea>` muss fokussiert sein, um einen Teil des Textes mit der Methode `setSelectionRange()` auswählen zu können. Das Setzen des Fokus löst auch ein `selectchange`-Ereignis aus.

Um **den gesamten** Text eines `<textarea>`-Elements auszuwählen, verwenden Sie die {{domxref("HTMLTextAreaElement.select()")}}-Methode.

## Syntax

```js-nolint
setSelectionRange(selectionStart, selectionEnd)
setSelectionRange(selectionStart, selectionEnd, selectionDirection)
```

### Parameter

- `selectionStart`
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer ist als die Länge des Elementwerts, wird als Verweis auf das Ende des Wertes behandelt. Siehe die {{domxref("HTMLTextAreaElement.selectionStart", "selectionStart")}}-Eigenschaft für weitere Informationen.
- `selectionEnd`
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer ist als die Länge des Elementwerts, wird als Verweis auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt. Siehe die {{domxref("HTMLTextAreaElement.selectionEnd", "selectionEnd")}}-Eigenschaft für weitere Informationen.
- `selectionDirection` {{optional_inline}}
  - : Das Schlüsselwort `"forward"`, `"backward"` oder der Standardwert `"none"`, welches die Richtung angibt, in der die Auswahl durchgeführt wurde. Siehe die {{domxref("HTMLTextAreaElement.selectionDirection", "selectionDirection")}}-Eigenschaft für weitere Informationen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const textarea = document.getElementById("text-box");
const chars = textarea.textLength;
// wenn der Wert mehr als 10 Zeichen lang ist
if (chars > 10) {
  // Das Element muss fokussiert werden, um einen Textbereich darin auszuwählen
  textarea.focus();
  // den Text zwischen dem fünften Zeichen vom Anfang und
  // dem fünften Zeichen vom Ende auswählen
  textarea.setSelectionRange(5, chars - 5);
} else {
  // andernfalls gesamten Text auswählen
  textarea.select();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- {{domxref("HTMLTextAreaElement")}}
- {{domxref("HTMLTextAreaElement.select()")}}
- {{domxref("HTMLTextAreaElement.textLength")}}
- {{domxref("Selection")}}
- {{cssxref("::selection")}} Pseudo-Element

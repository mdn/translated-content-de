---
title: "HTMLTextAreaElement: setRangeText() Methode"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

Die **`setRangeText()`**-Methode der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle ersetzt einen Textbereich in einem {{HTMLElement("textarea")}}-Element durch neuen Text, der als Argument übergeben wird.

Zusätzliche optionale Parameter beinhalten den Anfang des zu ändernden Textabschnitts, das Ende des Abschnitts und ein Schlüsselwort, das definiert, welcher Teil des `<textarea>` nach der Aktualisierung des Textes ausgewählt werden soll. Wenn die `startSelection`- und `endSelection`-Argumente nicht angegeben sind, wird angenommen, dass der Bereich die Auswahl ist.

Das letzte Argument bestimmt, wie die Auswahl eingestellt wird, nachdem der Text ersetzt wurde. Die möglichen Werte sind `"select"`, welches den neu eingefügten Text auswählt, `"start"`, das die Auswahl direkt vor den eingefügten Text verschiebt, `"end"`, das die Auswahl direkt nach den eingefügten Text verschiebt, oder standardmäßig `"preserve"`, welches versucht, die Auswahl beizubehalten.

Zusätzlich werden die [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event)- und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignisse ausgelöst.

## Syntax

```js-nolint
setRangeText(replacement)
setRangeText(replacement, startSelection)
setRangeText(replacement, startSelection, endSelection)
setRangeText(replacement, startSelection, endSelection, selectMode)
```

### Parameter

- `replacement`
  - : Der einzufügende String.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) {{optional_inline}}
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Wertes des Elements ist, wird behandelt, als ob er auf das Ende des Wertes zeigt.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) {{optional_inline}}
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein
    Index, der größer als die Länge des Wertes des Elements ist, wird behandelt, als ob er auf das Ende des Wertes zeigt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt.
- `selectMode` {{optional_inline}}
  - : Ein Schlüsselwort, entweder `select`, `start`, `end` oder standardmäßig `preserve`, das definiert, wie die Auswahl eingestellt werden soll, nachdem der Text ersetzt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird anschließend hervorgehoben (ausgewählt).

### HTML

```html
<label for="ta">Example text input:</label>
<textarea id="ta">
  This text has NOT been updated.
</textarea>
<button id="btn">Update text</button>
```

### JavaScript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  changeText();
});

function changeText() {
  const textarea = document.getElementById("text-box");
  textarea.focus();
  textarea.setRangeText("ALREADY", 14, 17, "select");
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTMLElement("textarea")}}
- [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element

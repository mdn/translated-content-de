---
title: "HTMLTextAreaElement: setRangeText() Methode"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{APIRef("HTML DOM")}}

Die **`setRangeText()`** Methode des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) Interfaces ersetzt einen Textbereich in einem {{HTMLElement("textarea")}}-Element mit neuem Text, der als Argument übergeben wird.

Zusätzliche optionale Parameter beinhalten den Anfang des zu ändernden Textbereichs, das Ende des Bereichs und ein Schlüsselwort, das definiert, welcher Teil des `<textarea>` nach dem Aktualisieren des Textes ausgewählt werden soll. Wenn die Argumente `startSelection` und `endSelection` nicht bereitgestellt werden, wird davon ausgegangen, dass der Bereich die Auswahl ist.

Das letzte Argument bestimmt, wie die Auswahl festgelegt wird, nachdem der Text ersetzt wurde. Die möglichen Werte sind `"select"`, welches den neu eingefügten Text auswählt, `"start"`, welches die Auswahl unmittelbar vor den eingefügten Text verschiebt, `"end"`, welches die Auswahl unmittelbar nach den eingefügten Text verschiebt, oder der Standardwert `"preserve"`, welches versucht, die Auswahl beizubehalten.

Zusätzlich werden die Ereignisse [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) ausgelöst.

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
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Werts des Elements ist, wird als auf das Ende des Werts zeigend behandelt.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) {{optional_inline}}
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer als die Länge des Werts des Elements ist, wird als auf das Ende des Werts zeigend behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt.
- `selectMode` {{optional_inline}}
  - : Ein Schlüsselwort, entweder `select`, `start`, `end` oder das Standard `preserve`, das definiert, wie die Auswahl nach dem Ersetzen des Textes festgelegt wird.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um einen Teil des Texts im Textfeld zu ersetzen. Der neu eingefügte Text wird danach hervorgehoben (ausgewählt).

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
  const textarea = document.getElementById("ta");
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

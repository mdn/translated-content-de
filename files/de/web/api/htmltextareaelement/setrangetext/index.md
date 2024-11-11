---
title: "HTMLTextAreaElement: setRangeText()-Methode"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: 2fc3f7386ea35d40c80f05f9587c23abb3ce880b
---

{{APIRef("HTML DOM")}}

Die **`setRangeText()`**-Methode der [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Schnittstelle ersetzt einen Textbereich in einem {{HTMLElement("textarea")}}-Element mit neuem Text, der als Argument übergeben wird.

Zusätzliche optionale Parameter umfassen den Beginn des zu ändernden Textabschnitts, das Ende des Abschnitts und ein Schlüsselwort, das definiert, welcher Teil des `<textarea>` nach der Aktualisierung des Textes ausgewählt werden soll. Wenn die Argumente `startSelection` und `endSelection` nicht bereitgestellt werden, wird davon ausgegangen, dass der Bereich die Auswahl ist.

Das letzte Argument bestimmt, wie die Auswahl festgelegt wird, nachdem der Text ersetzt wurde. Die möglichen Werte sind `"select"`, was den neu eingefügten Text auswählt, `"start"`, was die Auswahl direkt vor den eingefügten Text verschiebt, `"end"`, was die Auswahl direkt nach den eingefügten Text verschiebt, oder der Standardwert `"preserve"`, der versucht, die Auswahl beizubehalten.

Zusätzlich werden die [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) und [`selectchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event)-Ereignisse ausgelöst.

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
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als Verweis auf das Ende des Wertes behandelt.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) {{optional_inline}}
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer als die Länge des Wertes des Elements ist, wird als Verweis auf das Ende des Wertes behandelt. Wenn `selectionEnd` kleiner als `selectionStart` ist, werden beide als der Wert von `selectionEnd` behandelt.
- `selectMode` {{optional_inline}}
  - : Ein Schlüsselwort, entweder `select`, `start`, `end` oder der Standardwert `preserve`, das definiert wie die Auswahl festgelegt werden soll, nachdem der Text ersetzt wurde.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie in diesem Beispiel auf die Schaltfläche, um einen Teil des Textes in der Textbox zu ersetzen. Der neu eingefügte Text wird danach hervorgehoben (markiert).

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

---
title: "HTMLTextAreaElement: Methode setRangeText()"
short-title: setRangeText()
slug: Web/API/HTMLTextAreaElement/setRangeText
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{APIRef("HTML DOM")}}

Die Methode **`setRangeText()`** der Schnittstelle [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement) ersetzt einen Textbereich in einem {{HTMLElement("textarea")}}-Element mit dem als Argument übergebenen neuen Text.

Zusätzliche optionale Parameter umfassen den Beginn des zu ändernden Textabschnitts, das Ende des Abschnitts und ein Schlüsselwort, das bestimmt, welcher Teil des `<textarea>` nach der Aktualisierung des Textes ausgewählt werden soll. Wenn die Argumente `startSelection` und `endSelection` nicht bereitgestellt werden, wird der Bereich als die Auswahl angenommen.

Das letzte Argument bestimmt, wie die Auswahl nach dem Ersetzen des Textes gesetzt wird. Die möglichen Werte sind `"select"`, welches den neu eingefügten Text auswählt, `"start"`, welches die Auswahl direkt vor den eingefügten Text bewegt, `"end"`, welches die Auswahl direkt hinter den eingefügten Text bewegt, oder der Standardwert `"preserve"`, welcher versucht, die Auswahl zu bewahren.

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
  - : Der einzusetzende String.
- [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) {{optional_inline}}
  - : Der Index des ersten ausgewählten Zeichens. Ein Index, der größer ist als die Länge des Werts des Elements, wird als der Wert am Ende behandelt.
- [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) {{optional_inline}}
  - : Der Index des Zeichens _nach_ dem letzten ausgewählten Zeichen. Ein Index, der größer ist als die Länge des Werts des Elements, wird als der Wert am Ende behandelt. Wenn `selectionEnd` kleiner ist als `selectionStart`, werden beide als der Wert von `selectionEnd` behandelt.
- `selectMode` {{optional_inline}}
  - : Ein Schlüsselwort, entweder `select`, `start`, `end` oder der Standardwert `preserve`, welches definiert, wie die Auswahl nach dem Ersetzen des Textes gesetzt werden soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Klicken Sie auf die Schaltfläche in diesem Beispiel, um einen Teil des Textes im Textfeld zu ersetzen. Der neu eingefügte Text wird danach hervorgehoben (ausgewählt).

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

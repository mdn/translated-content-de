---
title: "HTMLTextAreaElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLTextAreaElement/selectionStart
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an.

## Wert

Eine nicht-negative Zahl.

## Beschreibung

Die `selectionStart`-Eigenschaft ist eine Zahl, die den nullbasierten Index des ersten ausgewählten Zeichens in einem `<textarea>` darstellt. Die Eigenschaft kann verwendet werden, um die Startposition abzurufen oder festzulegen.

Wenn nichts ausgewählt ist, entspricht der Wert von `selectionStart` und [`selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd) der Position des Cursors (Caret) innerhalb des `<textarea>`-Elements.

Wenn `selectionStart` auf einen Wert gesetzt wird, der größer ist als der aktuelle Wert von `selectionEnd`, werden beide Eigenschaften auf den neuen Wert aktualisiert. Werte, die größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) sind, werden als `textLength` behandelt.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}} Pseudo-Element mit dem ausgewählten Text übereinstimmt.

Das Setzen von `selectionStart` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel meldet den ausgewählten Text sowie seine Start- und Endpositionen. Wählen Sie einen Text im Textbereich aus und klicken Sie dann auf die Schaltfläche.

### HTML

```html
<label for="text-box">Select some text:</label>
<textarea id="text-box" rows="3">The quick brown fox.</textarea>
<button id="show-selection" type="button">Show selection</button>
<p id="output">No selection reported yet.</p>
```

### JavaScript

```js
const textBox = document.querySelector("#text-box");
const output = document.querySelector("#output");

document.querySelector("#show-selection").addEventListener("click", () => {
  const start = textBox.selectionStart;
  const end = textBox.selectionEnd;
  const selectedText = textBox.value.substring(start, end);

  output.textContent = `You selected "${selectedText}" (start: ${start}, end: ${end}).`;
});
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
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element

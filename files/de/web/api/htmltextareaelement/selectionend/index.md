---
title: "HTMLTextAreaElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLTextAreaElement/selectionEnd
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft des [`HTMLTextAreaElement`](/de/docs/Web/API/HTMLTextAreaElement)-Interfaces gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("textarea")}}-Element an.

## Wert

Eine nicht-negative Zahl.

## Beschreibung

Die `selectionEnd`-Eigenschaft ist eine Zahl, die den nullbasierten Index des Zeichens darstellt, das unmittelbar auf das zuletzt ausgewählte Zeichen in einem `<textarea>` folgt. Die Eigenschaft kann verwendet werden, um die Endposition abzurufen oder festzulegen.

Wenn nichts ausgewählt ist, ist der Wert von sowohl [`selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart) als auch `selectionEnd` die Position des Cursors (Einfügemarke) im `<textarea>`-Element.

Wird `selectionEnd` auf einen Wert kleiner als der aktuelle Wert von `selectionStart` gesetzt, werden beide Eigenschaften auf den neuen Wert aktualisiert. Werte, die größer als die [`textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength) sind, werden als `textLength` behandelt.

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass der `<textarea>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element mit dem ausgewählten Text übereinstimmt.

Das Setzen von `selectionEnd` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLTextAreaElement/select_event) aus.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel gibt den ausgewählten Text und seine Start- und Endpositionen aus. Wählen Sie etwas Text im Textbereich aus und klicken Sie dann auf die Schaltfläche.

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
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`HTMLTextAreaElement.selectionDirection`](/de/docs/Web/API/HTMLTextAreaElement/selectionDirection)
- [`HTMLTextAreaElement.textLength`](/de/docs/Web/API/HTMLTextAreaElement/textLength)
- [`selectionchange`](/de/docs/Web/API/HTMLTextAreaElement/selectionchange_event) Ereignis
- [`HTMLTextAreaElement.select()`](/de/docs/Web/API/HTMLTextAreaElement/select)
- [`HTMLTextAreaElement.setSelectionRange()`](/de/docs/Web/API/HTMLTextAreaElement/setSelectionRange)
- [`HTMLTextAreaElement.setRangeText()`](/de/docs/Web/API/HTMLTextAreaElement/setRangeText)
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element

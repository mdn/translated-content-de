---
title: "HTMLInputElement: selectionEnd-Eigenschaft"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

Die **`selectionEnd`**-Eigenschaft der [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)-Schnittstelle gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("input")}}-Element an.

## Wert

Eine nicht-negative Zahl.

## Beschreibung

Die `selectionEnd`-Eigenschaft ist eine Zahl, die den nullbasierten Index des Zeichens direkt nach dem zuletzt ausgewählten Zeichen in einem Text-`<input>` darstellt. Die Eigenschaft kann verwendet werden, um die Endposition abzurufen oder festzulegen.

Wenn nichts ausgewählt ist, ist der Wert von sowohl [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) als auch `selectionEnd` die Position des Cursors (Caret) im `<input>`-Element.

Wenn `selectionEnd` auf einen Wert kleiner als der aktuelle Wert von `selectionStart` gesetzt wird, werden beide Eigenschaften auf den neuen Wert aktualisiert. Werte, die größer sind als die Länge des Eingabewertes, werden als Ende des Wertes behandelt.

Die `selectionEnd`-Eigenschaft gilt nur für Eingaben der Typen `text`, `search`, `url`, `tel` und `password`. Bei anderen Eingabetypen führt das Lesen der Eigenschaft zu `null`, und das Setzen löst einen `InvalidStateError`-[`DOMException`](/de/docs/Web/API/DOMException) aus.

Der Eigenschaftswert kann abgerufen und festgelegt werden, ohne dass das `<input>` den Fokus hat, aber das Element muss den Fokus haben, damit das {{cssxref("::selection")}}-Pseudo-Element den ausgewählten Text abgleichen kann.

Das Setzen von `selectionEnd` auf einen neuen Wert löst die [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)- und [`select`](/de/docs/Web/API/HTMLInputElement/select_event)-Ereignisse aus.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel gibt den ausgewählten Text sowie seine Start- und Endpositionen aus. Wählen Sie einen Text im Eingabefeld aus und klicken Sie dann auf die Schaltfläche.

### HTML

```html
<label for="text-box">Select some text:</label>
<input id="text-box" type="text" value="The quick brown fox." />
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

- {{HTMLElement("input")}}
- [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement)
- [`HTMLInputElement.selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart)
- [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)-Ereignis
- [`HTMLInputElement.select()`](/de/docs/Web/API/HTMLInputElement/select)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
- [`HTMLInputElement.setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}}-Pseudo-Element

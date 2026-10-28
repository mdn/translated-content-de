---
title: "HTMLInputElement: Eigenschaft selectionEnd"
short-title: selectionEnd
slug: Web/API/HTMLInputElement/selectionEnd
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`selectionEnd`** der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gibt die Endposition der aktuellen Textauswahl in einem {{HTMLElement("input")}}-Element an.

## Wert

Eine nicht negative Zahl, die den nullbasierten Index des Zeichens unmittelbar nach dem letzten ausgewählten Zeichen in einem `<input>`-Element für Texteingaben angibt. Wenn kein Text ausgewählt ist, entsprechen sowohl [`selectionStart`](/de/docs/Web/API/HTMLInputElement/selectionStart) als auch `selectionEnd` der Position des Cursors im `<input>`-Element.

Wird `selectionEnd` auf einen Wert gesetzt, der kleiner als der aktuelle Wert von `selectionStart` ist, werden beide Eigenschaften auf den neuen Wert gesetzt. Werte, die größer als die Länge des Eingabewerts sind, werden als Ende des Werts behandelt. Das Setzen von `selectionEnd` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLInputElement/select_event) aus.

Der Eigenschaftswert kann gelesen und gesetzt werden, ohne dass das `<input>`-Element den Fokus hat. Damit das Pseudoelement {{cssxref("::selection")}} auf den ausgewählten Text angewendet wird, muss das Element jedoch den Fokus haben.

Die Eigenschaft `selectionEnd` gilt nur für Eingabefelder der Typen `text`, `search`, `url`, `tel` und `password`. Bei anderen Eingabetypen gibt das Lesen der Eigenschaft `null` zurück; das Setzen löst eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `InvalidStateError` aus.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt den ausgewählten Text sowie dessen Start- und Endposition an. Wählen Sie im Eingabefeld einen Text aus und klicken Sie anschließend auf die Schaltfläche.

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
- Ereignis [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)
- [`HTMLInputElement.select()`](/de/docs/Web/API/HTMLInputElement/select)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
- [`HTMLInputElement.setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
- [`HTMLTextAreaElement.selectionEnd`](/de/docs/Web/API/HTMLTextAreaElement/selectionEnd)
- [`Selection`](/de/docs/Web/API/Selection)
- Pseudoelement {{cssxref("::selection")}}

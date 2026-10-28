---
title: "HTMLInputElement: Eigenschaft selectionStart"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: 3869033353873623537ef2d810c1406a7299b49c
---

{{APIRef("HTML DOM")}}

Die Eigenschaft **`selectionStart`** der Schnittstelle [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) gibt die Anfangsposition der aktuellen Textauswahl in einem {{HTMLElement("input")}}-Element an.

## Wert

Eine nicht negative Zahl, die den nullbasierten Index des ersten ausgewählten Zeichens in einem `<input>`-Element mit Texteingabe angibt. Wenn nichts ausgewählt ist, entsprechen sowohl `selectionStart` als auch [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) der Position des Cursors (der Einfügemarke) innerhalb des `<input>`-Elements.

Wenn `selectionStart` auf einen Wert gesetzt wird, der größer als der aktuelle Wert von `selectionEnd` ist, werden beide Eigenschaften auf den neuen Wert gesetzt. Werte, die größer als die Länge des Eingabewerts sind, werden als Ende des Werts behandelt. Das Setzen von `selectionStart` auf einen neuen Wert löst die Ereignisse [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLInputElement/select_event) aus.

Der Eigenschaftswert kann auch dann abgerufen und gesetzt werden, wenn das `<input>`-Element keinen Fokus hat. Damit das Pseudoelement {{cssxref("::selection")}} jedoch auf den ausgewählten Text zutrifft, muss das Element den Fokus haben.

Die Eigenschaft `selectionStart` gilt nur für Eingaben der Typen `text`, `search`, `url`, `tel` und `password`. Bei anderen Eingabetypen gibt das Lesen der Eigenschaft `null` zurück; beim Setzen wird eine [`DOMException`](/de/docs/Web/API/DOMException) vom Typ `InvalidStateError` ausgelöst.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel zeigt den ausgewählten Text sowie dessen Anfangs- und Endposition an. Wählen Sie Text im Eingabefeld aus und klicken Sie anschließend auf die Schaltfläche.

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
- [`HTMLInputElement.selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd)
- [`HTMLInputElement.selectionDirection`](/de/docs/Web/API/HTMLInputElement/selectionDirection)
- Ereignis [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event)
- [`HTMLInputElement.select()`](/de/docs/Web/API/HTMLInputElement/select)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
- [`HTMLInputElement.setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`Selection`](/de/docs/Web/API/Selection)
- Pseudoelement {{cssxref("::selection")}}

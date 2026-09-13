---
title: "HTMLInputElement: selectionStart-Eigenschaft"
short-title: selectionStart
slug: Web/API/HTMLInputElement/selectionStart
l10n:
  sourceCommit: 7a255a5942e2e3edb4cc5c1604a7bb597d34157f
---

{{APIRef("HTML DOM")}}

Die **`selectionStart`**-Eigenschaft des [`HTMLInputElement`](/de/docs/Web/API/HTMLInputElement) Interfaces gibt die Startposition der aktuellen Textauswahl in einem {{HTMLElement("input")}}-Element an.

## Wert

Eine nicht-negative Zahl.

## Beschreibung

Die `selectionStart`-Eigenschaft ist eine Zahl, die den nullbasierten Index des ersten ausgewählten Zeichens in einem Text-`<input>` darstellt. Die Eigenschaft kann verwendet werden, um die Startposition abzurufen oder festzulegen.

Wenn nichts ausgewählt ist, ist der Wert von sowohl `selectionStart` als auch [`selectionEnd`](/de/docs/Web/API/HTMLInputElement/selectionEnd) die Position des Cursors (Eingabepunkt) innerhalb des `<input>`-Elements.

Wenn `selectionStart` auf einen Wert gesetzt wird, der größer ist als der aktuelle Wert von `selectionEnd`, werden beide Eigenschaften auf den neuen Wert aktualisiert. Werte, die größer sind als die Länge des Werts des Eingabefelds, werden als das Ende des Werts behandelt.

Die `selectionStart`-Eigenschaft gilt nur für Eingaben der Typen `text`, `search`, `url`, `tel` und `password`. Bei anderen Eingabetypen gibt das Lesen der Eigenschaft `null` zurück, und das Setzen wirft einen `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException).

Der Eigenschaftswert kann abgerufen und gesetzt werden, ohne dass das `<input>` im Fokus ist, aber das Element muss im Fokus sein, damit das {{cssxref("::selection")}} Pseudo-Element den ausgewählten Text zuordnen kann.

Das Setzen von `selectionStart` auf einen neuen Wert löst die [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) und [`select`](/de/docs/Web/API/HTMLInputElement/select_event) Ereignisse aus.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel meldet den ausgewählten Text sowie dessen Start- und Endpositionen. Wählen Sie etwas Text im Eingabefeld aus und klicken Sie dann auf den Button.

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
- [`selectionchange`](/de/docs/Web/API/HTMLInputElement/selectionchange_event) Ereignis
- [`HTMLInputElement.select()`](/de/docs/Web/API/HTMLInputElement/select)
- [`HTMLInputElement.setSelectionRange()`](/de/docs/Web/API/HTMLInputElement/setSelectionRange)
- [`HTMLInputElement.setRangeText()`](/de/docs/Web/API/HTMLInputElement/setRangeText)
- [`HTMLTextAreaElement.selectionStart`](/de/docs/Web/API/HTMLTextAreaElement/selectionStart)
- [`Selection`](/de/docs/Web/API/Selection)
- {{cssxref("::selection")}} Pseudo-Element

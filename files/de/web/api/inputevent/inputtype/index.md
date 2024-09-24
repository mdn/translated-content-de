---
title: "InputEvent: inputType-Eigenschaft"
short-title: inputType
slug: Web/API/InputEvent/inputType
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("UI Events")}}

Die **`inputType`** schreibgeschützte Eigenschaft des
{{domxref("InputEvent")}}-Interfaces gibt den Typ der Änderung an, die an bearbeitbarem Inhalt vorgenommen wurde.
Mögliche Änderungen umfassen beispielsweise das Einfügen, Löschen und Formatieren von Text.

## Wert

Ein String, der den Typ der vorgenommenen Eingabe enthält. Es gibt viele
mögliche Werte, wie `insertText`, `deleteContentBackward`,
`insertFromPaste` und `formatBold`. Für eine vollständige Liste der
verfügbaren Eingabetypen siehe den [Attribut-Abschnitt der Input Events Level 2 Spezifikation](https://w3c.github.io/input-events/#interface-InputEvent-Attributes).

## Beispiele

Dieses Beispiel protokolliert den `inputType` für [Eingabe-Ereignisse](/de/docs/Web/API/Element/input_event) in einem bearbeitbaren
{{htmlElement("div")}}.

### HTML

```html
<p id="log">Input type:</p>
<div
  contenteditable="true"
  style="margin: 20px;padding: 20px;border:2px dashed red;">
  <p>
    Some sample text. Try inserting line breaks, or deleting text in different
    ways, or pasting different content in.
  </p>
  <hr />
  <ul>
    <li>A sample</li>
    <li>bulleted</li>
    <li>list.</li>
  </ul>
  <p>Another paragraph.</p>
</div>
```

### JavaScript

```js
const log = document.getElementById("log");
const editable = document.querySelector("div[contenteditable]");
editable.addEventListener("input", logInputType);

function logInputType(event) {
  log.textContent = `Input type: ${event.inputType}`;
}
```

### Ergebnis

Versuchen Sie, den Text innerhalb des `<div>` zu bearbeiten und sehen Sie, was passiert.

{{EmbedLiveSample("Examples", '100%', 500)}}

> [!NOTE]
> Siehe auch [Masayuki Nakanos InputEvent-Testsuite](https://d-toybox.com/studio/lib/input_event_viewer.html) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

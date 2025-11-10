---
title: "InputEvent: Eigenschaft inputType"
short-title: inputType
slug: Web/API/InputEvent/inputType
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("UI Events")}}

Die schreibgeschützte Eigenschaft **`inputType`** des [`InputEvent`](/de/docs/Web/API/InputEvent)-Interfaces gibt den Typ der Änderung zurück, die an bearbeitbarem Inhalt vorgenommen wurde. Mögliche Änderungen umfassen beispielsweise das Einfügen, Löschen und Formatieren von Text.

## Wert

Ein String, der den Typ der vorgenommenen Eingabe enthält. Es gibt viele mögliche Werte, wie `insertText`, `deleteContentBackward`, `insertFromPaste` und `formatBold`. Für eine vollständige Liste der verfügbaren Eingabetypen siehe den [Abschnitt "Attributes" der Input Events Level 2 Spezifikation](https://w3c.github.io/input-events/#interface-InputEvent-Attributes).

## Beispiele

Dieses Beispiel protokolliert den `inputType` für [input events](/de/docs/Web/API/Element/input_event) auf einem bearbeitbaren {{htmlElement("div")}}.

### HTML

```html
<p id="log">Input type:</p>
<div contenteditable="true" class="sample-text">
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

### CSS

```css
.sample-text {
  margin: 20px;
  padding: 20px;
  border: 2px dashed red;
}
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

Versuchen Sie, den Text im `<div>` zu bearbeiten und sehen Sie, was passiert.

{{EmbedLiveSample("Examples", '100%', 500)}}

> [!NOTE]
> Siehe auch [Masayuki Nakanos InputEvent-Test-Suite](https://d-toybox.com/studio/lib/input_event_viewer.html) für ein detaillierteres Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

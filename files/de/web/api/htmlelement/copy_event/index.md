---
title: "HTMLElement: copy-Event"
short-title: copy
slug: Web/API/HTMLElement/copy_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("HTML DOM") }}

Das **`copy`**-Event wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("copy", (event) => { })

oncopy = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die von der benutzerinitiierten [`cut`](/de/docs/Web/API/HTMLElement/cut_event), `copy` oder [`paste`](/de/docs/Web/API/HTMLElement/paste_event)-Operation betroffenen Daten sowie deren MIME-Typ enthält.

## Beispiel

Dieses Beispiel blockiert jeden Kopier- und Einfügeversuch aus dem {{htmlElement("textarea")}}.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">
Try copying and pasting text into this field!
</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
const log = document.getElementById("log");

function logCopy(event) {
  log.innerText = `Copy blocked!\n${log.innerText}`;
  event.preventDefault();
}

function logPaste(event) {
  log.innerText = `Paste blocked!\n${log.innerText}`;
  event.preventDefault();
}

const editor = document.getElementById("editor");

editor.oncopy = logCopy;
editor.onpaste = logPaste;
```

### Ergebnis

{{EmbedLiveSample("Example", 700, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - [`cut`](/de/docs/Web/API/HTMLElement/cut_event)-Ereignis
  - [`paste`](/de/docs/Web/API/HTMLElement/paste_event)-Ereignis

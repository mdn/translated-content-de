---
title: "HTMLElement: Paste-Ereignis"
short-title: paste
slug: Web/API/HTMLElement/paste_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("HTML DOM") }}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-{{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DataTransfer")}}-Objekt, das die von der benutzerinitiierten {{domxref("HTMLElement/cut_event", "cut")}}, {{domxref("HTMLElement/copy_event", "copy")}} oder `paste`-Operation betroffenen Daten und ihren MIME-Typ enthält.

## Beispiel

Dieses Beispiel protokolliert jeden Kopier- und Einfügeversuch in dem {{htmlElement("textarea")}}.

### HTML

```html
<h3>Spielen Sie mit diesem Textbereich:</h3>
<textarea id="editor" rows="3">
Try copying and pasting text into this field!
</textarea>

<h3>Protokoll:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function logPaste(event) {
  log.innerText = `Pasted!\n${log.innerText}`;
}

const editor = document.getElementById("editor");
const log = document.getElementById("log");

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
  - {{domxref("HTMLElement.copy_event", "copy")}}-Ereignis
  - {{domxref("HTMLElement.cut_event", "cut")}}-Ereignis

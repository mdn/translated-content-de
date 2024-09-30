---
title: "HTMLElement: paste Event"
short-title: paste
slug: Web/API/HTMLElement/paste_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("HTML DOM") }}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-`Event`_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die durch die vom Benutzer initiierte [`cut`](/de/docs/Web/API/HTMLElement/cut_event), [`copy`](/de/docs/Web/API/HTMLElement/copy_event) oder `paste`-Operation betroffenen Daten sowie deren MIME-Typ enthält.

## Beispiel

Dieses Beispiel protokolliert jeden Kopier- und Einfügeversuch in das {{htmlElement("textarea")}}.

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
  - [`copy`](/de/docs/Web/API/HTMLElement/copy_event)-Ereignis
  - [`cut`](/de/docs/Web/API/HTMLElement/cut_event)-Ereignis

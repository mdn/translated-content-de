---
title: "HTMLElement: paste-Event"
short-title: paste
slug: Web/API/HTMLElement/paste_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("HTML DOM") }}

Das **`paste`**-Event wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("paste", (event) => { })

onpaste = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die Daten enthält, die von der vom Benutzer initiierten [`cut`](/de/docs/Web/API/HTMLElement/cut_event)-, [`copy`](/de/docs/Web/API/HTMLElement/copy_event)- oder `paste`-Operation betroffen sind, zusammen mit ihrem MIME-Typ.

## Beispiel

Dieses Beispiel protokolliert jeden Kopier- und Einfügeversuch in der {{htmlElement("textarea")}}.

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
  - [`copy`](/de/docs/Web/API/HTMLElement/copy_event) Ereignis
  - [`cut`](/de/docs/Web/API/HTMLElement/cut_event) Ereignis

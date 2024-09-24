---
title: "HTMLElement: copy Ereignis"
short-title: copy
slug: Web/API/HTMLElement/copy_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("HTML DOM") }}

Das **`copy`** Ereignis wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternteil {{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DataTransfer")}}-Objekt, das die von der vom Benutzer initiierten {{domxref("HTMLElement/cut_event", "cut")}}, `copy` oder {{domxref("HTMLElement/paste_event", "paste")}} Operation betroffenen Daten sowie deren MIME-Typ enthält.

## Beispiel

Dieses Beispiel blockiert jeden Kopier- und Einfügeversuch aus dem {{htmlElement("textarea")}}.

### HTML

```html
<h3>Interagieren Sie mit diesem Textfeld:</h3>
<textarea id="editor" rows="3">
Versuchen Sie, Text in dieses Feld zu kopieren und einzufügen!
</textarea>

<h3>Logbuch:</h3>
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
  - {{domxref("HTMLElement.cut_event", "cut")}} Ereignis
  - {{domxref("HTMLElement.paste_event", "paste")}} Ereignis

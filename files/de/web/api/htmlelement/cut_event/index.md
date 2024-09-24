---
title: "HTMLElement: cut-Ereignis"
short-title: cut
slug: Web/API/HTMLElement/cut_event
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{ APIRef("HTML DOM") }}

Das **`cut`**-Ereignis wird ausgelöst, wenn der Benutzer eine Ausschneiden-Aktion über die Benutzeroberfläche des Browsers initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Eltern-{{domxref("Event")}}_.

- {{domxref("ClipboardEvent.clipboardData")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DataTransfer")}}-Objekt, das die von der benutzerinitiierten Ausschneide-, {{domxref("HTMLElement/copy_event", "Kopier")}}- oder {{domxref("HTMLElement/paste_event", "Einfüge")}}-Operation betroffenen Daten sowie deren MIME-Typ enthält.

## Beispiel

Dieses Beispiel ermöglicht das Kopieren von Text aus dem {{htmlElement("textarea")}}, erlaubt jedoch nicht das Ausschneiden von Text. Es protokolliert auch jeden Kopier- und Ausschneideversuch.

### HTML

```html
<h3>Spielen Sie mit diesem Textbereich:</h3>
<textarea id="editor" rows="3">
Versuchen Sie, den Text in diesem Feld zu kopieren und auszuschneiden!
</textarea>

<h3>Protokoll:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Kopiert!\n${log.innerText}`;
}

function preventCut(event) {
  event.preventDefault();
  log.innerText = `Ausschneiden blockiert!\n${log.innerText}`;
}

const editor = document.getElementById("editor");
const log = document.getElementById("log");

editor.oncopy = logCopy;
editor.oncut = preventCut;
```

### Ergebnis

{{EmbedLiveSample("Example", 700, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse
  - {{domxref("HTMLElement.copy_event", "kopieren")}}-Ereignis
  - {{domxref("HTMLElement.paste_event", "einfügen")}}-Ereignis

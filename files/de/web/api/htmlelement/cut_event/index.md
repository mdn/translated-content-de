---
title: "HTMLElement: cut Ereignis"
short-title: cut
slug: Web/API/HTMLElement/cut_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{ APIRef("HTML DOM") }}

Das **`cut`** Ereignis wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Ereigniseigenschaften

_Erbt auch Eigenschaften von seinem Elternobjekt [`Event`](/de/docs/Web/API/Event)_.

- [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) {{ReadOnlyInline}}
  - : Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das die Daten enthält, die von der vom Benutzer initiierten `cut`, [`copy`](/de/docs/Web/API/HTMLElement/copy_event), oder [`paste`](/de/docs/Web/API/HTMLElement/paste_event) Operation betroffen sind, zusammen mit ihrem MIME-Typ.

## Beispiel

Dieses Beispiel erlaubt das Kopieren von Text aus dem {{htmlElement("textarea")}}, aber nicht das Ausschneiden von Text. Es protokolliert auch jeden Kopier- und Ausschneideversuch.

### HTML

```html
<h3>Play with this text area:</h3>
<textarea id="editor" rows="3">
Try copying and cutting the text in this field!
</textarea>

<h3>Log:</h3>
<p id="log"></p>
```

### JavaScript

```js
function logCopy(event) {
  log.innerText = `Copied!\n${log.innerText}`;
}

function preventCut(event) {
  event.preventDefault();
  log.innerText = `Cut blocked!\n${log.innerText}`;
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
  - [`copy`](/de/docs/Web/API/HTMLElement/copy_event) Ereignis
  - [`paste`](/de/docs/Web/API/HTMLElement/paste_event) Ereignis

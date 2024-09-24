---
title: "Element: Einfügen-Ereignis"
short-title: einfügen
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

Das **`paste`**-Ereignis der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine "Einfügen"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Befindet sich der Cursor in einem editierbaren Kontext (zum Beispiel in einem {{HTMLElement("textarea")}} oder einem Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable) auf `true` gesetzt), dann ist die Standardaktion, den Inhalt der Zwischenablage an der Cursorposition in das Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf den Inhalt der Zwischenablage zugreifen, indem er {{domxref("DataTransfer/getData", "getData()")}} auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (zum Beispiel, um einige andere Daten oder eine Transformation der Zwischenablageinhalte einzufügen), muss ein Ereignishandler die Standardaktion mit {{domxref("Event/preventDefault", "event.preventDefault()")}} abbrechen und dann die gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `paste`-Ereignis zu erstellen und auszulösen, aber dies wird den Dokumenteninhalt nicht beeinflussen.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [komponiert](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="source" contenteditable="true">Kopieren Sie Text aus diesem Feld.</div>
<div class="target" contenteditable="true">Und fügen Sie ihn in dieses ein.</div>
```

```css hidden
div.source,
div.target {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const target = document.querySelector("div.target");

target.addEventListener("paste", (event) => {
  event.preventDefault();

  let paste = (event.clipboardData || window.clipboardData).getData("text");
  paste = paste.toUpperCase();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(paste));
  selection.collapseToEnd();
});
```

#### Ergebnis

{{ EmbedLiveSample('Live_example', '100%', '120px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}}
- Dieses Ereignis auf {{domxref("Document")}} Zielen: {{domxref("Document/paste_event", "paste")}}
- Dieses Ereignis auf {{domxref("Window")}} Zielen: {{domxref("Window/paste_event", "paste")}}

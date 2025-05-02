---
title: "Element: paste event"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`paste`**-Ereignis der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Nutzer über die Benutzeroberfläche des Browsers eine "Einfügen"-Aktion initiiert hat.

Befindet sich der Cursor in einem editierbaren Kontext (zum Beispiel in einem {{HTMLElement("textarea")}} oder einem Element mit dem Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt), erfolgt die Standardeaktion, die Inhalte der Zwischenablage an der Cursorposition in das Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf den Inhalt der Zwischenablage zugreifen, indem er [`getData()`](/de/docs/Web/API/DataTransfer/getData) auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (zum Beispiel um andere Daten oder eine Transformation der Zwischenablageinhalte einzufügen), muss ein Ereignishandler die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen und dann seine gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `paste`-Ereignis zu konstruieren und auszulösen, aber dies wird den Inhalt des Dokuments nicht beeinflussen.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [abbruchsbereit](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("paste", (event) => { })

onpaste = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="source" contenteditable="true">Copy text from this box.</div>
<div class="target" contenteditable="true">And paste it into this one.</div>
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

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) Ziele: [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Ziele: [`paste`](/de/docs/Web/API/Window/paste_event)

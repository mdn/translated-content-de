---
title: "Element: paste-Ereignis"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

Das **`paste`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine "Einfügen"-Aktion initiiert hat.

Wenn der Cursor in einem bearbeitbaren Kontext ist (zum Beispiel in einem {{HTMLElement("textarea")}} oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable)-Attribut auf `true` gesetzt), besteht die Standardaktion darin, den Inhalt der Zwischenablage an der Cursorposition in das Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf die Inhalte der Zwischenablage zugreifen, indem er [`getData()`](/de/docs/Web/API/DataTransfer/getData) auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (zum Beispiel, um einige andere Daten oder eine Transformation des Inhalts der Zwischenablage einzufügen), muss ein Ereignishandler die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen und dann die gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `paste`-Ereignis zu erstellen und auszulösen, aber dies wird den Dokumentinhalt nicht beeinflussen.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [stornierbar](/de/docs/Web/API/Event/cancelable) und ist [komponiert](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
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
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document)-Ziele: [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window)-Ziele: [`paste`](/de/docs/Web/API/Window/paste_event)

---
title: "Element: paste event"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: f4c0e822eb6a1ea438c7342f43a3e4809adbd56a
---

{{APIRef}}

Das **`paste`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine "Einfügen"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Wenn sich der Cursor in einem editierbaren Kontext befindet (zum Beispiel in einer {{HTMLElement("textarea")}} oder einem Element mit dem [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable)-Attribut auf `true` gesetzt), ist die Standardaktion, den Inhalt der Zwischenablage an der Cursorposition in das Dokument einzufügen.

Ein Handler für dieses Ereignis kann auf die Inhalte der Zwischenablage zugreifen, indem er [`getData()`](/de/docs/Web/API/DataTransfer/getData) auf der `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (zum Beispiel, um andere Daten oder eine Transformation der Zwischenablageinhalte einzufügen), muss ein Ereignishandler die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbrechen und dann die gewünschten Daten manuell einfügen.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `paste`-Ereignis zu konstruieren und abzusetzen, aber dies wird die Inhalte des Dokuments nicht beeinflussen.

Dieses Ereignis [bubbles](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) den DOM-Baum hinauf, letztendlich bis zum [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [komponiert](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

- [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
- [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis

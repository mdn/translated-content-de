---
title: "Element: paste-Ereignis"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Clipboard API")}}

Das **`paste`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn ein Benutzer über die Benutzeroberfläche des Browsers eine Aktion zum Einfügen gestartet hat.

Befindet sich der Cursor in einem bearbeitbaren Bereich (beispielsweise in einem {{HTMLElement("textarea")}} oder einem Element, dessen Attribut [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) auf `true` gesetzt ist), wird standardmäßig der Inhalt der Zwischenablage an der Cursorposition in das Dokument eingefügt.

Ein Handler für dieses Ereignis kann auf den Inhalt der Zwischenablage zugreifen, indem er [`getData()`](/de/docs/Web/API/DataTransfer/getData) für die `clipboardData`-Eigenschaft des Ereignisses aufruft.

Um das Standardverhalten zu überschreiben (beispielsweise um andere Daten oder eine veränderte Fassung des Inhalts der Zwischenablage einzufügen), muss ein Event-Handler die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindern und anschließend die gewünschten Daten manuell einfügen.

Ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `paste`-Ereignis kann erstellt und ausgelöst werden. Dies wirkt sich jedoch nicht auf den Inhalt des Dokuments aus.

Dieses Ereignis [steigt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) im DOM-Baum bis zu [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) auf, ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("paste", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onpaste = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

### Interaktives Beispiel

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

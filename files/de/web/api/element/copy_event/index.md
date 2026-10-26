---
title: "Element: copy-Ereignis"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Clipboard API")}}

Das **`copy`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn eine Person über die Benutzeroberfläche des Browsers einen Kopiervorgang startet.

Die Standardaktion des Ereignisses besteht darin, die Auswahl (sofern vorhanden) in die Zwischenablage zu kopieren.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) für die Eigenschaft [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert.

Der Handler kann die Daten aus der Zwischenablage jedoch nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `copy`-Ereignis zu erzeugen und auszulösen. Dies wirkt sich jedoch nicht auf die Systemzwischenablage aus.

Dieses Ereignis [steigt im DOM-Baum auf](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), schließlich bis zu [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window). Es ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("copy", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncopy = (event) => { }
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
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
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
- [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis

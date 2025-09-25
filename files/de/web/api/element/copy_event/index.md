---
title: "Element: copy event"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Clipboard API")}}

Das **`copy`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Die Standardaktion des Ereignisses besteht darin, die Auswahl (falls vorhanden) in die Zwischenablage zu kopieren.

Ein Ereignishandler kann _den_ Inhalt der Zwischenablage ändern, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion des Ereignisses mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert.

Der Handler kann jedoch _nicht_ die Daten der Zwischenablage lesen.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `copy`-Ereignis zu erstellen und auszulösen, dies wirkt sich jedoch nicht auf die System-Zwischenablage aus.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) die DOM-Baumstruktur hoch, schließlich bis zu [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), es ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [komponiert](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("copy", (event) => { })

oncopy = (event) => { }
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

- [`cut`](/de/docs/Web/API/Element/cut_event) Ereignis
- [`paste`](/de/docs/Web/API/Element/paste_event) Ereignis

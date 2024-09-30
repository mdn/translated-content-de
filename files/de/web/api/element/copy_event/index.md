---
title: "Element: copy Ereignis"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

Das **`copy`** Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Die Standardaktion des Ereignisses besteht darin, die Auswahl (falls vorhanden) in die Zwischenablage zu kopieren.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _modifizieren_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) Eigenschaft des Ereignisses aufruft und die Standardaktion des Ereignisses mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Der Handler kann jedoch nicht die Daten der Zwischenablage _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `copy` Ereignis zu erstellen und auszulösen, aber dies wird keine Auswirkung auf die System-Zwischenablage haben.

Dieses Ereignis [bubbelt](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [stornierbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
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

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis bei [`Document`](/de/docs/Web/API/Document) Zielen: [`copy`](/de/docs/Web/API/Document/copy_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window) Zielen: [`copy`](/de/docs/Web/API/Window/copy_event)

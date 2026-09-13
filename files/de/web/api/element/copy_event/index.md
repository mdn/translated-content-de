---
title: "Element: copy-Ereignis"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Clipboard API")}}

Das **`copy`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Die Standardaktion des Ereignisses ist das Kopieren der Auswahl (falls vorhanden) in die Zwischenablage.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er `setData(format, data)` auf die [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion des Ereignisses mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Der Handler kann jedoch die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `copy`-Ereignis zu konstruieren und zu dispatchen, aber dies beeinflusst nicht die Systemzwischenablage.

Dieses Ereignis [bubblet](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) den DOM-Baum hinauf, schließlich bis zum [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), ist [cancelable](/de/docs/Web/API/Event/cancelable) und ist [composed](/de/docs/Web/API/Event/composed).

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

- [`cut`](/de/docs/Web/API/Element/cut_event)-Ereignis
- [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis

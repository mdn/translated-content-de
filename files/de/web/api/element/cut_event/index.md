---
title: "Element: cut-Ereignis"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Clipboard API")}}

Das **`cut`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert.

Wenn der Benutzer versucht, eine Ausschneideaktion auf nicht editierbaren Inhalt auszuführen, wird das `cut`-Ereignis dennoch ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Systemzwischenablage zu kopieren und sie aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignishandler, der die Standardaktion zum "Ausschneiden" emulieren und gleichzeitig die Zwischenablage ändern möchte, muss die Auswahl auch manuell aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `cut`-Ereignis zu erstellen und zu versenden, aber dies hat keinen Einfluss auf die Systemzwischenablage oder den Inhalt des Dokuments.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) den DOM-Baum hinauf, schließlich zu [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window), es ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

### Live-Beispiel

#### HTML

```html
<div class="source" contenteditable="true">Cut text from this box.</div>
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

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
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

- [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignis
- [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignis

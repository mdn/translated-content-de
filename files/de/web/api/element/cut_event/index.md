---
title: "Element: cut event"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`cut`**-Ereignis der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Wenn der Benutzer versucht, eine Ausschneideaktion auf nicht bearbeitbarem Inhalt auszuführen, wird das `cut`-Ereignis trotzdem ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Systemzwischenablage zu kopieren und aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann die Zwischenablage-Inhalte _ändern_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData)-Eigenschaft des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignishandler, der die Standardaktion für "Ausschneiden" emulieren und gleichzeitig die Zwischenablage ändern möchte, muss die Auswahl daher auch manuell aus dem Dokument entfernen.

Der Handler kann die Zwischenablage-Daten nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut`-Ereignis zu konstruieren und zu versenden, aber dies wird weder die Systemzwischenablage noch den Dokumentinhalt beeinflussen.

Dieses Ereignis [blubbert](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling), ist [abbruchsbereit](/de/docs/Web/API/Event/cancelable) und ist [zusammengesetzt](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

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

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document)-Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window)-Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)

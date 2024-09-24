---
title: "Element: cut-Ereignis"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

Das **`cut`**-Ereignis der [Zwischenablage-API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert.

Wenn der Benutzer versucht, eine Ausschneideaktion auf nicht editierbaren Inhalten durchzuführen, wird das `cut`-Ereignis trotzdem ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses ist es, die aktuelle Auswahl (falls vorhanden) in die Systemzwischenablage zu kopieren und sie aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er {{domxref("DataTransfer.setData", "setData(format, data)")}} auf der {{domxref("ClipboardEvent.clipboardData")}}-Eigenschaft des Ereignisses aufruft und die Standardaktion mit {{domxref("Event/preventDefault", "event.preventDefault()")}} abbricht.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Ein Ereignishandler, der die Standardaktion für "Ausschneiden" nachbilden möchte, während er die Zwischenablage modifiziert, muss auch manuell die Auswahl aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut`-Ereignis zu erstellen und auszulösen, aber dies wird weder die Systemzwischenablage noch den Inhalt des Dokuments beeinflussen.

Dieses Ereignis [bubbling](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [cancelable](/de/docs/Web/API/Event/cancelable) und ist [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

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

- Verwandte Ereignisse: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/paste_event", "paste")}}
- Dieses Ereignis bei {{domxref("Document")}}-Zielen: {{domxref("Document/cut_event", "cut")}}
- Dieses Ereignis bei {{domxref("Window")}}-Zielen: {{domxref("Window/cut_event", "cut")}}

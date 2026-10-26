---
title: "Element: cut-Ereignis"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: 195b87dbb0e63aab27700b606fc96c4cd7982f64
---

{{APIRef("Clipboard API")}}

Das **`cut`**-Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn ein Benutzer über die Benutzeroberfläche des Browsers eine Ausschneiden-Aktion auslöst.

Wenn ein Benutzer versucht, nicht bearbeitbare Inhalte auszuschneiden, wird das `cut`-Ereignis ebenfalls ausgelöst, das Ereignisobjekt enthält jedoch keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Zwischenablage des Systems zu kopieren und sie aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _ändern_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) für die Eigenschaft [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) verhindert.

Beachten Sie jedoch, dass dadurch auch die Aktualisierung des Dokuments verhindert wird. Ein Ereignis-Handler, der die Standardaktion für das Ausschneiden nachbilden und zugleich den Inhalt der Zwischenablage ändern möchte, muss die Auswahl daher auch manuell aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/API/Document_Object_Model/Events#creating_and_dispatching_events) `cut`-Ereignis zu erstellen und auszulösen. Dies wirkt sich jedoch weder auf die Zwischenablage des Systems noch auf den Inhalt des Dokuments aus.

Dieses Ereignis [steigt](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) im DOM-Baum auf, bis es schließlich [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) erreicht. Es ist [abbrechbar](/de/docs/Web/API/Event/cancelable) und [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("cut", (event) => { })
```

Alternativ können Sie ihn der [Ereignis-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
oncut = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

### Interaktives Beispiel

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

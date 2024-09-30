---
title: "Element: cut Ereignis"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef}}

Das **`cut`** Ereignis der [Clipboard API](/de/docs/Web/API/Clipboard_API) wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine "Ausschneiden"-Aktion initiiert hat.

Wenn der Benutzer versucht, eine Ausschneideaktion auf nicht editierbarem Inhalt durchzuführen, wird das `cut` Ereignis dennoch ausgelöst, aber das Ereignisobjekt enthält keine Daten.

Die Standardaktion des Ereignisses besteht darin, die aktuelle Auswahl (falls vorhanden) in die Zwischenablage des Systems zu kopieren und aus dem Dokument zu entfernen.

Ein Handler für dieses Ereignis kann den Inhalt der Zwischenablage _modifizieren_, indem er [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData) auf der [`ClipboardEvent.clipboardData`](/de/docs/Web/API/ClipboardEvent/clipboardData) Eigenschaft des Ereignisses aufruft und die Standardaktion mit [`event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) abbricht.

Beachten Sie jedoch, dass das Abbrechen der Standardaktion auch verhindert, dass das Dokument aktualisiert wird. Daher muss ein Ereignishandler, der die Standardaktion für "Ausschneiden" nachahmen möchte, während er die Zwischenablage modifiziert, auch manuell die Auswahl aus dem Dokument entfernen.

Der Handler kann die Daten der Zwischenablage nicht _lesen_.

Es ist möglich, ein [synthetisches](/de/docs/Web/Events/Creating_and_triggering_events) `cut` Ereignis zu konstruieren und auszulösen, aber dies hat keine Auswirkungen auf die System-Zwischenablage oder den Inhalt des Dokuments.

Dieses Ereignis [bubbles](/de/docs/Learn/JavaScript/Building_blocks/Event_bubbling), ist [cancelable](/de/docs/Web/API/Event/cancelable) und ist [composed](/de/docs/Web/API/Event/composed).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
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
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)

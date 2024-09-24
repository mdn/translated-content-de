---
title: "HTMLElement: dragleave Ereignis"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das `dragleave`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziel zum Ablegen verlässt.

Dieses Ereignis kann nicht abgebrochen werden und kann bis zum {{domxref("Document")}} und {{domxref("Window")}} Objekt hochblubbern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dragleave", (event) => {});

ondragleave = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind die Eigenschaften der übergeordneten Schnittstelle, {{domxref("Event")}}, verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Zurücksetzen der Stile der Ablagezone bei dragleave

In diesem Beispiel haben wir ein ziehbares Element in einem Container. Versuchen Sie, das Element zu greifen, über den anderen Container zu ziehen und es loszulassen.

Wir geben dem anderen Container einen lila Hintergrund, während sich das ziehbare Element darüber befindet, um anzuzeigen, dass es auf den Container gelegt werden könnte. Wir lauschen dem `dragleave`-Ereignis, um den Hintergrund des Containers zurückzusetzen, wenn das ziehbare Element den Container verlässt.

In diesem teilweisen Beispiel haben wir jedoch das Ablegen nicht implementiert: Für ein vollständiges Beispiel von Drag and Drop sehen Sie bitte die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event) Ereignis.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">This div is draggable</div>
</div>
<div class="dropzone" id="droptarget"></div>
```

#### CSS

```css
body {
  /* Verhindert, dass der Benutzer im Beispiel Text auswählt */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
const target = document.getElementById("droptarget");
target.addEventListener("dragenter", (event) => {
  // Potenzielles Ablegeziel hervorheben, wenn das ziehbare Element es betritt
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // Hintergrund des potenziellen Ablegeziels zurücksetzen, wenn das ziehbare Element es verlässt
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Resetting drop zone styles on dragleave')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere Drag-and-Drop-Ereignisse:

  - {{domxref("HTMLElement/drag_event", "drag")}}
  - {{domxref("HTMLElement/dragstart_event", "dragstart")}}
  - {{domxref("HTMLElement/dragend_event", "dragend")}}
  - {{domxref("HTMLElement/dragover_event", "dragover")}}
  - {{domxref("HTMLElement/dragenter_event", "dragenter")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

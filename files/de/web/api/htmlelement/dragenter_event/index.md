---
title: "HTMLElement: dragenter-Ereignis"
short-title: dragenter
slug: Web/API/HTMLElement/dragenter_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das `dragenter`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl einen gültigen Zielbereich betritt. Das Zielobjekt ist die _unmittelbare Benutzerauswahl_ (das vom Benutzer direkt als Zielbereich angegebene Element) oder das {{HTMLElement("body")}}-Element.

Dieses Ereignis ist abbrechbar und kann bis zum {{domxref("Document")}}- und {{domxref("Window")}}-Objekt durchbubbeln.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("dragenter", (event) => {});

ondragenter = (event) => {};
```

## Ereignistyp

Ein {{domxref("DragEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften sind Eigenschaften der übergeordneten Schnittstelle {{domxref("Event")}} verfügbar._

- {{domxref('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Die Daten, die während einer Drag-and-Drop-Interaktion übertragen werden.

## Beispiele

### Stilgestaltung von Zielbereichen bei dragenter

In diesem Beispiel haben wir ein ziehbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und es loszulassen.

Wir lauschen auf das `dragenter`-Ereignis, um dem anderen Container einen lila Hintergrund zu geben, während das ziehbare Element darüber ist, um anzuzeigen, dass das Element auf den Container fallen gelassen werden könnte.

In diesem teilweisen Beispiel haben wir jedoch das Absenken nicht implementiert: Für ein vollständiges Beispiel von Drag-and-Drop siehe die Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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
  // Potenzielles Ziel beim Eintritt des ziehbaren Elements hervorheben
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // Hintergrund des potenziellen Ziels zurücksetzen, wenn das ziehbare Element es verlässt
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### Ergebnis

{{EmbedLiveSample('Styling drop zones on dragenter')}}

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
  - {{domxref("HTMLElement/dragleave_event", "dragleave")}}
  - {{domxref("HTMLElement/drop_event", "drop")}}

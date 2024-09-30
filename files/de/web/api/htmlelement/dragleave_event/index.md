---
title: "HTMLElement: dragleave-Ereignis"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
l10n:
  sourceCommit: ea4425b74ae0dc1ec17737b4e28d8df2b73f1eae
---

{{APIRef}}

Das `dragleave`-Ereignis wird ausgelöst, wenn ein gezogenes Element oder eine Textauswahl ein gültiges Ziehen-und-Ablegen-Ziel verlässt.

Dieses Ereignis kann nicht abgebrochen werden und kann bis zu den Objekten [`Document`](/de/docs/Web/API/Document) und [`Window`](/de/docs/Web/API/Window) hochwandern.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignishandler-Eigenschaft fest.

```js
addEventListener("dragleave", (event) => {});

ondragleave = (event) => {};
```

## Ereignistyp

Ein [`DragEvent`](/de/docs/Web/API/DragEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("DragEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften sind auch Eigenschaften der Schnittstelle [`Event`](/de/docs/Web/API/Event) verfügbar._

- [`DragEvent.dataTransfer`](/de/docs/Web/API/DragEvent/dataTransfer) {{ReadOnlyInline}}
  - : Die Daten, die während einer Ziehen-und-Ablegen-Interaktion übertragen werden.

## Beispiele

### Zurücksetzen der Dropzone-Stile bei dragleave

In diesem Beispiel haben wir ein verschiebbares Element innerhalb eines Containers. Versuchen Sie, das Element zu greifen, es über den anderen Container zu ziehen und es loszulassen.

Wir geben dem anderen Container einen lila Hintergrund, während sich das verschiebbare Element darüber befindet, um anzuzeigen, dass es in den Container abgelegt werden könnte. Wir hören auf das `dragleave`-Ereignis, um den Hintergrund des Containers zurückzusetzen, wenn das verschiebbare Element vom Container weggezogen wird.

In diesem unvollständigen Beispiel haben wir jedoch das Ablegen nicht implementiert: ein vollständiges Beispiel für Ziehen und Ablegen finden Sie auf der Seite für das [`drag`](/de/docs/Web/API/HTMLElement/drag_event)-Ereignis.

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
  /* Prevent the user from selecting text in the example */
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
  // highlight potential drop target when the draggable element enters it
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // reset background of potential drop target when the draggable element leaves it
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

- Andere Ziehen-und-Ablegen-Ereignisse:

  - [`drag`](/de/docs/Web/API/HTMLElement/drag_event)
  - [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)
  - [`dragend`](/de/docs/Web/API/HTMLElement/dragend_event)
  - [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event)
  - [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event)
  - [`drop`](/de/docs/Web/API/HTMLElement/drop_event)

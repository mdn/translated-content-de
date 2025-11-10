---
title: "DataTransfer: effectAllowed Eigenschaft"
short-title: effectAllowed
slug: Web/API/DataTransfer/effectAllowed
l10n:
  sourceCommit: 8285d415db211ae9efe04752d9dab1b574450ee8
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.effectAllowed`**-Eigenschaft legt fest, welcher Effekt für eine Ziehoperation erlaubt ist. Die _copy_-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten von ihrem aktuellen Standort an den Zielort kopiert werden. Die _move_-Operation wird verwendet, um anzuzeigen, dass die gezogenen Daten verschoben werden, und die _link_-Operation zeigt an, dass eine Art von Beziehung oder Verbindung zwischen der Quelle und den Zielorten erstellt wird.

Diese Eigenschaft sollte im [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis festgelegt werden, um den gewünschten Zieheffekt für die Ziehquelle festzulegen. Innerhalb der Ereignis-Handler von [`dragenter`](/de/docs/Web/API/HTMLElement/dragenter_event) und [`dragover`](/de/docs/Web/API/HTMLElement/dragover_event) wird diese Eigenschaft auf den Wert gesetzt, der während des [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignisses zugewiesen wurde, sodass `effectAllowed` verwendet werden kann, um zu bestimmen, welcher Effekt erlaubt ist.

Das Zuweisen eines Wertes zu `effectAllowed` in anderen Ereignissen als [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) hat keine Wirkung.

## Wert

Ein String, der die erlaubte Ziehoperation darstellt. Die möglichen Werte sind:

- `none`
  - : Das Element darf nicht abgelegt werden.
- `copy`
  - : Eine Kopie des Quellobjekts darf am neuen Ort erstellt werden.
- `copyLink`
  - : Eine Kopier- oder Link-Operation ist erlaubt.
- `copyMove`
  - : Eine Kopier- oder Verschiebe-Operation ist erlaubt.
- `link`
  - : Ein Link zur Quelle darf am neuen Ort erstellt werden.
- `linkMove`
  - : Eine Link- oder Verschiebe-Operation ist erlaubt.
- `move`
  - : Ein Element darf an einen neuen Ort verschoben werden.
- `all`
  - : Alle Operationen sind erlaubt.
- `uninitialized`
  - : Der Standardwert, wenn der Effekt nicht festgelegt wurde, entspricht allen.

Das Zuweisen eines anderen Wertes zu `effectAllowed` hat keine Wirkung und der alte Wert bleibt erhalten.

## Beispiele

### effectAllowed festlegen

In diesem Beispiel setzen wir `effectAllowed` im `dragstart`-Handler auf `"move"`.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the Drop Zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>
<pre id="output"></pre>
<button id="reset">Reset</button>
```

#### CSS

```css
div {
  margin: 0em;
  padding: 2em;
}

#source {
  color: blue;
  border: 1px solid black;
}

#target {
  border: 1px solid black;
}

#output {
  height: 100px;
  overflow: scroll;
}
```

#### JavaScript

```js
function dragstartHandler(ev) {
  log(`dragstart: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  // Add this element's id to the drag payload so the drop handler will
  // know which element to add to its tree
  ev.dataTransfer.setData("text", ev.target.id);
  ev.dataTransfer.effectAllowed = "move";
}

function dropHandler(ev) {
  log(`drop: effectAllowed = ${ev.dataTransfer.effectAllowed}`);

  ev.preventDefault();
  // Get the id of the target and add the element to the target's DOM
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

function dragoverHandler(ev) {
  log(`dragover: effectAllowed = ${ev.dataTransfer.effectAllowed}`);
  ev.preventDefault();
}

const source = document.querySelector("#source");
const target = document.querySelector("#target");

source.addEventListener("dragstart", dragstartHandler);
target.addEventListener("dragover", dragoverHandler);
target.addEventListener("drop", dropHandler);

function log(message) {
  const output = document.querySelector("#output");
  output.textContent = `${output.textContent}\n${message}`;
  output.scrollTop = output.scrollHeight;
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

{{EmbedLiveSample("Setting effectAllowed", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)

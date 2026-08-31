---
title: "DataTransfer: Methode setData()"
short-title: setData()
slug: Web/API/DataTransfer/setData
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML Drag and Drop API")}}

Die **`setData()`**-Methode der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Schnittstelle setzt die [Ziehdaten](/de/docs/Web/API/DataTransfer) der Ziehoperation auf die angegebenen Daten und den Typ. Wenn Daten für den angegebenen Typ nicht existieren, werden sie am Ende des Ziehdaten-Speichers hinzugefügt, so dass der letzte Eintrag in der [`types`](/de/docs/Web/API/DataTransfer/types)-Liste der neue Typ wird. Existieren bereits Daten für den angegebenen Typ, werden die vorhandenen Daten an derselben Position ersetzt. Das bedeutet, die Reihenfolge der [`types`](/de/docs/Web/API/DataTransfer/types)-Liste wird nicht geändert, wenn Daten desselben Typs ersetzt werden.

Beispieldaten-Typen sind `text/plain` und `text/uri-list`.

Während einer Ziehoperation kann diese Methode nur im Handler für das [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event)-Ereignis verwendet werden, da dies der einzige Zeitpunkt ist, zu dem der Datenspeicher der Ziehoperation beschreibbar ist. Ein Aufruf in irgendeinem anderen Ziehereignis hat keine Wirkung. Details finden Sie unter [Ändern des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#modifying_the_drag_data_store).

## Syntax

```js-nolint
setData(format, data)
```

### Parameter

- `format`
  - : Ein String, der den Typ der Ziehdaten repräsentiert, der zu [`DataTransfer`](/de/docs/Web/API/DataTransfer) hinzugefügt werden soll.
- `data`
  - : Ein String, der die Daten repräsentiert, die zu [`DataTransfer`](/de/docs/Web/API/DataTransfer) hinzugefügt werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Ziehen eines Elements

In diesem Beispiel können wir ein {{HTMLElement("p")}}-Element in ein Ziel-{{HTMLElement("div")}}-Element ziehen.

- Im `dragstart`-Handler verwenden wir `setData()`, um die `id` des `<p>`-Elements zum [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt hinzuzufügen.

- Im `drop`-Handler rufen wir die `id` ab und verwenden sie, um das `<p>`-Element in das Ziel zu verschieben.

#### HTML

```html
<div>
  <p id="source" draggable="true">
    Select this element, drag it to the drop zone and then release the selection
    to move the element.
  </p>
</div>
<div id="target">Drop Zone</div>

<button id="reset">Reset example</button>
```

#### CSS

```css
div {
  margin: 0.5em 0;
  padding: 2em;
}

#target,
#source {
  border: 1px solid black;
  padding: 0.5rem;
}

.dragging {
  background-color: pink;
}
```

#### JavaScript

```js
const source = document.querySelector("#source");
source.addEventListener("dragstart", (ev) => {
  console.log("dragStart");
  // Change the source element's background color
  // to show that drag has started
  ev.currentTarget.classList.add("dragging");
  // Clear the drag data cache (for all formats/types)
  ev.dataTransfer.clearData();
  // Set the drag's format and data.
  // Use the event target's id for the data
  ev.dataTransfer.setData("text/plain", ev.target.id);
});
source.addEventListener("dragend", (ev) =>
  ev.target.classList.remove("dragging"),
);

const target = document.querySelector("#target");
target.addEventListener("dragover", (ev) => {
  console.log("dragOver");
  ev.preventDefault();
});
target.addEventListener("drop", (ev) => {
  console.log("Drop");
  ev.preventDefault();
  // Get the data, which is the id of the source element
  const data = ev.dataTransfer.getData("text");
  const source = document.getElementById(data);
  ev.target.appendChild(source);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => document.location.reload());
```

#### Ergebnis

{{EmbedLiveSample("Dragging an element", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)

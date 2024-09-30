---
title: "DataTransfer: setData() Methode"
short-title: setData()
slug: Web/API/DataTransfer/setData
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("HTML Drag and Drop API")}}

Die **`DataTransfer.setData()`**-Methode setzt die [Drag-Daten](/de/docs/Web/API/DataTransfer) der Ziehoperation auf die angegebenen Daten und den Typ. Wenn Daten für den angegebenen Typ nicht existieren, werden sie am Ende des Drag-Daten-Speichers hinzugefügt, so dass das letzte Element in der [`types`](/de/docs/Web/API/DataTransfer/types)-Liste der neue Typ sein wird. Wenn Daten für den angegebenen Typ bereits vorhanden sind, werden die bestehenden Daten an derselben Position ersetzt. Das bedeutet, dass die Reihenfolge der [`types`](/de/docs/Web/API/DataTransfer/types)-Liste beim Ersetzen von Daten desselben Typs nicht geändert wird.

Beispieldatentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
setData(format, data)
```

### Parameter

- `format`
  - : Ein String, der den Typ der hinzuzufügenden Drag-Daten zum [`DataTransfer`](/de/docs/Web/API/DataTransfer) repräsentiert.
- `data`
  - : Ein String, der die hinzuzufügenden Daten zum [`DataTransfer`](/de/docs/Web/API/DataTransfer) repräsentiert.

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

{{EmbedLiveSample("Ziehen eines Elements", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehoperationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)

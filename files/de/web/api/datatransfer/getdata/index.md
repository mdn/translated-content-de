---
title: "DataTransfer: getData() Methode"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: 565501caace6d4fbcb9c9b3d8cbf7b03145abbf5
---

{{APIRef("HTML DOM")}}

Die **`getData()`** Methode der [`DataTransfer`](/de/docs/Web/API/DataTransfer) Schnittstelle ruft Ziehdaten (als Zeichenkette) für den angegebenen Typ ab. Wenn der Ziehvorgang keine Daten enthält, gibt diese Methode eine leere Zeichenkette zurück.

Beispiele für Datentypen sind `text/plain` und `text/uri-list`.

Während eines Ziehvorgangs kann diese Methode nur in den Handlern für die [`dragstart`](/de/docs/Web/API/HTMLElement/dragstart_event) und [`drop`](/de/docs/Web/API/HTMLElement/drop_event) Ereignisse Daten lesen, da dies die einzigen Zeiten sind, in denen der Ziehdaten-Speicher lesbar ist. Ein Aufruf dieser Methode von anderen Ziehereignissen gibt eine leere Zeichenkette zurück. Weitere Details finden Sie unter [Lesen des Ziehdaten-Speichers](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store#reading_the_drag_data_store).

## Syntax

```js-nolint
getData(format)
```

### Parameter

- `format`
  - : Ein String, der den Typ der abzurufenden Daten darstellt.

### Rückgabewert

Eine Zeichenkette, die die Ziehdaten für das angegebene `format` darstellt. Wenn der Ziehvorgang keine Daten hat oder der Vorgang keine Daten für das angegebene `format` hat, gibt diese Methode eine leere Zeichenkette zurück.

Die Elemente und ihre Formate können weiterhin während anderer Ziehereignisse mithilfe von [`DataTransfer.items`](/de/docs/Web/API/DataTransfer/items) und [`DataTransfer.types`](/de/docs/Web/API/DataTransfer/types) aufgezählt werden.

## Beispiele

Dieses Beispiel zeigt die Verwendung der [`DataTransfer`](/de/docs/Web/API/DataTransfer) Objekts `getData()` und der [`setData()`](/de/docs/Web/API/DataTransfer/setData) Methoden.

### HTML

```html
<div id="div1">
  <span id="drag" draggable="true">drag me to the other box</span>
</div>
<div id="div2"></div>
```

### CSS

```css
#div1,
#div2 {
  width: 100px;
  height: 50px;
  padding: 10px;
  border: 1px solid #aaaaaa;
}
```

### JavaScript

```js
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const dragElement = document.getElementById("drag");

dragElement.addEventListener("dragstart", drag);
div1.addEventListener("dragover", allowDrop);
div2.addEventListener("dragover", allowDrop);
div1.addEventListener("drop", drop);
div2.addEventListener("drop", drop);

function allowDrop(allowDropEvent) {
  allowDropEvent.target.style.color = "blue";
  allowDropEvent.preventDefault();
}

function drag(dragEvent) {
  dragEvent.dataTransfer.setData("text", dragEvent.target.id);
  dragEvent.target.style.color = "green";
}

function drop(dropEvent) {
  dropEvent.preventDefault();
  const data = dropEvent.dataTransfer.getData("text");
  dropEvent.target.appendChild(document.getElementById(data));
  dragElement.style.color = "black";
}
```

### Ergebnis

{{EmbedLiveSample('Examples', 600) }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Ziehvorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Arbeiten mit dem Ziehdaten-Speicher](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_data_store)

---
title: "DataTransfer: getData() Methode"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: ade5e1ca5c5c57d5cb53beb994bede7b20181233
---

{{APIRef("HTML DOM")}}

Die **`DataTransfer.getData()`**-Methode ruft Drag-Daten (als Zeichenkette) für den angegebenen Typ ab. Wenn der Drag-Vorgang keine Daten einschließt, gibt diese Methode eine leere Zeichenkette zurück.

Beispieldatentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
getData(format)
```

### Parameter

- `format`
  - : Eine Zeichenkette, die den Typ der abzurufenden Daten darstellt.

### Rückgabewert

Eine Zeichenkette, die die Drag-Daten für das angegebene `format` darstellt. Wenn der Drag-Vorgang keine Daten hat oder der Vorgang keine Daten für das angegebene `format` hat, gibt diese Methode eine leere Zeichenkette zurück.

Beachten Sie, dass `DataTransfer.getData()` möglicherweise keinen erwarteten Wert zurückgibt, da es nur das Lesen und Schreiben von Daten für bestimmte Events erlaubt. Während der `dragstart`- und `drop`-Events ist es sicher, auf die Daten zuzugreifen. Für alle anderen Events sollten die Daten als nicht verfügbar betrachtet werden. Trotzdem können die Elemente und ihre Formate weiterhin aufgezählt werden.

## Beispiele

Dieses Beispiel zeigt die Verwendung der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objektmethoden `getData()` und [`setData()`](/de/docs/Web/API/DataTransfer/setData).

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

- [Drag and Drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Vorgänge](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)

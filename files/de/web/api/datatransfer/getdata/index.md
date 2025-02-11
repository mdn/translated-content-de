---
title: "DataTransfer: getData()-Methode"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: 5c0d26f70b80e5511496f49cb5dc0405de98c562
---

{{APIRef("HTML DOM")}}

Die **`DataTransfer.getData()`**-Methode ruft Drag-Daten (als Zeichenkette) für den angegebenen Typ ab.
Falls der Drag-Vorgang keine Daten enthält, gibt diese Methode eine leere Zeichenkette zurück.

Beispieldatentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
getData(format)
```

### Parameter

- `format`
  - : Eine Zeichenkette, die den Typ der abzurufenden Daten darstellt.

### Rückgabewert

Eine Zeichenkette, die die Drag-Daten für das angegebene `format` darstellt. Wenn der Drag-Vorgang keine Daten enthält oder keine Daten für das angegebene `format` vorliegen, gibt diese Methode eine leere Zeichenkette zurück.

Beachten Sie, dass `DataTransfer.getData()` möglicherweise nicht den erwarteten Wert zurückgibt, da es nur erlaubt, Daten für bestimmte Ereignisse zu lesen und zu schreiben. Während der Ereignisse `dragstart` und `drop` ist es sicher, auf die Daten zuzugreifen. Für alle anderen Ereignisse sollten die Daten als nicht verfügbar betrachtet werden. Trotzdem können die Elemente und ihre Formate weiterhin aufgezählt werden.

## Beispiele

Dieses Beispiel zeigt die Verwendung der [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt-Methoden
`getData()` und [`setData()`](/de/docs/Web/API/DataTransfer/setData).

### HTML

```html
<div id="div1" ondrop="drop(event)" ondragover="allowDrop(event)">
  <span id="drag" draggable="true" ondragstart="drag(event)"
    >drag me to the other box</span
  >
</div>
<div id="div2" ondrop="drop(event)" ondragover="allowDrop(event)"></div>
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
  document.getElementById("drag").style.color = "black";
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
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)

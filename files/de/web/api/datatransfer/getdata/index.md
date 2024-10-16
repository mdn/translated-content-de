---
title: "DataTransfer: Methode getData()"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{APIRef("HTML DOM")}}

Die **`DataTransfer.getData()`**-Methode ruft Ziehdaten (als Zeichenkette) für den angegebenen Typ ab. Wenn der Ziehvorgang keine Daten enthält, gibt diese Methode eine leere Zeichenkette zurück.

Beispieldatentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
getData(format)
```

### Parameter

- `format`
  - : Eine Zeichenkette, die den Typ der abzurufenden Daten darstellt.

### Rückgabewert

Eine Zeichenkette, die die Ziehdaten für das angegebene `format` darstellt. Wenn der Ziehvorgang keine Daten enthält oder keine Daten für das angegebene `format` vorhanden sind, gibt diese Methode eine leere Zeichenkette zurück.

### Nachteile

- Datenverfügbarkeit

  - : Die [HTML Drag and Drop Specifikation](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode) gibt einen `drag data store mode` vor. Dies kann zu unerwartetem Verhalten führen, wobei die Methode **`DataTransfer.getData()`** möglicherweise keinen erwarteten Wert zurückgibt, da nicht alle Browser diese Einschränkung durchsetzen.

    Während der `dragstart`- und `drop`-Ereignisse ist der Zugriff auf die Daten sicher. Für alle anderen Ereignisse sollten die Daten als nicht verfügbar betrachtet werden. Trotzdem können die Elemente und deren Formate weiterhin aufgezählt werden.

## Beispiele

Dieses Beispiel zeigt die Verwendung der Methoden `getData()` und [`setData()`](/de/docs/Web/API/DataTransfer/setData) des [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekts.

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
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Zieh-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)

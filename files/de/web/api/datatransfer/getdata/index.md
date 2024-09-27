---
title: "DataTransfer: getData()-Methode"
short-title: getData()
slug: Web/API/DataTransfer/getData
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die **`DataTransfer.getData()`**
Methode ruft Drag-Daten (als Zeichenkette) für den angegebenen Typ ab.
Falls der Drag-Vorgang keine Daten enthält, gibt diese Methode eine leere
Zeichenkette zurück.

Beispielhafte Datentypen sind `text/plain` und `text/uri-list`.

## Syntax

```js-nolint
getData(format)
```

### Parameter

- `format`
  - : Eine Zeichenkette, die den abzurufenden Datentyp angibt.

### Rückgabewert

Eine Zeichenkette, die die Drag-Daten für das angegebene `format` darstellt. Wenn der Drag-Vorgang keine Daten hat oder der Vorgang keine Daten für das angegebene `format` hat, gibt diese Methode eine leere Zeichenkette zurück.

### Hinweise

- Datenverfügbarkeit

  - : Die [HTML Drag and Drop Specification](https://www.w3.org/TR/2011/WD-html5-20110113/dnd.html#drag-data-store-mode) legt einen `drag data store mode` fest.
    Dies kann zu unerwartetem Verhalten führen, indem
    **`DataTransfer.getData()`** keinen erwarteten
    Wert zurückgibt, da nicht alle Browser diese Einschränkung durchsetzen.

    Während der `dragstart`- und `drop`-Ereignisse ist es sicher, auf die Daten zuzugreifen. Für alle anderen Ereignisse sollten die Daten als nicht verfügbar betrachtet werden. Dennoch können die Elemente und ihre Formate weiterhin aufgelistet werden.

## Beispiele

Dieses Beispiel zeigt die Verwendung der `DataTransfer`-Objekts
`getData()`- und
[`setData()`](/de/docs/Web/API/DataTransfer/setData)-Methoden.

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
function allowDrop(allowdropevent) {
  allowdropevent.target.style.color = "blue";
  allowdropevent.preventDefault();
}

function drag(dragevent) {
  dragevent.dataTransfer.setData("text", dragevent.target.id);
  dragevent.target.style.color = "green";
}

function drop(dropevent) {
  dropevent.preventDefault();
  const data = dropevent.dataTransfer.getData("text");
  dropevent.target.appendChild(document.getElementById(data));
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

- [Drag and drop](/de/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag-Operationen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations)
- [Empfohlene Drag-Typen](/de/docs/Web/API/HTML_Drag_and_Drop_API/Recommended_drag_types)
- [DataTransfer-Test - Einfügen oder Ziehen](https://codepen.io/tech_query/pen/MqGgap)

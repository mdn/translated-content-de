---
title: SVGLengthList
slug: Web/API/SVGLengthList
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("SVG")}}

Die **`SVGLengthList`**-Schnittstelle definiert eine Liste von [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekten. Sie wird für die Eigenschaften [`baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedLengthList/animVal) von [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) verwendet.

Ein `SVGLengthList`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

Ein `SVGLengthList`-Objekt ist indexierbar und kann wie ein Array zugegriffen werden.

## Instanz-Eigenschaften

- [`length`](/de/docs/Web/API/SVGLengthList/length)
  - : Die Anzahl der Elemente in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGLengthList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.

## Instanz-Methoden

- [`appendItem()`](/de/docs/Web/API/SVGLengthList/appendItem)
  - : Fügt ein neues Element am Ende der Liste hinzu.
- [`clear()`](/de/docs/Web/API/SVGLengthList/clear)
  - : Löscht alle vorhandenen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
- [`initialize()`](/de/docs/Web/API/SVGLengthList/initialize)
  - : Löscht alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten.
- [`getItem()`](/de/docs/Web/API/SVGLengthList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGLengthList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGLengthList/removeItem)
  - : Entfernt ein vorhandenes Element aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGLengthList/replaceItem)
  - : Ersetzt ein vorhandenes Element in der Liste durch ein neues Element.

## Beispiele

### Verwendung von SVGLengthList

Ein `SVGLengthList`-Objekt kann von einem [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Objekt abgerufen werden, das selbst von vielen animierbaren Längenattributen wie [`SVGTextPositioningElement.x`](/de/docs/Web/API/SVGTextPositioningElement/x) abgerufen werden kann.

#### HTML

```html
<svg
  viewBox="0 0 200 100"
  xmlns="http://www.w3.org/2000/svg"
  width="200"
  height="100">
  <text id="text1" x="10" y="50">Hello</text>
</svg>
<button id="equally-distribute">Equally distribute letters</button>
<button id="reset-spacing">Reset spacing</button>
<div>
  <b>Current <code>SVGLengthList</code></b>
  <pre><output id="output"></output></pre>
</div>
```

#### JavaScript

```js
const text = document.getElementById("text1");
const output = document.getElementById("output");
const list = text.x.baseVal;
function equallyDistribute() {
  list.clear();
  for (let i = 0; i < text.textContent.length; i++) {
    const length = text.ownerSVGElement.createSVGLength();
    length.value = i * 20 + 10;
    list.appendItem(length);
  }
  printList();
}
function resetSpacing() {
  const length = text.ownerSVGElement.createSVGLength();
  length.value = 10;
  list.initialize(length);
  printList();
}
function printList() {
  output.textContent = "";
  for (let i = 0; i < list.length; i++) {
    output.innerText += `${list.getItem(i).value}\n`;
  }
}
printList();

document
  .getElementById("equally-distribute")
  .addEventListener("click", equallyDistribute);
document
  .getElementById("reset-spacing")
  .addEventListener("click", resetSpacing);
```

#### Ergebnis

{{EmbedLiveSample("Using SVGLengthList", "", "300")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGNumberList`](/de/docs/Web/API/SVGNumberList)
- [`SVGPointList`](/de/docs/Web/API/SVGPointList)
- [`SVGStringList`](/de/docs/Web/API/SVGStringList)
- [`SVGTransformList`](/de/docs/Web/API/SVGTransformList)

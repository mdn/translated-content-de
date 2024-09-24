---
title: SVGLengthList
slug: Web/API/SVGLengthList
l10n:
  sourceCommit: 2e433570adf8491df7fb14511f46504e37d0bf77
---

{{APIRef("SVG")}}

Die `SVGLengthList`-Schnittstelle definiert eine Liste von {{ domxref("SVGLength") }}-Objekten. Sie wird für die Eigenschaften {{domxref("SVGAnimatedLengthList.baseVal", "baseVal")}} und {{domxref("SVGAnimatedLengthList.animVal", "animVal")}} von {{domxref("SVGAnimatedLengthList")}} verwendet.

Ein `SVGLengthList`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

Ein `SVGLengthList`-Objekt ist indizierbar und kann wie ein Array zugegriffen werden.

## Instanz-Eigenschaften

- {{domxref("SVGLengthList.length", "length")}}
  - : Die Anzahl der Elemente in der Liste.
- {{domxref("SVGLengthList.numberOfItems", "numberOfItems")}}
  - : Die Anzahl der Elemente in der Liste.

## Instanz-Methoden

- {{domxref("SVGLengthList.appendItem", "appendItem()")}}
  - : Fügt ein neues Element am Ende der Liste ein.
- {{domxref("SVGLengthList.clear", "clear()")}}
  - : Löscht alle bestehenden Elemente aus der Liste, sodass eine leere Liste entsteht.
- {{domxref("SVGLengthList.initialize", "initialize()")}}
  - : Löscht alle bestehenden Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene Einzelobjekt zu halten.
- {{domxref("SVGLengthList.getItem", "getItem()")}}
  - : Gibt das angegebene Element aus der Liste zurück.
- {{domxref("SVGLengthList.insertItemBefore", "insertItemBefore()")}}
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein.
- {{domxref("SVGLengthList.removeItem", "removeItem()")}}
  - : Entfernt ein bestehendes Element aus der Liste.
- {{domxref("SVGLengthList.replaceItem", "replaceItem()")}}
  - : Ersetzt ein bestehendes Element in der Liste durch ein neues Element.

## Beispiele

### Verwendung von SVGLengthList

Ein `SVGLengthList`-Objekt kann von einem {{domxref("SVGAnimatedLengthList")}}-Objekt abgerufen werden, welches von vielen animierbaren Längenattributen, wie {{domxref("SVGTextPositioningElement.x")}}, abgerufen werden kann.

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
    output.innerText += list.getItem(i).value + "\n";
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

- {{domxref("SVGNumberList")}}
- {{domxref("SVGPointList")}}
- {{domxref("SVGStringList")}}
- {{domxref("SVGTransformList")}}

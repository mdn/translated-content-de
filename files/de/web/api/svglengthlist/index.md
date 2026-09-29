---
title: SVGLengthList
slug: Web/API/SVGLengthList
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Die **`SVGLengthList`**-Schnittstelle definiert eine Liste von [`SVGLength`](/de/docs/Web/API/SVGLength)-Objekten. Sie wird für die Eigenschaften [`baseVal`](/de/docs/Web/API/SVGAnimatedLengthList/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedLengthList/animVal) von [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList) verwendet.

Ein `SVGLengthList`-Objekt kann als schreibgeschützt gekennzeichnet sein. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

Ein `SVGLengthList`-Objekt kann über Indizes angesprochen werden. Sie können wie bei einem Array mit der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) darauf zugreifen. Das Lesen eines Elements über seinen Index entspricht einem Aufruf von [`getItem()`](/de/docs/Web/API/SVGLengthList/getItem). Eine Zuweisung über einen Index entspricht einem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGLengthList/replaceItem), einschließlich der dabei ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`length`](/de/docs/Web/API/SVGLengthList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.
- [`numberOfItems`](/de/docs/Web/API/SVGLengthList/numberOfItems) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.

## Instanzmethoden

- [`appendItem()`](/de/docs/Web/API/SVGLengthList/appendItem)
  - : Fügt am Ende der Liste einen neuen Eintrag hinzu.
- [`clear()`](/de/docs/Web/API/SVGLengthList/clear)
  - : Entfernt alle vorhandenen Einträge aus der Liste, sodass sie leer ist.
- [`initialize()`](/de/docs/Web/API/SVGLengthList/initialize)
  - : Entfernt alle vorhandenen Einträge aus der Liste und initialisiert sie mit dem einzelnen Eintrag neu, der als Parameter angegeben wurde.
- [`getItem()`](/de/docs/Web/API/SVGLengthList/getItem)
  - : Gibt den angegebenen Eintrag aus der Liste zurück.
- [`insertItemBefore()`](/de/docs/Web/API/SVGLengthList/insertItemBefore)
  - : Fügt an der angegebenen Position einen neuen Eintrag in die Liste ein.
- [`removeItem()`](/de/docs/Web/API/SVGLengthList/removeItem)
  - : Entfernt einen vorhandenen Eintrag aus der Liste.
- [`replaceItem()`](/de/docs/Web/API/SVGLengthList/replaceItem)
  - : Ersetzt einen vorhandenen Eintrag in der Liste durch einen neuen Eintrag.

## Beispiele

### SVGLengthList verwenden

Ein `SVGLengthList`-Objekt kann aus einem [`SVGAnimatedLengthList`](/de/docs/Web/API/SVGAnimatedLengthList)-Objekt abgerufen werden. Dieses wiederum ist über viele animierbare Längenattribute zugänglich, beispielsweise über [`SVGTextPositioningElement.x`](/de/docs/Web/API/SVGTextPositioningElement/x).

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

---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: a09559075d5ae20021937aa135326f7b91ebefaf
---

{{APIRef("SVG")}}

Die Schnittstelle **`SVGTransformList`** definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt festgelegt werden. In diesem Fall führen Versuche, das Objekt zu ändern, dazu, dass eine Ausnahme ausgelöst wird.

Eine `SVGTransformList` ist indexierbar und kann mithilfe der [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) wie ein Array aufgerufen werden. Das Lesen eines Index entspricht dem Aufruf von [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem). Das Zuweisen zu einem Index entspricht dem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem), einschließlich der dabei ausgelösten Ausnahmen.

## Instanzeigenschaften

- [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.
- [`length`](/de/docs/Web/API/SVGTransformList/length)
  - : Die Anzahl der Elemente in der Liste.

## Instanzmethoden

- [`clear()`](/de/docs/Web/API/SVGTransformList/clear)
  - : Entfernt alle vorhandenen aktuellen Elemente aus der Liste, sodass eine leere Liste entsteht.
- [`initialize()`](/de/docs/Web/API/SVGTransformList/initialize)
  - : Entfernt alle vorhandenen aktuellen Elemente aus der Liste und initialisiert die Liste erneut, sodass sie das durch den Parameter angegebene einzelne Element enthält. Falls sich das eingefügte Element bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
- [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle am Element vorgenommenen Änderungen werden sofort in der Liste widergespiegelt. Das erste Element hat die Nummer `0`.
- [`insertItemBefore()`](/de/docs/Web/API/SVGTransformList/insertItemBefore)
  - : Fügt an der angegebenen Position ein neues Element in die Liste ein. Das erste Element hat die Nummer `0`. Falls sich `newItem` bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Falls sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll, vor dem Entfernen des Elements bestimmt wird. Wenn der `index` gleich 0 ist, wird das neue Element am Anfang der Liste eingefügt. Wenn der Index größer oder gleich `numberOfItems` ist, wird das neue Element am Ende der Liste angehängt.
- [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem)
  - : Ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Falls sich `newItem` bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Falls sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements bestimmt wird.
- [`removeItem()`](/de/docs/Web/API/SVGTransformList/removeItem)
  - : Entfernt ein vorhandenes Element aus der Liste.
- [`appendItem()`](/de/docs/Web/API/SVGTransformList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein. Falls sich `newItem` bereits in einer Liste befindet, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
- [`createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGTransformList/createSVGTransformFromMatrix)
  - : Erstellt ein `SVGTransform`-Objekt, das mit einer Transformation des Typs `SVG_TRANSFORM_MATRIX` initialisiert wird und dessen Werte die angegebene Matrix sind. Die Werte aus der Parametermatrix werden kopiert; der Matrixparameter wird nicht als `SVGTransform::matrix` übernommen.
- [`consolidate()`](/de/docs/Web/API/SVGTransformList/consolidate)
  - : Fasst die Liste separater `SVGTransform`-Objekte zusammen, indem die entsprechenden Transformationsmatrizen miteinander multipliziert werden, sodass eine Liste entsteht, die aus einem einzelnen `SVGTransform`-Objekt des Typs `SVG_TRANSFORM_MATRIX` besteht. Der Zusammenfassungsvorgang erstellt ein neues `SVGTransform`-Objekt als erstes und einziges Element in der Liste. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle am Element vorgenommenen Änderungen werden sofort in der Liste widergespiegelt.

## Beispiele

### Mehrere SVGTransform-Objekte verwenden

In diesem Beispiel erstellen wir eine Funktion, die drei verschiedene Transformationen auf das angeklickte SVG-Element anwendet. Dazu erstellen wir für jede Transformation ein separates [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt — beispielsweise `translate`, `rotate` und `scale`. Wir wenden mehrere Transformationen an, indem wir das Transformationsobjekt an die mit einem SVG-Element verknüpfte `SVGTransformList` anhängen.

```html
<svg
  id="my-svg"
  viewBox="0 0 300 280"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <desc>
    Example showing how to transform svg elements that using SVGTransform
    objects
  </desc>
  <polygon
    fill="orange"
    stroke="black"
    stroke-width="5"
    points="100,225 100,115 130,115 70,15 70,15 10,115 40,115 40,225" />
  <rect
    x="200"
    y="100"
    width="100"
    height="100"
    fill="yellow"
    stroke="black"
    stroke-width="5" />
  <text x="40" y="250" font-family="Verdana" font-size="16" fill="green">
    Click on a shape to transform it
  </text>
</svg>
```

```js
function transformMe(evt) {
  // svg root element to access the createSVGTransform() function
  const svgRoot = evt.target.parentNode;
  // SVGTransformList of the element that has been clicked on
  const tfmList = evt.target.transform.baseVal;

  // Create a separate transform object for each transform
  const translate = svgRoot.createSVGTransform();
  translate.setTranslate(50, 5);
  const rotate = svgRoot.createSVGTransform();
  rotate.setRotate(10, 0, 0);
  const scale = svgRoot.createSVGTransform();
  scale.setScale(0.8, 0.8);

  // apply the transformations by appending the SVGTransform objects to the SVGTransformList associated with the element
  tfmList.appendItem(translate);
  tfmList.appendItem(rotate);
  tfmList.appendItem(scale);
}

document.querySelector("polygon").addEventListener("click", transformMe);
document.querySelector("rect").addEventListener("click", transformMe);
```

{{EmbedLiveSample("Using_multiple_SVGTransform_objects",300,280)}}

### Eine Transformation mit Klammernotation ersetzen

In diesem Beispiel wird ein Element in der Liste mithilfe der Klammernotation anstelle von [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) ersetzt. Bei jedem Drücken der Schaltfläche liest der Code den aktuellen Winkel aus `transformList[0]`, erstellt ein um weitere 15 Grad gedrehtes [`SVGTransform`](/de/docs/Web/API/SVGTransform) und weist es wieder `transformList[0]` zu.

```html
<svg
  id="my-svg"
  viewBox="0 0 100 100"
  width="150"
  height="150"
  xmlns="http://www.w3.org/2000/svg">
  <rect
    x="30"
    y="30"
    width="40"
    height="40"
    fill="blue"
    transform="rotate(0, 50, 50)" />
</svg>
<button id="rotate">Rotate by 15 degrees</button>
```

```js
const svg = document.getElementById("my-svg");
const rect = svg.querySelector("rect");
const transformList = rect.transform.baseVal;

document.getElementById("rotate").addEventListener("click", () => {
  const rotate = svg.createSVGTransform();
  rotate.setRotate(transformList[0].angle + 15, 50, 50);
  // Equivalent to transformList.replaceItem(rotate, 0)
  transformList[0] = rotate;
});
```

{{EmbedLiveSample("Replacing_a_transform_using_bracket_notation", "", "220")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

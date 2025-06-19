---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{APIRef("SVG")}}

Das **`SVGTransformList`**-Interface definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

Ein `SVGTransformList` ist indizierbar und kann wie ein Array angesprochen werden.

## Instanz-Eigenschaften

- [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.
- [`length`](/de/docs/Web/API/SVGTransformList/length)
  - : Die Anzahl der Elemente in der Liste.

## Instanz-Methoden

- [`clear()`](/de/docs/Web/API/SVGTransformList/clear)
  - : Entfernt alle vorhandenen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
- [`initialize()`](/de/docs/Web/API/SVGTransformList/initialize)
  - : Entfernt alle vorhandenen Elemente aus der Liste und initialisiert die Liste neu, um das durch den Parameter angegebene einzelne Element zu halten. Wenn das eingefügte Element bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
- [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem)
  - : Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die am Element vorgenommen werden, spiegeln sich sofort in der Liste wider. Das erste Element ist die Nummer `0`.
- [`insertItemBefore()`](/de/docs/Web/API/SVGTransformList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element ist die Nummer `0`. Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass sich der Index des einzufügenden Elements vor der Entfernung des Elements befindet. Wenn der `index` gleich 0 ist, wird das neue Element an der Spitze der Liste eingefügt. Wenn der Index größer oder gleich `numberOfItems` ist, wird das neue Element am Ende der Liste angehängt.
- [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem)
  - : Ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie bitte, dass sich der Index des zu ersetzenden Elements vor der Entfernung des Elements befindet.
- [`removeItem()`](/de/docs/Web/API/SVGTransformList/removeItem)
  - : Entfernt ein vorhandenes Element aus der Liste.
- [`appendItem()`](/de/docs/Web/API/SVGTransformList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein. Wenn `newItem` bereits in einer Liste vorhanden ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
- [`createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGTransformList/createSVGTransformFromMatrix)
  - : Erstellt ein `SVGTransform`-Objekt, das initialisiert wird, um eine Transformation vom Typ `SVG_TRANSFORM_MATRIX` zu erzeugen und dessen Werte die angegebenen Matrizen sind. Die Werte der Parameter-Matrix werden kopiert, die Matrix-Parameter wird nicht als `SVGTransform::matrix` übernommen.
- [`consolidate()`](/de/docs/Web/API/SVGTransformList/consolidate)
  - : Konsolidiert die Liste separater `SVGTransform`-Objekte, indem die äquivalenten Transformationsmatrizen multipliziert werden, um eine Liste zu erstellen, die aus einem einzelnen `SVGTransform`-Objekt vom Typ `SVG_TRANSFORM_MATRIX` besteht. Die Konsolidierungsoperation erstellt ein neues `SVGTransform`-Objekt als das erste und einzige Element in der Liste. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen, die am Element vorgenommen werden, spiegeln sich sofort in der Liste wider.

## Beispiele

### Verwenden mehrerer SVGTransform-Objekte

In diesem Beispiel erstellen wir eine Funktion, die drei unterschiedliche Transformationen auf das SVG-Element anwenden wird, auf das geklickt wurde. Um dies zu tun, erstellen wir ein separates [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt für jede Transformation — wie `translate`, `rotate` und `scale`. Wir wenden mehrere Transformationen an, indem wir das Transformationsobjekt an die `SVGTransformList` anhängen, die mit einem SVG-Element verknüpft ist.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

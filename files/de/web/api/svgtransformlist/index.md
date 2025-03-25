---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: cf6c3ad3156adcbed110eb71dadc5c5f85feba37
---

{{APIRef("SVG")}}

Das **`SVGTransformList`**-Interface definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt markiert werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

Ein `SVGTransformList` ist indizierbar und kann wie ein Array abgerufen werden.

## Instanz-Eigenschaften

- [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems)
  - : Die Anzahl der Elemente in der Liste.
- [`length`](/de/docs/Web/API/SVGTransformList/length)
  - : Die Anzahl der Elemente in der Liste.

## Instanz-Methoden

- [`clear()`](/de/docs/Web/API/SVGTransformList/clear)
  - : Löscht alle bestehenden aktuellen Elemente aus der Liste, sodass das Ergebnis eine leere Liste ist.
- [`initialize()`](/de/docs/Web/API/SVGTransformList/initialize)
  - : Löscht alle bestehenden aktuellen Elemente aus der Liste und initialisiert die Liste neu, um das einzelne, durch den Parameter spezifizierte Element zu halten. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
- [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem)
  - : Gibt das spezifizierte Element aus der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen am Element werden sofort in der Liste reflektiert. Das erste Element ist die Nummer `0`.
- [`insertItemBefore()`](/de/docs/Web/API/SVGTransformList/insertItemBefore)
  - : Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element ist die Nummer `0`. Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll, vor der Entfernung des Elements liegt. Wenn der `index` gleich `0` ist, wird das neue Element am Anfang der Liste eingefügt. Wenn der Index größer oder gleich `numberOfItems` ist, wird das neue Element am Ende der Liste angehängt.
- [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem)
  - : Ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser Liste ist, beachten Sie, dass der Index des zu ersetzenden Elements vor der Entfernung des Elements liegt.
- [`removeItem()`](/de/docs/Web/API/SVGTransformList/removeItem)
  - : Entfernt ein bestehendes Element aus der Liste.
- [`appendItem()`](/de/docs/Web/API/SVGTransformList/appendItem)
  - : Fügt ein neues Element am Ende der Liste ein. Wenn `newItem` bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
- [`createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGTransformList/createSVGTransformFromMatrix)
  - : Erstellt ein `SVGTransform`-Objekt, das auf das Transformieren des Typs `SVG_TRANSFORM_MATRIX` initialisiert ist und dessen Werte die angegebene Matrix sind. Die Werte aus der Matrix des Parameters werden kopiert, die Matrix des Parameters wird nicht als `SVGTransform::matrix` übernommen.
- [`consolidate()`](/de/docs/Web/API/SVGTransformList/consolidate)
  - : Vereinigt die Liste der separaten `SVGTransform`-Objekte, indem die äquivalenten Transformationsmatrizen multipliziert werden, um eine Liste zu erstellen, die aus einem einzigen `SVGTransform`-Objekt des Typs `SVG_TRANSFORM_MATRIX` besteht. Die Konsolidierungsoperation erstellt ein neues `SVGTransform`-Objekt als das erste und einzige Element in der Liste. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen am Element werden sofort in der Liste reflektiert.

## Beispiele

### Verwendung mehrerer `SVGTransform`-Objekte

In diesem Beispiel erstellen wir eine Funktion, die drei verschiedene Transformationen auf das SVG-Element anwendet, das angeklickt wurde. Um dies zu erreichen, erstellen wir ein separates [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt für jede Transformation — wie `translate`, `rotate` und `scale`. Wir wenden mehrere Transformationen an, indem wir das Transformationsobjekt an die `SVGTransformList` anhängen, die mit einem SVG-Element assoziiert ist.

```html-nolint
<svg
  id="my-svg"
  viewBox="0 0 300 280"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <desc>
    Example showing how to transform svg elements that using SVGTransform
    objects
  </desc>
  <script type="application/ecmascript">
    <![CDATA[
      function transformMe(evt) {
        // svg root element to access the createSVGTransform() function
        const svgRoot = evt.target.parentNode;
        // SVGTransformList of the element that has been clicked on
        const tfmList = evt.target.transform.baseVal;

        // Create a separate transform object for each transform
        const translate = svgRoot.createSVGTransform();
        translate.setTranslate(50,5);
        const rotate = svgRoot.createSVGTransform();
        rotate.setRotate(10,0,0);
        const scale = svgRoot.createSVGTransform();
        scale.setScale(0.8,0.8);

        // apply the transformations by appending the SVGTransform objects to the SVGTransformList associated with the element
        tfmList.appendItem(translate);
        tfmList.appendItem(rotate);
        tfmList.appendItem(scale);
      }
    ]]>
  </script>

  <polygon
    fill="orange"
    stroke="black"
    stroke-width="5"
    points="100,225 100,115 130,115 70,15 70,15 10,115 40,115 40,225"
    onclick="transformMe(evt)" />
  <rect
    x="200"
    y="100"
    width="100"
    height="100"
    fill="yellow"
    stroke="black"
    stroke-width="5"
    onclick="transformMe(evt)" />
  <text x="40" y="250" font-family="Verdana" font-size="16" fill="green">
    Click on a shape to transform it
  </text>
</svg>
```

Live-Vorschau:

{{EmbedLiveSample("Using_multiple_SVGTransform_objects",300,280)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

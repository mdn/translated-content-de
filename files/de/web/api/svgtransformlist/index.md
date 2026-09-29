---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Das **`SVGTransformList`**-Interface definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt gekennzeichnet sein. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

Eine `SVGTransformList` ist indizierbar und kann wie ein Array über die [Klammernotation](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors#bracket_notation) angesprochen werden. Das Lesen eines Index entspricht einem Aufruf von [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem). Die Zuweisung an einen Index entspricht einem Aufruf von [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem), einschließlich der Ausnahmen, die diese Methode auslöst.

## Instanzeigenschaften

- [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.
- [`length`](/de/docs/Web/API/SVGTransformList/length) {{ReadOnlyInline}}
  - : Die Anzahl der Einträge in der Liste.

## Instanzmethoden

- [`clear()`](/de/docs/Web/API/SVGTransformList/clear)
  - : Entfernt alle vorhandenen Einträge aus der Liste, sodass sie leer ist.
- [`initialize()`](/de/docs/Web/API/SVGTransformList/initialize)
  - : Entfernt alle vorhandenen Einträge aus der Liste und initialisiert sie mit dem einzelnen Eintrag, der als Parameter angegeben wurde. Befindet sich der einzufügende Eintrag bereits in einer Liste, wird er vor dem Einfügen aus dieser Liste entfernt. Eingefügt wird der Eintrag selbst, keine Kopie. Der Rückgabewert ist der eingefügte Eintrag.
- [`getItem()`](/de/docs/Web/API/SVGTransformList/getItem)
  - : Gibt den angegebenen Eintrag aus der Liste zurück. Zurückgegeben wird der Eintrag selbst, keine Kopie. Änderungen am Eintrag werden sofort in der Liste sichtbar. Der erste Eintrag hat den Index `0`.
- [`insertItemBefore()`](/de/docs/Web/API/SVGTransformList/insertItemBefore)
  - : Fügt einen neuen Eintrag an der angegebenen Position in die Liste ein. Der erste Eintrag hat den Index `0`. Befindet sich `newItem` bereits in einer Liste, wird der Eintrag vor dem Einfügen aus dieser Liste entfernt. Eingefügt wird der Eintrag selbst, keine Kopie. Falls sich der Eintrag bereits in dieser Liste befindet, ist zu beachten, dass sich der Index des Eintrags, vor dem eingefügt werden soll, auf den Zustand vor dem Entfernen bezieht. Ist `index` gleich `0`, wird der neue Eintrag am Anfang der Liste eingefügt. Ist der Index größer oder gleich `numberOfItems`, wird der neue Eintrag am Ende der Liste angehängt.
- [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem)
  - : Ersetzt einen vorhandenen Eintrag in der Liste durch einen neuen. Befindet sich `newItem` bereits in einer Liste, wird der Eintrag vor dem Einfügen aus dieser Liste entfernt. Eingefügt wird der Eintrag selbst, keine Kopie. Falls sich der Eintrag bereits in dieser Liste befindet, ist zu beachten, dass sich der Index des zu ersetzenden Eintrags auf den Zustand vor dem Entfernen bezieht.
- [`removeItem()`](/de/docs/Web/API/SVGTransformList/removeItem)
  - : Entfernt einen vorhandenen Eintrag aus der Liste.
- [`appendItem()`](/de/docs/Web/API/SVGTransformList/appendItem)
  - : Fügt einen neuen Eintrag am Ende der Liste ein. Befindet sich `newItem` bereits in einer Liste, wird der Eintrag vor dem Einfügen aus dieser Liste entfernt. Eingefügt wird der Eintrag selbst, keine Kopie.
- [`createSVGTransformFromMatrix()`](/de/docs/Web/API/SVGTransformList/createSVGTransformFromMatrix)
  - : Erstellt ein `SVGTransform`-Objekt, das als Transformation vom Typ `SVG_TRANSFORM_MATRIX` initialisiert wird und dessen Werte der übergebenen Matrix entsprechen. Die Werte der als Parameter übergebenen Matrix werden kopiert; die Matrix selbst wird nicht als `SVGTransform::matrix` übernommen.
- [`consolidate()`](/de/docs/Web/API/SVGTransformList/consolidate)
  - : Fasst die Liste einzelner `SVGTransform`-Objekte zusammen, indem die entsprechenden Transformationsmatrizen miteinander multipliziert werden. Das Ergebnis ist eine Liste mit einem einzigen `SVGTransform`-Objekt vom Typ `SVG_TRANSFORM_MATRIX`. Dabei wird ein neues `SVGTransform`-Objekt als erster und einziger Eintrag der Liste erstellt. Zurückgegeben wird der Eintrag selbst, keine Kopie. Änderungen am Eintrag werden sofort in der Liste sichtbar.

## Beispiele

### Mehrere SVGTransform-Objekte verwenden

In diesem Beispiel erstellen wir eine Funktion, die auf das angeklickte SVG-Element drei verschiedene Transformationen anwendet. Dazu erstellen wir für jede Transformation – etwa `translate`, `rotate` und `scale` – ein eigenes [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt. Wir wenden mehrere Transformationen an, indem wir die Transformationsobjekte an die `SVGTransformList` des SVG-Elements anhängen.

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

In diesem Beispiel wird ein Eintrag in der Liste mit Klammernotation statt mit [`replaceItem()`](/de/docs/Web/API/SVGTransformList/replaceItem) ersetzt. Bei jedem Klick auf die Schaltfläche liest der Code den aktuellen Winkel aus `transformList[0]`, erstellt ein um weitere 15 Grad gedrehtes [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt und weist es `transformList[0]` zu.

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

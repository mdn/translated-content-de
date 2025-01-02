---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: 81530cefacb86442e219186144610f8a984b5744
---

{{APIRef("SVG")}}

## SVG-Transformationslisten-Schnittstelle

Die `SVGTransformList` definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

Eine `SVGTransformList` ist indexierbar und kann wie ein Array zugegriffen werden.

### Schnittstellenübersicht

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td>
        <ul>
          <li><code>void clear()</code></li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code
              >initialize(in [`SVGTransform`](/de/docs/Web/API/SVGTransform)
              <em>newItem</em>)</code
            >
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code>getItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code
              >insertItemBefore(in [`SVGTransform`](/de/docs/Web/API/SVGTransform)
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code
              >replaceItem(in [`SVGTransform`](/de/docs/Web/API/SVGTransform)
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code>removeItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code
              >appendItem(in [`SVGTransform`](/de/docs/Web/API/SVGTransform)
              <em>newItem</em>)</code
            >
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform)
            <code
              >createSVGTransformFromMatrix(in
              [`DOMMatrix`](/de/docs/Web/API/DOMMatrix))</code
            >
          </li>
          <li>
            [`SVGTransform`](/de/docs/Web/API/SVGTransform) <code>consolidate()</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>readonly unsigned long <code>numberOfItems</code></li>
          <li>
            readonly unsigned long
            <code>length</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG/coords.html#InterfaceSVGTransformList"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

| Name                                                               | Typ           | Beschreibung                          |
| ------------------------------------------------------------------ | ------------- | ------------------------------------- |
| [`numberOfItems`](/de/docs/Web/API/SVGTransformList/numberOfItems) | unsigned long | Die Anzahl der Elemente in der Liste. |
| [`length`](/de/docs/Web/API/SVGTransformList/length)               | unsigned long | Die Anzahl der Elemente in der Liste. |

## Instanz-Methoden

<table class="standard-table">
  <thead>
    <tr>
      <th>Name &#x26; Argumente</th>
      <th>Rückgabewert</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>[`clear`](/de/docs/Web/API/SVGTransformList/clear)</strong>()</code>
      </td>
      <td><code>void</code></td>
      <td>
        <p>
          Entfernt alle bestehenden Elemente aus der Liste, so dass eine leere Liste entsteht.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`initialize`](/de/docs/Web/API/SVGTransformList/initialize)</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Entfernt alle bestehenden Elemente aus der Liste und initialisiert die
          Liste mit dem durch den Parameter angegebenen Einzelobjekt. Wenn das
          eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen
          Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist
          das Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in
          die Liste eingefügt wurde.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>[`getItem`](/de/docs/Web/API/SVGTransformList/getItem)</strong>(in unsigned long <em>index</em>)</code>
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element
          ist das Element selbst und keine Kopie. Alle Änderungen am Element
          werden sofort in der Liste widergespiegelt. Das erste Element ist Nummer 0.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`insertItemBefore`](/de/docs/Web/API/SVGTransformList/insertItemBefore)</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste
          Element ist Nummer 0. Wenn <code>newItem</code> bereits in einer Liste ist, wird es
          aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
          Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element
          bereits in dieser Liste ist, beachten Sie, dass der Index des einzufügenden Elements
          vor der Entfernung des Elements zugewiesen wird. Wenn der <code>index</code>
          gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt. Wenn der
          Index größer oder gleich <code>numberOfItems</code> ist, wird das
          neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`replaceItem`](/de/docs/Web/API/SVGTransformList/replaceItem)</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn
          <code>newItem</code> bereits in einer Liste ist, wird es aus seiner
          vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das
          eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element
          bereits in dieser Liste ist, beachten Sie, dass der Index des auszutauschenden
          Elements vor der Entfernung des Elements zugewiesen wird.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer
            oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`removeItem`](/de/docs/Web/API/SVGTransformList/removeItem)</strong>(in unsigned long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>Entfernt ein bestehendes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer
            oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`appendItem`](/de/docs/Web/API/SVGTransformList/appendItem)</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn <code>newItem</code>
          bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt,
          bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das
          Element selbst und keine Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`createSVGTransformFromMatrix`](/de/docs/Web/API/SVGTransformList/createSVGTransformFromMatrix)</strong>(in
          [`DOMMatrix`](/de/docs/Web/API/DOMMatrix))</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        Erstellt ein <code>SVGTransform</code>-Objekt, das auf eine
        Transformation vom Typ <code>SVG_TRANSFORM_MATRIX</code> initialisiert
        ist und dessen Werte die gegebene Matrix sind. Die Werte aus der
        Parameter-Matrix werden kopiert, die Matrix-Parameter wird nicht als
        <code>SVGTransform::matrix</code> übernommen.
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>[`consolidate`](/de/docs/Web/API/SVGTransformList/consolidate)</strong>()</code>
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Konsolidiert die Liste der separaten <code>SVGTransform</code>-Objekte
          durch Multiplikation der äquivalenten Transformationsmatrizen miteinander,
          um eine Liste zu erhalten, die aus einem einzigen <code>SVGTransform</code>-Objekt
          vom Typ <code>SVG_TRANSFORM_MATRIX</code> besteht. Der Konsolidierungsvorgang
          erzeugt ein neues <code>SVGTransform</code>-Objekt als erstes und einziges
          Element in der Liste. Das zurückgegebene Element ist das Element selbst und
          keine Kopie. Alle Änderungen am Element werden sofort in der Liste
          widergespiegelt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst
            schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Mehrere SVGTransform-Objekte verwenden

In diesem Beispiel erstellen wir eine Funktion, die drei verschiedene Transformationen auf das angeklickte SVG-Element anwendet. Dazu erstellen wir ein separates [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt für jede Transformation — wie `translate`, `rotate` und `scale`. Wir wenden mehrere Transformationen an, indem wir das Transformation-Objekt der `SVGTransformList` hinzufügen, die einem SVG-Element zugeordnet ist.

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

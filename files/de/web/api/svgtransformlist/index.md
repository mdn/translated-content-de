---
title: SVGTransformList
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("SVG")}}

## SVG-Transformationslisten-Schnittstelle

Das `SVGTransformList` definiert eine Liste von [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekten.

Ein `SVGTransformList`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu modifizieren, zu einer Ausnahme führen.

Ein `SVGTransformList` ist indizierbar und kann wie ein Array angesprochen werden.

### Schnittstellenübersicht

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td><em>None</em></td>
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
            <code>length</code> {{ non-standard_inline() }}
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

## Instanzeigenschaften

| Name                                 | Typ           | Beschreibung                          |
| ------------------------------------ | ------------- | ------------------------------------- |
| `numberOfItems`                      | unsigned long | Die Anzahl der Elemente in der Liste. |
| `length` {{ non-standard_inline() }} | unsigned long | Die Anzahl der Elemente in der Liste. |

## Instanzmethoden

<table class="standard-table">
  <thead>
    <tr>
      <th>Name & Argumente</th>
      <th>Rückgabe</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><strong>clear</strong>()</code>
      </td>
      <td><code>void</code></td>
      <td>
        <p>
          Löscht alle vorhandenen aktuellen Elemente aus der Liste, sodass eine leere Liste entsteht.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>initialize</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Löscht alle vorhandenen aktuellen Elemente aus der Liste und initialisiert die
          Liste neu, um das durch den Parameter angegebene Einzelelement zu halten. Falls das
          eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen
          Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das
          Element selbst und keine Kopie. Der Rückgabewert ist das Element, das in die
          Liste eingefügt wird.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(in unsigned long <em>index</em>)</code>
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Gibt das angegebene Element aus der Liste zurück. Das zurückgegebene Element ist das
          Element selbst und keine Kopie. Alle an dem Element vorgenommenen Änderungen
          werden sofort in der Liste widergespiegelt. Das erste Element ist die Nummer 0.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste
          Element ist die Nummer 0. Falls <code>newItem</code> bereits in einer Liste ist, wird es
          aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird.
          Das eingefügte Element ist das Element selbst und keine Kopie. Wenn das Element bereits
          in dieser Liste ist, beachten Sie, dass der Index des Elements, vor dem eingefügt werden soll,
          vor dem Entfernen des Elements ist. Wenn der <code>index</code> gleich
          0 ist, wird das neue Element am Anfang der Liste eingefügt. Wenn der
          Index größer oder gleich <code>numberOfItems</code> ist, wird das
          neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Ersetzt ein vorhandenes Element in der Liste durch ein neues Element. Wenn
          <code>newItem</code> bereits in einer Liste ist, wird es aus seiner
          vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte
          Element ist das Element selbst und keine Kopie. Wenn das Element bereits in dieser
          Liste ist, beachten Sie, dass der Index des Elements, das ersetzt werden soll,
          vor dem Entfernen des Elements ist.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer
            oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>removeItem</strong>(in unsigned long <em>index</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>Entfernt ein vorhandenes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer
            oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(in
          [`SVGTransform`](/de/docs/Web/API/SVGTransform) <em>newItem</em>)</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn <code>newItem</code> bereits
          in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in
          diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine
          Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>createSVGTransformFromMatrix</strong>(in
          [`DOMMatrix`](/de/docs/Web/API/DOMMatrix))</code
        >
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        Erstellt ein <code>SVGTransform</code>-Objekt, das initialisiert ist, um eine
        Transformation vom Typ <code>SVG_TRANSFORM_MATRIX</code> durchzuführen, und dessen Werte die
        angegebene Matrix sind. Die Werte aus der Parameter-Matrix werden kopiert, die
        Matrix-Parameter werden nicht als <code>SVGTransform::matrix</code> übernommen.
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>consolidate</strong>()</code>
      </td>
      <td>[`SVGTransform`](/de/docs/Web/API/SVGTransform)</td>
      <td>
        <p>
          Konsolidiert die Liste der einzelnen <code>SVGTransform</code>-Objekte durch
          Multiplikation der äquivalenten Transformationsmatrizen, sodass eine Liste entsteht,
          die aus einem einzelnen <code>SVGTransform</code>-Objekt vom Typ
          <code>SVG_TRANSFORM_MATRIX</code> besteht. Der Konsolidierungsvorgang
          erstellt ein neues <code>SVGTransform</code>-Objekt als das erste und einzige
          Element in der Liste. Das zurückgegebene Element ist das Element selbst und keine
          Kopie. Alle an dem Element vorgenommenen Änderungen werden sofort in der Liste widergespiegelt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste
            einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwenden mehrerer SVGTransform-Objekte

In diesem Beispiel erstellen wir eine Funktion, die drei verschiedene Transformationen auf das SVG-Element anwendet, auf das geklickt wurde. Dazu erstellen wir ein separates [`SVGTransform`](/de/docs/Web/API/SVGTransform)-Objekt für jede Transformation — wie `translate`, `rotate` und `scale`. Wir wenden mehrere Transformationen an, indem wir das Transformationsobjekt an die `SVGTransformList` anhängen, die mit einem SVG-Element verknüpft ist.

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

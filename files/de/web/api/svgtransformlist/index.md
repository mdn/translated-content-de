---
title: SVGTransformListe
slug: Web/API/SVGTransformList
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("SVG")}}

## SVG-Transformationslisten-Schnittstelle

Die `SVGTransformList` definiert eine Liste von {{ domxref("SVGTransform") }} Objekten.

Ein `SVGTransformList` Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

Eine `SVGTransformList` ist indizierbar und kann wie ein Array angesprochen werden.

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
            {{ domxref("SVGTransform") }}
            <code
              >initialize(in {{ domxref("SVGTransform") }}
              <em>newItem</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code>getItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >insertItemBefore(in {{ domxref("SVGTransform") }}
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >replaceItem(in {{ domxref("SVGTransform") }}
              <em>newItem</em>, in unsigned long <em>index</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code>removeItem(in unsigned long <em>index</em>)</code>
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >appendItem(in {{ domxref("SVGTransform") }}
              <em>newItem</em>)</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }}
            <code
              >createSVGTransformFromMatrix(in
              {{ domxref("DOMMatrix") }})</code
            >
          </li>
          <li>
            {{ domxref("SVGTransform") }} <code>consolidate()</code>
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

## Instanz-Eigenschaften

| Name                                 | Typ          | Beschreibung                                   |
| ------------------------------------ | ------------- | ---------------------------------------------- |
| `numberOfItems`                      | unsigned long | Die Anzahl der Elemente in der Liste.          |
| `length` {{ non-standard_inline() }} | unsigned long | Die Anzahl der Elemente in der Liste.          |

## Instanz-Methoden

<table class="standard-table">
  <thead>
    <tr>
      <th>Name &amp; Argumente</th>
      <th>Rückgabewert</th>
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
          Löscht alle bestehenden Elemente aus der Liste, so dass eine leere Liste entsteht.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>initialize</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Löscht alle bestehenden Elemente aus der Liste und initialisiert die Liste, um das im Parameter angegebene einzelne Element zu halten. Wenn das eingefügte Element bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Der Rückgabewert ist das in die Liste eingefügte Element.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>getItem</strong>(in unsigned long <em>index</em>)</code>
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Gibt das angegebene Element der Liste zurück. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen am Element werden sofort in der Liste reflektiert. Das erste Element ist Nummer 0.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>insertItemBefore</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Fügt ein neues Element an der angegebenen Position in die Liste ein. Das erste Element ist Nummer 0. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des einzufügenden Elements vor dem Entfernen des Elements liegt. Wenn der <code>index</code> gleich 0 ist, wird das neue Element an den Anfang der Liste eingefügt. Wenn der Index größer oder gleich <code>numberOfItems</code> ist, wird das neue Element am Ende der Liste angehängt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>replaceItem</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>, in unsigned
          long <em>index</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Ersetzt ein bestehendes Element in der Liste durch ein neues Element. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie. Wenn sich das Element bereits in dieser Liste befindet, beachten Sie, dass der Index des zu ersetzenden Elements vor dem Entfernen des Elements liegt.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer oder gleich <code>numberOfItems</code> ist.
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
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>Entfernt ein bestehendes Element aus der Liste.</p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>INDEX_SIZE_ERR</code> wird ausgelöst, wenn die Indexnummer größer oder gleich <code>numberOfItems</code> ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>appendItem</strong>(in
          {{ domxref("SVGTransform") }} <em>newItem</em>)</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Fügt ein neues Element am Ende der Liste ein. Wenn <code>newItem</code> bereits in einer Liste ist, wird es aus seiner vorherigen Liste entfernt, bevor es in diese Liste eingefügt wird. Das eingefügte Element ist das Element selbst und keine Kopie.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>createSVGTransformFromMatrix</strong>(in
          {{ domxref("DOMMatrix") }})</code
        >
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        Erstellt ein <code>SVGTransform</code> Objekt, das zu einem Transformationsobjekt des Typs <code>SVG_TRANSFORM_MATRIX</code> initialisiert wird und dessen Werte die gegebene Matrix sind. Die Werte der Parameter-Matrix werden kopiert, die Matrix selbst wird nicht als <code>SVGTransform::matrix</code> übernommen.
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>consolidate</strong>()</code>
      </td>
      <td>{{ domxref("SVGTransform") }}</td>
      <td>
        <p>
          Konsolidiert die Liste der separaten <code>SVGTransform</code> Objekte durch Multiplikation der äquivalenten Transformationsmatrizen, um eine Liste zu erhalten, die aus einem einzigen <code>SVGTransform</code> Objekt des Typs <code>SVG_TRANSFORM_MATRIX</code> besteht. Der Konsolidierungsschritt erstellt ein neues <code>SVGTransform</code> Objekt als erstes und einziges Element der Liste. Das zurückgegebene Element ist das Element selbst und keine Kopie. Alle Änderungen am Element werden sofort in der Liste reflektiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Liste einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

### Verwendung mehrerer SVGTransform-Objekte

In diesem Beispiel erstellen wir eine Funktion, die drei verschiedene Transformationen auf das angeklickte SVG-Element anwendet. Dazu erstellen wir ein separates {{domxref("SVGTransform")}} Objekt für jede Transformation — wie `translate`, `rotate` und `scale`. Mehrere Transformationen werden angewendet, indem das Transformationsobjekt an die `SVGTransformList` des zugehörigen SVG-Elements angehängt wird.

```html-nolint
<svg
  id="my-svg"
  viewBox="0 0 300 280"
  xmlns="http://www.w3.org/2000/svg"
  version="1.1">
  <desc>
    Beispiel zur Darstellung, wie SVG-Elemente mithilfe von SVGTransform
    Objekten transformiert werden können
  </desc>
  <script type="application/ecmascript">
    <![CDATA[
      function transformMe(evt) {
        // svg root element to access the createSVGTransform() function
        const svgroot = evt.target.parentNode;
        // SVGTransformList of the element that has been clicked on
        const tfmList = evt.target.transform.baseVal;

        // Create a separate transform object for each transform
        const translate = svgroot.createSVGTransform();
        translate.setTranslate(50,5);
        const rotate = svgroot.createSVGTransform();
        rotate.setRotate(10,0,0);
        const scale = svgroot.createSVGTransform();
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
    Klicken Sie auf eine Form, um sie zu transformieren
  </text>
</svg>
```

Live-Vorschau:

{{EmbedLiveSample("Using_multiple_SVGTransform_objects",300,280)}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

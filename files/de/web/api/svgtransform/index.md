---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: 735185aeff568a6de5ecbb585d733c1c67191c48
---

{{APIRef("SVG")}}

## SVG-Transform-Schnittstelle

`SVGTransform` ist die Schnittstelle für eine der Komponenten-Transformationen innerhalb einer [`SVGTransformList`](/de/docs/Web/API/SVGTransformList); somit entspricht ein `SVGTransform`-Objekt einer einzelnen Komponente (z.B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }}-Attributs.

Ein `SVGTransform`-Objekt kann als schreibgeschützt festgelegt werden. Das bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

### Schnittstellenübersicht

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td><em>Keine</em></td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td>
        <ul>
          <li>
            <code
              >void setMatrix(in [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
              matrix)</code
            >
          </li>
          <li><code>void setTranslate(in float tx, in float ty)</code></li>
          <li><code>void setScale(in float sx, in float sy)</code></li>
          <li>
            <code
              >void setRotate(in float angle, in float cx, in float cy)</code
            >
          </li>
          <li><code>void setSkewX(in float angle)</code></li>
          <li><code>void setSkewY(in float angle)</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>readonly unsigned short <code>type</code></li>
          <li>readonly float <code>angle</code></li>
          <li>
            readonly [`DOMMatrix`](/de/docs/Web/API/DOMMatrix) <code>matrix</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Konstanten</th>
      <td>
        <ul>
          <li><code>SVG_TRANSFORM_UNKNOWN</code> = 0</li>
          <li><code>SVG_TRANSFORM_MATRIX</code> = 1</li>
          <li><code>SVG_TRANSFORM_TRANSLATE</code> = 2</li>
          <li><code>SVG_TRANSFORM_SCALE</code> = 3</li>
          <li><code>SVG_TRANSFORM_ROTATE</code> = 4</li>
          <li><code>SVG_TRANSFORM_SKEWX</code> = 5</li>
          <li><code>SVG_TRANSFORM_SKEWY</code> = 6</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGTransform"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Konstanten

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Name</th>
      <th>Wert</th>
      <th>Beschreibung</th>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_UNKNOWN</code></td>
      <td>0</td>
      <td>
        Der Einheitstyp ist nicht einer der vordefinierten Einheitstypen. Es ist
        ungültig zu versuchen, einen neuen Wert dieses Typs zu definieren oder
        einen vorhandenen Wert auf diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_MATRIX</code></td>
      <td>1</td>
      <td>Eine <code>matrix(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_TRANSLATE</code></td>
      <td>2</td>
      <td>Eine <code>translate(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SCALE</code></td>
      <td>3</td>
      <td>Eine <code>scale(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_ROTATE</code></td>
      <td>4</td>
      <td>Eine <code>rotate(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWX</code></td>
      <td>5</td>
      <td>Eine <code>skewx(…)</code>-Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWY</code></td>
      <td>6</td>
      <td>Eine <code>skewy(…)</code>-Transformation</td>
    </tr>
  </tbody>
</table>

## Instanz-Eigenschaften

<table class="no-markdown">
  <thead>
    <tr>
      <th>Name</th>
      <th>Typ</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>[`type`](/de/docs/Web/API/SVGTransform/type)</code></td>
      <td>unsigned short</td>
      <td>
        Der Typ des Werts, wie durch eine der SVG_TRANSFORM_*-Konstanten
        definiert, die in dieser Schnittstelle definiert sind.
      </td>
    </tr>
    <tr>
      <td><code>[`angle`](/de/docs/Web/API/SVGTransform/angle)</code></td>
      <td>float</td>
      <td>
        Ein Komfortattribut für <code>SVG_TRANSFORM_ROTATE</code>,
        <code>SVG_TRANSFORM_SKEWX</code> und <code>SVG_TRANSFORM_SKEWY</code>.
        Es hält den angegebenen Winkel.<br /><br />Für
        <code>SVG_TRANSFORM_MATRIX</code>,
        <code>SVG_TRANSFORM_TRANSLATE</code> und
        <code>SVG_TRANSFORM_SCALE</code> wird <code>angle</code> null sein.
      </td>
    </tr>
    <tr>
      <td><code>[`matrix`](/de/docs/Web/API/SVGTransform/matrix)</code></td>
      <td>[`DOMMatrix`](/de/docs/Web/API/DOMMatrix)</td>
      <td>
        <p>
          Die Matrix, die diese Transformation darstellt. Das Matrixobjekt ist
          live, was bedeutet, dass alle Änderungen am
          <code>SVGTransform</code>-Objekt sofort im Matrixobjekt reflektiert
          werden und umgekehrt. Wenn das Matrixobjekt direkt geändert wird (d.h.
          ohne Verwendung der Methoden der
          <code>SVGTransform</code>-Schnittstelle selbst), ändert sich der Typ
          des <code>SVGTransform</code> in
          <code>SVG_TRANSFORM_MATRIX</code>.
        </p>
        <ul>
          <li>
            Für <code>SVG_TRANSFORM_MATRIX</code> enthält die Matrix die a-, b-,
            c-, d-, e- und f-Werte, die vom Benutzer bereitgestellt wurden.
          </li>
          <li>
            Für <code>SVG_TRANSFORM_TRANSLATE</code> repräsentieren e und f die
            Übersetzungsmengen (a=1, b=0, c=0 und d=1).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SCALE</code> repräsentieren a und d die
            Skalierungsmengen (b=0, c=0, e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SKEWX</code> und
            <code>SVG_TRANSFORM_SKEWY</code> repräsentieren a, b, c und d die
            Matrix, die zur angegebenen Schrägstellung führt (e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_ROTATE</code> repräsentieren a, b, c, d, e
            und f zusammen die Matrix, die zur angegebenen Rotation führt. Wenn
            die Rotation um den Mittelpunkt (0, 0) erfolgt, sind e und f null.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

<table class="no-markdown">
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
        <code
          ><strong>[`setMatrix`](/de/docs/Web/API/SVGTransform/setMatrix)</strong>(in [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
          <em>matrix</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_MATRIX</code>,
          wobei die Parameter-Matrix die neue Transformation definiert. Beachten
          Sie, dass die Werte aus der Parameter-Matrix kopiert werden.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`setTranslate`](/de/docs/Web/API/SVGTransform/setTranslate)</strong>(in float <em>tx</em>, in float
          <em>ty</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_TRANSLATE</code>,
          wobei die Parameter <code>tx</code> und <code>ty</code> die
          Übersetzungsmengen definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`setScale`](/de/docs/Web/API/SVGTransform/setScale)</strong>(in float <em>sx</em>, in float
          <em>sy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_SCALE</code>,
          wobei die Parameter <code>sx</code> und <code>sy</code> die
          Skalierungsmengen definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>[`setRotate`](/de/docs/Web/API/SVGTransform/setRotate)</strong>(in float <em>angle</em>, in float
          <em>cx</em>, in float <em>cy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_ROTATE</code>,
          wobei der Parameter <code>angle</code> den Rotationswinkel definiert
          und die Parameter <code>cx</code> und <code>cy</code> den optionalen
          Drehmittelpunkt definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>[`setSkewX`](/de/docs/Web/API/SVGTransform/setSkewX)</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_SKEWX</code>,
          wobei der Parameter <code>angle</code> die Menge der Schrägstellung
          definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>[`setSkewY`](/de/docs/Web/API/SVGTransform/setSkewY)</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformations-Typ auf <code>SVG_TRANSFORM_SKEWY</code>,
          wobei der Parameter <code>angle</code> die Menge der Schrägstellung
          definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn
            versucht wird, ein schreibgeschütztes Attribut zu ändern oder wenn
            das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

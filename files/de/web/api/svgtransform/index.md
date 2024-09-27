---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG Transform-Schnittstelle

`SVGTransform` ist die Schnittstelle für eine der Komponenten-Transformationen innerhalb einer [`SVGTransformList`](/de/docs/Web/API/SVGTransformList); somit entspricht ein `SVGTransform` Objekt einer einzelnen Komponente (z.B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }} Attributs.

Ein `SVGTransform` Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

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
        ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder
        einen bestehenden Wert auf diesen Typ zu wechseln.
      </td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_MATRIX</code></td>
      <td>1</td>
      <td>Eine <code>matrix(…)</code> Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_TRANSLATE</code></td>
      <td>2</td>
      <td>Eine <code>translate(…)</code> Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SCALE</code></td>
      <td>3</td>
      <td>Eine <code>scale(…)</code> Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_ROTATE</code></td>
      <td>4</td>
      <td>Eine <code>rotate(…)</code> Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWX</code></td>
      <td>5</td>
      <td>Eine <code>skewx(…)</code> Transformation</td>
    </tr>
    <tr>
      <td><code>SVG_TRANSFORM_SKEWY</code></td>
      <td>6</td>
      <td>Eine <code>skewy(…)</code> Transformation</td>
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
      <td><code>type</code></td>
      <td>unsigned short</td>
      <td>
        Der Typ des Wertes, wie er durch eine der SVG_TRANSFORM_*
        Konstanten definiert ist, die auf dieser Schnittstelle definiert sind.
      </td>
    </tr>
    <tr>
      <td><code>angle</code></td>
      <td>float</td>
      <td>
        Eine Komforteigenschaft für <code>SVG_TRANSFORM_ROTATE</code>,
        <code>SVG_TRANSFORM_SKEWX</code> und <code>SVG_TRANSFORM_SKEWY</code>.
        Sie enthält den angegebenen Winkel.<br /><br />Für
        <code>SVG_TRANSFORM_MATRIX</code>,
        <code>SVG_TRANSFORM_TRANSLATE</code> und
        <code>SVG_TRANSFORM_SCALE</code> wird <code>angle</code> null sein.
      </td>
    </tr>
    <tr>
      <td><code>matrix</code></td>
      <td>[`DOMMatrix`](/de/docs/Web/API/DOMMatrix)</td>
      <td>
        <p>
          Die Matrix, die diese Transformation darstellt. Das Matrix-Objekt ist
          live, was bedeutet, dass jede Änderung am
          <code>SVGTransform</code>-Objekt sofort im Matrix-Objekt widergespiegelt wird und umgekehrt. Wenn das Matrix-Objekt direkt geändert wird
          (d.h. ohne die Methoden der <code>SVGTransform</code> Schnittstelle selbst zu verwenden), ändert sich der Typ des
          <code>SVGTransform</code> zu <code>SVG_TRANSFORM_MATRIX</code>.
        </p>
        <ul>
          <li>
            Für <code>SVG_TRANSFORM_MATRIX</code> enthält die Matrix die vom Benutzer bereitgestellten a, b, c, d, e, f Werte.
          </li>
          <li>
            Für <code>SVG_TRANSFORM_TRANSLATE</code> stellen e und f die
            Übersetzungswerte dar (a=1, b=0, c=0 und d=1).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SCALE</code> stellen a und d die Skalierungswerte dar (b=0, c=0, e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SKEWX</code> und
            <code>SVG_TRANSFORM_SKEWY</code> stellen a, b, c und d die Matrix dar,
            die die gegebene Schrägstellung ergibt (e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_ROTATE</code> stellen a, b, c, d, e und f zusammen
            die Matrix dar, die die gegebene Drehung ergibt. Wenn die Drehung um den Mittelpunkt (0, 0) erfolgt, sind e und f
            null.
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
      <th>Name &amp; Argumente</th>
      <th>Rückgabe</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>setMatrix</strong>(in [`DOMMatrix`](/de/docs/Web/API/DOMMatrix)
          <em>matrix</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_MATRIX</code>, wobei
          die Parameter-Matrix die neue Transformation definiert. Beachten Sie, dass die Werte
          aus dem Parameter <code>matrix</code> kopiert werden.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>setTranslate</strong>(in float <em>tx</em>, in float
          <em>ty</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_TRANSLATE</code>, wobei die
          Parameter <code>tx</code> und <code>ty</code> die Übersetzungswerte definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>setScale</strong>(in float <em>sx</em>, in float
          <em>sy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SCALE</code>, wobei die
          Parameter <code>sx</code> und <code>sy</code> die Skalierungswerte definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>setRotate</strong>(in float <em>angle</em>, in float
          <em>cx</em>, in float <em>cy</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_ROTATE</code>, wobei der
          Parameter <code>angle</code> den Drehwinkel definiert und die
          Parameter <code>cx</code> und <code>cy</code> den optionalen
          Rotationsmittelpunkt definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>setSkewX</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SKEWX</code>, wobei der
          Parameter <code>angle</code> die Menge der Schrägstellung definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code><strong>setSkewY</strong>(in float <em>angle</em>)</code>
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SKEWY</code>, wobei der
          Parameter <code>angle</code> die Menge der Schrägstellung definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird,
            ein schreibgeschütztes Attribut zu ändern oder wenn das Objekt selbst schreibgeschützt ist.
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

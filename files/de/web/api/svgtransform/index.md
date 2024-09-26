---
title: SVGTransform
slug: Web/API/SVGTransform
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG transform-Schnittstelle

`SVGTransform` ist die Schnittstelle für eine der Komponenten-Transformationen innerhalb einer {{ domxref("SVGTransformList") }}; daher entspricht ein `SVGTransform`-Objekt einer einzelnen Komponente (z. B. `scale(…)` oder `matrix(…)`) innerhalb eines {{ SVGAttr("transform") }}-Attributs.

Ein `SVGTransform`-Objekt kann als schreibgeschützt gekennzeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

### Überblick über die Schnittstelle

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
              >void setMatrix(in {{ domxref("DOMMatrix") }}
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
            readonly {{ domxref("DOMMatrix") }} <code>matrix</code>
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
        Der Einheitstyp ist keiner der vordefinierten Einheitstypen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ zu wechseln.
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
      <td><code>type</code></td>
      <td>unsigned short</td>
      <td>
        Der Typ des Wertes, der durch eine der auf dieser Schnittstelle definierten SVG_TRANSFORM_* Konstanten angegeben wird.
      </td>
    </tr>
    <tr>
      <td><code>angle</code></td>
      <td>float</td>
      <td>
        Ein praktisches Attribut für <code>SVG_TRANSFORM_ROTATE</code>,
        <code>SVG_TRANSFORM_SKEWX</code> und <code>SVG_TRANSFORM_SKEWY</code>.
        Es enthält den angegebenen Winkel.<br /><br />Für
        <code>SVG_TRANSFORM_MATRIX</code>,
        <code>SVG_TRANSFORM_TRANSLATE</code> und
        <code>SVG_TRANSFORM_SCALE</code>, wird <code>angle</code> null sein.
      </td>
    </tr>
    <tr>
      <td><code>matrix</code></td>
      <td>{{ domxref("DOMMatrix") }}</td>
      <td>
        <p>
          Die Matrix, die diese Transformation darstellt. Das Matrix-Objekt ist
          live, was bedeutet, dass alle Änderungen am
          <code>SVGTransform</code>-Objekt sofort im Matrix-Objekt widergespiegelt werden und umgekehrt. Falls das Matrix-Objekt direkt geändert wird (d. h. ohne die Methoden der
          <code>SVGTransform</code>-Schnittstelle selbst zu verwenden), ändert sich der Typ des
          <code>SVGTransform</code> zu
          <code>SVG_TRANSFORM_MATRIX</code>.
        </p>
        <ul>
          <li>
            Für <code>SVG_TRANSFORM_MATRIX</code> enthält die Matrix die vom Benutzer bereitgestellten a, b, c, d, e, f-Werte.
          </li>
          <li>
            Für <code>SVG_TRANSFORM_TRANSLATE</code> repräsentieren e und f die Übersetzungsbeträge (a=1, b=0, c=0 und d=1).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SCALE</code> repräsentieren a und d die Skalierungsbeträge (b=0, c=0, e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_SKEWX</code> und
            <code>SVG_TRANSFORM_SKEWY</code> repräsentieren a, b, c und d die Matrix, die zur angegebenen Schrägung führt (e=0 und f=0).
          </li>
          <li>
            Für <code>SVG_TRANSFORM_ROTATE</code> repräsentieren a, b, c, d, e und f zusammen die Matrix, die zur angegebenen Drehung führt. Wenn die Drehung um den Mittelpunkt (0, 0) erfolgt, sind e und f null.
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
      <th>Name &#x26; Argumente</th>
      <th>Rückgabe</th>
      <th>Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code
          ><strong>setMatrix</strong>(in {{ domxref("DOMMatrix") }}
          <em>matrix</em>)</code
        >
      </td>
      <td><em>void</em></td>
      <td>
        <p>
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_MATRIX</code>, wobei die Parameter-Matrix die neue Transformation definiert. Beachten Sie, dass die Werte vom Parameter <code>matrix</code> kopiert werden.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_TRANSLATE</code>, wobei die Parameter <code>tx</code> und <code>ty</code> die Übersetzungsbeträge definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SCALE</code>, wobei die Parameter <code>sx</code> und <code>sy</code> die Skalierungsbeträge definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_ROTATE</code>, wobei der Parameter <code>angle</code> den Drehwinkel und die Parameter <code>cx</code> und <code>cy</code> den optionalen Drehmittelpunkt definieren.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SKEWX</code>, wobei der Parameter <code>angle</code> die Menge der Schrägung definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
          Setzt den Transformationstyp auf <code>SVG_TRANSFORM_SKEWY</code>, wobei der Parameter <code>angle</code> die Menge der Schrägung definiert.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein {{ domxref("DOMException") }} mit dem Code
            <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn versucht wird, ein schreibgeschütztes Attribut oder wenn das Objekt selbst schreibgeschützt ist, zu ändern.
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
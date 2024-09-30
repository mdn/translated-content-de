---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{APIRef("SVG")}}

## SVG-Längen-Interface

Das `SVGLength`-Interface entspricht dem grundlegenden Datentyp [\<length>](/de/docs/Web/SVG/Content_type#length).

Ein `SVGLength`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

### Überblick über das Interface

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">Implementiert auch</th>
      <td>Keine</td>
    </tr>
    <tr>
      <th scope="row">Methoden</th>
      <td>
        <ul>
          <li>
            <code
              >void <strong>newValueSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>, in float
              <var>valueInSpecifiedUnits</var>)</code
            >
          </li>
          <li>
            <code
              >void <strong>convertToSpecifiedUnits</strong>(in unsigned short
              <var>unitType</var>)</code
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Eigenschaften</th>
      <td>
        <ul>
          <li>readonly unsigned short <code>unitType</code></li>
          <li>float <code>value</code></li>
          <li>float <code>valueInSpecifiedUnits</code></li>
          <li>
            string <code>valueAsString</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Konstanten</th>
      <td>
        <ul>
          <li><code>SVG_LENGTHTYPE_UNKNOWN</code> = <code>0</code></li>
          <li><code>SVG_LENGTHTYPE_NUMBER</code> = <code>1</code></li>
          <li><code>SVG_LENGTHTYPE_PERCENTAGE</code> = <code>2</code></li>
          <li><code>SVG_LENGTHTYPE_EMS</code> = <code>3</code></li>
          <li><code>SVG_LENGTHTYPE_EXS</code> = <code>4</code></li>
          <li><code>SVG_LENGTHTYPE_PX</code> = <code>5</code></li>
          <li><code>SVG_LENGTHTYPE_CM</code> = <code>6</code></li>
          <li><code>SVG_LENGTHTYPE_MM</code> = <code>7</code></li>
          <li><code>SVG_LENGTHTYPE_IN</code> = <code>8</code></li>
          <li><code>SVG_LENGTHTYPE_PT</code> = <code>9</code></li>
          <li><code>SVG_LENGTHTYPE_PC</code> = <code>10</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">Normatives Dokument</th>
      <td>
        <a href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGLength"
          >SVG 1.1 (2. Ausgabe)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## Beispiel

```xml
<svg height="200" onload="start();" version="1.1" width="200" xmlns="http://www.w3.org/2000/svg">
  <script><![CDATA[
function start() {
  const rect = document.getElementById("myRect");
  const val  = rect.x.baseVal;

  // read x in pixel and cm units
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits: " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // set x = 20pt and read it out in pixel and pt units
  val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);

  // convert x = 20pt to inches and read out in pixel and inch units
  val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_IN);
  console.log("value: " + val.value +
            ", valueInSpecifiedUnits " + val.unitType + ": " + val.valueInSpecifiedUnits +
            ", valueAsString: " + val.valueAsString);
}
]]></script>
  <rect id="myRect"
        x="1cm" y="1cm"
        fill="green" stroke="black" stroke-width="1"
        width="1cm" height="1cm"
  />
</svg>
```

Ergebnisse auf einem Desktop-Monitor (Pixel-Einheiten sind dpi-abhängig):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## Konstanten

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Wert</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>SVG_LENGTHTYPE_UNKNOWN</code></td>
      <td><code>0</code></td>
      <td>
        Der Einheitstyp ist keiner der vordefinierten Einheitstypen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzustellen.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_NUMBER</code></td>
      <td><code>1</code></td>
      <td>
        Es wurde kein Einheitstyp angegeben (d.h., ein einheitsloser Wert wurde festgelegt), was einen Wert in Benutzereinheiten angibt.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PERCENTAGE</code></td>
      <td><code>2</code></td>
      <td>Ein Prozentwert wurde angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EMS</code></td>
      <td><code>3</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Em-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EXS</code></td>
      <td><code>4</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Ex-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PX</code></td>
      <td><code>5</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Px-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_CM</code></td>
      <td><code>6</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Cm-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_MM</code></td>
      <td><code>7</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Mm-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_IN</code></td>
      <td><code>8</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten In-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PT</code></td>
      <td><code>9</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Pt-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PC</code></td>
      <td><code>10</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten Pc-Einheiten angegeben.</td>
    </tr>
  </tbody>
</table>

## Instanzeigenschaften

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
      <td><code>unitType</code></td>
      <td>unsigned short</td>
      <td>
        Der Typ des Wertes, wie durch eine der auf diesem Interface definierten <code>SVG_LENGTHTYPE_*</code> Konstanten angegeben.
      </td>
    </tr>
    <tr>
      <td><code>value</code></td>
      <td>float</td>
      <td>
        <p>
          Der Wert als Gleitkommawert in Benutzereinheiten. Wenn dieses Attribut gesetzt wird, werden <code>valueInSpecifiedUnits</code> und <code>valueAsString</code> automatisch aktualisiert, um diese Einstellung widerzuspiegeln.
        </p>
        <p>
          <strong>Ausnahmen beim Setzen:</strong> Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder das Objekt selbst schreibgeschützt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueInSpecifiedUnits</code></td>
      <td>float</td>
      <td>
        <p>
          Der Wert als Gleitkommawert in den durch <code>unitType</code> ausgedrückten Einheiten. Wenn dieses Attribut gesetzt wird, werden <code>value</code> und <code>valueAsString</code> automatisch aktualisiert, um diese Einstellung widerzuspiegeln.
        </p>
        <p>
          <strong>Ausnahmen beim Setzen:</strong> Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder das Objekt selbst schreibgeschützt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>valueAsString</code></td>
      <td>string</td>
      <td>
        <p>
          Der Wert als Zeichenfolgenwert in den durch <code>unitType</code> ausgedrückten Einheiten. Wenn dieses Attribut gesetzt wird, werden <code>value</code>, <code>valueInSpecifiedUnits</code>, und <code>unitType</code> automatisch aktualisiert, um diese Einstellung widerzuspiegeln.
        </p>
        <p><strong>Ausnahmen beim Setzen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>SYNTAX_ERR</code> wird ausgelöst, wenn die zugewiesene Zeichenfolge nicht als gültiges <a href="/de/docs/Web/SVG/Content_type#length">&#x3C;length></a> geparst werden kann.
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Instanzmethoden

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
          ><strong>newValueSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>, in float <var>valueInSpecifiedUnits</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        <p>
          Setzt den Wert als Zahl mit einem zugehörigen unitType zurück und ersetzt dabei die Werte für alle Attribute des Objekts.
        </p>
        <p><strong>Ausnahmen:</strong></p>
        <ul>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>NOT_SUPPORTED_ERR</code> wird ausgelöst, wenn <code>unitType</code> <code>SVG_LENGTHTYPE_UNKNOWN</code> ist oder kein gültiger Einheitstypkonstant (einer der anderen auf diesem Interface definierten <code>SVG_LENGTHTYPE_*</code> Konstanten).
          </li>
          <li>
            Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code <code>NO_MODIFICATION_ALLOWED_ERR</code> wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder das Objekt selbst schreibgeschützt ist.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><strong>convertToSpecifiedUnits</strong>(in unsigned short
          <var>unitType</var>)</code
        >
      </td>
      <td><var>void</var></td>
      <td>
        Bewahrt denselben zugrunde liegenden gespeicherten Wert, setzt jedoch den gespeicherten Bezeichner der Einheit auf den angegebenen <code><var>unitType</var></code> zurück. Objektattribute <code>unitType</code>, <code>valueInSpecifiedUnits</code> und <code>valueAsString</code> können als Ergebnis dieser Methode geändert werden. Beispielsweise, wenn der ursprüngliche Wert <code>"0.5cm"</code> war und die Methode aufgerufen wurde, um zu Millimetern zu konvertieren, dann würde der <code>unitType</code> auf <code>SVG_LENGTHTYPE_MM</code> geändert, <code>valueInSpecifiedUnits</code> auf den numerischen Wert <code>5</code> geändert und <code>valueAsString</code> auf <code>"5mm"</code> geändert.
      </td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

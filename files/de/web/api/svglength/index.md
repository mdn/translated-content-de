---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

Die **`SVGLength`**-Schnittstelle entspricht dem grundlegenden Datentyp [\<length>](/de/docs/Web/SVG/Guides/Content_type#length).

Ein `SVGLength`-Objekt kann als schreibgeschützt definiert werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen.

## Instanz-Eigenschaften

- [`unitType`](/de/docs/Web/API/SVGLength/unitType)
  - : Der Typ des Wertes, der durch eine der `SVG_LENGTHTYPE_*` Konstanten, die in dieser Schnittstelle definiert sind, festgelegt ist.
- [`value`](/de/docs/Web/API/SVGLength/value)
  - : Der Wert als Fließkommawert in Benutzereinheiten.
- [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString)
  - : Der Wert als Zeichenfolgenwert in den durch `unitType` ausgedrückten Einheiten.
- [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits)
  - : Der Wert als Fließkommawert in den durch `unitType` ausgedrückten Einheiten.

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
        Der Einheiten-Typ ist keiner der vordefinierten Einheiten-Typen. Es ist
        unzulässig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder
        einen vorhandenen Wert in diesen Typ zu ändern.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_NUMBER</code></td>
      <td><code>1</code></td>
      <td>
        Es wurde kein Einheiten-Typ angegeben (d.h. es wurde ein wert ohne
        Einheiten angegeben), was auf einen Wert in Benutzereinheiten hinweist.
      </td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PERCENTAGE</code></td>
      <td><code>2</code></td>
      <td>Ein Prozentsatz-Wert wurde angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EMS</code></td>
      <td><code>3</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten em-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_EXS</code></td>
      <td><code>4</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten ex-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PX</code></td>
      <td><code>5</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten px-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_CM</code></td>
      <td><code>6</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten cm-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_MM</code></td>
      <td><code>7</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten mm-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_IN</code></td>
      <td><code>8</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten in-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PT</code></td>
      <td><code>9</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten pt-Einheiten angegeben.</td>
    </tr>
    <tr>
      <td><code>SVG_LENGTHTYPE_PC</code></td>
      <td><code>10</code></td>
      <td>Ein Wert wurde unter Verwendung der in CSS2 definierten pc-Einheiten angegeben.</td>
    </tr>
  </tbody>
</table>

## Instanz-Methoden

- [`convertToSpecifiedUnits()`](/de/docs/Web/API/SVGLength/convertToSpecifiedUnits)
  - : Beibehaltung des gleichen zugrunde liegenden gespeicherten Wertes, aber Zurücksetzen des gespeicherten Einheitenbezeichners auf den angegebenen `unitType`.
- [`newValueSpecifiedUnits()`](/de/docs/Web/API/SVGLength/newValueSpecifiedUnits)
  - : Zurücksetzen des Wertes als Zahl mit einem zugeordneten `unitType`, wodurch die Werte aller Attribute des Objekts ersetzt werden.

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

Ergebnisse auf einem Desktop-Monitor (Piksel-Einheiten sind dpi-abhängig):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

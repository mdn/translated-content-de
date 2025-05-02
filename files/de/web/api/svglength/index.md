---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Die **`SVGLength`**-Schnittstelle entspricht dem [\<length>](/de/docs/Web/SVG/Guides/Content_type#length) Basisdatentyp.

Ein `SVGLength`-Objekt kann als schreibgeschützt festgelegt werden, was bedeutet, dass Versuche, das Objekt zu ändern, zu einer Ausnahme führen werden.

## Instanz-Eigenschaften

- [`unitType`](/de/docs/Web/API/SVGLength/unitType)
  - : Der Typ des Wertes, wie er durch eine der `SVG_LENGTHTYPE_*` Konstanten definiert ist, die in dieser Schnittstelle festgelegt sind.
- [`value`](/de/docs/Web/API/SVGLength/value)
  - : Der Wert als Fließkommawert, in Benutzereinheiten.
- [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString)
  - : Der Wert als Zeichenfolgenwert, in den durch `unitType` ausgedrückten Einheiten.
- [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits)
  - : Der Wert als Fließkommawert, in den durch `unitType` ausgedrückten Einheiten.

## Instanz-Methoden

- [`convertToSpecifiedUnits()`](/de/docs/Web/API/SVGLength/convertToSpecifiedUnits)
  - : Bewahren Sie den gleichen zugrunde liegenden gespeicherten Wert, setzen Sie jedoch den gespeicherten Einheitenbezeichner auf den angegebenen `unitType` zurück.
- [`newValueSpecifiedUnits()`](/de/docs/Web/API/SVGLength/newValueSpecifiedUnits)
  - : Setzt den Wert als Zahl mit einem zugehörigen `unitType` zurück und ersetzt damit die Werte für alle Attribute des Objekts.

## Statische Eigenschaften

- `SVG_LENGTHTYPE_UNKNOWN` (0)
  - : Der Einheitentyp ist nicht einer der vordefinierten Einheitstypen. Es ist ungültig zu versuchen, einen neuen Wert dieses Typs zu definieren oder zu versuchen, einen bestehenden Wert zu diesem Typ zu wechseln.
- `SVG_LENGTHTYPE_NUMBER` (1)
  - : Es wurde kein Einheitentyp angegeben (d.h. ein einheitenloser Wert wurde angegeben), was einen Wert in Benutzereinheiten angibt.
- `SVG_LENGTHTYPE_PERCENTAGE` (2)
  - : Ein Prozentsatzwert wurde angegeben.
- `SVG_LENGTHTYPE_EMS` (3)
  - : Ein Wert wurde unter Verwendung der `em`-Einheiten angegeben.
- `SVG_LENGTHTYPE_EXS` (4)
  - : Ein Wert wurde unter Verwendung der `ex`-Einheiten angegeben.
- `SVG_LENGTHTYPE_PX` (5)
  - : Ein Wert wurde unter Verwendung der `px`-Einheiten angegeben.
- `SVG_LENGTHTYPE_CM` (6)
  - : Ein Wert wurde unter Verwendung der `cm`-Einheiten angegeben.
- `SVG_LENGTHTYPE_MM` (7)
  - : Ein Wert wurde unter Verwendung der `mm`-Einheiten angegeben.
- `SVG_LENGTHTYPE_IN` (8)
  - : Ein Wert wurde unter Verwendung der `in`-Einheiten angegeben.
- `SVG_LENGTHTYPE_PT` (9)
  - : Ein Wert wurde unter Verwendung der `pt`-Einheiten angegeben.
- `SVG_LENGTHTYPE_PC` (10)
  - : Ein Wert wurde unter Verwendung der `pc`-Einheiten angegeben.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

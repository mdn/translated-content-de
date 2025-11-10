---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{APIRef("SVG")}}

Die **`SVGLength`** Schnittstelle entspricht dem [\<length>](/de/docs/Web/SVG/Guides/Content_type#length) Basisdatentyp.

Ein `SVGLength`-Objekt kann als schreibgeschützt bezeichnet werden, was bedeutet, dass Versuche, das Objekt zu ändern, eine Ausnahme auslösen.

## Instanz-Eigenschaften

- [`unitType`](/de/docs/Web/API/SVGLength/unitType)
  - : Der Typ des Wertes, festgelegt durch eine der `SVG_LENGTHTYPE_*` Konstanten, die in dieser Schnittstelle definiert sind.
- [`value`](/de/docs/Web/API/SVGLength/value)
  - : Der Wert als Fließkommawert in Benutzereinheiten.
- [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString)
  - : Der Wert als String, in den durch `unitType` ausgedrückten Einheiten.
- [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits)
  - : Der Wert als Fließkommawert in den durch `unitType` ausgedrückten Einheiten.

## Instanz-Methoden

- [`convertToSpecifiedUnits()`](/de/docs/Web/API/SVGLength/convertToSpecifiedUnits)
  - : Behalten Sie den gleichen zugrunde liegenden gespeicherten Wert bei, setzen Sie aber den gespeicherten Einheitentyp auf den angegebenen `unitType` zurück.
- [`newValueSpecifiedUnits()`](/de/docs/Web/API/SVGLength/newValueSpecifiedUnits)
  - : Setzen Sie den Wert als Zahl mit einem zugeordneten `unitType` zurück, wodurch die Werte aller Attribute des Objekts ersetzt werden.

## Statische Eigenschaften

- `SVG_LENGTHTYPE_UNKNOWN` (0)
  - : Der Einheitentyp ist keiner der vordefinierten Einheitentypen. Es ist ungültig, zu versuchen, einen neuen Wert dieses Typs zu definieren oder einen bestehenden Wert auf diesen Typ umzuschalten.
- `SVG_LENGTHTYPE_NUMBER` (1)
  - : Es wurde kein Einheitentyp angegeben (d.h. ein wert ohne Einheit wurde angegeben), was einen Wert in Benutzereinheiten angibt.
- `SVG_LENGTHTYPE_PERCENTAGE` (2)
  - : Ein Prozentwert wurde angegeben.
- `SVG_LENGTHTYPE_EMS` (3)
  - : Ein Wert wurde mit `em` Einheiten angegeben.
- `SVG_LENGTHTYPE_EXS` (4)
  - : Ein Wert wurde mit `ex` Einheiten angegeben.
- `SVG_LENGTHTYPE_PX` (5)
  - : Ein Wert wurde mit `px` Einheiten angegeben.
- `SVG_LENGTHTYPE_CM` (6)
  - : Ein Wert wurde mit `cm` Einheiten angegeben.
- `SVG_LENGTHTYPE_MM` (7)
  - : Ein Wert wurde mit `mm` Einheiten angegeben.
- `SVG_LENGTHTYPE_IN` (8)
  - : Ein Wert wurde mit `in` Einheiten angegeben.
- `SVG_LENGTHTYPE_PT` (9)
  - : Ein Wert wurde mit `pt` Einheiten angegeben.
- `SVG_LENGTHTYPE_PC` (10)
  - : Ein Wert wurde mit `pc` Einheiten angegeben.

## Beispiel

```xml
<svg height="200" onload="start();" version="1.1" width="200" xmlns="http://www.w3.org/2000/svg">
  <script><![CDATA[
function start() {
  const rect = document.getElementById("myRect");
  const val = rect.x.baseVal;

  // read x in pixel and cm units
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );

  // set x = 20pt and read it out in pixel and pt units
  val.newValueSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_PT, 20);
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );

  // convert x = 20pt to inches and read out in pixel and inch units
  val.convertToSpecifiedUnits(SVGLength.SVG_LENGTHTYPE_IN);
  console.log(
    `value: ${val.value}, valueInSpecifiedUnits: ${val.valueInSpecifiedUnits} (${val.unitType}), valueAsString: ${val.valueAsString}`,
  );
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

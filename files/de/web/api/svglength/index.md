---
title: SVGLength
slug: Web/API/SVGLength
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Die **`SVGLength`**-Schnittstelle entspricht dem grundlegenden Datentyp [\<length>](/de/docs/Web/SVG/Guides/Content_type#length).

Ein `SVGLength`-Objekt kann als schreibgeschützt gekennzeichnet werden. Versuche, das Objekt zu ändern, lösen dann eine Ausnahme aus.

## Instanzeigenschaften

- [`unitType`](/de/docs/Web/API/SVGLength/unitType) {{ReadOnlyInline}}
  - : Der Typ des Werts, angegeben durch eine der auf dieser Schnittstelle definierten `SVG_LENGTHTYPE_*`-Konstanten.
- [`value`](/de/docs/Web/API/SVGLength/value)
  - : Der Wert als Gleitkommazahl in Benutzereinheiten.
- [`valueAsString`](/de/docs/Web/API/SVGLength/valueAsString)
  - : Der Wert als Zeichenfolge in den durch `unitType` angegebenen Einheiten.
- [`valueInSpecifiedUnits`](/de/docs/Web/API/SVGLength/valueInSpecifiedUnits)
  - : Der Wert als Gleitkommazahl in den durch `unitType` angegebenen Einheiten.

## Instanzmethoden

- [`convertToSpecifiedUnits()`](/de/docs/Web/API/SVGLength/convertToSpecifiedUnits)
  - : Behält den zugrunde liegenden gespeicherten Wert bei, setzt aber die gespeicherte Einheitenkennung auf den angegebenen `unitType`.
- [`newValueSpecifiedUnits()`](/de/docs/Web/API/SVGLength/newValueSpecifiedUnits)
  - : Setzt den Wert als Zahl mit zugehörigem `unitType` neu und ersetzt damit die Werte aller Eigenschaften des Objekts.

## Statische Eigenschaften

- `SVG_LENGTHTYPE_UNKNOWN` (0)
  - : Der Einheitentyp gehört nicht zu den vordefinierten Einheitentypen. Es ist unzulässig, einen neuen Wert dieses Typs zu definieren oder einen vorhandenen Wert auf diesen Typ umzustellen.
- `SVG_LENGTHTYPE_NUMBER` (1)
  - : Es wurde kein Einheitentyp angegeben (d.h. ein Wert ohne Einheit), was einen Wert in Benutzereinheiten bezeichnet.
- `SVG_LENGTHTYPE_PERCENTAGE` (2)
  - : Ein Prozentwert wurde angegeben.
- `SVG_LENGTHTYPE_EMS` (3)
  - : Ein Wert wurde in der Einheit `em` angegeben.
- `SVG_LENGTHTYPE_EXS` (4)
  - : Ein Wert wurde in der Einheit `ex` angegeben.
- `SVG_LENGTHTYPE_PX` (5)
  - : Ein Wert wurde in der Einheit `px` angegeben.
- `SVG_LENGTHTYPE_CM` (6)
  - : Ein Wert wurde in der Einheit `cm` angegeben.
- `SVG_LENGTHTYPE_MM` (7)
  - : Ein Wert wurde in der Einheit `mm` angegeben.
- `SVG_LENGTHTYPE_IN` (8)
  - : Ein Wert wurde in der Einheit `in` angegeben.
- `SVG_LENGTHTYPE_PT` (9)
  - : Ein Wert wurde in der Einheit `pt` angegeben.
- `SVG_LENGTHTYPE_PC` (10)
  - : Ein Wert wurde in der Einheit `pc` angegeben.

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

Ergebnisse auf einem Desktop-Monitor (Pixeleinheiten hängen von der Punktdichte ab):

```plain
value: 37.7952766418457, valueInSpecifiedUnits: 6: 1, valueAsString: 1cm
value: 26.66666603088379, valueInSpecifiedUnits 9: 20, valueAsString: 20pt
value: 26.66666603088379, valueInSpecifiedUnits 8: 0.277777761220932, valueAsString: 0.277778in
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

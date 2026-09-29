---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("SVG")}}

Die Schnittstelle `SVGAngle` stellt einen Wert dar, der ein {{cssxref("&lt;angle&gt;")}}- oder {{cssxref("&lt;number&gt;")}}-Wert sein kann.

Die von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegebenen `SVGAngle`-Objekte sind schreibgeschützt. Das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegebene `SVGAngle`-Objekt ist dagegen beschreibbar. Versuche, ein schreibgeschütztes Objekt zu ändern, lösen eine Ausnahme aus.

Ein `SVGAngle`-Objekt kann einem bestimmten Element zugeordnet sein. Wenn das Objekt ein Attribut widerspiegelt, bestimmt das zugeordnete Element, welches Inhaltsattribut aktualisiert wird. Sofern nicht anders beschrieben, ist ein `SVGAngle`-Objekt keinem Element zugeordnet.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. Es **_spiegelt den Basiswert_** eines widergespiegelten animierbaren Attributs wider, auf den über das Member [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) zugegriffen wird.
2. Es **_ist unabhängig_**, wie es bei `SVGAngle`-Objekten der Fall ist, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Instanzeigenschaften

- [`SVGAngle.unitType`](/de/docs/Web/API/SVGAngle/unitType) {{ReadOnlyInline}}
  - : Der Typ des Werts, angegeben durch eine der auf dieser Schnittstelle definierten `SVG_ANGLETYPE_*`-Konstanten.
- [`SVGAngle.value`](/de/docs/Web/API/SVGAngle/value)
  - : Der Wert als Gleitkommazahl in Benutzereinheiten. Beim Setzen dieser Eigenschaft werden `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert, um den neuen Wert widerzuspiegeln.
- [`SVGAngle.valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits)
  - : Der Wert als Gleitkommazahl in den durch `unitType` angegebenen Einheiten. Beim Setzen dieser Eigenschaft werden `value` und `valueAsString` automatisch aktualisiert, um den neuen Wert widerzuspiegeln.
- [`SVGAngle.valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString)
  - : Der Wert als Zeichenfolge in den durch `unitType` angegebenen Einheiten. Beim Setzen dieser Eigenschaft werden `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert, um den neuen Wert widerzuspiegeln.

## Instanzmethoden

- [`SVGAngle.convertToSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/convertToSpecifiedUnits)
  - : Behält den zugrunde liegenden gespeicherten Wert bei, setzt aber die gespeicherte Einheitenkennung auf den angegebenen `unitType`. Dadurch können sich die Objekteigenschaften `unitType`, `valueInSpecifiedUnits` und `valueAsString` ändern.
- [`SVGAngle.newValueSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/newValueSpecifiedUnits)
  - : Setzt den Wert als Zahl mit einem zugehörigen unitType neu und ersetzt dadurch die Werte aller Eigenschaften des Objekts.

## Statische Eigenschaften

- `SVG_ANGLETYPE_UNKNOWN` (0)
  - : Ein unbekannter Werttyp.
- `SVG_ANGLETYPE_UNSPECIFIED` (1)
  - : Ein einheitenloser {{cssxref("&lt;number&gt;")}}-Wert, der als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG` (2)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `deg`.
- `SVG_ANGLETYPE_RAD` (3)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `rad`.
- `SVG_ANGLETYPE_GRAD` (4)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `grad`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

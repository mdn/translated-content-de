---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("SVG")}}

Das `SVGAngle`-Interface repräsentiert einen Wert, der ein {{cssxref("&lt;angle&gt;")}}- oder ein {{cssxref("&lt;number&gt;")}}-Wert sein kann.

Die von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegebenen `SVGAngle`-Objekte sind schreibgeschützt. Das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegebene `SVGAngle`-Objekt ist dagegen beschreibbar. Wenn ein Objekt schreibgeschützt ist, löst der Versuch, es zu ändern, eine Ausnahme aus.

Ein `SVGAngle`-Objekt kann einem bestimmten Element zugeordnet sein. Wenn das Objekt ein Attribut widerspiegelt, bestimmt das zugeordnete Element, welches Inhaltsattribut aktualisiert wird. Sofern nicht anders angegeben, ist ein `SVGAngle`-Objekt keinem Element zugeordnet.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. Es **_spiegelt den Basiswert_** eines widergespiegelten animierbaren Attributs wider (zugänglich über das [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal)-Member eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)).
2. Es ist **_losgelöst_**. Dies gilt für `SVGAngle`-Objekte, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Statische Eigenschaften

- `SVG_ANGLETYPE_UNKNOWN` (0)
  - : Ein unbekannter Werttyp.
- `SVG_ANGLETYPE_UNSPECIFIED` (1)
  - : Ein einheitsloser {{cssxref("&lt;number&gt;")}}-Wert, der als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG` (2)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `deg`.
- `SVG_ANGLETYPE_RAD` (3)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `rad`.
- `SVG_ANGLETYPE_GRAD` (4)
  - : Ein {{cssxref("&lt;angle&gt;")}}-Wert mit der Einheit `grad`.

## Instanzeigenschaften

- [`SVGAngle.unitType`](/de/docs/Web/API/SVGAngle/unitType) {{ReadOnlyInline}}
  - : Der Werttyp, angegeben durch eine der in diesem Interface definierten `SVG_ANGLETYPE_*`-Konstanten.
- [`SVGAngle.value`](/de/docs/Web/API/SVGAngle/value)
  - : Der Wert als Gleitkommazahl in Benutzereinheiten. Wenn Sie diese Eigenschaft setzen, werden `valueInSpecifiedUnits` und `valueAsString` automatisch entsprechend aktualisiert.
- [`SVGAngle.valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits)
  - : Der Wert als Gleitkommazahl in den durch `unitType` angegebenen Einheiten. Wenn Sie diese Eigenschaft setzen, werden `value` und `valueAsString` automatisch entsprechend aktualisiert.
- [`SVGAngle.valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString)
  - : Der Wert als Zeichenfolge in den durch `unitType` angegebenen Einheiten. Wenn Sie diese Eigenschaft setzen, werden `value`, `valueInSpecifiedUnits` und `unitType` automatisch entsprechend aktualisiert.

## Instanzmethoden

- [`SVGAngle.convertToSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/convertToSpecifiedUnits)
  - : Behält den zugrunde liegenden gespeicherten Wert bei, setzt aber die gespeicherte Einheitenkennung auf den angegebenen `unitType`. Dadurch können sich die Objekteigenschaften `unitType`, `valueInSpecifiedUnits` und `valueAsString` ändern.
- [`SVGAngle.newValueSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/newValueSpecifiedUnits)
  - : Setzt den Wert als Zahl mit einem zugehörigen unitType neu und ersetzt dadurch die Werte aller Eigenschaften des Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

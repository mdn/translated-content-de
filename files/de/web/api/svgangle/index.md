---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("SVG")}}

Das `SVGAngle`-Interface wird verwendet, um einen Wert darzustellen, der ein {{cssxref("&lt;angle&gt;")}} oder ein {{cssxref("&lt;number&gt;")}} sein kann.

Das von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegebene `SVGAngle` ist schreibgeschützt, aber das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegebene `SVGAngle` ist beschreibbar. Wenn es als schreibgeschützt gekennzeichnet ist, führt der Versuch, das Objekt zu ändern, zu einer ausgelösten Ausnahme.

Ein `SVGAngle`-Objekt kann mit einem bestimmten Element verknüpft sein. Das verknüpfte Element wird verwendet, um zu bestimmen, welcher Inhaltsattribut des Elements aktualisiert werden soll, wenn das Objekt ein Attribut widerspiegelt. Wenn nicht anders beschrieben, ist ein `SVGAngle`-Objekt nicht mit einem Element verknüpft.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. **_Den Basiswert widerspiegeln_** eines widerspiegelten animierbaren Attributs (ausgewiesen durch das [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) Mitglied eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle)),
2. **_Von einem Element entkoppelt sein_**, was für `SVGAngle`-Objekte gilt, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Konstanten

- `SVG_ANGLETYPE_UNKNOWN`
  - : Ein unbekannter Wertetyp.
- `SVG_ANGLETYPE_UNSPECIFIED`
  - : Ein einheitenloser {{cssxref("&lt;number&gt;")}}, der als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit der Einheit `deg`.
- `SVG_ANGLETYPE_RAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit der Einheit `rad`.
- `SVG_ANGLETYPE_GRAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit der Einheit `grad`.

## Instanz-Eigenschaften

- `unitType`
  - : Der Typ des Wertes, wie er durch eine der auf diesem Interface definierten `SVG_ANGLETYPE_*`-Konstanten angegeben ist.
- `value`

  - : Der Wert als Gleitkommawert, in Benutzereinheiten. Wenn dieses Attribut gesetzt wird, werden `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueInSpecifiedUnits`

  - : Der Wert als Gleitkommawert in den von `unitType` angegebenen Einheiten. Wenn dieses Attribut gesetzt wird, werden `value` und `valueAsString` automatisch aktualisiert, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueAsString`

  - : Der Wert als Zeichenkettenwert in den von `unitType` angegebenen Einheiten. Wenn dieses Attribut gesetzt wird, werden `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:**

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `SYNTAX_ERR` wird ausgelöst, wenn die zugewiesene Zeichenkette nicht als gültiger {{cssxref("&lt;angle&gt;")}} geparst werden kann.

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Instanz-Methoden

- `newValueSpecifiedUnits`

  - : Setzt den Wert als Zahl mit einem zugeordneten unitType zurück und ersetzt dabei die Werte aller Attribute des Objekts.

    **Ausnahmen:**

    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` wird ausgelöst, wenn `unitType` `SVG_ANGLETYPE_UNKNOWN` ist oder kein gültiger Einheitstyp ist (einer der anderen auf diesem Interface definierten `SVG_ANGLETYPE_*` Konstanten).
    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `convertToSpecifiedUnits`
  - : Bewahrt den gleichen zugrunde liegenden gespeicherten Wert bei, setzt aber die gespeicherte Einheitenkennung auf den angegebenen `unitType` zurück. Die Objektattribute `unitType`, `valueInSpecifiedUnits` und `valueAsString` könnten durch diese Methode modifiziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

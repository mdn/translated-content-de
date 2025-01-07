---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: a5de116c99effa3a2bed6ede6e69928c7d2fc43b
---

{{APIRef("SVG")}}

Die `SVGAngle`-Schnittstelle wird verwendet, um einen Wert darzustellen, der entweder ein {{cssxref("&lt;angle&gt;")}} oder ein {{cssxref("&lt;number&gt;")}} Wert sein kann.

Das von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegebene `SVGAngle` ist schreibgeschützt, aber das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegebene `SVGAngle` ist beschreibbar. Wenn es als schreibgeschützt bezeichnet wird, führt ein Versuch, das Objekt zu ändern, zu einer Ausnahme.

Ein `SVGAngle`-Objekt kann mit einem bestimmten Element verknüpft sein. Das verknüpfte Element wird verwendet, um zu bestimmen, welches Content-Attribut des Elements aktualisiert werden soll, wenn das Objekt ein Attribut widerspiegelt. Sofern nicht anders beschrieben, ist ein `SVGAngle`-Objekt nicht mit einem Element verknüpft.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. **_Den Basiswert eines animierbaren Attributs widerspiegeln_** (wird über das [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) Mitglied eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) offengelegt),
2. **_Wird gelöst,_** was für `SVGAngle`-Objekte der Fall ist, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Konstanten

- `SVG_ANGLETYPE_UNKNOWN`
  - : Ein unbekannter Wertetyp. Dargestellt als numerischer Wert `0`.
- `SVG_ANGLETYPE_UNSPECIFIED`
  - : Ein einheitenloses {{cssxref("&lt;number&gt;")}}, das als Wert in Grad interpretiert wird. Dargestellt als numerischer Wert `1`.
- `SVG_ANGLETYPE_DEG`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `deg`-Einheit. Dargestellt als numerischer Wert `2`.
- `SVG_ANGLETYPE_RAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `rad`-Einheit. Dargestellt als numerischer Wert `3`.
- `SVG_ANGLETYPE_GRAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `grad`-Einheit. Dargestellt als numerischer Wert `4`.

## Instanz-Eigenschaften

- [`SVGAngle.unitType`](/de/docs/Web/API/SVGAngle/unitType)

  - : Der Typ des Wertes, wie er durch eine der auf dieser Schnittstelle definierten `SVG_ANGLETYPE_*` Konstanten angegeben wird.

- [`SVGAngle.value`](/de/docs/Web/API/SVGAngle/value)

  - : Der Wert als Gleitkommawert in Benutzereinheiten. Das Setzen dieses Attributs bewirkt, dass `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht, oder wenn das Objekt selbst schreibgeschützt ist.

- [`SVGAngle.valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits)

  - : Der Wert als Gleitkommawert in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs bewirkt, dass `value` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht, oder wenn das Objekt selbst schreibgeschützt ist.

- [`SVGAngle.valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString)

  - : Der Wert als Zeichenkettenwert in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs bewirkt, dass `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:**

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `SYNTAX_ERR` wird ausgelöst, wenn die zugewiesene Zeichenkette nicht als gültiger {{cssxref("&lt;angle&gt;")}} geparst werden kann.

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht, oder wenn das Objekt selbst schreibgeschützt ist.

## Instanz-Methoden

- [`SVGAngle.newValueSpecifiedUnits`](/de/docs/Web/API/SVGAngle/newValueSpecifiedUnits)

  - : Setzt den Wert als eine Zahl mit einem zugehörigen `unitType` zurück und ersetzt dadurch die Werte aller Attribute des Objekts.

    **Ausnahmen:**

    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` wird ausgelöst, wenn `unitType` `SVG_ANGLETYPE_UNKNOWN` oder kein gültiger Einheitentyp ist (einer der anderen auf dieser Schnittstelle definierten `SVG_ANGLETYPE_*` Konstanten).
    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- [`SVGAngle.convertToSpecifiedUnits`](/de/docs/Web/API/SVGAngle/convertToSpecifiedUnits)

  - : Bewahrt den gleichen zugrunde liegenden gespeicherten Wert, setzt aber den gespeicherten Einheitentyp auf den angegebenen `unitType` zurück. Objektattribute `unitType`, `valueInSpecifiedUnits` und `valueAsString` könnten durch diese Methode modifiziert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("SVG")}}

Die `SVGAngle`-Schnittstelle wird verwendet, um einen Wert darzustellen, der entweder ein {{cssxref("&lt;angle&gt;")}} oder ein {{cssxref("&lt;number&gt;")}} Wert sein kann.

Das von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegebene `SVGAngle` ist schreibgeschützt, jedoch das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegebene `SVGAngle` ist beschreibbar. Wenn es als schreibgeschützt bezeichnet ist, führen Versuche, das Objekt zu ändern, zu einer Ausnahme.

Ein `SVGAngle`-Objekt kann mit einem bestimmten Element verknüpft sein. Das zugeordnete Element wird verwendet, um zu bestimmen, welches Inhaltselement-Attribut aktualisiert wird, wenn das Objekt ein Attribut widerspiegelt. Sofern nicht anders beschrieben, ist ein `SVGAngle`-Objekt keinem Element zugeordnet.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. **_Den Basiswert widerspiegeln_** eines reflexiven animierbaren Attributs (wird durch das [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal)-Mitglied eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) exponiert),
2. **_Ungebunden sein_,** was der Fall für `SVGAngle`-Objekte ist, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Konstanten

- `SVG_ANGLETYPE_UNKNOWN`
  - : Ein unbekannter Wertetyp.
- `SVG_ANGLETYPE_UNSPECIFIED`
  - : Ein einheitenloser {{cssxref("&lt;number&gt;")}}, der als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `deg`-Einheit.
- `SVG_ANGLETYPE_RAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `rad`-Einheit.
- `SVG_ANGLETYPE_GRAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `grad`-Einheit.

## Instanz-Eigenschaften

- `unitType`
  - : Der Werttyp, wie von einem der auf dieser Schnittstelle definierten `SVG_ANGLETYPE_*` Konstanten angegeben.
- `value`

  - : Der Wert als Gleitkommawert, in Benutzereinheiten. Das Setzen dieses Attributs führt dazu, dass `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung zu widerspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueInSpecifiedUnits`

  - : Der Wert als Gleitkommawert, in den Einheiten, die durch `unitType` ausgedrückt werden. Das Setzen dieses Attributs führt dazu, dass `value` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung zu widerspiegeln.

    **Ausnahmen beim Setzen:** Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueAsString`

  - : Der Wert als Zeichenfolgenwert, in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs führt dazu, dass `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert werden, um diese Einstellung zu widerspiegeln.

    **Ausnahmen beim Setzen:**

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `SYNTAX_ERR` wird ausgelöst, wenn die zugewiesene Zeichenfolge nicht als gültiges {{cssxref("&lt;angle&gt;")}} geparst werden kann.

    Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Instanz-Methoden

- `newValueSpecifiedUnits`

  - : Setzen Sie den Wert als Zahl mit einem zugeordneten unitType zurück, wodurch die Werte für alle Attribute im Objekt ersetzt werden.

    **Ausnahmen:**

    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NOT_SUPPORTED_ERR` wird ausgelöst, wenn `unitType` `SVG_ANGLETYPE_UNKNOWN` ist oder kein gültiger Einheitstyp-Konstante ist (eine der anderen `SVG_ANGLETYPE_*` Konstanten, die auf dieser Schnittstelle definiert sind).
    - Ein [`DOMException`](/de/docs/Web/API/DOMException) mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `convertToSpecifiedUnits`
  - : Behalten Sie den gleichen zugrunde liegenden gespeicherten Wert bei, setzen Sie jedoch den gespeicherten Einheitenbezeichner auf den angegebenen `unitType` zurück. Objektattribute `unitType`, `valueInSpecifiedUnits` und `valueAsString` können infolge dieser Methode geändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

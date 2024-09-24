---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("SVG")}}

Das `SVGAngle` Interface wird verwendet, um einen Wert zu repräsentieren, der entweder ein {{cssxref("&lt;angle&gt;")}} oder ein {{cssxref("&lt;number&gt;")}} Wert sein kann.

Das `SVGAngle`, das von {{domxref("SVGAnimatedAngle.animVal")}} und {{domxref("SVGAnimatedAngle.baseVal")}} zurückgegeben wird, ist schreibgeschützt. Hingegen ist das `SVGAngle`, das von {{domxref("SVGSVGElement.createSVGAngle()")}} zurückgegeben wird, beschreibbar. Wenn es als schreibgeschützt bezeichnet ist, führt ein Versuch, das Objekt zu ändern, zu einer Ausnahme.

Ein `SVGAngle` Objekt kann mit einem bestimmten Element verknüpft sein. Das verknüpfte Element wird verwendet, um zu bestimmen, welches Inhaltsattribut des Elements aktualisiert werden soll, wenn das Objekt ein Attribut widerspiegelt. Sofern nicht anders beschrieben, ist ein `SVGAngle` Objekt mit keinem Element verknüpft.

Jedes `SVGAngle` Objekt arbeitet in einem von zwei Modi:

1. **_Reflektieren Sie den Basiswert_** eines reflektierten animierbaren Attributs (wird durch das {{domxref("SVGAnimatedAngle.baseVal", "baseVal")}} Mitglied eines {{domxref("SVGAnimatedAngle")}} exponiert),
2. **_Seien Sie getrennt_,** was der Fall bei `SVGAngle` Objekten ist, die mit {{domxref("SVGSVGElement.createSVGAngle()")}} erstellt wurden.

## Konstanten

- `SVG_ANGLETYPE_UNKNOWN`
  - : Ein unbekannter Wertetyp.
- `SVG_ANGLETYPE_UNSPECIFIED`
  - : Ein einheitenloser {{cssxref("&lt;number&gt;")}}, der als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `deg` Einheit.
- `SVG_ANGLETYPE_RAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `rad` Einheit.
- `SVG_ANGLETYPE_GRAD`
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `grad` Einheit.

## Instanz-Eigenschaften

- `unitType`
  - : Der Typ des Wertes, wie durch eine der `SVG_ANGLETYPE_*` Konstanten definiert, die in diesem Interface definiert sind.
- `value`

  - : Der Wert als Gleitkommawert, in Benutzereinheiten. Das Setzen dieses Attributs führt dazu, dass `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein {{domxref("DOMException")}} mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueInSpecifiedUnits`

  - : Der Wert als Gleitkommawert, in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs wird dazu führen, dass `value` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:** Ein {{domxref("DOMException")}} mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `valueAsString`

  - : Der Wert als Zeichenfolgenwert, in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs führt dazu, dass `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

    **Ausnahmen beim Setzen:**

    Ein {{domxref("DOMException")}} mit dem Code `SYNTAX_ERR` wird ausgelöst, wenn die zugewiesene Zeichenfolge nicht als gültiger {{cssxref("&lt;angle&gt;")}} geparst werden kann.

    Ein {{domxref("DOMException")}} mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

## Instanz-Methoden

- `newValueSpecifiedUnits`

  - : Setzt den Wert als Zahl mit einer zugehörigen Einheit `unitType` zurück und ersetzt so die Werte aller Attribute im Objekt.

    **Ausnahmen:**

    - Ein {{domxref("DOMException")}} mit dem Code `NOT_SUPPORTED_ERR` wird ausgelöst, wenn `unitType` `SVG_ANGLETYPE_UNKNOWN` ist oder kein gültiger Einheitstypkonstant (einer der anderen `SVG_ANGLETYPE_*` Konstanten, die in diesem Interface definiert sind).
    - Ein {{domxref("DOMException")}} mit dem Code `NO_MODIFICATION_ALLOWED_ERR` wird ausgelöst, wenn die Länge einem schreibgeschützten Attribut entspricht oder wenn das Objekt selbst schreibgeschützt ist.

- `convertToSpecifiedUnits`
  - : Bewahrt den gleichen zugrunde liegenden gespeicherten Wert, setzt jedoch die gespeicherte Einheitenkennung auf den angegebenen `unitType` zurück. Die Objektattribute `unitType`, `valueInSpecifiedUnits` und `valueAsString` können durch diese Methode verändert werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

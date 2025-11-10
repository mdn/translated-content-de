---
title: SVGAngle
slug: Web/API/SVGAngle
l10n:
  sourceCommit: 2e39a37874913a1e3fd82999467505fd525e9177
---

{{APIRef("SVG")}}

Das `SVGAngle` Interface wird verwendet, um einen Wert zu repräsentieren, der entweder ein {{cssxref("&lt;angle&gt;")}} oder ein {{cssxref("&lt;number&gt;")}} Wert sein kann.

Das `SVGAngle`, das von [`SVGAnimatedAngle.animVal`](/de/docs/Web/API/SVGAnimatedAngle/animVal) und [`SVGAnimatedAngle.baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) zurückgegeben wird, ist schreibgeschützt, aber das `SVGAngle`, das von [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) zurückgegeben wird, ist beschreibbar. Wenn es als schreibgeschützt gekennzeichnet ist, führt der Versuch, das Objekt zu ändern, zu einer Ausnahme.

Ein `SVGAngle`-Objekt kann einem bestimmten Element zugeordnet sein. Das zugeordnete Element wird verwendet, um zu bestimmen, welches Inhaltsattribut des Elements aktualisiert werden soll, falls das Objekt ein Attribut widerspiegelt. Sofern nicht anders beschrieben, ist ein `SVGAngle`-Objekt keinem Element zugeordnet.

Jedes `SVGAngle`-Objekt arbeitet in einem von zwei Modi:

1. **_Den Basiswert reflektieren_** eines reflektierten animierbaren Attributs (wird über das [`baseVal`](/de/docs/Web/API/SVGAnimatedAngle/baseVal) Mitglied eines [`SVGAnimatedAngle`](/de/docs/Web/API/SVGAnimatedAngle) präsentiert),
2. **_Getrennt sein_**, was auf `SVGAngle`-Objekte zutrifft, die mit [`SVGSVGElement.createSVGAngle()`](/de/docs/Web/API/SVGSVGElement/createSVGAngle) erstellt wurden.

## Instanz-Eigenschaften

- [`SVGAngle.unitType`](/de/docs/Web/API/SVGAngle/unitType)
  - : Der Typ des Werts, wie er durch eine der `SVG_ANGLETYPE_*` Konstanten definiert ist, die in diesem Interface definiert sind.
- [`SVGAngle.value`](/de/docs/Web/API/SVGAngle/value)
  - : Der Wert als Gleitkommawert, in Benutzereinheiten. Das Setzen dieses Attributs bewirkt, dass `valueInSpecifiedUnits` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.
- [`SVGAngle.valueInSpecifiedUnits`](/de/docs/Web/API/SVGAngle/valueInSpecifiedUnits)
  - : Der Wert als Gleitkommawert, in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs bewirkt, dass `value` und `valueAsString` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.
- [`SVGAngle.valueAsString`](/de/docs/Web/API/SVGAngle/valueAsString)
  - : Der Wert als Zeichenfolgenwert, in den durch `unitType` ausgedrückten Einheiten. Das Setzen dieses Attributs bewirkt, dass `value`, `valueInSpecifiedUnits` und `unitType` automatisch aktualisiert werden, um diese Einstellung widerzuspiegeln.

## Instanz-Methoden

- [`SVGAngle.convertToSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/convertToSpecifiedUnits)
  - : Bewahrt denselben zugrunde liegenden gespeicherten Wert, setzt jedoch die gespeicherte Einheitenspezifikation auf den angegebenen `unitType` zurück. Objektattribute `unitType`, `valueInSpecifiedUnits` und `valueAsString` können als Ergebnis dieser Methode geändert werden.
- [`SVGAngle.newValueSpecifiedUnits()`](/de/docs/Web/API/SVGAngle/newValueSpecifiedUnits)
  - : Setzt den Wert als Zahl mit einem zugehörigen unitType zurück und ersetzt dadurch die Werte aller Attribute des Objekts.

## Statische Eigenschaften

- `SVG_ANGLETYPE_UNKNOWN` (0)
  - : Ein unbekannter Werttyp.
- `SVG_ANGLETYPE_UNSPECIFIED` (1)
  - : Ein einheitenloses {{cssxref("&lt;number&gt;")}} das als Wert in Grad interpretiert wird.
- `SVG_ANGLETYPE_DEG` (2)
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `deg` Einheit.
- `SVG_ANGLETYPE_RAD` (3)
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `rad` Einheit.
- `SVG_ANGLETYPE_GRAD` (4)
  - : Ein {{cssxref("&lt;angle&gt;")}} mit einer `grad` Einheit.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

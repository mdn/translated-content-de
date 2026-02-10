---
title: Touch
slug: Web/API/Touch
l10n:
  sourceCommit: 1f3603b8d48cc9b64687ba23e6390d8bde4bb390
---

{{APIRef("Touch Events")}}

Die **`Touch`**-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt ist üblicherweise ein Finger oder ein Stylus und das Gerät kann ein Touchscreen oder ein Trackpad sein.

Die Eigenschaften [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX), [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) beschreiben den Bereich des Kontakts zwischen dem Benutzer und dem Bildschirm, die _Berührungsfläche_. Dies kann hilfreich sein, wenn man mit ungenauen Zeigegeräten wie Fingern arbeitet. Diese Werte sind so festgelegt, dass sie eine Ellipse beschreiben, die den gesamten Kontaktbereich (wie die Fingerspitze des Benutzers) so genau wie möglich umfasst.

> [!NOTE]
> Viele Werte der Eigenschaften sind hardwareabhängig; beispielsweise wird der `force`-Wert immer 0 sein, wenn das Gerät keinen Weg hat, den ausgeübten Druck auf die Oberfläche zu erfassen. Dies kann auch für `radiusX` und `radiusY` gelten; wenn die Hardware nur einen einzigen Punkt meldet, sind diese Werte 1.

## Konstruktor

- [`Touch()`](/de/docs/Web/API/Touch/Touch)
  - : Erstellt ein Touch-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle hat keinen übergeordneten Typ und erbt oder implementiert keine anderen Eigenschaften._

### Grundlegende Eigenschaften

- [`Touch.identifier`](/de/docs/Web/API/Touch/identifier) {{ReadOnlyInline}}
  - : Gibt einen eindeutigen Bezeichner für dieses `Touch`-Objekt zurück. Ein bestimmter Berührungspunkt (beispielsweise ein Finger) hat während seiner Bewegung auf der Oberfläche denselben Bezeichner. Dies ermöglicht es Ihnen sicherzustellen, dass Sie immer dieselbe Berührung nachverfolgen.
- [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Bildschirms zurück.
- [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Bildschirms zurück.
- [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Browser-Viewports, ohne Scroll-Offset, zurück.
- [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Browser-Viewports, ohne Scroll-Offset, zurück.
- [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Dokuments zurück. Im Gegensatz zu `clientX` enthält dieser Wert den horizontalen Scroll-Offset, falls vorhanden.
- [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Dokuments zurück. Im Gegensatz zu `clientY` enthält dieser Wert den vertikalen Scroll-Offset, falls vorhanden.
- [`Touch.target`](/de/docs/Web/API/Touch/target) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, bei dem der Berührungspunkt ursprünglich auf die Oberfläche gesetzt wurde, auch wenn der Berührungspunkt seitdem das interaktive Gebiet dieses Elements verlassen oder gar aus dem Dokument entfernt wurde.

### Berührungsfläche

- [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX) {{ReadOnlyInline}}
  - : Gibt den X-Radius der Ellipse zurück, die am engsten den Kontaktbereich mit dem Bildschirm umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenX`.
- [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) {{ReadOnlyInline}}
  - : Gibt den Y-Radius der Ellipse zurück, die am engsten den Kontaktbereich mit dem Bildschirm umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenY`.
- [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel (in Grad) an, um den die durch `radiusX` und `radiusY` beschriebene Ellipse im Uhrzeigersinn gedreht werden muss, um den Kontaktbereich zwischen Benutzer und Oberfläche am genauesten abzudecken.
- [`Touch.force`](/de/docs/Web/API/Touch/force) {{ReadOnlyInline}}
  - : Gibt den Druck zurück, der von der Benutzeroberfläche des Nutzers ausgeübt wird, als `float` zwischen `0.0` (kein Druck) und `1.0` (maximaler Druck).

### Berührungstyp und Winkel

- [`Touch.altitudeAngle`](/de/docs/Web/API/Touch/altitudeAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel (in Radiant) zwischen der Achse des Abtasters (Zeiger oder Stylus) und der X-Y-Ebene des Geräts im Bereich von `0` (parallel zur Oberfläche) bis `π/2` (senkrecht zur Oberfläche) zurück. Voreinstellung ist `0` für Hardware, die keine Neigung oder Winkel meldet.
- [`Touch.azimuthAngle`](/de/docs/Web/API/Touch/azimuthAngle) {{ReadOnlyInline}}
  - : Gibt den Azimutwinkel (in Radiant) des Abtasters (Zeiger oder Stylus) im Bereich von `0` bis `2π` zurück. `0` steht für einen Abtaster, dessen Spitze in Richtung zunehmender X-Werte auf der X-Y-Ebene zeigt, wobei die Werte im Uhrzeigersinn zunehmen.
- [`Touch.touchType`](/de/docs/Web/API/Touch/touchType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp zurück, der die Berührung ausgelöst hat, wie `"direct"` für einen Finger oder `"stylus"` für ein Stiftgerät.

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden und keinen übergeordneten Typ und erbt oder implementiert keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch)

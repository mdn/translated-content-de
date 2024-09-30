---
title: Touch
slug: Web/API/Touch
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`Touch`**-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt ist üblicherweise ein Finger oder ein Stylus und das Gerät kann ein Touchscreen oder ein Trackpad sein.

Die Eigenschaften [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX), [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) beschreiben den Berührungsbereich zwischen dem Benutzer und dem Bildschirm, das _Berührungsgebiet_. Dies kann nützlich sein, wenn es um ungenaue Zeigegeräte wie Finger geht. Diese Werte sind so festgelegt, dass sie eine Ellipse beschreiben, die so genau wie möglich dem gesamten Kontaktbereich entspricht (wie z.B. der Fingerspitze des Benutzers).

> [!NOTE]
> Viele der Werte von Eigenschaften hängen von der Hardware ab; wenn das Gerät z.B. keine Möglichkeit hat, den Druck auf der Oberfläche zu erkennen, wird der `force`-Wert immer 0 sein. Dies könnte auch für `radiusX` und `radiusY` der Fall sein; wenn die Hardware nur einen einzigen Punkt meldet, sind diese Werte 1.

## Konstruktor

- [`Touch()`](/de/docs/Web/API/Touch/Touch)
  - : Erstellt ein Touch-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle hat kein übergeordnetes Element und erbt oder implementiert keine anderen Eigenschaften._

### Grundlegende Eigenschaften

- [`Touch.identifier`](/de/docs/Web/API/Touch/identifier) {{ReadOnlyInline}}
  - : Gibt einen eindeutigen Bezeichner für dieses `Touch`-Objekt zurück. Ein gegebener Berührungspunkt (z.B. durch einen Finger) hat denselben Bezeichner für die gesamte Dauer seiner Bewegung über die Oberfläche. So können Sie sicherstellen, dass Sie immer denselben Berührungspunkt verfolgen.
- [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Bildschirms zurück.
- [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Bildschirms zurück.
- [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Browser-Viewports zurück, ohne jeden Scrollversatz.
- [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Browser-Viewports zurück, ohne jeden Scrollversatz.
- [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Dokuments zurück. Im Gegensatz zu `clientX` enthält dieser Wert einen eventuellen horizontalen Scrollversatz.
- [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Dokuments zurück. Im Gegensatz zu `clientY` enthält dieser Wert einen eventuellen vertikalen Scrollversatz.
- [`Touch.target`](/de/docs/Web/API/Touch/target) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, auf dem der Berührungspunkt beim ersten Aufsetzen auf die Oberfläche gestartet wurde, auch wenn der Berührungspunkt seitdem außerhalb des interaktiven Bereichs dieses Elements bewegt oder sogar aus dem Dokument entfernt wurde.

### Berührungsgebiet

- [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX) {{ReadOnlyInline}}
  - : Gibt den X-Radius der Ellipse zurück, die das Berührungsgebiet auf dem Bildschirm am genauesten umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenX`.
- [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) {{ReadOnlyInline}}
  - : Gibt den Y-Radius der Ellipse zurück, die das Berührungsgebiet auf dem Bildschirm am genauesten umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenY`.
- [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel (in Grad) zurück, um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn gedreht werden muss, um das Berührungsgebiet zwischen Benutzer und Oberfläche am genauesten abzudecken.
- [`Touch.force`](/de/docs/Web/API/Touch/force) {{ReadOnlyInline}}
  - : Gibt den Druck an, der von der Benutzeroberfläche auf die Oberfläche ausgeübt wird, als `float` zwischen `0.0` (kein Druck) und `1.0` (maximaler Druck).

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden und kein übergeordnetes Element und erbt oder implementiert keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch)

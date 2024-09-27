---
title: Touch
slug: Web/API/Touch
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`Touch`**-Schnittstelle repräsentiert einen einzelnen Kontaktpunkt auf einem berührungsempfindlichen Gerät. Der Kontaktpunkt ist in der Regel ein Finger oder ein Stylus, und das Gerät kann ein Touchscreen oder ein Trackpad sein.

Die Eigenschaften [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX), [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) und [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) beschreiben den Bereich des Kontakts zwischen dem Benutzer und dem Bildschirm, der als _Touch-Bereich_ bezeichnet wird. Dies kann nützlich sein, wenn man mit ungenauen Zeigegeräten wie Fingern arbeitet. Diese Werte sind so festgelegt, dass sie eine Ellipse beschreiben, die so genau wie möglich die gesamte Kontaktfläche abdeckt (wie die Fingerkuppe des Benutzers).

> [!NOTE]
> Viele der Eigenschaftswerte sind hardwareabhängig; zum Beispiel, wenn das Gerät keine Möglichkeit hat, den Druck zu erkennen, der auf die Oberfläche ausgeübt wird, wird der `force`-Wert immer 0 sein. Dies kann auch für `radiusX` und `radiusY` der Fall sein; wenn die Hardware nur einen einzelnen Punkt meldet, werden diese Werte 1 sein.

## Konstruktor

- [`Touch()`](/de/docs/Web/API/Touch/Touch)
  - : Erstellt ein Touch-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle hat kein übergeordnetes Element und erbt oder implementiert keine anderen Eigenschaften._

### Grundlegende Eigenschaften

- [`Touch.identifier`](/de/docs/Web/API/Touch/identifier) {{ReadOnlyInline}}
  - : Gibt einen eindeutigen Bezeichner für dieses `Touch`-Objekt zurück. Ein bestimmter Berührungspunkt (z. B. ein Finger) hat denselben Bezeichner für die gesamte Dauer seiner Bewegung über die Oberfläche. Dies ermöglicht es Ihnen sicherzustellen, dass Sie immer denselben Berührungspunkt verfolgen.
- [`Touch.screenX`](/de/docs/Web/API/Touch/screenX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Bildschirms zurück.
- [`Touch.screenY`](/de/docs/Web/API/Touch/screenY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Bildschirms zurück.
- [`Touch.clientX`](/de/docs/Web/API/Touch/clientX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Browser-Ansichtsfensters zurück, ohne Scrollversatz.
- [`Touch.clientY`](/de/docs/Web/API/Touch/clientY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Browser-Ansichtsfensters zurück, ohne Scrollversatz.
- [`Touch.pageX`](/de/docs/Web/API/Touch/pageX) {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Dokuments zurück. Im Gegensatz zu `clientX` enthält dieser Wert den horizontalen Scrollversatz, falls vorhanden.
- [`Touch.pageY`](/de/docs/Web/API/Touch/pageY) {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Dokuments zurück. Im Gegensatz zu `clientY` enthält dieser Wert den vertikalen Scrollversatz, falls vorhanden.
- [`Touch.target`](/de/docs/Web/API/Touch/target) {{ReadOnlyInline}}
  - : Gibt das [`Element`](/de/docs/Web/API/Element) zurück, auf dem der Berührungspunkt zu Beginn war, als er zum ersten Mal auf die Oberfläche platziert wurde, selbst wenn der Berührungspunkt seitdem außerhalb des interaktiven Bereichs dieses Elements verschoben wurde oder sogar aus dem Dokument entfernt wurde.

### Berührungsbereich

- [`Touch.radiusX`](/de/docs/Web/API/Touch/radiusX) {{ReadOnlyInline}}
  - : Gibt den X-Radius der Ellipse zurück, die den Kontaktbereich mit dem Bildschirm am engsten umschreibt. Der Wert wird in Pixel im selben Maßstab wie `screenX` angegeben.
- [`Touch.radiusY`](/de/docs/Web/API/Touch/radiusY) {{ReadOnlyInline}}
  - : Gibt den Y-Radius der Ellipse zurück, die den Kontaktbereich mit dem Bildschirm am engsten umschreibt. Der Wert wird in Pixel im selben Maßstab wie `screenY` angegeben.
- [`Touch.rotationAngle`](/de/docs/Web/API/Touch/rotationAngle) {{ReadOnlyInline}}
  - : Gibt den Winkel (in Grad) zurück, um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn gedreht werden muss, um den Kontaktbereich zwischen Benutzer und Oberfläche am genauesten abzudecken.
- [`Touch.force`](/de/docs/Web/API/Touch/force) {{ReadOnlyInline}}
  - : Gibt an, wie viel Druck der Benutzer auf die Oberfläche ausübt, als `float` zwischen `0.0` (kein Druck) und `1.0` (maximaler Druck).

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden und kein übergeordnetes Element und erbt oder implementiert keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- [`Document.createTouch()`](/de/docs/Web/API/Document/createTouch)

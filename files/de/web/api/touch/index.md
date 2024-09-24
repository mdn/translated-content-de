---
title: Berührung
slug: Web/API/Touch
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Touch Events")}}

Die **`Touch`**-Schnittstelle repräsentiert einen einzelnen Berührungspunkt auf einem berührungsempfindlichen Gerät. Der Berührungspunkt ist normalerweise ein Finger oder ein Stift, und das Gerät kann ein Touchscreen oder ein Trackpad sein.

Die {{ domxref("Touch.radiusX") }}, {{ domxref("Touch.radiusY") }}, und {{ domxref("Touch.rotationAngle") }} beschreiben den Kontaktbereich zwischen dem Benutzer und dem Bildschirm, das sogenannte _Touch-Gebiet_. Dies kann hilfreich sein beim Umgang mit ungenauen Zeigegeräten wie Fingern. Diese Werte sind so eingestellt, dass sie eine Ellipse beschreiben, die den gesamten Kontaktbereich (wie die Fingerspitze eines Benutzers) so genau wie möglich abdeckt.

> [!NOTE]
> Viele Werte der Eigenschaften sind hardwareabhängig; zum Beispiel, wenn das Gerät keine Möglichkeit hat, den auf die Oberfläche ausgeübten Druck zu erkennen, wird der `force`-Wert immer 0 sein. Dies könnte auch für `radiusX` und `radiusY` gelten; wenn die Hardware nur einen einzelnen Punkt meldet, werden diese Werte 1 sein.

## Konstruktor

- {{domxref("Touch.Touch", "Touch()")}}
  - : Erstellt ein Touch-Objekt.

## Instanz-Eigenschaften

_Diese Schnittstelle hat kein übergeordnetes Element und erbt oder implementiert keine weiteren Eigenschaften._

### Grundlegende Eigenschaften

- {{domxref("Touch.identifier")}} {{ReadOnlyInline}}
  - : Gibt eine eindeutige Kennung für dieses `Touch`-Objekt zurück. Ein bestimmter Berührungspunkt (z. B. durch einen Finger) wird die gleiche Kennung für die Dauer seiner Bewegung über die Oberfläche haben. Dies ermöglicht es Ihnen sicherzustellen, dass Sie den gleichen Berührungspunkt die ganze Zeit verfolgen.
- {{domxref("Touch.screenX")}} {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Bildschirms zurück.
- {{domxref("Touch.screenY")}} {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Bildschirms zurück.
- {{domxref("Touch.clientX")}} {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Browser-Viewports zurück, ohne einen Scrolloffset einzubeziehen.
- {{domxref("Touch.clientY")}} {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Browser-Viewports zurück, ohne einen Scrolloffset einzubeziehen.
- {{domxref("Touch.pageX")}} {{ReadOnlyInline}}
  - : Gibt die X-Koordinate des Berührungspunkts relativ zum linken Rand des Dokuments zurück. Im Gegensatz zu `clientX` beinhaltet dieser Wert den horizontalen Scrolloffset, falls vorhanden.
- {{domxref("Touch.pageY")}} {{ReadOnlyInline}}
  - : Gibt die Y-Koordinate des Berührungspunkts relativ zum oberen Rand des Dokuments zurück. Im Gegensatz zu `clientY` beinhaltet dieser Wert den vertikalen Scrolloffset, falls vorhanden.
- {{domxref("Touch.target")}} {{ReadOnlyInline}}
  - : Gibt das {{ domxref("Element")}} zurück, auf dem der Berührungspunkt beim ersten Aufsetzen auf die Oberfläche gestartet hat, auch wenn der Berührungspunkt inzwischen außerhalb des interaktiven Bereichs dieses Elements bewegt wurde oder sogar aus dem Dokument entfernt wurde.

### Berührungsgebiet

- {{domxref("Touch.radiusX")}} {{ReadOnlyInline}}
  - : Gibt den X-Radius der Ellipse zurück, die den Kontaktbereich mit dem Bildschirm am genauesten umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenX`.
- {{domxref("Touch.radiusY")}} {{ReadOnlyInline}}
  - : Gibt den Y-Radius der Ellipse zurück, die den Kontaktbereich mit dem Bildschirm am genauesten umschreibt. Der Wert ist in Pixeln derselben Skala wie `screenY`.
- {{domxref("Touch.rotationAngle")}} {{ReadOnlyInline}}
  - : Gibt den Winkel (in Grad) zurück, um den die durch radiusX und radiusY beschriebene Ellipse im Uhrzeigersinn gedreht werden muss, um den Kontaktbereich zwischen dem Benutzer und der Oberfläche am genauesten abzudecken.
- {{domxref("Touch.force")}} {{ReadOnlyInline}}
  - : Gibt den Druck zurück, der von dem Benutzer auf die Oberfläche ausgeübt wird, als `float` zwischen `0.0` (kein Druck) und `1.0` (maximaler Druck).

## Instanz-Methoden

_Diese Schnittstelle hat keine Methoden und kein übergeordnetes Element und erbt oder implementiert keine Methoden._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch Events](/de/docs/Web/API/Touch_events)
- {{ domxref("Document.createTouch()") }}

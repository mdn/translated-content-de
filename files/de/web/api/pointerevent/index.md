---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: bec7ef59277e752985de0ee963c86f6e8e4b3400
---

{{ APIRef("Pointer Events") }}

Das **`PointerEvent`** Interface repräsentiert den Zustand eines DOM-Ereignisses, das durch einen Zeiger wie die Geometrie des Kontaktpunkts, den Gerätetyp, der das Ereignis erzeugt hat, den Druck, der auf die Kontaktfläche ausgeübt wurde, usw. erzeugt wird.

Ein _Zeiger_ ist eine hardwareunabhängige Darstellung von Eingabegeräten (wie eine Maus, ein Stift oder ein Kontaktpunkt auf einer berührungsempfindlichen Oberfläche). Der Zeiger kann eine bestimmte Koordinate (oder ein Satz von Koordinaten) auf der Kontaktfläche wie einem Bildschirm anvisieren.

Ein Zeiger-_Treffer-Test_ ist der Prozess, den ein Browser verwendet, um das Ziel-Element für ein Zeigerereignis zu bestimmen. Typischerweise wird dies durch die Berücksichtigung der Position des Zeigers und auch des visuellen Layouts von Elementen in einem Dokument auf einem Bildschirmmedium bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- [`PointerEvent()`](/de/docs/Web/API/PointerEvent/PointerEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Transducers (eines Zeigers oder Stylus) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (eines Zeigers oder Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}}
  - : Eine eindeutige Identifikation für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Identifikation für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Barrel-Druck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralposition der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Pen-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Pen-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Instanz-Methoden

- [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent` Instanzen zurück, die in das ausgelöste [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignis zusammengefasst wurden.
- [`PointerEvent.getPredictedEvents()`](/de/docs/Web/API/PointerEvent/getPredictedEvents)
  - : Gibt eine Sequenz von `PointerEvent` Instanzen zurück, die der Browser vorherzusagen erwartet, dass sie den zusammengefassten Ereignissen des ausgelösten [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignisses folgen werden.

## Zeigerereignistypen

Das `PointerEvent` Interface hat verschiedene Ereignistypen. Um zu bestimmen, welches Ereignis ausgelöst wurde, schauen Sie sich die Eigenschaft [`type`](/de/docs/Web/API/Event/type) des Ereignisses an.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mausereignisse gesendet werden (um es nicht spezifizischem Code auch zu ermöglichen, mit dem Benutzer zu interagieren). Wenn Sie Zeigerereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass auch das Mausereignis gesendet wird.

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffer-Test-Grenzen eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffer-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Resultat eines `pointerdown` Ereignisses von einem Gerät, das den Schwebemodus nicht unterstützt (siehe `pointerdown`). Dieser Ereignistyp ist ähnlich wie `pointerover`, unterscheidet sich jedoch dadurch, dass er sich nicht blasenförmig ausbreitet.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Bei einer Maus wird es ausgelöst, wenn das Gerät vom Zustand ohne gedrückte Tasten zu mindestens einer gedrückten Taste wechselt. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Bei Stift wird es ausgelöst, wenn der Stylus physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, löst ein `pointerdown` Ereignis die [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, wodurch das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung aktiv ist. Die Erfassung kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) am Zielelement aufgehoben werden, oder sie wird implizit nach einem `pointerup` oder `pointercancel` Ereignis aufgehoben.

- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigerkoordinaten ändert.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn sich eine der Eigenschaften eines Zeigers ändert.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er zu dem Schluss kommt, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel wenn das zugehörige Gerät deaktiviert wird).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: Zeigegerät wird aus den Treffer-Test-Grenzen eines Elements bewegt; Auslösen des `pointerup` Ereignisses für ein Gerät, das den Schwebemodus nicht unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel` Ereignisses (siehe `pointercancel`); wenn ein Pen-Stylus den Schwebebereich verlässt, der vom Digitalisierer erkannt wird.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffer-Test-Grenzen eines Elements bewegt wird. Bei Pen-Geräten wird dieses Ereignis ausgelöst, wenn der Stylus den Schwebebereich verlässt, der vom Digitalisierer erkannt wird.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element Zeigererfassung erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und jeden globalen Ereignishandler sind in ihren jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Berührungsereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
- {{cssxref("touch-action")}}

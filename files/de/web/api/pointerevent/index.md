---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ APIRef("Pointer Events") }}

Die **`PointerEvent`**-Schnittstelle repräsentiert den Zustand eines DOM-Ereignisses, das von einem Zeiger erzeugt wird, wie zum Beispiel die Geometrie des Berührungspunkts, der Gerätetyp, der das Ereignis erzeugt hat, der Druck, der auf die Kontaktfläche ausgeübt wurde usw.

Ein _Zeiger_ ist eine hardwareunabhängige Darstellung von Eingabegeräten (wie einer Maus, einem Stift oder einem Berührungspunkt auf einer touchfähigen Oberfläche). Der Zeiger kann auf eine bestimmte Koordinate (oder einen Satz von Koordinaten) auf der Kontaktfläche wie einem Bildschirm zielen.

Ein _Treffer-Test_ eines Zeigers ist der Prozess, den ein Browser verwendet, um das Ziel-Element für ein Zeigerereignis zu bestimmen. Typischerweise wird dies durch Berücksichtigung der Position des Zeigers und auch der visuellen Anordnung der Elemente in einem Dokument auf Bildschirmmedien bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- [`PointerEvent()`](/de/docs/Web/API/PointerEvent/PointerEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen einer Achse eines Transducers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätebildschirms dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeiger oder Stylus) als auch die Y-Achse enthält, dar.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Pen-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Pen-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn erfolgende Drehung des Zeigers (z. B. Pen-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Instanz-Methoden

- [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent`-Instanzen zurück, die in das ausgelöste [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis zusammengeführt wurden.
- [`PointerEvent.getPredictedEvents()`](/de/docs/Web/API/PointerEvent/getPredictedEvents)
  - : Gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die der Browser vorherzusagen erwartet und die dem ausgelösten [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis' zusammengeführten Ereignissen folgen werden.

## Zeiger-Ereignistypen

Die `PointerEvent`-Schnittstelle verfügt über mehrere Ereignistypen. Um zu bestimmen, welches Ereignis ausgelöst wurde, sehen Sie sich die [`type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses an.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mausereignisse gesendet werden (um nicht zeigerspezifischen Code noch mit dem Benutzer interagieren zu lassen). Wenn Sie Zeigerereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffer-Test-Grenzen eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffer-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich des Ergebnisses eines `pointerdown`-Ereignisses von einem Gerät, das kein Hover unterstützt (siehe `pointerdown`). Dieser Ereignistyp ähnelt `pointerover`, unterscheidet sich jedoch dadurch, dass er nicht bubblet.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)

  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Für die Maus wird es ausgelöst, wenn das Gerät von keinem gedrückten zu mindestens einem gedrückten Knopf wechselt. Für Touch wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Für den Stift wird es ausgelöst, wenn der Stylus physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, löst ein `pointerdown`-Ereignis einen [impliziten Zeigerfang](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, wodurch das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange dieser Fang aktiv ist. Der Fang kann manuell durch Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement freigegeben werden, oder er wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger die Koordinaten ändert.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn eine der Eigenschaften eines Zeigers sich ändert.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Zeiger keine Ereignisse mehr generieren kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: das Zeigegerät wird aus den Treffer-Test-Grenzen eines Elements hinausbewegt; das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das kein Hover unterstützt (siehe `pointerup`); nach Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Pen-Stylus den Hoverbereich verlässt, der vom Digitalisierer erkannt werden kann.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffer-Test-Grenzen eines Elements hinausbewegt wird. Für Geräte mit Stift wird dieses Ereignis ausgelöst, wenn der Stylus den Hoverbereich verlässt, der vom Digitalisierer erkannt werden kann.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element Zeigerfang erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, nachdem der Zeigerfang für einen Zeiger freigegeben wird.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und jeden globalen Ereignis-Handler sind in ihren jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Events](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
- {{cssxref("touch-action")}}

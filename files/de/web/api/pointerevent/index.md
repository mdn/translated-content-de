---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("Pointer Events") }}

Das **`PointerEvent`** Interface repräsentiert den Zustand eines DOM-Ereignisses, das durch einen Zeiger erzeugt wurde, z. B. die Geometrie des Berührungspunkts, den Gerätetyp, der das Ereignis generiert hat, die auf die Berührungsfläche ausgeübte Druckmenge usw.

Ein _Zeiger_ ist eine hardwareunabhängige Repräsentation von Eingabegeräten (wie einer Maus, einem Stift oder einem Berührungspunkt auf einer berührungsempfindlichen Oberfläche). Der Zeiger kann ein spezifisches Koordinatenpaar (oder mehrere Koordinaten) auf der Berührungsfläche, wie einem Bildschirm, anvisieren.

Der _Treffertest_ eines Zeigers ist der Prozess, den ein Browser verwendet, um das Ziel-Element für ein Zeiger-Ereignis zu bestimmen. Typischerweise wird dies durch die Betrachtung des Standorts des Zeigers und des visuellen Layouts der Elemente in einem Dokument auf Bildschirmmedien bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- [`PointerEvent()`](/de/docs/Web/API/PointerEvent/PointerEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätebildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` generiert.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Stiftdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich `-1` bis `1`, wobei `0` die neutrale Position des Steuergeräts ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stifts) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Rechtsdrehung des Zeigers (z. B. eines Stifts) um seine Hauptachse in Grad, mit einem Wert im Bereich `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den Primärzeiger dieses Zeigertyps darstellt.

## Instanz-Methoden

- [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent`-Instanzen zurück, die in das ausgelöste [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignis zusammengefasst wurden.
- [`PointerEvent.getPredictedEvents()`](/de/docs/Web/API/PointerEvent/getPredictedEvents)
  - : Gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die der Browser prognostiziert, die dem ausgelösten [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignis folgen werden.

## Zeiger-Ereignistypen

Das `PointerEvent`-Interface hat mehrere Ereignistypen. Um zu bestimmen, welches Ereignis ausgelöst wurde, überprüfen Sie die [`type`](/de/docs/Web/API/Event/type) Eigenschaft des Ereignisses.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mausereignisse gesendet werden (um nicht zeigerspezifischen Code weiterhin mit dem Benutzer interagieren zu lassen). Wenn Sie Zeiger-Ereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass auch das Mausereignis gesendet wird.

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffertestgrenzen eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffertestgrenzen eines Elements oder eines seiner Nachkommen bewegt wird, auch als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe `pointerdown`). Dieser Ereignistyp ist ähnlich wie `pointerover`, unterscheidet sich jedoch dadurch, dass er nicht aufsteigt.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)

  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Bei der Maus wird es ausgelöst, wenn das Gerät von keinem gedrückten Knopf zu mindestens einem gedrückten Knopf wechselt. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Bei einem Stift wird es ausgelöst, wenn der Stift physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, löst ein `pointerdown` Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, die dazu führt, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassten Ziel auftreten. Daher werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist. Die Erfassung kann manuell durch Aufrufen von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Ziel-Element freigegeben werden, oder sie wird nach einem `pointerup` oder `pointercancel`-Ereignis implizit freigegeben.

- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger seine Koordinaten ändert.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn sich eine der Eigenschaften eines Zeigers ändert.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er schließt, dass der Zeiger keine weiteren Ereignisse mehr generieren kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: wenn sich das Zeigegerät aus den Treffertestgrenzen eines Elements heraus bewegt; nach dem Auslösen des `pointerup` Ereignisses für ein Gerät, das kein Hover unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel` Ereignisses (siehe `pointercancel`); wenn ein Stift die Erfassungsreichweite verlassender Hover verlässt.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffertestgrenzen eines Elements heraus bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stift die Erfassungsreichweite verlassender Hover verlässt.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element die Zeigererfassung erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und jeden globalen Ereignis-Handler sind in ihren jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
- {{cssxref("touch-action")}}

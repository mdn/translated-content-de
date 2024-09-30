---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Das **`PointerEvent`**-Interface repräsentiert den Zustand eines DOM-Ereignisses, das durch einen Zeiger erzeugt wurde, wie die Geometrie des Kontaktpunkts, den Gerätetyp, der das Ereignis erzeugt hat, den Druck, der auf die Kontaktfläche ausgeübt wurde, usw.

Ein _Zeiger_ ist eine hardwareunabhängige Darstellung von Eingabegeräten (wie einer Maus, einem Stift oder einem Kontaktpunkt auf einer berührungsempfindlichen Oberfläche). Der Zeiger kann auf eine bestimmte Koordinate (oder Koordinatensatz) auf der Kontaktfläche wie einem Bildschirm zielen.

Ein Zeiger-_Treffertest_ ist der Prozess, den ein Browser verwendet, um das Ziel-Element für ein Zeigerereignis zu bestimmen. Typischerweise wird dies durch Berücksichtigung des Standorts des Zeigers und auch des visuellen Layouts der Elemente in einem Dokument auf Bildschirmmedien bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- [`PointerEvent()`](/de/docs/Web/API/PointerEvent/PointerEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (eines Zeigers oder Stiftes) und der X-Y-Ebene eines Gerätebildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (eines Zeigers oder Stiftes) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Eingabegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn gerichtete Drehung des Zeigers (z.B. Stift) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Instanz-Methoden

- [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent`-Instanzen zurück, die zu dem ausgelösten [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis zusammengefasst wurden.
- [`PointerEvent.getPredictedEvents()`](/de/docs/Web/API/PointerEvent/getPredictedEvents)
  - : Gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die der Browser vorausgesagt hat, nachdem die zu dem ausgelösten [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis zusammengefassten Ereignisse folgen werden.

## Zeiger-Ereignistypen

Das `PointerEvent`-Interface hat mehrere Ereignistypen. Um zu bestimmen, welches Ereignis ausgelöst wurde, sehen Sie sich die [`type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses an.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mauserereignisse gesendet werden (um nicht zeigerspezifischem Code zu ermöglichen, weiterhin mit dem Benutzer zu interagieren). Wenn Sie Zeigerereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mauserereignis ebenfalls gesendet wird.

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffertest-Grenzen eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffertest-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses eines Geräts, das Hover nicht unterstützt (siehe `pointerdown`). Dieser Ereignistyp ähnelt `pointerover`, unterscheidet sich jedoch dadurch, dass er nicht aufsteigt.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)

  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Für die Maus wird es ausgelöst, wenn das Gerät vom Drücken keiner Tasten zum Drücken von mindestens einer Taste übergeht. Für Touch wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Für Stift wird es ausgelöst, wenn der Stift physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, löst ein `pointerdown`-Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, wodurch das Ziel alle nachfolgenden Zeigereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist. Die Erfassung kann manuell durch Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement freigegeben werden oder wird nach einem `pointerup`- oder `pointercancel`-Ereignis automatisch freigegeben.

- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger Koordinaten ändert.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn sich eine der Eigenschaften eines Zeigers ändert.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er feststellt, dass der Zeiger keine Ereignisse mehr generieren kann (z.B. wenn das zugehörige Gerät deaktiviert ist).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst: wenn das Zeigegerät aus den Treffertest-Grenzen eines Elements bewegt wird; wenn das `pointerup`-Ereignis für ein Gerät, das Hover nicht unterstützt, ausgelöst wird (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stift die Hover-Reichweite verlässt, die der Digitalisierer erkennen kann.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffertest-Grenzen eines Elements bewegt wird. Für Stiftgeräte wird dieses Ereignis ausgelöst, wenn der Stift die Hover-Reichweite verlässt, die der Digitalisierer erkennen kann.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element die Zeigererfassung erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und jeden globalen Ereignishandler sind in den jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touchereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
- {{cssxref("touch-action")}}

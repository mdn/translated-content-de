---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Das **`PointerEvent`**-Interface repräsentiert den Zustand eines DOM-Ereignisses, das durch einen Zeiger erzeugt wird, wie die Geometrie des Berührungspunkts, den Gerätetyp, der das Ereignis erzeugt hat, den ausgeübten Druck auf die Kontaktfläche usw.

Ein _Zeiger_ ist eine hardwareunabhängige Darstellung von Eingabegeräten (z. B. einer Maus, einem Stift oder einem Berührungspunkt auf einer berührungsempfindlichen Oberfläche). Der Zeiger kann eine bestimmte Koordinate (oder einen Satz von Koordinaten) auf der Kontaktfläche, wie einem Bildschirm, anvisieren.

Der _Treffertest_ eines Zeigers ist der Prozess, den ein Browser verwendet, um das Zielelement für ein Zeigereignis zu bestimmen. Typischerweise wird dies durch die Betrachtung des Standorts des Zeigers und des visuellen Layouts der Elemente in einem Dokument auf Bildschirmmedien bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- [`PointerEvent()`](/de/docs/Web/API/PointerEvent/PointerEvent)
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größenordnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größenordnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich `0` bis `1`, wobei `0` und `1` jeweils den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Barrel-Druck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralposition der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Stift-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Stift-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z. B. Stift-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Zeigt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Instanzmethoden

- [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents) {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent`-Instanzen zurück, die in das verteilte [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignis koalesziert wurden.
- [`PointerEvent.getPredictedEvents()`](/de/docs/Web/API/PointerEvent/getPredictedEvents)
  - : Gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die der Browser vorhersagt, die den koaleszierten Ereignissen des verteilten [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignisses folgen werden.

## Zeigereignis-Typen

Das `PointerEvent`-Interface verfügt über verschiedene Ereignistypen. Um festzustellen, welches Ereignis ausgelöst wurde, schauen Sie sich die [`type`](/de/docs/Web/API/Event/type)-Eigenschaft des Ereignisses an.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mausereignisse gesendet werden (um es nicht nur auf Zeiger spezialisierter Code zu ermöglichen, mit dem Benutzer zu interagieren). Wenn Sie Zeigereignisse verwenden, sollten Sie [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

- [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffergrenzen eines Elements bewegt wird.
- [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffergrenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich als Ergebnis eines `pointerdown`-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe `pointerdown`). Dieser Ereignistyp ähnelt `pointerover`, unterscheidet sich jedoch dadurch, dass er nicht blasenförmig ist.
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)

  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Bei der Maus wird es ausgelöst, wenn das Gerät von keinen gedrückten Tasten zu mindestens einer gedrückten Taste wechselt. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Bei einem Stift wird es ausgelöst, wenn der Stylus physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) erlauben, löst ein `pointerdown`-Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, die dazu führt, dass das Ziel alle nachfolgenden Zeigereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung eingestellt ist. Die Erfassung kann manuell durch Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf dem Zielelement freigegeben werden oder wird nach einem `pointerup`- oder `pointercancel`-Ereignis implizit freigegeben.

- [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger seine Koordinaten ändert.
- [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event) {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn sich eine der Eigenschaften eines Zeigers ändert.
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - : Ein Browser löst dieses Ereignis aus, wenn er schlussfolgert, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wurde).
- [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: ein Zeigegerät wird aus den Treffergrenzen eines Elements bewegt; das `pointerup`-Ereignis wird für ein Gerät ausgelöst, das Hover nicht unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stift-Stylus den Hover-Bereich verlässt, der vom Digitalisierer erkennbar ist.
- [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Treffergrenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den Hover-Bereich verlässt, der vom Digitalisierer erkennbar ist.
- [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, wenn ein Element die Zeigererfassung erhält.
- [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - : Dieses Ereignis wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und jeden globalen Ereignishandler sind auf den jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch-Ereignisse](/de/docs/Web/API/Touch_events)
- [`GestureEvent`](/de/docs/Web/API/GestureEvent)
- {{cssxref("touch-action")}}

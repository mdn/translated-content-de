---
title: PointerEvent
slug: Web/API/PointerEvent
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{ APIRef("Pointer Events") }}

Die **`PointerEvent`**-Schnittstelle repräsentiert den Zustand eines DOM-Ereignisses, das durch einen Zeiger erzeugt wurde, wie die Geometrie des Kontaktpunkts, der Gerätetyp, der das Ereignis erzeugte, der auf die Kontaktfläche ausgeübte Druck usw.

Ein _Zeiger_ ist eine hardwareunabhängige Repräsentation von Eingabegeräten (wie Maus, Stift oder Kontaktpunkt auf einer berührungsempfindlichen Oberfläche). Der Zeiger kann auf eine bestimmte Koordinate (oder einen Satz von Koordinaten) auf der Kontaktfläche wie einem Bildschirm zielen.

Ein Zeiger-_Hit-Test_ ist der Prozess, den ein Browser verwendet, um das Zielelement für ein Pointer-Ereignis zu bestimmen. In der Regel wird dies durch die Berücksichtigung des Standorts des Zeigers sowie der visuellen Layouts von Elementen in einem Dokument auf Bildschirmmedien bestimmt.

{{InheritanceDiagram}}

## Konstruktoren

- {{domxref("PointerEvent.PointerEvent", "PointerEvent()")}}
  - : Erstellt ein synthetisches und nicht vertrauenswürdiges `PointerEvent`.

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen einer Transducer-(Zeiger oder Stift)-Achse und der X-Y-Ebene eines Geräteschirms.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-(Zeiger oder Stift)-Achse als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck repräsentieren, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeiger-(z. B. Stiftstylus)-Achse als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeiger-(z. B. Stiftstylus)-Achse als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. Stiftstylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Instanz-Methoden

- {{DOMxRef('PointerEvent.getCoalescedEvents()')}} {{SecureContext_Inline}}
  - : Gibt eine Sequenz aller `PointerEvent`-Instanzen zurück, die in das ausgelöste {{domxref("Element/pointermove_event", "pointermove")}}-Ereignis zusammengefasst wurden.
- {{DOMxRef('PointerEvent.getPredictedEvents()')}}
  - : Gibt eine Sequenz von `PointerEvent`-Instanzen zurück, die der Browser vorhersagt, die auf die zusammengeführten Ereignisse des ausgelösten {{domxref("Element/pointermove_event", "pointermove")}}-Ereignisses folgen werden.

## Zeigereignistypen

Die `PointerEvent`-Schnittstelle hat mehrere Ereignistypen. Um festzustellen, welches Ereignis ausgelöst wurde, betrachten Sie die {{domxref("Event.type", "type")}}-Eigenschaft des Ereignisses.

> [!NOTE]
> Es ist wichtig zu beachten, dass in vielen Fällen sowohl Zeiger- als auch Mausereignisse gesendet werden (um zu ermöglichen, dass nicht zeigerspezifischer Code weiterhin mit dem Benutzer interagiert). Wenn Sie Zeigerereignisse verwenden, sollten Sie {{domxref("Event.preventDefault()", "preventDefault()")}} aufrufen, um zu verhindern, dass das Mausereignis ebenfalls gesendet wird.

- {{domxref('Element/pointerover_event', 'pointerover')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Hit-Test-Grenzen eines Elements bewegt wird.
- {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät in die Hit-Test-Grenzen eines Elements oder eines seiner Nachkommen bewegt wird, einschließlich infolge eines `pointerdown`-Ereignisses von einem Gerät, das Hover nicht unterstützt (siehe `pointerdown`). Dieser Ereignistyp ist `pointerover` ähnlich, unterscheidet sich jedoch dadurch, dass er nicht aufsteigt.
- {{domxref('Element/pointerdown_event', 'pointerdown')}}

  - : Das Ereignis wird ausgelöst, wenn ein Zeiger _aktiv_ wird. Bei der Maus wird es ausgelöst, wenn das Gerät von keinem gedrückten zu mindestens einem gedrückten Knopf wechselt. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Bei einem Stift wird es ausgelöst, wenn der Stift physischen Kontakt mit dem Digitalisierer herstellt.

    > [!NOTE]
    > Bei Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, löst ein `pointerdown`-Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, die bewirkt, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als ob sie über dem erfassenden Ziel auftreten würden. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung gesetzt ist. Die Erfassung kann manuell durch einen Aufruf von {{ domxref('element.releasePointerCapture') }} auf das Zielelement aufgehoben werden oder wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis freigegeben.

- {{domxref('Element/pointermove_event', 'pointermove')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger seine Koordinaten ändert.
- {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}} {{experimental_inline}}
  - : Dieses Ereignis wird ausgelöst, wenn sich eine der Eigenschaften eines Zeigers ändert.
- {{domxref('Element/pointerup_event', 'pointerup')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr _aktiv_ ist.
- {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - : Ein Browser löst dieses Ereignis aus, wenn er schlussfolgert, dass der Zeiger keine Ereignisse mehr erzeugen kann (zum Beispiel, wenn das zugehörige Gerät deaktiviert wird).
- {{domxref('Element/pointerout_event', 'pointerout')}}
  - : Dieses Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: Zeigegerät wird aus den Hit-Test-Grenzen eines Elements bewegt; Auslösen des `pointerup`-Ereignisses für ein Gerät, das Hover nicht unterstützt (siehe `pointerup`); nach dem Auslösen des `pointercancel`-Ereignisses (siehe `pointercancel`); wenn ein Stiftstylus den erkennbare Schwebebereich des Digitalisierers verlässt.
- {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Zeigegerät aus den Hit-Test-Grenzen eines Elements bewegt wird. Bei Stiftgeräten wird dieses Ereignis ausgelöst, wenn der Stylus den erkennbare Schwebebereich des Digitalisierers verlässt.
- {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - : Dieses Ereignis wird ausgelöst, wenn ein Element Zeigererfassung erhält.
- {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - : Dieses Ereignis wird ausgelöst, nachdem die Zeigererfassung für einen Zeiger freigegeben wurde.

## Beispiel

Beispiele für jede Eigenschaft, jeden Ereignistyp und globalen Ereignishandler sind auf ihren jeweiligen Referenzseiten enthalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Touch events](/de/docs/Web/API/Touch_events)
- {{domxref("GestureEvent")}}
- {{cssxref("touch-action")}}

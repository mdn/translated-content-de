---
title: "Element: pointerrawupdate-Ereignis"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{APIRef}}{{SeeCompatTable}}{{secureContext_header}}

Das **`pointerrawupdate`** {{DOMxRef('PointerEvent')}} wird ausgelöst, wenn sich ein Zeiger in einer Weise ändert, die keine {{domxref('Element/pointerdown_event', 'pointerdown')}}- oder {{domxref('Element/pointerup_event', 'pointerup')}}-Ereignisse auslöst. Siehe {{domxref('Element/pointermove_event', 'pointermove')}} für eine Liste dieser Eigenschaften.

Das `pointerrawupdate`-Ereignis kann koaleszierte Ereignisse haben, wenn es bereits ein anderes `pointerrawupdate`-Ereignis mit derselben Zeiger-ID gibt, das in der Ereignisschleife noch nicht verteilt wurde. Für Informationen zu koaleszierten Ereignissen siehe die {{domxref("PointerEvent.getCoalescedEvents")}}-Dokumentation.

Listener für `pointerrawupdate`-Ereignisse sollten nur hinzugefügt werden, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und diese so schnell verarbeiten kann, wie sie ausgelöst werden. Für die meisten Anwendungsfälle sollten andere Zeigereignistypen ausreichen, da es Leistungsauswirkungen haben kann, Listener für `pointerrawupdate`-Ereignisse hinzuzufügen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("pointerrawupdate", (event) => {});

onpointerrawupdate = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (eines Zeigers oder Stylus) und der X-Y-Ebene eines Gerätebildschirms.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (eines Zeigers oder Stylus) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größenordnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größenordnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Winkeldurchmesser (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stylus) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Winkeldurchmesser (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stylus) als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. eines Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiel

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Koaleszierte Ereignisse:", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // Etwas mit den koaleszierten Ereignissen machen.
    }
  } else {
    // Etwas mit dem Ereignis machen.
    console.log("Rohes Ereignis", event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse

  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}

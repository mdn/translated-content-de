---
title: "Element: pointerrawupdate Event"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: f1113cf25440d058956cfae2a9e44e8c86182d43
---

{{APIRef}}{{secureContext_header}}

Das **`pointerrawupdate`** Ereignis wird ausgelöst, wenn ein Zeiger Eigenschaften ändert, die keine [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
Siehe [`pointermove`](/de/docs/Web/API/Element/pointermove_event) für eine Liste dieser Eigenschaften.

Das `pointerrawupdate` Ereignis kann gebündelte Ereignisse haben, wenn es bereits ein anderes `pointerrawupdate` Ereignis mit der gleichen Zeiger-ID gibt, das noch nicht in der Ereignisschleife verarbeitet wurde.
Für Informationen zu gebündelten Ereignissen, siehe die Dokumentation zu [`PointerEvent.getCoalescedEvents()`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

`pointerrawupdate` ist für Anwendungen gedacht, die eine hochpräzise Eingabeverarbeitung benötigen und allein durch gebündelte [`pointermove`](/de/docs/Web/API/Element/pointermove_event) Ereignisse keine reibungslosen Interaktionen erreichen können.
Da das Abhören von `pointerrawupdate` Ereignissen jedoch die Leistung beeinträchtigen kann, sollten Sie diese Listener nur hinzufügen, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und diese so schnell wie sie ausgelöst werden verarbeiten kann.
Für die meisten Anwendungsfälle sollten andere Zeigerereignistypen ausreichen.

Dieses Ereignis [bubbling](/de/docs/Learn_web_development/Core/Scripting/Event_bubbling) und ist [composed](/de/docs/Web/API/Event/composed), aber nicht [cancelable](/de/docs/Web/API/Event/cancelable) und hat keine Standardaktion.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Achse des Transducers (eines Zeigers oder Stylus) und der X-Y-Ebene eines Geräts.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (eines Zeigers oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein eindeutiger Identifikator für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Ein eindeutiger Identifikator für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitudine auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitudine auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Rohrdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position des Steuerungselements ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Plane Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Plane Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiel

```js
addEventListener("pointerrawupdate", (event) => {
  if (event.getCoalescedEvents && event.getCoalescedEvents().length > 1) {
    console.log("Coalesced events:", event.getCoalescedEvents().length);
    for (let coalescedEvent of event.getCoalescedEvents()) {
      // Do something with the coalesced events.
    }
  } else {
    // Do something with the event.
    console.log("Raw event", event);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse

  - [`gotpointercapture`](/de/docs/Web/API/Element/gotpointercapture_event)
  - [`lostpointercapture`](/de/docs/Web/API/Element/lostpointercapture_event)
  - [`pointerover`](/de/docs/Web/API/Element/pointerover_event)
  - [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)
  - [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)

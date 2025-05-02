---
title: "Element: pointerrawupdate Ereignis"
short-title: pointerrawupdate
slug: Web/API/Element/pointerrawupdate_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}{{SeeCompatTable}}{{secureContext_header}}

Das **`pointerrawupdate`** [`PointerEvent`](/de/docs/Web/API/PointerEvent) wird ausgelöst, wenn ein Zeiger irgendwelche Eigenschaften ändert, die nicht die [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event) oder [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignisse auslösen.
Siehe [`pointermove`](/de/docs/Web/API/Element/pointermove_event) für eine Liste dieser Eigenschaften.

Das `pointerrawupdate` Ereignis kann zusammengeschlossene Ereignisse enthalten, wenn bereits ein weiteres `pointerrawupdate` Ereignis mit derselben Zeiger-ID existiert, das noch nicht in der Ereignisschleife ausgelöst wurde.
Für Informationen über zusammengeschlossene Ereignisse, siehe die Dokumentation von [`PointerEvent.getCoalescedEvents`](/de/docs/Web/API/PointerEvent/getCoalescedEvents).

Listener für `pointerrawupdate` Ereignisse sollten nur hinzugefügt werden, wenn Ihr JavaScript hochfrequente Ereignisse benötigt und damit so schnell umgehen kann, wie sie ausgelöst werden.
Für die meisten Anwendungsfälle sollten andere Zeigerereignistypen ausreichend sein, da das Hinzufügen von Listenern für `pointerrawupdate` Ereignisse Leistungsauswirkungen haben kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerrawupdate", (event) => { })

onpointerrawupdate = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Wandlerachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse (einen Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck repräsentieren, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Pen-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Pen-Stylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
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

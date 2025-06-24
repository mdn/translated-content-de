---
title: "Element: pointercancel event"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass wahrscheinlich keine weiteren Zeigerereignisse mehr auftreten, oder wenn nach dem Auslösen des [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses der Zeiger zur Manipulation des Ansichtsfensters durch Schwenken, Zoomen oder Scrollen verwendet wird.

Einige Beispiele für Situationen, die ein `pointercancel`-Ereignis auslösen:

- Ein Hardware-Ereignis tritt auf, das die Zeigeraktivitäten abbricht. Dies kann z. B. der Fall sein, wenn der Benutzer Anwendungen über eine Anwendungsschaltfläche oder die "Home"-Taste auf einem mobilen Gerät wechselt.
- Die Bildschirmorientierung des Geräts wird geändert, während der Zeiger aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Zeigereingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware z. B. Palm Rejection unterstützt, um zu verhindern, dass eine Hand, die beim Verwenden eines Stifts auf dem Display ruht, versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen gleichzeitigen Zeigern interagiert, kann der Browser dieses Ereignis für alle vorhandenen Zeiger auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

> [!NOTE]
> Nachdem das `pointercancel`-Ereignis ausgelöst wurde, sendet der Browser auch [`pointerout`](/de/docs/Web/API/Element/pointerout_event) gefolgt von [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointercancel", (event) => { })

onpointercancel = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Eingabegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` jeweils den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stiftstifts) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stiftstifts) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers im Uhrzeigersinn (z. B. eines Stiftstifts) um seine Hauptachse in Grad mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Pointer event cancelled");
});
```

Verwendung der `onpointercancel` Ereignis-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer event cancelled");
};
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
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)

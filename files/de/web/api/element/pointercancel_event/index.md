---
title: "Element: pointercancel event"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass wahrscheinlich keine weiteren Pointer-Ereignisse mehr auftreten werden, oder wenn nach dem Auslösen des [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)-Ereignisses der Zeiger verwendet wird, um den Ansichtsbereich durch Schwenken, Zoomen oder Scrollen zu manipulieren.

Einige Beispiele für Situationen, die ein `pointercancel`-Ereignis auslösen können:

- Ein Hardwareereignis tritt auf, das die Pointer-Aktivitäten abbricht. Dies kann beispielsweise passieren, wenn der Benutzer mit einer Anwendungsumschaltoberfläche oder der „Home“-Taste auf einem mobilen Gerät Anwendungen wechselt.
- Die Ausrichtung des Bildschirms des Geräts wird geändert, während der Zeiger aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Eingabe versehentlich begonnen hat. Dies kann passieren, wenn die Hardware Palm-Rejection unterstützt, um zu verhindern, dass eine Hand, die auf dem Bildschirm ruht, während eines Stylus verwendet wird, versehentlich Ereignisse auslöst.
- Die CSS-Eigenschaft {{cssxref("touch-action")}} verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen gleichzeitigen Zeigern interagiert, kann der Browser dieses Ereignis für alle bestehenden Zeiger auslösen (auch wenn der Benutzer den Bildschirm noch berührt).

> [!NOTE]
> Nachdem das `pointercancel`-Ereignis ausgelöst wurde, sendet der Browser auch ein [`pointerout`](/de/docs/Web/API/Element/pointerout_event), gefolgt von einem [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

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
  - : Stellt den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätescreens dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducer-Achse (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Eingabegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Pointer-Eingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Pointer-Eingabe (auch bekannt als barrel pressure oder [cylinder stress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Pen-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Pen-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z. B. Pen-Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
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

Verwendung der `onpointercancel`-Ereignisbehandlungseigenschaft:

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

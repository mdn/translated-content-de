---
title: "Element: pointerout-Ereignis"
short-title: pointerout
slug: Web/API/Element/pointerout_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `pointerout`-Ereignis wird aus mehreren Gründen ausgelöst, einschließlich: Das Zeigegerät wird aus den _Hit-Test_-Grenzen eines Elements herausbewegt; Auslösen des [`pointerup`](/de/docs/Web/API/Element/pointerup_event)-Ereignisses für ein Gerät, das keine Hover-Unterstützung bietet (siehe [`pointerup`](/de/docs/Web/API/Element/pointerup_event)); nach dem Auslösen des [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignisses (siehe [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)); wenn ein Stift die vom Digitalisierer erkennbare Hover-Range verlässt.

`pointerout`-Ereignisse haben die gleichen Probleme wie [`mouseout`](/de/docs/Web/API/Element/mouseout_event). Wenn das Zielelement Kindelemente hat, werden `pointerout`- und `pointerover`-Ereignisse ausgelöst, sobald der Zeiger über die Grenzen dieser Elemente bewegt wird, und nicht nur das Zielelement selbst. In der Regel ist das Verhalten von [`pointerenter`](/de/docs/Web/API/Element/pointerenter_event)- und [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)-Ereignissen sinnvoller, da sie nicht von Bewegungen in Kindelemente betroffen sind.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerout", (event) => { })

onpointerout = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Überträgerachse (ein Zeiger oder Stift) und der X-Y-Ebene eines Geräts dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Überträgerachse (ein Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch als Laufdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stiftstift) als auch die Y-Achse umfasst.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stiftstift) als auch die X-Achse umfasst.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn gerichtete Drehung des Zeigers (z. B. Stiftstift) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerout", (event) => {
  console.log("Pointer moved out");
});
```

Verwendung der `onpointerout`-Event-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointerout = (event) => {
  console.log("Pointer moved out");
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
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mouseout`](/de/docs/Web/API/Element/mouseout_event)

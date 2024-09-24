---
title: "Element: pointerover-Ereignis"
short-title: pointerover
slug: Web/API/Element/pointerover_event
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{APIRef}}

Das `pointerover`-Ereignis wird ausgelöst, wenn ein Zeigegerät in die Treffergrenzen eines Elements bewegt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pointerover", (event) => {});

onpointerover = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Sonde (ein Zeiger oder Stylus) Achse und der X-Y-Ebene eines Geräts dar.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Sonde (ein Zeiger oder Stylus) Achse als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck repräsentieren, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeiger- (z.B. Kuli-Stylus) Achse als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeiger- (z.B. Kuli-Stylus) Achse als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Kuli-Stylus) um seine Hauptachse im Uhrzeigersinn in Grad mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerover", (event) => {
  console.log("Pointer moved in");
});
```

Verwendung der `onpointerover`-Ereignis-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointerover = (event) => {
  console.log("Pointer moved in");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse

  - {{domxref('Element/gotpointercapture_event', 'gotpointercapture')}}
  - {{domxref('Element/lostpointercapture_event', 'lostpointercapture')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}

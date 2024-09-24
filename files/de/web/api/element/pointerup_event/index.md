---
title: "Element: pointerup-Ereignis"
short-title: pointerup
slug: Web/API/Element/pointerup_event
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{APIRef}}

Das `pointerup`-Ereignis wird ausgelöst, wenn ein Zeiger nicht mehr aktiv ist. Denken Sie daran, dass stattdessen auch ein [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)-Ereignis auftreten kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pointerup", (event) => {});

onpointerup = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätedisplays dar.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducer-Achse (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Barreldruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt an, welcher Gerätetyp das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerup", (event) => {
  console.log("Pointer up");
});
```

Verwendung der Ereignis-Handler-Eigenschaft `onpointerup`:

```js
const para = document.querySelector("p");

para.onpointerup = (event) => {
  console.log("Pointer up");
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
  - {{domxref('Element/pointerover_event', 'pointerover')}}
  - {{domxref('Element/pointerenter_event', 'pointerenter')}}
  - {{domxref('Element/pointerdown_event', 'pointerdown')}}
  - {{domxref('Element/pointermove_event', 'pointermove')}}
  - {{domxref('Element/pointercancel_event', 'pointercancel')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}

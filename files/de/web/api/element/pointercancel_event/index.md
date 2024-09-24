---
title: "Element: pointercancel-Ereignis"
short-title: pointercancel
slug: Web/API/Element/pointercancel_event
l10n:
  sourceCommit: ba77b09c606b1b5fdea532e84b980cd0e79f226d
---

{{APIRef}}

Das **`pointercancel`**-Ereignis wird ausgelöst, wenn der Browser feststellt, dass voraussichtlich keine weiteren Zeigereignisse mehr auftreten werden, oder wenn nach dem {{domxref("Element/pointerdown_event", "pointerdown")}}-Ereignis der Zeiger verwendet wird, um den Viewport durch Schwenken, Zoomen oder Scrollen zu manipulieren.

Einige Beispiele für Situationen, die ein `pointercancel`-Ereignis auslösen:

- Ein Hardwareereignis tritt auf, das die Zeigeraktivitäten abbricht. Dies kann beispielsweise der Fall sein, wenn der Benutzer mit einem Anwendungsumschalter die Anwendung wechselt oder die "Home"-Taste auf einem mobilen Gerät drückt.
- Die Bildschirmorientierung des Geräts wird geändert, während der Zeiger aktiv ist.
- Der Browser entscheidet, dass der Benutzer die Zeigereingabe versehentlich gestartet hat. Dies kann passieren, wenn die Hardware Unterstützung für Handflächenerkennung bietet, um zu verhindern, dass eine Hand, die auf dem Display ruht, während der Verwendung eines Stifts versehentlich Ereignisse auslöst.
- Die {{cssxref("touch-action")}} CSS-Eigenschaft verhindert, dass die Eingabe fortgesetzt wird.
- Wenn der Benutzer mit zu vielen Zeigern gleichzeitig interagiert, kann der Browser dieses Ereignis für alle vorhandenen Zeiger auslösen (auch wenn der Benutzer den Bildschirm weiterhin berührt).

> [!NOTE]
> Nachdem das `pointercancel`-Ereignis ausgelöst wurde, sendet der Browser außerdem {{domxref("Element/pointerout_event", "pointerout")}}, gefolgt von {{domxref("Element/pointerleave_event", "pointerleave")}}.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pointercancel", (event) => {});

onpointercancel = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Transducerachse (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätescreens dar.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducerachse (einen Zeiger oder Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.persistentDeviceId')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erfassen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralposition der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stiftstift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stiftstift) als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. Stiftstift) um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis ausgelöst hat (Maus, Stift, Berührung usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointercancel", (event) => {
  console.log("Pointer-Ereignis abgebrochen");
});
```

Verwendung der `onpointercancel`-Ereignis-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointercancel = (event) => {
  console.log("Pointer-Ereignis abgebrochen");
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
  - {{domxref('Element/pointerup_event', 'pointerup')}}
  - {{domxref('Element/pointerout_event', 'pointerout')}}
  - {{domxref('Element/pointerleave_event', 'pointerleave')}}
  - {{domxref('Element/pointerrawupdate_event', 'pointerrawupdate')}}

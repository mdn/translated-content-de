---
title: "Element: pointerdown-Ereignis"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: 6e5b16aa29efee13cc7ec2fdc5512f0b3d275377
---

{{APIRef}}

Das `pointerdown`-Ereignis wird ausgelöst, wenn ein Zeiger aktiv wird. Bei einer Maus wird es ausgelöst, wenn das Gerät von keinem gedrückten Knopf zu mindestens einem gedrückten Knopf übergeht. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer erfolgt. Bei einem Stift wird es ausgelöst, wenn der Stift physischen Kontakt mit dem Digitalisierer herstellt.

Dieses Verhalten unterscheidet sich von [`mousedown`](/de/docs/Web/API/Element/mousedown_event)-Ereignissen. Beim Einsatz einer physischen Maus werden `mousedown`-Ereignisse jedes Mal ausgelöst, wenn irgendeine Taste einer Maus gedrückt wird. `pointerdown`-Ereignisse hingegen werden nur beim ersten Tastendruck ausgelöst; nachfolgende Tastendrücke lösen keine `pointerdown`-Ereignisse aus.

> [!NOTE]
> Für Touchscreen-Browser, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) unterstützen, löst ein `pointerdown`-Ereignis eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus. Dies führt dazu, dass das Ziel alle nachfolgenden Zeigerereignisse erfasst, als würden sie über dem erfassten Ziel auftreten. Dementsprechend werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung aktiv ist. Die Erfassung kann manuell durch Aufruf von [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) am Ziel-Element aufgehoben werden oder wird implizit nach einem `pointerup`- oder `pointercancel`-Ereignis zurückgesetzt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("pointerdown", (event) => {});

onpointerdown = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Achse eines Transducers (z. B. Zeiger oder Stift) und der X-Y-Ebene eines Geräts dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducer-Achse (z. B. Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` generiert.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Fassdruck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Flugwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Flugwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. Stift) um seine Hauptachse im Uhrzeigersinn in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (z. B. Maus, Stift, Berührung).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

Verwendung von `addEventListener()`:

```js
const para = document.querySelector("p");

para.addEventListener("pointerdown", (event) => {
  console.log("Pointer down event");
});
```

Verwendung der `onpointerdown`-Ereignis-Handler-Eigenschaft:

```js
const para = document.querySelector("p");

para.onpointerdown = (event) => {
  console.log("Pointer down event");
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
  - [`pointermove`](/de/docs/Web/API/Element/pointermove_event)
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mousedown`](/de/docs/Web/API/Element/mousedown_event)

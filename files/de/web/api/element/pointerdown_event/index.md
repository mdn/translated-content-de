---
title: "Element: pointerdown event"
short-title: pointerdown
slug: Web/API/Element/pointerdown_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `pointerdown` Event wird ausgelöst, wenn ein Zeigegerät aktiv wird. Bei der Maus wird es ausgelöst, wenn der Übergang von keinen gedrückten Tasten zu mindestens einer gedrückten Taste erfolgt. Bei Berührung wird es ausgelöst, wenn physischer Kontakt mit dem Digitalisierer hergestellt wird. Beim Stift wird es ausgelöst, wenn der Stift physischen Kontakt mit dem Digitalisierer herstellt.

Dieses Verhalten unterscheidet sich von [`mousedown`](/de/docs/Web/API/Element/mousedown_event) Events. Bei der Verwendung einer physischen Maus werden `mousedown` Events jedes Mal ausgelöst, wenn eine Taste einer Maus gedrückt wird. `pointerdown` Events werden nur beim ersten Tastendruck ausgelöst; nachfolgende Tastendrücke lösen keine `pointerdown` Events aus.

> [!NOTE]
> Bei Touchscreen-Browsern, die [direkte Manipulation](https://w3c.github.io/pointerevents/#dfn-direct-manipulation) ermöglichen, löst ein `pointerdown` Event eine [implizite Zeigererfassung](https://w3c.github.io/pointerevents/#dfn-implicit-pointer-capture) aus, wodurch das Ziel alle nachfolgenden Zeigereignisse erfasst, als ob sie über das erfassende Ziel auftreten würden. Folglich werden `pointerover`, `pointerenter`, `pointerleave` und `pointerout` **nicht ausgelöst**, solange diese Erfassung aktiv ist. Die Erfassung kann manuell aufgehoben werden, indem [`element.releasePointerCapture`](/de/docs/Web/API/Element/releasePointerCapture) auf das Ziel-Element angewandt wird, oder sie wird implizit nach einem `pointerup` oder `pointercancel` Event aufgehoben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("pointerdown", (event) => { })

onpointerdown = (event) => { }
```

## Eventtyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräts dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Transducer-Achse (ein Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine einzigartige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine einzigartige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Barrel-Druck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralstellung der Kontrolle ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
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

Verwendung der `onpointerdown` Ereignis-Handler-Eigenschaft:

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

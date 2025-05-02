---
title: "Element: pointermove event"
short-title: pointermove
slug: Web/API/Element/pointermove_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das `pointermove`-Ereignis wird ausgelöst, wenn sich ein Zeiger bewegt und der Zeiger nicht durch eine [Berührungsaktion](/de/docs/Web/CSS/touch-action) eines Browsers [abgebrochen](/de/docs/Web/API/Element/pointercancel_event) wurde. Es ähnelt dem [`mousemove`](/de/docs/Web/API/Element/mousemove_event)-Ereignis, bietet jedoch mehr Funktionen.

Diese Ereignisse treten auf, unabhängig davon, ob Zeigertasten gedrückt sind oder nicht. Sie können in einer sehr hohen Frequenz ausgelöst werden, abhängig davon, wie schnell der Benutzer den Zeiger bewegt, wie schnell die Maschine ist, welche anderen Aufgaben und Prozesse ablaufen usw.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandler-Eigenschaft.

```js-nolint
addEventListener("pointermove", (event) => { })

onpointermove = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PointerEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Achse eines Transducers (eines Zeigers oder Stifts) und der X-Y-Ebene eines Gerätsbildschirms dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transducers (eines Zeigers oder Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.persistentDeviceId`](/de/docs/Web/API/PointerEvent/persistentDeviceId) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine eindeutige Kennung für das Zeigegerät, das das `PointerEvent` erzeugt.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderbelastung](https://de.wikipedia.org/wiki/Zylinderbelastung)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung darstellt.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. Stift) im Uhrzeigersinn um seine Hauptachse in Grad mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Zeigt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Nutzungshinweise

Das Ereignis, welches vom Typ [`PointerEvent`](/de/docs/Web/API/PointerEvent) ist, liefert alle notwendigen Informationen über die Interaktion des Benutzers mit dem Zeigegerät, einschließlich der Position, Bewegungsentfernung, Tastenstatus und vieles mehr.

## Beispiele

Um einen Behandler für `pointermove`-Ereignisse mithilfe von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzuzufügen:

```js
const para = document.querySelector("p");

para.addEventListener("pointermove", (event) => {
  console.log("Pointer moved");
});
```

Sie können auch die `onpointermove` Ereignisbehandler-Eigenschaft verwenden:

```js
const para = document.querySelector("p");

para.onpointermove = (event) => {
  console.log("Pointer moved");
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
  - [`pointerup`](/de/docs/Web/API/Element/pointerup_event)
  - [`pointercancel`](/de/docs/Web/API/Element/pointercancel_event)
  - [`pointerout`](/de/docs/Web/API/Element/pointerout_event)
  - [`pointerleave`](/de/docs/Web/API/Element/pointerleave_event)
  - [`pointerrawupdate`](/de/docs/Web/API/Element/pointerrawupdate_event)
  - [`mousemove`](/de/docs/Web/API/Element/mousemove_event)

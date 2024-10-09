---
title: "Element: click-Ereignis"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: f284719392aedaa4d11cd60dbaf1b3efb4769577
---

{{APIRef}}

Ein Element erhält ein **`click`** Ereignis, wenn eines der folgenden Ereignisse auftritt:

- Eine Taste eines Zeigegeräts (wie die primäre Maustaste) wird gedrückt und losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Touch-Geste wird auf dem Element ausgeführt.
- Jegliche Benutzerinteraktion, die einem Klick gleichwertig ist, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist.

> [!NOTE]
> In der Praxis lösen Browser das `click`-Ereignis nicht für benutzerdefinierte Steuerelemente (wie ein `<div>` mit `tabindex="0"`) aus, wenn diese durch die Tastatur aktiviert werden. Um den Grund für dieses Verhalten zu verstehen, sehen Sie sich dieses [Chromium-Projektproblem](https://crbug.com/40776466) an.

Wenn die Taste auf einem Element gedrückt und der Zeiger außerhalb des Elements bewegt wird, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthält.

`click` wird ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event) als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis — das bedeutet, es kann durch Berührung, Tastatur, Maus und andere Mechanismen, die von unterstützenden Technologien bereitgestellt werden, aktiviert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent), und dies ist immer noch der Typ, der in Firefox und Safari übermittelt wird.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Achse eines Transducers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Bildschirmgeräts dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Achse des Transducers (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch als Barrel-Druck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stiftstylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das an den Ereignishandler für `click` übergebene [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Male gesetzt, die auf das [`target`](/de/docs/Web/API/Event/target) geklickt wurde. Mit anderen Worten, `detail` wird 2 für einen Doppelklick sein, 3 für einen Dreifach-Klick und so weiter. Dieser Zähler wird nach einem kurzen Intervall ohne Klicks zurückgesetzt; die genauen Spezifikationen, wie lange dieses Intervall ist, können von Browser zu Browser und zwischen Plattformen variieren. Das Intervall wird wahrscheinlich auch durch Benutzereinstellungen beeinflusst; z.B. können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen auszuführen.

## Beispiele

Dieses Beispiel zeigt die Anzahl aufeinanderfolgender Klicks auf einen {{HtmlElement("button")}}.

### HTML

```html
<button>Click</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
```

### Ergebnis

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird der Zähler zurückgesetzt.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)

---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Taste eines Zeigegeräts (wie die Primärtaste einer Maus) wird gedrückt und losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Touch-Geste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabe</kbd>-Taste, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente mit einem Standardtastenereignishandler gilt und daher andere Elemente ausschließt, die durch das Setzen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs fokussierbar gemacht wurden.

Wenn die Taste auf einem Element gedrückt wird und der Zeiger aus dem Element bewegt wird, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis – das heißt, es kann durch Berührung, Tastatur, Maus und jede andere von Hilfstechnologien bereitgestellte Mechanik aktiviert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Wandlerachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätescreens dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Wandlerachse (ein Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck der Zeigereingabe (auch bekannt als Barrel-Druck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralposition der Steuerung darstellt.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. eines Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. eines Stifts) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z. B. eines Stifts) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Nutzungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt, das an den Ereignishandler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Male gesetzt, die das [`target`](/de/docs/Web/API/Event/target) angeklickt wurde. Mit anderen Worten, `detail` ist 2 bei einem Doppelklick, 3 bei einem Dreifachklick usw. Dieser Zähler wird nach einer kurzen Zeit ohne Klicks zurückgesetzt; die genauen Details, wie lange dieses Intervall ist, können von Browser zu Browser und zwischen den Plattformen variieren. Das Intervall wird wahrscheinlich auch von Benutzerpräferenzen beeinflusst; zum Beispiel können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mit adaptiven Schnittstellen mehrere Klicks auszuführen.

## Beispiele

Dieses Beispiel zeigt die Anzahl der aufeinanderfolgenden Klicks auf einen {{HtmlElement("button")}} an.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickzählung zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird die Zählung zurückgesetzt.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)

---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Zeigegerät-Schaltfläche (wie die Primärschaltfläche einer Maus) wird sowohl gedrückt als auch losgelassen, während sich der Zeiger im Inneren des Elements befindet.
- Eine Touch-Geste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Leertaste</kbd>-Taste oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente gilt, die einen Standard-Tastaturereignis-Handler haben, und daher andere Elemente ausschließt, die durch das Setzen des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs fokussierbar gemacht wurden.

Wenn die Schaltfläche auf einem Element gedrückt wird und der Zeiger aus dem Element bewegt wird, bevor die Schaltfläche losgelassen wird, wird das Ereignis auf dem spezifischsten Vorfahrelement ausgelöst, das beide Elemente enthält.

`click` wird nach sowohl dem [`mousedown`](/de/docs/Web/API/Element/mousedown_event) als auch dem [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignis in dieser Reihenfolge ausgelöst.

Das Ereignis ist ein geräteunabhängiges Ereignis — das bedeutet, es kann durch Touch, Tastatur, Maus und jeden anderen Mechanismus ausgelöst werden, der von unterstützender Technologie bereitgestellt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Informationen zur [Browser-Kompatibilität](#browser-kompatibilität) finden Sie hier.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräts.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Magnitude auf der X-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Magnitude auf der Y-Achse) in CSS-Pixeln der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch als Fassdruck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress) bekannt) im Bereich von `-1` bis `1`, wobei `0` die Neutralposition der Steuerung darstellt.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftes) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers im Uhrzeigersinn (z.B. eines Stifts) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Zeigt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt, das an den Ereignis-Handler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Male gesetzt, die das [`target`](/de/docs/Web/API/Event/target) geklickt wurde. Mit anderen Worten, `detail` wird 2 bei einem Doppelklick, 3 bei einem Dreifachklick und so weiter. Dieser Zähler wird nach einem kurzen Intervall ohne Klicks zurückgesetzt; die genaue Dauer dieses Intervalls kann je nach Browser und Plattform variieren. Das Intervall ist wahrscheinlich auch durch Benutzereinstellungen beeinflusst; beispielsweise können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mit adaptiven Schnittstellen mehrfach zu klicken.

## Beispiele

Dieses Beispiel zeigt die Anzahl der aufeinanderfolgenden Klicks auf ein {{HtmlElement("button")}}.

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

Versuchen Sie, rasche, wiederholte Klicks auf die Schaltfläche auszuführen, um die Klickzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks machen, wird der Zähler zurückgesetzt.

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

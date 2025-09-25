---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Ein Element erhält ein **`click`**-Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Schaltfläche eines Zeigegeräts (wie die Primärtaste einer Maus) wird gedrückt und losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Berührungsgeste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente mit einem Standardtastenereignis-Handler gilt und daher andere Elemente ausschließt, die durch Setzen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs fokussierbar gemacht wurden.

Wenn die Taste auf einem Element gedrückt wird und der Zeiger außerhalb des Elements bewegt wird, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthält.

`click` wird nach den Ereignissen [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) in dieser Reihenfolge ausgelöst.

Das Ereignis ist ein geräteunabhängiges Ereignis — das bedeutet, es kann durch Berührung, Tastatur, Maus und jede andere von unterstützender Technologie bereitgestellte Mechanismus aktiviert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("click", (event) => { })

onclick = (event) => { }
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätsbildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Wandlers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe entlang der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe entlang der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingabewertes im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte Tangentialdruck des Zeigereingabewertes (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftzeigers) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Winkel in der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. eines Stiftzeigers) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. eines Stiftzeigers) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das in den Ereignishandler für `click` übergebene [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Klicks auf das [`target`](/de/docs/Web/API/Event/target) gesetzt. Mit anderen Worten, `detail` wird bei einem Doppelklick 2, bei einem Dreifachklick 3 und so weiter sein. Dieser Zähler wird nach einem kurzen Zeitraum ohne Klicks zurückgesetzt; die genauen Zeiten, wie lange dieser Zeitraum dauert, können zwischen Browsern und Plattformen variieren. Wahrscheinlich wird dieses Intervall auch durch Benutzereinstellungen beeinflusst; beispielsweise könnten Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen auszuführen.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button auszuführen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks machen, wird die Anzahl zurückgesetzt.

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

---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: eb6dbd1f3034a42b7969ea870313156036698cc8
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn Folgendes eintritt:

- Eine Taste eines Zeigegeräts (wie die Primärtaste einer Maus) wird sowohl gedrückt als auch losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Berührungsgeste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente mit einem Standard-Tastaturereignis-Handler gilt und daher andere Elemente ausschließt, die durch Setzen des [`tabindex`](/de/docs/Web/HTML/Global_attributes/tabindex)-Attributs fokussierbar gemacht wurden.

Wird die Taste auf einem Element gedrückt und der Zeiger wird außerhalb des Elements bewegt, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis – das heißt, es kann durch Berührung, Tastatur, Maus und jeden anderen Mechanismus aktiviert werden, der von unterstützender Technologie bereitgestellt wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent), und dies ist immer noch der Typ, der in Firefox und Safari übergeben wird.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Wandlerachse (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätsbildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware jeweils erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte Tangentialdruck des Zeigereingangs (auch bekannt als Seitendruck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. ein Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. ein Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die im Uhrzeigersinn erfolgende Drehung des Zeigers (z. B. eines Stylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Hinweise zur Verwendung

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt, das an den Ereignishandler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl von Klicks auf das [`target`](/de/docs/Web/API/Event/target) gesetzt. Mit anderen Worten: `detail` hat den Wert 2 für einen Doppelklick, 3 für einen Dreifachklick und so weiter. Dieser Zähler wird nach einem kurzen Intervall zurückgesetzt, in dem keine weiteren Klicks stattfinden; die genaue Dauer dieses Intervalls kann je nach Browser und Plattform variieren. Das Intervall wird wahrscheinlich auch von Benutzereinstellungen beeinflusst; beispielsweise können Barrierefreiheitsoptionen dieses Intervall verlängern, um das Ausführen mehrerer Klicks mit adaptiven Schnittstellen zu erleichtern.

## Beispiele

Dieses Beispiel zeigt die Anzahl aufeinander folgender Klicks auf einen {{HtmlElement("button")}}.

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

Versuchen Sie, den Button schnell hintereinander anzuklicken, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird die Zählung zurückgesetzt.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung zu Ereignissen](/de/docs/Learn/JavaScript/Building_blocks/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)

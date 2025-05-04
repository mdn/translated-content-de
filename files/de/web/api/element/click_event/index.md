---
title: "Element: click event"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn eines der folgenden Szenarien eintritt:

- Eine Taste eines Zeigegeräts (z. B. die primäre Maustaste) wird gedrückt und losgelassen, während sich der Zeiger im Inneren des Elements befindet.
- Auf dem Element wird eine Touch-Geste ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Space</kbd>- oder <kbd>Enter</kbd>-Taste, während das Element fokussiert ist. Beachten Sie, dass dies nur für Elemente gilt, die über einen Standard-Tastaturereignishandler verfügen, und daher andere Elemente ausschließt, die durch Einstellen des [`tabindex`](/de/docs/Web/HTML/Reference/Global_attributes/tabindex)-Attributs fokussierbar gemacht wurden.

Wird die Taste auf einem Element gedrückt und der Zeiger bewegt sich außerhalb des Elements, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthält.

`click` wird ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event)- als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event)-Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis – es kann durch Berührung, Tastatur, Maus und jeden anderen Mechanismus, den unterstützende Technologien bereitstellen, aktiviert werden.

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

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Achse eines Wandlers (eines Zeigers oder Stifts) und der X-Y-Ebene eines Geräteschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Wandlerachse (eines Zeigers oder Stifts) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixel, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Fassdruck oder [Zylinderbelastung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift-Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Ebenenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift-Stylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift-Stylus) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Nutzungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekt, das in den Ereignishandler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail)-Eigenschaft auf die Anzahl der Klicks auf das [`target`](/de/docs/Web/API/Event/target) gesetzt. Mit anderen Worten, `detail` wird 2 für einen Doppelklick, 3 für einen Dreifachklick und so weiter. Dieser Zähler wird nach einem kurzen Intervall ohne Klicks zurückgesetzt; die spezifische Dauer dieses Intervalls kann je nach Browser und Plattform variieren. Das Intervall wird wahrscheinlich auch durch Benutzerpräferenzen beeinflusst; z. B. können Zugriffsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen auszuführen.

## Beispiele

Dieses Beispiel zeigt die Anzahl der aufeinanderfolgenden Klicks auf einen {{HtmlElement("button")}}.

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

Versuchen Sie, schnelle, aufeinanderfolgende Klicks auf den Button auszuführen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird die Anzahl zurückgesetzt.

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

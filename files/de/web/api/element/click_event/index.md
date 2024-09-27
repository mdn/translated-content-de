---
title: "Element: click Ereignis"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 3966162a0b22be0b3221265b9ae68136fc3d4772
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn einer der folgenden Fälle eintritt:

- Eine Zeigegerätetaste (wie die primäre Taste einer Maus) wird gedrückt und freigegeben, während sich der Zeiger innerhalb des Elements befindet.
- Eine Touch-Geste wird auf dem Element ausgeführt.
- Jegliche Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Space</kbd>-Taste oder <kbd>Enter</kbd>-Taste, während das Element fokussiert ist.

> [!NOTE]
> In der Praxis lösen Browser das `click`-Ereignis nicht für benutzerdefinierte Steuerelemente aus, wie ein `<div>` mit `tabindex="0"`. Um den Grund für dieses Verhalten zu prüfen, siehe dieses [Chromium-Problem](https://crbug.com/40776466).

Wenn die Taste auf einem Element gedrückt wird und der Zeiger außerhalb des Elements bewegt wird, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird nach den Ereignissen [`mousedown`](/de/docs/Web/API/Element/mousedown_event) und [`mouseup`](/de/docs/Web/API/Element/mouseup_event) ausgelöst, in dieser Reihenfolge.

Das Ereignis ist ein geräteunabhängiges Ereignis - das bedeutet, es kann durch Berührung, Tastatur, Maus und jede andere von unterstützender Technologie bereitgestellte Mechanik aktiviert werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

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
  - : Repräsentiert den Winkel zwischen einer Achse des Umformers (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätebildschirms.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Umformers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausdehnung auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausdehnung auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich `0` bis `1`, wobei `0` und `1` den Mindest- beziehungsweise Maximaldruck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Zylinderdruck oder [Rohrspannung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Achsenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Achsenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stiftstift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Stiftstift) um seine Hauptachse, in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung, etc.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Zeigt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent), das dem Ereignishandler für `click` übergeben wird, hat seine Eigenschaft [`detail`](/de/docs/Web/API/UIEvent/detail) auf die Anzahl der Klicks auf das [`target`](/de/docs/Web/API/Event/target) gesetzt. Mit anderen Worten, `detail` wird für einen Doppelklick auf `2`, für einen Dreifach-Klick auf `3` usw. gesetzt. Dieser Zähler wird nach einem kurzen Intervall ohne Klicks zurückgesetzt; die genaue Dauer dieses Intervalls kann je nach Browser und Plattform variieren. Das Intervall wird auch wahrscheinlich von Benutzerpräferenzen beeinflusst; zum Beispiel können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen durchzuführen.

## Beispiele

Dieses Beispiel zeigt die Anzahl aufeinanderfolgender Klicks auf einen {{HtmlElement("button")}} an.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird der Zähler zurückgesetzt.

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

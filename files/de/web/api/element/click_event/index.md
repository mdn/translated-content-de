---
title: "Element: click Ereignis"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 3966162a0b22be0b3221265b9ae68136fc3d4772
---

{{APIRef}}

Ein Element erhält ein **`click`** Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Zeigegerättaste (z.B. die primäre Taste einer Maus) wird gedrückt und losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Berührungsgeste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist.

> [!NOTE]
> In der Praxis lösen Browser das `click` Ereignis nicht für benutzerdefinierte Steuerelemente wie ein `<div>` mit `tabindex="0"` aus. Um den Grund für dieses Verhalten zu überprüfen, sehen Sie sich dieses [Chromium Problem](https://crbug.com/40776466) an.

Wenn die Taste auf einem Element gedrückt wird und der Zeiger außerhalb des Elements bewegt wird, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird ausgelöst, nachdem sowohl das [`mousedown`](/de/docs/Web/API/Element/mousedown_event) als auch das [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist geräteunabhängig – das bedeutet, dass es durch Berührung, Tastatur, Maus und jeden anderen Mechanismus, der von unterstützender Technologie bereitgestellt wird, aktiviert werden kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent), und dieser Typ wird weiterhin in Firefox und Safari übergeben.

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen einer Achse eines Wandlers (einem Zeiger oder Stylus) und der X-Y-Ebene eines Gerätsbildschirms dar.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Stellt den Winkel zwischen der Y-Z-Ebene und der Ebene dar, die sowohl die Wandlerachse (einem Zeiger oder Stylus) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Ausmaß auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Ausmaß auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normierte Druck der Zeigereingabe im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erfassen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normierte tangentiale Druck der Zeigereingabe (auch bekannt als Barrel Pressure oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der Planwinkel (in Grad im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z.B. Stift) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z.B. Stift) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis ausgelöst hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das [`PointerEvent`](/de/docs/Web/API/PointerEvent) Objekt, das in den Ereignishandler für `click` übergeben wird, hat seine [`detail`](/de/docs/Web/API/UIEvent/detail) Eigenschaft auf die Anzahl der Male gesetzt, die das [`target`](/de/docs/Web/API/Event/target) angeklickt wurde. Mit anderen Worten, `detail` wird 2 bei einem Doppelklick sein, 3 bei einem Dreifachklick usw. Dieser Zähler wird nach einem kurzen Intervall ohne weitere Klicks zurückgesetzt; wie lange dieses Intervall ist, kann von Browser zu Browser und Plattform zu Plattform variieren. Das Intervall wird wahrscheinlich auch von Nutzerpräferenzen beeinflusst; beispielsweise können Barrierefreiheitsoptionen dieses Intervall verlängern, um es einfacher zu machen, mehrere Klicks mit adaptiven Schnittstellen auszuführen.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks machen, wird die Zählung zurückgesetzt.

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

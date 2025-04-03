---
title: "Element: contextmenu event"
short-title: contextmenu
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef}}

Das **`contextmenu`**-Ereignis wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen. Dieses Ereignis wird normalerweise durch Klicken der rechten Maustaste oder durch Drücken der Kontextmenü-Taste ausgelöst.

Im letzteren Fall wird das Kontextmenü unten links im fokussierten Element angezeigt, es sei denn, das Element ist ein Baum. In diesem Fall wird das Kontextmenü unten links in der aktuellen Zeile angezeigt.

Jedes Rechtsklick-Ereignis, das nicht deaktiviert wird (durch Aufruf der Methode [`preventDefault()`](/de/docs/Web/API/Event/preventDefault) des Klickevents), führt dazu, dass ein `contextmenu`-Ereignis auf das anvisierte Element ausgelöst wird.

> [!NOTE]
> Eine Ausnahme dafür in Firefox: Wenn der Benutzer die <kbd>Shift</kbd>-Taste gedrückt hält, während er mit der rechten Maustaste klickt, wird das Kontextmenü ohne Auslösen eines `contextmenu`-Ereignisses angezeigt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Eventhandler-Eigenschaft.

```js
addEventListener("contextmenu", (event) => {});

oncontextmenu = (event) => {};
```

## Ereignistyp

Ein [`PointerEvent`](/de/docs/Web/API/PointerEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent).

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein [`MouseEvent`](/de/docs/Web/API/MouseEvent). Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von [`MouseEvent`](/de/docs/Web/API/MouseEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`PointerEvent.altitudeAngle`](/de/docs/Web/API/PointerEvent/altitudeAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Achse eines Transducers (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräts.
- [`PointerEvent.azimuthAngle`](/de/docs/Web/API/PointerEvent/azimuthAngle) {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Transducers (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- [`PointerEvent.pointerId`](/de/docs/Web/API/PointerEvent/pointerId) {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- [`PointerEvent.width`](/de/docs/Web/API/PointerEvent/width) {{ReadOnlyInline}}
  - : Die Breite (Entfernung auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`PointerEvent.height`](/de/docs/Web/API/PointerEvent/height) {{ReadOnlyInline}}
  - : Die Höhe (Entfernung auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- [`PointerEvent.pressure`](/de/docs/Web/API/PointerEvent/pressure) {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen bzw. maximalen Druck darstellen, den die Hardware erkennen kann.
- [`PointerEvent.tangentialPressure`](/de/docs/Web/API/PointerEvent/tangentialPressure) {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Laufdruck oder [Zylinderstress](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die Neutralstellung der Steuerung ist.
- [`PointerEvent.tiltX`](/de/docs/Web/API/PointerEvent/tiltX) {{ReadOnlyInline}}
  - : Der ebene Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stiftstylus) als auch die Y-Achse enthält.
- [`PointerEvent.tiltY`](/de/docs/Web/API/PointerEvent/tiltY) {{ReadOnlyInline}}
  - : Der ebene Winkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Achse des Zeigers (z. B. eines Stiftstylus) als auch die X-Achse enthält.
- [`PointerEvent.twist`](/de/docs/Web/API/PointerEvent/twist) {{ReadOnlyInline}}
  - : Die Drehung im Uhrzeigersinn des Zeigers (z. B. eines Stiftstylus) um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- [`PointerEvent.pointerType`](/de/docs/Web/API/PointerEvent/pointerType) {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis ausgelöst hat (Maus, Stift, Berührung usw.).
- [`PointerEvent.isPrimary`](/de/docs/Web/API/PointerEvent/isPrimary) {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

### Das `contextmenu`-Ereignis abbrechen

In diesem Beispiel wird die Standardaktion des `contextmenu`-Ereignisses mit `preventDefault()` abgebrochen, wenn das `contextmenu`-Ereignis beim ersten Absatz ausgelöst wird. Dadurch wird der erste Absatz beim Rechtsklicken nichts tun, während der zweite Absatz das standardmäßige Kontextmenü des Browsers anzeigt.

> [!NOTE]
> In Firefox wird das Kontextmenü angezeigt, wenn die <kbd>Shift</kbd>-Taste gedrückt gehalten wird, während mit der rechten Maustaste geklickt wird, ohne dass das `contextmenu`-Ereignis ausgelöst wird. Daher verhindert das Abbrechen des Ereignisses nicht, dass das Kontextmenü angezeigt wird.

#### HTML

```html
<p id="noContextMenu">The context menu has been disabled on this paragraph.</p>
<p>But it has not been disabled on this one.</p>
```

#### JavaScript

```js
const noContext = document.getElementById("noContextMenu");

noContext.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
```

#### Ergebnis

{{EmbedLiveSample("Canceling the contextmenu event")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Lernen: Einführung in Ereignisse](/de/docs/Learn_web_development/Core/Scripting/Events)
- [`auxclick`](/de/docs/Web/API/Element/auxclick_event)
- [`click`](/de/docs/Web/API/Element/click_event)
- [`dblclick`](/de/docs/Web/API/Element/dblclick_event)
- [`mousedown`](/de/docs/Web/API/Element/mousedown_event)
- [`mouseup`](/de/docs/Web/API/Element/mouseup_event)
- [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event)
- [`pointerup`](/de/docs/Web/API/Element/pointerup_event)

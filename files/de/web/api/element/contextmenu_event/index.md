---
title: "Element: Kontextmenü-Ereignis"
short-title: Kontextmenü
slug: Web/API/Element/contextmenu_event
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{APIRef}}

Das **`contextmenu`**-Ereignis wird ausgelöst, wenn der Benutzer versucht, ein Kontextmenü zu öffnen. Dieses Ereignis wird typischerweise durch Klicken der rechten Maustaste oder durch Drücken der Kontextmenütaste ausgelöst.

Im letzteren Fall wird das Kontextmenü unten links im fokussierten Element angezeigt, es sei denn, das Element ist ein Baum, in diesem Fall wird das Kontextmenü unten links in der aktuellen Zeile angezeigt.

Jedes Rechtsklick-Ereignis, das nicht deaktiviert wurde (indem die Methode {{domxref("Event.preventDefault", "preventDefault()")}} des Klickereignisses aufgerufen wird), führt dazu, dass ein `contextmenu`-Ereignis auf dem Ziel-Element ausgelöst wird.

> [!NOTE]
> Eine Ausnahme dazu in Firefox: Wenn der Benutzer die <kbd>Shift</kbd>-Taste gedrückt hält, während er mit der rechten Maustaste klickt, wird das Kontextmenü angezeigt, ohne dass ein `contextmenu`-Ereignis ausgelöst wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("contextmenu", (event) => {});

oncontextmenu = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein {{domxref("MouseEvent")}}, und dies ist immer noch der Typ, der in Firefox und Safari übergeben wird.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Transducer-Achse (einem Zeiger oder Stift) und der X-Y-Ebene eines Gerätebildschirms.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transducer-Achse (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse), in CSS-Pixeln, der Kontaktgeometrie des Zeigers.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Barrel-Druck oder [Zylinderstauchung](https://en.wikipedia.org/wiki/Cylinder_stress)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der Y-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. eines Stiftstiftes) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Winkel der Ebene (in Grad, im Bereich von `-90` bis `90`) zwischen der X-Z-Ebene und der Ebene, die sowohl die Zeigerachse (z. B. eines Stiftstiftes) als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z. B. eines Stiftstiftes) im Uhrzeigersinn um seine Hauptachse in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Touch usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Beispiele

### Das `contextmenu`-Ereignis abbrechen

In diesem Beispiel wird die Standardaktion des `contextmenu`-Ereignisses mit `preventDefault()` abgebrochen, wenn das `contextmenu`-Ereignis beim ersten Absatz ausgelöst wird. Dadurch hat der erste Absatz beim Rechtsklick keine Wirkung, während der zweite Absatz das Standard-Kontextmenü Ihres Browsers anzeigt.

> [!NOTE]
> In Firefox, wenn Sie die <kbd>Shift</kbd>-Taste gedrückt halten, während Sie mit der rechten Maustaste klicken, wird das Kontextmenü angezeigt, ohne dass das `contextmenu`-Ereignis ausgelöst wird. Daher verhindert das Abbrechen des Ereignisses nicht, dass das Kontextmenü angezeigt wird.

#### HTML

```html
<p id="noContextMenu">Das Kontextmenü wurde bei diesem Absatz deaktiviert.</p>
<p>Aber es wurde bei diesem nicht deaktiviert.</p>
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

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/click_event", "click")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}

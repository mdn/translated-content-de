---
title: "Element: click-Ereignis"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 3966162a0b22be0b3221265b9ae68136fc3d4772
---

{{APIRef}}

Ein Element erhält ein **`click`**-Ereignis, wenn eines der folgenden Ereignisse eintritt:

- Eine Zeigegerätetaste (wie die primäre Taste einer Maus) wird sowohl gedrückt als auch losgelassen, während sich der Zeiger innerhalb des Elements befindet.
- Eine Touch-Geste wird auf dem Element ausgeführt.
- Jede Benutzerinteraktion, die einem Klick entspricht, tritt auf, wie das Drücken der <kbd>Leertaste</kbd> oder der <kbd>Eingabetaste</kbd>, während das Element fokussiert ist.

> [!NOTE]
> In der Praxis lösen Browser das `click`-Ereignis für benutzerdefinierte Steuerelemente wie ein `<div>` mit `tabindex="0"` nicht aus. Um den Grund für dieses Verhalten zu überprüfen, siehe dieses [Chromium-Issue](https://crbug.com/40776466).

Wird die Taste auf einem Element gedrückt und der Zeiger bewegt sich außerhalb des Elements, bevor die Taste losgelassen wird, wird das Ereignis auf dem spezifischsten übergeordneten Element ausgelöst, das beide Elemente enthielt.

`click` wird ausgelöst, nachdem sowohl das {{domxref("Element/mousedown_event", "mousedown")}}- als auch das {{domxref("Element/mouseup_event", "mouseup")}}-Ereignis in dieser Reihenfolge ausgelöst wurden.

Das Ereignis ist ein geräteunabhängiges Ereignis — das bedeutet, dass es durch Berührung, Tastatur, Maus und alle anderen Mechanismen, die von unterstützenden Technologien bereitgestellt werden, aktiviert werden kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Ereignistyp

Ein {{domxref("PointerEvent")}}. Erbt von {{domxref("MouseEvent")}}.

{{InheritanceDiagram("PointerEvent")}}

> [!NOTE]
> In früheren Versionen der Spezifikation war der Ereignistyp für dieses Ereignis ein {{domxref("MouseEvent")}}, und dieser Typ wird immer noch in Firefox und Safari übergeben.

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von {{domxref("MouseEvent")}} und {{domxref("Event")}}._

- {{domxref('PointerEvent.altitudeAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen einer Transduktionsachse (einem Zeiger oder Stift) und der X-Y-Ebene eines Geräteschirms.
- {{domxref('PointerEvent.azimuthAngle')}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Repräsentiert den Winkel zwischen der Y-Z-Ebene und der Ebene, die sowohl die Transduktionsachse (einem Zeiger oder Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.pointerId')}} {{ReadOnlyInline}}
  - : Eine eindeutige Kennung für den Zeiger, der das Ereignis verursacht.
- {{domxref('PointerEvent.width')}} {{ReadOnlyInline}}
  - : Die Breite (Größe auf der X-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- {{domxref('PointerEvent.height')}} {{ReadOnlyInline}}
  - : Die Höhe (Größe auf der Y-Achse) der Kontaktgeometrie des Zeigers in CSS-Pixeln.
- {{domxref('PointerEvent.pressure')}} {{ReadOnlyInline}}
  - : Der normalisierte Druck des Zeigereingangs im Bereich von `0` bis `1`, wobei `0` und `1` jeweils den minimalen und maximalen Druck darstellen, den die Hardware erkennen kann.
- {{domxref('PointerEvent.tangentialPressure')}} {{ReadOnlyInline}}
  - : Der normalisierte tangentiale Druck des Zeigereingangs (auch bekannt als Barrel-Druck oder [Zylinderbelastung](https://de.wikipedia.org/wiki/Zylinderbelastung)) im Bereich von `-1` bis `1`, wobei `0` die neutrale Position der Steuerung ist.
- {{domxref('PointerEvent.tiltX')}} {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der Y–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die Y-Achse enthält.
- {{domxref('PointerEvent.tiltY')}} {{ReadOnlyInline}}
  - : Der Flächenwinkel (in Grad, im Bereich von `-90` bis `90`) zwischen der X–Z-Ebene und der Ebene, die sowohl die Zeigerachse (z.B. Stift) als auch die X-Achse enthält.
- {{domxref('PointerEvent.twist')}} {{ReadOnlyInline}}
  - : Die Drehung des Zeigers (z.B. Stift) um seine Hauptachse im Uhrzeigersinn, in Grad, mit einem Wert im Bereich von `0` bis `359`.
- {{domxref('PointerEvent.pointerType')}} {{ReadOnlyInline}}
  - : Gibt den Gerätetyp an, der das Ereignis verursacht hat (Maus, Stift, Berührung usw.).
- {{domxref('PointerEvent.isPrimary')}} {{ReadOnlyInline}}
  - : Gibt an, ob der Zeiger den primären Zeiger dieses Zeigertyps darstellt.

## Verwendungshinweise

Das {{domxref("PointerEvent")}}-Objekt, das in den Ereignis-Handler für `click` übergeben wird, hat seine {{domxref("UIEvent/detail", "detail")}}-Eigenschaft auf die Anzahl der Male gesetzt, die das {{domxref("Event.target", "Ziel")}} angeklickt wurde. Mit anderen Worten, `detail` wird bei einem Doppelklick 2, bei einem Dreifachklick 3 und so weiter sein. Dieser Zähler wird nach einem kurzen Zeitraum ohne Klicks zurückgesetzt; die genaue Dauer dieses Zeitraums kann je nach Browser und Plattform variieren. Der Zeitraum kann auch durch Benutzereinstellungen beeinflusst werden; zum Beispiel können die Barrierefreiheitsoptionen diesen Zeitraum verlängern, um es mit adaptiven Schnittstellen einfacher zu machen, Mehrfachklicks durchzuführen.

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

Versuchen Sie, schnelle, wiederholte Klicks auf den Button zu machen, um die Klickanzahl zu erhöhen. Wenn Sie eine Pause zwischen den Klicks einlegen, wird die Anzahl zurückgesetzt.

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Ereignisse](/de/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}

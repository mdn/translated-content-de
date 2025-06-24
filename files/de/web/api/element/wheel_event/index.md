---
title: "Element: wheel event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer eine Radtaste auf einem Zeigegerät (typischerweise eine Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Mausrollen.

Dieses Ereignis ersetzt das nicht standardisierte veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel ist das Element möglicherweise überhaupt nicht scrollbar. Auch Zoom-Aktionen mit dem Rad oder Trackpad lösen `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Verwendung der Tastatur, das Ziehen eines Scrollbalkens oder JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis ein Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu ermitteln. Stattdessen sollten Sie im `scroll`-Ereignis Änderungen der Werte von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels erkennen.

Das `wheel`-Ereignis ist stornierbar. In einigen Browsern ist nur das erste `wheel`-Ereignis in einer Sequenz stornierbar, spätere Ereignisse sind nicht stornierbar. Wenn das Ereignis storniert wird, wird kein Scrollen oder Zoomen durchgeführt. Dies kann zu Leistungsproblemen führen, da der Browser darauf warten muss, dass jedes `wheel`-Ereignis verarbeitet wird, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` beim Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) festlegen, was dazu führen kann, dass der Browser nicht stornierbare `wheel`-Ereignisse generiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge repräsentiert.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse repräsentiert.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte der Scrollmenge repräsentiert. Zulässige Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein Ganzzahl (32-Bit) zurück, die die Distanz in Pixeln repräsentiert.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die horizontale Scrollmenge repräsentiert.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die vertikale Scrollmenge repräsentiert.

## Beispiele

### Skalieren eines Elements über das Rad

Dieses Beispiel zeigt, wie ein Element mit dem Maus- (oder einem anderen Zeigegerät) Rad skaliert wird.

```html
<div>Scale me with your mouse wheel.</div>
```

```css
body {
  min-height: 100vh;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

div {
  width: 105px;
  height: 105px;
  background: #cdf;
  padding: 5px;
}
```

```js
function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### Entsprechender addEventListener

Der Ereignishandler kann auch mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

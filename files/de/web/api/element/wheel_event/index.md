---
title: "Element: wheel-Event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("UI Events")}}

Das **`wheel`**-Event wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (typischerweise eine Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Rad-Aktionen simulieren, wie Trackpads und Maus-Kugeln.

Dieses Event ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Event.

Verwechseln Sie das `wheel`-Event nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Event:

- Ein `wheel`-Event löst nicht zwingend ein `scroll`-Event aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Zoom-Aktionen mit dem Rad oder Trackpad lösen ebenfalls `wheel`-Events aus (mit [`ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) auf true gesetzt).
- Ein `scroll`-Event wird nicht unbedingt durch ein `wheel`-Event ausgelöst. Elemente können auch durch die Verwendung der Tastatur, das Ziehen einer Bildlaufleiste oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Event ein Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Event nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Events, um die Scrollrichtung zu bestimmen. Stattdessen sollten Sie Wertänderungen von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Event erkennen.

Das `wheel`-Event ist abbrechbar. In einigen Browsern ist nur das erste `wheel`-Event in einer Sequenz abbrechbar, und spätere Events sind nicht abbrechbar. Wird das Event abgebrochen, erfolgt kein Scrollen oder Zoomen. Dies kann zu Leistungsproblemen führen, da der Browser warten muss, bis jedes Wheel-Event verarbeitet wurde, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` beim Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) setzen, was dazu führen kann, dass der Browser nicht abbruchbare `wheel`-Events erzeugt.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Eventtyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte der Scrollmenge darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                      |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                      |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jedes Mausklick scrollt eine Zeile des Inhalts, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jedes Mausklick scrollt eine Seite des Inhalts.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein Integer (32-Bit) zurück, das die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein Integer zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein Integer zurück, das die vertikale Scrollmenge darstellt.

## Beispiele

### Skalieren eines Elements über das Rad

Dieses Beispiel zeigt, wie ein Element mit dem Mausrad (oder einem anderen Zeigegerät) skaliert werden kann.

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
  background: #ccddff;
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

### Äquivalent zu addEventListener

Der Ereignishandler kann auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

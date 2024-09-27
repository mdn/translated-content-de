---
title: "Element: wheel-Ereignis"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 63ffc2df0ceb061f6197b30c39080b57c7d52920
---

{{APIRef}}

Das **`wheel`**-Ereignis tritt auf, wenn der Benutzer eine Rad-Taste an einem Zeigegerät (normalerweise eine Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Trackballs.

Dieses Ereignis ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie nicht das `wheel`-Ereignis mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Zoomvorgänge mit dem Rad oder Trackpad lösen ebenfalls `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch Nutzung der Tastatur, das Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis das Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu ermitteln. Stattdessen sollten Sie die Wertänderungen von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Ereignis erkennen.

Das `wheel`-Ereignis ist abfangbar. Wenn das Ereignis abgebrochen wird, erfolgt kein Scrollen oder Zoomen. Dies kann zu Leistungsproblemen führen, da der Browser warten muss, bis jedes `wheel`-Ereignis verarbeitet wurde, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` beim Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) setzen, wodurch der Browser möglicherweise nicht-abfangbare `wheel`-Ereignisse generieren kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent), und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, das die Einheit des Scrollbetrags der `delta*`-Werte darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein (32-Bit) Ganzzahl zurück, die die Distanz in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt eine Ganzzahl zurück, die die vertikale Scrollmenge darstellt.

## Beispiele

### Skalierung eines Elements über das Rad

Dieses Beispiel zeigt, wie ein Element unter Verwendung des Mausrades (oder eines anderen Zeigegeräts) skaliert werden kann.

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

### addEventListener-Äquivalent

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

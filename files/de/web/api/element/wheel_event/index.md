---
title: "Element: wheel event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 73dcf953330fd6ed7ea414cf63ab0d75518cb88f
---

{{APIRef}}

Das **`wheel`**-Ereignis tritt auf, wenn der Benutzer eine Rad-Taste an einem Zeigegerät dreht (typischerweise eine Maus). Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Maus-Bälle.

Dieses Ereignis ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen mit dem Rad oder Trackpad lösen `wheel`-Ereignisse aus (mit [`ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) auf true gesetzt).
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Verwendung der Tastatur, durch Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis das Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu bestimmen. Stattdessen sollten Sie die Werte von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Ereignis überwachen.

Das `wheel`-Ereignis kann abgebrochen werden. In einigen Browsern ist nur das erste `wheel`-Ereignis in einer Sequenz abbruchfähig, spätere Ereignisse sind nicht abbruchfähig. Wenn das Ereignis abgebrochen wird, wird weder gescrollt noch gezoomt. Dies kann Leistungsprobleme verursachen, da der Browser warten muss, bis jedes wheel-Ereignis verarbeitet wurde, bevor der Inhalt tatsächlich gescrollt wird. Dies können Sie verhindern, indem Sie `passive: true` verwenden, wenn Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufrufen, was dazu führen kann, dass der Browser nicht-abbruchfähige `wheel`-Ereignisse generiert.

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
  - : Gibt einen `double` zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte für die Scrollmenge darstellt. Zulässige Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                             |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                             |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Linien angegeben. Jede Mausklick-Scroll bewegt eine Linie des Inhalts, wobei die Methode zur Berechnung der Linienstärke browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jede Mausklick-Scroll bewegt eine Seite des Inhalts.                                                                        |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert (32-Bit) zurück, der die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die vertikale Scrollmenge darstellt.

## Beispiele

### Skalieren eines Elements über das Rad

Dieses Beispiel zeigt, wie man ein Element mithilfe des Mausrads (oder eines anderen Zeigegeräts) skaliert.

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

Der Ereignishandler kann auch unter Verwendung der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

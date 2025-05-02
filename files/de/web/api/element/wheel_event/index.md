---
title: "Element: Wheel-Event "
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`wheel`**-Event wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (in der Regel eine Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Mausrollen.

Dieses Event ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Event.

Verwechseln Sie das `wheel`-Event nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Event:

- Ein `wheel`-Event löst nicht unbedingt ein `scroll`-Event aus. Beispielsweise kann das Element überhaupt nicht scrollbar sein. Zoom-Aktionen mit dem Rad oder Trackpad lösen ebenfalls `wheel`-Events aus.
- Ein `scroll`-Event wird nicht unbedingt durch ein `wheel`-Event ausgelöst. Elemente können auch mit der Tastatur, durch Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Event ein Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Event nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Events, um die Scrollrichtung zu bestimmen. Erfassen Sie stattdessen Wertänderungen von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Event.

Das `wheel`-Event kann abgebrochen werden. Wenn das Event abgebrochen wird, wird kein Scrollen oder Zoomen durchgeführt. Dies kann Leistungsprobleme verursachen, da der Browser auf die Verarbeitung jedes Wheel-Events warten muss, bevor der Inhalt tatsächlich gescrollt wird. Dies können Sie vermeiden, indem Sie `passive: true` verwenden, wenn Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufrufen, was dazu führen kann, dass der Browser nicht abbrechbare `wheel`-Events erzeugt.

## Syntax

Verwenden Sie den Eventnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Event-Typ

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Event-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent), und [`Event`](/de/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}

  - : Gibt einen `unsigned long` zurück, der die Einheit der `delta*`-Werte der Scrollmenge darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                 |
    | ---------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel angegeben.                                                                                                                  |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer (32-Bit) zurück, der die Entfernung in Pixel angibt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Integer zurück, der die vertikale Scrollmenge darstellt.

## Beispiele

### Skalieren eines Elements über das Rad

Dieses Beispiel zeigt, wie Sie ein Element mit dem Mausrad (oder einem anderen Zeigegerät) skalieren können.

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

### Der addEventListener Äquivalent

Der Event-Handler kann auch mit der [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)-Methode eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

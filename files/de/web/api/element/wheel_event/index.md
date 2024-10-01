---
title: "Element: wheel Event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 63ffc2df0ceb061f6197b30c39080b57c7d52920
---

{{APIRef}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer einen Radknopf an einem Zeigegerät (typischerweise einer Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Kugelmäuse.

Dieses Ereignis ersetzt das nicht standardmäßige, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel könnte das Element überhaupt nicht scrollbar sein. Auch Zoomaktionen über das Rad oder Trackpad lösen `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Verwendung der Tastatur, das Ziehen eines Scrollbalkens oder die Nutzung von JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis ein Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Daher sollten Sie sich nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses verlassen, um die Scrollrichtung zu ermitteln. Stattdessen sollten Sie Wertänderungen von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Ereignis erfassen.

Das `wheel`-Ereignis kann abgebrochen werden. Wenn das Ereignis abgebrochen wird, erfolgt kein Scrollen oder Zoomen. Dies kann zu Leistungsproblemen führen, da der Browser bei jedem `wheel`-Ereignis warten muss, bis dieses verarbeitet ist, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` setzen, wenn Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufrufen, was dazu führen kann, dass der Browser nicht abbrechbare `wheel`-Ereignisse generiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
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

  - : Gibt ein `unsigned long` zurück, das die Einheit der `delta*`-Werte der Scrollmenge darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                      |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                      |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile des Inhalts, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite des Inhalts.                                                                      |

- [`WheelEvent.wheelDelta`](/de/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert (32-Bit) zurück, der die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen Ganzzahlwert zurück, der die vertikale Scrollmenge darstellt.

## Beispiele

### Skalieren eines Elements über das Mausrad

Dieses Beispiel zeigt, wie man ein Element mit dem Mausrad (oder einem anderen Zeigegerät) skaliert.

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

Der Ereignisbehandler kann auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

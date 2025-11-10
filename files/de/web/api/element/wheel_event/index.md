---
title: "Element: wheel event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("UI Events")}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer eine Rad-Taste auf einem Zeigegerät (typischerweise eine Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Mausballen.

Dieses Ereignis ersetzt das nicht standardmäßige veraltete [`mousewheel`](/de-DE/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de-DE/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel könnte das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen, die das Rad oder das Trackpad nutzen, lösen `wheel`-Ereignisse aus (mit [`ctrlKey`](/de-DE/docs/Web/API/MouseEvent/ctrlKey) auf true gesetzt).
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Tastatur, das Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu bestimmen. Stattdessen sollten Sie Wertänderungen von [`scrollLeft`](/de-DE/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de-DE/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Ereignis erkennen.

Das `wheel`-Ereignis ist abbruchsicher. In einigen Browsern ist nur das erste `wheel`-Ereignis in einer Sequenz abbruchsicher, und spätere Ereignisse sind nicht abbruchsicher. Wenn das Ereignis abgebrochen wird, wird weder gescrollt noch gezoomt. Dies kann Leistungsprobleme verursachen, da der Browser warten muss, bis jedes Wheel-Ereignis verarbeitet wurde, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` verwenden, wenn Sie [`addEventListener()`](/de-DE/docs/Web/API/EventTarget/addEventListener) aufrufen, was dazu führen kann, dass der Browser nicht abbrechbare `wheel`-Ereignisse generiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de-DE/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de-DE/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de-DE/docs/Web/API/MouseEvent), [`UIEvent`](/de-DE/docs/Web/API/UIEvent) und [`Event`](/de-DE/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Dieses Interface erbt Eigenschaften von seinen Vorfahren, [`MouseEvent`](/de-DE/docs/Web/API/MouseEvent), [`UIEvent`](/de-DE/docs/Web/API/UIEvent), und [`Event`](/de-DE/docs/Web/API/Event)._

- [`WheelEvent.deltaX`](/de-DE/docs/Web/API/WheelEvent/deltaX) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die horizontale Scrollmenge darstellt.
- [`WheelEvent.deltaY`](/de-DE/docs/Web/API/WheelEvent/deltaY) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die vertikale Scrollmenge darstellt.
- [`WheelEvent.deltaZ`](/de-DE/docs/Web/API/WheelEvent/deltaZ) {{ReadOnlyInline}}
  - : Gibt einen `double` zurück, der die Scrollmenge für die z-Achse darstellt.
- [`WheelEvent.deltaMode`](/de-DE/docs/Web/API/WheelEvent/deltaMode) {{ReadOnlyInline}}
  - : Gibt ein `unsigned long` zurück, das die Einheit des Scrollbetrags von `delta*` angibt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                                                      |
    | ---------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixeln angegeben.                                                                                                                      |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen angegeben. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe vom Browser abhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten angegeben. Jeder Mausklick scrollt eine Seite Inhalt.                                                                           |

- [`WheelEvent.wheelDelta`](/de-DE/docs/Web/API/WheelEvent/wheelDelta) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges (32-Bit) Ergebnis zurück, das die Entfernung in Pixeln darstellt.
- [`WheelEvent.wheelDeltaX`](/de-DE/docs/Web/API/WheelEvent/wheelDeltaX) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges Ergebnis zurück, das die horizontale Scrollmenge darstellt.
- [`WheelEvent.wheelDeltaY`](/de-DE/docs/Web/API/WheelEvent/wheelDeltaY) {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt ein ganzzahliges Ergebnis zurück, das die vertikale Scrollmenge darstellt.

## Beispiele

### Ein Element über das Rad skalieren

Dieses Beispiel zeigt, wie ein Element mit dem Rad der Maus (oder einem anderen Zeigegerät) skaliert werden kann.

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
let scale = 1;
const el = document.querySelector("div");

function zoom(event) {
  event.preventDefault();

  scale += event.deltaY * -0.01;

  // Restrict scale
  scale = Math.min(Math.max(0.125, scale), 4);

  // Apply scale transform
  el.style.transform = `scale(${scale})`;
}

el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### Entsprechendes addEventListener

Der Ereignishandler kann auch mit der Methode [`addEventListener()`](/de-DE/docs/Web/API/EventTarget/addEventListener) eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de-DE/docs/Web/API/WheelEvent)

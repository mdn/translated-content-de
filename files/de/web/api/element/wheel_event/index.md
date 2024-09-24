---
title: "Element: Radereignis"
short-title: Rad
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: 63ffc2df0ceb061f6197b30c39080b57c7d52920
---

{{APIRef}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer eine Rad-Taste an einem Zeigegerät (typischerweise einer Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Radaktionen simulieren, wie Trackpads und Mauskugelvorrichtungen.

Dieses Ereignis ersetzt das nicht standardisierte und veraltete {{domxref("Element/mousewheel_event", "mousewheel")}}-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem {{domxref("Element/scroll_event", "scroll")}}-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel könnte das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen mit dem Rad oder Trackpad lösen `wheel`-Ereignisse aus.
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Nutzung der Tastatur, das Ziehen eines Scrollbalkens oder durch JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis das Scrollen auslöst, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu ermitteln. Stattdessen erkennen Sie Wertänderungen von {{domxref("Element.scrollLeft", "scrollLeft")}} und {{domxref("Element.scrollTop", "scrollTop")}} des Ziels im `scroll`-Ereignis.

Das `wheel`-Ereignis ist abbrechbar. Wenn das Ereignis abgebrochen wird, werden kein Scrollen oder Zoomen ausgeführt. Dies kann Leistungsprobleme verursachen, da der Browser darauf warten muss, dass jedes Wheel-Ereignis verarbeitet wird, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` beim Aufrufen von {{domxref("EventTarget.addEventListener", "addEventListener()")}} festlegen, was dazu führen kann, dass der Browser nicht abbrechbare `wheel`-Ereignisse erzeugt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("wheel", (event) => {});

onwheel = (event) => {};
```

## Ereignistyp

Ein {{domxref("WheelEvent")}}. Erbt von {{domxref("MouseEvent")}}, {{domxref("UIEvent")}} und {{domxref("Event")}}.

{{InheritanceDiagram("WheelEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt Eigenschaften von ihren Vorfahren, {{DOMxRef("MouseEvent")}}, {{DOMxRef("UIEvent")}}, und {{DOMxRef("Event")}}._

- {{DOMxRef("WheelEvent.deltaX")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaY")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die vertikale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.deltaZ")}} {{ReadOnlyInline}}
  - : Gibt ein `double` zurück, das die Scrollmenge für die z-Achse darstellt.
- {{DOMxRef("WheelEvent.deltaMode")}} {{ReadOnlyInline}}

  - : Gibt ein `unsigned long` zurück, welches die Einheit der Scrollmenge der `delta*`-Werte darstellt. Erlaubte Werte sind:

    | Konstante                    | Wert   | Beschreibung                                                                                                                      |
    | ---------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------- |
    | `WheelEvent.DOM_DELTA_PIXEL` | `0x00` | Die `delta*`-Werte sind in Pixel spezifiziert.                                                                                    |
    | `WheelEvent.DOM_DELTA_LINE`  | `0x01` | Die `delta*`-Werte sind in Zeilen spezifiziert. Jeder Mausklick scrollt eine Zeile Inhalt, wobei die Methode zur Berechnung der Zeilenhöhe browserabhängig ist. |
    | `WheelEvent.DOM_DELTA_PAGE`  | `0x02` | Die `delta*`-Werte sind in Seiten spezifiziert. Jeder Mausklick scrollt eine Seite des Inhalts.                                   |

- {{DOMxRef("WheelEvent.wheelDelta")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen Wert (32-Bit) zurück, der die Distanz in Pixeln darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaX")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen Wert zurück, der die horizontale Scrollmenge darstellt.
- {{DOMxRef("WheelEvent.wheelDeltaY")}} {{ReadOnlyInline}} {{deprecated_inline}}
  - : Gibt einen ganzzahligen Wert zurück, der die vertikale Scrollmenge darstellt.

## Beispiele

### Skalierung eines Elements über das Rad

Dieses Beispiel zeigt, wie ein Element mit dem Rad der Maus (oder einem anderen Zeigegerät) skaliert wird.

```html
<div>Vergrößern Sie mich mit Ihrem Mausrad.</div>
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

  // Begrenzung der Skalierung
  scale = Math.min(Math.max(0.125, scale), 4);

  // Skalierungstransform anwenden
  el.style.transform = `scale(${scale})`;
}

let scale = 1;
const el = document.querySelector("div");
el.onwheel = zoom;
```

{{EmbedLiveSample("Scaling_an_element_via_the_wheel", 700, 300)}}

### addEventListener Äquivalent

Der Ereignis-Handler kann auch mit der {{domxref("EventTarget/addEventListener", "addEventListener()")}}-Methode festgelegt werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilitätsliste

{{Compat}}

## Siehe auch

- {{domxref("WheelEvent")}}

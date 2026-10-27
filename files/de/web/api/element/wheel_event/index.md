---
title: "Element: wheel-Ereignis"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("UI Events")}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer ein Rad an einem Zeigegerät (typischerweise einer Maus) dreht. Es wird auch bei Geräten ausgelöst, die Radbewegungen simulieren, etwa Trackpads und Trackballs.

Dieses Ereignis ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Beispielsweise kann das Element möglicherweise gar nicht gescrollt werden. Auch Zoomaktionen mit dem Mausrad oder Trackpad lösen `wheel`-Ereignisse aus (wobei [`ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey) auf true gesetzt ist).
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch mit der Tastatur, durch Ziehen einer Bildlaufleiste oder mit JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis einen Bildlauf auslöst, spiegeln die `delta*`-Werte des `wheel`-Ereignisses nicht unbedingt die Bildlaufrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Bildlaufrichtung zu ermitteln. Ermitteln Sie stattdessen im `scroll`-Ereignis Änderungen der Werte von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Zielelements.

Das `wheel`-Ereignis kann abgebrochen werden. In einigen Browsern kann nur das erste `wheel`-Ereignis einer Folge abgebrochen werden; spätere Ereignisse können nicht abgebrochen werden. Wird das Ereignis abgebrochen, findet weder ein Bildlauf noch ein Zoomvorgang statt. Dies kann zu Leistungsproblemen führen, da der Browser die Verarbeitung jedes wheel-Ereignisses abwarten muss, bevor er den Inhalt tatsächlich scrollt. Sie können dies vermeiden, indem Sie beim Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) `passive: true` setzen. Dadurch generiert der Browser möglicherweise `wheel`-Ereignisse, die nicht abgebrochen werden können.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("wheel", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onwheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Beispiele

### Ein Element mit dem Mausrad skalieren

Dieses Beispiel zeigt, wie Sie ein Element mit dem Rad einer Maus (oder eines anderen Zeigegeräts) skalieren. Es verwendet die Event-Handler-Eigenschaft `onwheel` (beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onwheel` hinzugefügte Event-Listener ersetzt werden).

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

### addEventListener() verwenden

Der Event-Handler kann auch mit der Methode [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) eingerichtet werden:

```js
el.addEventListener("wheel", zoom, { passive: false });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WheelEvent`](/de/docs/Web/API/WheelEvent)

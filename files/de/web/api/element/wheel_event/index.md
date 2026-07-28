---
title: "Element: wheel event"
short-title: wheel
slug: Web/API/Element/wheel_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

Das **`wheel`**-Ereignis wird ausgelöst, wenn der Benutzer eine Rad-Taste an einem Zeigegerät (typischerweise einer Maus) dreht. Es wird auch für verwandte Geräte ausgelöst, die Rad-Aktionen simulieren, wie z.B. Trackpads und Mauskugeln.

Dieses Ereignis ersetzt das nicht standardisierte, veraltete [`mousewheel`](/de/docs/Web/API/Element/mousewheel_event)-Ereignis.

Verwechseln Sie das `wheel`-Ereignis nicht mit dem [`scroll`](/de/docs/Web/API/Element/scroll_event)-Ereignis:

- Ein `wheel`-Ereignis löst nicht unbedingt ein `scroll`-Ereignis aus. Zum Beispiel kann das Element überhaupt nicht scrollbar sein. Auch Zoom-Aktionen mit dem Rad oder Trackpad lösen `wheel`-Ereignisse aus (mit [`ctrlKey`](/de/docs/Web/API/MouseEvent/ctrlKey), das auf wahr gesetzt ist).
- Ein `scroll`-Ereignis wird nicht unbedingt durch ein `wheel`-Ereignis ausgelöst. Elemente können auch durch die Verwendung der Tastatur, Ziehen eines Scrollbalkens oder mittels JavaScript gescrollt werden.
- Selbst wenn das `wheel`-Ereignis tatsächlich ein Scrollen bewirkt, spiegeln die `delta*`-Werte im `wheel`-Ereignis nicht unbedingt die Scrollrichtung des Inhalts wider.

Verlassen Sie sich daher nicht auf die `delta*`-Eigenschaften des `wheel`-Ereignisses, um die Scrollrichtung zu bestimmen. Stattdessen sollten Sie Wertänderungen von [`scrollLeft`](/de/docs/Web/API/Element/scrollLeft) und [`scrollTop`](/de/docs/Web/API/Element/scrollTop) des Ziels im `scroll`-Ereignis erkennen.

Das `wheel`-Ereignis ist abbruchbar. In einigen Browsern ist nur das erste `wheel`-Ereignis in einer Sequenz abbruchbar, und spätere Ereignisse sind nicht abbruchbar. Wenn das Ereignis abgebrochen wird, erfolgt kein Scrollen oder Zoomen. Dies kann Leistungsprobleme verursachen, da der Browser auf die Verarbeitung jedes `wheel`-Ereignisses warten muss, bevor der Inhalt tatsächlich gescrollt wird. Sie können dies vermeiden, indem Sie `passive: true` beim Aufruf von [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) einstellen, was dazu führen kann, dass der Browser nicht abrechenbare `wheel`-Ereignisse erzeugt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandlereigenschaft.

```js-nolint
addEventListener("wheel", (event) => { })

onwheel = (event) => { }
```

## Ereignistyp

Ein [`WheelEvent`](/de/docs/Web/API/WheelEvent). Erbt von [`MouseEvent`](/de/docs/Web/API/MouseEvent), [`UIEvent`](/de/docs/Web/API/UIEvent) und [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("WheelEvent")}}

## Beispiele

### Skalierung eines Elements über das Rad

Dieses Beispiel zeigt, wie ein Element mit dem Maus-(oder einem anderen Zeigegeräte-)Rad skaliert werden kann.

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

### Äquivalent zu addEventListener

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

---
title: "Element: setPointerCapture() Methode"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("DOM")}}

Die **`setPointerCapture()`** Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle wird verwendet, um ein bestimmtes Element als _Capture-Ziel_ für zukünftige Pointer-Ereignisse festzulegen. Nachfolgende Ereignisse für den Pointer werden auf das Capture-Element gerichtet, bis das Capture freigegeben wird (über [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture) oder das [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignis ausgelöst wird).

Siehe [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events#pointer_capture) für einen Überblick und Beispiele, wie Pointer-Capture funktioniert.

## Syntax

```js-nolint
setPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `pointerId` keinem aktiven Pointer entspricht.

## Beispiele

Dieses Beispiel setzt Pointer-Capture auf ein {{HtmlElement("div")}}, wenn darauf gedrückt wird. Dadurch können Sie das Element horizontal verschieben, selbst wenn Ihr Pointer sich außerhalb seiner Grenzen bewegt.

### HTML

```html
<div id="slider">SLIDE ME</div>
```

### CSS

```css
div {
  width: 140px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffbbee;
  touch-action: none;
}
```

### JavaScript

```js
const slider = document.getElementById("slider");

function beginSliding(e) {
  slider.onpointermove = slide;
  slider.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
- [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events)

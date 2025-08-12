---
title: "Element: setPointerCapture() Methode"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

Die **`setPointerCapture()`** Methode des
[`Element`](/de/docs/Web/API/Element) Interfaces wird verwendet, um ein bestimmtes Element als _Capture-Ziel_ zukünftiger Zeigerereignisse zu designieren. Nachfolgende Ereignisse für den Zeiger werden an das Capture-Element gerichtet, bis das Capture freigegeben wird (via
[`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture) oder wenn das [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignis ausgelöst wird).

Für einen Überblick und Beispiele, wie Pointer Capture funktioniert, siehe [Pointer Events](/de/docs/Web/API/Pointer_events#pointer_capture).

## Syntax

```js-nolint
setPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent) Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `pointerId` keinem aktiven Zeiger entspricht.

## Beispiele

In diesem Beispiel wird ein Pointer Capture auf einem {{HtmlElement("div")}} gesetzt, wenn Sie darauf drücken. Dies ermöglicht es Ihnen, das Element horizontal zu verschieben, selbst wenn Ihr Zeiger außerhalb seiner Grenzen bewegt wird.

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

const slider = document.getElementById("slider");

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
- [Pointer Events](/de/docs/Web/API/Pointer_events)

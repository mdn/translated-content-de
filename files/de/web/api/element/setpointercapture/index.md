---
title: "Element: setPointerCapture()-Methode"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("DOM")}}

Die **`setPointerCapture()`**-Methode der {{domxref("Element")}}-Schnittstelle wird verwendet, um ein bestimmtes Element als _Erfassungsziel_ für zukünftige Zeigerereignisse zu bestimmen. Nachfolgende Ereignisse für den Zeiger werden auf das Erfassungselement ausgerichtet, bis die Erfassung freigegeben wird (via {{domxref("Element.releasePointerCapture()")}} oder das {{domxref("Element/pointerup_event", "pointerup")}}-Ereignis ausgelöst wird).

Sehen Sie unter [Zeiger-Ereignisse](/de/docs/Web/API/Pointer_events#pointer_capture) eine Übersicht über die Funktionsweise der Zeigererfassung und Beispiele dazu.

## Syntax

```js-nolint
setPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die {{domxref("PointerEvent.pointerId", "pointerId")}} eines {{domxref("PointerEvent")}}-Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `pointerId` keinem aktiven Zeiger entspricht.

## Beispiele

In diesem Beispiel wird die Zeigererfassung auf einem {{HtmlElement("div")}} gesetzt, wenn Sie darauf drücken. Dies ermöglicht es Ihnen, das Element horizontal zu verschieben, selbst wenn Ihr Zeiger sich außerhalb seiner Grenzen bewegt.

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
  background: #fbe;
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

- {{domxref("Element.hasPointerCapture","Element.hasPointerCapture()")}}
- {{domxref("Element.releasePointerCapture","Element.releasePointerCapture()")}}
- [Zeiger-Ereignisse](/de/docs/Web/API/Pointer_events)

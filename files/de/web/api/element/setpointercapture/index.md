---
title: "Element: Methode setPointerCapture()"
short-title: setPointerCapture()
slug: Web/API/Element/setPointerCapture
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("DOM")}}

Die **`setPointerCapture()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces wird verwendet, um ein bestimmtes Element als _Erfassungsziel_ für zukünftige Zeigerereignisse zu bestimmen. Nachfolgende Ereignisse für den Zeiger werden auf das Erfassungselement gerichtet, bis die Erfassung freigegeben wird (über [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture) oder das [`pointerup`](/de/docs/Web/API/Element/pointerup_event) Ereignis ausgelöst wird).

Siehe [Zeigerereignisse](/de/docs/Web/API/Pointer_events#pointer_capture) für einen Überblick und Beispiele, wie Zeigererfassung funktioniert.

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
  - : Wird ausgelöst, wenn `pointerId` keinem aktiven Zeiger entspricht.

## Beispiele

Dieses Beispiel setzt eine Zeigererfassung auf ein {{HtmlElement("div")}}, wenn Sie darauf drücken. Dadurch können Sie das Element horizontal verschieben, selbst wenn Ihr Zeiger sich außerhalb seiner Grenzen bewegt.

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

- [`Element.hasPointerCapture()`](/de/docs/Web/API/Element/hasPointerCapture)
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
- [Zeigerereignisse](/de/docs/Web/API/Pointer_events)

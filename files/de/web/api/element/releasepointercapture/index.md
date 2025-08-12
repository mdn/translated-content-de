---
title: "Element: releasePointerCapture() Methode"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

Die **`releasePointerCapture()`** Methode der
[`Element`](/de/docs/Web/API/Element) Schnittstelle gibt die [_Pointer-Erfassung_](/de/docs/Web/API/Pointer_events#pointer_capture) frei (stoppt sie), die zuvor für einen bestimmten ([`PointerEvent`](/de/docs/Web/API/PointerEvent)) _Pointer_ gesetzt wurde.

## Syntax

```js-nolint
releasePointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent) Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `pointerId` keinem aktiven Pointer entspricht.

## Beispiele

Dieses Beispiel setzt die Pointer-Erfassung auf einem {{HtmlElement("div")}}, wenn Sie darauf drücken. So können Sie das Element horizontal verschieben, selbst wenn Ihr Pointer seine Grenzen überschreitet.

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
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
- [Pointer Events](/de/docs/Web/API/Pointer_events)

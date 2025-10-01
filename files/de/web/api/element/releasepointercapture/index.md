---
title: "Element: releasePointerCapture() Methode"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{APIRef("DOM")}}

Die **`releasePointerCapture()`** Methode des
[`Element`](/de/docs/Web/API/Element)-Interfaces löst (stoppt) die zuvor für ein bestimmtes ([`PointerEvent`](/de/docs/Web/API/PointerEvent)) _Pointer_-Ereignis gesetzte [_Pointer-Capture_](/de/docs/Web/API/Pointer_events#pointer_capture).

## Syntax

```js-nolint
releasePointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `NotFoundError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `pointerId` mit keinem aktiven Pointer übereinstimmt.

## Beispiele

Dieses Beispiel setzt die Pointer-Capture auf ein {{HtmlElement("div")}}, wenn Sie darauf drücken. Dies ermöglicht das horizontale Verschieben des Elements, selbst wenn der Zeiger sich außerhalb seiner Grenzen bewegt.

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
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
- [Pointer-Ereignisse](/de/docs/Web/API/Pointer_events)

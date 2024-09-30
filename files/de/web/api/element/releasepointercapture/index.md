---
title: "Element: releasePointerCapture() Methode"
short-title: releasePointerCapture()
slug: Web/API/Element/releasePointerCapture
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{APIRef("DOM")}}

Die **`releasePointerCapture()`**-Methode der
[`Element`](/de/docs/Web/API/Element)-Schnittstelle gibt eine zuvor gesetzte [_Zeigererfassung_](/de/docs/Web/API/Pointer_events#pointer_capture) für einen bestimmten ([`PointerEvent`](/de/docs/Web/API/PointerEvent)) _Zeiger_ frei (stoppt sie).

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
  - : Wird ausgelöst, wenn `pointerId` mit keinem aktiven Zeiger übereinstimmt.

## Beispiele

Dieses Beispiel setzt die Zeigererfassung auf einem {{HtmlElement("div")}}, wenn man darauf drückt. Dies ermöglicht es Ihnen, das Element horizontal zu verschieben, selbst wenn sich Ihr Zeiger außerhalb seiner Grenzen bewegt.

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
- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
- [Zeigerereignisse](/de/docs/Web/API/Pointer_events)

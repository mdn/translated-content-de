---
title: "Element: hasPointerCapture() Methode"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

Die **`hasPointerCapture()`**-Methode der
[`Element`](/de/docs/Web/API/Element) Schnittstelle überprüft, ob das Element, auf dem sie aufgerufen wird,
[eine Zeigerdämpfung](/de/docs/Web/API/Pointer_events#pointer_capture) für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.

## Syntax

```js-nolint
hasPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts.

### Rückgabewert

Ein boolescher Wert — `true`, wenn das Element tatsächlich eine Zeigerdämpfung für den durch die gegebene Zeiger-ID identifizierten Zeiger hat, `false`, wenn nicht.

## Beispiele

```html
<div id="target">Touch this element with a pointer.</div>
```

```js
const el = document.getElementById("target");
el.addEventListener("pointerdown", (ev) => {
  // Element 'target' will receive/capture further events
  el.setPointerCapture(ev.pointerId);

  // …

  // Check whether element still has pointer capture
  const pointerCap = el.hasPointerCapture(ev.pointerId);
  if (pointerCap) {
    // We've still got pointer capture
  } else {
    // oops, we've lost pointer capture!
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
- [Zeigerereignisse (Pointer Events)](/de/docs/Web/API/Pointer_events)

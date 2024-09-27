---
title: "Element: hasPointerCapture()-Methode"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: f70edbb6584d2df5ad4842ecf2170b3cbddc6cf6
---

{{APIRef("DOM")}}

Die **`hasPointerCapture()`**-Methode der
[`Element`](/de/docs/Web/API/Element)-Schnittstelle überprüft, ob das Element, auf dem sie aufgerufen wird,
[pointer capture](/de/docs/Web/API/Pointer_events#pointer_capture) für den durch die gegebene Zeiger-ID identifizierten Zeiger hat.

## Syntax

```js-nolint
hasPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines
    [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts.

### Rückgabewert

Ein Boolean-Wert — `true`, wenn das Element tatsächlich über pointer capture für den durch die gegebene Zeiger-ID identifizierten Zeiger verfügt, `false`, wenn nicht.

## Beispiele

```html
<html lang="en">
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // Element 'target' will receive/capture further events
      el.setPointerCapture(ev.pointerId);

      // …

      // Check whether element still has pointer capture
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if (pointerCap) {
        // We've still got pointer capture
      } else {
        // oops, we've lost pointer capture!
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Touch this element with a pointer.</div>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.setPointerCapture()`](/de/docs/Web/API/Element/setPointerCapture)
- [`Element.releasePointerCapture()`](/de/docs/Web/API/Element/releasePointerCapture)
- {{ domxref("Pointer_events","Pointer Events", "", 1) }}

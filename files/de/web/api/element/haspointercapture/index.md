---
title: "Element: hasPointerCapture()-Methode"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: f70edbb6584d2df5ad4842ecf2170b3cbddc6cf6
---

{{APIRef("DOM")}}

Die Methode **`hasPointerCapture()`** des [`Element`](/de/docs/Web/API/Element)-Interfaces prüft, ob das Element, auf dem sie aufgerufen wird, [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture) für den Zeiger mit der angegebenen Zeiger-ID hat.

## Syntax

```js-nolint
hasPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die [`pointerId`](/de/docs/Web/API/PointerEvent/pointerId) eines [`PointerEvent`](/de/docs/Web/API/PointerEvent)-Objekts.

### Rückgabewert

Ein boolescher Wert — `true`, wenn das Element Pointer Capture für den durch die angegebene Zeiger-ID identifizierten Zeiger hat, `false` nicht.

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

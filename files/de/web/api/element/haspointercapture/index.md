---
title: "Element: hasPointerCapture() Methode"
short-title: hasPointerCapture()
slug: Web/API/Element/hasPointerCapture
l10n:
  sourceCommit: f70edbb6584d2df5ad4842ecf2170b3cbddc6cf6
---

{{APIRef("DOM")}}

Die **`hasPointerCapture()`** Methode der
{{domxref("Element")}} Schnittstelle überprüft, ob das Element, auf dem sie aufgerufen wird, den [Pointer Capture](/de/docs/Web/API/Pointer_events#pointer_capture) für den durch die gegebene Pointer-ID identifizierten Zeiger besitzt.

## Syntax

```js-nolint
hasPointerCapture(pointerId)
```

### Parameter

- `pointerId`
  - : Die {{domxref("PointerEvent.pointerId", "pointerId")}} eines
    {{domxref("PointerEvent")}} Objekts.

### Rückgabewert

Ein boolescher Wert — `true`, wenn das Element den Pointer Capture für den durch die gegebene Pointer-ID identifizierten Zeiger hat, `false`, wenn es nicht der Fall ist.

## Beispiele

```html
<html lang="en">
  <script>
    function downHandler(ev) {
      const el = document.getElementById("target");
      // Element 'target' wird weitere Ereignisse empfangen/erfassen
      el.setPointerCapture(ev.pointerId);

      // …

      // Überprüfen, ob das Element noch den Pointer Capture hat
      let pointerCap = el.hasPointerCapture(ev.pointerId);
      if (pointerCap) {
        // Wir haben immer noch den Pointer Capture
      } else {
        // oje, wir haben den Pointer Capture verloren!
      }
    }

    function init() {
      const el = document.getElementById("target");
      el.onpointerdown = downHandler;
    }
  </script>
  <body onload="init();">
    <div id="target">Berühren Sie dieses Element mit einem Pointer.</div>
  </body>
</html>
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ domxref("Element.setPointerCapture()")}}
- {{ domxref("Element.releasePointerCapture()")}}
- {{ domxref("Pointer_events","Pointer Events", "", 1) }}

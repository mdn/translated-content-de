---
title: "IntersectionObserver: unobserve() Methode"
short-title: unobserve()
slug: Web/API/IntersectionObserver/unobserve
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Intersection Observer API")}}

Die Methode **`unobserve()`** des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) weist den `IntersectionObserver` an, das Beobachten des angegebenen Zielelements zu beenden.

## Syntax

```js-nolint
unobserve(target)
```

### Parameter

- `target`
  - : Das [`Element`](/de/docs/Web/API/Element), dessen Beobachtung beendet werden soll. Wenn das angegebene Element nicht beobachtet wird, tut diese Methode nichts und es wird keine Ausnahme ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie ein Observer erstellt wird, ein Element beobachtet und anschließend nicht mehr beobachtet wird.

```js
const observer = new IntersectionObserver(callback);
observer.observe(document.getElementById("elementToObserve"));

// …

observer.unobserve(document.getElementById("elementToObserve"));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Intersection Observer API](/de/docs/Web/API/Intersection_Observer_API)
- [`IntersectionObserver.observe()`](/de/docs/Web/API/IntersectionObserver/observe)

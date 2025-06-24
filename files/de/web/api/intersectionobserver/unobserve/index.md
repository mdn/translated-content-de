---
title: "IntersectionObserver: unobserve() Methode"
short-title: unobserve()
slug: Web/API/IntersectionObserver/unobserve
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`unobserve()`** Methode der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Schnittstelle weist den `IntersectionObserver` an, die Beobachtung des angegebenen Zielelements zu stoppen.

## Syntax

```js-nolint
unobserve(target)
```

### Parameter

- `target`
  - : Das [`Element`](/de/docs/Web/API/Element), dessen Beobachtung beendet werden soll.
    Wenn das angegebene Element nicht beobachtet wird, unternimmt diese Methode nichts und es wird keine Ausnahme ausgelöst.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel zeigt, wie ein Observer erstellt, ein Element beobachtet und dann nicht mehr beobachtet wird.

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

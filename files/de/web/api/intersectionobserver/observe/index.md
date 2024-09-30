---
title: "IntersectionObserver: observe() Methode"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Intersection Observer API")}}

Die Methode [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
**`observe()`** fügt ein Element zur Menge der durch den `IntersectionObserver`
überwachten Ziel-Elemente hinzu. Ein Observer hat eine Menge von Schwellenwerten
und eine Root, kann aber mehrere Ziel-Elemente auf Sichtbarkeitsänderungen beobachten,
die mit diesen übereinstimmen.

Um die Beobachtung des Elements zu stoppen, rufen Sie
[`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) auf.

Wenn die Sichtbarkeit des angegebenen Elements eine der Sichtbarkeits-Schwellenwerte
des Observers überschreitet (wie in [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds)
aufgeführt), wird der Callback des Observers mit einem Array von
[`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten ausgeführt, die die
stattgefundenen Schnittänderungen darstellen. Beachten Sie, dass dieses Design es
ermöglicht, Schnittänderungen mehrerer Elemente durch einen einzigen Aufruf des
Callbacks zu verarbeiten.

> [!NOTE]
> Der Beobachter [Callback](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) wird immer im ersten Render-Zyklus ausgelöst, nachdem `observe()` aufgerufen wird, auch wenn sich das beobachtete Element noch nicht im Verhältnis zum Viewport bewegt hat.
> Dies bedeutet, dass beispielsweise ein Element, das außerhalb des Viewports ist, wenn `observe()` darauf aufgerufen wird, dazu führt, dass der Callback sofort mit mindestens einem [Eintrag](/de/docs/Web/API/IntersectionObserverEntry) aufgerufen wird, bei dem [`intersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) auf `false` gesetzt ist.
> Ein Element innerhalb des Viewports führt dazu, dass der Callback sofort mit mindestens einem Eintrag aufgerufen wird, bei dem `intersecting` auf `true` gesetzt ist.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameter

- `targetElement`
  - : Ein [`Element`](/de/docs/Web/API/Element), dessen Sichtbarkeit innerhalb der Root überwacht werden soll. Dieses Element muss ein Nachfahre des Root-Elements sein (oder im aktuellen Dokument enthalten sein, wenn die Root der Viewport des Dokuments ist).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// Register IntersectionObserver
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add("active");
    } else {
      // Remove 'active' class otherwise
      entry.target.classList.remove("active");
    }
  });
});

// Declares what to observe, and observes its properties.
const boxElList = document.querySelectorAll(".box");
boxElList.forEach((el) => {
  io.observe(el);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve)

---
title: "IntersectionObserver: observe() Methode"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Intersection Observer API")}}

Die Methode [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) **`observe()`** fügt ein Element zu der Menge von Zielelementen hinzu, die von dem `IntersectionObserver` überwacht werden. Ein Beobachter hat einen Satz von Schwellenwerten und eine Wurzel, kann jedoch mehrere Zielelemente im Hinblick auf Sichtbarkeitsänderungen überwachen, die diesen entsprechen.

Um die Beobachtung des Elements zu beenden, rufen Sie [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) auf.

Wenn die Sichtbarkeit des angegebenen Elements eine der Sichtbarkeitsschwellwerte des Beobachters überschreitet (wie in [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) aufgeführt), wird der Rückruf des Beobachters mit einem Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten ausgeführt, die die aufgetretenen Schnittänderungen darstellen. Beachten Sie, dass dieses Design es ermöglicht, die Schnittänderungen mehrerer Elemente durch einen einzigen Aufruf des Rückrufs zu verarbeiten.

> [!NOTE]
> Der Beobachter [Rückruf](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) wird immer im ersten Renderzyklus nach dem Aufruf von `observe()` ausgelöst, selbst wenn sich das beobachtete Element noch nicht im Verhältnis zum Ansichtsfenster bewegt hat.
> Dies bedeutet zum Beispiel, dass ein Element, das sich außerhalb des Ansichtsfensters befindet, wenn `observe()` darauf angewendet wird, dazu führt, dass der Rückruf sofort mit mindestens einem [Eintrag](/de/docs/Web/API/IntersectionObserverEntry) aufgerufen wird, bei dem [`intersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) auf `false` gesetzt ist.
> Ein Element innerhalb des Ansichtsfensters führt dazu, dass der Rückruf sofort mit mindestens einem Eintrag aufgerufen wird, bei dem `intersecting` auf `true` gesetzt ist.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameter

- `targetElement`
  - : Ein [`element`](/de/docs/Web/API/Element), dessen Sichtbarkeit innerhalb der Wurzel überwacht werden soll. Dieses Element muss ein Nachfolger des Wurzelelements (oder im aktuellen Dokument enthalten sein, falls die Wurzel das Ansichtsfenster des Dokuments ist) sein.

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

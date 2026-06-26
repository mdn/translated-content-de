---
title: "IntersectionObserver: observe()-Methode"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: 927cb5fccfc817e0c1e4063aec476e57f978265d
---

{{APIRef("Intersection Observer API")}}

Die **`observe()`**-Methode der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Schnittstelle fügt ein Element der Menge von Ziel-Elementen hinzu, die vom `IntersectionObserver` beobachtet werden. Ein Observer hat eine Menge von Schwellenwerten und eine Wurzel, kann jedoch mehrere Ziel-Elemente auf Sichtbarkeitsänderungen überwachen, die diesen entsprechen.

Um die Beobachtung des Elements zu stoppen, rufen Sie [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) auf.

Wenn die Sichtbarkeit des angegebenen Elements eine der Sichtbarkeits-Schwellen des Observers überschreitet (wie in [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) aufgelistet), wird der Callback des Observers mit einem Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry)-Objekten ausgeführt, die die aufgetretenen Schnittänderungen darstellen. Beachten Sie, dass dieses Design es ermöglicht, Schnittänderungen mehrerer Elemente mit einem einzigen Aufruf des Callbacks zu verarbeiten.

> [!NOTE]
> Der Observer-[Callback](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) wird immer im ersten Rendering-Zyklus nach dem Aufruf von `observe()` ausgelöst, auch wenn sich das beobachtete Element noch nicht gegenüber dem Ansichtsfenster bewegt hat. Das bedeutet, dass beispielsweise ein Element, das sich außerhalb des Ansichtsfensters befindet, wenn `observe()` darauf aufgerufen wird, dazu führt, dass der Callback sofort mit mindestens einem [Eintrag](/de/docs/Web/API/IntersectionObserverEntry) aufgerufen wird, bei dem [`intersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) auf `false` gesetzt ist. Ein Element innerhalb des Ansichtsfensters führt dazu, dass der Callback sofort mit mindestens einem Eintrag aufgerufen wird, bei dem `intersecting` auf `true` gesetzt ist.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameter

- `targetElement`
  - : Ein [`element`](/de/docs/Web/API/Element), dessen Sichtbarkeit innerhalb der Wurzel überwacht werden soll. Dieses Element muss ein Nachkomme des Wurzelelements sein (oder im aktuellen Dokument enthalten sein, wenn die Wurzel das Ansichtsfenster des Dokuments ist). Wenn dieses Element bereits beobachtet wird, macht diese Methode nichts.

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

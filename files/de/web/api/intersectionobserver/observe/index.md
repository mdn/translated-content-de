---
title: "IntersectionObserver: observe() Methode"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: fe47429d64ffaacb24f5130523442aeaabf26ac6
---

{{APIRef("Intersection Observer API")}}

Die **`observe()`** Methode des [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Interfaces fügt ein Element zur Menge der vom `IntersectionObserver` überwachten Zielelemente hinzu.
Ein Observer hat einen Schwellenwertsatz und eine Wurzel, kann aber mehrere Zielelemente in Bezug auf Sichtbarkeitsänderungen überwachen.

Um die Beobachtung des Elements zu stoppen, rufen Sie [`IntersectionObserver.unobserve()`](/de/docs/Web/API/IntersectionObserver/unobserve) auf.

Wenn die Sichtbarkeit des angegebenen Elements eine der Sichtbarkeitsschwellen des Observers (wie in [`IntersectionObserver.thresholds`](/de/docs/Web/API/IntersectionObserver/thresholds) aufgelistet) überschreitet, wird der Callback des Observers mit einem Array von [`IntersectionObserverEntry`](/de/docs/Web/API/IntersectionObserverEntry) Objekten ausgeführt, die die aufgetretenen Schnittänderungen darstellen.
Es ist zu beachten, dass dieses Design es ermöglicht, die Schnittänderungen mehrerer Elemente durch einen einzigen Aufruf des Callbacks zu verarbeiten.

> [!NOTE]
> Der [Callback](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) des Observers wird immer im ersten Render-Zyklus nach dem Aufruf von `observe()` ausgelöst, selbst wenn sich das beobachtete Element in Bezug auf das Ansichtsfenster noch nicht bewegt hat.
> Das bedeutet, dass zum Beispiel ein Element, das sich außerhalb des Ansichtsfensters befindet, wenn `observe()` darauf angewendet wird, sofort den Callback mit mindestens einem [Eintrag](/de/docs/Web/API/IntersectionObserverEntry) aufruft, bei dem [`intersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) auf `false` gesetzt ist.
> Ein Element innerhalb des Ansichtsfensters führt dazu, dass der Callback sofort mit mindestens einem Eintrag aufgerufen wird, bei dem `intersecting` auf `true` gesetzt ist.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameter

- `targetElement`
  - : Ein [`element`](/de/docs/Web/API/Element), dessen Sichtbarkeit innerhalb der Wurzel überwacht werden soll.
    Dieses Element muss ein Nachkomme des Wurzelelements sein (oder innerhalb des aktuellen Dokuments enthalten sein, wenn die Wurzel das Ansichtsfenster des Dokuments ist).

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

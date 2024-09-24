---
title: "IntersectionObserver: observe() Methode"
short-title: observe()
slug: Web/API/IntersectionObserver/observe
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{APIRef("Intersection Observer API")}}

Die Methode **`observe()`** des {{domxref("IntersectionObserver")}} fügt ein Element zur Menge der Zielobjekte hinzu, die vom `IntersectionObserver` beobachtet werden. Ein Observer hat eine Menge von Schwellwerten und eine Wurzel, kann aber mehrere Zielobjekte beobachten, um Sichtbarkeitsänderungen in Übereinstimmung mit diesen zu überwachen.

Um die Beobachtung des Elements zu beenden, rufen Sie {{domxref("IntersectionObserver.unobserve()")}} auf.

Wenn die Sichtbarkeit des angegebenen Elements einen der Sichtbarkeitsschwellwerte des Observers überschreitet (wie in {{domxref("IntersectionObserver.thresholds")}} aufgeführt), wird der Callback des Observers mit einem Array von {{domxref("IntersectionObserverEntry")}}-Objekten ausgeführt, die die stattgefundenen Schnittpunktsänderungen darstellen. Beachten Sie, dass dieses Design erlaubt, die Schnittpunktsänderungen mehrerer Elemente durch einen einzigen Aufruf des Callbacks zu verarbeiten.

> [!NOTE]
> Der Observer [Callback](/de/docs/Web/API/IntersectionObserver/IntersectionObserver#callback) wird immer im ersten Render-Zyklus nach dem Aufruf von `observe()` ausgeführt, auch wenn sich das beobachtete Element relativ zum Viewport noch nicht bewegt hat. Das bedeutet, dass ein Element, das sich außerhalb des Viewports befindet, wenn `observe()` aufgerufen wird, dazu führt, dass der Callback sofort mit mindestens einem [Entry](/de/docs/Web/API/IntersectionObserverEntry) mit [`intersecting`](/de/docs/Web/API/IntersectionObserverEntry/isIntersecting) auf `false` gesetzt, aufgerufen wird. Ein Element innerhalb des Viewports führt dazu, dass der Callback sofort mit mindestens einem Entry mit `intersecting` auf `true` gesetzt, aufgerufen wird.

## Syntax

```js-nolint
observe(targetElement)
```

### Parameter

- `targetElement`
  - : Ein {{domxref("element")}}, dessen Sichtbarkeit innerhalb der Wurzel überwacht werden soll. Dieses Element muss ein Nachkomme des Wurzelelements sein (oder innerhalb des aktuellen Dokuments enthalten sein, wenn die Wurzel der Viewport des Dokuments ist).

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
// IntersectionObserver registrieren
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // 'active'-Klasse hinzufügen, wenn das Beobachtungsziel im Viewport ist
      entry.target.classList.add("active");
    } else {
      // Andernfalls 'active'-Klasse entfernen
      entry.target.classList.remove("active");
    }
  });
});

// Deklariert, was beobachtet werden soll, und beobachtet dessen Eigenschaften.
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

- {{domxref("IntersectionObserver.unobserve()")}}

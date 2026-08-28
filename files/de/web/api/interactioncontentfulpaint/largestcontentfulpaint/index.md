---
title: "InteractionContentfulPaint: largestContentfulPaint-Eigenschaft"
short-title: largestContentfulPaint
slug: Web/API/InteractionContentfulPaint/largestContentfulPaint
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`largestContentfulPaint`** der Schnittstelle [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) gibt die aktuelle größte [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) an, die für diese Soft-Navigation relevant ist.

Dies kann zwischen zwei `InteractionContentfulPaint`-Einträgen für die gleiche Interaktion gleich bleiben, wenn ein neuer Inhaltspaint kleiner ist als der aktuell größte Inhaltspaint für diese Interaktion. Wenn Sie diese API verwenden, um das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für Soft-Navigationsmessungen durchzuführen, könnten Sie nur am größten Paint interessiert sein.

Beachten Sie, dass in aktuellen Implementierungen `InteractionContentfulPaint` auf zunehmende Paint-Größen beschränkt ist, sodass es verwendet werden kann, um das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft-Navigations")}} zu messen; der Wert von `largestContentfulPaint` sollte sich jedes Mal ändern. Die API wurde jedoch so entworfen, dass alle Paints, die für eine Interaktion relevant sind, ausgegeben werden können, sodass dies sich ändern kann.

## Wert

Ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt, das den größten Contentful Paint (LCP) für diesen Interaction Contentful Paint darstellt.

## Beispiele

### Protokollieren des größten Contentful Paint von `InteractionContentfulPaint`

In diesem Beispiel liefert der Aufruf von `entry.largestContentfulPaint` ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt zurück.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Interaction Contentful Paint:",
      entry.startTime,
      entry.largestContentfulPaint,
    );
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)

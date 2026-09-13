---
title: "InteractionContentfulPaint: largestContentfulPaint-Eigenschaft"
short-title: largestContentfulPaint
slug: Web/API/InteractionContentfulPaint/largestContentfulPaint
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`largestContentfulPaint`**-Eigenschaft der [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Schnittstelle gibt die aktuelle größte [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) zurück, die für diese Soft-Navigation relevant ist.

Diese kann zwischen zwei `InteractionContentfulPaint`-Einträgen für die gleiche Interaktion gleich bleiben, wenn ein neuer contentreicher Paint kleiner als der aktuelle größte contentreiche Paint für diese Interaktion ist. Wenn Sie diese API verwenden, um die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für Soft-Navigationsvorgänge zu messen, ist möglicherweise nur der größte Paint für Sie von Interesse.

Beachten Sie, dass in aktuellen Implementierungen `InteractionContentfulPaint` auf steigende Paint-Größen beschränkt ist, sodass sie zur Messung der {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} verwendet werden kann; der `largestContentfulPaint`-Wert sollte sich jedes Mal ändern. Die API wurde jedoch so konzipiert, dass alle Paints, die für eine Interaktion relevant sind, emittiert werden können, daher könnte sich dies ändern.

## Wert

Ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt, das den größten contentreichen Paint (LCP) für diesen Interaction Contentful Paint darstellt.

## Beispiele

### Protokollierung der größten contentreichen Paint von `InteractionContentfulPaint`

In diesem Beispiel gibt der Aufruf von `entry.largestContentfulPaint` ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt zurück.

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

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; dies ruft automatisch `toJSON()` auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)

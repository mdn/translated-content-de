---
title: "InteractionContentfulPaint: largestContentfulPaint-Eigenschaft"
short-title: largestContentfulPaint
slug: Web/API/InteractionContentfulPaint/largestContentfulPaint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`largestContentfulPaint`** des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt die aktuell größte [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) zurück, die für diese weiche Navigation relevant ist.

Diese kann zwischen zwei `InteractionContentfulPaint`-Einträgen für dieselbe Interaktion gleich bleiben, wenn ein neuer Inhaltspaint kleiner ist als der aktuelle größte Inhaltspaint für diese Interaktion. Wenn Sie diese API verwenden, um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für weiche Navigationen zu messen, interessiert Sie möglicherweise nur der größte Paint.

Beachten Sie, dass in aktuellen Implementierungen `InteractionContentfulPaint` auf zunehmende Paint-Größen beschränkt ist, sodass es verwendet werden kann, um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} zu messen; der Wert von `largestContentfulPaint` sollte sich jedes Mal ändern. Die API wurde jedoch so entworfen, dass es möglich ist, alle Paints, die für eine Interaktion relevant sind, auszugeben, sodass sich dies ändern könnte.

## Wert

Ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt, das den größten contentful paint (LCP) für diesen Interaction Contentful Paint repräsentiert.

## Beispiele

### Loggen des größten contentful paint von `InteractionContentfulPaint`

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

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)

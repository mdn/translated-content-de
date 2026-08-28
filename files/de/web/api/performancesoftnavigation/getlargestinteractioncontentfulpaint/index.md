---
title: "PerformanceSoftNavigation: Methode getLargestInteractionContentfulPaint()"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Die **`getLargestInteractionContentfulPaint()`**-Methode des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt den aktuellen größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) zurück, der für diese Soft-Navigation relevant ist.

Einige {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} könnten zunächst rendern und anschließend die URL aktualisieren. Dennoch möchten Entwickler diese Renderings berücksichtigen, wenn sie das {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_navigation", "Soft-Navigations")}} messen. Da die Interaktion mit jedem Rendering auch zu einer URL-Aktualisierung und somit zu einer Soft-Navigation in der Zukunft führen könnte, könnte es schwierig sein, dies zu messen, ohne potenziell eine temporäre Referenz zu jedem LCP einer Interaktion zu speichern, falls dies erforderlich ist.

Die Methode `getLargestInteractionContentfulPaint()` erspart Entwicklern dies, indem sie eine Möglichkeit bietet, das neueste, größte `InteractionContentfulPaint` für die Soft-Navigation abzurufen.

Sie ist als Methode und nicht als statische Eigenschaft definiert, da sie den neuesten, größten Eintrag zurückgibt und daher im Laufe der Zeit unterschiedliche Ergebnisse liefern kann, wenn nach der Soft-Navigation steigende `InteractionContentfulPaint`-Einträge aufgezeichnet werden.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameter

Keine.

### Rückgabewert

Ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt, das das größte `InteractionContentfulPaint` für diese Soft-Navigation darstellt.

## Beispiele

### Verwendung der Methode `getLargestInteractionContentfulPaint`

In diesem Beispiel gibt der Aufruf von `entry.getLargestInteractionContentfulPaint()` eine JSON-Darstellung des `LargestContentfulPaint`-Objekts zurück.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log(
      "Soft Nav:",
      entry.startTime,
      entry.getLargestInteractionContentfulPaint(),
    );
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

Um eine JSON-Zeichenkette zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)

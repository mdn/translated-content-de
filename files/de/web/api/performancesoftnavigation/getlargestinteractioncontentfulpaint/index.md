---
title: "PerformanceSoftNavigation: getLargestInteractionContentfulPaint() Methode"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`getLargestInteractionContentfulPaint()`** des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) Interfaces gibt das derzeit größte [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) zurück, das für diese Soft-Navigation relevant ist.

Einige {{Glossary("SPA", "Single Page Applications (SPAs)")}} könnten zuerst rendern und danach die URL aktualisieren. Dennoch möchten Entwickler, dass diese Renderings in die Messung des {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_navigation", "Soft-Navigations")}} einbezogen werden. Da die Interaktion mit jedem Rendering auch zu einer URL-Aktualisierung und somit zu einer Soft-Navigation zu einem späteren Zeitpunkt führen könnte, könnte es schwierig sein, dies zu messen, ohne möglicherweise eine temporäre Referenz zu jedem Interaktions-LCP zu speichern, falls sie benötigt wird.

Die Methode `getLargestInteractionContentfulPaint()` erspart es den Entwicklern, dies zu tun, indem sie eine Möglichkeit bietet, das neueste und größte `InteractionContentfulPaint` für die Soft-Navigation abzurufen.

Sie ist als Methode und nicht als statische Eigenschaft definiert, da sie den neuesten und größten Eintrag zurückgibt und daher im Laufe der Zeit unterschiedliche Ergebnisse liefern kann, wenn nach der Soft-Navigation größere `InteractionContentfulPaint`-Einträge aufgezeichnet werden.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameter

Keine.

### Rückgabewert

Ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) Objekt, das das größte `InteractionContentfulPaint` für diese Soft-Navigation darstellt.

## Beispiele

### Verwendung der Methode `getLargestInteractionContentfulPaint`

In diesem Beispiel liefert der Aufruf von `entry.getLargestInteractionContentfulPaint()` eine JSON-Darstellung des `LargestContentfulPaint`-Objekts.

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

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird automatisch `toJSON()` aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)

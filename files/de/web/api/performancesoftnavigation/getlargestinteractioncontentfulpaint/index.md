---
title: "PerformanceSoftNavigation: Methode getLargestInteractionContentfulPaint()"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`getLargestInteractionContentfulPaint()`** der Schnittstelle [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation) gibt den aktuell größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Eintrag zurück, der für diese Soft Navigation relevant ist.

Einige {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} zeichnen möglicherweise zuerst Inhalte und aktualisieren erst danach die URL. Dennoch möchten Entwickler diese Zeichenvorgänge berücksichtigen, wenn sie den {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_navigation", "Soft Navigations")}} messen. Da eine Interaktion mit gezeichneten Inhalten auch erst zu einem beliebigen späteren Zeitpunkt eine URL-Aktualisierung und damit eine Soft Navigation auslösen kann, wäre dies schwer zu messen, ohne vorsorglich eine temporäre Referenz auf den LCP jeder Interaktion zu speichern.

Die Methode `getLargestInteractionContentfulPaint()` erspart Entwicklern dies, indem sie den neuesten und größten `InteractionContentfulPaint`-Eintrag für die Soft Navigation bereitstellt.

Sie ist als Methode und nicht als statische Eigenschaft definiert, weil sie den neuesten und größten Eintrag zurückgibt. Daher kann sie im Laufe der Zeit unterschiedliche Ergebnisse liefern, wenn nach der Soft Navigation größere `InteractionContentfulPaint`-Einträge erfasst werden.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameter

Keine.

### Rückgabewert

Ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt, das den größten `InteractionContentfulPaint`-Eintrag für diese Soft Navigation darstellt.

## Beispiele

### Die Methode `getLargestInteractionContentfulPaint` verwenden

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

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; dabei wird `toJSON()` automatisch aufgerufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)

---
title: "PerformanceSoftNavigation: Methode getLargestInteractionContentfulPaint()"
short-title: getLargestInteractionContentfulPaint()
slug: Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Die **`getLargestInteractionContentfulPaint()`**-Methode des [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Interfaces gibt das aktuelle größte [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) zurück, das für diese weiche Navigation relevant ist.

Einige {{Glossary("SPA", "Single Page Applications (SPAs)")}} könnten zuerst malen und die URL danach aktualisieren. Trotzdem möchten Entwickler diese Malvorgänge beim Messen des {{Glossary("Largest_contentful_paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_navigation", "weiche Navigationen")}} einbeziehen. Da Interaktionen mit beliebigen Malvorgängen auch zu einer URL-Aktualisierung und damit zu einer weichen Navigation zu einem beliebigen Zeitpunkt in der Zukunft führen könnten, kann es schwierig sein, dies zu messen, ohne möglicherweise eine temporäre Referenz für jedes LCP der Interaktionen zu speichern, falls es benötigt wird.

Die Methode `getLargestInteractionContentfulPaint()` erspart es den Entwicklern, dies tun zu müssen, indem sie eine Möglichkeit bietet, das neueste, größte `InteractionContentfulPaint` für die weiche Navigation zu erhalten.

Sie ist als Methode und nicht als statische Eigenschaft definiert, da sie den neuesten, größten Eintrag zurückgibt und daher im Laufe der Zeit unterschiedliche Ergebnisse liefern kann, wenn nach der weichen Navigation zunehmende `InteractionContentfulPaint`-Einträge erfasst werden.

## Syntax

```js-nolint
getLargestInteractionContentfulPaint()
```

### Parameter

Keine.

### Rückgabewert

Ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt, das das größte `InteractionContentfulPaint` für diese weiche Navigation darstellt.

## Beispiele

### Verwendung der `getLargestInteractionContentfulPaint`-Methode

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

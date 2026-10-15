---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: 1c5c84aed1c144e69427aa81d65b95180f58fbee
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `InteractionContentfulPaint`-Interface stellt Zeitinformationen zu {{Glossary("Contentful_paint", "Contentful Paints")}} bereit, die einer Interaktion zugeordnet werden können.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Paint geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details zum größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) der Interaktion zurück. Der Wert kann bei zwei `InteractionContentfulPaint`-Einträgen für dieselbe Interaktion gleich bleiben, wenn ein neuer Contentful Paint kleiner ist als der bisher größte Contentful Paint dieser Interaktion.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erste Rendering-Phase endete und die Paint-Phase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die ersten gezeichneten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Es erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und präzisiert beziehungsweise beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer eine leere Zeichenfolge zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft Navigation geführt hat.

## Instanzmethoden

- [`InteractionContentfulPaint.toJSON()`](/de/docs/Web/API/InteractionContentfulPaint/toJSON) {{experimental_inline}}
  - : Gibt ein als JSON serialisierbares einfaches Objekt zurück, das das `InteractionContentfulPaint`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

`InteractionContentfulPaint` stellt einen Strom von Paint-Aktualisierungen bereit, die einer Interaktion zugeordnet werden können.

Derzeit werden dabei nur zunehmende Paint-Größen erfasst. So lässt sich der {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} messen. Die API ist jedoch so konzipiert, dass sie alle für eine Interaktion relevanten Paints ausgeben kann.

`InteractionContentfulPaint` wird anstelle der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API benötigt, da diese nur für jeden vollständigen Seitenladevorgang Einträge ausgibt und bei einer Interaktion abgeschlossen wird. Eine solche Interaktion ist der notwendige Ausgangspunkt für eine Soft Navigation.

### Verwendung von `navigationId` und `interactionId`

Bei {{Glossary("Soft_Navigation", "Soft Navigations")}} können Paints, die vor der Aktualisierung der URL stattfinden, für den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} der laufenden Soft Navigation berücksichtigt werden. Bei der Berechnung dieser Metrik eignen sich [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) besser, um unabhängig von der `navigationId` alle relevanten Paints zu berücksichtigen.

### Zusammenhang mit Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) liefert Details zu UIEvents – etwa zur Dauer der Einplanung und Verarbeitung sowie zur Gesamtdauer bis zum nächsten Paint. Sie erfasst jedoch weder die Auswirkungen dieser Ereignisse direkt noch spätere Paints, die durch diese Auswirkungen entstehen könnten. Sie soll die Reaktionszeit messen, während der Benutzer keine Rückmeldung erhalten. Diese Zeit sollte möglichst kurz sein und bildet die Grundlage für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}.

Trotz der Namensähnlichkeit mit Interaction to Next Paint erfüllt `InteractionContentfulPaint` einen anderen Zweck. `InteractionContentfulPaint` schließt Paints ohne inhaltliche Änderungen aus, die bei Event Timing und INP berücksichtigt werden, erfasst dafür aber auch weitere Paints nach dem ersten Paint. Dadurch lassen sich die Auswirkungen und Inhaltsaktualisierungen messen, die direkt auf eine Interaktion zurückgehen. Dies ermöglicht ein besseres Verständnis der damit verbundenen Auswirkungen auf die Performance.

## Beispiele

### Contentful Paints einer Interaktion beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um Contentful Paints von Interaktionen zu erfassen. Mit dem Flag `buffered` kann auch auf Daten zugegriffen werden, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

### Contentful Paints einer Interaktion für eine bestimmte Soft Navigation beobachten

Eine wichtige Anwendung des `InteractionContentfulPaint`-Interfaces besteht darin, alle Contentful Paints zu messen, die mit einer [Soft Navigation](/de/docs/Web/API/PerformanceSoftNavigation) zusammenhängen, um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für diese Soft Navigation zu berechnen.

Dazu empfiehlt es sich, [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) statt [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) zu verwenden. Einige LCP-Kandidaten können auftreten, bevor die Soft Navigation definiert ist – bei Paints also bevor die URL aktualisiert wird – und haben daher noch die alte `navigationId`.

```js
let currentNavigationInteractionId = 1045; // hardcoded in this example

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.interactionId === currentNavigationInteractionId) {
      console.log("Soft LCP candidate:", entry.startTime, entry);
    }
  }
});
observer.observe({ type: "interaction-contentful-paint", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Soft Navigations messen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

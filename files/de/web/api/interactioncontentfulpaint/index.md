---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das Interface `InteractionContentfulPaint` stellt Zeitinformationen zu {{Glossary("Contentful_paint", "Contentful Paints")}} bereit, die einer Interaktion zugeordnet werden können.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Paint geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details zum größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) der Interaktion zurück. Dieser Wert kann bei zwei `InteractionContentfulPaint`-Einträgen derselben Interaktion gleich bleiben, wenn ein neuer Contentful Paint kleiner ist als der bisher größte Contentful Paint dieser Interaktion.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erste Rendering-Phase endete und die Paint-Phase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die ersten gerenderten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

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
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `InteractionContentfulPaint`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

`InteractionContentfulPaint` liefert einen Datenstrom von Paint-Aktualisierungen, die einer Interaktion zugeordnet werden können.

Derzeit ist dies auf Paints mit zunehmender Größe beschränkt. Damit lässt sich {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} messen. Die API wurde jedoch so konzipiert, dass alle für eine Interaktion relevanten Paints ausgegeben werden können.

`InteractionContentfulPaint` wird benötigt, statt die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API zu verwenden: Diese gibt Einträge nur pro vollständigem Seitenladen aus und wird bei einer Interaktion abgeschlossen. Eine Interaktion ist wiederum der notwendige Ausgangspunkt für eine Soft Navigation.

### `navigationId` und `interactionId` verwenden

Bei {{Glossary("Soft_Navigation", "Soft Navigations")}} können Paints, die vor der Aktualisierung der URL stattfinden, für den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} der laufenden Soft Navigation berücksichtigt werden. Bei der Berechnung dieser Metrik lassen sich mit [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) alle relevanten Paints unabhängig von der `navigationId` besser berücksichtigen.

### Beziehung zu Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) liefert Details zu UIEvents – etwa zur Dauer ihrer Einplanung und Verarbeitung sowie zur Gesamtdauer bis zum nächsten Paint. Sie erfasst jedoch weder die Auswirkungen dieser Ereignisse direkt noch spätere Paints, die durch diese Auswirkungen entstehen können. Sie dient dazu, die Reaktionszeit zu messen, während der ein Benutzer keine Rückmeldung erhält. Diese Zeit sollte möglichst kurz sein und bildet die Grundlage für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}.

Trotz der Namensähnlichkeit mit Interaction to Next Paint erfüllt `InteractionContentfulPaint` einen anderen Zweck. `InteractionContentfulPaint` schließt Paints aus, die keine Inhalte darstellen und die bei Event Timing und INP mitgezählt werden. Zugleich erfasst es weitere Paints über den ersten Paint hinaus. So lassen sich die Auswirkungen und Inhaltsaktualisierungen messen, die direkt auf eine Interaktion zurückzuführen sind, und die damit verbundenen Leistungsauswirkungen besser verstehen.

## Beispiele

### Contentful Paints von Interaktionen beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die Soft Navigations zu erfassen. Mit dem Flag `buffered` wird auf Daten zugegriffen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Contentful Paints von Interaktionen für eine bestimmte Soft Navigation beobachten

Ein wichtiger Anwendungsfall des Interfaces `InteractionContentfulPaint` besteht darin, alle Contentful Paints zu messen, die mit einer [Soft Navigation](/de/docs/Web/API/PerformanceSoftNavigation) zusammenhängen, um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} dieser Soft Navigation zu berechnen.

Dafür wird empfohlen, [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) statt [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) zu verwenden. Einige LCP-Kandidaten können auftreten, bevor die Soft Navigation definiert ist – bei Paints also vor der Aktualisierung der URL – und haben daher noch die alte `navigationId`.

```js
let currentNavigationInteractionId = 1045; // hardcoded in this example

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.InteractionId === currentNavigationInteractionId) {
      console.log("Soft LCP candidate:", entry.startTime, entry);
    }
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Soft Navigations messen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

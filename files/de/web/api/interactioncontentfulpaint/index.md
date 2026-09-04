---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `InteractionContentfulPaint` Interface liefert Zeitinformationen über {{Glossary("Contentful_paint", "contentful paints")}}, die einer Interaktion zugeschrieben werden können.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Rendern führte.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details der größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) für die Interaktion zurück. Diese kann zwischen zwei `InteractionContentfulPaint`-Einträgen für die gleiche Interaktion gleich bleiben, wenn ein neuer contentful paint kleiner ist als der aktuelle größte contentful paint für diese Interaktion.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Rendering-Phase endete und die Paint-Phase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft Navigation führte.

## Instanzmethoden

- [`InteractionContentfulPaint.toJSON()`](/de/docs/Web/API/InteractionContentfulPaint/toJSON) {{experimental_inline}}
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON) Methode, um eine JSON-Darstellung des `InteractionContentfulPaint` Objekts zurückzugeben.

## Beschreibung

Das `InteractionContentfulPaint` liefert einen Strom von Paint-Aktualisierungen, die einer Interaktion zugeschrieben werden können.

Derzeit ist dies auf zunehmende Paint-Größen beschränkt, sodass es verwendet werden kann, um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} zu messen. Die API wurde jedoch so konzipiert, dass alle für eine Interaktion relevanten Paints ausgegeben werden können.

`InteractionContentfulPaint` wird anstelle der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API benötigt, da diese nur bei einem vollständigen Seitenladen ausgegeben wird und bei der Interaktion abgeschlossen ist (was ein notwendiger Anfang für eine Soft Navigation ist).

### Verwendung von `navigationId` und `interactionId`

Für {{Glossary("Soft_Navigation", "Soft Navigations")}} können Paints, die vor der Aktualisierung der URL stattfinden, für den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} der laufenden Soft Navigation in Betracht gezogen werden. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um alle relevanten Paints unabhängig von der `navigationId` zu berücksichtigen, wenn diese Metrik berechnet wird.

### Beziehung zu Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) liefert Details über UIEvents — Planungs- und Verarbeitungsdauern sowie die Gesamtdauer bis zum nächsten Paint — verfolgt jedoch nicht direkt die Auswirkungen dieser Ereignisse oder künftige Paints, die diese Effekte verursachen könnten. Sie soll die Reaktionszeit messen, während der ein Nutzer kein Feedback erhält, was auf ein Minimum reduziert werden sollte und die Grundlage für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}} bildet.

`InteractionContentfulPaint` hat, obwohl ähnlich benannt wie Interaction to Next Paint, einen anderen Zweck. `InteractionContentfulPaint` schließt nicht-contentful Paints aus, die zwar für Event Timing und INP zählen, aber auch zusätzliche Paints über den ersten Paint hinaus messen. Es ermöglicht, die Effekte und Content-Aktualisierungen direkt zu messen, die einer Interaktion zugeschrieben werden können, was zu einem besseren Verständnis der damit verbundenen Leistungsimplikationen führt.

## Beispiele

### Beobachtung von Interaktions-Contentful-Paints

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die Soft Navigations zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers liegen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Beobachtung von Interaktions-Contentful-Paints spezifisch für eine Soft Navigation

Einer der Hauptanwendungsfälle der `InteractionContentfulPaint` Schnittstelle ist die Messung aller contentful Paints im Zusammenhang mit einer [Soft Navigation](/de/docs/Web/API/PerformanceSoftNavigation), um den {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für diese Soft Navigation zu berechnen.

Dazu wird empfohlen, die [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) anstelle der [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) zu verwenden, da einige LCP-Kandidaten auftreten können, bevor die Soft Navigation definiert ist (bei Paints, bevor die URL aktualisiert wird) und daher die alte `navigationId` haben werden.

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

- [Messung von Soft Navigations](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

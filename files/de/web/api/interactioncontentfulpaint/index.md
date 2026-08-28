---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Das `InteractionContentfulPaint`-Interface bietet Timing-Informationen über {{Glossary("Contentful_paint", "contentful paints")}}, die einer Interaktion zugeschrieben werden können.

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Paint geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details des größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) der Interaktion zurück. Dies kann zwischen zwei `InteractionContentfulPaint`-Einträgen für dieselbe Interaktion gleich bleiben, wenn ein neuer contentful paint kleiner ist als der aktuell größte contentful paint für diese Interaktion.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Rendering-Phase endete und die Paint-Phase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gepainteten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation führte.

## Instanz-Methoden

- [`InteractionContentfulPaint.toJSON()`](/de/docs/Web/API/InteractionContentfulPaint/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON) Methode, um eine JSON-Darstellung des `InteractionContentfulPaint`-Objekts zurückzugeben.

## Beschreibung

Das `InteractionContentfulPaint` bietet einen Strom von Paint-Updates, die einer Interaktion zugeschrieben werden können.

Derzeit ist es auf sich vergrößernde Paint-Größen beschränkt, sodass es zur Messung von {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} verwendet werden kann. Jedoch wurde die API so konzipiert, dass alle für eine Interaktion relevanten Paints ausgegeben werden können.

`InteractionContentfulPaint` ist notwendig anstelle der Nutzung der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API, da letztere nur für vollständige Seitenladevorgänge ausgegeben wird und bei Interaktion abgeschlossen wird (was ein notwendiger Beginn für eine Soft-Navigation ist).

### Verwendung von `navigationId` und `interactionId`

Bei {{Glossary("Soft_Navigation", "Soft Navigations")}} können Paints, die vor der Aktualisierung der URL stattfinden, für das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} der laufenden Soft-Navigation in Betracht gezogen werden. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um alle relevanten Paints unabhängig von der `navigationId` zu berücksichtigen, wenn diese Metrik berechnet wird.

### Beziehung mit Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) liefert Details über UIEvents — Planungs- und Verarbeitungslatenzen sowie die Gesamtdauer bis zum nächsten Paint — verfolgt jedoch nicht direkt die Auswirkungen dieser Ereignisse, noch zukünftige Paints, die diese verursachen könnten. Sie soll die Reaktionszeit messen, während der ein Benutzer kein Feedback erhält, was auf ein Minimum beschränkt werden sollte und die Grundlage für Metriken wie das {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}} bildet.

`InteractionContentfulPaint` dient trotz seines Namens, der dem von Interaction to Next Paint ähnlich ist, einem anderen Zweck. `InteractionContentfulPaint` schließt nicht-contentful paints aus, die für Event Timing und INP zählen, misst jedoch auch zusätzliche Paints über das erste Paint hinaus. Es ermöglicht die Messung der Effekte und Inhaltsaktualisierungen, die direkt einer Interaktion zugeschrieben werden können, was zu einem besseren Verständnis der damit verbundenen Leistungsaspekte führt.

## Beispiele

### Beobachtung von contentful paints bei Interaktionen

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die Soft-Navigations zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten zuzugreifen, die vor der Erstellung des Observers vorliegen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Beobachtung von contentful paints bei einer spezifischen Soft-Navigation

Einer der Hauptanwendungsfälle des `InteractionContentfulPaint`-Interfaces besteht darin, alle contentful paints zu messen, die mit einer [soft navigation](/de/docs/Web/API/PerformanceSoftNavigation) verbunden sind, um das {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für diese Soft-Navigation zu berechnen.

Es wird empfohlen, die [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) zu verwenden, anstelle der [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId), da einige LCP-Kandidaten vor der Definition der Soft-Navigation auftreten können (bei Paints, bevor die URL aktualisiert wird) und daher die alte `navigationId` haben.

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

- [Messung von Soft-Navigations](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

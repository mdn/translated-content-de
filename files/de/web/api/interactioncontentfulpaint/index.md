---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Das `InteractionContentfulPaint`-Interface liefert Zeitinformationen über {{Glossary("Contentful_paint", "contentful paints")}}, die einer Interaktion zugeordnet sind.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zur Darstellung geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details zum größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) für die Interaktion zurück. Dies kann zwischen zwei `InteractionContentfulPaint`-Einträgen für dieselbe Interaktion gleich bleiben, wenn ein neuer contentful paint kleiner ist als der aktuelle größte contentful paint für diese Interaktion.
- [`InteractionContentfulPaint.navigationId`](/de/docs/Web/API/InteractionContentfulPaint/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, der diese Darstellung zugeordnet ist.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Rendering-Phase endete und die Zeichenphase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gepinselten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Es erweitert auch die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), wobei sie wie beschrieben qualifiziert und eingeschränkt werden:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur weichen Navigation führte.

## Beschreibung

Das `InteractionContentfulPaint` liefert einen Strom von Darstellungsaktualisierungen, die einer Interaktion zugeordnet sind.

Derzeit ist dies auf zunehmende Darstellungsgrößen beschränkt, sodass es verwendet werden kann, um die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft Navigations")}} zu messen. Die API wurde jedoch so gestaltet, dass alle Darstellungen, die für eine Interaktion relevant sind, ausgegeben werden können.

`InteractionContentfulPaint` wird benötigt anstelle der Verwendung der [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API, da diese nur pro vollständigem Seitenladen ausgegeben wird und nach der Interaktion finalisiert wird (was ein notwendiger Anfang für eine weiche Navigation ist).

### Beziehung zu Event Timing und INP

Die [`Event Timing API`](/de/docs/Web/API/PerformanceEventTiming) API liefert Details über UIEvents — Planungs- und Verarbeitungsdauern sowie die Gesamtdauer bis zur nächsten Darstellung — verfolgt jedoch nicht direkt die Auswirkungen dieser Ereignisse oder zukünftige Darstellungen, die diese bewirken könnten. Sie ist dazu gedacht, die Reaktionszeit zu messen, während der ein Benutzer keine Rückmeldung erhält, die minimiert werden sollte und die Basis für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}} bildet.

`InteractionContentfulPaint` hat zwar einen ähnlichen Namen wie die Interaction to Next Paint, erfüllt jedoch einen anderen Zweck. `InteractionContentfulPaint` schließt nicht-contentvolle Darstellungen aus, die für Event Timing und INP zählen, misst jedoch auch zusätzliche Darstellungen über die erste hinaus. Es ermöglicht eine umfassendere Messung der Effekte und Inhaltsaktualisierungen, die direkt einer Interaktion zugeordnet sind.

## Beispiele

### Beobachtung von interaction contentful paints

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die weichen Navigationen zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Beobachtung von interaction contentful paints spezifisch für eine weiche Navigation

Eine der Hauptverwendungen der `InteractionContentfulPaint`-Schnittstelle ist die Messung aller contentvollen Darstellungen, die mit einer [`soft navigation`](/de/docs/Web/API/PerformanceSoftNavigation) verbunden sind, um die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für diese weiche Navigation zu berechnen.

Dazu wird empfohlen, die [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) anstatt der [`PerformanceSoftNavigation.navigationId`](/de/docs/Web/API/PerformanceSoftNavigation/navigationId) zu verwenden, da einige LCP-Kandidaten vor der Definition der weichen Navigation auftreten können (für Darstellungen, bevor die URL aktualisiert wird) und daher die alte `navigationId` haben.

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

- [Messung von weichen Navigationen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

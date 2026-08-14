---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

{{APIRef("Performance API")}}

Das `InteractionContentfulPaint`-Interface liefert zeitliche Informationen über {{Glossary("Contentful_paint", "Contentful Paints")}}, die einer Interaktion zugeordnet werden können.

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Paint geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details des größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) für die Interaktion zurück. Dies kann zwischen zwei `InteractionContentfulPaint`-Einträgen für dieselbe Interaktion gleich bleiben, wenn ein neuer Contentful Paint kleiner ist als der derzeit größte Contentful Paint für diese Interaktion.
- [`InteractionContentfulPaint.navigationId`](/de/docs/Web/API/InteractionContentfulPaint/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, die diesem Paint zugeordnet ist.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Renderphase beendet und die Paintphase begonnen hat.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gemalten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation geführt hat.

## Beschreibung

Das `InteractionContentfulPaint` bietet einen Stream von Paint-Updates, die einer Interaktion zugeordnet werden können.

Derzeit ist dies auf zunehmende Paint-Größen beschränkt, sodass es zur Messung der {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft-Navigations")}} verwendet werden kann. Die API wurde jedoch so gestaltet, dass alle Paints, die für eine Interaktion relevant sind, ausgegeben werden können.

`InteractionContentfulPaint` ist erforderlich, anstatt die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) API zu verwenden, da diese nur bei einem vollständigen Seitenladen ausgegeben und nach einer Interaktion finalisiert wird (was ein notwendiger Start für eine Soft-Navigation ist).

### Beziehung zu Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) liefert Details über UIEvents — Planung und Verarbeitungsdauern sowie die Gesamtzeit bis zum nächsten Paint — verfolgt jedoch nicht direkt die Auswirkungen dieser Ereignisse, noch alle zukünftigen Paints, die durch diese Effekte verursacht werden können. Sie soll die Reaktionszeit messen, während der ein Benutzer kein Feedback erhält, was auf ein Minimum reduziert werden sollte und die Grundlage für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}} bildet.

`InteractionContentfulPaint`, trotz des ähnlichen Namens zu Interaction to Next Paint, verfolgt einen anderen Zweck. `InteractionContentfulPaint` schließt nicht-contentful Paints aus, die für Event Timing und INP zählen, misst aber auch zusätzliche Paints über den ersten Paint hinaus. Es ermöglicht die Messung eines vollständigeren Verständnisses der Effekte und Inhaltsaktualisierungen, die direkt auf eine Interaktion zurückzuführen sind.

## Beispiele

### Beobachtung von interaction contentful paints

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die Soft-Navigations zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten vor der Observer-Erstellung zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Beobachtung von interaction contentful paints spezifisch für eine Soft-Navigation

Eine der Hauptanwendungen des `InteractionContentfulPaint`-Interfaces ist die Messung aller contentful paints im Zusammenhang mit einer [soft navigation](/de/docs/Web/API/PerformanceSoftNavigation), um die {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}} für diese Soft-Navigation zu berechnen.

Dazu wird empfohlen, die [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) zu verwenden, anstatt der [`PerformanceSoftNavigation.navigationId`](/de/docs/Web/API/PerformanceSoftNavigation/navigationId), da einige LCP-Kandidaten auftreten können, bevor die Soft-Navigation definiert ist (für Paints, bevor die URL aktualisiert wird) und daher die alte `navigationId` haben werden.

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

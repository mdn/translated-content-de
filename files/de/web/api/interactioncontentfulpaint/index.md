---
title: InteractionContentfulPaint
slug: Web/API/InteractionContentfulPaint
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `InteractionContentfulPaint`-Interface bietet Timing-Informationen über {{Glossary("Contentful_paint", "Contentful Paints")}}, die einer Interaktion zugeordnet sind.

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zum Paint geführt hat.
- [`InteractionContentfulPaint.largestContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint/largestContentfulPaint) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt Details des größten [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint) für die Interaktion zurück. Dies kann zwischen zwei `InteractionContentfulPaint`-Einträgen für die gleiche Interaktion gleich bleiben, wenn ein neuer Contentful Paint kleiner als der aktuelle größte Contentful Paint für diese Interaktion ist.
- [`InteractionContentfulPaint.paintTime`](/de/docs/Web/API/InteractionContentfulPaint/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erste Renderphase endete und die Paint-Phase begann.
- [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die ersten gepainteten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"interaction-contentful-paint"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`InteractionContentfulPaint.presentationTime`](/de/docs/Web/API/InteractionContentfulPaint/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer einen leeren String zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation führte.

## Instanz-Methoden

- [`InteractionContentfulPaint.toJSON()`](/de/docs/Web/API/InteractionContentfulPaint/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Darstellung des `InteractionContentfulPaint`-Objekts zurückzugeben.

## Beschreibung

Das `InteractionContentfulPaint` bietet einen Strom von Paint-Updates, die einer Interaktion zugeordnet sind.

Derzeit ist dies auf steigende Paint-Größen beschränkt, sodass es verwendet werden kann, um das {{Glossary("Largest_Contentful_Paint", "größte Contentful Paint (LCP)")}} für {{Glossary("Soft_Navigation", "Soft-Navigations")}} zu messen. Die API wurde jedoch so konzipiert, dass alle für eine Interaktion relevanten Paints ausgegeben werden können.

`InteractionContentfulPaint` ist erforderlich, anstatt die [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-API zu verwenden, da diese nur pro vollständigem Seitenladen ausgegeben wird und bei einer Interaktion abgeschlossen wird (die ein notwendiger Startpunkt für eine Soft-Navigation ist).

### Verwendung von `navigationId` und `interactionId`

Für {{Glossary("Soft_Navigation", "Soft-Navigations")}} können Paints, die auftreten, bevor die URL aktualisiert wird, für das {{Glossary("Largest_Contentful_Paint", "größte Contentful Paint (LCP)")}} der in Bearbeitung befindlichen Soft-Navigation in Betracht gezogen werden. Für den LCP-Fall sind [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) und [`InteractionContentfulPaint.interactionId`](/de/docs/Web/API/InteractionContentfulPaint/interactionId) effektiver, um alle relevanten Paints unabhängig von der `navigationId` zu berücksichtigen, wenn diese Metrik berechnet wird.

### Beziehung zum Event Timing und INP

Die [Event Timing API](/de/docs/Web/API/PerformanceEventTiming) bietet Details zu UI-Events — Planungs- und Verarbeitungsdauern sowie die Gesamtdauer bis zum nächsten Paint — verfolgt aber nicht direkt die Auswirkungen dieser Ereignisse, noch zukünftige Paints, die diese Auswirkungen verursachen könnten. Sie soll die Reaktionszeit messen, während der ein Benutzer kein Feedback erhält, was auf ein Minimum beschränkt werden sollte und die Grundlage für Metriken wie {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}} bildet.

`InteractionContentfulPaint`, obwohl es ähnlich wie Interaction to Next Paint benannt ist, dient einem anderen Zweck. `InteractionContentfulPaint` schließt nicht-inhaltliche Paints aus, die zwar für Event Timing und INP zählen, misst aber auch zusätzliche Paints über den ersten Paint hinaus. Es ermöglicht das Messen der Effekte und Inhaltsaktualisierungen, die direkt einer Interaktion zugeordnet sind, was zu einem besseren Verständnis der damit verbundenen Leistungsimplikationen führt.

## Beispiele

### Beobachtung von interaction contentful paints

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) registriert, um die Soft-Navigations zu erhalten. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Interaction Contentful Paints:", entry.startTime, entry);
  }
});
observer.observe({ type: "interaction-contentful-paints", buffered: true });
```

### Beobachtung von interaction contentful paints spezifisch für eine Soft-Navigation

Eines der Hauptanwendungsfälle des `InteractionContentfulPaint`-Interfaces ist die Messung aller contentful paints, die mit einer [Soft-Navigation](/de/docs/Web/API/PerformanceSoftNavigation) zusammenhängen, um das {{Glossary("Largest_Contentful_Paint", "größte Contentful Paint (LCP)")}} für diese Soft-Navigation zu berechnen.

Dazu wird empfohlen, die [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) anstelle der [`PerformanceEntry.navigationId`](/de/docs/Web/API/PerformanceEntry/navigationId) zu verwenden, da einige LCP-Kandidaten auftreten können, bevor die Soft-Navigation definiert ist (für Paints, bevor die URL aktualisiert wird) und daher die alte `navigationId` haben werden.

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

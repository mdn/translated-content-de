---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{APIRef("Performance API")}}

Das `PerformanceSoftNavigation`-Interface bietet Timing-Informationen über {{Glossary("soft_navigation", "Soft-Navigations")}}, wie sie durch clientseitiges Routing auf {{Glossary("SPA", "Single-Page-Application (SPA)")}}-Seiten verwendet werden. Es wird ausgegeben, wenn ein Browser erkennt, dass eine Soft-Navigation stattgefunden hat.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, die für diese Seitenladung einzigartig ist.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Rendering-Phase endete und die Malphase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gepixelten Bilder tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es sie qualifiziert und einschränkt, wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"soft-navigation"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die neue URL, zu der navigiert wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation führte.

## Instanzmethoden

- [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) {{Experimental_Inline}}
  - : Gibt die aktuelle größte [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese Soft-Navigation zurück.
- [`PerformanceSoftNavigation.toJSON()`](/de/docs/Web/API/PerformanceSoftNavigation/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Darstellung des `PerformanceSoftNavigation`-Objekts zurückzugeben.

## Beschreibung

Das `PerformanceSoftNavigation`-Interface wird vom Browser durch die folgenden Beobachtungen gesteuert:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Ein sichtbarer, {{Glossary("Contentful_Paint", "inhaltlicher Malvorgang")}} als Ergebnis dieser Interaktion, die den Bildschirm aktualisiert.
- Ein URL-Update in der Adressleiste des Benutzers als Ergebnis dieser Interaktion.

Dadurch, dass der Browser dies bereitstellt, anstatt dass ein Routing-Framework eine API aufruft, um diesen Eintrag auszugeben, kann die Leistungsmessung von SPAs konsistent durchgeführt werden, unabhängig davon, wie verschiedene Anwendungen die Navigationen behandeln (z.B. URL-Aktualisierung zu Beginn oder am Ende der Navigationsverarbeitung).

Das `PerformanceSoftNavigation`-Interface ermöglicht es Entwicklern, Leistungsmetriken von SPAs zu messen, wie:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als das erste Rendern ab der Soft-Navigationszeit gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über den [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die Soft-Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen den Navigationen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen den Navigationen berechnet werden.

## Beispiele

### Beobachtung von Soft-Navigationen

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um die Soft-Navigationen zu protokollieren. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    console.log("Soft Nav:", entry.startTime, entry.name);
  }
});
observer.observe({ type: "soft-navigation", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Messung von Soft-Navigationen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

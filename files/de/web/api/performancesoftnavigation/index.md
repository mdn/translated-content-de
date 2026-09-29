---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die `PerformanceSoftNavigation`-Schnittstelle stellt Timing-Informationen zu {{Glossary("soft_navigation", "Soft-Navigationen")}} bereit, wie sie beim clientseitigen Routing auf Websites von {{Glossary("SPA", "Single-Page-Anwendungen (SPAs)")}} verwendet werden. Ein entsprechender Eintrag wird erzeugt, wenn ein Browser feststellt, dass eine Soft-Navigation stattgefunden hat.

## Instanzeigenschaften

Diese Schnittstelle definiert direkt die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, die innerhalb dieses Seitenladevorgangs eindeutig ist.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erste Rendering-Phase endete und die Paint-Phase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die ersten gezeichneten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Sie erweitert außerdem die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), wobei diese wie beschrieben konkretisiert und eingeschränkt werden:

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
  - : Gibt den aktuellen größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese Soft-Navigation zurück.
- [`PerformanceSoftNavigation.toJSON()`](/de/docs/Web/API/PerformanceSoftNavigation/toJSON) {{experimental_inline}}
  - : Gibt ein JSON-serialisierbares, einfaches Objekt zurück, das das `PerformanceSoftNavigation`-Objekt repräsentiert. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Die `PerformanceSoftNavigation`-Schnittstelle basiert darauf, dass der Browser Folgendes beobachtet:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Ein sichtbares {{Glossary("Contentful_Paint", "Contentful Paint")}}, bei dem der Bildschirm infolge dieser Interaktion aktualisiert wird.
- Eine Aktualisierung der URL in der Adressleiste des Benutzers infolge dieser Interaktion.

Dass der Browser diesen Eintrag bereitstellt, statt dass ein Routing-Framework eine API aufruft, um ihn zu erzeugen, ermöglicht eine konsistente Messung der SPA-Performance-Timings – unabhängig davon, wie verschiedene Anwendungen Navigationen handhaben (beispielsweise ob sie die URL zu Beginn oder am Ende der Navigationsverarbeitung aktualisieren).

Mit der `PerformanceSoftNavigation`-Schnittstelle können Entwickler SPA-Performance-Metriken wie die folgenden messen:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als erster Paint ab dem Zeitpunkt der Soft-Navigation gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die Soft-Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen Navigationen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen Navigationen berechnet werden.

## Beispiele

### Soft-Navigationen beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um Soft-Navigationen zu protokollieren. Das `buffered`-Flag wird verwendet, um auf Daten aus der Zeit vor der Erstellung des Observers zuzugreifen.

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

- [Soft-Navigationen messen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

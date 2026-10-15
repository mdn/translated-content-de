---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: 1c5c84aed1c144e69427aa81d65b95180f58fbee
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle `PerformanceSoftNavigation` stellt Zeitinformationen zu {{Glossary("soft_navigation", "Soft Navigations")}} bereit, wie sie beim clientseitigen Routing auf Websites mit {{Glossary("SPA", "Single-Page Applications (SPAs)")}} verwendet werden. Ein entsprechender Eintrag wird erzeugt, wenn ein Browser feststellt, dass eine Soft Navigation stattgefunden hat.

## Instanzeigenschaften

Diese Schnittstelle definiert unmittelbar die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zur Soft Navigation geführt hat.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die erste Rendering-Phase endete und die Paint-Phase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die ersten gerenderten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Außerdem übernimmt sie die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) und konkretisiert oder beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"soft-navigation"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die neue URL, zu der navigiert wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft Navigation geführt hat.

## Instanzmethoden

- [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) {{Experimental_Inline}}
  - : Gibt den derzeit größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese Soft Navigation zurück.
- [`PerformanceSoftNavigation.toJSON()`](/de/docs/Web/API/PerformanceSoftNavigation/toJSON) {{experimental_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das Objekt `PerformanceSoftNavigation` repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Die Schnittstelle `PerformanceSoftNavigation` basiert darauf, dass der Browser Folgendes beobachtet:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Einen sichtbaren {{Glossary("Contentful_Paint", "Contentful Paint")}}, der daraus resultiert, dass diese Interaktion den Bildschirminhalt aktualisiert.
- Eine Aktualisierung der URL in der Adressleiste des Benutzers infolge dieser Interaktion.

Dass der Browser diesen Eintrag bereitstellt, statt dass ein Routing-Framework eine API aufruft, um ihn zu erzeugen, ermöglicht eine einheitliche Messung der Zeitwerte für die SPA-Performance – unabhängig davon, wie verschiedene Anwendungen Navigationen handhaben (beispielsweise, ob sie die URL zu Beginn oder am Ende der Navigationsverarbeitung aktualisieren).

Mit der Schnittstelle `PerformanceSoftNavigation` können Entwickler SPA-Performance-Metriken wie die folgenden messen:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als erster Paint ab dem Zeitpunkt der Soft Navigation gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über den [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die Soft Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen Navigationen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen Navigationen berechnet werden.

## Beispiele

### Soft Navigations beobachten

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um Soft Navigations zu protokollieren. Das Flag `buffered` ermöglicht den Zugriff auf Daten, die vor der Erstellung des Observers erfasst wurden.

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

- [Soft Navigations messen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

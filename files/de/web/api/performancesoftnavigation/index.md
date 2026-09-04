---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: 5b9e4bb67e5cb4bb2b780e7338a6560463e5a1a7
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `PerformanceSoftNavigation`-Interface bietet Timing-Informationen über {{Glossary("soft_navigation", "Soft-Navigationen")}}, wie sie von clientseitigem Routing auf {{Glossary("SPA", "Single-Page-Application (SPA)")}}-Seiten verwendet werden. Es wird erzeugt, wenn ein Browser eine Soft-Navigation beobachtet, die stattgefunden hat.

## Instanz-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, einzigartig für dieses Seiten-Laden.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Render-Phase endete und die Paint-Phase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gezeichneten Pixel tatsächlich auf dem Bildschirm angezeigt wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"soft-navigation"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die neue URL, zu der navigiert wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation führte.

## Instanz-Methoden

- [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) {{Experimental_Inline}}
  - : Gibt das aktuelle größte [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese Soft-Navigation zurück.
- [`PerformanceSoftNavigation.toJSON()`](/de/docs/Web/API/PerformanceSoftNavigation/toJSON) {{experimental_inline}}
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Darstellung des `PerformanceSoftNavigation`-Objekts zu liefern.

## Beschreibung

Das `PerformanceSoftNavigation`-Interface wird vom Browser gesteuert, der Folgendes beobachtet:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Eine sichtbare, {{Glossary("Contentful_Paint", "inhaltliche Darstellung")}} als Folge dieser Interaktion, die den Bildschirm aktualisiert.
- Eine URL-Aktualisierung in der Adressleiste des Benutzers als Folge dieser Interaktion.

Dass der Browser dies bereitstellt, anstatt dass ein Routing-Framework eine API aufruft, um diesen Eintrag zu erzeugen, ermöglicht eine konsistente Messung der SPA-Leistungszeiten, unabhängig davon, wie verschiedene Anwendungen Navigationen handhaben (zum Beispiel das Aktualisieren der URL am Anfang oder am Ende der Navigationsverarbeitung).

Das `PerformanceSoftNavigation`-Interface ermöglicht Entwicklern die Messung von SPA-Leistungsmetriken wie:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als erstes Rendering ab der Soft-Navigationszeit gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über das [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die Soft-Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen den Navigationen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen den Navigationen berechnet werden.

## Beispiele

### Beobachtung von Soft-Navigationen

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um die Soft-Navigationen zu protokollieren. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen.

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

---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}

Das `PerformanceSoftNavigation` Interface liefert Timing-Informationen über {{Glossary("soft_navigation", "Soft-Navigations")}}, wie sie durch clientseitiges Routing auf {{Glossary("SPA", "Single-Page-Application (SPA)")}} Webseiten verwendet werden. Es wird ausgelöst, wenn ein Browser feststellt, dass eine Soft-Navigation stattgefunden hat.

## Instanzen-Eigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Interaktion, die zur Soft-Navigation führte.
- [`PerformanceSoftNavigation.navigationId`](/de/docs/Web/API/PerformanceSoftNavigation/navigationId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, die für diesen Seitenaufruf eindeutig ist.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Renderphase endete und die Malphase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gepainteten Pixel tatsächlich auf dem Bildschirm dargestellt wurden.

Es erweitert auch die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften und qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"soft-navigation"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die neue URL, zu der navigiert wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur Soft-Navigation führte.

## Instanz-Methoden

_Dieses Interface erbt auch Methoden von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)._

- [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) {{Experimental_Inline}}
  - : Gibt den aktuellen größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese Soft-Navigation zurück.

## Beschreibung

Das `PerformanceSoftNavigation` Interface wird durch den Browser gesteuert, der Folgendes beobachtet:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Ein sichtbarer, {{Glossary("Contentful_Paint", "inhaltsträchtiger Paint")}} als Ergebnis dieser Interaktion, der den Bildschirm aktualisiert.
- Ein URL-Update in der Adressleiste des Benutzers als Ergebnis dieser Interaktion.

Dass der Browser dies bereitstellt, anstatt dass ein Routing-Framework eine API aufruft, um diesen Eintrag zu emittieren, ermöglicht es, die SPA-Leistungszeitmessung konsistent zu gestalten, unabhängig davon, wie unterschiedliche Anwendungen mit Navigationen umgehen (beispielsweise das URL-Update zu Beginn oder am Ende der Navigationsverarbeitung).

Das `PerformanceSoftNavigation` Interface ermöglicht es Entwicklern, SPA-Leistungsmetriken wie die folgenden zu messen:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als der erste Paint ab der Soft-Navigationszeit gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über den [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die Soft-Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen den Navigationen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen den Navigationen berechnet werden.

## Beispiele

### Beobachtung von Soft-Navigationen

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um die Soft-Navigationen zu protokollieren. Das `buffered` Flag wird verwendet, um auf Daten vor Erzeugung des Observers zuzugreifen.

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

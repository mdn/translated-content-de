---
title: PerformanceSoftNavigation
slug: Web/API/PerformanceSoftNavigation
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `PerformanceSoftNavigation`-Interface liefert Zeitinformationen über {{Glossary("soft_navigation", "softe Navigationen")}}, wie sie von clientseitigem Routing auf {{Glossary("SPA", "Single-Page-Application (SPA)")}}-Seiten verwendet werden. Es wird ausgegeben, wenn ein Browser beobachtet, dass eine softe Navigation stattgefunden hat.

## Instanzeigenschaften

Dieses Interface definiert direkt die folgenden Eigenschaften:

- [`PerformanceSoftNavigation.interactionId`](/de/docs/Web/API/PerformanceSoftNavigation/interactionId) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die ID der Navigation, die für diesen Seitenaufruf einzigartig ist.
- [`PerformanceSoftNavigation.navigationType`](/de/docs/Web/API/PerformanceSoftNavigation/navigationType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der Typ der Navigation.
- [`PerformanceSoftNavigation.paintTime`](/de/docs/Web/API/PerformanceSoftNavigation/paintTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die erste Renderphase endete und die Malphase begann.
- [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, wann die ersten gemalten Pixel tatsächlich auf dem Bildschirm gezeichnet wurden.

Es erweitert außerdem die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, qualifiziert und beschränkt sie wie beschrieben:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `"soft-navigation"` zurück.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Ergebnis von [`PerformanceSoftNavigation.presentationTime`](/de/docs/Web/API/PerformanceSoftNavigation/presentationTime) - [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Die neue URL, zu der navigiert wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) der Interaktion zurück, die zur soften Navigation führte.

## Instanzmethoden

- [`PerformanceSoftNavigation.getLargestInteractionContentfulPaint()`](/de/docs/Web/API/PerformanceSoftNavigation/getLargestInteractionContentfulPaint) {{Experimental_Inline}}
  - : Gibt den aktuellen größten [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für diese softe Navigation zurück.
- [`PerformanceSoftNavigation.toJSON()`](/de/docs/Web/API/PerformanceSoftNavigation/toJSON)
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON)-Methode, um eine JSON-Repräsentation des `PerformanceSoftNavigation`-Objekts zurückzugeben.

## Beschreibung

Das `PerformanceSoftNavigation`-Interface wird durch den Browser getrieben, der Folgendes beobachtet:

- Eine [vertrauenswürdige](/de/docs/Web/API/Event/isTrusted) Benutzerinteraktion.
- Einen sichtbaren, {{Glossary("Contentful_Paint", "contentreichen Paint")}} als Ergebnis dieser Interaktion, die den Bildschirm aktualisiert.
- Ein URL-Update in der Adressleiste des Benutzers als Resultat dieser Interaktion.

Wenn der Browser dies bereitstellt, anstatt dass ein Routing-Framework eine API aufruft, um diesen Eintrag auszugeben, können SPA-Leistungszeiten konsistent gemessen werden, unabhängig davon, wie verschiedene Anwendungen Navigationen handhaben (zum Beispiel das Aktualisieren der URL am Beginn oder Ende der Navigationsverarbeitung).

Das `PerformanceSoftNavigation`-Interface ermöglicht Entwicklern die Messung von SPA-Leistungsmetriken wie:

- {{Glossary("First_Contentful_Paint", "First Contentful Paint (FCP)")}}: Kann als erster Paint ab der soften Navigationszeit gemessen werden.
- {{Glossary("Largest_Contentful_Paint", "Largest Contentful Paint (LCP)")}}: Kann über das [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint) für die softe Navigation gemessen werden.
- {{Glossary("CLS", "Cumulative Layout Shift (CLS)")}}: Kann zwischen Navigierungen berechnet werden.
- {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint (INP)")}}: Kann zwischen Navigierungen berechnet werden.

## Beispiele

### Beobachten von soften Navigationen

Im folgenden Beispiel wird ein [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwendet, um die soften Navigationen zu protokollieren. Das `buffered`-Flag wird verwendet, um auf Daten vor der Erstellung des Observers zuzugreifen.

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

- [Messung von soften Navigationen](https://developer.chrome.com/docs/web-platform/soft-navigations) auf developer.chrome.com (2026)

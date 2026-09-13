---
title: "PerformanceEntry: entryType-Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 3f058f207a00078456c19b9de46218af3f084420
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ der Leistungsmetrik darstellt, die dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind über die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`
  - : Meldet die Ladezeit von Elementen.

    Die Eintragsinstanz wird ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt sein.

- `event`
  - : Meldet Latenzen von Ereignissen.

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `first-input`
  - : Meldet die {{Glossary("First_Input_Delay", "First Input Delay")}} (FID).

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `interaction-contentful-paint`
  - : Meldet das größte Rendering eines Elements, das nach einer Interaktion auf dem Bildschirm ausgelöst wurde.

    Die Eintragsinstanz wird ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt sein.

- `largest-contentful-paint`
  - : Meldet das größte Rendering eines Elements auf dem Bildschirm.

    Die Eintragsinstanz wird ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt sein.

- `layout-shift`
  - : Meldet die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

    Die Eintragsinstanz wird ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt sein.

- `long-animation-frame`
  - : Meldet Instanzen von [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Eintragsinstanz wird ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt sein.

- `longtask`
  - : Meldet Instanzen von langen Aufgaben.

    Die Eintragsinstanz wird ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt sein.

- `mark`
  - : Meldet Ihre eigenen benutzerdefinierten Performance-Marker.

    Die Eintragsinstanz wird ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt sein.

- `measure`
  - : Meldet Ihre eigenen benutzerdefinierten Performance-Messungen.

    Die Eintragsinstanz wird ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt sein.

- `navigation`
  - : Meldet das Timing der Dokumentennavigation.

    Die Eintragsinstanz wird ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt sein.

- `paint`
  - : Meldet Schlüssel-Momente des Dokumentenrenderings (erstes Rendering, erstes inhaltsvolles Rendering) während des Seitenladens.

    Die Eintragsinstanz wird ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt sein.

- `resource`
  - : Meldet Timing-Informationen für Ressourcen in einem Dokument.

    Die Eintragsinstanz wird ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt sein.

- `soft-navigation`
  - : Meldet die Renderings, die nach einer Benutzerinteraktion und einem URL-Update, das eine {{Glossary("soft_navigation", "softe Navigation")}} auslöste, auf dem Bildschirm angezeigt wurden.

    Die Eintragsinstanz wird ein [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Objekt sein.

- `taskattribution`
  - : Meldet die Art der Arbeit, die wesentlich zur langen Aufgabe beigetragen hat.

    Die Eintragsinstanz wird ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt sein.

- `visibility-state`
  - : Meldet das Timing von Änderungen der Sichtbarkeitszustände der Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

    Die Eintragsinstanz wird ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt sein.

## Beispiele

### Filtern von Performance-Einträgen nach Typ

Die `entryType`-Eigenschaft kann nützlich sein, wenn Sie bestimmte Performance-Einträge herausfiltern möchten. Zum Beispiel könnten Sie alle Skriptressourcen überprüfen wollen, indem Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Abrufen von Performance-Einträgen nach Typ

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, die es Ihnen ermöglichen, Performance-Einträge direkt nach Typ abzurufen. Sie benötigen dafür nicht unbedingt die `entryType`-Eigenschaft, stattdessen könnten Sie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Auch beim Beobachten mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) nimmt die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode ein Array von `entryTypes` in ihrem Optionsobjekt, durch das Sie entscheiden können, welche Eintrittstypen beobachtet werden sollen.

```js
// Log all resource entries at this point
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});

// PerformanceObserver version
// Log all resource entries when they are available
function perfObserver(list, observer) {
  list.getEntriesByType("resource").forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["resource", "navigation"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static)
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
- [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)

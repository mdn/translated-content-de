---
title: "PerformanceEntry: entryType-Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ der Leistungsmetrik darstellt, den dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind über die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`

  - : Berichtet über die Ladezeit von Elementen.

    Die Eintragsinstanz wird ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt sein.

- `event`

  - : Berichtet über die Verzögerungen von Ereignissen.

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `first-input`

  - : Berichtet über die {{Glossary("first_input_delay", "erste Eingabeverzögerung")}} (FID).

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `largest-contentful-paint`

  - : Berichtet über das größte Rendern eines Elements auf dem Bildschirm.

    Die Eintragsinstanz wird ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt sein.

- `layout-shift`

  - : Berichtet über die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

    Die Eintragsinstanz wird ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt sein.

- `long-animation-frame`

  - : Berichtet über Instanzen von [langen Animationsrahmen (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Eintragsinstanz wird ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt sein.

- `longtask`

  - : Berichtet über Instanzen von langen Aufgaben.

    Die Eintragsinstanz wird ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt sein.

- `mark`

  - : Berichtet über Ihre eigenen benutzerdefinierten Leistungsmarkierungen.

    Die Eintragsinstanz wird ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt sein.

- `measure`

  - : Berichtet über Ihre eigenen benutzerdefinierten Leistungsmaße.

    Die Eintragsinstanz wird ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt sein.

- `navigation`

  - : Berichtet über das Timing der Dokumenten-Navigation.

    Die Eintragsinstanz wird ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt sein.

- `paint`

  - : Berichtet über wichtige Momente des Dokumenten-Renderings (erste Darstellung, erster inhaltsvoller Anstrich) während des Ladens der Seite.

    Die Eintragsinstanz wird ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt sein.

- `resource`

  - : Berichtet über Zeitinformationen für Ressourcen in einem Dokument.

    Die Eintragsinstanz wird ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt sein.

- `taskattribution`

  - : Berichtet über die Art der Arbeit, die wesentlich zur langen Aufgabe beigetragen hat.

    Die Eintragsinstanz wird ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt sein.

- `visibility-state`

  - : Berichtet über das Timing von Sichtbarkeitszustandswechseln der Seite, d. h. wenn ein Tab vom Vordergrund in den Hintergrund oder umgekehrt wechselt.

    Die Eintragsinstanz wird ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt sein.

## Beispiele

### Filtern von Leistungseinträgen nach Typ

Die `entryType`-Eigenschaft kann nützlich sein, wenn spezifische Leistungseinträge herausgefiltert werden sollen. Beispielsweise könnten Sie alle Skript-Ressourcen überprüfen wollen, indem Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Abrufen von Leistungseinträgen nach Typ

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, die es Ihnen erlauben, Leistungseinträge direkt nach Typ abzurufen. Sie benötigen dafür nicht unbedingt die `entryType`-Eigenschaft, sondern können stattdessen [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Auch wenn Sie mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten, nimmt die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode ein Array von `entryTypes` in ihrem Optionsobjekt, mit dem Sie entscheiden können, welche Eintragstypen beobachtet werden sollen.

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

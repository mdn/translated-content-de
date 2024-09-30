---
title: "PerformanceEntry: entryType-Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ der Leistungsmetrik darstellt, die dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind mithilfe der statischen Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`

  - : Berichtet die Ladezeit von Elementen.

    Die Eintragsinstanz wird ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt sein.

- `event`

  - : Berichtet Latenzen von Ereignissen.

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `first-input`

  - : Berichtet die [First Input Delay](/de/docs/Glossary/first_input_delay) (FID).

    Die Eintragsinstanz wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `largest-contentful-paint`

  - : Berichtet das größte vom Element ausgelöste Rendering auf dem Bildschirm.

    Die Eintragsinstanz wird ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt sein.

- `layout-shift`

  - : Berichtet die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

    Die Eintragsinstanz wird ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt sein.

- `long-animation-frame`

  - : Berichtet Instanzen von [langen Animationsrahmen (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Eintragsinstanz wird ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt sein.

- `longtask`

  - : Berichtet Instanzen von langen Aufgaben.

    Die Eintragsinstanz wird ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt sein.

- `mark`

  - : Berichtet Ihre eigenen benutzerdefinierten Leistungsmarker.

    Die Eintragsinstanz wird ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt sein.

- `measure`

  - : Berichtet Ihre eigenen benutzerdefinierten Leistungsmaße.

    Die Eintragsinstanz wird ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt sein.

- `navigation`

  - : Berichtet die Zeitmessung der Dokumentnavigation.

    Die Eintragsinstanz wird ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt sein.

- `paint`

  - : Berichtet Schlüsselmomente des Dokumenten-Renderings (first paint, first contentful paint) während des Seitenladens.

    Die Eintragsinstanz wird ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt sein.

- `resource`

  - : Berichtet Zeitmessinformationen für Ressourcen in einem Dokument.

    Die Eintragsinstanz wird ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt sein.

- `taskattribution`

  - : Berichtet die Art der Arbeit, die wesentlich zur langen Aufgabe beigetragen hat.

    Die Eintragsinstanz wird ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt sein.

- `visibility-state`

  - : Berichtet die Zeitmessung von Änderungen des Sichtbarkeitszustands der Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

    Die Eintragsinstanz wird ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt sein.

## Beispiele

### Filtern von Leistungsbeiträgen nach Typ

Die `entryType`-Eigenschaft kann nützlich sein, wenn spezifische Leistungsbeiträge herausgefiltert werden sollen. Zum Beispiel könnten Sie alle Skriptressourcen überprüfen, indem Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Abrufen von Leistungsbeiträgen nach Typ

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, um Leistungsbeiträge direkt nach Typ abzurufen. Sie benötigen nicht unbedingt die `entryType`-Eigenschaft dafür, stattdessen können Sie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Zudem nimmt die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) ein Array von `entryTypes` im Optionsobjekt entgegen, in dem Sie entscheiden können, welche Eintragstypen beobachtet werden sollen.

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

---
title: "PerformanceEntry: entryType Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ der Leistungskennzahl darstellt, die dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind unter der statischen Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`

  - : Meldet die Ladezeit von Elementen.

    Die Instanz des Eintrags wird ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt sein.

- `event`

  - : Meldet Latenzen bei Ereignissen.

    Die Instanz des Eintrags wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `first-input`

  - : Meldet die [Verzögerung beim ersten Eingabeverzögerung](/de/docs/Glossary/first_input_delay) (FID).

    Die Instanz des Eintrags wird ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt sein.

- `largest-contentful-paint`

  - : Meldet die größte Darstellung eines Elements, das auf dem Bildschirm ausgelöst wird.

    Die Instanz des Eintrags wird ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt sein.

- `layout-shift`

  - : Meldet die Layout-Stabilität von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

    Die Instanz des Eintrags wird ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt sein.

- `long-animation-frame`

  - : Meldet Instanzen von [langen Animationsbildern (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Instanz des Eintrags wird ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt sein.

- `longtask`

  - : Meldet Instanzen von langen Aufgaben.

    Die Instanz des Eintrags wird ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt sein.

- `mark`

  - : Meldet Ihre eigenen benutzerdefinierten Leistungsmarker.

    Die Instanz des Eintrags wird ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt sein.

- `measure`

  - : Meldet Ihre eigenen benutzerdefinierten Leistungsmaßnahmen.

    Die Instanz des Eintrags wird ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt sein.

- `navigation`

  - : Meldet das Timing der Dokumentnavigation.

    Die Instanz des Eintrags wird ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt sein.

- `paint`

  - : Meldet wichtige Momente der Dokumentendarstellung (erstmalige Darstellung, erstmalige inhaltsreiche Darstellung) während des Ladevorgangs einer Seite.

    Die Instanz des Eintrags wird ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt sein.

- `resource`

  - : Meldet Timing-Informationen für Ressourcen in einem Dokument.

    Die Instanz des Eintrags wird ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt sein.

- `taskattribution`

  - : Meldet die Art der Arbeit, die wesentlich zur langen Aufgabe beigetragen hat.

    Die Instanz des Eintrags wird ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt sein.

- `visibility-state`

  - : Meldet das Timing von Sichtbarkeitsstatusänderungen der Seite, d.h. wenn ein Tab vom Vordergrund in den Hintergrund oder umgekehrt wechselt.

    Die Instanz des Eintrags wird ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt sein.

## Beispiele

### Leistungsentries nach Typ filtern

Die `entryType`-Eigenschaft kann nützlich sein, um bestimmte Leistungsentries herauszufiltern. Beispielsweise möchten Sie vielleicht alle Skript-Ressourcen überprüfen, also würden Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Leistungsentries nach Typ abrufen

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden an, die es Ihnen ermöglichen, Leistungsentries direkt nach Typ abzurufen. Sie benötigen dazu nicht unbedingt die `entryType`-Eigenschaft, sondern können stattdessen [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Auch beim Beobachten mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) nimmt die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode ein Array von `entryTypes` in ihrem Optionsobjekt entgegen, bei dem Sie entscheiden können, welche Entry-Typen Sie beobachten möchten.

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

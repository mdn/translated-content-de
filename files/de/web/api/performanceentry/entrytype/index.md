---
title: "PerformanceEntry: entryType Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ des Performance-Metrik darstellt, den dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind durch die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`

  - : Meldet die Ladezeit von Elementen.

    Die Instanz des Eintrags ist ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt.

- `event`

  - : Meldet Latenzen von Ereignissen.

    Die Instanz des Eintrags ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `first-input`

  - : Meldet die {{Glossary("First_Input_Delay", "First Input Delay")}} (FID).

    Die Instanz des Eintrags ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `largest-contentful-paint`

  - : Meldet das größte Rendering eines Elements auf dem Bildschirm.

    Die Instanz des Eintrags ist ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt.

- `layout-shift`

  - : Meldet die Layout-Stabilität von Webseiten basierend auf den Bewegungen der Elemente auf der Seite.

    Die Instanz des Eintrags ist ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt.

- `long-animation-frame`

  - : Meldet Instanzen von [langen Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Instanz des Eintrags ist ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt.

- `longtask`

  - : Meldet Instanzen von langen Aufgaben.

    Die Instanz des Eintrags ist ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt.

- `mark`

  - : Meldet Ihre eigenen benutzerdefinierten Performance-Markierungen.

    Die Instanz des Eintrags ist ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

- `measure`

  - : Meldet Ihre eigenen benutzerdefinierten Performance-Maßnahmen.

    Die Instanz des Eintrags ist ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt.

- `navigation`

  - : Meldet das Timing der Dokumentennavigation.

    Die Instanz des Eintrags ist ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt.

- `paint`

  - : Meldet wichtige Momente der Dokumenten-Rendering während des Seitenladevorgangs (erste Zeichnung, erste inhaltsreiche Zeichnung).

    Die Instanz des Eintrags ist ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt.

- `resource`

  - : Meldet Timing-Informationen für Ressourcen in einem Dokument.

    Die Instanz des Eintrags ist ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt.

- `taskattribution`

  - : Meldet die Art der Arbeit, die maßgeblich zu der langen Aufgabe beigetragen hat.

    Die Instanz des Eintrags ist ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt.

- `visibility-state`

  - : Meldet das Timing von Änderungen des Sichtbarkeitsstatus der Seite, d.h. wenn ein Tab von Vordergrund zu Hintergrund wechselt oder umgekehrt.

    Die Instanz des Eintrags ist ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt.

## Beispiele

### Filtern von Performance-Einträgen nach Typ

Die `entryType`-Eigenschaft kann nützlich sein, wenn spezifische Performance-Einträge herausgefiltert werden sollen. Zum Beispiel möchten Sie vielleicht alle Skript-Ressourcen überprüfen, daher würden Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

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

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, die es ermöglichen, Performance-Einträge direkt nach Typ abzurufen. Sie benötigen nicht unbedingt die `entryType`-Eigenschaft dafür, stattdessen können Sie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Außerdem, wenn Sie mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten, nimmt die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode ein Array von `entryTypes` in ihrem Optionsobjekt an, bei dem Sie entscheiden können, welche Typen von Einträgen beobachtet werden sollen.

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

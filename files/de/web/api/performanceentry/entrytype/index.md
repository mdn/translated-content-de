---
title: "PerformanceEntry: entryType-Eigenschaft"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Die schreibgeschützte **`entryType`**-Eigenschaft gibt einen String zurück, der den Typ der Leistungsmetrik angibt, die dieser Eintrag darstellt.

Alle unterstützten `entryTypes` sind mittels der statischen Eigenschaft {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Einige Subtypen haben mehr als einen `entryType`.

- `element`

  - : Bericht über die Ladezeit von Elementen.

    Die Eintragsinstanz wird ein {{domxref("PerformanceElementTiming")}}-Objekt sein.

- `event`

  - : Bericht über Ereignisverzögerungen.

    Die Eintragsinstanz wird ein {{domxref("PerformanceEventTiming")}}-Objekt sein.

- `first-input`

  - : Bericht über die {{Glossary("first input delay")}} (FID).

    Die Eintragsinstanz wird ein {{domxref("PerformanceEventTiming")}}-Objekt sein.

- `largest-contentful-paint`

  - : Bericht über das größte Paint, das ein Element auf dem Bildschirm ausgelöst hat.

    Die Eintragsinstanz wird ein {{domxref("LargestContentfulPaint")}}-Objekt sein.

- `layout-shift`

  - : Bericht über die Stabilität des Layouts von Webseiten basierend auf Bewegungen der Elemente auf der Seite.

    Die Eintragsinstanz wird ein {{domxref("LayoutShift")}}-Objekt sein.

- `long-animation-frame`

  - : Bericht über Instanzen von [langen Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Die Eintragsinstanz wird ein {{domxref("PerformanceLongAnimationFrameTiming")}}-Objekt sein.

- `longtask`

  - : Bericht über Instanzen von langen Aufgaben.

    Die Eintragsinstanz wird ein {{domxref("PerformanceLongTaskTiming")}}-Objekt sein.

- `mark`

  - : Bericht über eigene benutzerdefinierte Leistungsmarker.

    Die Eintragsinstanz wird ein {{domxref("PerformanceMark")}}-Objekt sein.

- `measure`

  - : Bericht über eigene benutzerdefinierte Leistungsmaße.

    Die Eintragsinstanz wird ein {{domxref("PerformanceMeasure")}}-Objekt sein.

- `navigation`

  - : Bericht über die Navigationszeit des Dokuments.

    Die Eintragsinstanz wird ein {{domxref("PerformanceNavigationTiming")}}-Objekt sein.

- `paint`

  - : Bericht über Schlüsselmomente der Dokumentenwiedergabe (erster Paint, erster inhaltlicher Paint) während des Seitenladens.

    Die Eintragsinstanz wird ein {{domxref("PerformancePaintTiming")}}-Objekt sein.

- `resource`

  - : Bericht über Zeitinformationen für Ressourcen in einem Dokument.

    Die Eintragsinstanz wird ein {{domxref("PerformanceResourceTiming")}}-Objekt sein.

- `taskattribution`

  - : Bericht über den Typ der Arbeit, der wesentlich zur langen Aufgabe beigetragen hat.

    Die Eintragsinstanz wird ein {{domxref("TaskAttributionTiming")}}-Objekt sein.

- `visibility-state`

  - : Bericht über die Zeitänderungen des Sichtbarkeitsstatus der Seite, also wann ein Tab vom Vordergrund in den Hintergrund oder umgekehrt wechselt.

    Die Eintragsinstanz wird ein {{domxref("VisibilityStateEntry")}}-Objekt sein.

## Beispiele

### Filterung von Leistungs-Einträgen nach Typ

Die `entryType`-Eigenschaft kann nützlich sein, wenn bestimmte Leistungs-Einträge gefiltert werden sollen. Beispielsweise könnten Sie alle Skriptressourcen überprüfen, indem Sie nach einem `entryType` von `"resource"` und einem {{domxref("PerformanceResourceTiming.initiatorType", "initiatorType")}} von `"script"` filtern.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Leistungs-Einträge nach Typ abrufen

Sowohl {{domxref("Performance")}} als auch {{domxref("PerformanceObserver")}} bieten Methoden, die es Ihnen ermöglichen, Leistungs-Einträge direkt nach Typ abzurufen. Sie benötigen nicht unbedingt die `entryType`-Eigenschaft dafür, stattdessen können Sie {{domxref("Performance.getEntriesByType()")}} oder {{domxref("PerformanceObserverEntryList.getEntriesByType()")}} verwenden.

Auch beim Beobachten mit einem {{domxref("PerformanceObserver")}} nimmt die {{domxref("PerformanceObserver.observe", "observe()")}}-Methode ein Array von `entryTypes` in ihrem Optionsobjekt entgegen, bei dem Sie entscheiden können, welche Eintragstypen beobachtet werden sollen.

```js
// Loggen Sie alle Ressourceneinträge zu diesem Zeitpunkt
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s duration: ${entry.duration}`);
});

// Version mit PerformanceObserver
// Loggen Sie alle Ressourceneinträge, wenn sie verfügbar sind
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

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
- {{domxref("Performance.getEntriesByType()")}}
- {{domxref("PerformanceObserverEntryList.getEntriesByType()")}}

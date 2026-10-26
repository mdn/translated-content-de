---
title: "PerformanceEntry: Eigenschaft entryType"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`entryType`** gibt einen String zurück, der angibt, welchen Typ von Leistungsmetrik dieser Eintrag repräsentiert.

Alle unterstützten `entryTypes` sind über die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Untertyp des `PerformanceEntry`-Objekts ab. Einige Untertypen haben mehr als einen `entryType`.

- `container`
  - : Meldet die Renderzeit von Elementgruppen innerhalb eines Containers.

    Der Eintrag ist ein [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Objekt.

- `element`
  - : Meldet die Ladezeit von Elementen.

    Der Eintrag ist ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt.

- `event`
  - : Meldet Ereignislatenzen.

    Der Eintrag ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `first-input`
  - : Meldet den {{Glossary("First_Input_Delay", "First Input Delay")}} (FID).

    Der Eintrag ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `interaction-contentful-paint`
  - : Meldet den größten Paint, den ein Element nach einer Interaktion auf dem Bildschirm ausgelöst hat.

    Der Eintrag ist ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt.

- `largest-contentful-paint`
  - : Meldet den größten Paint, den ein Element auf dem Bildschirm ausgelöst hat.

    Der Eintrag ist ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt.

- `layout-shift`
  - : Meldet die Layout-Stabilität von Webseiten anhand der Bewegungen der Elemente auf der Seite.

    Der Eintrag ist ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt.

- `long-animation-frame`
  - : Meldet Instanzen von [langen Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame).

    Der Eintrag ist ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt.

- `longtask`
  - : Meldet Instanzen lang andauernder Aufgaben.

    Der Eintrag ist ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt.

- `mark`
  - : Meldet selbst definierte Leistungsmarkierungen.

    Der Eintrag ist ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

- `measure`
  - : Meldet selbst definierte Leistungsmessungen.

    Der Eintrag ist ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt.

- `navigation`
  - : Meldet Zeitinformationen zur Dokumentnavigation.

    Der Eintrag ist ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt.

- `paint`
  - : Meldet wichtige Zeitpunkte beim Rendern des Dokuments (First Paint, First Contentful Paint) während des Ladens der Seite.

    Der Eintrag ist ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt.

- `resource`
  - : Meldet Zeitinformationen zu Ressourcen in einem Dokument.

    Der Eintrag ist ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt.

- `soft-navigation`
  - : Meldet Paints, die auf dem Bildschirm ausgelöst werden, nachdem eine Benutzerinteraktion und eine URL-Aktualisierung eine {{Glossary("soft_navigation", "Soft Navigation")}} ausgelöst haben.

    Der Eintrag ist ein [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Objekt.

- `taskattribution`
  - : Meldet die Art der Arbeit, die wesentlich zur lang andauernden Aufgabe beigetragen hat.

    Der Eintrag ist ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt.

- `visibility-state`
  - : Meldet den Zeitpunkt von Änderungen des Sichtbarkeitszustands einer Seite, also wann ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

    Der Eintrag ist ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt.

## Beispiele

### Leistungseinträge nach Typ filtern

Die Eigenschaft `entryType` kann nützlich sein, um bestimmte Leistungseinträge herauszufiltern. Wenn Sie beispielsweise alle Skriptressourcen prüfen möchten, können Sie nach einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"` suchen.

```js
const scriptResources = performance
  .getEntries()
  .filter(
    (entry) =>
      entry.entryType === "resource" && entry.initiatorType === "script",
  );
console.log(scriptResources);
```

### Leistungseinträge nach Typ abrufen

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) stellen Methoden bereit, mit denen Sie Leistungseinträge direkt nach Typ abrufen können. Dafür benötigen Sie die Eigenschaft `entryType` nicht unbedingt. Stattdessen können Sie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Wenn Sie Einträge mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten, akzeptiert die Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) außerdem ein Array von `entryTypes` in ihrem Optionsobjekt. Damit können Sie festlegen, welche Eintragstypen beobachtet werden sollen.

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

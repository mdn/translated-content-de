---
title: "PerformanceEntry: Eigenschaft entryType"
short-title: entryType
slug: Web/API/PerformanceEntry/entryType
l10n:
  sourceCommit: edc9ab5479d1253d9edd93bfe90dd1d100605c26
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`entryType`** gibt einen String zurück, der den Typ der Leistungsmessung angibt, für die dieser Eintrag steht.

Alle unterstützten `entryTypes` sind über die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verfügbar.

## Wert

Ein String. Der Rückgabewert hängt vom Subtyp des `PerformanceEntry`-Objekts ab. Manche Subtypen haben mehr als einen `entryType`.

- `container`
  - : Gibt die Rendering-Zeit von Elementgruppen innerhalb eines Containers an.

    Der Eintrag ist ein [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)-Objekt.

- `element`
  - : Gibt die Ladezeit von Elementen an.

    Der Eintrag ist ein [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)-Objekt.

- `event`
  - : Gibt Ereignislatenzen an.

    Der Eintrag ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `first-input`
  - : Gibt den {{Glossary("First_Input_Delay", "First Input Delay")}} (FID) an.

    Der Eintrag ist ein [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Objekt.

- `interaction-contentful-paint`
  - : Gibt den größten Paint an, den ein Element nach einer Interaktion auf dem Bildschirm ausgelöst hat.

    Der Eintrag ist ein [`InteractionContentfulPaint`](/de/docs/Web/API/InteractionContentfulPaint)-Objekt.

- `largest-contentful-paint`
  - : Gibt den größten Paint an, den ein Element auf dem Bildschirm ausgelöst hat.

    Der Eintrag ist ein [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)-Objekt.

- `layout-shift`
  - : Gibt die Layoutstabilität von Webseiten anhand der Bewegungen der Elemente auf der Seite an.

    Der Eintrag ist ein [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Objekt.

- `long-animation-frame`
  - : Gibt Vorkommen von [langen Animationsframes (LoAFs)](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#what_is_a_long_animation_frame) an.

    Der Eintrag ist ein [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekt.

- `longtask`
  - : Gibt Vorkommen lang andauernder Aufgaben an.

    Der Eintrag ist ein [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Objekt.

- `mark`
  - : Gibt Ihre benutzerdefinierten Leistungsmarkierungen an.

    Der Eintrag ist ein [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekt.

- `measure`
  - : Gibt Ihre benutzerdefinierten Leistungsmessungen an.

    Der Eintrag ist ein [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)-Objekt.

- `navigation`
  - : Gibt Zeitmessdaten für die Dokumentnavigation an.

    Der Eintrag ist ein [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Objekt.

- `paint`
  - : Gibt wichtige Zeitpunkte beim Rendern des Dokuments während des Seitenladens an (First Paint, First Contentful Paint).

    Der Eintrag ist ein [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)-Objekt.

- `resource`
  - : Gibt Zeitmessdaten für Ressourcen in einem Dokument an.

    Der Eintrag ist ein [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Objekt.

- `soft-navigation`
  - : Gibt Paints an, die auf dem Bildschirm ausgelöst werden, nachdem eine Benutzerinteraktion und eine URL-Aktualisierung eine {{Glossary("soft_navigation", "Soft Navigation")}} ausgelöst haben.

    Der Eintrag ist ein [`PerformanceSoftNavigation`](/de/docs/Web/API/PerformanceSoftNavigation)-Objekt.

- `taskattribution`
  - : Gibt an, welche Art von Arbeit wesentlich zu einer lang andauernden Aufgabe beigetragen hat.

    Der Eintrag ist ein [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Objekt.

- `visibility-state`
  - : Gibt die Zeitpunkte an, zu denen sich der Sichtbarkeitsstatus der Seite ändert, also wann ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

    Der Eintrag ist ein [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)-Objekt.

## Beispiele

### Leistungseinträge nach Typ filtern

Die Eigenschaft `entryType` kann hilfreich sein, wenn Sie bestimmte Leistungseinträge herausfiltern möchten. Wenn Sie beispielsweise alle Skriptressourcen prüfen möchten, suchen Sie nach Einträgen mit einem `entryType` von `"resource"` und einem [`initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) von `"script"`.

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

Sowohl [`Performance`](/de/docs/Web/API/Performance) als auch [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) bieten Methoden, mit denen Sie Leistungseinträge direkt nach Typ abrufen können. Dafür benötigen Sie die Eigenschaft `entryType` nicht unbedingt. Stattdessen können Sie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) oder [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType) verwenden.

Wenn Sie Einträge mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten, können Sie außerdem der Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) über ihr Optionsobjekt ein Array von `entryTypes` übergeben und so festlegen, welche Eintragstypen beobachtet werden sollen.

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

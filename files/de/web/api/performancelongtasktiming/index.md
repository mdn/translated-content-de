---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: c9b973e5cf1f5d5b282eb4eb49cddcc044ce7e2b
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongTaskTiming`** Interface liefert Informationen über Tasks, die den UI-Thread für 50 Millisekunden oder länger blockieren.

## Beschreibung

Lange Tasks, die den Hauptthread für 50 ms oder mehr blockieren, verursachen unter anderem folgende Probleme:

- Verzögerte {{Glossary("Time_to_interactive", "Time to Interactive")}} (TTI).
- Hohe/variable Eingabelatenz.
- Hohe/variable Ereignisverarbeitungslatenz.
- Stotternde Animationen und Scrollen.

Ein langer Task ist jede ununterbrochene Periode, in der der Haupt-UI-Thread für 50 ms oder länger beschäftigt ist. Häufige Beispiele umfassen:

- Lang laufende Ereignishandler.
- Aufwendige Neuberechnungen des Layouts und andere Neurenderungen.
- Arbeiten, die der Browser zwischen verschiedenen Durchläufen der Event-Schleife erledigt und die mehr als 50 ms dauern.

Lange Tasks beziehen sich auf den "verantwortlichen Browsing-Kontext-Container" oder kurz "den Container", das ist die oberste Seite, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}}, in dem der Task stattfand.

Für Tasks, die nicht innerhalb der obersten Seite stattfinden, und um herauszufinden, welcher Container verantwortlich für den langen Task ist, bietet das [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Interface die Eigenschaften `containerId`, `containerName` und `containerSrc`, die mehr Informationen über die Quelle des Tasks geben können.

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Langtask-Timing-Performance-Einträge und klassifiziert sie wie folgt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen Beginn und Ende des Tasks mit einer Genauigkeit von 1 ms darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Strings zurück, der sich auf den Browsing-Kontext oder Frame bezieht, der dem langen Task zugeschrieben werden kann:
    - `"cross-origin-ancestor"`
    - `"cross-origin-descendant"`
    - `"cross-origin-unreachable"`
    - `"multiple-contexts"`
    - `"same-origin-ancestor"`
    - `"same-origin-descendant"`
    - `"same-origin"`
    - `"self"`
    - `"unknown"`
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der der Task begonnen hat.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Sequenz von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Instanzen zurück.

## Instanz-Methoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Überschreibt die [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON) Methode, um eine JSON-Darstellung des `PerformanceLongTaskTiming` Objekts zurückzugeben.

## Beispiele

### Abrufen von langen Tasks

Um Informationen über Langtask-Timing zu erhalten, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Instanz und rufen dann deren [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) Methode auf, wobei Sie `"longtask"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType) Option übergeben. Sie müssen auch `buffered` auf `true` setzen, um Zugriff auf lange Tasks zu erhalten, die der Benutzeragent während der Konstruktion des Dokuments gepuffert hat. Der Rückruf des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceLongTaskTiming` Objekten aufgerufen, die Sie analysieren können.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "longtask", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)

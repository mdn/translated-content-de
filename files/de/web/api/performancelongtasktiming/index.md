---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`PerformanceLongTaskTiming`**-Schnittstelle liefert Informationen über Aufgaben, die den UI-Thread für 50 Millisekunden oder länger blockieren.

## Beschreibung

Lange Aufgaben, die den Haupt-Thread für 50 ms oder mehr blockieren, verursachen unter anderem folgende Probleme:

- Verzögerung beim {{Glossary("Time_to_interactive", "Time to interactive")}} (TTI).
- Hohe/variable Eingabelatenz.
- Hohe/variable Ereignisverarbeitungslatenz.
- Ruckelige Animationen und Scrollen.

Eine lange Aufgabe ist jeder ununterbrochene Zeitraum, in dem der Haupt-UI-Thread für 50 ms oder länger beschäftigt ist. Häufige Beispiele umfassen:

- Lang laufende Ereignishandler.
- Teure Reflows und andere Neurenderungen.
- Arbeiten des Browsers zwischen verschiedenen Veranstaltungszyklus-Durchläufen, die 50 ms überschreiten.

Lange Aufgaben beziehen sich auf den "verantwortlichen Browsing-Kontext-Container", oder kurz "den Container", welcher die übergeordnete Seite, das {{HTMLElement("iframe")}}, das {{HTMLElement("embed")}} oder das {{HTMLElement("object")}} ist, innerhalb dessen die Aufgabe auftrat.

Für Aufgaben, die nicht innerhalb der obersten Seite auftreten und um herauszufinden, welcher Container für die lange Aufgabe verantwortlich ist, bietet die [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Schnittstelle die Eigenschaften `containerId`, `containerName` und `containerSrc`, die möglicherweise weitere Informationen über die Quelle der Aufgabe liefern.

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Langaufgaben-Timing-Leistungseintragstypen, indem sie sie wie folgt qualifiziert:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen Beginn und Ende der Aufgabe mit einer Granularität von 1 ms darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Strings zurück, der auf den Browsing-Kontext oder das Frame verweist, das der langen Aufgabe zugeschrieben werden kann:
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
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit darstellt, zu der die Aufgabe begonnen hat.

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Sequenz von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Instanzen zurück.

## Instanzmethoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongTaskTiming`-Objekts zurück.

## Beispiele

### Lange Aufgaben erfassen

Um Informationen zum Timing von langen Aufgaben zu erhalten, erstellen Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) und rufen dann die Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf, wobei Sie `"longtask"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben. Sie müssen auch `buffered` auf `true` setzen, um Zugang zu langen Aufgaben zu erhalten, die das Benutzergerät beim Erstellen des Dokuments gepuffert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

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

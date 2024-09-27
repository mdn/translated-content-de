---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 9eb4ca6c8f9f5855b7ab94d06025c0561ebdeea9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongTaskTiming`** Interface liefert Informationen über Aufgaben, die den UI-Thread für 50 Millisekunden oder länger blockieren.

## Beschreibung

Lange Aufgaben, die den Haupt-Thread für 50ms oder länger blockieren, verursachen unter anderem folgende Probleme:

- Verzögerte [Time to interactive](/de/docs/Glossary/Time_to_interactive) (TTI).
- Hohe/variable Eingabeverzögerung.
- Hohe/variable Ereignisverarbeitungsverzögerung.
- Ruckelige Animationen und Scrollen.

Eine lange Aufgabe ist jede ununterbrochene Periode, in der der Haupt-UI-Thread für 50ms oder länger beschäftigt ist. Häufige Beispiele sind:

- Langlaufende Ereignishandler.
- Aufwändige Neuzuweisungen und andere Neurenderings.
- Arbeiten, die der Browser zwischen verschiedenen Umdrehungen der Ereignisschleife erledigt, die über 50ms hinausgehen.

Lange Aufgaben beziehen sich auf den "Schuldigen Browser-Kontext-Container", oder kurz "der Container", welcher die oberste Seite, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} ist, in dem die Aufgabe stattfand.

Für Aufgaben, die nicht innerhalb der obersten Seite auftreten und um herauszufinden, welcher Container für die lange Aufgabe verantwortlich ist, bietet das [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Interface die `containerId`, `containerName` und `containerSrc` Eigenschaften, die möglicherweise mehr Informationen über die Quelle der Aufgabe liefern.

## Vererbung

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Leistungseintragstypen von langen Aufgaben durch Qualifizierung wie folgt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die verstrichene Zeit zwischen Beginn und Ende der Aufgabe mit einer Granularität von 1ms darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Zeichenfolgen zurück, die sich auf den Browsing-Kontext oder Frame beziehen, der der langen Aufgabe zugeschrieben werden kann:
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
  - : Gibt ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, das die Zeit darstellt, zu der die Aufgabe gestartet wurde.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Sequenz von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) Instanzen zurück.

## Instanzmethoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongTaskTiming` Objekts zurück.

## Beispiele

### Abrufen von langen Aufgaben

Um Informationen über das Timing langer Aufgaben zu erhalten, erstellen Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) und rufen dann die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) Methode auf, wobei sie `"longtask"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType) Option übergeben. Sie müssen auch `buffered` auf `true` setzen, um Zugang zu langen Aufgaben zu erhalten, die der Benutzeragent beim Erstellen des Dokuments gepuffert hat. Der Rückruf des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

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

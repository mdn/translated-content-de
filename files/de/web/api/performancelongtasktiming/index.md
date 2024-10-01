---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 9eb4ca6c8f9f5855b7ab94d06025c0561ebdeea9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Das **`PerformanceLongTaskTiming`**-Interface bietet Informationen über Aufgaben, die den UI-Thread für 50 Millisekunden oder länger blockieren.

## Beschreibung

Lange Aufgaben, die den Hauptthread für 50 ms oder mehr blockieren, verursachen unter anderem folgende Probleme:

- Verzögerte {{Glossary("Time_to_interactive", "Time to interactive")}} (TTI).
- Hohe/variable Eingabeverzögerung.
- Hohe/variable Ereignisverarbeitungsverzögerung.
- Ruckelige Animationen und Scrollen.

Eine lange Aufgabe ist jeder ununterbrochene Zeitraum, in dem der Haupt-UI-Thread 50 ms oder länger beschäftigt ist. Häufige Beispiele sind:

- Lange laufende Ereignis-Handler.
- Aufwendige Neuformatierungen und andere Neurenderings.
- Arbeiten, die der Browser zwischen verschiedenen Durchläufen der Ereignisschleife durchführt und die 50 ms überschreiten.

Lange Aufgaben beziehen sich auf den "verantwortlichen Browsing-Kontextcontainer" oder kurz "den Container", der die oberste Ebene der Seite, {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} oder {{HTMLElement("object")}} ist, in dem die Aufgabe aufgetreten ist.

Für Aufgaben, die nicht innerhalb der obersten Seitenebene auftreten und zum Ermitteln, welcher Container für die lange Aufgabe verantwortlich ist, bietet das [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Interface die Eigenschaften `containerId`, `containerName` und `containerSrc`, welche mehr Informationen über die Quelle der Aufgabe liefern können.

## Vererbung

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für lange Aufgaben-Timing-Performance-Entry-Typen, indem sie wie folgt qualifiziert werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen dem Start und dem Ende der Aufgabe mit einer Granularität von 1 ms darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Strings zurück, der auf den Browsing-Kontext oder Frame verweist, der der langen Aufgabe zugeordnet werden kann:
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
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt darstellt, an dem die Aufgabe begonnen hat.

Dieses Interface unterstützt auch die folgenden Eigenschaften:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Sequenz von Instanzen des [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) zurück.

## Instanz-Methoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `PerformanceLongTaskTiming`-Objekts zurück.

## Beispiele

### Lange Aufgaben abrufen

Um Informationen zur Timing von langen Aufgaben zu erhalten, erstellen Sie eine Instanz von [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) und rufen dann die Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf, wobei `"longtask"` als Wert der [`type`](/de/docs/Web/API/PerformanceEntry/entryType)-Option übergeben wird. Sie müssen auch `buffered` auf `true` setzen, um Zugriff auf lange Aufgaben zu erhalten, die der User Agent beim Erstellen des Dokuments zwischengespeichert hat. Der Callback des `PerformanceObserver`-Objekts wird dann mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

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

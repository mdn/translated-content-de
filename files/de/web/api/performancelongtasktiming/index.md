---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{SeeCompatTable}}{{APIRef("Performance API")}}{{non-standard_header}}

Die Schnittstelle **`PerformanceLongTaskTiming`** liefert Informationen über Aufgaben, die den UI-Thread mindestens 50 Millisekunden lang beanspruchen.

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge vom Typ „long task“ mit den folgenden Festlegungen:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die verstrichene Zeit zwischen Beginn und Ende der Aufgabe mit einer Auflösung von 1 ms angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen der folgenden Strings zurück, der den Browsing-Kontext oder Frame bezeichnet, dem die lang andauernde Aufgabe zugeordnet werden kann:
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
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Aufgabe begann.

Diese Schnittstelle unterstützt außerdem die folgende Eigenschaft:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt eine Sequenz von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Instanzen zurück.

## Instanzmethoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}} {{non-standard_inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceLongTaskTiming`-Objekt repräsentiert. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Lang andauernde Aufgaben, die den Hauptthread mindestens 50 ms lang blockieren, verursachen unter anderem:

- Eine verzögerte {{Glossary("Time_to_interactive", "Time to Interactive")}} (TTI).
- Eine hohe oder schwankende Eingabelatenz.
- Eine hohe oder schwankende Latenz bei der Ereignisverarbeitung.
- Ruckelnde Animationen und ruckelndes Scrollen.

Eine lang andauernde Aufgabe ist jeder ununterbrochene Zeitraum, in dem der Haupt-UI-Thread mindestens 50 ms lang beschäftigt ist. Häufige Beispiele sind:

- Lang laufende Event-Handler.
- Aufwendige Reflows und andere erneute Render-Vorgänge.
- Arbeiten, die der Browser zwischen verschiedenen Durchläufen des Event-Loops ausführt und die länger als 50 ms dauern.

Lang andauernde Aufgaben beziehen sich auf den „culprit browsing context container“, kurz „Container“. Dabei handelt es sich um die oberste Seite oder das {{HTMLElement("iframe")}}-, {{HTMLElement("embed")}}- oder {{HTMLElement("object")}}-Element, in dem die Aufgabe aufgetreten ist.

Für Aufgaben, die nicht innerhalb der obersten Seite auftreten, stellt die Schnittstelle [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) die Eigenschaften `containerId`, `containerName` und `containerSrc` bereit. Diese können helfen, den für die lang andauernde Aufgabe verantwortlichen Container zu bestimmen und weitere Informationen über die Quelle der Aufgabe liefern.

## Beispiele

### Lang andauernde Aufgaben erfassen

Um Timing-Informationen zu lang andauernden Aufgaben zu erhalten, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen Sie deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf. Übergeben Sie dabei `"longtask"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Setzen Sie außerdem `buffered` auf `true`, um Zugriff auf lang andauernde Aufgaben zu erhalten, die der User-Agent während des Aufbaus des Dokuments zwischengespeichert hat. Der Callback des `PerformanceObserver`-Objekts wird anschließend mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

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

---
title: PerformanceLongTaskTiming
slug: Web/API/PerformanceLongTaskTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die Schnittstelle **`PerformanceLongTaskTiming`** liefert Informationen über Aufgaben, die den UI-Thread mindestens 50 Millisekunden lang belegen.

## Beschreibung

Lange Aufgaben, die den Haupt-Thread mindestens 50 ms lang blockieren, verursachen unter anderem:

- Eine verzögerte {{Glossary("Time_to_interactive", "Time to interactive")}} (TTI).
- Hohe oder schwankende Latenz bei Eingaben.
- Hohe oder schwankende Latenz bei der Ereignisverarbeitung.
- Ruckelnde Animationen und Bildlaufvorgänge.

Eine lange Aufgabe ist jeder ununterbrochene Zeitraum, in dem der Haupt-UI-Thread mindestens 50 ms lang beschäftigt ist. Häufige Beispiele sind:

- Lange laufende Event-Handler.
- Aufwendige Reflows und andere Neudarstellungen.
- Arbeiten, die der Browser zwischen verschiedenen Durchläufen der Ereignisschleife ausführt und die länger als 50 ms dauern.

Lange Aufgaben beziehen sich auf den „culprit browsing context container“, kurz „Container“. Das ist die Seite auf oberster Ebene oder das {{HTMLElement("iframe")}}-, {{HTMLElement("embed")}}- oder {{HTMLElement("object")}}-Element, innerhalb dessen die Aufgabe aufgetreten ist.

Bei Aufgaben, die nicht innerhalb der Seite auf oberster Ebene auftreten, hilft die Schnittstelle [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming) dabei, den für die lange Aufgabe verantwortlichen Container zu ermitteln. Ihre Eigenschaften `containerId`, `containerName` und `containerSrc` können weitere Informationen über den Ursprung der Aufgabe liefern.

`PerformanceLongTaskTiming` erbt von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry).

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge vom Typ „long task timing“ und legt sie wie folgt fest:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die zwischen Beginn und Ende der Aufgabe verstrichene Zeit mit einer Auflösung von 1 ms angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt immer `"longtask"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine der folgenden Zeichenfolgen zurück, die den Browsing-Kontext oder Frame bezeichnet, dem die lange Aufgabe zugeordnet werden kann:
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
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der den Zeitpunkt angibt, zu dem die Aufgabe begonnen hat.

Diese Schnittstelle unterstützt außerdem die folgenden Eigenschaften:

- [`PerformanceLongTaskTiming.attribution`](/de/docs/Web/API/PerformanceLongTaskTiming/attribution) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Folge von [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)-Instanzen zurück.

## Instanzmethoden

- [`PerformanceLongTaskTiming.toJSON()`](/de/docs/Web/API/PerformanceLongTaskTiming/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceLongTaskTiming`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Lange Aufgaben erfassen

Um Zeitinformationen zu langen Aufgaben abzurufen, erstellen Sie eine [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Instanz und rufen Sie deren Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) auf. Übergeben Sie dabei `"longtask"` als Wert der Option [`type`](/de/docs/Web/API/PerformanceEntry/entryType). Setzen Sie außerdem `buffered` auf `true`, um Zugriff auf lange Aufgaben zu erhalten, die der User-Agent während der Erstellung des Dokuments zwischengespeichert hat. Die Callback-Funktion des `PerformanceObserver`-Objekts wird anschließend mit einer Liste von `PerformanceLongTaskTiming`-Objekten aufgerufen, die Sie analysieren können.

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

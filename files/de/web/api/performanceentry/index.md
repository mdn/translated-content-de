---
title: PerformanceEntry
slug: Web/API/PerformanceEntry
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceEntry`**-Objekt kapselt eine einzelne Leistungsmetrik, die Teil der Leistungszeitleiste des Browsers ist.

Die Performance-API bietet integrierte Metriken, die spezialisierte Unterklassen von `PerformanceEntry` sind. Dies umfasst Einträge für das Laden von Ressourcen, Ereignistiming, {{Glossary("first input delay")}} (FID) und mehr.

Ein Leistungs-Eintrag kann auch erstellt werden, indem die Methoden {{domxref("Performance.mark()")}} oder {{domxref("Performance.measure()")}} zu einem bestimmten Zeitpunkt in einer Anwendung aufgerufen werden. Dies ermöglicht es Ihnen, eigene Metriken zur Leistungszeitleiste hinzuzufügen.

Die Instanzen von `PerformanceEntry` werden immer eine der folgenden Unterklassen sein:

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongAnimationFrameTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformanceNavigationTiming")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
- {{domxref("PerformanceScriptTiming")}}
- {{domxref("PerformanceServerTiming")}}
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## Instanzeigenschaften

- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Ein String, der den Namen eines Leistungs-Eintrags darstellt. Der Wert hängt vom Untertyp ab.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Ein String, der den Typ der Leistungsmetrik darstellt. Zum Beispiel "`mark`", wenn {{domxref("PerformanceMark")}} verwendet wird.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Startzeit für die Leistungsmetrik darstellt.
- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Dauer des Leistungs-Eintrags darstellt.

## Instanzmethoden

- {{domxref("PerformanceEntry.toJSON","PerformanceEntry.toJSON()")}}
  - : Gibt eine JSON-Darstellung des `PerformanceEntry`-Objekts zurück.

## Beispiel

### Arbeiten mit Leistungs-Einträgen

Das folgende Beispiel erstellt `PerformanceEntry`-Objekte, die von den Typen {{domxref("PerformanceMark")}} und {{domxref("PerformanceMeasure")}} sind.
Die Unterklassen `PerformanceMark` und `PerformanceMeasure` erben die Eigenschaften `duration`, `entryType`, `name` und `startTime` von `PerformanceEntry` und setzen sie auf ihre entsprechenden Werte.

```js
// An einem Ort im Code platzieren, der das Login startet
performance.mark("login-started");

// An einem Ort im Code platzieren, der das Login beendet
performance.mark("login-finished");

// Login-Dauer messen
performance.measure("login-duration", "login-started", "login-finished");

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

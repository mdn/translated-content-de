---
title: Timing von Langzeit-Animationsframes
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("Performance API")}}

**Langzeit-Animationsframes** (LoAFs) können das Benutzererlebnis einer Website beeinträchtigen. Sie können zu langsamen Benutzeroberflächenaktualisierungen führen, was scheinbar unresponsive Steuerungen und {{Glossary("Jank", "ruckelige")}} (oder nicht-flüssige) Animationseffekte und Scrollvorgänge zur Folge hat, die Frustration bei den Benutzern verursachen. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht Entwicklern, Informationen über Langzeit-Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.

## Was ist ein Langzeit-Animationsframe?

Ein Langzeit-Animationsframe — oder LoAF — ist ein Rendering-Update, das um mehr als 50 ms verzögert ist.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies erfordert, dass alle erforderlichen Aktualisierungen zeitnah dargestellt werden und alles vermieden wird, was diese Aktualisierungen blockieren könnte. Googles [Interaktion bis zum nächsten Paint (INP)](https://web.dev/articles/inp)-Metrik empfiehlt beispielsweise, dass eine Website innerhalb von 200 ms auf Seiteninteraktionen (wie Klicks oder Tastenanschläge) reagieren sollte.

Für flüssige Animationen müssen Aktualisierungen schnell erfolgen — für eine Animation, die mit flüssigen 60 Frames pro Sekunde läuft, sollte jeder Animationsframe innerhalb von etwa 16 ms (1000/60) gerendert werden.

## Beobachten von Langzeit-Animationsframes

Um Informationen über LoAFs zu erhalten und Problemmacher zu identifizieren, können Sie Performance-Timeline-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines standardmäßigen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere Langzeit-Animationsframes können ebenfalls abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"`-Einträge 200 beträgt, nach denen neue Einträge verworfen werden, daher wird die Verwendung des `PerformanceObserver`-Ansatzes empfohlen.

## Untersuchung von `"long-animation-frame"`-Einträgen

Performance-Timeline-Einträge, die mit einem Typ von `"long-animation-frame"` zurückgegeben werden, werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte dargestellt. Dieses Objekt verfügt über eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum Langzeit-Animationsframe beigetragen hat.

Das folgende ist ein vollständiges Beispiel für einen `"long-animation-frame"`-Performance-Eintrag, der ein einzelnes Skript enthält:

```js
({
  blockingDuration: 0,
  duration: 60,
  entryType: "long-animation-frame",
  firstUIEventTimestamp: 11801.099999999627,
  name: "long-animation-frame",
  renderStart: 11858.800000000745,
  scripts: [
    {
      duration: 45,
      entryType: "script",
      executionStart: 11803.199999999255,
      forcedStyleAndLayoutDuration: 0,
      invoker: "DOMWindow.onclick",
      invokerType: "event-listener",
      name: "script",
      pauseDuration: 0,
      sourceURL: "https://web.dev/js/index-ffde4443.js",
      sourceFunctionName: "myClickHandler",
      sourceCharPosition: 17796,
      startTime: 11803.199999999255,
      window: {
        // …Window object…
      },
      windowAttribution: "self",
    },
  ],
  startTime: 11802.400000000373,
  styleAndLayoutStart: 11858.800000000745,
});
```

Neben den standardmäßig von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eintrag zurückgegebenen Daten enthält dieser folgende bemerkenswerte Punkte:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hoch priorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs genommen werden, die eine `Dauer` von mehr als `50 ms` haben, `50 ms` von jedem abgezogen werden, die Renderzeit zur längsten Aufgabendauer addiert wird, und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit des ersten UI-Ereignisses — wie einem Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsframes verarbeitet wurde. Beachten Sie, dass dieser Zeitstempel vor dem Beginn dieses Animationsframes liegen kann, wenn es eine Verzögerung zwischen dem Auftreten des Ereignisses und seiner Verarbeitung gab.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Rendering-Zyklus kennzeichnet, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Rückrufe, Stil- und Layout-Berechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Rückrufe umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums kennzeichnet, der für Stil- und Layout-Berechnungen für den aktuellen Animationsframe aufgewendet wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Eigenschaften:
  - : Eigenschaften, die Informationen über das/die Skript(e) bereitstellen, das/die zum LoAF beigetragen hat/haben:
    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, an dem die Skriptkompilierung abgeschlossen wurde und die Ausführung begann.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Zeit angibt, die das Skript mit der Verarbeitung erzwungener Layouts/Stile verbracht hat. Siehe [Layout-Thrashing vermeiden](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (zum Beispiel: `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und der Skripteintrittstyp (zum Beispiel: `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen (zum Beispiel: `Window.alert()`-Aufrufe oder synchrone `XMLHttpRequest`s) aufgewendet hat.
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)
      - : Werte, die jeweils die Skriptzeichenposition, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stapels) und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel: Wenn ein Ereignishandler eine obere Funktion aufruft, die dann eine langsame Unterfunktion aufruft, werden die `source*`-Felder den Namen und den Ort der oberen Funktion melden, nicht die langsame Unterfunktion. Das liegt an den Leistungsgründen — ein vollständiger Stack-Trace ist kostspielig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) ein [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder dem obersten Dokument oder einem `<iframe>`) beschreibt, in dem dieses Script ausgeführt wurde, und einem Verweis auf sein [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Die Skript-Zuordnung wird nur für Skripte bereitgestellt, die im Haupt-Thread einer Seite ausgeführt werden, einschließlich gleich-origin `<iframe>`s. Cross-Origin `<iframe>`s, [Webarbeiter](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code haben jedoch keine Skript-Zuordnung in Langzeit-Animationsframes, selbst wenn sie die Dauer eines Frames beeinflussen.

## Berechnung von Zeitstempeln

Die Zeitstempel, die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Klasse bereitgestellt werden, ermöglichen die Berechnung weiterer nützlicher Zeiten für den Langzeit-Animationsframe:

| Zeitraum                    | Berechnung                                                               |
| --------------------------- | ------------------------------------------------------------------------ |
| Startzeit                   | `startTime`                                                              |
| Endzeit                     | `startTime + duration`                                                   |
| Arbeitsdauer                | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                 | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Renderdauer vor Layout      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Renderstil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Funktionsüberprüfung der Long Animation Frames API

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Berichterstattung von LoAFs über einem bestimmten Schwellenwert

Obwohl LoAF-Schwellenwerten fix auf 50 ms liegen, kann dies zu einem großen Volumen von Berichten führen, wenn Sie mit der Arbeit an der Leistungsoptimierung beginnen. Anfangs möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert berichten und den Schwellenwert schrittweise verringern, wenn Sie die Website verbessern und die schlimmsten LoAFs beseitigen. Der folgende Code kann verwendet werden, um LoAFs über einem bestimmten Schwellenwert zur weiteren Analyse zu erfassen (zum Beispiel, indem sie an einen Analyse-Endpunkt gesendet werden):

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > REPORTING_THRESHOLD_MS) {
      // Example here logs to console; real code could send to analytics endpoint
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Langzeit-Animationsframe-Einträge können recht groß sein; überlegen Sie daher sorgfältig, welche Daten aus jedem Eintrag an Analysen gesendet werden sollen. Beispielsweise könnten die Zusammenfassungszeiten der Einträge und die Skript-URLs für Ihre Bedürfnisse ausreichen.

### Beobachtung der längsten Animationsframes

Möglicherweise möchten Sie Daten nur über die längsten Animationsframes sammeln (zum Beispiel die Top 5 oder 10), um das zu sammelnde Datenvolumen zu reduzieren. Dies könnte folgendermaßen gehandhabt werden:

```js
MAX_LOAFS_TO_CONSIDER = 10;
let longestBlockingLoAFs = [];

const observer = new PerformanceObserver((list) => {
  longestBlockingLoAFs = longestBlockingLoAFs
    .concat(list.getEntries())
    .sort((a, b) => b.blockingDuration - a.blockingDuration)
    .slice(0, MAX_LOAFS_TO_CONSIDER);
});
observer.observe({ type: "long-animation-frame", buffered: true });

// Report data on visibilitychange event
document.addEventListener("visibilitychange", () => {
  // Example here logs to console; real code could send to analytics endpoint
  console.log(longestBlockingLoAFs);
});
```

### Berichterstattung von Langzeit-Animationsframes mit Interaktionen

Eine weitere nützliche Technik ist das Senden der größten LoAF-Einträge, bei denen während des Frames eine Interaktion aufgetreten ist, was durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)-Werts erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge über 150 ms, bei denen während des Frames eine Interaktion aufgetreten ist. Sie können einen höheren oder niedrigeren Wert wählen, je nach Ihren Anforderungen.

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (
      entry.duration > REPORTING_THRESHOLD_MS &&
      entry.firstUIEventTimestamp > 0
    ) {
      // Example here logs to console; real code could send to analytics endpoint
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### Identifizierung häufiger Skriptmuster in Langzeit-Animationsframes

Eine alternative Strategie besteht darin, zu untersuchen, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition berichtet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themen oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten häufiger Skripte (oder Drittanbieterherkünfte) in LoAFs könnten summiert und zurückgemeldet werden, um häufige Mitverursacher von LoAFs auf einer Seite oder einer Sammlung von Seiten zu identifizieren.

Zum Beispiel, um Skripte nach URL zu gruppieren und die Gesamtdauer anzuzeigen:

```js
const observer = new PerformanceObserver((list) => {
  const allScripts = list.getEntries().flatMap((entry) => entry.scripts);
  const scriptSource = [
    ...new Set(allScripts.map((script) => script.sourceURL)),
  ];
  const scriptsBySource = scriptSource.map((sourceURL) => [
    sourceURL,
    allScripts.filter((script) => script.sourceURL === sourceURL),
  ]);
  const processedScripts = scriptsBySource.map(([sourceURL, scripts]) => ({
    sourceURL,
    count: scripts.length,
    totalDuration: scripts.reduce(
      (subtotal, script) => subtotal + script.duration,
      0,
    ),
  }));
  processedScripts.sort((a, b) => b.totalDuration - a.totalDuration);
  // Example here logs to console; real code could send to analytics endpoint
  console.table(processedScripts);
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

## Vergleich mit der Long Tasks API

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) eingeführt. Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — sie bieten Informationen über {{Glossary("Long_task", "lange Aufgaben")}}, die den Haupt-Thread für 50 ms oder mehr blockieren.

Die Verringerung der Anzahl langer Aufgaben, die auf Ihrer Website auftreten, ist nützlich, weil lange Aufgaben Reaktionsprobleme verursachen können. Zum Beispiel, wenn ein Benutzer auf eine Schaltfläche klickt, während der Haupt-Thread mit einer langen Aufgabe beschäftigt ist, wird die UI-Reaktion auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Es wird allgemein empfohlen, lange Aufgaben in mehrere kleinere Aufgaben zu zerlegen, sodass wichtige Interaktionen dazwischen bearbeitet werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animationsframe könnte aus mehreren Aufgaben bestehen, die unter die 50 ms-Schwelle fallen, dennoch aber in der Summe den Haupt-Thread blockieren. Die Long Animation Frames API löst dies, indem sie den Animationsframe als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Eintragstyp bietet weniger Informationen als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Typ — er kann Ihnen den Container nennen, in dem eine lange Aufgabe aufgetreten ist, aber nicht das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet eine unvollständige Ansicht, da sie einige wichtige Aufgaben ausschließen kann. Einige Aktualisierungen (Rendering zum Beispiel) geschehen in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung, die diese Aktualisierung verursacht hat, enthalten sein sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben versagen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erklärer (2024)

---
title: Long Animation Frame Timing
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: a396b67c90885e19659fbd770504c6335438fd3f
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächen-Updates verursachen, was zu scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckeligen")}} (oder nicht-flüssigen) animierten Effekten und Scroll Bewegungen führt, was zu Benutzerfrustration führen kann. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie Sie die Long Animation Frames API verwenden können.

## Was ist ein langer Animationsframe?

Ein langer Animationsframe — oder LoAF — ist ein Rendering-Update, das um mehr als 50 ms verzögert wird.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet, dass alle Updates, die der Benutzer benötigt, rechtzeitig ausgeführt werden und alles vermieden wird, was diese Updates blockieren könnte. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp) Metrik empfiehlt beispielsweise, dass eine Website innerhalb von 200 ms auf Seiteninteraktionen (wie Klicks oder Tastatureingaben) reagieren sollte.

Für flüssige Animationen müssen die Updates schnell sein — damit eine Animation mit 60 Bildern pro Sekunde flüssig läuft, sollte jeder Animationsframe in etwa 16 ms (1000/60) gerendert werden.

## Beobachtung langer Animationsframes

Um Informationen über LoAFs zu erhalten und Probleme zu identifizieren, können Sie Leistungstimeline-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mit einem standardmäßigen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animationsframes können auch abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"` Eintragstypen bei 200 liegt, wonach neue Einträge verworfen werden. Daher wird empfohlen, den `PerformanceObserver`-Ansatz zu verwenden.

## Untersuchen von `"long-animation-frame"` Einträgen

Leistungstimeline-Einträge, die mit einem Typ von `"long-animation-frame"` zurückkommen, werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Objekte dargestellt. Dieses Objekt hat eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsframe beigetragen hat.

Das folgende ist eine JSON-Darstellung eines vollständigen `"long-animation-frame"` Leistungseintragsbeispiels, das ein einzelnes Skript enthält:

```json
{
  "blockingDuration": 0,
  "duration": 60,
  "entryType": "long-animation-frame",
  "firstUIEventTimestamp": 11801.099999999627,
  "name": "long-animation-frame",
  "renderStart": 11858.800000000745,
  "scripts": [
    {
      "duration": 45,
      "entryType": "script",
      "executionStart": 11803.199999999255,
      "forcedStyleAndLayoutDuration": 0,
      "invoker": "DOMWindow.onclick",
      "invokerType": "event-listener",
      "name": "script",
      "pauseDuration": 0,
      "sourceURL": "https://web.dev/js/index-ffde4443.js",
      "sourceFunctionName": "myClickHandler",
      "sourceCharPosition": 17796,
      "startTime": 11803.199999999255,
      "window": [Window object],
      "windowAttribution": "self"
    }
  ],
  "startTime": 11802.400000000373,
  "styleAndLayoutStart": 11858.800000000745
}
```

Neben den standardmäßigen Daten, die von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eintrag zurückgegeben werden, enthält dieses folgende bemerkenswerte Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Zeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs mit einer `duration` von mehr als `50ms` genommen, `50ms` von jeder abgezogen, die Renderzeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsframes verarbeitet wurde. Beachten Sie, dass dieser Zeitstempel vor dem Start dieses Animationsframes liegen kann, wenn es eine Verzögerung zwischen dem Ereignis und dessen Verarbeitung gab.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Renderzyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufe umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums angibt, der für Stil- und Layoutberechnungen des aktuellen Animationsframes aufgewendet wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Eigenschaften:

  - : Eigenschaften, die Informationen über das/die Skript(e) liefern, das/die zum LoAF beigetragen hat/haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Skriptkompilierung abgeschlossen wurde und die Ausführung begann.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die totale Zeit in Millisekunden angibt, die das Skript für die Verarbeitung erzwungener Layouts/Stile aufgewendet hat. Siehe [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenkettenwerte, die angeben, wie das Skript aufgerufen wurde (z. B. `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und den Skripteintrittstyp (z. B. `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (z. B. Aufrufe von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Zeichenposition des Skripts, den Funktionsnamen und die Skript-URL repräsentieren. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stacks), und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel, wenn ein Ereignishandler eine obere Ebene Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und die Position der oberen Ebene Funktion melden, nicht die langsame Unterfunktion. Dies geschieht aus Leistungsgründen — ein vollständiger Stack-Trace ist aufwendig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers beschreibt (d.h. entweder das Top-Layout-Dokument oder ein {{htmlelement("iframe")}}), in dem dieses Skript ausgeführt wurde, zur obersten Dokumentebene und ein Verweis auf sein [`Window`](/de/docs/Web/API/Window) Objekt.

    > [!NOTE]
    > Skripattribution wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleich-origin `<iframe>`s. Jedoch werden cross-origin `<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterung](/de/docs/Mozilla/Add-ons/WebExtensions) Code keine Skripattribution in langen Animationsframes haben, selbst wenn sie die Dauer eines solchen beeinflussen.

## Berechnung von Zeitstempeln

Die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Klasse bereitgestellten Zeitstempel ermöglichen die Berechnung weiterer nützlicher Zeiten für den langen Animationsframe:

| Timing                       | Berechnung                                                               |
| ---------------------------- | ------------------------------------------------------------------------ |
| Startzeit                    | `startTime`                                                              |
| Endzeit                      | `startTime + duration`                                                   |
| Arbeitsdauer                 | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                  | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Vorlayout-Renderdauer        | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Stil- und Layout-Renderdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Erkennung der Long Animation Frames API Funktionalität

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Melden von LoAFs über einem bestimmten Schwellenwert

Während LoAF-Schwellenwerte auf 50 ms festgelegt sind, kann dies zu einer großen Anzahl von Berichten führen, wenn Sie mit der Leistungsoptimierung beginnen. Anfangs möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise senken, während Sie die Seite verbessern und die schlechtesten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert zu erfassen für eine weitere Analyse (zum Beispiel, indem sie zurück zu einem Analytik-Endpunkt gesendet werden):

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

Lange Animationsframe-Einträge können ziemlich groß sein; überlegen Sie daher sorgfältig, welche Daten von jedem Eintrag an die Analytik gesendet werden sollten. Beispielsweise könnten die Zusammenfassungszeiten der Einträge und die Skript-URLs für das, was Sie benötigen, ausreichend sein.

### Beobachtung der längsten Animationsframes

Möglicherweise möchten Sie nur Daten zu den längsten Animationsframes sammeln (z. B. die obersten 5 oder 10), um das zu sammelnde Datenvolumen zu reduzieren. Dies könnte folgendermaßen behandelt werden:

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

### Melden langer Animationsframes mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Frames eine Interaktion aufgetreten ist, was durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) Wertes erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge größer als 150 ms, bei denen während des Frames eine Interaktion aufgetreten ist. Sie könnten abhängig von Ihren Anforderungen einen höheren oder niedrigeren Wert wählen.

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

### Identifizierung häufiger Skriptmuster in langen Animationsframes

Eine alternative Strategie besteht darin, zu untersuchen, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skriptes und/oder Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themen oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten von häufigen Skripten (oder Drittanbieterherkünften) in LoAFs könnten aufsummiert und zurückgemeldet werden, um die häufigen Beitragsleister zu LoAFs auf einer Site oder einer Sammlung von Sites zu identifizieren.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) vorweggenommen. Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — sie liefern Informationen über {{Glossary("Long_task", "lange Aufgaben")}}, die den Hauptthread für 50 ms oder mehr blockieren.

Die Reduzierung der Anzahl der auf Ihrer Website auftretenden langen Aufgaben ist nützlich, da lange Aufgaben Reaktionsprobleme verursachen können. Zum Beispiel, wenn ein Benutzer auf eine Schaltfläche klickt, während der Hauptthread mit einer langen Aufgabe beschäftigt ist, wird die UI-Antwort auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Herkömmliches Wissen besagt, dass lange Aufgaben in mehrere kleinere Aufgaben aufgeteilt werden sollten, damit wichtige Interaktionen dazwischen gehandhabt werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animationsframe könnte aus mehreren Aufgaben bestehen, die unter dem 50ms-Schwellenwert liegen, aber dennoch gemeinsam den Hauptthread blockieren. Die Long Animation Frames API löst dieses Problem, indem sie den Animationsframe als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) Eintragstyp liefert begrenztere Informationen als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Typ — er kann Ihnen den Container angeben, in dem eine lange Aufgabe auftrat, aber nicht das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet einen unvollständigen Überblick, da sie einige wichtige Aufgaben ausschließen kann. Einige Updates (z. B. das Rendern) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung, die dieses Update verursacht hat, betrachtet werden sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimieren langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben versagen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erklärer (2024)

---
title: Zeitdauer langer Animationsbilder
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsbilder** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächen-Updates (UI-Updates) verursachen, was zu scheinbar nicht ansprechenden Steuerungen und {{Glossary("Jank", "ruckelnden")}} (oder nicht flüssigen) Animationseffekten und Bildläufen führt, was die Benutzer frustriert. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsbilder zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.

## Was ist ein langes Animationsbild?

Ein langes Animationsbild – oder LoAF – ist ein Rendering-Update, das über 50 ms hinaus verzögert wird.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet das rechtzeitige Malen aller vom Benutzer benötigten Updates und das Vermeiden von allem, was diese Updates blockieren könnte. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp) Metrik empfiehlt beispielsweise, dass eine Website auf Seiteninteraktionen (wie Klicks oder Tastendrücke) innerhalb von 200 ms reagieren sollte.

Für flüssige Animationen müssen die Aktualisierungen schnell erfolgen – damit eine Animation mit gleichmäßigen 60 Bildern pro Sekunde läuft, sollte jedes Animationsbild innerhalb von etwa 16 ms (1000/60) gerendert werden.

## Beobachtung langer Animationsbilder

Um Informationen über LoAFs zu erhalten und Störer zu identifizieren, können Sie die Leistungszeitachse-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines standardmäßigen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animationsbilder können auch abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"`-Eintragstypen 200 beträgt, danach werden neue Einträge verworfen, daher wird die Verwendung des `PerformanceObserver`-Ansatzes empfohlen.

## Untersuchung der `"long-animation-frame"`-Einträge

Leistungszeitachse-Einträge vom Typ `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte dargestellt. Dieses Objekt hat eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsbild beigetragen hat.

Das folgende ist eine JSON-Darstellung eines vollständigen `"long-animation-frame"`-Leistungseintrag-Beispiels, das ein einzelnes Skript enthält:

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

Neben den standardmäßigen Daten, die von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eintrag zurückgegeben werden, enthält dies folgende bemerkenswerte Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Zeit in Millisekunden angibt, in der der Haupt-Thread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs, die eine `duration` von mehr als `50ms` haben, erfasst, `50ms` von jeder subtrahiert, die Renderzeit mit der längsten Aufgabenzeit addiert und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt des ersten UI-Ereignisses – wie ein Maus- oder Tastaturereignis – angibt, das in der aktuellen Animationsbild hinzugefügt wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Rendering-Zyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Callbacks und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callbacks umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Beginn des Zeitraums für Stil- und Layoutberechnungen für das aktuelle Animationsbild angibt.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Eigenschaften:

  - : Eigenschaften, die Informationen über die Skripte liefern, die zum LoAF beigetragen haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, an dem die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript mit der Verarbeitung erzwungener Layout-/Stilberechnungen verbracht hat. Siehe [Vermeiden Sie heftige Layout-Änderungen](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (z. B. `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und der Skripteintrittstyp (z. B. `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Vorgänge verbracht hat (z. B. Aufrufe von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Skriptcharakterposition, Funktionsnamen und Skript-URL repräsentieren. Es ist wichtig zu beachten, dass der gemeldete Funktionsname den "Einstiegspunkt" des Skripts darstellt (d. h. die oberste Ebene des Stacks) und nicht eine spezifische langsame Unterfunktion.

        Wenn beispielsweise ein Ereignishandler eine Top-Level-Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und Ort der Top-Level-Funktion berichten, nicht der langsamen Unterfunktion. Dies geschieht aus Leistungsgründen - ein vollständiger Stack-Trace ist aufwendig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) ein [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers beschreibt (d. h. entweder das Hauptdokument oder ein {{htmlelement("iframe")}}), in dem dieses Skript zum Hauptdokument ausgeführt wurde, und ein Verweis auf dessen [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Die Skriptattribution wird nur für Skripte bereitgestellt, die im Haupt-Thread einer Seite ausgeführt werden, einschließlich gleichberechtigter `<iframe>`s. Cross-Origin-`<iframe>`s, [Web-Worker](/de/docs/Web/API/Web_Workers_API), [Service-Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions) code werden jedoch keine Skriptattribution bei langen Animationsbildern haben, selbst wenn sie die Dauer eines Einflusses haben.

## Berechnung der Zeitstempel

Die in der Klasse [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) bereitgestellten Zeitstempel ermöglichen die Berechnung mehrerer weiterer nützlicher Zeitmessungen für das lange Animationsbild:

| Zeitmessung                    | Berechnung                                                               |
| ------------------------------ | ------------------------------------------------------------------------ |
| Startzeit                      | `startTime`                                                              |
| Endzeit                        | `startTime + duration`                                                   |
| Arbeitsdauer                   | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                    | `renderStart ? (startTime + duration) - renderStart: 0`                  |
| Render: Vor-Layout-Dauer       | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layout-Dauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Funktionserkennung der Long Animation Frames API

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Melden von LoAFs über einem bestimmten Schwellenwert

Während LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies zu einer großen Menge an Berichten führen, wenn Sie die Leistungsoptimierung erstmalig beginnen. Zu Beginn möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise verringern, während Sie die Website verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert zur weiteren Analyse zu erfassen (zum Beispiel, indem sie an einen Analyseendpunkt gesendet werden):

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

Einträge für lange Animationsbilder können ziemlich groß sein; überlegen Sie sich daher sorgfältig, welche Daten aus jedem Eintrag an Analysen gesendet werden sollen. Beispielsweise könnten die Zusammenfassungszeiten der Einträge und die Skript-URLs für Ihre Bedürfnisse ausreichend sein.

### Beobachtung der längsten Animationsbilder

Es könnte nützlich sein, nur Daten zu den längsten Animationsbildern (zum Beispiel den Top 5 oder 10) zu sammeln, um das Volumen zu reduzieren, das gesammelt werden muss. Dies könnte wie folgt gehandhabt werden:

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

### Berichten langer Animationsbilder mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Rahmens eine Interaktion stattfand, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)-Werts erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge größer als 150 ms, bei denen während des Rahmens eine Interaktion stattfand. Sie könnten je nach Ihren Bedürfnissen einen höheren oder niedrigeren Wert wählen.

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

### Identifizierung gemeinsamer Skriptmuster in langen Animationsbildern

Eine alternative Strategie besteht darin, zu betrachten, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themes oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten häufiger Skripte (oder Drittanbieter-Ursprünge) in LoAFs könnten summiert und zurückgemeldet werden, um häufige Beitragsleisten zu LoAFs über eine oder mehrere Websites zu identifizieren.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) eingeführt. Beide APIs haben einen ähnlichen Zweck und Einsatz – Informationen über {{Glossary("Long_task", "lange Aufgaben")}} zu offenbaren, die den Haupt-Thread für 50 ms oder mehr blockieren.

Das Reduzieren der Anzahl der langen Aufgaben, die auf Ihrer Website auftreten, ist nützlich, da lange Aufgaben Reaktionsfähigkeit-Probleme verursachen können. Wenn ein Benutzer beispielsweise auf eine Schaltfläche klickt, während der Haupt-Thread mit einer langen Aufgabe beschäftigt ist, wird die UI-Reaktion auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Es gilt als sinnvoll, lange Aufgaben in mehrere kleinere Aufgaben aufzuteilen, sodass wichtige Interaktionen dazwischen abgewickelt werden können.

Allerdings hat die Long Tasks API ihre Einschränkungen:

- Ein Animationsbild kann aus mehreren Aufgaben bestehen, die unter dem 50ms Schwellenwert liegen, aber dennoch den Haupt-Thread blockieren. Die Long Animation Frames API löst dies, indem sie das Animationsbild insgesamt betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Eintragstyp bietet weniger Informationen als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Typ – zum Beispiel kann er Ihnen den Container anzeigen, in dem eine lange Aufgabe auftrat, aber nicht das Skript oder die Funktion, die sie verursachte.
- Die Long Tasks API bietet einen unvollständigen Überblick, da einige wichtige Aufgaben möglicherweise ausgeschlossen werden. Einige Aktualisierungen (Rendering zum Beispiel) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorausgehenden Ausführung, die diese Aktualisierung verursacht hat, einbezogen werden sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimieren Sie lange Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben kurz greifen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erläuterung (2024)

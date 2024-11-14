---
title: Langsame Animationsrahmen-Timing
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: 3baeaa50c2a160a7e3ea3f288a820362bfc07e77
---

{{DefaultAPISidebar("Performance API")}}

**Langsame Animationsrahmen** (LoAFs) können das Benutzererlebnis einer Website beeinträchtigen. Sie können zu langsamen Benutzeroberflächenaktualisierungen führen, was scheinbar unresponsive Steuerungen und {{Glossary("Jank", "wackelige")}} (oder nicht flüssige) animierte Effekte und Scrolling zur Folge hat und zu Benutzerfrustration führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsrahmen zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.

## Was ist ein langer Animationsrahmen?

Ein langer Animationsrahmen — oder LoAF — ist ein Rendering-Update, das über 50ms verzögert ist.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet, dass Aktualisierungen rechtzeitig angepasst werden und alles vermieden wird, was diese blockieren könnte. Der Google-Indikator [Interaction to Next Paint (INP)](https://web.dev/articles/inp) empfiehlt beispielsweise, dass eine Website innerhalb von 200ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für flüssige Animationen müssen Aktualisierungen schnell erfolgen — damit eine Animation mit fließenden 60 Bildern pro Sekunde läuft, sollte jeder Animationsrahmen in etwa 16ms (1000/60) gerendert werden.

## Beobachtung von langen Animationsrahmen

Um Informationen über LoAFs zu erhalten und Probleme zu identifizieren, können Sie Performance-Zeitleisteneinträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mit einem Standard-[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) überwachen:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animationsrahmen können auch abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"`-Eintragstypen 200 beträgt, danach werden neue Einträge verworfen, daher wird empfohlen, den `PerformanceObserver` Ansatz zu verwenden.

## Untersuchung von `"long-animation-frame"` Einträgen

Performance-Zeitleisteneinträge mit einem Typ von `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Objekte dargestellt. Dieses Objekt hat eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsrahmen beigetragen hat.

Im Folgenden finden Sie eine JSON-Darstellung eines vollständigen `"long-animation-frame"` Performance-Eintragsbeispiels, das ein einzelnes Skript enthält:

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

Über die Standarddaten, die durch einen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eintrag zurückgegeben werden, hinaus enthält dies die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF, die eine `duration` von mehr als `50ms` haben, genommen, `50ms` von jedem subtrahiert, die Renderzeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsrahmens in die Warteschlange gestellt wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Startzeit des Rendering-Zyklus angibt, einschließlich [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufen, Stil- und Layoutberechnung, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufen und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufen.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Beginn des Zeitraums angibt, der für Stil- und Layoutberechnungen für den aktuellen Animationsrahmen aufgewendet wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Eigenschaften:

  - : Eigenschaften, die Informationen über das/die Skript(e) liefern, das/die zum LoAF beigetragen haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Skriptkompilierung abgeschlossen wurde und die Ausführung begann.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Gesamtzeit in Millisekunden angibt, die das Skript für die erzwungene Layout-/Stilverarbeitung aufgewendet hat. Siehe [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (z. B. `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und der Einstiegspunkt-Typ des Skripts (z. B. `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Gesamtzeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (z. B. Aufrufe von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchroner [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Skriptzeichenposition, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts ist (d. h. die oberste Ebene des Stapels) und nicht eine spezifische langsame Subfunktion.

        Wenn beispielsweise ein Ereignishandler eine obere Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und die Lage der oberen Funktion berichten und nicht der langsamen Unterfunktion. Dies geschieht aus Performancegründen — ein vollständiger Stack-Trace ist kostspielig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein Aufzählungswert, der die Beziehung des Containers beschreibt (d. h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem dieses Skript ausgeführt wurde, zum obersten Dokument, sowie ein Verweis auf sein [`Window`](/de/docs/Web/API/Window) Objekt.

    > [!NOTE]
    > Skript-Attribution wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleichnamiger `<iframe>`s. Cross-Origin `<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code werden jedoch keine Skript-Attribution in langen Animationsrahmen haben, auch wenn sie die Dauer eines solchen Rahmens beeinflussen.

## Berechnung von Zeitstempeln

Die in der Klasse [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) bereitgestellten Zeitstempel ermöglichen es, mehrere weitere wichtige Zeiten für den langen Animationsrahmen zu berechnen:

| Timing                        | Berechnung                                                               |
| ----------------------------- | ------------------------------------------------------------------------ |
| Startzeit                     | `startTime`                                                              |
| Endzeit                       | `startTime + duration`                                                   |
| Arbeitsdauer                  | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                   | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Render: VOR-Layout-Dauer      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Erkennung der Long Animation Frames API-Funktion

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Berichterstattung von LoAFs über einem bestimmten Schwellenwert

Während LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies bei der ersten Optimierungsarbeit zu einem großen Volumen an Berichten führen. Zunächst möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise verringern, während Sie die Seite verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert für weitere Analysen einzufangen (z. B. durch Rücksendung an ein Analyse-Endpunkt):

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

Lange Animationsrahmeneinträge können ziemlich groß sein; überlegen Sie daher sorgfältig, welche Daten von jedem Eintrag an die Analyse gesendet werden sollten. Beispielsweise könnten die zusammengefassten Zeiten der Einträge und die Skript-URLs ausreichend sein für Ihre Anforderungen.

### Beobachtung der längsten Animationsrahmen

Sie möchten möglicherweise nur Daten über die längsten Animationsrahmen sammeln (zum Beispiel die Top 5 oder 10), um das Volumen der zu erfassenden Daten zu reduzieren. Dies könnte folgendermaßen gehandhabt werden:

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

### Berichterstattung von langen Animationsrahmen mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Rahmens eine Interaktion aufgetreten ist, was durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) Werts erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge, die größer als 150ms sind und bei denen während des Rahmens eine Interaktion aufgetreten ist. Sie könnten einen höheren oder niedrigeren Wert je nach Ihren Anforderungen wählen.

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

### Identifikation von häufigen Skriptmustern in langen Animationsrahmen

Eine alternative Strategie besteht darin, zu untersuchen, welche Skripte in LoAF-Einträgen am häufigsten erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist in Fällen nützlich, in denen Themen oder Plugins, die Performanceprobleme verursachen, auf mehreren Seiten verwendet werden.

Die Ausführungszeiten von häufigen Skripten (oder Drittanbieterquellen) in LoAFs könnten zusammengefasst und zurückgemeldet werden, um gemeinsame Beitragsleister zu LoAFs über eine Seite oder eine Sammlung von Seiten zu identifizieren.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) eingeführt. Beide APIs haben eine ähnliche Zielsetzung und Nutzung — das Offenlegen von Informationen über {{Glossary("Long_task", "lange Aufgaben")}}, die den Hauptthread 50ms oder länger blockieren.

Die Reduzierung der Anzahl von langen Aufgaben, die auf Ihrer Website auftreten, ist nützlich, weil lange Aufgaben zu Reaktionsproblemen führen können. Beispielsweise wird die UI-Reaktion auf einen Klick verzögert, wenn ein Benutzer eine Taste drückt, während der Hauptthread mit einer langen Aufgabe beschäftigt ist, bis die lange Aufgabe abgeschlossen ist. Die konventionelle Weisheit besteht darin, lange Aufgaben in mehrere kleinere Aufgaben aufzuteilen, sodass wichtige Interaktionen dazwischen bearbeitet werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animationsrahmen könnte aus mehreren Aufgaben bestehen, die unterhalb des 50ms-Schwellenwerts liegen, aber dennoch kollektiv den Hauptthread blockieren. Die Long Animation Frames API löst dies, indem sie den Animationsrahmen als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) Eintragstyp gibt weniger Informationen preis als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Typ — er kann Ihnen z. B. den Container nennen, in dem eine lange Aufgabe stattfand, nicht jedoch das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet eine unvollständige Sicht, da sie einige wichtige Aufgaben möglicherweise ausschließt. Einige Updates (Rendering, zum Beispiel) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorausgegangenen Ausführung einbezogen werden sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimize long tasks](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Where long tasks fall short](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erklärung (2024)

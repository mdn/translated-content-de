---
title: Lange Animationsrahmen-Timing
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: c46f0b3d68f5b4ed87a571bbdbce75244c5fe333
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsrahmen** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächenaktualisierungen verursachen, was zu scheinbar unempfindlichen Kontrollen und {{Glossary("Jank", "ruckelnden")}} (oder nicht glatten) Animationseffekten und Scrollings führt, was wiederum zu Nutzerfrustration führt. Das [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsrahmen zu erhalten und ihre Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man das Long Animation Frames API verwendet.

## Was ist ein langer Animationsrahmen?

Ein langer Animationsrahmen — oder LoAF — ist ein Rendering-Update, dessen Verzögerung über 50ms hinausgeht.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet, dass notwendige Aktualisierungen durch den Benutzer rechtzeitig gezeichnet werden und alles vermieden wird, was diese Updates blockieren könnte. Zum Beispiel empfiehlt die Google-Metrik [Interaction to Next Paint (INP)](https://web.dev/articles/inp), dass eine Website innerhalb von 200ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für flüssige Animationen müssen Updates schnell sein — damit eine Animation mit einer flüssigen Rate von 60 Bildern pro Sekunde laufen kann, sollte jeder Animationsrahmen innerhalb von etwa 16ms (1000/60) gerendert werden.

## Beobachtung von langen Animationsrahmen

Um Informationen über LoAFs zu erhalten und die Übeltäter zu identifizieren, können Sie Performance-Timeline-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines Standard-[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animationsrahmen können ebenfalls abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"`-Eintragstypen 200 beträgt, nach denen neue Einträge verworfen werden, daher wird die Verwendung der `PerformanceObserver`-Methode empfohlen.

## Untersuchung von `"long-animation-frame"`-Einträgen

Performance-Timeline-Einträge, die mit einem Typ von `"long-animation-frame"` zurückgegeben werden, werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte dargestellt. Dieses Objekt verfügt über eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsrahmen beigetragen hat.

Das folgende Beispiel zeigt einen vollständigen `"long-animation-frame"`-Performance-Eintrag, der ein einzelnes Skript enthält:

```js
({
  blockingDuration: 0,
  duration: 60,
  entryType: "long-animation-frame",
  firstUIEventTimestamp: 11801.099999999627,
  name: "long-animation-frame",
  paintTime: 11862.400000000373,
  presentationTime: 11863.199999999255,
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

Neben den standardmäßig von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) zurückgegebenen Daten enthält dies die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Dauer in Millisekunden angibt, während der der Main-Thread daran gehindert war, auf Aufgaben mit hoher Priorität, wie Benutzereingaben, zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs erfasst werden, die eine `duration` von mehr als `50ms` haben, `50ms` von jeder subtrahiert und die Renderzeit zur längsten Aufgabenzeit addiert wird, und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des ersten UI-Ereignisses angibt — wie ein Maus- oder Tastaturereignis —, das während des aktuellen Animationsrahmens verarbeitet wird. Beachten Sie, dass dieser Zeitstempel vor dem Start dieses Animationsrahmens liegen kann, wenn es eine Verzögerung zwischen dem Ereignis und seiner Verarbeitung gab.
- [`paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als die Renderphase endete und der Animationsrahmen begann.
- [`presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als das UI-Update tatsächlich auf dem Bildschirm gezeichnet wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Rendering-Zyklus einschließlich der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks, der Stil- und Layoutberechnung, der [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Callbacks und der [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callbacks angibt.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums angibt, der für Stil- und Layoutberechnungen für den aktuellen Animationsrahmen aufgewendet wird.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Eigenschaften:
  - : Eigenschaften, die Informationen über das/die Skript(e) liefern, das/die zum LoAF beigetragen hat/haben:
    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Zeit angibt, die vom Skript für erzwungene Layout-/Stilverarbeitung aufgewendet wurde. Siehe [Vermeiden Sie Layout-Optimierung](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenkettenwerte, die angeben, wie das Skript aufgerufen wurde (zum Beispiel `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und den Skripteintragstyp (zum Beispiel `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die gesamte Zeit, in Millisekunden, angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (zum Beispiel, [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Abfragen).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)
      - : Werte, die die Zeichenposition des Skripts, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. das oberste Niveau des Stapels) und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel, wenn ein Ereignishandler eine Top-Level-Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, melden die `source*`-Felder den Namen und Standort der Top-Level-Funktion, nicht der langsamen Unterfunktion. Dies geschieht aus Leistungsgründen — eine vollständige Stack-Trace ist kostspielig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) ein [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein aufgezählter Wert, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}), in dem dieses Skript ausgeführt wurde, zum Top-Level-Dokument beschreibt, und ein Verweis auf dessen [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Skriptattribution wird nur für Skripte bereitgestellt, die im Main-Thread einer Seite laufen, auch für gleichoriginäre `<iframe>`s. Allerdings werden fremdoriginäre `<iframe>`s, [Web-Arbeiter](/de/docs/Web/API/Web_Workers_API), [Service-Arbeiter](/de/docs/Web/API/Service_Worker_API), und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code in langen Animationsrahmen keine Skriptattribution haben, selbst wenn sie die Dauer eines beeinflussen.

## Berechnung von Zeitstempeln

Die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Klasse bereitgestellten Zeitstempel ermöglichen die Berechnung weiterer nützlicher Zeitangaben für den langen Animationsrahmen:

| Zeitangabe                    | Berechnung                                                               |
| ----------------------------- | ------------------------------------------------------------------------ |
| Startzeit                     | `startTime`                                                              |
| Endzeit                       | `startTime + duration` (oder `paintTime`/`presentationTime`)             |
| Arbeitsdauer                  | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                   | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Render: Vor-Layout-Dauer      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Erkennung von Long Animation Frames API-Funktion

Sie können testen, ob das Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Melden von LoAFs über einem bestimmten Schwellenwert

Während die LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies zu einem großen Volumen von Berichten führen, wenn Sie mit der Arbeit zur Leistungsoptimierung beginnen. Anfangs möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise verringern, wenn Sie die Seite verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert für eine weitere Analyse zu erfassen (zum Beispiel, indem sie an einen Analyse-Endpunkt gesendet werden):

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > REPORTING_THRESHOLD_MS) {
      // Example here logs to console; real code could send to analytics endpoint
      console.log(entry.paintTime);
      console.log(entry.presentationTime);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Lange Animationsrahmeneinträge können recht groß sein; überlegen Sie deshalb sorgfältig, welche Daten von jedem Eintrag an die Analyse gesendet werden sollten. Beispielsweise könnten die zusammenfassenden Zeiten der Einträge und die Skript-URLs ausreichen.

### Beobachtung der längsten Animationsrahmen

Vielleicht möchten Sie nur Daten zu den längsten Animationsrahmen sammeln (z. B. die obersten 5 oder 10), um das zu erfassende Datenvolumen zu reduzieren. Dies könnte wie folgt gehandhabt werden:

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

### Melden langer Animationsrahmen mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Rahmens eine Interaktion stattfand, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)-Werts festgestellt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge über 150ms, bei denen während des Rahmens eine Interaktion stattfand. Sie könnten je nach Bedarf einen höheren oder niedrigeren Wert wählen.

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

### Identifizierung gemeinsamer Skriptmuster in langen Animationsrahmen

Eine alternative Strategie ist es, zu betrachten, welche Skripte am häufigsten in LoAF-Einträgen vorkommen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist in Fällen nützlich, in denen Themes oder Plugins, die Leistungsprobleme verursachen, über mehrere Websites hinweg verwendet werden.

Die Ausführungszeiten gemeinsamer Skripte (oder Drittanbieterquellen) in LoAFs könnten summiert und zurückgemeldet werden, um gemeinsame Beiträger zu LoAFs über eine Website oder eine Sammlung von Websites hinweg zu identifizieren.

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

## Vergleich mit dem Long Tasks API

Das Long Animation Frames API wurde vom [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) vorangestellt. Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — sie stellen Informationen über {{Glossary("Long_task", "lange Aufgaben")}} bereit, die den Main-Thread für 50ms oder mehr blockieren.

Die Reduzierung der Anzahl langer Aufgaben, die auf Ihrer Website auftreten, ist sinnvoll, da lange Aufgaben Reaktionsprobleme verursachen können. Wenn ein Benutzer beispielsweise auf eine Schaltfläche klickt, während der Main-Thread mit einer langen Aufgabe beschäftigt ist, wird die UI-Reaktion auf den Klick erst erfolgen, wenn die lange Aufgabe abgeschlossen ist. Die allgemeine Weisheit besteht darin, lange Aufgaben in mehrere kleinere Aufgaben zu unterteilen, damit wichtige Interaktionen dazwischen gehandhabt werden können.

Das Long Tasks API hat jedoch seine Einschränkungen:

- Ein Animationsrahmen könnte aus mehreren Aufgaben bestehen, die unter die 50ms-Schwelle fallen, aber dennoch zusammen den Main-Thread blockieren. Das Long Animation Frames API löst dies, indem es den Animationsrahmen als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`]-Eintragstyp bietet begrenztere Informationen als der [`PerformanceLongAnimationFrameTiming`]-Typ — er kann Ihnen den Container anzeigen, in dem eine lange Aufgabe aufgetreten ist, aber nicht das Skript oder die Funktion, die dies verursacht hat, zum Beispiel.
- Das Long Tasks API bietet eine unvollständige Ansicht, da es einige wichtige Aufgaben ausschließen kann. Einige Updates (z.B. Rendering) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorangegangenen Ausführung einbezogen werden sollten, die dieses Update verursacht hat, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimieren langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben zu kurz kommen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erklärer (2024)

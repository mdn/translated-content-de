---
title: Timing für lange Animations-Frames
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animations-Frames** (LoAFs) können das Benutzererlebnis einer Website beeinträchtigen. Sie können langsame Benutzeroberflächen-Updates verursachen, was zu scheinbar nicht reagierenden Steuerungen und [ruckelnden](/de/docs/Glossary/Jank) (oder nicht flüssigen) animierten Effekten und Scrollbewegungen führt und letztendlich zu Benutzerfrustration. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animations-Frames zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie Sie die Long Animation Frames API nutzen können.

## Was ist ein langer Animations-Frame?

Ein langer Animations-Frame — oder LoAF — ist ein Rendering-Update, das sich um mehr als 50 ms verzögert.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet das rechtzeitige Darstellen aller vom Benutzer benötigten Updates und die Vermeidung von allem, was diese Updates blockieren könnte. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp) Metrik empfiehlt beispielsweise, dass eine Website innerhalb von 200 ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für flüssige Animationen müssen Updates schnell sein — damit eine Animation mit flüssigen 60 Bildern pro Sekunde läuft, sollte jeder Animations-Frame innerhalb von etwa 16 ms gerendert werden (1000/60).

## Beobachten von langen Animations-Frames

Um Informationen über LoAFs zu erhalten und Probleme zu identifizieren, können Sie Performance-Zeitstrahl-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines standardmäßigen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animations-Frames können auch abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"` Eintragstypen 200 beträgt, danach werden neue Einträge verworfen. Daher wird die Verwendung des `PerformanceObserver` empfohlen.

## Untersuchen von `"long-animation-frame"` Einträgen

Performance-Zeitstrahl-Einträge mit einem Typ von `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Objekte dargestellt. Dieses Objekt verfügt über eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten enthält, von denen jedes Informationen über ein Skript bereitstellt, das zum langen Animations-Frame beigetragen hat.

Das folgende Beispiel zeigt eine JSON-Darstellung eines vollständigen Leistungseintrags vom Typ `"long-animation-frame"`, der ein einzelnes Skript enthält:

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

Über die standardmäßigen Daten hinaus, die durch einen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eintrag zurückgegeben werden, enthält dieser die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert wurde, auf Aufgaben mit hoher Priorität wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [Long Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs herangezogen werden, deren `duration` mehr als `50ms` beträgt, `50ms` von jedem subtrahiert, die Rendering-Zeit zur längsten Aufgabendauer addiert und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animations-Frames in die Warteschlange gestellt wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Rendering-Zyklus angibt, welcher [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufe umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums angibt, der für Stil- und Layoutberechnungen im aktuellen Animations-Frame aufgewendet wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Eigenschaften:

  - : Eigenschaften, die Informationen zu dem/den Skript(en) bereitstellen, das/die zum LoAF beigetragen hat/haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Eine [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), die die Gesamtzeit in Millisekunden angibt, die ein Skript für die erzwungene Layout-/Stilverarbeitung aufgewendet hat. Siehe [Vermeiden von Layout Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (z.B. `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und der Skript-Einstiegspunkttyp (z.B. `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript für das "Pausieren" synchroner Operationen aufgewendet hat (z.B. [`Window.alert()`](/de/docs/Web/API/Window/alert) Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Skript-Zeichenposition, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stacks) und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel, wenn ein Ereignishandler eine oberste Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und den Speicherort der obersten Funktion melden, nicht die langsame Unterfunktion. Dies erfolgt aus Leistungsgründen — ein vollständiger Stack-Trace ist aufwendig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem dieses Skript ausgeführt wurde, zum obersten Dokument beschreibt, sowie ein Verweis auf das [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Skript-Zuordnung wird nur für Skripte bereitgestellt, die im Haupt-Thread einer Seite ausgeführt werden, einschließlich gleichstammiger `<iframe>`s. Jedoch werden fremdstämmige `<iframe>`s, [Web Workers](/de/docs/Web/API/Web_Workers_API), [Service Workers](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code keine Skript-Zuordnung in langen Animations-Frames haben, selbst wenn sie die Dauer eines solchen Frames beeinflussen.

## Berechnung von Zeitstempeln

Die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Klasse bereitgestellten Zeitstempel ermöglichen verschiedene nützliche Zeitberechnungen für den langen Animations-Frame:

| Zeit                          | Berechnung                                                               |
| ----------------------------- | ------------------------------------------------------------------------ |
| Startzeit                     | `startTime`                                                              |
| Endzeit                       | `startTime + duration`                                                   |
| Arbeitsdauer                  | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                   | `renderStart ? (startTime + duration) - renderStart: 0`                  |
| Render: Vor-Layout-Dauer      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Feature-Erkennung der Long Animation Frames API

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Melden von LoAFs über einer bestimmten Schwelle

Während die LoAF-Schwellen auf 50 ms festgelegt sind, kann dies zu einer großen Anzahl von Berichten führen, wenn Sie mit der Leistungsoptimierung beginnen. Anfangs möchten Sie vielleicht LoAFs auf einem höheren Schwellenwert melden und diesen allmählich verringern, wenn Sie die Seite verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert zur weiteren Analyse zu erfassen (z. B. indem sie an einen Analyse-Endpunkt gesendet werden):

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

Lange Animations-Frame-Einträge können sehr groß sein; überlegen Sie daher sorgfältig, welche Daten von jedem Eintrag an Analytics gesendet werden sollen. Beispielsweise könnten die Zeitwerte der Einträge und die Skript-URLs ausreichend sein.

### Beobachten der längsten Animations-Frames

Möglicherweise möchten Sie nur Daten über die längsten Animations-Frames sammeln (sagen wir die Top 5 oder 10), um das zu sammelnde Datenvolumen zu reduzieren. Dies könnte wie folgt behandelt werden:

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

### Melden von langen Animations-Frames mit Interaktionen

Eine andere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Frames eine Interaktion stattfand, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) Wertes erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge größer als 150 ms, bei denen während des Frames eine Interaktion stattfand. Sie könnten je nach Bedarf einen höheren oder niedrigeren Wert wählen.

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

### Identifizieren gängiger Skriptmuster in langen Animations-Frames

Eine alternative Strategie besteht darin, zu analysieren, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themes oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten gängiger Skripte (oder von Ursprüngen Dritter) in LoAFs könnten summiert und zurückgemeldet werden, um gängige Verursacher von LoAFs auf einer Website oder einer Sammlung von Websites zu identifizieren.

Beispielsweise, um Skripte nach URL zu gruppieren und die Gesamtdauer anzuzeigen:

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

Der Long Animation Frames API ging die [Long Tasks API](https://w3c.github.io/longtasks/) voraus (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)). Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — sie geben Informationen über [lange Aufgaben](/de/docs/Glossary/Long_task) frei, die den Hauptthread 50 ms oder länger blockieren.

Die Reduzierung der Anzahl an langen Aufgaben auf Ihrer Website ist nützlich, da lange Aufgaben zu Reaktionsproblemen führen können. Wenn ein Benutzer beispielsweise auf eine Schaltfläche klickt, während der Hauptthread mit einer langen Aufgabe beschäftigt ist, wird die Benutzeroberflächenreaktion auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Eine gängige Praxis ist es, lange Aufgaben in mehrere kleinere Aufgaben aufzuteilen, damit wichtige Interaktionen dazwischen bearbeitet werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animations-Frame könnte aus mehreren Aufgaben bestehen, die unter dem 50-ms-Schwellenwert liegen, aber dennoch zusammen den Hauptthread blockieren. Die Long Animation Frames API löst dies, indem der Animations-Frame als Ganzes betrachtet wird.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) Eintragstyp bietet weniger umfassende Informationen als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Typ — er kann Ihnen den Container angeben, in dem eine lange Aufgabe stattgefunden hat, nicht jedoch das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet einen unvollständigen Überblick, da sie einige wichtige Aufgaben möglicherweise ausschließt. Einige Updates (z. B. Rendering) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung enthalten sein sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimieren von langen Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lang Aufgaben zu kurz kommen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API-Erklärer (2024)

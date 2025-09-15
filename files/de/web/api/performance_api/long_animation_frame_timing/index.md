---
title: Lange Animationsframe-Timing
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächen-Updates (UI) verursachen, was zu scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckelnden")}} (oder nicht geschmeidigen) animierten Effekten und Bildläufen führt, was Benutzer frustrieren kann. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie Sie die Long Animation Frames API verwenden.

## Was ist ein langer Animationsframe?

Ein langer Animationsframe — oder LoAF — ist ein Render-Update, das um mehr als 50 ms verzögert wird.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dazu gehört das rechtzeitige Malen aller Updates, die vom Benutzer benötigt werden, und das Vermeiden von allem, was diese Updates blockieren könnte. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp)-Metrik empfiehlt zum Beispiel, dass eine Website innerhalb von 200 ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für geschmeidige Animationen müssen Updates schnell sein — damit eine Animation mit geschmeidigen 60 Frames pro Sekunde läuft, sollte jeder Animationsframe innerhalb von etwa 16 ms (1000/60) gerendert werden.

## Beobachtung langer Animationsframes

Um Informationen über LoAFs zu erhalten und Störquellen ausfindig zu machen, können Sie Leistungstimeline-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mit einem Standard-[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

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

Beachten Sie jedoch, dass die maximale Puffergröße für `"long-animation-frame"`-Eintragstypen 200 beträgt, danach werden neue Einträge verworfen, sodass der `PerformanceObserver`-Ansatz empfohlen wird.

## Untersuchung von `"long-animation-frame"`-Einträgen

Einträge der Leistungstimeline mit einem Typ von `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte dargestellt. Dieses Objekt hat eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsframe beigetragen hat.

Das folgende ist ein vollständiges Beispiel für einen `"long-animation-frame"`-Leistungseintrag, der ein einziges Skript enthält:

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

Neben den standardmäßig von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eintrag zurückgegebenen Daten enthält dies die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert wurde, auf hoch priorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF, die eine `duration` von mehr als `50ms` haben, erfasst, `50ms` von jeder abgezogen wird, die Renderzeit zur längsten Aufgabenzeit hinzugefügt und die Ergebnisse summiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit des ersten UI-Ereignisses — wie ein Maus- oder Tastaturereignis — angibt, das während des aktuellen Animationsframes verarbeitet wird. Beachten Sie, dass dieser Zeitstempel vor dem Start dieses Animationsframes liegen kann, wenn es zwischen dem Ereigniseintritt und dessen Verarbeitung eine Verzögerung gab.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Renderzyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks, Stil- und Layoutberechnungen, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Callbacks und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callbacks umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn der Zeitspanne angibt, die für Stil- und Layoutberechnungen des aktuellen Animationsframes aufgewendet wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Eigenschaften:
  - : Eigenschaften, die Informationen über das/die Skript(e) bereitstellen, die zum LoAF beigetragen haben:
    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, an dem die Skriptkompilierung beendet und die Ausführung gestartet wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript mit der Verarbeitung gezwungener Layout-/Stiloperationen verbrachte. Siehe [Vermeidung von Layout-Fragmentierungen](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (zum Beispiel `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und den Skripteinstiegspunkt-Typ (zum Beispiel `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript für das „Pausieren“ synchroner Operationen aufgewendet hat (zum Beispiel [`Window.alert()`](/de/docs/Web/API/Window/alert) Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)
      - : Werte, die die Skriptzeichenposition, den Funktionsnamen und die Skript-URL repräsentieren. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stacks) und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel, wenn ein Ereignishandler eine Top-Level-Funktion aufruft, die eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und Standort der Top-Level-Funktion berichten, nicht der langsamen Unterfunktion. Dies geschieht aus Leistungsgründen — ein vollständiger Stack-Trace ist kostspielig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}), in dem das Skript ausgeführt wurde, zum Top-Level-Dokument beschreibt, und eine Referenz auf sein [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Skriptzuordnung wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite laufen, einschließlich gleichherkunfts-`<iframe>`s. Cross-Origin-`<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code haben jedoch keine Skriptzuordnung in langen Animationsframes, selbst wenn sie die Dauer eines solchen beeinflussen.

## Berechnung von Zeitstempeln

Die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Klasse bereitgestellten Zeitstempel ermöglichen die Berechnung mehrerer weiterer nützlicher Timings für den langen Animationsframe:

| Timing                        | Berechnung                                                               |
| ----------------------------- | ------------------------------------------------------------------------ |
| Startzeit                     | `startTime`                                                              |
| Endzeit                       | `startTime + duration`                                                   |
| Arbeitsdauer                  | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                   | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Rendervorbereitungsdauer      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Funktionsnachweis der Long Animation Frames API

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Melden von LoAFs über einem bestimmten Schwellenwert

Obwohl LoAF-Schwellenwerte auf 50 ms festgelegt sind, kann dies zu einem großen Volumen an Berichten führen, wenn Sie mit der Leistungsoptimierung beginnen. Zunächst möchten Sie möglicherweise LoAFs über einem höheren Schwellenwert melden und den Schwellenwert schrittweise senken, während Sie die Seite verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert zur weiteren Analyse zu erfassen (z. B. indem sie an ein Analytik-Endpunkt gesendet werden):

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

Einträge von langen Animationsframes können ziemlich groß sein; überlegen Sie daher sorgfältig, welche Daten aus jedem Eintrag an die Analytik gesendet werden sollten. Zum Beispiel könnten die Zusammenfassungszeiten der Einträge und die Skript-URLs für das, was Sie benötigen, ausreichend sein.

### Beobachtung der längsten Animationsframes

Vielleicht möchten Sie nur Daten über die längsten Animationsframes (sagen wir die Top 5 oder 10) sammeln, um das zu sammelnde Datenvolumen zu reduzieren. Dies könnte folgendermaßen gehandhabt werden:

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

Eine weitere nützliche Technik ist das Senden der größten LoAF-Einträge, bei denen während des Frames eine Interaktion aufgetreten ist, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)-Werts erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge, die größer als 150 ms sind und bei denen während des Frames eine Interaktion stattgefunden hat. Sie könnten einen höheren oder niedrigeren Wert wählen, je nach Ihren Bedürfnissen.

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

Eine alternative Strategie besteht darin, zu betrachten, welche Skripte am häufigsten in LoAF-Einträgen auftreten. Daten könnten auf Skript- und/oder Zeichenpositionsebene gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themen oder Plugins, die Leistungsprobleme verursachen, auf mehreren Seiten verwendet werden.

Die Ausführungszeiten häufiger Skripte (oder Ursprünge Dritter) in LoAFs könnten addiert und zurückgemeldet werden, um gemeinsame Beiträger zu LoAFs auf einer Site oder einer Sammlungs-Site zu identifizieren.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) eingeführt. Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — sie geben Informationen über {{Glossary("Long_task", "lange Aufgaben")}} frei, die den Hauptthread 50 ms oder länger blockieren.

Die Reduzierung der Anzahl langer Aufgaben, die auf Ihrer Website auftreten, ist nützlich, da lange Aufgaben Reaktionsprobleme verursachen können. Beispielsweise, wenn ein Benutzer einen Button klickt, während der Hauptthread mit einer langen Aufgabe beschäftigt ist, wird die Benutzeroberflächenreaktion auf den Klick so lange verzögert, bis die lange Aufgabe abgeschlossen ist. Die gängige Weisheit ist es, lange Aufgaben in mehrere kleinere Aufgaben aufzuteilen, damit wichtige Interaktionen dazwischen gehandhabt werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animationsframe könnte aus mehreren Aufgaben bestehen, die unter dem 50-ms-Schwellenwert liegen, aber dennoch den Hauptthread kollektiv blockieren. Die Long Animation Frames API löst dies, indem sie den Animationsframe als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Eintragstyp gibt weniger Informationen frei als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Typ — er kann Ihnen den Container mitteilen, in dem eine lange Aufgabe aufgetreten ist, aber nicht das Skript oder die Funktion, die sie verursacht hat, zum Beispiel.
- Die Long Tasks API bietet eine unvollständige Sicht, da sie einige wichtige Aufgaben ausschließen kann. Einige Updates (Rendern zum Beispiel) passieren in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung, die dieses Update verursacht hat, einbezogen werden sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimierung langer Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben zu kurz kommen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erklärer (2024)

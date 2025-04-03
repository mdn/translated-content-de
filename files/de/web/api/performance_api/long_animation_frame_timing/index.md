---
title: Langsame Animationszeiten
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Performance API")}}

**Langsame Animationszeiten** (LoAFs) können das Benutzererlebnis einer Website beeinträchtigen. Sie können langsame Benutzeroberflächenaktualisierungen verursachen, was zu scheinbar nicht reagierenden Steuerungen und {{Glossary("Jank", "hakeligen")}} (oder nicht flüssigen) Animationseffekten und Scrolling führt, was zu Benutzerfrustration führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationszeiten zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie die Long Animation Frames API verwendet wird.

## Was ist eine langsame Animationszeit?

Eine langsame Animationszeit — oder LoAF — ist ein Rendering-Update, das um mehr als 50ms verzögert ist.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies erfordert, dass alle vom Benutzer benötigten Updates zeitnah dargestellt werden und alles vermieden wird, was diese Updates blockieren könnte. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp) Metrik empfiehlt beispielsweise, dass eine Website auf Seiteninteraktionen (wie Klicks oder Tastendrucke) innerhalb von 200ms reagieren soll.

Für flüssige Animationen müssen Updates schnell erfolgen — damit eine Animation mit flüssigen 60 Frames pro Sekunde läuft, sollte jedes Animations-Frame innerhalb von etwa 16ms gerendert werden (1000/60).

## Beobachten langsamer Animationszeiten

Um Informationen über LoAFs zu erhalten und Problemverursacher zu identifizieren, können Sie Leistungselemente mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines Standard-`[`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)` beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere langsame Animationszeiten können auch abgefragt werden, indem eine Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwendet wird:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für den `"long-animation-frame"`-Eintragstyp bei 200 liegt, danach neue Einträge verworfen werden, deshalb wird die Verwendung des `PerformanceObserver`-Ansatzes empfohlen.

## Untersuchung von `"long-animation-frame"`-Einträgen

Leistungszeitleisten-Einträge mit einem Typ von `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Objekte dargestellt. Dieses Objekt hat eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zur langsamen Animationszeit beigetragen hat.

Im Folgenden finden Sie eine JSON-Darstellung eines vollständigen `"long-animation-frame"` Leistungsbeispieleintrags, der ein einzelnes Skript enthält:

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

Jenseits der Standarddaten, die von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eintrag zurückgegeben werden, enthält dies die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtdauer in Millisekunden angibt, für welche der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs genommen werden, die eine `duration` von mehr als `50ms` haben, `50ms` von jedem abgezogen, die Renderzeit zur längsten Aufgabendauer hinzugefügt und die Ergebnisse summiert.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit des ersten UI-Ereignisses angibt — wie ein Maus- oder Tastaturereignis —, das während des aktuellen Animations-Frames in die Warteschlange gestellt wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Renderzyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) Rückrufe, Stil- und Layoutberechnung, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) Rückrufe und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver) Rückrufe umfasst.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums angibt, der mit Stil- und Layoutberechnungen für das aktuelle Animations-Frame verbracht wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming) Eigenschaften:

  - : Eigenschaften, die Informationen über das/die Skript(e) bereitstellen, das/die zum LoAF beigetragen hat/haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, wann die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtdauer in Millisekunden angibt, die das Skript mit erzwungenen Layout-/Stilbearbeitungen verbracht hat. Siehe [Vermeiden Sie Layout-Thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, wodurch dies verursacht wird.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgenwerte, die angeben, wie das Skript aufgerufen wurde (zum Beispiel, `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und der Skript-Eintrittspunkttyp (zum Beispiel, `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtdauer in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Operationen verbracht hat (zum Beispiel, Aufrufe von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName), und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Skriptzeichenposition, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der berichtete Funktionsname der "Einstiegspunkt" des Skripts sein wird (also die oberste Ebene des Stacks), und nicht eine bestimmte langsame Unterschaltung.

        Zum Beispiel, wenn ein Ereignishandler eine obere Funktion aufruft, die wiederum eine langsame Unterschaltung aufruft, werden die `source*` Felder den Namen und Ort der oberen Funktion melden, nicht die langsame Unterschaltung. Dies geschieht aus Leistungsgründen — eine vollständige Stack-Speicherung ist kostspielig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder des oberen Dokuments oder eines {{htmlelement("iframe")}}) beschreibt, in dem dieses Skript ausgeführt wurde, zum oberen Dokument, und ein Verweis auf sein [`Window`](/de/docs/Web/API/Window) Objekt.

    > [!NOTE]
    > Skript-Attribution wird nur für Skripte bereitgestellt, die im Haupt-Thread einer Seite ausgeführt werden, einschließlich gleich-originären `<iframe>`s. Jedoch werden Skripte in fremd-originären `<iframe>`s, [Web-Arbeitern](/de/docs/Web/API/Web_Workers_API), [Service-Arbeitern](/de/docs/Web/API/Service_Worker_API), und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code in LoAFs nicht attribuiert, auch wenn sie die Dauer eines solchen beeinflussen.

## Berechnung von Zeitstempeln

Die Zeitstempel in der Klasse [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) erlauben die Berechnung mehrerer weiterer nützlicher Timings für die langsame Animationszeit:

| Timing                         | Berechnung                                                               |
| ------------------------------ | ------------------------------------------------------------------------ |
| Startzeit                      | `startTime`                                                              |
| Endzeit                        | `startTime + duration`                                                   |
| Arbeitsdauer                   | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                    | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Render: Vor-Layout-Dauer       | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil- und Layout-Dauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Long Animation Frames API Funktions-Erkennung

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Berichterstellung von LoAFs über einem bestimmten Schwellenwert

Obwohl die LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies zu einer großen Menge von Berichten führen, wenn Sie mit der Leistungsoptimierung beginnen. Anfänglich möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert berichten und den Schwellenwert schrittweise senken, während Sie die Seite verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert für weitere Analysen zu erfassen (zum Beispiel, indem sie an ein Analyse-Endpunkt zurückgesendet werden):

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

Lange Animationszeiteinträge können ziemlich groß sein; daher sollten Sie sorgfältig überlegen, welche Daten aus jedem Eintrag an die Analysetools gesendet werden sollten. Beispielsweise könnten die Zusammenfassungszeiten der Einträge und die Skript-URLs ausreichen.

### Beobachtung der längsten Animationszeiten

Sie möchten möglicherweise nur Daten zu den längsten Animationszeiten sammeln (sagen wir die obersten 5 oder 10), um das zu sammelnde Datenvolumen zu reduzieren. Dies könnte wie folgt gehandhabt werden:

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

### Bericht von langen Animationszeiten mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Frames eine Interaktion aufgetreten ist, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) Wertes erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge über 150ms, bei denen während des Frames eine Interaktion aufgetreten ist. Sie könnten einen höheren oder niedrigeren Wert je nach Bedarf wählen.

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

### Identifizierung gemeinsamer Skriptmuster in langen Animationszeiten

Eine alternative Strategie besteht darin, zu schauen, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themen oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten häufig auftretender Skripte (oder Drittanbieterherkünfte) in LoAFs könnten summiert und zurückgemeldet werden, um häufige Verursacher von LoAFs über eine Website oder eine Sammlung von Websites zu identifizieren.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) eingeführt. Beide APIs haben einen ähnlichen Zweck und Anwendungsbereich — Bereitstellung von Informationen über {{Glossary("Long_task", "lange Aufgaben")}}, die den Haupt-Thread für 50ms oder mehr blockieren.

Die Verminderung der Anzahl an langen Aufgaben, die auf Ihrer Website auftreten, ist nützlich, da lange Aufgaben Reaktionsprobleme verursachen können. Zum Beispiel, wenn ein Benutzer einen Knopf drückt, während der Haupt-Thread mit einer langen Aufgabe beschäftigt ist, wird die UI-Antwort auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Die gängige Weisheit ist, lange Aufgaben in mehrere kürzere Aufgaben aufzuteilen, damit wichtige Interaktionen zwischendurch abgewickelt werden können.

Allerdings hat die Long Tasks API ihre Einschränkungen:

- Ein Animations-Frame könnte aus mehreren Aufgaben bestehen, die unter der 50ms-Schwelle liegen, jedoch dennoch in Summe den Haupt-Thread blockieren. Die Long Animation Frames API löst dies, indem sie das Animations-Frame als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) Eintragstyp gibt weniger Informationen preis als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) Typ — er kann Ihnen mitteilen, in welchem Container eine lange Aufgabe stattgefunden hat, aber nicht, welches Skript oder welche Funktion sie verursacht hat.
- Die Long Tasks API bietet eine unvollständige Sicht, da sie einige wichtige Aufgaben ausschließen kann. Einige Updates (Rendering zum Beispiel) passieren in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung, die das Update verursacht hat, einbezogen werden sollten, um den "Gesamtaufwand" dieser Interaktion genau zu messen.

## Siehe auch

- [Optimieren Sie lange Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben versagen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Long Animation Frames API Erläuterung (2024)

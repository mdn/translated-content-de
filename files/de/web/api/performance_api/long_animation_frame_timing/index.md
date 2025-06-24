---
title: Long Animation Frame Timing
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("Performance API")}}

**Langsame Animationsrahmen** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Benutzeroberflächenaktualisierungen verursachen, was in scheinbar nicht reagierenden Steuerelementen und {{Glossary("Jank", "ruckelnden")}} (oder nicht flüssigen) Animationseffekten und Scroll-Bewegungen resultiert, die zu Benutzerfrustration führen. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über die langen Animationsrahmen zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.

## Was ist ein langsamer Animationsrahmen?

Ein langsamer Animationsrahmen — oder LoAF — ist eine Rendering-Aktualisierung, die mehr als 50ms verzögert wird.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet eine zügige Aktualisierung aller vom Benutzer benötigten Elemente und das Vermeiden von Blockaden dieser Aktualisierungen. Googles [Interaction to Next Paint (INP)](https://web.dev/articles/inp)-Metrik empfiehlt beispielsweise, dass eine Website innerhalb von 200ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für flüssige Animationen müssen die Aktualisierungen schnell erfolgen — damit eine Animation mit flüssigen 60 Bildern pro Sekunde läuft, sollte jeder Animationsrahmen innerhalb von etwa 16ms (1000/60) gerendert werden.

## Beobachten von langsamen Animationsrahmen

Um Informationen über LoAFs zu erhalten und Problemmacher zu identifizieren, können Sie Performance-Timeline-Einträge mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"long-animation-frame"` mithilfe eines standardmäßigen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere langsame Animationsrahmen können ebenfalls abgefragt werden, zum Beispiel mit der Methode [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType):

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Achten Sie jedoch darauf, dass die maximale Puffergröße für `"long-animation-frame"`-Einträge 200 beträgt, danach werden neue Einträge fallen gelassen, daher wird die Verwendung des `PerformanceObserver`-Ansatzes empfohlen.

## Untersuchen von `"long-animation-frame"`-Einträgen

Performance-Timeline-Einträge mit dem Typ `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte repräsentiert. Dieses Objekt verfügt über eine [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts)-Eigenschaft, die ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langsamen Animationsrahmen beigetragen hat.

Das folgende Beispiel ist eine JSON-Darstellung eines vollständigen `"long-animation-frame"`-Performance-Eintrags mit einem einzigen Skript:

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

Abgesehen von den standardmäßig von einem [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eintrag zurückgegebenen Daten enthält dies die folgenden bemerkenswerten Elemente:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtdauer in Millisekunden angibt, für die der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben wie Benutzereingaben zu reagieren. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAFs genommen werden, die eine `duration` von mehr als `50ms` haben, `50ms` von jedem abgezogen wird, die Rendering-Zeit zur längsten Aufgabendauer hinzuaddiert und die Ergebnisse aufsummiert werden.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des ersten UI-Ereignisses angibt — wie ein Maus- oder Tastaturereignis —, das während des aktuellen Animationsrahmens verarbeitet wird. Beachten Sie, dass dieser Zeitstempel vor Beginn dieses Animationsrahmens liegen kann, wenn zwischen dem Ereignis und seiner Verarbeitung eine Verzögerung bestand.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Rendering-Zyklus angibt, der [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)-Callbacks, Stil- und Layoutberechnung, [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)-Callbacks und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)-Callbacks einschließt.
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Zeitraums angibt, der in Stil- und Layoutberechnungen für den aktuellen Animationsrahmen verbracht wurde.
- [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Eigenschaften:

  - : Eigenschaften, die Informationen über das Skript oder die Skripte liefern, die zum LoAF beigetragen haben:

    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, an dem die Skriptkompilierung abgeschlossen und die Ausführung begonnen wurde.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript mit erzwungenem Layout/Stil verbracht hat. Weitere Informationen, um zu verstehen, warum dies auftritt, finden Sie unter [Vermeiden von Layout-Trashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing).
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgen, die angeben, wie das Skript aufgerufen wurde (zum Beispiel `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und den Typ des Skript-Einstiegspunkts (zum Beispiel `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript damit verbracht hat, "pausierende" synchrone Operationen durchzuführen (zum Beispiel [`Window.alert()`](/de/docs/Web/API/Window/alert)-Aufrufe oder synchrone [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)s).
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)

      - : Werte, die die Zeichenposition des Skripts, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stapels) und nicht eine spezifische langsame Untersubfunktion.

        Wenn beispielsweise ein Ereignishandler eine Top-Level-Funktion aufruft, die wiederum eine langsame Untersubfunktion aufruft, geben die `source*`-Felder den Namen und den Ort der Top-Level-Funktion an, nicht die langsame Untersubfunktion. Dies ist aus Performance-Gründen so gestaltet — ein vollständiges Stack-Trace ist aufwendig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder und {{htmlelement("iframe")}}), in dem dieses Skript ausgeführt wurde, zum Top-Level-Dokument beschreibt, sowie ein Verweis auf sein [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Die Skriptzuordnung wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleichherkunftsbezogener `<iframe>`s. Allerdings werden fremdherkunftsbezogene `<iframe>`s, [Web-Worker](/de/docs/Web/API/Web_Workers_API), [Service-Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) in langsamen Animationsrahmen keine Skriptzuordnung haben, auch wenn sie die Dauer eines solchen Rahmens beeinflussen.

## Berechnung von Zeitstempeln

Die in der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Klasse bereitgestellten Zeitstempel ermöglichen es, mehrere nützliche Zeitberechnungen für den langsamen Animationsrahmen durchzuführen:

| Zeitberechnung                | Berechnung                                                               |
| ----------------------------- | ------------------------------------------------------------------------ |
| Startzeit                     | `startTime`                                                              |
| Endzeit                       | `startTime + duration`                                                   |
| Arbeitsdauer                  | `renderStart ? renderStart - startTime : duration`                       |
| Renderdauer                   | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Render: Vor-Layout-Dauer      | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Render: Stil und Layout-Dauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Erkennung der Long Animation Frames API-Funktion

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### Berichterstattung über LoAFs über einem bestimmten Schwellenwert

Auch wenn LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies zu einer großen Menge an Berichten führen, wenn Sie mit der Optimierung der Performance beginnen. Zunächst möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise verringern, während Sie die Seite verbessern und die größten LoAFs beseitigen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert zur weiteren Analyse zu erfassen (zum Beispiel, indem sie an ein Analyse-Endpunkt zurückgesendet werden):

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

Langsame Animationsrahmen-Einträge können ziemlich groß sein; daher sollten Sie sorgfältig überlegen, welche Daten von jedem Eintrag an die Analyse gesendet werden sollen. Beispielsweise könnten die zusammengefassten Zeiten der Einträge und die Skript-URLs genügen.

### Beobachtung der längsten Animationsrahmen

Es kann sinnvoll sein, nur Daten über die längsten Animationsrahmen zu sammeln (zum Beispiel die Top 5 oder 10), um das Volumen der gesammelten Daten zu reduzieren. Dies könnte wie folgt behandelt werden:

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

### Berichterstattung über langsame Animationsrahmen mit Interaktionen

Eine weitere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Rahmens eine Interaktion auftrat, die durch das Vorhandensein eines [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)-Wertes erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge größer als 150ms, bei denen während des Rahmens eine Interaktion auftrat. Sie könnten je nach Bedarf einen höheren oder niedrigeren Wert wählen.

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

### Identifizierung gemeinsamer Skriptmuster in langsamen Animationsrahmen

Eine alternative Strategie besteht darin, zu untersuchen, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder Zeichenpositions gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist nützlich in Fällen, in denen Themes oder Plugins verwendet werden, die in mehreren Sites Leistungsprobleme verursachen.

Die Ausführungszeiten gemeinsamer Skripte (oder Third-Party-Ursprünge) in LoAFs könnten aufsummiert und gemeldet werden, um gemeinsame Ursachen zu identifizieren, die zu LoAFs auf einer Site oder einem Set von Sites beitragen.

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

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)) vorangegangen. Beide APIs haben einen ähnlichen Zweck und Nutzen — sie legen Informationen über {{Glossary("Long_task", "lange Aufgaben")}} offen, die den Haupt-Thread für 50ms oder mehr blockieren.

Die Reduzierung der Anzahl der langen Aufgaben, die auf Ihrer Website auftreten, ist nützlich, da lange Aufgaben Reaktionsprobleme verursachen können. Wenn beispielsweise ein Benutzer auf einen Button klickt, während der Haupt-Thread eine lange Aufgabe bearbeitet, wird die Benutzeroberflächenreaktion auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Konventionell ist es ratsam, lange Aufgaben in mehrere kleinere Aufgaben zu unterteilen, sodass wichtige Interaktionen dazwischen gehandhabt werden können.

Allerdings hat die Long Tasks API ihre Einschränkungen:

- Ein Animationsrahmen könnte aus mehreren Aufgaben bestehen, die unter dem 50ms-Schwellenwert liegen, aber dennoch kollektiv den Haupt-Thread blockieren. Die Long Animation Frames API löst dies, indem sie den Animationsrahmen als Ganzes betrachtet.
- Der [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)-Eintragstyp bietet weniger Informationen als der [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Typ — er kann Ihnen den Container zeigen, in dem eine lange Aufgabe stattfand, aber nicht das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet eine unvollständige Ansicht, da sie einige wichtige Aufgaben möglicherweise ausschließt. Einige Updates (zum Beispiel das Rendering) finden in separaten Aufgaben statt, die idealerweise zusammen mit der vorangegangenen Ausführung enthalten sein sollten, die dieses Update ausgelöst hat, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimieren Sie lange Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben fehlen](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Erklärer der Long Animation Frames API (2024)

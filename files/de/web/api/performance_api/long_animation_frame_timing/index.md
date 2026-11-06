---
title: Zeitmessung langer Animationsframes
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsframes** (Long Animation Frames, LoAFs) können die Nutzung einer Website beeinträchtigen. Sie können Aktualisierungen der Benutzeroberfläche (UI) verzögern. Dadurch wirken Bedienelemente möglicherweise nicht reaktionsfähig, und Animationen sowie das Scrollen können {{Glossary("Jank", "ruckeln")}}. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsframes abzurufen und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie Sie die Long Animation Frames API verwenden.

## Was ist ein langer Animationsframe?

Ein langer Animationsframe – kurz LoAF – ist eine Rendering-Aktualisierung, die sich um mehr als 50 ms verzögert.

Eine gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dazu müssen die für Benutzer erforderlichen Aktualisierungen zeitnah dargestellt werden. Außerdem darf nichts diese Aktualisierungen blockieren. Die Google-Metrik [Interaction to Next Paint (INP)](https://web.dev/articles/inp) empfiehlt beispielsweise, dass eine Website innerhalb von 200 ms auf Seiteninteraktionen wie Klicks oder Tastendrücke reagieren sollte.

Für flüssige Animationen müssen Aktualisierungen schnell erfolgen: Damit eine Animation mit 60 Bildern pro Sekunde flüssig läuft, sollte jeder Animationsframe innerhalb von etwa 16 ms (1000/60) gerendert werden.

## Lange Animationsframes beobachten

Um Informationen über LoAFs zu erhalten und deren Verursacher zu ermitteln, können Sie mit einem regulären [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Einträge der Performance-Timeline beobachten, deren [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) `"long-animation-frame"` ist:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Frühere lange Animationsframes können auch mit einer Methode wie [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) abgefragt werden:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass der Puffer für Einträge des Typs `"long-animation-frame"` höchstens 200 Einträge fasst. Danach werden neue Einträge verworfen. Daher wird die Verwendung von `PerformanceObserver` empfohlen.

## `"long-animation-frame"`-Einträge untersuchen

Einträge der Performance-Timeline vom Typ `"long-animation-frame"` werden durch [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)-Objekte dargestellt. Die Eigenschaft [`scripts`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/scripts) eines solchen Objekts enthält ein Array von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Objekten. Jedes davon enthält Informationen über ein Skript, das zum langen Animationsframe beigetragen hat.

Das folgende Beispiel zeigt einen vollständigen Performance-Eintrag vom Typ `"long-animation-frame"` mit einem einzelnen Skript:

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

Zusätzlich zu den Standarddaten eines [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eintrags enthält er die folgenden wichtigen Angaben:

- [`blockingDuration`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/blockingDuration)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, während der der Hauptthread daran gehindert war, auf Aufgaben mit hoher Priorität wie Benutzereingaben zu reagieren. Zur Berechnung werden alle [langen Tasks](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF mit einer `duration` von mehr als `50ms` herangezogen. Von jedem wird `50ms` abgezogen, die Rendering-Zeit wird zur Dauer des längsten Tasks addiert und die Ergebnisse werden aufsummiert.
- [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt des ersten UI-Ereignisses angibt, das während des aktuellen Animationsframes verarbeitet wird, etwa eines Maus- oder Tastaturereignisses. Dieser Zeitstempel kann vor dem Beginn des Animationsframes liegen, wenn zwischen dem Auftreten und der Verarbeitung des Ereignisses eine Verzögerung lag.
- [`paintTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/paintTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die Rendering-Phase endete und der Animationsframe begann.
- [`presentationTime`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/presentationTime)
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem die UI-Aktualisierung tatsächlich auf dem Bildschirm dargestellt wurde.
- [`renderStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/renderStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Rendering-Zyklus angibt. Dieser umfasst Callbacks von [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die Berechnung von Stilen und Layout sowie Callbacks von [`ResizeObserver`](/de/docs/Web/API/ResizeObserver) und [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver).
- [`styleAndLayoutStart`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/styleAndLayoutStart)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn der Stil- und Layoutberechnungen für den aktuellen Animationsframe angibt.
- Eigenschaften von [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming):
  - : Eigenschaften, die Informationen über die Skripte liefern, die zum LoAF beigetragen haben:
    - [`script.executionStart`](/de/docs/Web/API/PerformanceScriptTiming/executionStart)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wann die Kompilierung des Skripts abgeschlossen war und seine Ausführung begann.
    - [`script.forcedStyleAndLayoutDuration`](/de/docs/Web/API/PerformanceScriptTiming/forcedStyleAndLayoutDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript für erzwungene Layout- und Stilberechnungen aufgewendet hat. Unter [Layout Thrashing vermeiden](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing) erfahren Sie, wodurch dies verursacht wird.
    - [`script.invoker`](/de/docs/Web/API/PerformanceScriptTiming/invoker) und [`script.invokerType`](/de/docs/Web/API/PerformanceScriptTiming/invokerType)
      - : Zeichenfolgen, die angeben, wie das Skript aufgerufen wurde (beispielsweise `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und welchen Typ sein Einstiegspunkt hat (beispielsweise `"event-listener"` oder `"resolve-promise"`).
    - [`script.pauseDuration`](/de/docs/Web/API/PerformanceScriptTiming/pauseDuration)
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Gesamtzeit in Millisekunden angibt, die das Skript mit „pausierenden“ synchronen Vorgängen verbracht hat, beispielsweise mit Aufrufen von [`Window.alert()`](/de/docs/Web/API/Window/alert) oder synchronen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest)-Anfragen.
    - [`script.sourceCharPosition`](/de/docs/Web/API/PerformanceScriptTiming/sourceCharPosition), [`script.sourceFunctionName`](/de/docs/Web/API/PerformanceScriptTiming/sourceFunctionName) und [`script.sourceURL`](/de/docs/Web/API/PerformanceScriptTiming/sourceURL)
      - : Werte, die die Zeichenposition im Skript, den Funktionsnamen beziehungsweise die Skript-URL angeben. Beachten Sie, dass der gemeldete Funktionsname zum „Einstiegspunkt“ des Skripts gehört, also zur obersten Ebene des Aufrufstapels, und nicht zu einer bestimmten langsamen Unterfunktion.

        Wenn beispielsweise ein Event-Handler eine Funktion auf oberster Ebene aufruft, die wiederum eine langsame Unterfunktion aufruft, geben die `source*`-Felder den Namen und die Position der Funktion auf oberster Ebene an, nicht die der langsamen Unterfunktion. Der Grund dafür ist die Performance: Die Ermittlung eines vollständigen Stack-Traces ist aufwendig.

    - [`script.windowAttribution`](/de/docs/Web/API/PerformanceScriptTiming/windowAttribution) und [`script.window`](/de/docs/Web/API/PerformanceScriptTiming/window)
      - : Ein Aufzählungswert, der die Beziehung des Containers, in dem das Skript ausgeführt wurde – entweder das Dokument auf oberster Ebene oder ein {{htmlelement("iframe")}} – zum Dokument auf oberster Ebene beschreibt, sowie eine Referenz auf dessen [`Window`](/de/docs/Web/API/Window)-Objekt.

    > [!NOTE]
    > Informationen zur Skriptzuordnung werden nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden. Dazu gehören auch `<iframe>`-Elemente mit gleichem Ursprung. Für `<iframe>`-Elemente mit anderem Ursprung, [Web Workers](/de/docs/Web/API/Web_Workers_API), [Service Workers](/de/docs/Web/API/Service_Worker_API) und Code von [Erweiterungen](/de/docs/Mozilla/Add-ons/WebExtensions) enthalten lange Animationsframes dagegen keine Skriptzuordnung – selbst wenn dieser Code die Dauer eines Frames beeinflusst.

## Zeitstempel zur Berechnung weiterer Zeitwerte verwenden

Anhand der Zeitstempel der Klasse [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming) lassen sich weitere nützliche Zeitwerte für einen langen Animationsframe berechnen:

| Zeitwert                         | Berechnung                                                               |
| -------------------------------- | ------------------------------------------------------------------------ |
| Startzeit                        | `startTime`                                                              |
| Endzeit                          | `startTime + duration` (oder `paintTime`/`presentationTime`)             |
| Dauer der Verarbeitung           | `renderStart ? renderStart - startTime : duration`                       |
| Rendering-Dauer                  | `renderStart ? (startTime + duration) - renderStart : 0`                 |
| Rendering: Dauer vor dem Layout  | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Rendering: Stil- und Layoutdauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Unterstützung der Long Animation Frames API prüfen

Mit [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) können Sie prüfen, ob die Long Animation Frames API unterstützt wird:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Monitor LoAFs
}
```

### LoAFs oberhalb eines bestimmten Schwellenwerts melden

Der Schwellenwert für LoAFs ist auf 50 ms festgelegt. Wenn Sie mit der Performance-Optimierung beginnen, kann dies zu sehr vielen Meldungen führen. Zunächst können Sie LoAFs daher erst ab einem höheren Schwellenwert melden und diesen schrittweise senken, während Sie die Website verbessern und die problematischsten LoAFs beseitigen. Mit dem folgenden Code können LoAFs oberhalb eines bestimmten Schwellenwerts für weitere Analysen erfasst werden, beispielsweise um sie an einen Analyse-Endpunkt zu senden:

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

Einträge zu langen Animationsframes können recht umfangreich sein. Überlegen Sie deshalb genau, welche Daten aus jedem Eintrag Sie an den Analysedienst senden müssen. Möglicherweise reichen die zusammengefassten Zeitwerte der Einträge und die Skript-URLs bereits aus.

### Die längsten Animationsframes beobachten

Um die zu erfassende Datenmenge zu verringern, können Sie nur Daten zu den längsten Animationsframes sammeln, beispielsweise zu den fünf oder zehn längsten. Das lässt sich wie folgt umsetzen:

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

### Lange Animationsframes mit Interaktionen melden

Eine weitere nützliche Methode besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Frames eine Interaktion stattfand. Dies lässt sich daran erkennen, dass ein Wert für [`firstUIEventTimestamp`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming/firstUIEventTimestamp) vorhanden ist.

Der folgende Code protokolliert alle LoAF-Einträge mit einer Dauer von mehr als 150 ms, bei denen während des Frames eine Interaktion stattfand. Je nach Bedarf können Sie einen höheren oder niedrigeren Wert wählen.

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

### Häufige Skriptmuster in langen Animationsframes erkennen

Eine alternative Strategie besteht darin, zu untersuchen, welche Skripte am häufigsten in LoAF-Einträgen vorkommen. Daten können auf Ebene des Skripts und/oder der Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Das ist hilfreich, wenn Themes oder Plugins, die Performance-Probleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten häufig vorkommender Skripte (oder von Drittanbieter-Ursprüngen) in LoAFs können aufsummiert und gemeldet werden. So lassen sich häufige Ursachen für LoAFs auf einer Website oder über mehrere Websites hinweg ermitteln.

Um beispielsweise Skripte nach URL zu gruppieren und die Gesamtdauer anzuzeigen:

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

Der Long Animation Frames API ging die [Long Tasks API](https://wicg.github.io/longtasks/) voraus (siehe [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)). Beide APIs haben einen ähnlichen Zweck und werden ähnlich verwendet: Sie stellen Informationen über {{Glossary("Long_task", "lange Tasks")}} bereit, die den Hauptthread mindestens 50 ms lang blockieren.

Es ist sinnvoll, die Anzahl langer Tasks auf Ihrer Website zu verringern, da diese die Reaktionsfähigkeit beeinträchtigen können. Klickt ein Benutzer beispielsweise auf eine Schaltfläche, während der Hauptthread einen langen Task verarbeitet, verzögert sich die Reaktion der Benutzeroberfläche auf den Klick, bis der Task abgeschlossen ist. Eine gängige Empfehlung lautet daher, lange Tasks in mehrere kürzere Tasks aufzuteilen, damit wichtige Interaktionen dazwischen verarbeitet werden können.

Die Long Tasks API hat jedoch Einschränkungen:

- Ein Animationsframe kann aus mehreren Tasks bestehen, die jeweils unter dem Schwellenwert von 50 ms liegen, den Hauptthread zusammen aber dennoch blockieren. Die Long Animation Frames API löst dieses Problem, indem sie den Animationsframe als Ganzes betrachtet.
- Der Eintragstyp [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming) liefert weniger Informationen als [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming). Er kann beispielsweise angeben, in welchem Container ein langer Task ausgeführt wurde, nicht aber, welches Skript oder welche Funktion ihn verursacht hat.
- Die Long Tasks API liefert ein unvollständiges Bild, da sie einige wichtige Tasks möglicherweise nicht erfasst. Manche Aktualisierungen, etwa das Rendering, finden in separaten Tasks statt. Um den „Gesamtaufwand“ einer Interaktion genau zu messen, sollten sie idealerweise zusammen mit der vorangegangenen Ausführung erfasst werden, die die Aktualisierung ausgelöst hat.

## Siehe auch

- [Lange Tasks optimieren](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo die Long Tasks API an ihre Grenzen stößt](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Erläuterung zur Long Animation Frames API (2024)

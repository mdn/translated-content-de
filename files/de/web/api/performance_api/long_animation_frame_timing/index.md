---
title: Timing von langen Animationsframes
slug: Web/API/Performance_API/Long_animation_frame_timing
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{DefaultAPISidebar("Performance API")}}

**Lange Animationsframes** (LoAFs) können die Benutzererfahrung einer Website beeinträchtigen. Sie können langsame Aktualisierungen der Benutzeroberfläche (UI) verursachen, was zu scheinbar nicht reagierenden Steuerungen und [ruckelnden](/de/docs/Glossary/Jank) (oder nicht flüssigen) animierten Effekten und Scrollvorgängen führt, was zur Benutzerfrustration führt. Die [Long Animation Frames API](https://w3c.github.io/long-animation-frames/) ermöglicht es Entwicklern, Informationen über lange Animationsframes zu erhalten und deren Ursachen besser zu verstehen. Dieser Artikel zeigt, wie man die Long Animation Frames API verwendet.

## Was ist ein langer Animationsframe?

Ein langer Animationsframe — oder LoAF — ist ein Rendering-Update, das über 50ms hinaus verzögert wird.

Gute Reaktionsfähigkeit bedeutet, dass eine Seite schnell auf Interaktionen reagiert. Dies beinhaltet das zeitgerechte Neuzeichnen aller vom Benutzer benötigten Aktualisierungen und das Vermeiden von allem, was diese Aktualisierungen blockieren könnte. Zum Beispiel empfiehlt die Metrik von Google [Interaction to Next Paint (INP)](https://web.dev/articles/inp), dass eine Website innerhalb von 200ms auf Seiteninteraktionen (wie Klicks oder Tastendrücke) reagieren sollte.

Für flüssige Animationen müssen die Aktualisierungen schnell sein — um eine Animation mit flüssigen 60 Bildern pro Sekunde laufen zu lassen, sollte jedes Animationsframe innerhalb von etwa 16ms gerendert werden (1000/60).

## Beobachten von langen Animationsframes

Um Informationen über LoAFs zu erhalten und Störenfriede ausfindig zu machen, können Sie Performance-Timeline-Einträge mit einem {{domxref("PerformanceEntry.entryType", "entryType")}} von `"long-animation-frame"` mit einem Standard-{{domxref("PerformanceObserver")}} beobachten:

```js
const observer = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Vorherige lange Animationsframes können ebenfalls abgefragt werden, indem man eine Methode wie {{domxref("Performance.getEntriesByType()")}} verwendet:

```js
const loafs = performance.getEntriesByType("long-animation-frame");
```

Beachten Sie jedoch, dass die maximale Puffergröße für Eintragstypen `"long-animation-frame"` 200 beträgt, danach werden neue Einträge verworfen, daher wird die Verwendung des `PerformanceObserver`-Ansatzes empfohlen.

## Untersuchen von Einträgen vom Typ `"long-animation-frame"`

Performance-Timeline-Einträge, die mit einem Typ von `"long-animation-frame"` zurückgegeben werden, werden durch {{domxref("PerformanceLongAnimationFrameTiming")}}-Objekte dargestellt. Dieses Objekt hat eine {{domxref("PerformanceLongAnimationFrameTiming.scripts", "scripts")}}-Eigenschaft, die ein Array von {{domxref("PerformanceScriptTiming")}}-Objekten enthält, von denen jedes Informationen über ein Skript enthält, das zum langen Animationsframe beigetragen hat.

Das Folgende ist eine JSON-Darstellung eines vollständigen Performance-Eintrags `"long-animation-frame"`, der ein einzelnes Skript enthält:

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

Hier sind einige bemerkenswerte Punkte über die Standarddaten eines {{domxref("PerformanceEntry")}}-Eintrags hinaus enthalten:

- {{domxref("PerformanceLongAnimationFrameTiming.blockingDuration", "blockingDuration")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die gesamte Zeit in Millisekunden angibt, in der der Hauptthread daran gehindert wurde, auf hochpriorisierte Aufgaben zu reagieren, wie Benutzereingaben. Dies wird berechnet, indem alle [langen Aufgaben](/de/docs/Web/API/PerformanceLongTaskTiming#description) innerhalb des LoAF, die eine `Dauer` von mehr als `50ms` haben, genommen werden, `50ms` von jedem abgezogen werden, die Renderzeit zur längsten Aufgabendauer hinzugefügt wird und die Ergebnisse summiert werden.
- {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp", "firstUIEventTimestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Zeit des ersten UI-Ereignisses angibt — wie ein Maus- oder Tastaturereignis —, das während des aktuellen Animationsframes in die Warteschlange gestellt wurde.
- {{domxref("PerformanceLongAnimationFrameTiming.renderStart", "renderStart")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Startzeit des Renderzyklus angibt, der {{domxref("Window.requestAnimationFrame()")}}-Rückrufe, Stil- und Layoutberechnung, {{domxref("ResizeObserver")}}-Rückrufe und {{domxref("IntersectionObserver")}}-Rückrufe umfasst.
- {{domxref("PerformanceLongAnimationFrameTiming.styleAndLayoutStart", "styleAndLayoutStart")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, das den Beginn des Zeitraums angibt, der in Stil- und Layoutberechnungen für den aktuellen Animationsframe verbracht wird.
- {{domxref("PerformanceScriptTiming")}}-Eigenschaften:

  - : Eigenschaften, die Informationen über das oder die Skripte bieten, die zum LoAF beigetragen haben:

    - {{domxref("PerformanceScriptTiming.executionStart", "script.executionStart")}}
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit angibt, zu der die Skriptkompilierung abgeschlossen und die Ausführung gestartet wurde.
    - {{domxref("PerformanceScriptTiming.forcedStyleAndLayoutDuration", "script.forcedStyleAndLayoutDuration")}}
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der die gesamte Zeit in Millisekunden angibt, die das Skript benötigt, um ein erzwungenes Layout/Stil zu verarbeiten. Siehe [Avoid layout thrashing](https://web.dev/articles/avoid-large-complex-layouts-and-layout-thrashing#avoid_layout_thrashing), um zu verstehen, was dies verursacht.
    - {{domxref("PerformanceScriptTiming.invoker", "script.invoker")}} und {{domxref("PerformanceScriptTiming.invokerType", "script.invokerType")}}
      - : Zeichenkettenwerte, die angeben, wie das Skript aufgerufen wurde (zum Beispiel `"IMG#id.onload"` oder `"Window.requestAnimationFrame"`) und den Skripteintrittspunkt-Typ (zum Beispiel `"event-listener"` oder `"resolve-promise"`).
    - {{domxref("PerformanceScriptTiming.pauseDuration", "script.pauseDuration")}}
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der die gesamte Zeit in Millisekunden angibt, die das Skript mit dem "Pausieren" synchroner Operationen (zum Beispiel {{domxref("Window.alert()")}}-Aufrufe oder synchroner {{domxref("XMLHttpRequest")}}s) verbracht hat.
    - {{domxref("PerformanceScriptTiming.sourceCharPosition", "script.sourceCharPosition")}}, {{domxref("PerformanceScriptTiming.sourceFunctionName", "script.sourceFunctionName")}} und {{domxref("PerformanceScriptTiming.sourceURL", "script.sourceURL")}}

      - : Werte, die die Skriptzeichenposition, den Funktionsnamen und die Skript-URL darstellen. Es ist wichtig zu beachten, dass der gemeldete Funktionsname der "Einstiegspunkt" des Skripts sein wird (d.h. die oberste Ebene des Stapels) und nicht eine spezifische langsame Unterfunktion.

        Zum Beispiel, wenn ein Ereignishandler eine Top-Level-Funktion aufruft, die wiederum eine langsame Unterfunktion aufruft, werden die `source*` Felder den Namen und den Standort der Top-Level-Funktion berichten, nicht die langsame Unterfunktion. Dies ist aus Leistungsgründen — ein vollständiger Stack-Trace ist kostspielig.

    - {{domxref("PerformanceScriptTiming.windowAttribution", "script.windowAttribution")}} und {{domxref("PerformanceScriptTiming.window", "script.window")}}
      - : Ein enumerierter Wert, der die Beziehung des Containers (d.h. entweder das Top-Level-Dokument oder ein {{htmlelement("iframe")}}) beschreibt, in dem dieses Skript ausgeführt wurde, zum Top-Level-Dokument, und ein Verweis auf sein {{domxref("Window")}}-Objekt.

    > [!NOTE]
    > Die Skript-Attribution wird nur für Skripte bereitgestellt, die im Hauptthread einer Seite ausgeführt werden, einschließlich gleichnamiger `<iframe>`s. Cross-origin `<iframe>`s, [Web Worker](/de/docs/Web/API/Web_Workers_API), [Service Worker](/de/docs/Web/API/Service_Worker_API) und [Erweiterungs](/de/docs/Mozilla/Add-ons/WebExtensions)-Code werden jedoch keine Skriptattribution in langen Animationsframes haben, selbst wenn sie die Dauer eines solchen beeinflussen.

## Berechnung von Zeitstempeln

Die in der {{domxref("PerformanceLongAnimationFrameTiming")}}-Klasse bereitgestellten Zeitstempel ermöglichen die Berechnung mehrerer weiterer nützlicher Zeiten für den langen Animationsframe:

| Timing                            | Berechnung                                                              |
| --------------------------------- | ------------------------------------------------------------------------ |
| Startzeit                         | `startTime`                                                              |
| Endzeit                           | `startTime + duration`                                                   |
| Arbeitsdauer                      | `renderStart ? renderStart - startTime : duration`                       |
| Rendering-Dauer                   | `renderStart ? (startTime + duration) - renderStart: 0`                  |
| Rendering: Vor-Layout-Dauer       | `styleAndLayoutStart ? styleAndLayoutStart - renderStart : 0`            |
| Rendering: Stil- und Layout-Dauer | `styleAndLayoutStart ? (startTime + duration) - styleAndLayoutStart : 0` |

## Beispiele

### Feature-Erkennung der Long Animation Frames API

Sie können testen, ob die Long Animation Frames API unterstützt wird, indem Sie {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} verwenden:

```js
if (PerformanceObserver.supportedEntryTypes.includes("long-animation-frame")) {
  // Überwachen von LoAFs
}
```

### Berichten von LoAFs über einem bestimmten Schwellenwert

Während die LoAF-Schwellenwerte auf 50ms festgelegt sind, kann dies zu einer großen Anzahl von Berichten führen, wenn Sie mit der Leistungsoptimierung beginnen. Anfangs möchten Sie möglicherweise LoAFs bei einem höheren Schwellenwert melden und den Schwellenwert schrittweise senken, während Sie die Website verbessern und die schlimmsten LoAFs entfernen. Der folgende Code könnte verwendet werden, um LoAFs über einem bestimmten Schwellenwert für weitere Analysen zu erfassen (zum Beispiel, indem sie an ein Analyseeingabe gesendet werden):

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.duration > REPORTING_THRESHOLD_MS) {
      // Beispiel hier protokolliert zur Konsole; echter Code könnte zu Analyseeingabe senden
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

Einträge für lange Animationsframes können ziemlich groß sein; daher sollten Sie sorgfältig überlegen, welche Daten aus jedem Eintrag an die Analysen gesendet werden sollen. Zum Beispiel könnten die zusammenfassenden Zeiten der Einträge und die Skript-URLs für Ihre Bedürfnisse ausreichend sein.

### Beobachtung der längsten Animationsframes

Sie möchten möglicherweise nur Daten über die längsten Animationsframes (z.B. die obersten 5 oder 10) sammeln, um das Datenvolumen zu reduzieren, das gesammelt werden muss. Dies könnte wie folgt gehandhabt werden:

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

// Daten bei Sichtbarkeitsänderungsereignis melden
document.addEventListener("visibilitychange", () => {
  // Beispiel hier protokolliert zur Konsole; echter Code könnte zu Analyseeingabe senden
  console.log(longestBlockingLoAFs);
});
```

### Berichten von langen Animationsframes mit Interaktionen

Eine andere nützliche Technik besteht darin, die größten LoAF-Einträge zu senden, bei denen während des Frames eine Interaktion aufgetreten ist, was durch das Vorhandensein eines Wertes von {{domxref("PerformanceLongAnimationFrameTiming.firstUIEventTimestamp", "firstUIEventTimestamp")}} erkannt werden kann.

Der folgende Code protokolliert alle LoAF-Einträge größer als 150ms, bei denen während des Frames eine Interaktion aufgetreten ist. Sie können je nach Ihren Bedürfnissen einen höheren oder niedrigeren Wert wählen.

```js
const REPORTING_THRESHOLD_MS = 150;

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (
      entry.duration > REPORTING_THRESHOLD_MS &&
      entry.firstUIEventTimestamp > 0
    ) {
      // Beispiel hier protokolliert zur Konsole; echter Code könnte zu Analyseeingabe senden
      console.log(entry);
    }
  }
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

### Identifizierung häufiger Skriptmuster in langen Animationsframes

Eine alternative Strategie besteht darin, zu betrachten, welche Skripte am häufigsten in LoAF-Einträgen erscheinen. Daten könnten auf der Ebene eines Skripts und/oder einer Zeichenposition gemeldet werden, um die problematischsten Skripte zu identifizieren. Dies ist in Fällen nützlich, in denen Themen oder Plugins, die Leistungsprobleme verursachen, auf mehreren Websites verwendet werden.

Die Ausführungszeiten häufiger Skripte (oder Drittanbieter-Ursprünge) in LoAFs könnten zusammengefasst und zurückgemeldet werden, um häufige Beitragsleister zu LoAFs auf einer Website oder einer Sammlung von Websites zu identifizieren.

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
  // Beispiel hier protokolliert zur Konsole; echter Code könnte zu Analyseeingabe senden
  console.table(processedScripts);
});

observer.observe({ type: "long-animation-frame", buffered: true });
```

## Vergleichen mit der Long Tasks API

Die Long Animation Frames API wurde von der [Long Tasks API](https://w3c.github.io/longtasks/) (siehe {{domxref("PerformanceLongTaskTiming")}}) begleitet. Beide APIs haben einen ähnlichen Zweck und eine ähnliche Verwendung — Informationen über [lange Aufgaben](/de/docs/Glossary/Long_task) bereitzustellen, die den Hauptthread für 50ms oder mehr blockieren.

Das Reduzieren der Anzahl von langen Aufgaben, die auf Ihrer Website auftreten, ist nützlich, da lange Aufgaben Reaktionsprobleme verursachen können. Wenn beispielsweise ein Benutzer während der Bearbeitung einer langen Aufgabe auf einer Schaltfläche klickt, wird die Benutzeroberflächenreaktion auf den Klick verzögert, bis die lange Aufgabe abgeschlossen ist. Allgemein wird empfohlen, lange Aufgaben in mehrere kleinere Aufgaben zu unterteilen, damit wichtige Interaktionen dazwischen bearbeitet werden können.

Die Long Tasks API hat jedoch ihre Einschränkungen:

- Ein Animationsframe könnte aus mehreren Aufgaben bestehen, die unter dem 50ms-Schwellenwert liegen, aber dennoch zusammen den Hauptthread blockieren. Die Long Animation Frames API löst dies, indem sie den Animationsframe als Ganzes betrachtet.
- Der {{domxref("PerformanceLongTaskTiming")}}-Eintragstyp bietet begrenztere Informationen als der {{domxref("PerformanceLongAnimationFrameTiming")}}-Typ — er kann Ihnen zum Beispiel den Container, in dem eine lange Aufgabe aufgetreten ist, mitteilen, aber nicht das Skript oder die Funktion, die sie verursacht hat.
- Die Long Tasks API bietet nur eine unvollständige Ansicht, da sie einige wichtige Aufgaben möglicherweise ausschließt. Einige Aktualisierungen (wie das Rendering) erfolgen in separaten Aufgaben, die idealerweise zusammen mit der vorhergehenden Ausführung, die diese Aktualisierung verursachte, einbezogen werden sollten, um die "Gesamtarbeit" für diese Interaktion genau zu messen.

## Siehe auch

- [Optimierung von langen Aufgaben](https://web.dev/articles/optimize-long-tasks) auf web.dev (2024)
- [Wo lange Aufgaben scheitern](https://github.com/w3c/long-animation-frames#where-long-tasks-fall-short), Erklärungsansatz für die Long Animation Frames API (2024)

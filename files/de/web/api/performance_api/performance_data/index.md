---
title: Performancedaten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Performancedaten bereit, die Sie als Performancemetriken für Ihre Webanwendung erfassen können. Sie bietet Methoden, um Aspekte der Anwendungsperformance zu beobachten. Eine Analyse oder Visualisierung der Performancedaten bietet sie nicht. Die Performance API ist jedoch gut in die Entwicklertools der Browser integriert. Ihre Daten werden häufig an Analyse-Endpunkte und -Bibliotheken gesendet, um Performancemetriken aufzuzeichnen. Mithilfe dieser Metriken können Sie die Daten auswerten und Performanceengpässe erkennen, die sich auf Ihre Nutzer auswirken.

Diese Seite gibt einen Überblick darüber, welche Arten von Daten die Performance API bereitstellt, wie diese erfasst werden und wie Sie darauf zugreifen können.

## Daten erfassen

Die meisten Metriken, die die Performance API bereitstellt, werden automatisch vom Browser erfasst. Sie müssen die Erfassung nicht eigens anstoßen, sondern nur die Daten abrufen.

Bei einigen Metriken müssen Sie dem Browser allerdings mitteilen, was er messen soll:

- Die Metrik [Element Timing](/de/docs/Web/API/PerformanceElementTiming) misst, wie lange das Laden und Rendern bestimmter DOM-Elemente dauert. Diese Metrik muss ausdrücklich aktiviert werden: Damit der Browser Metriken für ein bestimmtes Element erfasst, müssen Sie diesem das Attribut `elementtiming` hinzufügen.
- Mit der Metrik [User Timing](/de/docs/Web/API/Performance_API/User_timing) können Sie die Zeit zwischen beliebigen Punkten in Ihrem Programm messen, die anwendungsdefinierten Vorgängen entsprechen können, etwa der Anmeldung eines Nutzers. Um diese Metriken zu erfassen, müssen Sie an den entsprechenden Stellen Aufrufe der Performance API einfügen.
- Mit der Metrik [Server Timing](/de/docs/Web/API/Performance_API/Server_timing) können Sie messen, wie lange anwendungsdefinierte serverseitige Vorgänge dauern. Um diese Metriken zu erfassen, muss Ihr Server den HTTP-Header `Server-Timing` senden.

## Struktur der Performancedaten

Mit der Performance API können Sie Performancedaten sowohl im globalen Kontext von [`Window`](/de/docs/Web/API/Window/performance) als auch von [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) erfassen. Wenn Sie Performancemetriken für mehrere Kontexte erfassen, können Sie mit [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) die Zeitursprünge der Kontexte synchronisieren.

Innerhalb dieser Kontexte werden einzelne Performancedatenpunkte durch Performance-Einträge dargestellt.

### Performance-Einträge

Ein einzelner aufgezeichneter Performancedatenpunkt wird als _Performance-Eintrag_ bezeichnet und durch eine Instanz der Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) dargestellt.

Die Performance API zeichnet verschiedene Arten von Performancedaten auf. `PerformanceEntry` besitzt die Eigenschaft [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType), deren Zeichenfolge den Typ des jeweiligen Performance-Eintrags beschreibt:

- `"container"` erfasst, wann Gruppen von Elementen innerhalb eines Containers gerendert werden.
- `"element"` erfasst, wie lange das Laden und Rendern eines Elements dauert.
- `"event"` erfasst, wie lange es dauerte, bis der Browser als Reaktion auf einen Auslöser mit der Ausführung eines Event-Handlers begann, und wie lange dessen Ausführung dauerte. Dies wird zur Messung von {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} verwendet.
- `"first-input"` erfasst den {{Glossary("First_Input_Delay", "First Input Delay")}}.
- `"largest-contentful-paint"` erfasst den größten Rendering-Vorgang während des Ladens der Seite.
- `"layout-shift"` erfasst eine Metrik dafür, wie stark sich das Seitenlayout in jedem Animationsframe verschoben hat.
- `"longtask"` erfasst Aufgaben, die mindestens 50 ms dauerten.
- `"mark"` erfasst einen benutzerdefinierten Zeitstempel, den Entwickler gesetzt haben.
- `"measure"` erfasst eine benutzerdefinierte Messung zwischen zwei Zeitstempeln, die Entwickler gesetzt haben.
- `"navigation"` erfasst Metriken im Zusammenhang mit der Navigation zur Seite und ihrem anfänglichen Laden.
- `"paint"` erfasst wichtige Zeitpunkte des Renderns während des Ladens der Seite.
- `"resource"` erfasst, wie lange der Browser brauchte, um eine Ressource abzurufen.
- `"visibility-state"` erfasst den Zeitpunkt von Änderungen des Sichtbarkeitsstatus der Seite, also beispielsweise, wann ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

### Unterklassen von Performance-Einträgen

Bestimmte Eintragstypen enthalten üblicherweise zusätzliche typspezifische Daten. Der Typ `"resource"` erfasst beispielsweise, wann die DNS-Abfrage begonnen und geendet hat. Daher werden Einträge durch Unterklassen dargestellt, die die grundlegende Schnittstelle `PerformanceEntry` erweitern. Ein `"resource"`-Eintrag wird beispielsweise durch eine Instanz von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) dargestellt. Diese erbt von `PerformanceEntry` und ergänzt Eigenschaften zum Erfassen der Zeitstempel der DNS-Abfrage.

Die Unterklassen von `PerformanceEntry` legen auch fest, welche Bedeutung die Eigenschaften von `PerformanceEntry` selbst haben. So besitzt `PerformanceEntry` beispielsweise eine Eigenschaft [`name`](/de/docs/Web/API/PerformanceEntry/name), deren Bedeutung von der jeweiligen Unterklasse abhängt.

Die folgenden Schnittstellen erben von `PerformanceEntry`:

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
- [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)
- [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)
- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)
- [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)
- [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)
- [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)
- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
  - [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) erbt von `PerformanceResourceTiming`
- [`TaskAttributionTiming`](/de/docs/Web/API/TaskAttributionTiming)
- [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)

## Auf Daten zugreifen

Sie können auf zwei Arten auf Performance-Einträge zugreifen. Die bevorzugte Methode verwendet die Schnittstelle [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver). Sie wird mit einer Callback-Funktion erstellt, die aufgerufen wird, wenn bestimmte Performance-Einträge aufgezeichnet werden. Anschließend rufen Sie ihre Methode [`observe`](/de/docs/Web/API/PerformanceObserver/observe) auf und übergeben die zu beobachtenden Typen. Mit der Option `buffered` können Sie auch Einträge abrufen, die vor Beginn der Beobachtung entstanden sind.

```js
function logEventDuration(entries) {
  const events = entries.getEntriesByType("event");
  for (const event of events) {
    console.log(
      `Event handler took: ${
        event.processingEnd - event.processingStart
      } milliseconds`,
    );
  }
}

const observer = new PerformanceObserver(logEventDuration);
observer.observe({ type: "event", buffered: true });
```

Alternativ können Sie mit den Methoden [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries), [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) alle Performance-Einträge einer Seite oder Einträge mit einem bestimmten Namen beziehungsweise Typ abrufen.

```js
const events = performance.getEntriesByType("event");

for (const event of events) {
  console.log(
    `Event handler took: ${
      event.processingEnd - event.processingStart
    } milliseconds`,
  );
}
```

`PerformanceObserver` wird aus folgenden Gründen bevorzugt:

- Die Methoden `getEntries*` geben immer alle relevanten Einträge seit Beginn der Zeitachse zurück. Wenn Sie eine dieser Methoden zweimal aufrufen, erhalten Sie dieselben Einträge erneut und müssen bereits gesehene Einträge herausfiltern.
- Benachrichtigungen von Observers werden asynchron zugestellt. So kann der Browser sie während Leerlaufzeiten verarbeiten und ihre Auswirkungen auf die Performance minimieren.
- Nicht alle Eintragstypen lassen sich mit den Methoden `getEntries*` abrufen. Für einige müssen Sie Performance Observers verwenden.

## Puffergrößen verwalten

Für jedes globale Objekt gibt es eine Puffergrenze für Performance-Einträge. Sie verhindert, dass der Browser beim Vorhalten von Performancedaten unbegrenzt Speicher belegt. Insbesondere wenn Ihre Website oder Anwendung viele Ressourcen abruft, etwa beim Polling, sollten Sie die Grenzen der Puffer berücksichtigen:

| [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Kennung | Schnittstelle                                                                 | Maximale Anzahl von Puffereinträgen |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------- |
| `"mark"`                                                           | [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)                         | Unbegrenzt                          |
| `"measure"`                                                        | [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)                   | Unbegrenzt                          |
| `"navigation"`                                                     | [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) | Unbegrenzt                          |
| `"resource"`                                                       | [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)     | 250 (anpassbar, siehe unten)        |
| `"longtask"`                                                       | [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)     | 200                                 |
| `"paint"`                                                          | [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)           | 2 (es wird nicht mehr geben)        |
| `"container"`                                                      | [`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming)   | 150                                 |
| `"element"`                                                        | [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)       | 150                                 |
| `"event"`                                                          | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 150                                 |
| `"first-input"`                                                    | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 1 (es wird nicht mehr geben)        |
| `"layout-shift"`                                                   | [`LayoutShift`](/de/docs/Web/API/LayoutShift)                                 | 150                                 |
| `"largest-contentful-paint"`                                       | [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)           | 150                                 |
| `"visibility-state"`                                               | [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)               | 50                                  |

Tabelle 1. Puffergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Wie Sie für Einträge vom Typ `"resource"` eine andere Puffergröße festlegen, erfahren Sie unter [Ressourcenpuffergrößen verwalten](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes).

Bei `"first-input"` und `"paint"` ergibt sich die Begrenzung aus der Definition der jeweiligen Metrik. Es wird nicht mehr als einen beziehungsweise zwei Einträge geben.

Der [Performance-Observer-Callback](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält den optionalen Parameter `droppedEntriesCount`. Er gibt an, wie viele Einträge verloren gingen, weil der Puffer voll war.

```js
function perfObserver(list, observer, droppedEntriesCount) {
  list.getEntries().forEach((entry) => {
    // do something with the entries
  });
  if (droppedEntriesCount > 0) {
    console.warn(
      `${droppedEntriesCount} entries were dropped because the buffer was full.`,
    );
  }
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ type: "resource", buffered: true });
```

Eine weitere nützliche Methode ist [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords). Sie gibt die aktuelle Liste der im Performance Observer gespeicherten Performance-Einträge zurück und leert sie zugleich.

## JSON-Daten

Alle Performance-Einträge bieten einen `toJSON()`-{{Glossary("Serialization", "Serializer")}}, der eine {{jsxref("JSON")}}-Darstellung des Eintrags zurückgibt. Das ist hilfreich, wenn Sie alle verfügbaren Daten erfassen und an einem anderen Ort speichern möchten.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

Dadurch würde ein JSON-Objekt wie das folgende ausgegeben:

```json
{
  "name": "dragover",
  "entryType": "event",
  "startTime": 67090751.599999905,
  "duration": 128,
  "processingStart": 67090751.70000005,
  "processingEnd": 67090751.900000095,
  "cancelable": true
}
```

Um eine Zeichenfolgendarstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt mit einem beliebigen `PerformanceEntry`-Objekt verwenden. Dabei wird automatisch dessen Methode `toJSON()` aufgerufen.

## Siehe auch

- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)

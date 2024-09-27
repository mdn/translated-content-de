---
title: Leistungsdaten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Leistungsdaten bereit, die als Leistungsmetriken für Ihre Webanwendung gesammelt werden können. Sie bietet Methoden, um Aspekte der Anwendungsleistung zu beobachten. Sie liefert jedoch keine Leistungsdatenanalysen oder Visualisierungen. Die Performance API lässt sich gut mit Entwicklerwerkzeugen in Browsern integrieren und ihre Daten werden häufig an Analyseendpunkte und -bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen, die Ihnen helfen, die Daten auszuwerten und Engpässe in der Leistung zu identifizieren, die Ihre Nutzer beeinträchtigen.

Diese Seite bietet einen Überblick darüber, welche Arten von Leistungsdaten der Performance API existieren, wie sie gesammelt werden und wie darauf zugegriffen werden kann.

## Datensammlung

Die meisten der von der Performance API bereitgestellten Metriken werden automatisch vom Browser gesammelt und Sie müssen nicht angeben, dass sie gesammelt werden sollen: Sie müssen sie nur abrufen.

Für einige Metriken müssen Sie dem Browser mitteilen, was gemessen werden soll:

- Die [Element Timing](/de/docs/Web/API/Performance_API/Element_timing)-Metrik misst die Zeit, die benötigt wird, um bestimmte DOM-Elemente zu laden und darzustellen. Diese Metrik ist zustimmungspflichtig: Um den Browser zu bitten, die Metriken für ein bestimmtes Element einzubeziehen, müssen Sie das `elementtiming`-Attribut hinzufügen.
- Die [User Timing](/de/docs/Web/API/Performance_API/User_timing)-Metrik ermöglicht es Ihnen, die Zeit zwischen beliebigen Punkten in Ihrem Programm zu messen, die möglicherweise anwendungsdefinierte Operationen abbilden (wie zum Beispiel das Einloggen eines Nutzers). Um diese Metriken zu erfassen, müssen Sie an den relevanten Stellen Performance API-Aufrufe hinzufügen.
- Die [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)-Metrik ermöglicht es Ihnen, die Zeit zu messen, die für anwendungsdefinierte Server-seitige Operationen benötigt wird. Um diese Metriken zu erfassen, muss Ihr Server den `Server-Timing`-HTTP-Header senden.

## Struktur der Leistungsdaten

Mit der Performance API können Sie Leistungsdaten sowohl im [`Window`](/de/docs/Web/API/Window/performance) als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) globalen Kontext sammeln. Wenn Sie Leistungsmetriken für mehrere Kontexte sammeln, werfen Sie einen Blick auf [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin), um Zeitursprünge zwischen den Kontexten zu synchronisieren.

Innerhalb dieser Kontexte werden einzelne Leistungsdaten durch Leistungseinträge dargestellt.

### Leistungseinträge

Ein einzelner aufgezeichneter Leistungsdatensatz wird als _Leistungseintrag_ bezeichnet und wird durch eine Instanz der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Schnittstelle dargestellt.

Die Performance API zeichnet verschiedene Typen von Leistungsdaten auf, und die `PerformanceEntry`-Schnittstelle hat eine [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft, die als Zeichenkette den Typ des Leistungseintrags beschreibt:

- `"element"` zeichnet auf, wie lange es dauert, bis ein Element geladen und gerendert ist.
- `"event"` zeichnet auf, wie lange der Browser gebraucht hat, um einen Ereignis-Handler als Reaktion auf seinen Auslöser zu starten, und wie lange der Ereignis-Handler benötigt hat.
- `"first-input"` zeichnet die [First input delay](/de/docs/Glossary/First_input_delay) auf.
- `"largest-contentful-paint"` zeichnet das größte Rendering während des Seitenladens auf.
- `"layout-shift"` zeichnet eine Metrik auf, die wiedergibt, wie viel sich das Seitenlayout in jedem Animationsframe verschoben hat.
- `"longtask"` zeichnet Aufgaben auf, die 50 ms oder mehr in Anspruch genommen haben.
- `"mark"` zeichnet einen benutzerdefinierten Zeitstempel auf, der vom Entwickler gesetzt wurde.
- `"measure"` zeichnet eine benutzerdefinierte Messung zwischen zwei Zeitstempeln auf, die vom Entwickler gesetzt wurden.
- `"navigation"` zeichnet Metriken auf, die mit der Navigation zum und initialen Laden der Seite zusammenhängen.
- `"paint"` zeichnet wichtige Renderzeitpunkte während des Seitenladens auf.
- `"resource"` zeichnet auf, wie lange der Browser gebraucht hat, um eine Ressource abzurufen.
- `"visibility-state"` zeichnet die zeitliche Änderung des Sichtbarkeitsstatus der Seite auf, also wenn ein Tab in den Vordergrund oder Hintergrund wechselt.

### Unterklassen der Leistungseinträge

Besondere Eintragstypen enthalten in der Regel zusätzliche, typspezifische Daten: Zum Beispiel erfasst der `"resource"`-Typ die Zeiten, zu denen die DNS-Abfrage begonnen und beendet wurde. Daher werden Einträge durch Unterklassen dargestellt, die das grundlegende `PerformanceEntry`-Interface erweitern. Ein `"resource"`-Eintrag wird beispielsweise durch eine Instanz von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) dargestellt, das von `PerformanceEntry` erbt und, das Eigenschaften hinzufügt, um DNS-Abfrage-Zeitstempel aufzuzeichnen.

Die Unterklassen von `PerformanceEntry` definieren auch die Semantik der Eigenschaften, die `PerformanceEntry` selbst gehören: Zum Beispiel hat `PerformanceEntry` eine [`name`](/de/docs/Web/API/PerformanceEntry/name)-Eigenschaft, deren Bedeutung von der Unterklasse abhängt.

Die folgenden Schnittstellen erben von `PerformanceEntry`:

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- [`LayoutShift`](/de/docs/Web/API/LayoutShift)
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

## Zugriff auf Daten

Sie können auf Leistungseinträge auf zwei Arten zugreifen. Die bevorzugte Methode ist die Verwendung der [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle, die mit einer Rückruffunktion konstruiert wird, die aufgerufen wird, wenn bestimmte Leistungseinträge aufgezeichnet werden. Anschließend rufen Sie die [`observe`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, übergeben die zu beobachtenden Typen und verwenden die Option `buffered`, um Einträge abzurufen, die vor der Beobachtung aufgetreten sind.

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

Alternativ können Sie die Methoden [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries), [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwenden, um alle Leistungseinträge für eine Seite abzurufen oder Einträge, die dem gegebenen Namen oder Typ entsprechen.

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

Die `PerformanceObserver`-Option wird bevorzugt, weil:

- Die `getEntries*`-Methoden immer alle relevanten Einträge seit Beginn der Zeitachse zurückgeben, sodass Sie, wenn Sie sie zweimal aufrufen, die gleichen Einträge erneut sehen und die Einträge herausfiltern müssen, die Sie bereits gesehen haben.
- Beobachtungsbenachrichtigungen asynchron zugestellt werden, sodass der Browser sie während Leerlaufzeiten zustellen kann, um deren Leistungsauswirkung zu minimieren.
- Nicht alle Eintragstypen mit den `getEntries*`-Methoden funktionieren. Für einige müssen Sie Beobachter verwenden, um darauf zuzugreifen.

## Verwalten von Pufferspeichergrößen

Für Leistungseinträge gibt es für jedes globale Objekt ein Pufferspeicherlimit. Dies stellt sicher, dass der Browser bei der Speicherung von Leistungsdaten keinen unbegrenzten Speicher verbraucht. Besonders wenn Ihre Webseite oder Anwendung viele Ressourcen abruft (z. B. bei Verwendung von Polling), müssen Sie sich die Grenzen für die Puffer genauer ansehen:

| [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Bezeichner | Interface                                                                     | Maximale Anzahl von Puffer-Einträgen |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------ |
| `"mark"`                                                              | [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)                         | Unendlich                            |
| `"measure"`                                                           | [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)                   | Unendlich                            |
| `"navigation"`                                                        | [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) | Unendlich                            |
| `"resource"`                                                          | [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)     | 250 (anpassbar, siehe unten)         |
| `"longtask"`                                                          | [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)     | 200                                  |
| `"paint"`                                                             | [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)           | 2 (es wird keine weiteren geben)     |
| `"element"`                                                           | [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)       | 150                                  |
| `"event"`                                                             | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 150                                  |
| `"first-input"`                                                       | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 1 (es wird keine weiteren geben)     |
| `"layout-shift"`                                                      | [`LayoutShift`](/de/docs/Web/API/LayoutShift)                                 | 150                                  |
| `"largest-contentful-paint"`                                          | [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)           | 150                                  |
| `"visibility-state"`                                                  | [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)               | 50                                   |

Tabelle 1. Pufferspeichergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Für `"resource"`-Eintragstypen, siehe [Verwalten von Ressourcenpuffergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) für Informationen darüber, wie Sie eine andere Puffergröße einstellen können.

Für `"first-input"` und `"paint"` ist die Begrenzung ein inhärenter Teil der Definition der Metrik. Es wird nicht mehr als ein oder zwei Einträge geben.

Der [Performance Observer Callback](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält ein optionales `droppedEntriesCount`-Parameter, das Ihnen mitteilt, wie viele Einträge verloren gegangen sind, weil der Pufferspeicher voll war.

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

Eine weitere nützliche Methode ist [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords), die die aktuelle Liste der in der Performance Observer gespeicherten Leistungseinträge zurückgibt und sie dabei gleichzeitig leert.

## JSON-Daten

Alle Leistungseinträge bieten eine `toJSON()`-Funktion [Serializer](/de/docs/Glossary/Serialization), die eine {{jsxref("JSON")}}-Darstellung des Eintrags zurückgibt. Dies kann nützlich sein, wenn Sie alle verfügbaren Daten sammeln und irgendwo speichern möchten.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry.toJSON());
  });
});

observer.observe({ type: "event", buffered: true });
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

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

Um eine String-Darstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem beliebigen `PerformanceEntry`-Objekt direkt verwenden; es wird automatisch die `toJSON()`-Methode des Eintrags aufrufen.

## Siehe auch

- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)

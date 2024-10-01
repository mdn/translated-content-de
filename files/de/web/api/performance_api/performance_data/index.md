---
title: Performance-Daten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Leistungsdaten bereit, die als Leistungsmetriken für Ihre Webanwendung gesammelt werden können. Sie bietet Methoden, um Aspekte der Anwendungsleistung zu beobachten. Sie bietet jedoch keine Leistungsdatenanalyse oder Visualisierungen. Die Performance API ist jedoch gut in die Entwicklerwerkzeuge der Browser integriert, und ihre Daten werden häufig an Analyseendpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten, um Engpässe zu finden, die Ihre Benutzer betreffen.

Diese Seite bietet einen Überblick darüber, welche Arten von Performance API-Daten existieren, wie sie gesammelt werden und wie auf sie zugegriffen werden kann.

## Datenerfassung

Die meisten von der Performance API bereitgestellten Metriken werden automatisch vom Browser erfasst. Sie müssen ihm nicht mitteilen, sie zu sammeln: Es reicht, sie abzurufen.

Für einige Metriken müssen Sie dem Browser jedoch mitteilen, was er messen soll:

- Die [Element Timing](/de/docs/Web/API/Performance_API/Element_timing)-Metrik misst die Zeit, die zum Laden und Rendern bestimmter DOM-Elemente benötigt wird. Diese Metrik erfordert eine explizite Aktivierung: Um den Browser zu bitten, Metriken für ein bestimmtes Element einzuschließen, müssen Sie das `elementtiming`-Attribut hinzufügen.
- Die [User Timing](/de/docs/Web/API/Performance_API/User_timing)-Metrik ermöglicht es Ihnen, die Zeit zwischen beliebigen Punkten in Ihrem Programm zu messen, die möglicherweise Anwendungs-definierten Operationen (wie das Einloggen eines Benutzers) zugeordnet sind. Um diese Metriken zu sammeln, müssen Sie API-Aufrufe an den relevanten Punkten hinzufügen.
- Die [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)-Metrik ermöglicht es Ihnen, die für Anwendungs-definierte serverseitige Operationen benötigte Zeit zu messen. Um diese Metriken zu sammeln, muss Ihr Server den `Server-Timing` HTTP-Header senden.

## Struktur der Performance-Daten

Mit der Performance API können Sie Leistungsdaten sowohl im [`Window`](/de/docs/Web/API/Window/performance)- als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance)-globalen Kontext sammeln. Wenn Sie Leistungsmetriken für mehrere Kontexte sammeln, sollten Sie sich [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) ansehen, um Zeitursprünge zwischen den Kontexten zu synchronisieren.

Innerhalb dieser Kontexte werden einzelne Leistungsdaten als Leistungseinträge dargestellt.

### Leistungseinträge

Ein einzelner erfasster Leistungsdatenpunkt wird als _Leistungseintrag_ bezeichnet und durch eine Instanz des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interfaces dargestellt.

Die Performance API zeichnet verschiedene Arten von Leistungsdaten auf, und `PerformanceEntry` hat eine [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft, die ein String ist, der den Typ dieses Leistungseintrags beschreibt:

- `"element"` zeichnet auf, wie lange es dauert, bis ein Element geladen und gerendert wird.
- `"event"` zeichnet auf, wie lange es gedauert hat, bis der Browser auf das Auslösen eines Ereignishandlers reagiert hat, und wie lange der Ereignishandler benötigt wurde, um ausgeführt zu werden.
- `"first-input"` zeichnet die {{Glossary("First_input_delay", "First input delay")}} auf.
- `"largest-contentful-paint"` zeichnet das größte Rendering während des Seitenladens auf.
- `"layout-shift"` zeichnet eine Metrik auf, die darstellt, wie stark sich das Seitenlayout in jedem Animationsframe verschoben hat.
- `"longtask"` zeichnet Aufgaben auf, die 50ms oder länger dauerten.
- `"mark"` zeichnet einen benutzerdefinierten Zeitstempel auf, der vom Entwickler gemacht wurde.
- `"measure"` zeichnet eine benutzerdefinierte Messung zwischen zwei Zeitstempeln auf, die vom Entwickler gemacht wurden.
- `"navigation"` zeichnet Metriken auf, die mit der Navigation zum und dem anfänglichen Laden der Seite verbunden sind.
- `"paint"` zeichnet wichtige Momente des Renderings während des Seitenladens auf.
- `"resource"` zeichnet auf, wie lange es der Browser benötigte, um eine Ressource abzurufen.
- `"visibility-state"` zeichnet die Zeiten auf, zu denen sich der Sichtbarkeitszustand einer Seite ändert, z.B. wenn ein Tab von Vordergrund zu Hintergrund wechselt oder umgekehrt.

### Subklassen der Leistungseinträge

Bestimmte Eintragstypen enthalten in der Regel zusätzliche, typenspezifische Daten: zum Beispiel erfasst der `"resource"`-Typ die Zeitpunkte, zu denen die DNS-Lookup gestartet und beendet wurde. Daher werden Einträge durch Subklassen dargestellt, die das grundlegende `PerformanceEntry`-Interface erweitern. Beispielsweise wird ein `"resource"`-Eintrag durch eine Instanz von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) dargestellt, die von `PerformanceEntry` erbt und Eigenschaften hinzufügt, um DNS-Lookup-Zeitstempel aufzuzeichnen.

Die Subklassen von `PerformanceEntry` definieren auch die Semantik der Eigenschaften, die `PerformanceEntry` selbst besitzt: Beispielsweise hat `PerformanceEntry` eine [`name`](/de/docs/Web/API/PerformanceEntry/name)-Eigenschaft, deren Bedeutung von der Subklasse abhängt.

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

Sie können auf Leistungsdaten auf zwei Arten zugreifen. Der bevorzugte Weg ist die Verwendung des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interfaces, das mit einer Callback-Funktion erstellt wird, die aufgerufen wird, wenn bestimmte Leistungseinträge erfasst werden. Dann rufen Sie die [`observe`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, geben die zu beobachtenden Typen an und verwenden die Option `buffered`, um Einträge abzurufen, die vor der Beobachtung aufgetreten sind.

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

Alternativ können Sie die Methoden [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries), [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwenden, um alle Leistungseinträge für eine Seite oder Einträge mit einem bestimmten Namen oder Typ abzurufen.

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

- Die `getEntries*`-Methoden immer alle relevanten Einträge seit Beginn der Zeitleiste zurückgeben, sodass Sie beim erneuten Aufruf die gleichen Einträge noch einmal sehen und zuvor gesehene Einträge herausfiltern müssen.
- Beobachtungsbenachrichtigungen asynchron zugestellt werden, sodass der Browser sie während Leerlaufzeiten versenden kann, um ihren Leistungseinfluss zu minimieren.
- Nicht alle Eintragstypen funktionieren mit den `getEntries*`-Methoden. Für einige müssen Sie Performance Observer verwenden, um auf sie zuzugreifen.

## Verwaltung der Pufferspeichergrößen

Es gibt ein Pufferlimit für Leistungseinträge für jedes globale Objekt. Es stellt sicher, dass der Browser keinen unbegrenzten Speicher verbraucht, wenn er Leistungsdaten speichert. Besonders wenn Ihre Website oder Anwendung viele Ressourcen abruft (z.B. bei Verwendung von Polling), müssen Sie die Grenzen der Puffer berücksichtigen:

| [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Bezeichner | Schnittstelle                                                                 | Maximale Anzahl der Puffereinträge |
| --------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ---------------------------------- |
| `"mark"`                                                              | [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)                         | Unendlich                          |
| `"measure"`                                                           | [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)                   | Unendlich                          |
| `"navigation"`                                                        | [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) | Unendlich                          |
| `"resource"`                                                          | [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)     | 250 (anpassbar, siehe unten)       |
| `"longtask"`                                                          | [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)     | 200                                |
| `"paint"`                                                             | [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)           | 2 (es wird nicht mehr geben)       |
| `"element"`                                                           | [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)       | 150                                |
| `"event"`                                                             | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 150                                |
| `"first-input"`                                                       | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 1 (es wird nicht mehr geben)       |
| `"layout-shift"`                                                      | [`LayoutShift`](/de/docs/Web/API/LayoutShift)                                 | 150                                |
| `"largest-contentful-paint"`                                          | [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)           | 150                                |
| `"visibility-state"`                                                  | [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)               | 50                                 |

Tabelle 1. Pufferspeichergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Für `"resource"`-Eintragstypen siehe [Verwaltung der Ressourcen-Puffergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes), um die Einstellung einer anderen Puffergröße zu erlangen.

Für `"first-input"` und `"paint"` ist die Begrenzung in der Definition der Metrik inhärent. Es wird nicht mehr als einen (oder zwei) Einträge geben.

Der [Performance-Observer-Callback](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält einen optionalen `droppedEntriesCount`-Parameter, der Ihnen mitteilt, wie viele Einträge verloren gegangen sind, weil der Puffer voll war.

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

Eine weitere nützliche Methode ist [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords), die die aktuelle Liste der Leistungseinträge zurückgibt, die im Performance-Observer gespeichert sind, und sie dabei leert.

## JSON-Daten

Alle Leistungseinträge bieten einen `toJSON()` {{Glossary("Serialization", "Serializer")}}, der eine {{jsxref("JSON")}}-Darstellung des Eintrags zurückgibt. Dies kann nützlich sein, wenn Sie alle verfügbaren Daten sammeln und irgendwo speichern möchten.

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

Um eine String-Darstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit jedem `PerformanceEntry`-Objekt direkt verwenden; es wird die `toJSON()`-Methode des Eintrags automatisch aufrufen.

## Siehe auch

- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)

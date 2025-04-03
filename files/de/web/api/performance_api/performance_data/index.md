---
title: Leistungsdaten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Leistungsdaten bereit, die als Leistungskennzahlen für Ihre Webanwendung gesammelt werden können. Sie bietet Methoden, um Aspekte der Anwendungsleistung zu beobachten. Sie bietet jedoch keine Leistungsdatenanalyse oder Visualisierungen. Die Performance API ist jedoch gut in Entwickler-Tools in Browsern integriert, und ihre Daten werden häufig an Analysedienste und Bibliotheken gesendet, um Leistungskennzahlen aufzuzeichnen, die Ihnen helfen, die Daten zu bewerten und Leistungsengpässe zu finden, die Ihre Benutzer beeinflussen.

Diese Seite bietet einen Überblick darüber, welche Arten von Performance-API-Daten existieren, wie sie gesammelt werden und wie sie zugänglich gemacht werden können.

## Datenerfassung

Die meisten der von der Performance API bereitgestellten Metriken werden automatisch vom Browser erfasst, und Sie müssen ihn nicht dazu auffordern, sie zu erfassen: Sie müssen sie nur abrufen.

Für einige Metriken müssen Sie dem Browser jedoch mitteilen, was gemessen werden soll:

- Die [Element Timing](/de/docs/Web/API/PerformanceElementTiming)-Metrik misst die Zeit, die zum Laden und Rendern bestimmter DOM-Elemente erforderlich ist. Diese Metrik ist optional: Um den Browser zu bitten, Metriken für ein bestimmtes Element einzuschließen, müssen Sie ihm das `elementtiming`-Attribut hinzufügen.
- Die [User Timing](/de/docs/Web/API/Performance_API/User_timing)-Metrik ermöglicht es Ihnen, die Zeit zwischen beliebigen Punkten in Ihrem Programm zu messen, die möglicherweise auf von der Anwendung definierte Operationen abbilden (wie das Einloggen eines Benutzers). Um diese Metriken zu erfassen, müssen Sie Performance-API-Aufrufe an den entsprechenden Punkten hinzufügen.
- Die [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)-Metrik ermöglicht es Ihnen, die Zeit zu messen, die für benutzerdefinierte serverseitige Operationen benötigt wird. Um diese Metriken zu erfassen, muss Ihr Server den `Server-Timing`-HTTP-Header senden.

## Datenstruktur der Leistung

Mit der Performance API können Sie Leistungsdaten sowohl im [`Window`](/de/docs/Web/API/Window/performance)- als auch im [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance)-globalen Kontext sammeln. Wenn Sie Leistungsmetriken für mehrere Kontexte erfassen, sehen Sie sich [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) an, um Zeitursprünge zwischen Kontexten zu synchronisieren.

Innerhalb dieser Kontexte wird jedes Leistungsdatum durch Leistungseinträge dargestellt.

### Leistungseinträge

Ein einzeln aufgezeichneter Leistungsdatensatz wird als _Leistungseintrag_ bezeichnet und durch eine Instanz des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interfaces dargestellt.

Die Performance API zeichnet verschiedene Arten von Leistungsdaten auf, und der `PerformanceEntry` verfügt über eine [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft, die als String die Art dieses Leistungseintrags beschreibt:

- `"element"` zeichnet auf, wie lange ein Element zum Laden und Rendern benötigt.
- `"event"` zeichnet auf, wie lange der Browser benötigt hat, um einen Ereignishandler in Antwort auf seinen Auslöser auszuführen, und wie lange der Ereignishandler benötigt hat, um ausgeführt zu werden. Wird verwendet, um die {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} zu messen.
- `"first-input"` zeichnet die {{Glossary("First_Input_Delay", "First Input Delay")}} auf.
- `"largest-contentful-paint"` zeichnet die größte Darstellung während des Seitenladens auf.
- `"layout-shift"` zeichnet eine Metrik auf, die angibt, wie stark sich das Seitenlayout in jedem Animationsframe verschoben hat.
- `"longtask"` zeichnet Aufgaben auf, die 50 ms oder länger dauern.
- `"mark"` zeichnet einen vom Entwickler erstellten benutzerdefinierten Zeitstempel auf.
- `"measure"` zeichnet eine benutzerdefinierte Messung zwischen zwei vom Entwickler erstellten Zeitstempeln auf.
- `"navigation"` zeichnet Metriken in Verbindung mit der Navigation zur und dem anfänglichen Laden der Seite auf.
- `"paint"` zeichnet wichtige Momente des Renderings während des Seitenladens auf.
- `"resource"` zeichnet auf, wie lange der Browser benötigt hat, um eine Ressource abzurufen.
- `"visibility-state"` zeichnet die Zeitpunkte von Sichtbarkeitszustandsänderungen der Seite auf, d.h. wenn ein Tab vom Vordergrund in den Hintergrund wechselt oder umgekehrt.

### Subklassen von Leistungseinträgen

Bestimmte Eintragstypen enthalten in der Regel zusätzliche typenspezifische Daten: Zum Beispiel erfasst der `"resource"`-Typ die Zeitpunkte, zu denen die DNS-Suche begann und endete. Daher werden Einträge durch Subklassen dargestellt, die das grundlegende `PerformanceEntry`-Interface erweitern. Ein `"resource"`-Eintrag wird beispielsweise durch eine Instanz von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) dargestellt, die von `PerformanceEntry` erbt und Eigenschaften hinzufügt, um DNS-Suchzeitstempel aufzuzeichnen.

Die Subklassen von `PerformanceEntry` definieren auch die Semantik der Eigenschaften, die zu `PerformanceEntry` selbst gehören: Zum Beispiel hat `PerformanceEntry` eine [`name`](/de/docs/Web/API/PerformanceEntry/name)-Eigenschaft, deren Bedeutung von der Subklasse abhängt.

Die folgenden Interfaces erben von `PerformanceEntry`:

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

Sie können auf Leistungseinträge auf zwei Arten zugreifen. Die bevorzugte Methode ist die Verwendung des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interfaces, das mit einer Callback-Funktion erstellt wird, die aufgerufen wird, wenn bestimmte Leistungseinträge aufgezeichnet werden. Sie rufen dann die [`observe`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, geben die zu beobachtenden Typen an und verwenden die `buffered`-Option, um Einträge abzurufen, die vor der Beobachtung aufgetreten sind.

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

Alternativ können Sie die Methoden [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries), [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName) und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) verwenden, um alle Leistungseinträge für eine Seite oder Einträge, die dem angegebenen Namen oder Typ entsprechen, abzurufen.

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

- Die `getEntries*`-Methoden immer alle relevanten Einträge seit Beginn der Zeitachse zurückgeben. Wenn Sie sie also zweimal aufrufen, sehen Sie dieselben Einträge erneut und müssen Einträge herausfiltern, die Sie bereits gesehen haben.
- Beobachternachrichten werden asynchron zugestellt, sodass der Browser sie während inaktiver Zeit zur Minimierung ihres Leistungseinflusses senden kann.
- Nicht alle Eintragstypen funktionieren mit den `getEntries*`-Methoden. Für einige müssen Sie Leistungsbeobachter verwenden, um auf sie zuzugreifen.

## Verwalten von Pufferspeichern

Es gibt ein Pufferlimit für Leistungseinträge für jedes globale Objekt. Dieses stellt sicher, dass der Browser nicht unbegrenzt Speicher verbraucht, wenn er Leistungsdaten speichert. Besonders wenn Ihre Website oder Anwendung viele Ressourcen abruft (z.B. bei Verwendung von Polling), müssen Sie sich die Pufferlimits ansehen:

| [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Kennung | Interface                                                                     | Maximale Anzahl von Puffereinträgen |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------- | ----------------------------------- |
| `"mark"`                                                           | [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)                         | Unendlich                           |
| `"measure"`                                                        | [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)                   | Unendlich                           |
| `"navigation"`                                                     | [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) | Unendlich                           |
| `"resource"`                                                       | [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)     | 250 (einstellbar, siehe unten)      |
| `"longtask"`                                                       | [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)     | 200                                 |
| `"paint"`                                                          | [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)           | 2 (es gibt keine weiteren)          |
| `"element"`                                                        | [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)       | 150                                 |
| `"event"`                                                          | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 150                                 |
| `"first-input"`                                                    | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 1 (es gibt keine weiteren)          |
| `"layout-shift"`                                                   | [`LayoutShift`](/de/docs/Web/API/LayoutShift)                                 | 150                                 |
| `"largest-contentful-paint"`                                       | [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)           | 150                                 |
| `"visibility-state"`                                               | [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)               | 50                                  |

Tabelle 1. Pufferspeichergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Für `"resource"`-Eintragstypen finden Sie unter [Verwalten von Ressourcenspeichergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) Informationen dazu, wie Sie eine andere Pufferspeichergröße festlegen können.

Für `"first-input"` und `"paint"` ist die Begrenzung in der Definition der Metrik inhärent. Es wird nicht mehr als einen (oder zwei) Einträge geben.

Der [Performance Observer-Rückruf](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält einen optionalen `droppedEntriesCount`-Parameter, der Ihnen mitteilt, wie viele Einträge verloren gingen, weil der Puffer voll war.

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

Eine weitere nützliche Methode ist [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords), die die aktuelle Liste der im Leistungsbeobachter gespeicherten Leistungseinträge zurückgibt und diese gleichzeitig leert.

## JSON-Daten

Alle Leistungseinträge bieten einen `toJSON()`- {{Glossary("Serialization", "Serializer")}}, der eine {{jsxref("JSON")}}-Darstellung des Eintrags liefert. Dies kann nützlich sein, wenn Sie alle verfügbaren Daten sammeln und irgendwo speichern möchten.

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

Um eine String-Darstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit jedem `PerformanceEntry`-Objekt direkt verwenden; es wird automatisch die `toJSON()`-Methode des Eintrags aufrufen.

## Siehe auch

- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)

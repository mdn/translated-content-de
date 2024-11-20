---
title: Leistungsdaten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 0598721ab3f672c66a8357d9e6b27ec8644a2b21
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Leistungsdaten zur Verfügung, die als Leistungsmetriken für Ihre Webanwendung gesammelt werden können. Sie bietet Methoden, um Aspekte der Anwendungsleistung zu beobachten. Die Analyse oder Visualisierung von Leistungsdaten gehört jedoch nicht zum Funktionsumfang. Die Performance API ist jedoch gut in Entwicklertools der Browser integriert, und ihre Daten werden häufig an Analyse-Endpunkte und Bibliotheken gesendet, um Leistungsmetriken aufzunehmen, die Ihnen helfen, die Daten zu bewerten und Leistungsengpässe zu identifizieren, die Ihre Nutzer beeinflussen.

Diese Seite bietet einen Überblick darüber, welche Arten von Performance API-Daten existieren, wie sie gesammelt werden und wie auf sie zugegriffen werden kann.

## Datensammlung

Die meisten der von der Performance API offenbarten Metriken werden automatisch vom Browser gesammelt, und Sie müssen ihm nicht mitteilen, sie zu erfassen: Sie müssen sie lediglich abrufen.

Bei einigen Metriken müssen Sie dem Browser mitteilen, was gemessen werden soll:

- Die [Element Timing](/de/docs/Web/API/PerformanceElementTiming)-Metrik misst die Zeit, die benötigt wird, um bestimmte DOM-Elemente zu laden und darzustellen. Diese Metrik erfordert eine Wahlbeteiligung: Um den Browser zu bitten, Metriken für ein bestimmtes Element einzubeziehen, müssen Sie das `elementtiming`-Attribut zu diesem hinzufügen.
- Die [User Timing](/de/docs/Web/API/Performance_API/User_timing)-Metrik ermöglicht es Ihnen, die Zeit zwischen beliebigen Punkten in Ihrem Programm zu messen, die möglicherweise anwendungsdefinierte Operationen (wie z.B. das Einloggen eines Nutzers) abbilden. Um diese Metriken zu sammeln, müssen Sie API-Aufrufe der Performance API an den relevanten Punkten hinzufügen.
- Die [Server Timing](/de/docs/Web/API/Performance_API/Server_timing)-Metrik ermöglicht es Ihnen, die für anwendungsdefinierte serverseitige Operationen benötigte Zeit zu messen. Um diese Metriken zu sammeln, muss Ihr Server den `Server-Timing` HTTP-Header senden.

## Struktur der Leistungsdaten

Mit der Performance API können Sie Leistungsdaten sowohl in den globalen Kontexten [`Window`](/de/docs/Web/API/Window/performance) als auch [`Worker`](/de/docs/Web/API/WorkerGlobalScope/performance) sammeln. Wenn Sie Leistungsmetriken für mehrere Kontexte sammeln, sollten Sie sich [`performance.timeOrigin`](/de/docs/Web/API/Performance/timeOrigin) ansehen, um die Zeitursprünge zwischen den Kontexten zu synchronisieren.

Innerhalb dieser Kontexte wird jede einzelne Leistungsdaten als Leistungseintrag dargestellt.

### Leistungseinträge

Ein einzelner aufgezeichneter Leistungsdatenpunkt wird als _Leistungseintrag_ bezeichnet und wird durch eine Instanz der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Schnittstelle dargestellt.

Die Performance API zeichnet verschiedene Arten von Leistungsdaten auf, und die `PerformanceEntry` hat eine [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft, die eine Zeichenkette ist, die den Typ dieses Leistungseintrags beschreibt:

- `"element"` zeichnet auf, wie lange es dauert, ein Element zu laden und darzustellen.
- `"event"` zeichnet auf, wie lange es dauerte, bis der Browser mit der Ausführung eines Ereignishandlers als Reaktion auf dessen Auslöser begann, und wie lange der Ereignishandler zur Ausführung benötigte. Wird verwendet, um {{Glossary("Interaction_to_Next_Paint", "Interaction to Next Paint")}} zu messen.
- `"first-input"` zeichnet die {{Glossary("First_Input_Delay", "First Input Delay")}} auf.
- `"largest-contentful-paint"` zeichnet die größte Darstellung während des Seitenladens auf.
- `"layout-shift"` zeichnet eine Metrik auf, die beschreibt, wie stark sich das Seitenlayout in jedem Animationsrahmen verschoben hat.
- `"longtask"` zeichnet Aufgaben auf, die 50 ms oder länger dauerten.
- `"mark"` zeichnet einen vom Entwickler gemachten benutzerdefinierten Zeitstempel auf.
- `"measure"` zeichnet eine benutzerdefinierte Messung zwischen zwei vom Entwickler gemachten Zeitstempeln auf.
- `"navigation"` zeichnet Metriken im Zusammenhang mit der Navigation zur und initialen Laden der Seite auf.
- `"paint"` zeichnet wichtige Momente des Renderings während des Seitenladens auf.
- `"resource"` zeichnet auf, wie lange der Browser benötigte, um eine Ressource abzurufen.
- `"visibility-state"` zeichnet den Zeitpunkt von Sichtbarkeitsstatusänderungen der Seite auf, z. B. wenn ein Tab von Vordergrund zu Hintergrund oder umgekehrt wechselt.

### Unterklassen von Leistungseinträgen

Bestimmte Eintragstypen enthalten typischerweise zusätzliche, typenspezifische Daten: Zum Beispiel erfasst der Typ `"resource"` den Zeitpunkt, zu dem der DNS-Lookup begann und endete. Einträge werden also durch Unterklassen dargestellt, die die Basis-Schnittstelle `PerformanceEntry` erweitern. Zum Beispiel wird ein `"resource"`-Eintrag durch eine Instanz von [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) dargestellt, die von `PerformanceEntry` erbt und Eigenschaften hinzufügt, um Zeitstempel für DNS-Volano-Lookups zu erfassen.

Die Unterklassen von `PerformanceEntry` definieren auch die Semantik der Eigenschaften, die zu `PerformanceEntry` selbst gehören: zum Beispiel hat `PerformanceEntry` eine [`name`](/de/docs/Web/API/PerformanceEntry/name)-Eigenschaft, deren Bedeutung von der Unterklasse abhängt.

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

Sie können Leistungseinträge auf zwei Arten abrufen. Der bevorzugte Weg ist die Verwendung der [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle, die mit einer Rückruffunktion konstruiert wird, die aufgerufen wird, wenn bestimmte Leistungseinträge aufgezeichnet werden. Sie rufen dann ihre [`observe`](/de/docs/Web/API/PerformanceObserver/observe)-Methode auf, um die zu beobachtenden Typen zu übergeben und mit der `buffered`-Option, um Einträge abzurufen, die vor der Beobachtung aufgetreten sind.

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

Alternativ können Sie die [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries), [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName), und [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) Methoden verwenden, um alle Leistungseinträge für eine Seite abzurufen, oder Einträge, die zu dem angegebenen Namen oder Typ passen.

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

Die `PerformanceObserver`-Option ist bevorzugt, weil:

- Die `getEntries*`-Methoden immer alle relevanten Einträge seit Beginn der Zeitachse zurückgeben, sodass wenn Sie sie zweimal aufrufen, Sie die gleichen Einträge erneut sehen und die Einträge filtern müssen, die Sie bereits gesehen haben.
- Beobachternotifikationen werden asynchron zugestellt, sodass der Browser sie in Ruhezeiten verteilen kann, um ihren Leistungseinfluss zu minimieren.
- Nicht alle Eintragstypen funktionieren mit den `getEntries*`-Methoden. Für einige müssen Sie Performance-Beobachter verwenden, um auf diese zuzugreifen.

## Verwaltung von Puffergrößen

Es gibt ein Pufferlimit für Leistungseinträge für jedes globale Objekt. Es stellt sicher, dass der Browser nicht unendlich viel Speicher verbraucht, während er Leistungsdaten hält. Besonders wenn Ihre Website oder Anwendung viele Ressourcen abruft (z.B. bei Verwendung von Polling), müssen Sie möglicherweise die Limits für die Puffer überprüfen:

| [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) Identifizierung | Schnittstelle                                                                 | Maximale Anzahl von Puffereinträgen |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | ----------------------------------- |
| `"mark"`                                                                   | [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)                         | Unendlich                           |
| `"measure"`                                                                | [`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)                   | Unendlich                           |
| `"navigation"`                                                             | [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming) | Unendlich                           |
| `"resource"`                                                               | [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)     | 250 (anpassbar, siehe unten)        |
| `"longtask"`                                                               | [`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming)     | 200                                 |
| `"paint"`                                                                  | [`PerformancePaintTiming`](/de/docs/Web/API/PerformancePaintTiming)           | 2 (es wird nicht mehr geben)        |
| `"element"`                                                                | [`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming)       | 150                                 |
| `"event"`                                                                  | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 150                                 |
| `"first-input"`                                                            | [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)           | 1 (es wird nicht mehr geben)        |
| `"layout-shift"`                                                           | [`LayoutShift`](/de/docs/Web/API/LayoutShift)                                 | 150                                 |
| `"largest-contentful-paint"`                                               | [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)           | 150                                 |
| `"visibility-state"`                                                       | [`VisibilityStateEntry`](/de/docs/Web/API/VisibilityStateEntry)               | 50                                  |

Tabelle 1. Puffergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Für `"resource"`-Eintragstypen, siehe [Verwaltung von Ressourcengrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes), um eine andere Puffergröße festzulegen.

Bei `"first-input"` und `"paint"` ist die Beschränkung definitionsgemäß vorhanden. Es wird nicht mehr als einen (oder zwei) Einträge geben.

Der [Callback des Performance-Observers](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält ein optionales `droppedEntriesCount`-Parameter, das Ihnen mitteilt, wie viele Einträge verloren gegangen sind, weil der Puffer voll war.

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

Eine weitere nützliche Methode ist [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords), welche die aktuelle Liste der im Performance Observer gespeicherten Leistungseinträge zurückgibt und diese gleichzeitig leert.

## JSON-Daten

Alle Leistungseinträge stellen einen `toJSON()`-{{Glossary("Serialization", "Serializer")}} bereit, der eine {{jsxref("JSON")}}-Darstellung des Eintrags zurückgibt. Dies kann nützlich sein, wenn Sie alle verfügbaren Daten sammeln und irgendwo speichern möchten.

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

Um eine Zeichenfolgen-Darstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit einem beliebigen `PerformanceEntry`-Objekt direkt verwenden; es wird die `toJSON()`-Methode des Eintrags automatisch aufrufen.

## Siehe auch

- [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)
- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)

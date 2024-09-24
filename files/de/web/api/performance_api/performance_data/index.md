---
title: Leistungsdaten
slug: Web/API/Performance_API/Performance_data
l10n:
  sourceCommit: 54962bbd1d367115cfd01b4e1ba6b552e8b68eb7
---

{{DefaultAPISidebar("Performance API")}}

Die Performance API misst und stellt Leistungsdaten bereit, die als Leistungsmetriken für Ihre Webanwendung gesammelt werden können. Sie bietet Methoden zur Beobachtung von Anwendungsleistungsaspekten. Sie liefert keine Analyse oder Visualisierungen der Leistungsdaten. Die Performance API ist jedoch gut in Entwicklerwerkzeuge der Browser integriert und ihre Daten werden häufig an Analyseendpunkte und -bibliotheken gesendet, um Leistungsmetriken zu protokollieren, die Ihnen helfen, die Daten zu evaluieren, um Leistungsengpässe zu identifizieren, die Ihre Benutzer betreffen.

Diese Seite bietet einen Überblick darüber, welche Arten von Leistungsdaten der Performance API existieren, wie sie gesammelt werden und wie sie abgerufen werden können.

## Datenerfassung

Die meisten der von der Performance API bereitgestellten Metriken werden automatisch vom Browser erfasst, und Sie müssen dem Browser nicht sagen, sie zu sammeln: Sie müssen sie nur abrufen.

Für einige Metriken müssen Sie dem Browser mitteilen, was gemessen werden soll:

- Die [Element Timing](/de/docs/Web/API/Performance_API/Element_timing) Metrik misst die Zeit, die benötigt wird, um bestimmte DOM-Elemente zu laden und darzustellen. Diese Metrik ist opt-in: Um den Browser zu bitten, Metriken für ein bestimmtes Element einzubeziehen, müssen Sie das `elementtiming`-Attribut hinzufügen.
- Die [User Timing](/de/docs/Web/API/Performance_API/User_timing) Metrik ermöglicht es Ihnen, die Zeit zwischen willkürlichen Punkten in Ihrem Programm zu messen, die auf anwendungsspezifische Operationen (wie das Einloggen eines Benutzers) abgebildet werden können. Um diese Metriken zu sammeln, müssen Sie Performance API-Aufrufe an den relevanten Punkten hinzufügen.
- Die [Server Timing](/de/docs/Web/API/Performance_API/Server_timing) Metrik ermöglicht es Ihnen, die für anwendungsspezifische serverseitige Operationen benötigte Zeit zu messen. Um diese Metriken zu sammeln, muss Ihr Server den `Server-Timing` HTTP-Header senden.

## Struktur der Leistungsdaten

Mit der Performance API können Sie Leistungsdaten sowohl im {{domxref("Window.performance", "Window")}} als auch im {{domxref("WorkerGlobalScope.performance", "Worker")}} globalen Kontext sammeln. Wenn Sie Leistungsmetriken für mehrere Kontexte sammeln, schauen Sie sich {{domxref("performance.timeOrigin")}} an, um die Zeitursprünge zwischen den Kontexte zu synchronisieren.

Innerhalb dieser Kontexte werden individuelle Leistungsdaten durch Leistungs-Einträge dargestellt.

### Leistungs-Einträge

Ein einzelner aufgezeichneter Leistungsdatenpunkt wird als _Leistungs-Eintrag_ bezeichnet und wird durch eine Instanz der {{domxref("PerformanceEntry")}}-Schnittstelle dargestellt.

Die Performance API zeichnet verschiedene Arten von Leistungsdaten auf, und der `PerformanceEntry` verfügt über eine {{domxref("PerformanceEntry.entryType", "entryType")}}-Eigenschaft, die eine Zeichenkette ist, die den Typ dieses Leistungseintrags beschreibt:

- `"element"` zeichnet auf, wie lange es dauert, bis ein Element geladen und gerendert wird.
- `"event"` zeichnet auf, wie lange es dauerte, bis der Browser begann, einen Ereignishandler in Reaktion auf dessen Auslöser auszuführen, und wie lange der Ereignishandler zur Ausführung benötigte.
- `"first-input"` zeichnet die {{Glossary("First input delay")}} auf.
- `"largest-contentful-paint"` zeichnet den größten Renderpunkt während des Seitenladens auf.
- `"layout-shift"` zeichnet eine Metrik auf, die darstellt, wie stark das Seitenlayout in jedem Animationsframe verschoben wurde.
- `"longtask"` zeichnet Aufgaben auf, die 50ms oder länger dauerten.
- `"mark"` zeichnet einen vom Entwickler erstellten Zeitstempel auf.
- `"measure"` zeichnet eine vom Entwickler erstellte Messung zwischen zwei Zeitstempeln auf.
- `"navigation"` zeichnet Metriken auf, die mit der Navigation zu und dem initialen Laden der Seite verbunden sind.
- `"paint"` zeichnet wichtige Momente des Renderings während des Seitenladens auf.
- `"resource"` zeichnet auf, wie lange der Browser für das Abrufen einer Ressource benötigte.
- `"visibility-state"` zeichnet den Zeitpunkt von Änderungen des Seitensichtbarkeitszustands auf, d.h. wenn ein Tab vom Vorder- in den Hintergrund oder umgekehrt wechselt.

### Unterklassen der Leistungs-Einträge

Bestimmte Eintragstypen enthalten typischerweise zusätzliche, typspezifische Daten: zum Beispiel erfasst der Typ `"resource"` den Zeitpunkt, zu dem die DNS-Abfrage begonnen und beendet wurde. Daher werden Einträge durch Unterklassen dargestellt, die die grundlegende `PerformanceEntry`-Schnittstelle erweitern. Ein `"resource"`-Eintrag wird beispielsweise durch eine Instanz von {{domxref("PerformanceResourceTiming")}} dargestellt, die von `PerformanceEntry` erbt und Eigenschaften hinzufügt, um DNS-Abfragezeitstempel aufzuzeichnen.

Die Unterklassen von `PerformanceEntry` definieren auch die Semantik der Eigenschaften, die `PerformanceEntry` selbst gehören: beispielsweise hat `PerformanceEntry` eine {{domxref("PerformanceEntry.name", "name")}}-Eigenschaft, deren Bedeutung von der Unterklasse abhängt.

Die folgenden Schnittstellen erben von `PerformanceEntry`:

- {{domxref("LargestContentfulPaint")}}
- {{domxref("LayoutShift")}}
- {{domxref("PerformanceElementTiming")}}
- {{domxref("PerformanceEventTiming")}}
- {{domxref("PerformanceLongTaskTiming")}}
- {{domxref("PerformanceMark")}}
- {{domxref("PerformanceMeasure")}}
- {{domxref("PerformancePaintTiming")}}
- {{domxref("PerformanceResourceTiming")}}
  - {{domxref("PerformanceNavigationTiming")}} erbt von `PerformanceResourceTiming`
- {{domxref("TaskAttributionTiming")}}
- {{domxref("VisibilityStateEntry")}}

## Zugriff auf Daten

Sie können auf Leistungs-Einträge auf zwei Arten zugreifen. Die bevorzugte Methode ist die Verwendung der {{domxref("PerformanceObserver")}}-Schnittstelle, die mit einer Callback-Funktion konstruiert wird, die aufgerufen wird, wenn bestimmte Leistungs-Einträge aufgezeichnet werden. Sie rufen dann die {{domxref("PerformanceObserver.observe", "observe")}}-Methode auf, um die zu beobachtenden Typen zu übergeben und die `buffered`-Option zu verwenden, um Einträge abzurufen, die vor der Beobachtung aufgetreten sind.

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

Alternativ können Sie die Methoden {{domxref("Performance.getEntries()")}}, {{domxref("Performance.getEntriesByName()")}}, und {{domxref("Performance.getEntriesByType()")}} verwenden, um alle Leistungs-Einträge für eine Seite oder Einträge, die dem angegebenen Namen oder Typ entsprechen, abzurufen.

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

- Die `getEntries*`-Methoden immer alle relevanten Einträge seit Beginn der Zeitleiste zurückgeben, sodass Sie beim zweimaligen Aufruf dieselben Einträge erneut sehen und bereits gesehene Einträge herausfiltern müssen.
- Beobachtungsbenachrichtigungen werden asynchron geliefert, sodass der Browser sie während der Leerlaufzeit versenden kann, um ihre Leistungsbelastung zu minimieren.
- Nicht alle Eintragstypen funktionieren mit den `getEntries*`-Methoden. Für einige müssen Sie Performance-Beobachter verwenden, um auf sie zuzugreifen.

## Verwaltung der Pufferspeichergrößen

Es gibt ein Pufferlimit für Leistungs-Einträge für jedes globale Objekt. Es stellt sicher, dass der Browser keinen unbegrenzten Speicher beim Halten von Leistungsdaten verbraucht. Besonders wenn Ihre Website oder Anwendung viele Ressourcen abruft (z.B. bei Verwendung von Polling), sollten Sie sich die Grenzwerte für die Puffer ansehen:

| {{domxref("PerformanceEntry.entryType", "entryType")}} Identifier | Schnittstelle                               | Maximale Anzahl von Puffer-Einträgen |
| ----------------------------------------------------------------- | ------------------------------------------- | ----------------------------------- |
| `"mark"`                                                          | {{domxref("PerformanceMark")}}              | Unbegrenzt                          |
| `"measure"`                                                       | {{domxref("PerformanceMeasure")}}           | Unbegrenzt                          |
| `"navigation"`                                                    | {{domxref("PerformanceNavigationTiming")}}  | Unbegrenzt                          |
| `"resource"`                                                      | {{domxref("PerformanceResourceTiming")}}    | 250 (anpassbar, siehe unten)       |
| `"longtask"`                                                      | {{domxref("PerformanceLongTaskTiming")}}    | 200                                 |
| `"paint"`                                                         | {{domxref("PerformancePaintTiming")}}       | 2 (es wird nicht mehr geben)       |
| `"element"`                                                       | {{domxref("PerformanceElementTiming")}}     | 150                                 |
| `"event"`                                                         | {{domxref("PerformanceEventTiming")}}       | 150                                 |
| `"first-input"`                                                   | {{domxref("PerformanceEventTiming")}}       | 1 (es wird nicht mehr geben)       |
| `"layout-shift"`                                                  | {{domxref("LayoutShift")}}                  | 150                                 |
| `"largest-contentful-paint"`                                      | {{domxref("LargestContentfulPaint")}}       | 150                                 |
| `"visibility-state"`                                              | {{domxref("VisibilityStateEntry")}}         | 50                                  |

Tabelle 1. Pufferspeichergrößen ([Quelle](https://w3c.github.io/timing-entrytypes-registry/#registry)).

Für `"resource"`-Eintragstypen siehe [Verwaltung der Puffergrößen für Ressourcen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) für eine Anleitung, wie eine andere Puffergröße festgelegt wird.

Für `"first-input"` und `"paint"` ist die Einschränkung inhärent in der Definition der Metrik. Es wird nicht mehr als einen (oder zwei) Einträge geben.

Der [Callback für den Performance-Observer](/de/docs/Web/API/PerformanceObserver/PerformanceObserver) enthält einen optionalen `droppedEntriesCount`-Parameter, der Ihnen mitteilt, wie viele Einträge verloren gingen, weil der Puffer voll war.

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

Eine weitere nützliche Methode ist {{domxref("PerformanceObserver.takeRecords()")}}, die die aktuelle Liste der im Performance-Observer gespeicherten Leistungs-Einträge zurückgibt und diese gleichzeitig leert.

## JSON-Daten

Alle Leistungs-Einträge bieten einen `toJSON()` {{Glossary("Serialization","serializer")}}, der eine {{jsxref("JSON")}}-Darstellung des Eintrags zurückgibt. Dies kann nützlich sein, wenn Sie alle verfügbaren Daten sammeln und irgendwo speichern wollen.

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

Um eine Zeichenketten-Darstellung des Eintrags zu erhalten, können Sie [`JSON.stringify(entry)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) mit jedem `PerformanceEntry`-Objekt direkt verwenden; es wird die `toJSON()`-Methode des Eintrags automatisch aufrufen.

## Siehe auch

- {{domxref("PerformanceEntry")}}
- {{domxref("PerformanceObserver.observe()")}}

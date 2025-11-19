---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: ca730ef3d6e21e0cfbeac992b898539945cec3c7
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing ist Teil der Performance API und ermöglicht das Abrufen und Analysieren detaillierter Netzwerktiming-Daten für das Laden von Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Dauer zu bestimmen, die benötigt wird, um eine bestimmte Ressource (wie ein Bild oder ein Skript) entweder implizit als Teil des Seitenladens oder explizit von JavaScript zu laden, zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch) API.

Jede Ressource in einem Dokument wird durch einen [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eintrag (der das [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interface erweitert) mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` dargestellt.

Für jeden `PerformanceResourceTiming`-Eintrag wird eine _Ressourcenlade-Timeline_ aufgezeichnet, mit [Hochauflösungs-Zeitstempeln](/de/docs/Web/API/DOMHighResTimeStamp) für Netzwerkevents wie Start- und Endzeiten von Weiterleitungen, Start- und Endzeiten von DNS-Lookups, Anfragebeginn, Start und Ende der Antwort und so weiter. Neben den Zeitstempeln sind auch andere Eigenschaften enthalten, die Informationen über die Ressource bieten, wie zum Beispiel die Größe der abgerufenen Ressource oder der Typ der Ressource, die die Abfrage initiiert hat.

Siehe [Typische Ressourcen-Timing-Metriken](/de/docs/Web/API/PerformanceResourceTiming#typical_resource_timing_metrics) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Ressourcenlade-Zeitstempel

![Zeitstempeldiagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)
Abbildung 1. Ressourcenlade-Zeitstempel ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Phasen abrufen, die zum Laden einer Ressource verwendet werden. Zum Beispiel die [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime), DNS-Zeitstempel, Verbindungsaufbauzeiten und dann verschiedene Ressourcen-Downloadzeiten.

Siehe [Zeitstempel](/de/docs/Web/API/PerformanceResourceTiming#timestamps) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Ressourcengröße

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface hat drei Eigenschaften, die genutzt werden können, um Größeninformationen über eine Ressource zu erhalten. Die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft gibt die Größe (in Bytes) der abgerufenen Ressource zurück, einschließlich der Antwortheader-Felder und des Antwortnutzlastkörpers.

Die [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize)-Eigenschaft gibt die Größe (in Oktetten) zurück, die aus dem Abruf (HTTP oder Cache) empfangen wurde, des _Nutzlastkörpers_, **vor** dem Entfernen angewendeter Inhaltscodierungen. [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) gibt die Größe (in Oktetten) zurück, die aus dem Abruf (HTTP oder Cache) empfangen wurde, des _Nachrichtenkörpers_, **nachdem** alle angewendeten Inhaltscodierungen entfernt wurden.

## Andere Eigenschaften

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface bietet [zusätzliche Ressourceninformationen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Konsultieren Sie die Referenzdokumentation für die vollständige Liste der Eigenschaften.

## Verwalten der Ressourcenspeichergrößen

Wenn Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Einträge aufzeichnen möchten, müssen Sie die Größe des Ressourcentiming-Puffers erhöhen.

Um die Größe des Ressourcendatenpuffers des Browsers einzustellen, verwenden Sie die Methode [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize), und um den Ressourcendatenpuffer des Browsers zu leeren, verwenden Sie die Methode [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Um benachrichtigt zu werden, wenn der Ressourcentiming-Puffer des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)-Event.

Der folgende Aufruf erlaubt 500 `"resource"`-Performance-Einträge in der Performance-Timeline des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Für weitere Informationen siehe auch [Verwalten von Pufferspeichergrößen](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Cross-Origin-Timing-Informationen

Viele der Ressourcentiming-Eigenschaften sind eingeschränkt und geben `0` oder einen leeren String zurück, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Timing-Informationen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Für weitere Informationen zu den betroffenen Feldern siehe [Cross-Origin-Timing-Informationen](/de/docs/Web/API/PerformanceResourceTiming#cross-origin_timing_information) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- {{httpheader("Timing-Allow-Origin")}}
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)

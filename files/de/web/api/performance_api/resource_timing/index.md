---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: feda2f126affe395c55a9c5f8b668a6bf0fcb30f
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing ist Teil der Performance API und ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Timing-Daten für das Laden von Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu ermitteln, die zum Laden einer bestimmten Ressource (wie eines Bildes oder Skripts) benötigt wird, entweder implizit als Teil des Seitenladens oder explizit von JavaScript, z. B. unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.

Jede Ressource in einem Dokument wird durch einen [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eintrag (der das [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interface erweitert) mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) `"resource"` dargestellt.

Für jeden `PerformanceResourceTiming`-Eintrag wird eine _Ressourcen-Ladezeitachse_ aufgezeichnet, mit [Hochauflösende Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) für Netzwerkereignisse wie Umleitungsstart- und Endzeiten, DNS-Lookup-Start- und Endzeiten, Anforderungsstart, Antwortstart- und Endzeiten und so weiter. Neben den Zeitstempeln sind auch andere Eigenschaften enthalten, die Informationen über die Ressource liefern, wie die Größe der abgerufenen Ressource oder der Typ der Ressource, die den Abruf initiiert hat.

Siehe [Typische Resource Timing Metriken](/de/docs/Web/API/PerformanceResourceTiming#typical_resource_timing_metrics) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Ressourcen-Ladezeitstempel

![Zeitschmauchartiges Diagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Ressourcen-Ladezeitstempel ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Stadien abrufen, die zum Laden einer Ressource verwendet werden. Zum Beispiel den [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime), DNS-Zeitstempel, Verbindungsaufbauzeiten und dann verschiedene Ressourcendownloadzeiten.

Siehe [Zeitstempel](/de/docs/Web/API/PerformanceResourceTiming#timestamps) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Ressourcengröße

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface verfügt über drei Eigenschaften, die verwendet werden können, um Größendaten über eine Ressource zu erhalten. Die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft gibt die Größe (in Bytes) der abgerufenen Ressource zurück, einschließlich der Antwort-Header-Felder plus des Antwort-Payloads.

Die [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize)-Eigenschaft gibt die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen _Payloads_ zurück, **bevor** angewandte Inhalts-Codierungen entfernt werden. [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) gibt die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen _Nachrichtenkörpers_ zurück, **nachdem** angewandte Inhalts-Codierungen entfernt wurden.

## Andere Eigenschaften

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface bietet [zusätzliche Ressourceninformationen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Konsultieren Sie die Referenzdokumente für die vollständige Liste der Eigenschaften.

## Verwaltung der Ressourcenspeicherpuffergrößen

Wenn Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Einträge aufzeichnen möchten, müssen Sie die Größe des Ressourcentiming-Puffers erhöhen.

Um die Größe des Performance-Ressourcendatenpuffers des Browsers festzulegen, verwenden Sie die Methode [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize), und um den Performance-Ressourcendatenpuffer des Browsers zu leeren, verwenden Sie die Methode [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Um benachrichtigt zu werden, wenn der Resource-Timing-Puffer des Browsers voll ist, hören Sie auf das Ereignis [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event).

Der folgende Aufruf ermöglicht 500 `"resource"`-Performance-Einträge in der Performance-Zeitachse des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Für weitere Informationen siehe auch [Verwaltung der Puffergrößen](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Cross-Origin-Timing-Informationen

Viele der Resource-Timing-Eigenschaften sind darauf beschränkt, `0` oder einen leeren String zurückzugeben, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Timing-Informationen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Für weitere Informationen zu den betroffenen Feldern siehe [Cross-Origin-Timing-Informationen](/de/docs/Web/API/PerformanceResourceTiming#cross-origin_timing_information) auf der Referenzseite für das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface.

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- {{httpheader("Timing-Allow-Origin")}}
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)

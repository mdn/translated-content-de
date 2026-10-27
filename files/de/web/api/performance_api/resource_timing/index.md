---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing ist Teil der Performance API und ermöglicht es, detaillierte Netzwerk-Zeitdaten zum Laden der Ressourcen einer Anwendung abzurufen und zu analysieren. Eine Anwendung kann anhand dieser Zeitmesswerte beispielsweise ermitteln, wie lange das Laden einer bestimmten Ressource (etwa eines Bildes oder eines Skripts) dauert – entweder implizit beim Laden der Seite oder explizit über JavaScript, zum Beispiel mit der [`fetch()`](/de/docs/Web/API/Window/fetch)-API.

Jede Ressource in einem Dokument wird durch einen [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Eintrag dargestellt, der das [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Interface erweitert und dessen [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) `"resource"` ist.

Für jeden `PerformanceResourceTiming`-Eintrag wird eine _Zeitleiste des Ressourcenladens_ aufgezeichnet. Sie enthält [hochauflösende Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) für Netzwerkereignisse wie den Beginn und das Ende von Weiterleitungen und DNS-Abfragen sowie den Beginn der Anfrage und den Beginn und das Ende der Antwort. Neben den Zeitstempeln sind weitere Eigenschaften enthalten, die Informationen über die Ressource liefern, etwa die Größe der abgerufenen Ressource oder der Typ der Ressource, die den Abruf ausgelöst hat.

Siehe [Typische Zeitmesswerte für Ressourcen](/de/docs/Web/API/PerformanceResourceTiming#typical_resource_timing_metrics) auf der Referenzseite des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces.

## Zeitstempel beim Laden von Ressourcen

![Zeitstempeldiagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource erfasst werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)
Abbildung 1. Zeitstempel beim Laden von Ressourcen ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Phasen beim Laden einer Ressource abrufen, beispielsweise [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime), DNS-Zeitstempel, Zeiten für den Verbindungsaufbau und verschiedene Zeitpunkte während des Herunterladens der Ressource.

Siehe [Zeitstempel](/de/docs/Web/API/PerformanceResourceTiming#timestamps) auf der Referenzseite des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces.

## Ressourcengröße

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface verfügt über drei Eigenschaften, mit denen sich Größendaten einer Ressource abrufen lassen. Die Eigenschaft [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) gibt die Größe (in Bytes) der abgerufenen Ressource einschließlich der Antwort-Header-Felder und des Antwort-Payload-Bodys zurück.

Die Eigenschaft [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) gibt die Größe (in Oktetten) des beim Abruf (über HTTP oder aus dem Cache) empfangenen _Payload-Bodys_ zurück, **bevor** angewendete Inhaltskodierungen entfernt wurden. [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) gibt die Größe (in Oktetten) des beim Abruf (über HTTP oder aus dem Cache) empfangenen _Nachrichtenbodys_ zurück, **nachdem** angewendete Inhaltskodierungen entfernt wurden.

## Weitere Eigenschaften

Das [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interface stellt [weitere Informationen zu Ressourcen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information) bereit. Die vollständige Liste der Eigenschaften finden Sie in der Referenzdokumentation.

## Größe des Ressourcen-Timing-Puffers verwalten

Wenn Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Einträge erfassen möchten, müssen Sie den Ressourcen-Timing-Puffer vergrößern.

Um die Größe des Puffers für Ressourcen-Performancedaten des Browsers festzulegen, verwenden Sie die Methode [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize). Um den Puffer zu leeren, verwenden Sie die Methode [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Wenn Sie benachrichtigt werden möchten, sobald der Ressourcen-Timing-Puffer des Browsers voll ist, warten Sie auf das Ereignis [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event).

Der folgende Aufruf ermöglicht 500 Performance-Einträge vom Typ `"resource"` in der Performance-Zeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Weitere Informationen finden Sie unter [Puffergrößen verwalten](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Zeitdaten für Cross-Origin-Ressourcen

Viele Eigenschaften für Ressourcen-Zeitdaten dürfen nur `0` oder eine leere Zeichenfolge zurückgeben, wenn es sich bei der Ressource um eine Cross-Origin-Anfrage handelt. Damit Zeitdaten für Cross-Origin-Ressourcen zugänglich sind, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Welche Felder davon betroffen sind, erfahren Sie unter [Cross-Origin-Einschränkungen](/de/docs/Web/API/PerformanceResourceTiming#cross-origin_restrictions) auf der Referenzseite des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces.

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- {{httpheader("Timing-Allow-Origin")}}
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)

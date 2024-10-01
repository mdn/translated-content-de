---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing ist Teil der Performance API und ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten für das Laden von Anwendungskomponenten. Eine Anwendung kann die Zeitmesswerte verwenden, um beispielsweise zu bestimmen, wie lange es dauert, eine bestimmte Ressource (wie ein Bild oder ein Skript) entweder implizit als Teil des Seitenladens oder explizit aus JavaScript zu laden, zum Beispiel unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.

Jede Ressource in einem Dokument wird durch einen [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Eintrag (der die [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Schnittstelle erweitert) mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"` dargestellt.

Für jeden `PerformanceResourceTiming` Eintrag wird eine _Ressourcen-Ladezeitleiste_ mit {{domxref("DOMHighResTimeStamp","hochauflösenden Zeitstempeln", "", 1)}} für Netzwerkereignisse wie Umleitungsstart- und -endzeiten, DNS-Lookup-Start- und -endzeiten, Anforderungsstart, Antwortstart- und -endzeiten, usw. erfasst. Neben den Zeitstempeln sind auch andere Eigenschaften enthalten, die Informationen über die Ressource bieten, wie die Größe der abgerufenen Ressource oder der Typ der Ressource, die den Abruf initiiert hat.

## Ressourcenlade-Zeitstempel

![Diagramm der Zeitstempel, das die Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Ressourcenlade-Zeitstempel ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Phasen abrufen, die zum Laden einer Ressource verwendet werden. Die Zeitstempel, die diese API bereitstellt, sind:

1. [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime): Zeitstempel unmittelbar bevor der Ressourcenladeprozess beginnt.
2. [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart): Zeitstempel des Abrufs, der die Umleitung einleitet.
3. [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd): Zeitstempel unmittelbar nach dem Empfang des letzten Bytes der Antwort auf die letzte Umleitung.
4. [`workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart): Zeitstempel unmittelbar bevor der Service Worker-Thread gestartet wird.
5. [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart): Zeitstempel unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
6. [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart): Zeitstempel unmittelbar bevor der Browser mit dem Domainnamen-Lookup für die Ressource beginnt.
7. [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd): Zeitstempel unmittelbar nachdem der Browser den Domainnamen-Lookup für die Ressource abgeschlossen hat.
8. [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart): Zeitstempel unmittelbar bevor der User-Agent beginnt, die Verbindung zum Server zur Abruf der Ressource herzustellen.
9. [`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart): Wenn die Ressource über eine sichere Verbindung geladen wird, Zeitstempel unmittelbar bevor der Browser den Handshake-Prozess startet, um die aktuelle Verbindung zu sichern.
10. [`connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd): Zeitstempel unmittelbar nachdem der Browser die Verbindung zum Server zur Abruf der Ressource hergestellt hat.
11. [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart): Zeitstempel der Zeit unmittelbar bevor der Browser beginnt, die Ressource vom Server, Cache oder lokalen Ressource anzufordern.
12. [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart): Zeitstempel unmittelbar nachdem der Browser das erste Byte der Antwort vom Server, Cache oder lokalen Ressource erhält.
13. [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd): Zeitstempel unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

## Ressourcengröße

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle verfügt über drei Eigenschaften, die zur Ermittlung von Größeninformationen einer Ressource verwendet werden können. Die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) Eigenschaft gibt die Größe (in Bytes) der abgerufenen Ressource einschließlich der Antwortkopfzeilen und des Antwortnutzlastkörpers zurück.

Die [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) Eigenschaft gibt die Größe (in Oktetten) der von der Anforderung (HTTP oder Cache) erhaltenen _Nutzlastkörper_ **vor** dem Entfernen angewendeter Inhaltskodierungen zurück. [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) gibt die Größe (in Oktetten) der von der Anforderung (HTTP oder Cache) erhaltenen _Nachrichtenkörper_ **nach** dem Entfernen angewendeter Inhaltskodierungen zurück.

## Andere Eigenschaften

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle bietet [zusätzliche Ressourceninformationen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Konsultieren Sie die Referenzdokumentation für die vollständige Liste der Eigenschaften.

## Typische Ressourcentiming-Metriken

Die Informationen, die `PerformanceResourceTiming` Einträge liefern, werden häufig für Berechnungen wie die folgenden verwendet:

- Messen der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messen der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Anforderungszeit (`responseStart` - `requestStart`)
- Messen der TLS-Negotiationszeit (`requestStart` - `secureConnectionStart`)
- Messen der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messen der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfen, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfen, ob die richtigen Ressourcen render-blockierend sind (`renderBlockingStatus`)

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Referenzseiten enthalten Beispielcode für die Messung all dieser Metriken. Typischerweise sieht der Code zur Messung dieser Metriken folgendermaßen aus:

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const request = entry.responseStart - entry.requestStart;
    if (request > 0) {
      console.log(`${entry.name}: Request time: ${request}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

## Informationen zur Zeitmessung bei Fremdursprüngen

Wenn {{Glossary("CORS", "CORS")}} wirksam ist, werden viele der Zeitmesswerte als Null zurückgegeben, es sei denn, die Zugriffspolitik des Servers erlaubt es, diese Werte zu teilen. Dies erfordert, dass der Server, der die Ressource bereitstellt, den {{httpheader("Timing-Allow-Origin")}} HTTP-Antwortheader mit einem Wert sendet, der den Ursprung oder die Ursprünge spezifiziert, die die eingeschränkten Zeitstempelwerte erhalten dürfen.

Die Eigenschaften, die standardmäßig als 0 zurückgegeben werden, wenn eine Ressource von einem anderen Ursprung als der der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Um beispielsweise `https://developer.mozilla.org` zu ermöglichen, auf Ressourcentiming-Informationen zuzugreifen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Verwaltung der Puffergrößen für Ressourcen

Falls Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Einträge aufzeichnen möchten, müssen Sie die Größe des Ressourcentiming-Puffers erhöhen.

Um die Größe des Leistungsressourcen-Datenpuffers des Browsers festzulegen, verwenden Sie die Methode [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize), und um den Leistungsressourcen-Datenpuffer des Browsers zu leeren, verwenden Sie die Methode [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Um benachrichtigt zu werden, wenn der Ressourcenzeitmesspuffer des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis.

Der folgende Aufruf erlaubt 500 `"resource"`-Leistungseinträge in der Performance-Timeline des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Weitere Informationen finden Sie auch unter [Verwalten von Puffergrößen](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- {{httpheader("Timing-Allow-Origin")}}
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)

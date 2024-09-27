---
title: Resource timing
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Performance API")}}

Resource Timing ist Teil der Performance API und ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Timing-Daten für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Dauer zu ermitteln, die das Laden einer bestimmten Ressource (wie eines Bildes oder eines Skripts) in Anspruch nimmt, sei es implizit als Teil des Seitenladens oder explizit über JavaScript, z. B. unter Verwendung der [`fetch()`](/de/docs/Web/API/Window/fetch) API.

Jede Ressource in einem Dokument wird durch einen [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Eintrag repräsentiert (der die [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Schnittstelle erweitert) mit dem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"resource"`.

Für jeden `PerformanceResourceTiming` Eintrag wird eine _Ressourcenladezeitlinie_ aufgezeichnet, mit {{domxref("DOMHighResTimeStamp","hochauflösenden Zeitstempeln", "", 1)}} für Netzwerkereignisse wie Umleitungsstart- und endzeiten, DNS-Lookup-Start- und endzeiten, Anforderungsstart, Antwortstart- und endzeiten usw. Neben den Zeitstempeln sind auch andere Eigenschaften enthalten, die Informationen über die Ressource liefern, z. B. die Größe der abgerufenen Ressource oder der Typ der Ressource, die den Abruf initiiert hat.

## Ressourcenladezeitstempel

![Zeitstempeldiagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource erfasst werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg) Abbildung 1. Ressourcenladezeitstempel ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Phasen erhalten, die zum Laden einer Ressource verwendet werden. Die Zeitstempel, die diese API bereitstellt, sind:

1. [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime): Zeitstempel direkt vor Beginn des Ressourcenladeprozesses.
2. [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart): Zeitstempel des Abrufs, der die Umleitung einleitet.
3. [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd): Zeitstempel unmittelbar nach Empfang des letzten Bytes der Antwort auf die letzte Umleitung.
4. [`workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart): Zeitstempel direkt vor dem Starten des Service Worker-Threads.
5. [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart): Zeitstempel unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
6. [`domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart): Zeitstempel direkt bevor der Browser mit dem Domain-Namenslookup für die Ressource beginnt.
7. [`domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd): Zeitstempel unmittelbar nachdem der Browser das Domain-Namenslookup für die Ressource abgeschlossen hat.
8. [`connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart): Zeitstempel unmittelbar bevor der Benutzeragent beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
9. [`secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart): Wenn die Ressource über eine sichere Verbindung geladen wird, Zeitstempel unmittelbar bevor der Browser den Handshake-Prozess beginnt, um die aktuelle Verbindung zu sichern.
10. [`connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd): Zeitstempel unmittelbar nachdem der Browser die Verbindung zum Server hergestellt hat, um die Ressource abzurufen.
11. [`requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart): Zeitstempel unmittelbar bevor der Browser beginnt, die Ressource vom Server, Cache oder lokalen Ressource anzufordern.
12. [`responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart): Zeitstempel unmittelbar nachdem der Browser das erste Byte der Antwort vom Server, Cache oder lokalen Ressource erhält.
13. [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd): Zeitstempel unmittelbar nachdem der Browser das letzte Byte der Ressource empfängt oder bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

## Ressourcengröße

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle verfügt über drei Eigenschaften, die zur Ermittlung der Größenangaben zu einer Ressource verwendet werden können. Die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) Eigenschaft gibt die Größe (in Bytes) der abgerufenen Ressource einschließlich der Antwortkopf-Felder plus des Antwortnutzlastkörpers zurück.

Die [`encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) Eigenschaft gibt die Größe (in Oktetten) zurück, die aus dem Abruf (HTTP oder Cache) des _Nutzlastkörpers_ empfangen wird, **bevor** angewandte Inhaltscodierungen entfernt werden. [`decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) gibt die Größe (in Oktetten) zurück, die aus dem Abruf (HTTP oder Cache) des _Nachrichtenkörpers_ empfangen wird, **nachdem** angewandte Inhaltscodierungen entfernt wurden.

## Andere Eigenschaften

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Schnittstelle bietet [zusätzliche Informationen zu Ressourcen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Konsultieren Sie die Referenzdokumente für die vollständige Liste der Eigenschaften.

## Typische Ressourcentiming-Metriken

Die Informationen, die die `PerformanceResourceTiming`-Einträge liefern, werden häufig für Berechnungen wie die folgenden verwendet:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob der Inhalt komprimiert wurde (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen render-blockierend sind (`renderBlockingStatus`)

Die [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Referenzseiten enthalten Beispielcode zur Messung all dieser Metriken. Typischerweise sieht der Code zur Messung dieser Metriken so aus:

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

## Cross-Origin-Timing-Informationen

Wenn [CORS](/de/docs/Glossary/CORS) in Kraft ist, werden viele der Werte der Timing-Eigenschaften als null zurückgegeben, es sei denn, die Zugriffsrichtlinie des Servers erlaubt, dass diese Werte geteilt werden. Dies erfordert, dass der Server, der die Ressource bereitstellt, den {{httpheader("Timing-Allow-Origin")}} HTTP-Antwort-Header mit einem Wert sendet, der den Ursprung oder die Ursprünge angibt, die berechtigt sind, auf die eingeschränkten Zeitstempel zuzugreifen.

Die Eigenschaften, die standardmäßig mit 0 zurückgegeben werden, wenn eine Ressource von einem anderen Ursprung als dem der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Beispielsweise sollte die Cross-Origin-Ressource senden, um `https://developer.mozilla.org` das Anzeigen von Ressourcentiming-Informationen zu ermöglichen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Verwaltung von Ressourcenspeichergrößen

Wenn Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) Einträge aufzeichnen möchten, müssen Sie die Größe des Ressourcentiming-Speichers erhöhen.

Um die Größe des Leistungsresourcendatenspeichers des Browsers festzulegen, verwenden Sie die [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize) Methode, und um den Leistungsresourcendatenspeicher des Browsers zu löschen, verwenden Sie die [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings) Methode.

Um benachrichtigt zu werden, wenn der Ressourcentiming-Speicher des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event) Ereignis.

Der folgende Aufruf erlaubt 500 `"resource"` Leistungseinträge in der Leistungszeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Für weitere Informationen siehe auch [Verwaltung von Puffergrößen](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Siehe auch

- [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)
- {{httpheader("Timing-Allow-Origin")}}
- [`Performance.setResourceTimingBufferSize()`](/de/docs/Web/API/Performance/setResourceTimingBufferSize)
- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)

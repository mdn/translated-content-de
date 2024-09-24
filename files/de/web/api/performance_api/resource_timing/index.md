---
title: Ressourcentiming
slug: Web/API/Performance_API/Resource_timing
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{DefaultAPISidebar("Performance API")}}

Ressourcentiming ist Teil der Performance API und ermöglicht das Abrufen und Analysieren detaillierter Netzwerktiming-Daten für das Laden von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu bestimmen, die benötigt wird, um eine bestimmte Ressource zu laden (wie ein Bild oder ein Skript), entweder implizit als Teil des Seitenladevorgangs oder explizit über JavaScript, beispielsweise durch die Verwendung der {{domxref("Window/fetch", "fetch()")}} API.

Jede Ressource in einem Dokument wird durch einen {{domxref("PerformanceResourceTiming")}}-Eintrag (der das {{domxref("PerformanceEntry")}}-Interface erweitert) mit dem {{domxref("PerformanceEntry.entryType","entryType")}} von `"resource"` dargestellt.

Für jeden `PerformanceResourceTiming`-Eintrag wird eine _Ressourcenladetimeline_ mit {{domxref("DOMHighResTimeStamp","Hochauflösungstimestamps", "", 1)}} für Netzwerkereignisse wie Umleitungsbeginn und -ende, DNS-Lookup-Beginn und -ende, Anforderungsbeginn, Antwortbeginn und -ende usw. aufgezeichnet. Zusätzlich zu den Timestamps sind auch andere Eigenschaften enthalten, die Informationen über die Ressource bereitstellen, wie die Größe der abgerufenen Ressource oder die Art der Ressource, die den Abruf initiiert hat.

## Ressource-Ladetimestamps

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)
Abbildung 1. Ressource-Ladetimestamps ([Quelle](https://w3c.github.io/resource-timing/#attribute-descriptions)).

Eine Anwendung kann Zeitstempel für die verschiedenen Phasen erhalten, die zum Laden einer Ressource verwendet werden. Die Zeitstempel, die diese API bereitstellt, sind:

1. {{domxref("PerformanceEntry.startTime","startTime")}}: Zeitstempel unmittelbar vor Beginn des Ressourcenladevorgangs.
2. {{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}}: Zeitstempel des Abrufs, der die Umleitung einleitet.
3. {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}}: Zeitstempel unmittelbar nach Erhalt des letzten Bytes der Antwort auf die letzte Umleitung.
4. {{domxref('PerformanceResourceTiming.workerStart','workerStart')}}: Zeitstempel unmittelbar bevor der Service Worker-Thread gestartet wird.
5. {{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}}: Zeitstempel unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
6. {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}}: Zeitstempel unmittelbar bevor der Browser mit der DNS-Namensauflösung für die Ressource beginnt.
7. {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}}: Zeitstempel unmittelbar nachdem der Browser die DNS-Namensauflösung für die Ressource abgeschlossen hat.
8. {{domxref('PerformanceResourceTiming.connectStart','connectStart')}}: Zeitstempel unmittelbar bevor der User-Agent beginnt, die Verbindung zum Server zum Abrufen der Ressource herzustellen.
9. {{domxref('PerformanceResourceTiming.secureConnectionStart','secureConnectionStart')}}: Wenn die Ressource über eine sichere Verbindung geladen wird, Zeitstempel unmittelbar bevor der Browser mit dem Handshaking-Prozess beginnt, um die aktuelle Verbindung zu sichern.
10. {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}}: Zeitstempel unmittelbar nachdem der Browser die Verbindung zum Server zum Abrufen der Ressource hergestellt hat.
11. {{domxref('PerformanceResourceTiming.requestStart','requestStart')}}: Zeitstempel, unmittelbar bevor der Browser die Ressource vom Server, Cache oder lokalen Ressource anfordert.
12. {{domxref('PerformanceResourceTiming.responseStart','responseStart')}}: Zeitstempel unmittelbar nachdem der Browser das erste Byte der Antwort vom Server, Cache oder lokalen Ressource erhält.
13. {{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}: Zeitstempel unmittelbar nachdem der Browser das letzte Byte der Ressource erhalten hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

## Ressourcengröße

Das {{domxref("PerformanceResourceTiming")}}-Interface verfügt über drei Eigenschaften, die verwendet werden können, um Größendaten über eine Ressource zu erhalten. Die Eigenschaft {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} gibt die Größe (in Bytes) der abgerufenen Ressource einschließlich der Antwortkopf-Felder plus des Antwortinhalt-Körpers zurück.

Die Eigenschaft {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} gibt die Größe (in Oktetten) des _Inhalt-Körpers_ an, der vom Abruf (HTTP oder Cache) empfangen wurde, **bevor** angewendete Inhalt-Codierungen entfernt werden. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} gibt die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen _Nachrichtenkörpers_ an, **nachdem** alle angewendeten Inhalt-Codierungen entfernt wurden.

## Weitere Eigenschaften

Das {{domxref("PerformanceResourceTiming")}}-Interface bietet [zusätzliche Ressourceninformationen](/de/docs/Web/API/PerformanceResourceTiming#additional_resource_information). Konsultieren Sie die Referenzdokumente für die vollständige Liste der Eigenschaften.

## Typische Ressourcentiming-Metriken

Die von `PerformanceResourceTiming`-Einträgen bereitgestellten Informationen werden häufig für Berechnungen wie die folgenden verwendet:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob der Inhalt komprimiert war (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die korrekten Ressourcen render-blockierend sind (`renderBlockingStatus`)

Die {{domxref("PerformanceResourceTiming")}}-Referenzseiten enthalten Beispielcode zur Messung all dieser Metriken. Typischerweise sieht der Code zur Messung dieser Metriken folgendermaßen aus:

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

## Timing-Informationen über Cross-Origin

Wenn {{Glossary("CORS")}} in Kraft ist, werden viele der Werte der Timing-Eigenschaften als Null zurückgegeben, es sei denn, die Zugriffspolitik des Servers erlaubt das Teilen dieser Werte. Dies erfordert, dass der Server, der die Ressource bereitstellt, den {{httpheader("Timing-Allow-Origin")}}-HTTP-Antwortheader mit einem Wert sendet, der den Ursprung oder die Ursprünge angibt, denen es erlaubt ist, die eingeschränkten Zeitwerte zu erhalten.

Die Eigenschaften, die standardmäßig als 0 zurückgegeben werden, wenn eine Ressource von einem anderen Ursprung als der der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Um beispielsweise `https://developer.mozilla.org` zu ermöglichen, Ressourcentiming-Informationen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Verwaltung der Ressourcenspeicherpuffergrößen

Wenn Ihre Website oder Anwendung mehr als 250 Ressourcen abruft und Sie mehr als 250 {{domxref("PerformanceResourceTiming")}}-Einträge aufzeichnen möchten, müssen Sie die Größe des Ressourcentimingpuffers erhöhen.

Um die Größe des Ressourcendatenpuffers des Browsers festzulegen, verwenden Sie die {{domxref("Performance.setResourceTimingBufferSize()")}}-Methode, und um den Ressourcendatenpuffer des Browsers zu löschen, verwenden Sie die {{domxref("Performance.clearResourceTimings()")}}-Methode.

Um benachrichtigt zu werden, wenn der Ressourcentimingpuffer des Browsers voll ist, hören Sie auf das {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}-Ereignis.

Der folgende Aufruf erlaubt 500 `"resource"`-Performance-Einträge in der Performance-Zeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Weitere Informationen finden Sie unter [Verwaltung von Puffergrößen](/de/docs/Web/API/Performance_API/Performance_data#managing_buffer_sizes).

## Siehe auch

- {{domxref("PerformanceResourceTiming")}}
- {{httpheader("Timing-Allow-Origin")}}
- {{domxref("Performance.setResourceTimingBufferSize()")}}
- {{domxref("Performance.clearResourceTimings()")}}

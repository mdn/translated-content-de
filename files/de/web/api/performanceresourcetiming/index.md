---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceResourceTiming`**-Interface ermöglicht das Abrufen und die Analyse detaillierter Netzwerk-Timing-Daten bezüglich des Ladens von Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken nutzen, um beispielsweise die Zeit zu bestimmen, die zum Abrufen einer spezifischen Ressource wie einer {{domxref("XMLHttpRequest")}}, einem {{SVGElement("SVG","SVG-Element")}}, Bild oder Skript benötigt wird.

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Zeitleiste für das Laden von Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Start- und Endzeiten von Weiterleitungen, Beginn des Abrufs, Start- und Endzeiten der DNS-Abfrage, Start- und Endzeiten der Antwort und mehr. Zusätzlich erweitert das Interface {{domxref("PerformanceEntry")}} mit anderen Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie über den Typ der Ressource, die den Abruf initiiert hat, bereitstellen.

{{InheritanceDiagram}}

### Typische Ressourcentiming-Metriken

Die Eigenschaften dieses Interfaces ermöglichen es Ihnen, bestimmte Ressourcentiming-Metriken zu berechnen. Häufige Anwendungsfälle sind:

- Messen der TCP-Handschlagzeit (`connectEnd` - `connectStart`)
- Messen der DNS-Abfragezeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Weiterleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Zwischenantragszeit (`firstInterimResponseStart` - `requestStart`)
- Messen der Antragszeit (`responseStart` - `requestStart`)
- Messen der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messen der Zeit für den Abruf (ohne Weiterleitungen) (`responseEnd` - `fetchStart`)
- Messen der Verarbeitungszeit des ServiceWorkers (`fetchStart` - `workerStart`)
- Prüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Prüfen, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Prüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Prüfen, ob die richtigen Ressourcen render-blockierend sind (`renderBlockingStatus`)

## Instanz-Eigenschaften

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften für Ressourcentiming-Eintragstypen, indem es sie wie folgt qualifiziert und einschränkt:

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, der die Differenz zwischen den Eigenschaften {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} und {{domxref("PerformanceEntry.startTime","startTime")}} darstellt.
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : Gibt den {{domxref("DOMHighResTimeStamp","Zeitstempel")}} für die Zeit zurück, zu der der Abruf der Ressource begann. Dieser Wert entspricht {{domxref("PerformanceResourceTiming.fetchStart")}}.

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgelistet sind, in der sie für das Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung wird in der Navigation links angezeigt.

![Diagramm der Zeitstempel listet Zeitstempel in der Reihenfolge auf, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Startzeit des Abrufs darstellt, der die Weiterleitung einleitet.
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung liegt.
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} unmittelbar vor dem Dispatchen des {{domxref("FetchEvent")}} zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser die Ressource abzurufen beginnt.
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser die DNS-Abfrage für die Ressource startet.
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar nach dem Abschluss der DNS-Abfrage für die Ressource darstellt.
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser die Verbindung zum Server herstellt, um die Ressource abzurufen.
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser den Handshake-Prozess startet, um die aktuelle Verbindung zu sichern.
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nach dem Abschluss der Verbindung des Browsers zum Server, um die Ressource abzurufen.
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar bevor der Browser den Antrag an den Server sendet, um die Ressource anzufordern.
- {{domxref('PerformanceResourceTiming.firstInterimResponseStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Zwischenantwortzeit darstellt (zum Beispiel 100 Continue oder 103 Early Hints).
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nachdem der Browser das erste Byte der Antwort vom Server empfangen hat.
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Verbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Weitere Ressourceninformationen

Zusätzlich stellt dieses Interface die folgenden Eigenschaften bereit, die weitere Informationen über eine Ressource enthalten:

- {{domxref("PerformanceResourceTiming.contentType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zeichenkette, die eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des von Abruf (HTTP oder Cache) empfangenen Nachrichtenkörpers nach Entfernung jeglicher angewandter Inhaltskodierung darstellt.
- {{domxref("PerformanceResourceTiming.deliveryType")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource geliefert wurde — zum Beispiel aus dem Cache oder bei einem Navigations-Prefetch.
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des von Abruf (HTTP oder Cache) empfangenen Nutzlastkörpers vor der Entfernung jeglicher angewandter Inhaltskodierungen darstellt.
- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die das Webplattform-Feature darstellt, das den Leistungseintrag initiiert hat.
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wurde, wie durch die [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- {{domxref('PerformanceResourceTiming.renderBlockingStatus')}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den Render-Blockierungsstatus darstellt. Entweder "`blocking`" oder "`non-blocking`".
- {{domxref('PerformanceResourceTiming.responseStatus')}} {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wurde.
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe beinhaltet die Antwortkopfzeilen plus den Nutzlastkörper der Antwort.
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("PerformanceServerTiming")}}-Einträgen, das Server-Timing-Metriken enthält.

## Instanz-Methoden

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : Gibt eine JSON-Repräsentation des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Protokollierung von Ressourcentiming-Informationen

Beispiel, das einen {{domxref("PerformanceObserver")}} verwendet, der über neue `resource`-Leistungseinträge benachrichtigt, sobald sie in der Performance-Zeitlinie des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von {{domxref("Performance.getEntriesByType()")}}, welches nur `resource`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitlinie des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Sicherheitsanforderungen

### Cross-Origin-Timing-Informationen

Viele der Ressourcentiming-Eigenschaften sind eingeschränkt und geben `0` oder eine leere Zeichenkette zurück, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Timing-Informationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Header im Antwortsatz gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Ressourcentiming-Informationen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Resource timing (Überblick)](/de/docs/Web/API/Performance_API/Resource_timing)

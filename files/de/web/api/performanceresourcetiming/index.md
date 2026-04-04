---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 40fa68f80d38ba7142d47f52cdd0960325d63a44
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceResourceTiming`** Interface ermöglicht die Abrufung und Analyse detaillierter Netzwerk-Zeitdaten hinsichtlich des Ladens von Ressourcen einer Anwendung. Eine Anwendung kann die Zeitmesswerte verwenden, um beispielsweise die Dauer der Abrufung einer spezifischen Ressource, wie einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG-Elements")}}, eines Bildes oder eines Skripts, zu bestimmen.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Zeitachse für das Laden von Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Umleitungsstart- und endzeiten, Abrufstart, DNS-Lookup-Start- und endzeiten, Antwortstart- und endzeiten und mehr. Zusätzlich erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) mit weiteren Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie den Typ der Ressource bereitstellen, die den Abruf initiiert hat.

### Typische Ressourcenzahlungsmetriken

Die Eigenschaften dieses Interfaces ermöglichen die Berechnung bestimmter Ressourcenzahlungsmetriken. Häufige Anwendungsfälle beinhalten:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Zwischenanforderungszeit (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der Dokumentanforderungszeit (`finalResponseHeadersStart` - `requestStart`)
- Messung der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufdauer (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen blockierend sind (`renderBlockingStatus`)

### Verwaltung der Ressourcenspeichergrößen

Standardmäßig werden nur 250 Ressourcenzahlungseinträge gepuffert. Weitere Informationen finden Sie unter den [Ressourcenspeichergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) des Leitfadens zur Ressourcenzahlung.

### Cross-Origin Zeitinformationen

Viele der Ressourcenzahlungseigenschaften sind darauf beschränkt, `0` oder einen leeren String zurückzugeben, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Zeitinformationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Die Eigenschaften, die standardmäßig `0` zurückgeben, wenn eine Ressource von einem anderen Ursprung als dem der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, und `responseStart`.

Beispielsweise, um `https://developer.mozilla.org` Einsicht in Ressourcenzahlungsinformationen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzeigenschaften

### Von `PerformanceEntry` geerbt

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ressourcenzahlungseintragstypen, indem es sie wie folgt qualifiziert und beschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Unterschied zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für die Zeit zurück, zu der der Abruf einer Ressource gestartet wurde. Dieser Wert entspricht [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt folgende Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgelistet sind, in der sie für den Abruf einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung finden Sie in der Navigation links.

![Zeitstempeldiagramm, das Zeitstempel in der Reihenfolge aufführt, in der sie für den Abruf einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Umleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Dispatchen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit dem Abrufen der Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit der Suche nach dem Domainnamen für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss der Domainnamensuche für die Ressource darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Verbindung zum Server zur Abrufung der Ressource herstellt.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess zur Sicherung der aktuellen Verbindung beginnt.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server zur Abrufung der Ressource hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Ressource vom Server anfordert.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenantwortzeit darstellt (zum Beispiel 100 Weiterlesen oder 103 Frühe Hinweise).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält (welches eine Zwischenantwort sein kann).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die endgültige Antwortkopfzeits darstellt (zum Beispiel 200 Erfolg), nach einer Zwischenantwortszeit.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Zusätzlich legt dieses Interface die folgenden Eigenschaften offen, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des abgerufenen Nachrichtenkörpers (HTTP oder Cache) nach Entfernung jeglicher angewendeter Inhaltskodierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource hergestellt wurde – zum Beispiel aus dem Cache oder durch eine navigationsgeführte Vorabrufung.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des abgerufenen Nutzlastkörpers (HTTP oder Cache) darstellt, vor Entfernung jeglicher angewendeter Inhaltskodierungen.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der die Webplattform-Funktion darstellt, die den Leistungs-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wird, wie durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Status des Blockierens der Darstellung darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wird.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopfzeilen plus den Antwortnutzlastkörper.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Server-Leistungsmesswerte enthalten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming` Objekts zurück.

## Beispiele

### Protokollieren von Ressourcenzahlungsinformationen

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Leistungs-Einträge informiert, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered` Option, um auf Einträge zuzugreifen, die vor der Beobachtererstellung erfolgen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Leistungs-Einträge zeigt, die zum Zeitpunkt des Aufrufs der Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ressourcenzahlung (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

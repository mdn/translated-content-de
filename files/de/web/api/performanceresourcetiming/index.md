---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 04301fa08caba25ce0fc17ea80e35383aa3361c0
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceResourceTiming`**-Interface ermöglicht den Abruf und die Analyse detaillierter Netzwerktiming-Daten bezüglich des Ladens von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken nutzen, um beispielsweise zu bestimmen, wie lange es dauert, eine bestimmte Ressource abzurufen, wie einen [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), ein {{SVGElement("SVG","SVG-Element")}}, ein Bild oder ein Skript.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Zeitleiste für das Laden von Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkevents wie Beginn und Ende einer Weiterleitung, Beginn des Abrufs, Beginn und Ende der DNS-Abfrage, Beginn und Ende der Antwort und mehr. Zusätzlich erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie über den Typ der Ressource, die den Abruf initiiert hat, bereitstellen.

### Typische Ressourcentiming-Metriken

Die Eigenschaften dieses Interfaces ermöglichen die Berechnung bestimmter Ressourcentiming-Metriken. Häufige Anwendungsfälle umfassen:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Abfragezeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Zeit für die Zwischennachricht (`firstInterimResponseStart` - `requestStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der TLS-Aushandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Bearbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches genutzt wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen renderblockierend sind (`renderBlockingStatus`)

## Instanzeigenschaften

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ressourceneinstiegstypen, indem es sie wie folgt qualifiziert und beschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, an dem ein Ressourcenabruf begann. Dieser Wert entspricht [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und in der Reihenfolge aufgelistet sind, in der sie beim Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Liste wird in der Navigation links angezeigt.

![Zeitstempel-Diagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Abrufs darstellt, der die Weiterleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem das letzte Byte der Antwort der letzten Weiterleitung empfangen wurde.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) direkt vor dem Versenden des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, falls er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit dem Abrufen der Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die DNS-Abfrage für die Ressource startet.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt direkt nach Abschluss der DNS-Abfrage für die Ressource darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Verbindung zum Server zur Ressourcenabrufung herstellt.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor Beginn des Handshakes zur Absicherung der aktuellen Verbindung.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server zur Ressourcenabrufung hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Anforderung der Ressource an den Server sendet.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenantwortzeit repräsentiert (zum Beispiel 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder unmittelbar bevor die Transportverbindung geschlossen wird, was auch immer zuerst eintritt.

### Zusätzliche Ressourceninformationen

Zusätzlich stellt dieses Interface die folgenden Eigenschaften zur Verfügung, die mehr Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource repräsentiert.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der empfangenen Nachricht von Abrufen (HTTP oder Cache) des Nachrichtenkörpers darstellt, nachdem jegliche angewandte Inhaltscodierung entfernt wurde.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}} {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder von einem navigationalen Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der empfangenen Nutzlast bei Abrufen (HTTP oder Cache) repräsentiert, bevor jegliche angewandte Inhaltscodierungen entfernt wurden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der die Webplattform-Funktion repräsentiert, die den Performance-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wurde, wie durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Renderblockierungsstatus repräsentiert. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode repräsentiert, der beim Abrufen der Ressource zurückgegeben wurde.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource repräsentiert. Die Größe umfasst die Antwortkopfzeilenfelder plus den Antwortnutzlastkörper.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Server-Timing-Metriken enthalten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Ressourcentiming-Informationen protokollieren

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, während sie in der Zeitlinie des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), der nur `resource`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Zeitlinie des Browsers befinden:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Sicherheitsanforderungen

### Timing-Informationen über Ursprungsgrenzen hinweg

Viele der Ressourcentiming-Eigenschaften sind so beschränkt, dass sie `0` oder einen leeren String zurückgeben, wenn die Ressource eine ursprungsübergreifende Anfrage ist. Um Timing-Informationen über Ursprungsgrenzen hinweg offenzulegen, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` den Zugriff auf Ressourcentiming-Informationen zu ermöglichen, sollte die ursprungsübergreifende Ressource folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ressourcentiming (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

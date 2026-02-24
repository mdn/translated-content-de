---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceResourceTiming`** Interface ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Timing-Daten bezüglich des Ladevorgangs von Anwendungsressourcen. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu ermitteln, die zum Abrufen einer bestimmten Ressource, wie einem [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), einem {{SVGElement("SVG","SVG element")}}, einem Bild oder einem Skript, benötigt wird.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Zeitachse für das Laden von Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkevents wie Beginn und Ende von Umleitungen, Start des Abrufs, Start und Ende von DNS-Lookups, Start und Ende von Antworten und mehr. Zusätzlich erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie den Typ der Ressource, die den Abruf initiiert hat, bereitstellen.

### Typische Metriken des Resource-Timings

Die Eigenschaften dieses Interfaces ermöglichen Ihnen die Berechnung bestimmter Metriken des Resource-Timings. Häufige Anwendungsfälle sind:

- Messen der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messen der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Zwischenanforderungszeit (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messen der Anfragezeit (`responseStart` - `requestStart`)
- Messen der Dokumentanfragezeit (`finalResponseHeadersStart` - `requestStart`)
- Messen der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messen der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messen der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfen, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfen, ob die richtigen Ressourcen render-blockierend sind (`renderBlockingStatus`)

### Verwalten von Ressourcenspeichergrößen

Standardmäßig werden nur 250 Resource-Timing-Einträge gepuffert. Weitere Informationen finden Sie in den [Ressourcenspeichergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) des Resource Timing-Leitfadens.

### Cross-Origin-Timing-Informationen

Viele der Resource-Timing-Eigenschaften sind eingeschränkt und geben `0` oder einen leeren String zurück, wenn die Ressource eine Cross-Origin-Anforderung ist. Um Cross-Origin-Timing-Informationen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Die Eigenschaften, die standardmäßig mit `0` zurückgegeben werden, wenn eine Ressource von einem anderen Ursprungsort als der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Beispielsweise muss die Cross-Origin-Ressource, um `https://developer.mozilla.org` den Zugriff auf Resource-Timing-Informationen zu ermöglichen, Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzeigenschaften

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Resource-Performance-Entry-Typen, indem es diese qualifiziert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, zu dem der Abruf einer Ressource gestartet wurde. Dieser Wert entspricht [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgelistet sind, in der sie für den Abruf einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung finden Sie in der Navigation links.

![Zeitstempeldiagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Umleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort vor der Auslösung des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder sofort bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, wird die Eigenschaft immer 0 zurückgeben.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort bevor der Browser beginnt, die Ressource abzurufen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort bevor der Browser das Domain-Name-Lookup für die Ressource startet.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss des Domain-Name-Lookups für die Ressource darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort bevor der Browser die Verbindung zum Server herstellt, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort bevor der Browser den Handshake-Prozess zur Sicherung der aktuellen Verbindung startet.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server zur Ressourcengewinnung hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) sofort bevor der Browser die Anforderung der Ressource vom Server startet.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenantwortszeit darstellt (zum Beispiel, 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält (das möglicherweise eine Zwischenantwort ist).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die endgültige Antwortkopf-Zeit darstellt (zum Beispiel, 200 Erfolg), nach jeder Zwischenantwortszeit.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder direkt bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Darüber hinaus bietet dieses Interface die folgenden Eigenschaften, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des Nachrichtenkörpers darstellt, der vom Abrufen (HTTP oder Cache) stammt, nachdem jede angewandte Inhaltscodierung entfernt wurde.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource geliefert wurde – zum Beispiel aus dem Cache oder durch ein Navigations-Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des Nutzlastkörpers darstellt, der vom Abrufen (HTTP oder Cache) stammt, bevor jede angewandte Inhaltscodierung entfernt wurde.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der das Webplattform-Feature darstellt, das den Performance-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll angibt, das zum Abrufen der Ressource verwendet wurde, wie durch die [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Status der Render-Blockierung darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wurde.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopfzeilenfelder plus den Antwortnutzlastkörper.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Metriken zur Server-Timing enthalten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Protokollierung von Resource-Timing-Informationen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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

- [Resource timing (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

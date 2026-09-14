---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 4d784d88f6e4f5f41d69a901604135f9014f313a
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Schnittstelle **`PerformanceResourceTiming`** ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten zum Laden der Ressourcen einer Anwendung. Eine Anwendung kann die Zeitmetriken beispielsweise verwenden, um die Dauer zu bestimmen, die zum Abrufen einer bestimmten Ressource benötigt wird, etwa eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG-Elements")}}, eines Bildes oder eines Skripts.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften der Schnittstelle erstellen eine Ressourcenladezeitachse mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Start- und Endzeiten von Weiterleitungen, den Beginn des Abrufs, Start- und Endzeiten von DNS-Lookups, Start- und Endzeiten von Antworten und mehr. Darüber hinaus erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie über den Ressourcentyp bereitstellen, der den Abruf ausgelöst hat.

### Typische Metriken für das Ressourcen-Timing

Mit den Eigenschaften dieser Schnittstelle können Sie bestimmte Ressourcen-Timing-Metriken berechnen. Häufige Anwendungsfälle sind:

- Messen der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messen der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Weiterleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Zeit für Zwischenantwortanfragen (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messen der Anfragezeit (`responseStart` - `requestStart`)
- Messen der Dokumentanfragezeit (`finalResponseHeadersStart` - `requestStart`)
- Messen der TLS-Aushandlungszeit (`requestStart` - `secureConnectionStart`)
- Messen der Abrufzeit (ohne Weiterleitungen) (`responseEnd` - `fetchStart`)
- Messen der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Prüfen, ob Inhalt komprimiert wurde (`decodedBodySize` sollte nicht `encodedBodySize` entsprechen)
- Prüfen, ob lokale Caches verwendet wurden (`transferSize` sollte `0` sein)
- Prüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Prüfen, ob die richtigen Ressourcen das Rendering blockieren (`renderBlockingStatus`)

### Verwalten von Größen des Ressourcenpuffers

Standardmäßig werden nur 250 Ressourcen-Timing-Einträge gepuffert. Weitere Informationen finden Sie unter [Größen des Ressourcenpuffers](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Leitfaden zu Resource Timing.

### Timing-Informationen für Cross-Origin-Anfragen

Viele der Ressourcen-Timing-Eigenschaften sind darauf beschränkt, `0` oder eine leere Zeichenfolge zurückzugeben, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Timing-Informationen für Cross-Origin-Anfragen verfügbar zu machen, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Die Eigenschaften, die beim Laden einer Ressource von einem anderen Ursprung als dem der Webseite selbst standardmäßig als `0` zurückgegeben werden, sind: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Damit beispielsweise `https://developer.mozilla.org` Ressourcen-Timing-Informationen sehen darf, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzeigenschaften

### Von `PerformanceEntry` geerbt

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Ressourcen-Performance-Eintragstypen, indem sie wie folgt genauer definiert und eingeschränkt werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) entspricht.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem der Abruf einer Ressource begonnen hat. Wenn keine HTTP-Weiterleitungen vorhanden sind oder deren Timing-Informationen nicht verfügbar gemacht werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert früher als `fetchStart` liegen.

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen und die in der Reihenfolge aufgeführt sind, in der sie beim Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung wird in der Navigation auf der linken Seite angezeigt.

![Zeitstempel-Diagramm mit Zeitstempeln in der Reihenfolge, in der sie beim Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Weiterleitung auslöst.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Auslösen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn bereits ein Service-Worker-Thread ausgeführt wird, oder unmittelbar vor dem Starten des Service-Worker-Threads, wenn er noch nicht ausgeführt wird. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit dem Abrufen der Ressource beginnt. Wenn keine HTTP-Weiterleitungen vorhanden sind oder deren Timing-Informationen nicht verfügbar gemacht werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert später als `startTime` liegen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit dem Lookup des Domainnamens für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss des Domainnamen-Lookups für die Ressource durch den Browser darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess beginnt, um die aktuelle Verbindung abzusichern.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server für den Abruf der Ressource hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit einer Zwischenantwort darstellt (beispielsweise 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server empfängt, bei der es sich um eine Zwischenantwort handeln kann.
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt der endgültigen Header-Antwort darstellt (beispielsweise 200 Success), nach einer etwaigen Zeit für Zwischenantworten.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource empfängt oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Darüber hinaus stellt diese Schnittstelle die folgenden Eigenschaften bereit, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.contentEncoding`](/de/docs/Web/API/PerformanceResourceTiming/contentEncoding) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge, die das {{httpheader("Content-Encoding")}} der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des beim Abruf (HTTP oder Cache) empfangenen Nachrichtenrumpfs nach dem Entfernen aller angewendeten Inhaltskodierungen angibt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch einen navigationsbezogenen Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des beim Abruf (HTTP oder Cache) empfangenen Payload-Rumpfs vor dem Entfernen aller angewendeten Inhaltskodierungen darstellt.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Webplattform-Feature darstellt, das den Performance-Eintrag ausgelöst hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wird, wie durch die [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Status der Rendering-Blockierung darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wurde.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Header-Felder der Antwort sowie den Payload-Rumpf der Antwort.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, das Server-Timing-Metriken enthält.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Überschreibt die Methode [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON), um eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurückzugeben.

## Beispiele

### Protokollieren von Ressourcen-Timing-Informationen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers vorhanden sind:

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

- [Resource Timing (Überblick)](/de/docs/Web/API/Performance_API/Resource_timing)

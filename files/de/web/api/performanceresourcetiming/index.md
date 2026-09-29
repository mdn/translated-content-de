---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Schnittstelle **`PerformanceResourceTiming`** ermöglicht es, detaillierte Netzwerk-Zeitmessdaten zum Laden der Ressourcen einer Anwendung abzurufen und zu analysieren. Eine Anwendung kann anhand dieser Messwerte beispielsweise ermitteln, wie lange das Abrufen einer bestimmten Ressource dauert, etwa eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG element")}}, eines Bildes oder eines Skripts.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften der Schnittstelle bilden anhand hochauflösender Zeitstempel eine Zeitleiste für das Laden einer Ressource. Sie erfasst Netzwerkereignisse wie Beginn und Ende von Weiterleitungen, Beginn des Abrufs, Beginn und Ende der DNS-Abfrage sowie Beginn und Ende der Antwort. Darüber hinaus erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um Eigenschaften, die Aufschluss über die Größe der abgerufenen Ressource und den Typ der Ressource geben, die den Abruf ausgelöst hat.

### Typische Zeitmesswerte für Ressourcen

Mit den Eigenschaften dieser Schnittstelle können Sie verschiedene Zeitmesswerte für Ressourcen berechnen. Häufige Anwendungsfälle sind:

- Messen der Dauer des TCP-Handshakes (`connectEnd` - `connectStart`)
- Messen der Dauer der DNS-Abfrage (`domainLookupEnd` - `domainLookupStart`)
- Messen der Dauer von Weiterleitungen (`redirectEnd` - `redirectStart`)
- Messen der Zeit bis zur vorläufigen Antwort (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messen der Anfragedauer (`responseStart` - `requestStart`)
- Messen der Dauer einer Dokumentanfrage (`finalResponseHeadersStart` - `requestStart`)
- Messen der Dauer der TLS-Aushandlung (`requestStart` - `secureConnectionStart`)
- Messen der Abrufdauer ohne Weiterleitungen (`responseEnd` - `fetchStart`)
- Messen der Verarbeitungsdauer im Service Worker (`fetchStart` - `workerStart`)
- Prüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht gleich `encodedBodySize` sein)
- Prüfen, ob lokale Caches verwendet wurden (`transferSize` sollte `0` sein)
- Prüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Prüfen, ob die richtigen Ressourcen das Rendering blockieren (`renderBlockingStatus`)

### Größe des Ressourcenpuffers verwalten

Standardmäßig werden nur 250 Einträge mit Zeitmessdaten für Ressourcen gepuffert. Weitere Informationen finden Sie unter [Größe des Ressourcenpuffers](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Leitfaden zu Resource Timing.

### Zeitmessinformationen für Cross-Origin-Ressourcen

Viele Eigenschaften für die Zeitmessung von Ressourcen geben `0` oder eine leere Zeichenfolge zurück, wenn es sich um eine Cross-Origin-Anfrage handelt. Damit Zeitmessinformationen für Cross-Origin-Ressourcen verfügbar sind, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Die folgenden Eigenschaften geben standardmäßig `0` zurück, wenn eine Ressource von einer anderen Origin als der Webseite selbst geladen wird: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Damit beispielsweise `https://developer.mozilla.org` die Zeitmessinformationen einer Ressource einsehen kann, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzeigenschaften

### Von `PerformanceEntry` geerbt

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge vom Typ Ressource, indem sie diese wie folgt präzisiert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem der Abruf einer Ressource begann. Wenn keine HTTP-Weiterleitungen vorliegen oder deren Zeitmessinformationen nicht verfügbar sind, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert vor `fetchStart` liegen.

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempel-Eigenschaften. Sie sind im Diagramm dargestellt und in der Reihenfolge aufgeführt, in der sie beim Abrufen einer Ressource erfasst werden. Links in der Navigation finden Sie eine alphabetische Auflistung.

![Zeitstempeldiagramm mit Zeitstempeln in der Reihenfolge, in der sie beim Abrufen einer Ressource erfasst werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Abrufs angibt, der die Weiterleitung auslöst.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nach dem Empfang des letzten Bytes der Antwort auf die letzte Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar vor dem Auslösen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn bereits ein Service-Worker-Thread läuft. Läuft noch keiner, bezeichnet der Zeitstempel den Zeitpunkt unmittelbar vor dem Start des Service-Worker-Threads. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser mit dem Abruf der Ressource beginnt. Wenn keine HTTP-Weiterleitungen vorliegen oder deren Zeitmessinformationen nicht verfügbar sind, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert nach `startTime` liegen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser die DNS-Abfrage für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser die DNS-Abfrage für die Ressource abgeschlossen hat.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser beginnt, die Verbindung zum Server für den Abruf der Ressource herzustellen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser den Handshake zur Absicherung der aktuellen Verbindung beginnt.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser die Verbindung zum Server für den Abruf der Ressource hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser beginnt, die Ressource beim Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt einer vorläufigen Antwort angibt, beispielsweise 100 Continue oder 103 Early Hints.
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser das erste Byte der Serverantwort empfangen hat. Dabei kann es sich auch um eine vorläufige Antwort handeln.
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt der endgültigen Antwort-Header angibt, beispielsweise bei 200 Success, nach etwaigen vorläufigen Antworten.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird – je nachdem, was zuerst eintritt.

### Zusätzliche Informationen zur Ressource

Darüber hinaus stellt diese Schnittstelle die folgenden Eigenschaften mit weiteren Informationen zu einer Ressource bereit:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.contentEncoding`](/de/docs/Web/API/PerformanceResourceTiming/contentEncoding) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge, die das {{httpheader("Content-Encoding")}} der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nachrichtenkörpers in Oktetten angibt, nachdem eine etwaige Inhaltskodierung entfernt wurde.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch einen vorgezogenen Abruf für die Navigation.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nutzdatenkörpers in Oktetten angibt, bevor etwaige Inhaltskodierungen entfernt wurden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die die Webplattform-Funktion angibt, die den Performance-Eintrag ausgelöst hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das für den Abruf der Ressource verwendete Netzwerkprotokoll angibt, identifiziert durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die angibt, ob die Ressource das Rendering blockiert. Der Wert ist entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode angibt.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe der abgerufenen Ressource in Oktetten angibt. Sie umfasst die Antwort-Header-Felder und den Nutzdatenkörper der Antwort.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen mit Zeitmesswerten des Servers.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt ein einfaches, als JSON serialisierbares Objekt zurück, das das `PerformanceResourceTiming`-Objekt darstellt. Die Methode wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beispiele

### Zeitmessinformationen für Ressourcen protokollieren

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue Performance-Einträge vom Typ `resource` benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auch auf Einträge zuzugreifen, die vor dem Erstellen des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Dieses Beispiel verwendet [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Die Methode zeigt nur Performance-Einträge vom Typ `resource` an, die zum Zeitpunkt ihres Aufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

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

- [Zeitmessung für Ressourcen (Überblick)](/de/docs/Web/API/Performance_API/Resource_timing)

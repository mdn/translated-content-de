---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`PerformanceResourceTiming`**-Schnittstelle ermöglicht es, detaillierte Netzwerk-Zeitmessdaten zum Laden der Ressourcen einer Anwendung abzurufen und zu analysieren. Eine Anwendung kann anhand dieser Messwerte beispielsweise ermitteln, wie lange das Abrufen einer bestimmten Ressource dauert, etwa einer [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG element")}}, eines Bildes oder eines Skripts.

{{InheritanceDiagram}}

## Instanzeigenschaften

### Von `PerformanceEntry` geerbt

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Performance-Einträge vom Typ „resource“, indem sie diese wie folgt präzisiert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) angibt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem das Abrufen einer Ressource begonnen hat. Wenn keine HTTP-Weiterleitungen stattfinden oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert vor `fetchStart` liegen.

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempel-Eigenschaften. Sie sind im Diagramm dargestellt und hier in der Reihenfolge aufgeführt, in der sie beim Abrufen einer Ressource erfasst werden. Eine alphabetische Auflistung finden Sie links in der Navigation.

![Zeitstempeldiagramm mit Zeitstempeln in der Reihenfolge, in der sie beim Abrufen einer Ressource erfasst werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Abrufvorgangs angibt, der die Weiterleitung auslöst.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nach dem Empfang des letzten Bytes der Antwort auf die letzte Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar vor dem Auslösen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn bereits ein Service-Worker-Thread läuft, oder unmittelbar vor dem Starten des Service-Worker-Threads, wenn noch keiner läuft. Wird die Ressource nicht von einem Service Worker abgefangen, gibt die Eigenschaft stets 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser beginnt, die Ressource abzurufen. Wenn keine HTTP-Weiterleitungen stattfinden oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert nach `startTime` liegen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser mit der Auflösung des Domainnamens für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss der Auflösung des Domainnamens für die Ressource durch den Browser angibt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser beginnt, eine Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser den Handshake zur Absicherung der aktuellen Verbindung beginnt.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser die Verbindung zum Server hergestellt hat, um die Ressource abzurufen.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar bevor der Browser beginnt, die Ressource beim Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt einer vorläufigen Antwort angibt (beispielsweise 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser das erste Byte der Antwort vom Server empfangen hat (bei der es sich um eine vorläufige Antwort handeln kann).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt der endgültigen Antwort-Header angibt (beispielsweise 200 Success), nach etwaigen vorläufigen Antworten.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird – je nachdem, welches Ereignis zuerst eintritt.

### Zusätzliche Informationen zur Ressource

Darüber hinaus stellt diese Schnittstelle die folgenden Eigenschaften mit weiteren Informationen über eine Ressource bereit:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.contentEncoding`](/de/docs/Web/API/PerformanceResourceTiming/contentEncoding) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein String, der den {{httpheader("Content-Encoding")}} der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des beim Abruf empfangenen Nachrichtenkörpers (über HTTP oder aus dem Cache) nach dem Entfernen einer gegebenenfalls angewendeten Inhaltskodierung angibt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch ein Vorabrufen für eine Navigation.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des beim Abruf empfangenen Nutzdatenkörpers (über HTTP oder aus dem Cache) vor dem Entfernen gegebenenfalls angewendeter Inhaltskodierungen angibt.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der die Webplattform-Funktion angibt, die den Performance-Eintrag ausgelöst hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das zum Abrufen der Ressource verwendete Netzwerkprotokoll angibt, identifiziert anhand der [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der angibt, ob die Ressource das Rendern blockiert. Der Wert ist entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode angibt.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource angibt. Sie setzt sich aus der Größe des Antwortkörpers und einem festen Wert zusammen, der stellvertretend für die Größe der Antwort-Header steht.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen mit serverseitigen Zeitmesswerten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `PerformanceResourceTiming`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beschreibung

Die Eigenschaften der Schnittstelle bilden eine Zeitleiste des Ladens einer Ressource mit hochauflösenden Zeitstempeln für Netzwerkereignisse, etwa für Beginn und Ende von Weiterleitungen, den Beginn des Abrufvorgangs, Beginn und Ende der DNS-Auflösung sowie Beginn und Ende der Antwort. Darüber hinaus erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten zur Größe der abgerufenen Ressource und zum Ressourcentyp bereitstellen, der den Abruf ausgelöst hat.

### Typische Zeitmesswerte für Ressourcen

Mit den Eigenschaften dieser Schnittstelle können Sie bestimmte Zeitmesswerte für Ressourcen berechnen. Häufige Anwendungsfälle sind:

- Messen der Dauer des TCP-Handshakes (`connectEnd` - `connectStart`)
- Messen der Dauer der DNS-Auflösung (`domainLookupEnd` - `domainLookupStart`)
- Messen der Dauer von Weiterleitungen (`redirectEnd` - `redirectStart`)
- Messen der Dauer bis zur vorläufigen Antwort (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messen der Anfragedauer (`responseStart` - `requestStart`)
- Messen der Dauer einer Dokumentanforderung (`finalResponseHeadersStart` - `requestStart`)
- Messen der Dauer der TLS-Aushandlung (`requestStart` - `secureConnectionStart`)
- Messen der Abrufdauer (ohne Weiterleitungen) (`responseEnd` - `fetchStart`)
- Messen der Verarbeitungsdauer des Service Workers (`fetchStart` - `workerStart`)
- Prüfen, ob der Inhalt komprimiert wurde (`decodedBodySize` sollte nicht gleich `encodedBodySize` sein)
- Prüfen, ob lokale Caches verwendet wurden (`transferSize` sollte `0` sein)
- Prüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Prüfen, ob die richtigen Ressourcen das Rendern blockieren (`renderBlockingStatus`)

### Puffergrößen für Ressourcen verwalten

Standardmäßig werden nur 250 Zeitmess-Einträge für Ressourcen gepuffert. Weitere Informationen finden Sie unter [Puffergrößen für Ressourcen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Leitfaden zu Resource Timing.

### Einschränkungen bei ursprungsübergreifenden Ressourcen

Zeitmessinformationen für eine ursprungsübergreifende Ressource sind eingeschränkt, sofern die Ressource die Prüfung anhand von {{HTTPHeader("Timing-Allow-Origin")}} nicht besteht.
Dies betrifft die folgenden Eigenschaften, die beim Laden einer Ressource von einem anderen Ursprung als dem der Webseite standardmäßig `0`, einen leeren String oder ein leeres Array zurückgeben: `redirectStart`, `redirectEnd`, `workerStart`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart`, `firstInterimResponseStart`, `responseStart`, `finalResponseHeadersStart`, `nextHopProtocol`, `transferSize`, `deliveryType` und `serverTiming`.
Selbst eine Ressource, die die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Prüfung besteht, benötigt `Timing-Allow-Origin`, damit diese Werte offengelegt werden.

Damit beispielsweise `https://developer.mozilla.org` Zeitmessinformationen einer Ressource einsehen kann, sollte die ursprungsübergreifende Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

Andere Eigenschaften beschreiben die Antwort selbst statt ihrer Zeitmesswerte und hängen von der CORS-Prüfung statt von der Prüfung anhand von `Timing-Allow-Origin` ab.
Die Eigenschaften `contentType`, `encodedBodySize`, `decodedBodySize` und `responseStatus` geben für ursprungsübergreifende Ressourcen `0` oder einen leeren String zurück, sofern die Ressource nicht im [Modus](/de/docs/Web/API/Request/mode) `cors` angefordert wurde und die CORS-Prüfung bestanden hat.
Frame-Navigationen, etwa wenn ein {{HTMLElement("iframe")}} sein Dokument lädt, verwenden kein CORS. Daher werden die Größen ihrer Antwortkörper nur für Frames gleichen Ursprungs offengelegt, die ohne ursprungsübergreifende Weiterleitungen geladen wurden.
Die Eigenschaft `transferSize` hängt von beiden Prüfungen ab: Ohne `Timing-Allow-Origin` ist ihr Wert `0`, und wenn die Ressource die CORS-Prüfung nicht besteht, enthält der Wert die Größe des Antwortkörpers nicht.

Wenn das Dokument in einem ursprungsübergreifenden {{HTMLElement("iframe")}} die Prüfung anhand von `Timing-Allow-Origin` nicht besteht, meldet der Browser einen Ersatz-Eintrag.
In diesem Eintrag bezeichnet `responseEnd` den Zeitpunkt, zu dem das iframe einschließlich seiner Unterressourcen vollständig geladen wurde.
Weitere Informationen finden Sie unter [Ursprungsübergreifende iframes](/de/docs/Web/API/PerformanceResourceTiming/responseEnd#cross-origin_iframes).

## Beispiele

### Zeitmessinformationen für Ressourcen protokollieren

Dieses Beispiel verwendet einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue Performance-Einträge vom Typ `resource` benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

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

- [Resource Timing (Überblick)](/de/docs/Web/API/Performance_API/Resource_timing)

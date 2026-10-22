---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Schnittstelle **`PerformanceResourceTiming`** ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Zeitdaten zum Laden der Ressourcen einer Anwendung. Eine Anwendung kann anhand dieser Zeitmesswerte beispielsweise ermitteln, wie lange das Abrufen einer bestimmten Ressource dauert, etwa eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), {{SVGElement("SVG","SVG element")}}, Bildes oder Skripts.

{{InheritanceDiagram}}

## Instanzeigenschaften

### Von `PerformanceEntry` geerbt

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Ressourceneinträge, indem sie diese wie folgt präzisiert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) entspricht.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) für den Beginn des Abrufs einer Ressource zurück. Wenn keine HTTP-Weiterleitungen vorliegen oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert vor `fetchStart` liegen.

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempeleigenschaften. Sie sind im Diagramm dargestellt und in der Reihenfolge aufgeführt, in der sie beim Abrufen einer Ressource erfasst werden. Eine alphabetische Auflistung finden Sie links in der Navigation.

![Zeitstempeldiagramm mit den Zeitstempeln in der Reihenfolge, in der sie beim Abrufen einer Ressource erfasst werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Beginn des Abrufs angibt, der die Weiterleitung auslöst.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort auf die letzte Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Auslösen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn bereits ein Service-Worker-Thread ausgeführt wird, oder unmittelbar vor dem Starten des Service-Worker-Threads, wenn er noch nicht ausgeführt wird. Wird die Ressource nicht von einem Service Worker abgefangen, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit dem Abrufen der Ressource beginnt. Wenn keine HTTP-Weiterleitungen vorliegen oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert nach `startTime` liegen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser mit der Auflösung des Domainnamens für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach Abschluss der Domainnamenauflösung für die Ressource durch den Browser angibt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, eine Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake zur Absicherung der aktuellen Verbindung beginnt.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server hergestellt hat, um die Ressource abzurufen.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource beim Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt einer Zwischenantwort angibt (zum Beispiel 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server empfangen hat (bei der es sich um eine Zwischenantwort handeln kann).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der nach etwaigen Zwischenantworten den Zeitpunkt der endgültigen Antwort-Header angibt (zum Beispiel 200 Success).
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource empfangen hat oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Weitere Informationen zur Ressource

Darüber hinaus stellt diese Schnittstelle die folgenden Eigenschaften mit weiteren Informationen über eine Ressource bereit:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource angibt.
- [`PerformanceResourceTiming.contentEncoding`](/de/docs/Web/API/PerformanceResourceTiming/contentEncoding) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Eine Zeichenfolge, die den {{httpheader("Content-Encoding")}}-Wert der abgerufenen Ressource angibt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nachrichtentexts in Oktetten angibt, nachdem eine angewendete Inhaltskodierung entfernt wurde.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde – beispielsweise aus dem Cache oder durch ein Prefetch für eine Navigation.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe des beim Abruf (über HTTP oder aus dem Cache) empfangenen Nutzdatenkörpers in Oktetten angibt, bevor angewendete Inhaltskodierungen entfernt wurden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Webplattform-Feature angibt, das den Performance-Eintrag ausgelöst hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das zum Abrufen der Ressource verwendete Netzwerkprotokoll angibt, identifiziert durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die angibt, ob das Rendering blockiert wird. Der Wert ist entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode angibt.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe der abgerufenen Ressource in Oktetten angibt. Die Größe umfasst die Antwort-Header-Felder und den Nutzdatenkörper der Antwort.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen mit serverseitigen Zeitmesswerten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt ein einfaches, als JSON serialisierbares Objekt zurück, das das `PerformanceResourceTiming`-Objekt repräsentiert. Wird automatisch von {{jsxref("JSON.stringify()")}} aufgerufen.

## Beschreibung

Die Eigenschaften der Schnittstelle bilden eine Zeitleiste für das Laden von Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkereignisse, etwa für den Beginn und das Ende von Weiterleitungen, den Beginn des Abrufs, den Beginn und das Ende der DNS-Auflösung sowie den Beginn und das Ende von Antworten. Darüber hinaus erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um Eigenschaften, die Daten zur Größe der abgerufenen Ressource und zum Typ der Ressource bereitstellen, die den Abruf ausgelöst hat.

### Typische Zeitmesswerte für Ressourcen

Mit den Eigenschaften dieser Schnittstelle können Sie bestimmte Zeitmesswerte für Ressourcen berechnen. Häufige Anwendungsfälle sind:

- Messen der Dauer des TCP-Handshakes (`connectEnd` - `connectStart`)
- Messen der Dauer der DNS-Auflösung (`domainLookupEnd` - `domainLookupStart`)
- Messen der Dauer von Weiterleitungen (`redirectEnd` - `redirectStart`)
- Messen der Dauer bis zu einer Zwischenantwort (`firstInterimResponseStart` - `finalResponseHeadersStart`)
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

Standardmäßig werden nur 250 Einträge mit Zeitdaten für Ressourcen zwischengespeichert. Weitere Informationen finden Sie unter [Größe des Ressourcenpuffers verwalten](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Leitfaden zu Resource Timing.

### Zeitinformationen für ursprungsübergreifende Ressourcen

Bei vielen Eigenschaften mit Zeitinformationen für Ressourcen wird der Rückgabewert auf `0` oder eine leere Zeichenfolge beschränkt, wenn die Ressource über eine ursprungsübergreifende Anfrage abgerufen wird. Damit ursprungsübergreifende Zeitinformationen offengelegt werden, muss der HTTP-Antwort-Header {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Die folgenden Eigenschaften geben beim Laden einer Ressource von einem anderen Ursprung als dem der Webseite selbst standardmäßig `0` zurück: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Damit beispielsweise `https://developer.mozilla.org` Zeitinformationen für eine Ressource sehen kann, sollte die ursprungsübergreifende Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Beispiele

### Zeitinformationen für Ressourcen protokollieren

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor dem Erstellen des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

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

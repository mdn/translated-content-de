---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 153369fa094f0b58ce1aee3f3cc1a3d7ab540b91
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Schnittstelle **`PerformanceResourceTiming`** ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Zeitdaten zum Laden der Ressourcen einer Anwendung. Eine Anwendung kann die Zeitmetriken beispielsweise verwenden, um zu bestimmen, wie lange das Abrufen einer bestimmten Ressource dauert, etwa eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG-Elements")}}, Bildes oder Skripts.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften der Schnittstelle erstellen eine Ressourcen-Ladezeitleiste mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Start- und Endzeiten von Weiterleitungen, Fetch-Start, Start- und Endzeiten der DNS-Suche, Start- und Endzeiten von Antworten und mehr. Zusätzlich erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie über den Ressourcentyp bereitstellen, der den Abruf ausgelöst hat.

### Typische Ressourcen-Zeitmetriken

Die Eigenschaften dieser Schnittstelle ermöglichen die Berechnung bestimmter Ressourcen-Zeitmetriken. Häufige Anwendungsfälle sind:

- Messen der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messen der DNS-Suchzeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Weiterleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Zeit für vorläufige Anfragen (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messen der Anfragezeit (`responseStart` - `requestStart`)
- Messen der Dokumentanfragezeit (`finalResponseHeadersStart` - `requestStart`)
- Messen der TLS-Aushandlungszeit (`requestStart` - `secureConnectionStart`)
- Messen der Abrufzeit (ohne Weiterleitungen) (`responseEnd` - `fetchStart`)
- Messen der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Prüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` entsprechen)
- Prüfen, ob lokale Caches verwendet wurden (`transferSize` sollte `0` sein)
- Prüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Prüfen, ob die richtigen Ressourcen das Rendering blockieren (`renderBlockingStatus`)

### Verwalten von Ressourcenspeichergrößen

Standardmäßig werden nur 250 Ressourcen-Zeiteinträge gepuffert. Weitere Informationen finden Sie unter [Ressourcenspeichergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Resource-Timing-Leitfaden.

### Zeitinformationen für Cross-Origin

Viele der Ressourcen-Zeitgebungseigenschaften sind darauf beschränkt, `0` oder eine leere Zeichenfolge zurückzugeben, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Zeitinformationen offenzulegen, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Die Eigenschaften, die beim Laden einer Ressource von einem anderen Origin als dem der Webseite standardmäßig als `0` zurückgegeben werden, sind: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Um beispielsweise `https://developer.mozilla.org` das Anzeigen von Ressourcen-Zeitinformationen zu erlauben, sollte die Cross-Origin-Ressource Folgendes senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzeigenschaften

### Geerbt von `PerformanceEntry`

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) für Ressourcen-Performance-Eintragstypen, indem sie wie folgt qualifiziert und eingeschränkt werden:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem ein Ressourcenabruf gestartet wurde. Wenn keine HTTP-Weiterleitungen vorhanden sind oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert früher als `fetchStart` liegen.

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempeleigenschaften, die Sie im Diagramm sehen und die in der Reihenfolge aufgeführt sind, in der sie beim Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung wird links in der Navigation angezeigt.

![Zeitstempel-Diagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/resource-timing/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Weiterleitung einleitet.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Auslösen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, falls ein Service-Worker-Thread bereits läuft, oder unmittelbar vor dem Starten des Service-Worker-Threads, falls dieser noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen. Wenn keine HTTP-Weiterleitungen vorhanden sind oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert später als `startTime` liegen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Suche nach dem Domainnamen für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt unmittelbar nach dem Abschluss der Suche nach dem Domainnamen für die Ressource durch den Browser darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung mit dem Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess zum Sichern der aktuellen Verbindung beginnt.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Herstellung der Verbindung mit dem Server zum Abrufen der Ressource abgeschlossen hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt der vorläufigen Antwort darstellt (beispielsweise 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server empfängt (bei der es sich um eine vorläufige Antwort handeln kann).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt der endgültigen Header-Antwort darstellt (beispielsweise 200 Success), nach dem Zeitpunkt einer etwaigen vorläufigen Antwort.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource empfängt oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Zusätzlich stellt diese Schnittstelle die folgenden Eigenschaften bereit, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die beim Abruf (HTTP oder Cache) des Nachrichtenkörpers empfangene Größe (in Oktetten) nach dem Entfernen aller angewendeten Inhaltskodierungen angibt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde — beispielsweise aus dem Cache oder durch einen navigationsbezogenen Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die beim Abruf (HTTP oder Cache) des Nutzdatenkörpers empfangene Größe (in Oktetten) vor dem Entfernen aller angewendeten Inhaltskodierungen darstellt.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Webplattform-Feature darstellt, das den Performance-Eintrag ausgelöst hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wird, identifiziert durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301).
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Eine Zeichenfolge, die den Status der Rendering-Blockierung darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den beim Abrufen der Ressource zurückgegebenen HTTP-Antwortstatuscode darstellt.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Felder des Antwortheaders sowie den Nutzdatenkörper der Antwort.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, das Server-Zeitmetriken enthält.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Überschreibt die Methode [`PerformanceEntry.toJSON()`](/de/docs/Web/API/PerformanceEntry/toJSON), um eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurückzugeben.

## Beispiele

### Protokollieren von Ressourcen-Zeitinformationen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

- [Ressourcen-Timing (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

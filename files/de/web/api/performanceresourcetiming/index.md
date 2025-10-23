---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: feda2f126affe395c55a9c5f8b668a6bf0fcb30f
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceResourceTiming`** Interface ermöglicht die Abfrage und Analyse detaillierter Netzwerk-Timing-Daten bezüglich des Ladevorgangs von Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken verwenden, um beispielsweise die Zeit zu bestimmen, die benötigt wird, um eine bestimmte Ressource abzurufen, wie ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), {{SVGElement("SVG","SVG-Element")}}, Bild oder Skript.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Ressourcenladezeitleiste mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Redirect-Start- und -Endzeiten, Fetch-Start, DNS-Lookup-Start- und -Endzeiten, Antwort-Start- und -Endzeiten und mehr. Zusätzlich erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) mit anderen Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie den Ressourcentyp, der das Abrufen initiiert hat, bereitstellen.

### Typische Ressourcen-Timing-Metriken

Die Eigenschaften dieses Interfaces ermöglichen die Berechnung bestimmter Ressourcen-Timing-Metriken. Häufige Anwendungsfälle sind:

- Messung der TCP-Handschlagzeit (`connectEnd` - `connectStart`)
- Messung der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Zwischenanfragezeit (`firstInterimResponseStart` - `finalResponseHeadersStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der Dokumentanforderungszeit (`finalResponseHeadersStart` - `requestStart`)
- Messung der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Fetch-Zeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen renderblockierend sind (`renderBlockingStatus`)

### Verwaltung der Ressourcen-Puffergrößen

Standardmäßig werden nur 250 Ressourcentiming-Einträge gepuffert. Für weitere Informationen siehe die [Ressourcen-Puffergrößen](/de/docs/Web/API/Performance_API/Resource_timing#managing_resource_buffer_sizes) im Resource Timing Leitfaden.

### Timing-Informationen über Ursprünge hinweg

Viele der Ressourcentiming-Eigenschaften sind darauf beschränkt, `0` oder einen leeren String zurückzugeben, wenn die Ressource eine CORS-Anforderung ist. Um Timing-Informationen über Ursprünge hinweg freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Die Eigenschaften, die standardmäßig als `0` zurückgegeben werden, wenn das Laden einer Ressource von einem anderen Ursprung als dem der Webseite selbst erfolgt: `redirectStart`, `redirectEnd`, `domainLookupStart`, `domainLookupEnd`, `connectStart`, `connectEnd`, `secureConnectionStart`, `requestStart` und `responseStart`.

Beispielsweise sollte die CORS-Ressource die folgenden Header senden, um `https://developer.mozilla.org` zu erlauben, Ressourcentiming-Informationen zu sehen:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Instanzfelder

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) Eigenschaften für Ressourcen-Performance-Eintragstypen, indem sie qualifiziert und eingeschränkt werden wie folgt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) darstellt.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem ein Ressourcenabruf gestartet wurde. Dieser Wert ist gleichwertig zu [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgeführt sind, in der sie für das Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Liste finden Sie in der Navigation links.

![Zeitstempel-Diagramm, das Zeitstempel in der Reihenfolge zeigt, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs darstellt, der die Umleitung einleitet.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach Erhalt des letzten Bytes der Antwort der letzten Umleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor der Verteilung des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser das Domain-Namensnachschlagen für die Ressource startet.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach Abschluss des Domain-Namensnachschlagens für die Ressource darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, den Handshake-Prozess zur Sicherstellung der aktuellen Verbindung zu starten.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server für den Abruf der Ressource abgeschlossen hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenantwortzeiten (zum Beispiel 100 Continue oder 103 Early Hints) darstellt.
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält (was eine Zwischenantwort sein kann).
- [`PerformanceResourceTiming.finalResponseHeadersStart`](/de/docs/Web/API/PerformanceResourceTiming/finalResponseHeadersStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die endgültige Kopfzeilenantwortzeit (zum Beispiel 200 Success) darstellt, nach jeder Zwischenantwortzeit.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Darüber hinaus stellt dieses Interface die folgenden Eigenschaften bereit, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der Nachrichtennutzlast nach der Entfernung jeglicher angewandter Inhaltskodierung darstellt, die durch den Abruf (HTTP oder Cache) erhalten wurde.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}} {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource bereitgestellt wurde — zum Beispiel aus dem Cache oder aus einem Navigations-Vorababruf.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der Abrufnachricht (HTTP oder Cache) für den Nutzlastkörper darstellt, bevor jegliche angewandte Inhaltskodierungen entfernt werden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der das Webplattform-Feature beschreibt, das den Performance-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll darstellt, das zum Abrufen der Ressource verwendet wurde, wie es durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert wurde.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Render-Blocking-Status darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wird.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopfzeilenfelder sowie den Antwort-Payload-Body.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Server-Timing-Metriken enthalten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Protokollierung von Ressourcentiming-Informationen

Beispiel unter Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erzeugung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

- [Ressourcentiming (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

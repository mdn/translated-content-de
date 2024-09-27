---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceResourceTiming`** Interface ermöglicht das Abrufen und Analysieren detaillierter Netzwerk-Timing-Daten bezüglich des Ladens von Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken nutzen, um zum Beispiel die Dauer der Abfrage einer bestimmten Ressource zu bestimmen, wie etwa eines [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), eines {{SVGElement("SVG","SVG elements")}}, Bildes oder Scripts.

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Ladezeitachse für Ressourcen mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie den Beginn und das Ende einer Umleitung, den Beginn des Abrufs, den Beginn und das Ende einer DNS-Abfrage, Beginn und Ende der Antwort und mehr. Darüber hinaus erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) mit weiteren Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie die Art der Ressource, die den Abruf initiiert hat, bereitstellen.

{{InheritanceDiagram}}

### Typische Ressourcen-Timing-Metriken

Die Eigenschaften dieses Interfaces ermöglichen Ihnen die Berechnung bestimmter Ressourcen-Timing-Metriken. Häufige Anwendungsfälle sind:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Abfragezeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Zeit für Zwischenergebnisse (`firstInterimResponseStart` - `requestStart`)
- Messung der Anfragezeit (`responseStart` - `requestStart`)
- Messung der TLS-Aushandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufzeit (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messung der Verarbeitung durch den ServiceWorker (`fetchStart` - `workerStart`)
- Überprüfung, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen das Rendering blockieren (`renderBlockingStatus`)

## Instanzeigenschaften

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ressource-Performance-Entry-Typen, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für die Zeit zurück, zu der der Abruf einer Ressource gestartet wurde. Dieser Wert ist gleichbedeutend mit [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgeführt sind, in der sie für das Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung finden Sie in der Navigation auf der linken Seite.

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Startzeitpunkt des Abrufs darstellt, der die Umleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Umleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Dispatch des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, falls nicht. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Domain-Namensauflösung für die Ressource startet.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss der Domain-Namensauflösung für die Ressource durch den Browser darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Verbindung zum Server herstellt, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess startet, um die aktuelle Verbindung zu sichern.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Aufbau der Verbindung zum Server durch den Browser zum Abrufen der Ressource.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Ressource vom Server anfordert.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenantwortzeiten darstellt (zum Beispiel 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Zusätzlich gibt dieses Interface die folgenden Eigenschaften frei, die mehr Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine vereinfachte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen Nachrichtentextes nach Entfernung jeglicher angewandter Inhaltskodierungen angibt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}} {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource geliefert wurde - zum Beispiel aus dem Cache oder durch ein navigationales Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des vom Abruf (HTTP oder Cache) empfangenen Nutzlastkörpers darstellt, bevor jegliche angewandten Inhaltskodierungen entfernt werden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der das Web-Plattform-Merkmal darstellt, das den Performance-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzprotokoll darstellt, das für das Abrufen der Ressource verwendet wird, wie durch die [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Status des Render-Blockings darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wird.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst die Antwortkopf-Felder plus den Antwort-Nutzlastkörper.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming) Einträgen, die Server-Timing-Metriken enthalten.

## Instanzmethoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Repräsentation des `PerformanceResourceTiming` Objekts zurück.

## Beispiele

### Protokollierung von Ressourcen-Timing-Informationen

Ein Beispiel für die Verwendung eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der neue `resource` Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Ein Beispiel für die Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Sicherheitsanforderungen

### Cross-Origin-Timing-Informationen

Viele der Ressourcen-Timing-Eigenschaften sind darauf beschränkt, `0` oder einen leeren String zurückzugeben, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Timing-Informationen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Ressourcen-Timing-Informationen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ressourcen-Timing (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

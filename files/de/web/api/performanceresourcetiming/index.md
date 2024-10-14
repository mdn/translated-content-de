---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`PerformanceResourceTiming`**-Schnittstelle ermöglicht das Abrufen und Analysieren detaillierter Netzwerkzeitdaten bezüglich des Ladens von Ressourcen einer Anwendung. Eine Anwendung kann die Zeitmessungen verwenden, um beispielsweise die Dauer zum Abrufen einer bestimmten Ressource zu bestimmen, wie eine [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), ein {{SVGElement("SVG","SVG-Element")}}, ein Bild oder ein Skript.

{{InheritanceDiagram}}

## Beschreibung

Die Eigenschaften der Schnittstelle erstellen eine Ressourcelade-Zeitleiste mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Start- und Endzeiten von Weiterleitungen, Abrufstart, Start- und Endzeiten der DNS-Suche, Start- und Endzeiten der Antwort und mehr. Zusätzlich erweitert die Schnittstelle [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie über den Typ der Ressource, der den Abruf initiiert hat, bereitstellen.

### Typische Ressourcentiming-Metriken

Die Eigenschaften dieser Schnittstelle erlauben Ihnen die Berechnung bestimmter Ressourcentiming-Metriken. Häufige Anwendungsfälle beinhalten:

- Messen der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messen der DNS-Suchzeit (`domainLookupEnd` - `domainLookupStart`)
- Messen der Umleitungszeit (`redirectEnd` - `redirectStart`)
- Messen der Zwischenanfragezeit (`firstInterimResponseStart` - `requestStart`)
- Messen der Anforderungszeit (`responseStart` - `requestStart`)
- Messen der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messen der Zeit zum Abrufen (ohne Umleitungen) (`responseEnd` - `fetchStart`)
- Messen der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfen, ob Inhalte komprimiert wurden (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfen, ob lokale Caches verwendet wurden (`transferSize` sollte `0` sein)
- Überprüfen, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfen, ob die richtigen Ressourcen render-blockierend sind (`renderBlockingStatus`)

## Instanz-Eigenschaften

### Von `PerformanceEntry` geerbt

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ressourcentypen von Leistungseinträgen, indem sie diese qualifiziert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für die Zeit zurück, zu der ein Ressourcenabruf gestartet wurde. Dieser Wert entspricht [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Die Schnittstelle unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und die in der Reihenfolge aufgelistet sind, in der sie beim Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung wird in der Navigation links angezeigt.

![Zeitstempel-Diagramm, das Zeitstempel in der Reihenfolge auflistet, in der sie beim Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Startzeit des Abrufs repräsentiert, der die Weiterleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nach dem Empfang des letzten Bytes der Antwort der letzten Weiterleitung.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Aufrufen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser die Domänennamensuche für die Ressource beginnt.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar nach dem Abschluss der Domänennamensuche für die Ressource durch den Browser darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, den Handshake-Prozess zur Sicherung der aktuellen Verbindung auszuführen.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser die Verbindung zum Server zur Ressourcengewinnung hergestellt hat.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zwischenanfragezeit repräsentiert (zum Beispiel 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource empfängt oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Darüber hinaus bietet diese Schnittstelle folgende Eigenschaften, die mehr Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der vom Abruf (HTTP oder Cache) des Nachrichtenkörpers empfangenen Daten darstellt, nach Entfernung jeglicher angewandter Inhaltskodierung.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}} {{ReadOnlyInline}}
  - : Gibt an, wie die Ressource geliefert wurde — zum Beispiel aus dem Cache oder aus einem Navigations-Vorladen.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der beim Abruf (HTTP oder Cache) empfangenen Nutzlast darstellt, bevor jegliche angewandte Inhaltskodierungen entfernt wurden.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der das Web-Plattform-Feature repräsentiert, welches den Leistungseintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll repräsentiert, das zum Abrufen der Ressource verwendet wird, wie durch die [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Render-Blockierungsstatus darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode repräsentiert, der beim Abrufen der Ressource zurückgegeben wurde.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe umfasst sowohl die Antwortheaderfelder als auch den Antwortnutzlastkörper.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Timing-Metriken des Servers enthalten.

## Instanz-Methoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Protokollieren von Ressourcentiming-Informationen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge benachrichtigt, sobald sie in der Leistung-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistung-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Sicherheitsanforderungen

### Cross-Origin-Timing-Informationen

Viele der Eigenschaften für das Ressourcentiming sind auf `0` oder einen leeren String beschränkt, wenn die Ressource eine Cross-Origin-Anfrage ist. Um Cross-Origin-Timing-Informationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Ressourcentiming-Informationen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ressourcentiming (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

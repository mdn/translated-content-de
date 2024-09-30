---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceResourceTiming`**-Interface ermöglicht den Abruf und die Analyse detaillierter Netzwerktiming-Daten bezüglich des Ladens der Ressourcen einer Anwendung. Eine Anwendung kann die Timing-Metriken nutzen, um beispielsweise die Zeitdauer zu ermitteln, die zum Abrufen einer bestimmten Ressource benötigt wird, wie etwa ein [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest), ein {{SVGElement("SVG","SVG-Element")}}, Bild oder Skript.

## Beschreibung

Die Eigenschaften des Interfaces erstellen eine Ressourcenlade-Zeitleiste mit hochauflösenden Zeitstempeln für Netzwerkereignisse wie Weiterleitungsbeginn und -ende, Beginn des Abrufs, Anfang und Ende des DNS-Lookups, Anfang und Ende der Antwort und mehr. Zusätzlich erweitert das Interface [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) um weitere Eigenschaften, die Daten über die Größe der abgerufenen Ressource sowie den Typ der Ressource, die den Abruf initiiert hat, bereitstellen.

{{InheritanceDiagram}}

### Typische Ressourcen-Timing-Metriken

Die Eigenschaften dieses Interfaces ermöglichen Ihnen die Berechnung bestimmter Ressourcen-Timing-Metriken. Häufige Anwendungsfälle sind:

- Messung der TCP-Handshake-Zeit (`connectEnd` - `connectStart`)
- Messung der DNS-Lookup-Zeit (`domainLookupEnd` - `domainLookupStart`)
- Messung der Weiterleitungszeit (`redirectEnd` - `redirectStart`)
- Messung der Zwischenanforderungszeit (`firstInterimResponseStart` - `requestStart`)
- Messung der Anforderungszeit (`responseStart` - `requestStart`)
- Messung der TLS-Verhandlungszeit (`requestStart` - `secureConnectionStart`)
- Messung der Abrufzeit (ohne Weiterleitungen) (`responseEnd` - `fetchStart`)
- Messung der ServiceWorker-Verarbeitungszeit (`fetchStart` - `workerStart`)
- Überprüfung, ob der Inhalt komprimiert wurde (`decodedBodySize` sollte nicht `encodedBodySize` sein)
- Überprüfung, ob lokale Caches getroffen wurden (`transferSize` sollte `0` sein)
- Überprüfung, ob moderne und schnelle Protokolle verwendet werden (`nextHopProtocol` sollte HTTP/2 oder HTTP/3 sein)
- Überprüfung, ob die richtigen Ressourcen render-blocking sind (`renderBlockingStatus`)

## Instanz-Eigenschaften

### Geerbt von `PerformanceEntry`

Dieses Interface erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften für Ressourcenleistungseintragstypen, indem es sie wie folgt qualifiziert und einschränkt:

- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Differenz zwischen den Eigenschaften [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) ist.
- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"resource"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt die URL der Ressource zurück.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, an dem das Abrufen einer Ressource begonnen hat. Dieser Wert entspricht [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart).

### Zeitstempel

Das Interface unterstützt die folgenden Zeitstempel-Eigenschaften, die Sie im Diagramm sehen können und in der Reihenfolge aufgelistet sind, in der sie beim Abrufen einer Ressource aufgezeichnet werden. Eine alphabetische Auflistung wird in der Navigation, links, angezeigt.

![Zeitstempel-Diagramm, das die Zeitstempel in der Reihenfolge auflistet, in der sie für das Abrufen einer Ressource aufgezeichnet werden](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Startzeit des Abrufs darstellt, der die Weiterleitung initiiert.
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), unmittelbar nachdem das letzte Byte der Antwort der letzten Weiterleitung empfangen wurde.
- [`PerformanceResourceTiming.workerStart`](/de/docs/Web/API/PerformanceResourceTiming/workerStart) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor der Disposition des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.
- [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.
- [`PerformanceResourceTiming.domainLookupStart`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser das Domain-Name-Lookup für die Ressource startet.
- [`PerformanceResourceTiming.domainLookupEnd`](/de/docs/Web/API/PerformanceResourceTiming/domainLookupEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt unmittelbar nach Abschluss des Domain-Name-Lookups durch den Browser für die Ressource darstellt.
- [`PerformanceResourceTiming.connectStart`](/de/docs/Web/API/PerformanceResourceTiming/connectStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Verbindung zum Server herzustellen, um die Ressource abzurufen.
- [`PerformanceResourceTiming.secureConnectionStart`](/de/docs/Web/API/PerformanceResourceTiming/secureConnectionStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser den Handshake-Prozess zur Sicherung der aktuellen Verbindung startet.
- [`PerformanceResourceTiming.connectEnd`](/de/docs/Web/API/PerformanceResourceTiming/connectEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), unmittelbar nachdem der Browser die Verbindung zum Server hergestellt hat, um die Ressource abzurufen.
- [`PerformanceResourceTiming.requestStart`](/de/docs/Web/API/PerformanceResourceTiming/requestStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource vom Server anzufordern.
- [`PerformanceResourceTiming.firstInterimResponseStart`](/de/docs/Web/API/PerformanceResourceTiming/firstInterimResponseStart) {{experimental_inline}} {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zwischenantwortzeit darstellt (zum Beispiel 100 Continue oder 103 Early Hints).
- [`PerformanceResourceTiming.responseStart`](/de/docs/Web/API/PerformanceResourceTiming/responseStart) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das erste Byte der Antwort vom Server erhält.
- [`PerformanceResourceTiming.responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar nachdem der Browser das letzte Byte der Ressource erhält oder unmittelbar bevor die Transportverbindung geschlossen wird, je nachdem, was zuerst eintritt.

### Zusätzliche Ressourceninformationen

Zusätzlich bietet dieses Interface die folgenden Eigenschaften an, die weitere Informationen über eine Ressource enthalten:

- [`PerformanceResourceTiming.contentType`](/de/docs/Web/API/PerformanceResourceTiming/contentType) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der eine minimierte und standardisierte Version des MIME-Typs der abgerufenen Ressource darstellt.
- [`PerformanceResourceTiming.decodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/decodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des empfangenen Nachrichtentextes vom Abruf (HTTP oder Cache) nach Entfernung jeglicher angewandter Inhaltskodierung darstellt.
- [`PerformanceResourceTiming.deliveryType`](/de/docs/Web/API/PerformanceResourceTiming/deliveryType) {{experimental_inline}} {{ReadOnlyInline}}
  - : Zeigt an, wie die Ressource geliefert wurde — beispielsweise aus dem Cache oder durch ein navigations-bezogenes Prefetch.
- [`PerformanceResourceTiming.encodedBodySize`](/de/docs/Web/API/PerformanceResourceTiming/encodedBodySize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) des empfangenen Nutzlastkörpers vor Entfernung jeglicher angewandter Inhaltskodierungen beim Abruf (HTTP oder Cache) darstellt.
- [`PerformanceResourceTiming.initiatorType`](/de/docs/Web/API/PerformanceResourceTiming/initiatorType) {{ReadOnlyInline}}
  - : Ein String, der die Web-Plattform-Funktion darstellt, die den Leistungs-Eintrag initiiert hat.
- [`PerformanceResourceTiming.nextHopProtocol`](/de/docs/Web/API/PerformanceResourceTiming/nextHopProtocol) {{ReadOnlyInline}}
  - : Ein String, der das Netzwerkprotokoll angibt, das verwendet wurde, um die Ressource abzurufen, wie durch die [ALPN-Protokoll-ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) identifiziert.
- [`PerformanceResourceTiming.renderBlockingStatus`](/de/docs/Web/API/PerformanceResourceTiming/renderBlockingStatus) {{ReadOnlyInline}}
  - : Ein String, der den Render-Blocking-Status darstellt. Entweder `"blocking"` oder `"non-blocking"`.
- [`PerformanceResourceTiming.responseStatus`](/de/docs/Web/API/PerformanceResourceTiming/responseStatus) {{ReadOnlyInline}}
  - : Eine Zahl, die den HTTP-Antwortstatuscode darstellt, der beim Abrufen der Ressource zurückgegeben wurde.
- [`PerformanceResourceTiming.transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize) {{ReadOnlyInline}}
  - : Eine Zahl, die die Größe (in Oktetten) der abgerufenen Ressource darstellt. Die Größe beinhaltet die Headerfelder der Antwort sowie den Nutzlastkörper der Antwort.
- [`PerformanceResourceTiming.serverTiming`](/de/docs/Web/API/PerformanceResourceTiming/serverTiming) {{ReadOnlyInline}}
  - : Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen, die Server-Timing-Metriken enthalten.

## Instanz-Methoden

- [`PerformanceResourceTiming.toJSON()`](/de/docs/Web/API/PerformanceResourceTiming/toJSON)
  - : Gibt eine JSON-Darstellung des `PerformanceResourceTiming`-Objekts zurück.

## Beispiele

### Protokollierung von Ressourcentiming-Informationen

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge informiert, sobald sie in der Leistungstimeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge aus der Zeit vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## Sicherheitsanforderungen

### Cross-Origin-Timing-Informationen

Viele der Ressourcen-Timing-Eigenschaften sind darauf beschränkt, `0` oder einen leeren String zurückzugeben, wenn die Ressource eine Cross-Origin-Anforderung ist. Um Cross-Origin-Timing-Informationen offenzulegen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` das Einsehen von Ressourcentiming-Informationen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ressourcentiming (Übersicht)](/de/docs/Web/API/Performance_API/Resource_timing)

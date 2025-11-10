---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: e25bb407abfff31b10c1e20c077c96da647b663d
---

{{APIRef("WebRTC")}}

Das **`RTCStatsReport`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) bereit.

Eine Instanz von `RTCStatsReport` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel ein Bezeichner für ein Objekt ist, für das Statistiken gemeldet werden, und der entsprechende Wert ein Wörterbuchobjekt ist, das die Statistiken bereitstellt.

## Instanzeigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Elemente im `RTCStatsReport`-Objekt zurück.

## Instanzmethoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array aus `[id, statistik-wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes im `RTCStatsReport`-Objekt vorhandene Schlüssel-Wert-Paar in Einfügereihenfolge auf.
    Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jeden Rückruf verwendet.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das Statistik-Wörterbuch zurück, das mit der übergebenen `id` verknüpft ist, oder `undefined`, wenn keines vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `RTCStatsReport` ein mit der angegebenen `id` verknüpftes Statistik-Wörterbuch enthält.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistikobjek) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array aus `[id, statistik-wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.

## Beschreibung

Ein {{jsxref("Promise")}}, das sich zu einem `RTCStatsReport` auflöst, wird von den Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben.
Ein Aufruf von `getStats()` auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ermöglicht Ihnen anzugeben, ob Sie ausgehende Statistiken, eingehende Statistiken oder Statistiken für die gesamte Verbindung erhalten möchten.
Die `getStats()`-Versionen von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben nur jeweils eingehende bzw. ausgehende Statistiken zurück.

Der Statistikbericht ist ein schreibgeschütztes [Map-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Wörterbuch, bei dem die Eigenschaften `id`-Strings sind, die eindeutig das WebRTC-Objekt identifizieren, das überprüft wurde, um einen bestimmten Satz von Statistiken zu erzeugen, und der Wert ein Wörterbuchobjekt ist, das diese Statistiken enthält.
Ein `RTCStatsReport` kann iteriert und auf dieselbe Weise wie eine schreibgeschützte `Map` verwendet werden.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, einschließlich eingehender und ausgehender Statistiken sowohl für die aktuelle als auch für die entfernte Seite der Peer-Verbindung, Informationen über verwendete Codecs, Zertifikate und Medien, und so weiter.
Jede Statistik-Kategorie wird in einem anderen Typ von Statistik-Wörterbuchobjekt bereitgestellt, das an seiner [`type`](#type)-Eigenschaft erkannt werden kann.

### Allgemeine Instanzeigenschaften

Alle Wörterbuchtypen haben die folgenden Eigenschaften:

- `id`
  - : Ein String, der das Objekt eindeutig identifiziert, das zur Erstellung des Satzes von Statistiken überwacht wurde.
    Dieser Wert bleibt für (mindestens) die Lebensdauer der Verbindung über Berichte hinweg bestehen.
    Beachten Sie jedoch, dass bei einigen Statistiken die ID zwischen Browsern und für nachfolgende Verbindungen, selbst zu demselben Peer, variieren kann.
- `timestamp`
  - : Ein hochauflösendes Zeitstempelobjekt ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), das den Zeitpunkt angibt, zu dem die Probe genommen wurde.
    Viele gemeldete Statistiken sind kumulative Werte; der Zeitstempel ermöglicht es, Raten und Durchschnitte zwischen zwei Berichten bei jeder gewünschten Berichterstellungsrate zu berechnen.
- `type`
  - : Ein String mit einem Wert, der den Typ der Statistiken angibt, die das Objekt enthält, wie z.B. `candidate-pair`, `inbound-rtp`, `certificate`, und so weiter.
    Die [Statistiktypen und deren entsprechende Objekte](#die_statistiktypen) sind unten aufgeführt.

Benutzer iterieren typischerweise ein `RTCStatsReport`, indem sie eine [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach) oder eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden und die interessierenden Statistiken anhand der `type`-Eigenschaft auswählen.
Sobald ein bestimmtes Statistikobjekt anhand seines `type` identifiziert wurde, kann die `id`-Eigenschaft anschließend mit [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwendet werden, um denselben Statistikbericht zu einem anderen Zeitpunkt zu erhalten.

Der Zeitstempel kann verwendet werden, um Durchschnittswerte für Statistiken zu berechnen, die sich über die Lebensdauer einer Verbindung ansammeln.

### Die Statistiktypen

Die Statistik-`type`-Werte und ihre entsprechenden Wörterbücher sind unten aufgeführt.

| Typ                   | Wörterbuch                                                                                                                       | Beschreibung                                                                                                                                                                                                                                                                       |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                                          | Statistiken, die die Änderung von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, wie beispielsweise während eines [ICE-Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                                            |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                                                    | Statistiken über ein Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                                                               |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                                                                | Statistiken über einen bestimmten Codec, der von über diese Verbindung gesendeten oder empfangenen Streams verwendet wird.                                                                                                                                                         |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                                                    | Statistiken in Bezug auf einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) in der Verbindung.                                                                                                                                                                              |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                                          | Statistiken, die den Zustand eines der eingehenden Datenströme der Verbindung beschreiben.                                                                                                                                                                                         |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken über einen lokalen ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung verknüpft ist.                                                                                                                                    |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken über das von dem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) produzierte Medium, das an einen RTP-Sender angehängt ist. Das Wörterbuch, dem dieser Schlüssel zugeordnet ist, hängt von der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                                        | Statistiken, die den Zustand eines der ausgehenden Datenströme auf dieser Verbindung beschreiben.                                                                                                                                                                                  |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                                              | Statistiken, die den Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreiben.                                                                                                                                                                            |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken über einen entfernten ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung verknüpft ist.                                                                                                                                 |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                                              | Statistiken, die den Zustand des eingehenden Datenstroms aus der Perspektive des entfernten Peers beschreiben.                                                                                                                                                                     |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                                            | Statistiken, die den Zustand des ausgehenden Datenstroms aus der Perspektive des entfernten Peers beschreiben.                                                                                                                                                                     |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                                                        | Statistiken über ein Transportmittel, das von der Verbindung verwendet wird.                                                                                                                                                                                                       |

## Beispiele

### Bericht von einer RTCPeerConnection mit einer forEach-Schleife iterieren

Dieses Beispiel zeigt, wie Sie videobezogene Statistiken für das lokale [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), das für den Empfang von gestreamten Medien verantwortlich ist, protokollieren können.

Angenommen, eine Variable `myPeerConnection` ist eine Instanz von `RTCPeerConnection`, verwendet der Code `await`, um auf den Statistikbericht zu warten, und iteriert dann mit [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Anschließend werden die Wörterbücher nur für die Berichte gefiltert, die den `type` von `inbound-rtp` und `kind` von `video` haben.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

### Bericht von einem RTCRtpSender mit einer for...of-Schleife iterieren

Dieses Beispiel zeigt, wie Sie die ausgehenden Statistiken von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) iterieren können.

Der Code folgt einem ähnlichen Muster wie das vorherige Beispiel, jedoch wird er mit einer `for...of`-Schleife auf den [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) iteriert und auf den `type` von `outbound-rtp` gefiltert.
Es wird davon ausgegangen, dass Sie bereits ein `RTCRtpSender`-Objekt namens "sender" haben.

```js
const stats = await sender.getStats();

for (const stat of stats.values()) {
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${stat[statName]}`);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats), [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) und [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)

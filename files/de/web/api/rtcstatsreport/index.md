---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{APIRef("WebRTC")}}

Das **`RTCStatsReport`**-Interface der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Eine Instanz von `RTCStatsReport` ist ein schreibgeschütztes, [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel ein Identifikator für ein Objekt ist, für welches Statistiken gemeldet werden, und der entsprechende Wert ist ein Wörterbuchobjekt, das die Statistiken bereitstellt.

## Instanz-Eigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Elemente im `RTCStatsReport`-Objekt zurück.

## Instanz-Methoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistic-dictionary]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `RTCStatsReport`-Objekt in Einfügereihenfolge auf. Wenn ein `thisArg`-Parameter für `forEach` bereitgestellt wird, wird dieser als `this`-Wert für jeden Rückruf verwendet.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das Statistikwörterbuch zurück, das mit der übergebenen `id` verknüpft ist, oder `undefined`, wenn keines vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `RTCStatsReport` ein mit der angegebenen `id` verknüpftes Statistikwörterbuch enthält.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistikobjekte) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistic-dictionary]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.

## Beschreibung

Ein {{jsxref("Promise")}}, das zu einem `RTCStatsReport` aufgelöst wird, wird von den Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben.
Ein Aufruf von `getStats()` auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ermöglicht es Ihnen zu wählen, ob Sie ausgehende Statistiken, eingehende Statistiken oder Statistiken für die gesamte Verbindung erhalten möchten.
Die Versionen `getStats()` des [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben nur eingehende bzw. ausgehende Statistiken zurück.

Der Statistikbericht ist ein schreibgeschütztes [Map-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Wörterbuch, in dem die Eigenschaften `id`-Strings sind, die das WebRTC-Objekt eindeutig identifizieren, das untersucht wurde, um einen bestimmten Satz von Statistiken zu erzeugen, und der Wert ein Wörterbuchobjekt ist, das diese Statistiken enthält.
Ein `RTCStatsReport` kann durchlaufen und ähnlich wie eine schreibgeschützte `Map` verwendet werden.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, darunter eingehende und ausgehende Statistiken für sowohl das aktuelle als auch das entfernte Ende der Peerverbindung, Informationen zu Codecs, Zertifikaten und verwendeten Medien usw.
Jede Statistik-Kategorie wird in einem anderen Typ von Statistik-Wörterbuchobjekt bereitgestellt, das an seiner [`type`](#type)-Eigenschaft erkannt werden kann.

### Gemeinsame Instanz-Eigenschaften

Alle Wörterbuchtypen haben die folgenden Eigenschaften:

- `id`
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wurde, um den Statistiksatz zu erzeugen. Dieser Wert bleibt während der gesamten Verbindung (mindestens) über Berichte hinweg bestehen. Beachten Sie jedoch, dass für einige Statistiken die ID zwischen Browsern und für nachfolgende Verbindungen, selbst mit dem gleichen Peer, variieren kann.
- `timestamp`
  - : Ein hochauflösendes Zeitstempelobjekt ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), das die Zeit angibt, zu der die Probe entnommen wurde. Viele gemeldete Statistiken sind kumulative Werte; der Zeitstempel erlaubt es, Raten und Durchschnittswerte zwischen beliebigen zwei Berichten bei beliebiger Berichtsrate zu berechnen.
- `type`
  - : Ein String mit einem Wert, der den Typ der Statistiken angibt, die das Objekt enthält, wie `candidate-pair`, `inbound-rtp`, `certificate` usw. Die [Statistiktypen und ihre entsprechenden Objekte](#die_statistiktypen) sind unten aufgeführt.

Benutzer iterieren typischerweise über ein `RTCStatsReport`, indem sie eine [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)- oder [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden und die interessierenden Statistiken mit der `type`-Eigenschaft auswählen.
Sobald ein bestimmtes Statistikobjekt anhand seines `type` identifiziert wurde, kann die `id`-Eigenschaft anschließend mit [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwendet werden, um denselben Statistikbericht zu einem anderen Zeitpunkt zu erhalten.

Der Zeitstempel kann verwendet werden, um Durchschnittswerte für Statistiken zu berechnen, die sich über die Lebensdauer einer Verbindung ansammeln.

### Die Statistiktypen

Die `type`-Werte der Statistik und ihre entsprechenden Wörterbücher sind unten aufgeführt.

| type                  | Dictionary                                                                                                                       | Beschreibung                                                                                                                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                                          | Statistiken, die den Wechsel von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, beispielsweise während eines [ICE-Restarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                                                           |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                                                    | Statistiken über ein Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                                                                        |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                                                                | Statistiken über einen bestimmten Codec, der von Streams verwendet wird, die von dieser Verbindung gesendet oder empfangen werden.                                                                                                                                                          |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                                                    | Statistiken in Bezug auf einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) auf der Verbindung.                                                                                                                                                                                      |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                                          | Statistiken, die den Zustand eines der eingehenden Datenströme der Verbindung beschreiben.                                                                                                                                                                                                  |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken über einen lokalen ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung verknüpft ist.                                                                                                                                             |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken über die Medien, die von einem [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) produziert werden, der an einen RTP-Sender angehängt ist. Das Wörterbuch, auf das dieser Schlüssel verweist, hängt von der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) der Spur ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                                        | Statistiken, die den Zustand eines der ausgehenden Datenströme auf dieser Verbindung beschreiben.                                                                                                                                                                                           |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                                              | Statistiken, die den Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreiben.                                                                                                                                                                                     |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken über einen entfernten ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung verknüpft ist.                                                                                                                                          |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                                              | Statistiken, die den Zustand des eingehenden Datenstroms aus Sicht des entfernten Peers beschreiben.                                                                                                                                                                                        |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                                            | Statistiken, die den Zustand des ausgehenden Datenstroms aus Sicht des entfernten Peers beschreiben.                                                                                                                                                                                        |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                                                        | Statistiken über ein Transportmittel, das von der Verbindung verwendet wird.                                                                                                                                                                                                                |

## Beispiele

### Schleifen Sie über einen Bericht von einer RTCPeerConnection mit forEach-Schleife

Dieses Beispiel zeigt, wie Sie video-bezogene Statistiken für den lokalen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) protokollieren können, der für den Empfang von gestreamten Medien verantwortlich ist.

Bei einer Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, verwendet der Code `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Der Code filtert dann die Wörterbücher für Berichte, die den `type` von `inbound-rtp` und `kind` von `video` haben.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

### Schleifen Sie über einen Bericht von einem RTCRtpSender mit einer for...of-Schleife

Dieses Beispiel zeigt, wie Sie die ausgehenden Statistiken von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durchlaufen können.

Der Code folgt einem ähnlichen Muster wie im vorherigen Beispiel, iteriert jedoch mit einer `for...of`-Schleife über die [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) und filtert auf den `type` von `outbound-rtp`.
Es wird angenommen, dass Sie bereits ein `RTCRtpSender`-Objekt namens "sender" haben.

```js
const stats = await sender.getStats();

for (const stat of stats.values()) {
  if (stat.type !== "outbound-rtp") continue;
  Object.keys(stat).forEach((statName) => {
    console.log(`${statName}: ${report[statName]}`);
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
- [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats), [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), und [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats)

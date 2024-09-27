---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`RTCStatsReport`** Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Eine `RTCStatsReport`-Instanz ist ein schreibgeschütztes, [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel ein Identifikator für ein Objekt ist, für das Statistiken berichtet werden, und der entsprechende Wert ein Wörterbuchobjekt ist, das die Statistiken bereitstellt.

## Instanz-Eigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Elemente im `RTCStatsReport`-Objekt zurück.

## Instanz-Methoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistik-wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes im `RTCStatsReport`-Objekt vorhandene Schlüssel-Wert-Paar in Einfügereihenfolge auf.
    Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jede Rückruffunktion verwendet.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das Statistik-Wörterbuch zurück, das mit der übergebenen `id` assoziiert ist, oder `undefined`, wenn keine vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen Boolean zurück, der angibt, ob das `RTCStatsReport` ein Statistik-Wörterbuch enthält, das mit der angegebenen `id` assoziiert ist.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistik-Objekte) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistik-wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.

## Beschreibung

Ein {{jsxref("Promise")}}, das zu einem `RTCStatsReport` aufgelöst wird, wird von den Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben.
Das Aufrufen von `getStats()` auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) lässt Sie festlegen, ob Sie ausgehende Statistiken, eingehende Statistiken oder Statistiken für die gesamte Verbindung erhalten möchten.
Die Versionen von `getStats()` für den [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben nur eingehende bzw. ausgehende Statistiken zurück.

Der Statistikbericht ist ein schreibgeschütztes, [`Map`-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Wörterbuch, bei dem die Eigenschaften `id`-Strings sind, die das WebRTC-Objekt eindeutig identifizieren, das untersucht wurde, um einen bestimmten Satz von Statistiken zu erstellen, und der Wert ein Wörterbuchobjekt ist, das diese Statistiken enthält.
Ein `RTCStatsReport` kann durchlaufen und auf die gleiche Weise wie eine schreibgeschützte `Map` verwendet werden.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, einschließlich eingehender und ausgehender Statistiken sowohl für das aktuelle als auch das entfernte Ende der Peer-Verbindung, Informationen über verwendete Codecs, Zertifikate und Medien usw.
Jede Kategorie von Statistiken wird in einem anderen Typ von Statistik-Wörterbuch-Objekt bereitgestellt, das anhand seiner [`type`](#type)-Eigenschaft identifiziert werden kann.

### Gemeinsame Instanzeigenschaften

Alle Wörterbuchtypen haben die folgenden Eigenschaften:

- `id`
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wurde, um den Satz von Statistiken zu erstellen.
    Dieser Wert bleibt über Berichte hinweg (zumindest) für die Dauer der Verbindung bestehen.
    Beachten Sie jedoch, dass sich die ID bei einigen Statistiken zwischen Browsern und für nachfolgende Verbindungen, sogar zu demselben Peer, ändern kann.
- `timestamp`
  - : Ein hochauflösendes Zeitstempelobjekt ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), das die Zeit angibt, zu der die Probe entnommen wurde.
    Viele gemeldete Statistiken sind kumulative Werte; der Zeitstempel ermöglicht es, zwischen beliebigen zwei Berichten die Raten und Durchschnittswerte zu berechnen, bei jeder gewünschten Berichtsrate.
- `type`
  - : Ein String mit einem Wert, der den Typ der Statistiken angibt, die das Objekt enthält, wie `candidate-pair`, `inbound-rtp`, `certificate` und so weiter.
    Die [Typen von Statistiken und ihre entsprechenden Objekte](#die_statistiktypen) sind unten aufgeführt.

Benutzer durchlaufen typischerweise ein `RTCStatsReport`, indem sie eine [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach) oder eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden und die interessierenden Statistiken mit der `type`-Eigenschaft auswählen.
Sobald ein bestimmtes Statistikobjekt mit seinem `type` identifiziert wurde, kann die `id`-Eigenschaft anschließend mit [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwendet werden, um denselben Statistikbericht zu einem anderen Zeitpunkt zu erhalten.

Der Zeitstempel kann verwendet werden, um Durchschnittswerte für Statistiken zu berechnen, die sich über die Lebensdauer einer Verbindung summieren.

### Die Statistiktypen

Die `type`-Werte der Statistiken und ihre entsprechenden Wörterbücher sind unten aufgelistet.

| type                  | Wörterbuch                                                                                                                       | Beschreibung                                                                                                                                                                                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                                          | Statistiken, die die Änderung von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, beispielsweise während eines [ICE-Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                                          |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                                                    | Statistiken über ein Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                                                         |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                                                                | Statistiken über einen bestimmten Codec, der von Stream verwendet wird, die von dieser Verbindung gesendet oder empfangen werden.                                                                                                                                            |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                                                    | Statistiken zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) auf der Verbindung.                                                                                                                                                                                 |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                                          | Statistiken, die den Zustand eines der eingehenden Datenströme der Verbindung beschreiben.                                                                                                                                                                                   |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem lokalen ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung assoziiert ist.                                                                                                                               |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken über die von der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erzeugten Medien, die einem RTP-Sender angehängt sind. Das Wörterbuch, auf das dieser Schlüssel verweist, hängt von der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                                        | Statistiken, die den Zustand eines der ausgehenden Datenströme dieser Verbindung beschreiben.                                                                                                                                                                                |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                                              | Statistiken über den Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).                                                                                                                                                                                  |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem entfernten ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)s der Verbindung assoziiert ist.                                                                                                                            |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                                              | Statistiken, die den Zustand des eingehenden Datenstroms aus der Perspektive des entfernten Peers beschreiben.                                                                                                                                                               |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                                            | Statistiken, die den Zustand des ausgehenden Datenstroms aus der Perspektive des entfernten Peers beschreiben.                                                                                                                                                               |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                                                        | Statistiken über ein von der Verbindung verwendetes Transportmedium.                                                                                                                                                                                                         |

## Beispiele

### Bericht von einer RTCPeerConnection unter Verwendung der forEach-Schleife durchlaufen

Dieses Beispiel zeigt, wie Sie video-bezogene Statistiken für den lokalen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) protokollieren könnten, der für den Empfang von gestreamten Medien verantwortlich ist.

Gegeben ist eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, verwendet der Code `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Anschließend filtert er die Wörterbücher nur für die Berichte, die den `type` von `inbound-rtp` und den `kind` von `video` haben.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

### Bericht von einem RTCRtpSender mit einer for...of Schleife durchlaufen

Dieses Beispiel zeigt, wie Sie die ausgehenden Statistiken von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durchlaufen könnten.

Der Code folgt einem ähnlichen Muster wie im vorherigen Beispiel, durchläuft jedoch mit einer `for...of`-Schleife über die [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) und filtert nach dem `type` von `outbound-rtp`.
Es wird davon ausgegangen, dass Sie bereits ein `RTCRtpSender`-Objekt mit dem Namen "sender" haben.

```js
const stats = await sender.getStats();

for (const stat of stats.values()) {
  if (stat.type != "outbound-rtp") continue;
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

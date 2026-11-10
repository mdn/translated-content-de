---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("WebRTC")}}

Die **`RTCStatsReport`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) bereit.

Eine `RTCStatsReport`-Instanz ist ein schreibgeschütztes, [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis). Jeder Schlüssel ist ein Bezeichner für ein Objekt, zu dem Statistiken erfasst werden. Der zugehörige Wert ist ein Dictionary-Objekt, das diese Statistiken enthält.

## Instanzeigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Einträge im `RTCStatsReport`-Objekt zurück.

### Gemeinsame Instanzeigenschaften

Alle Dictionary-Typen haben die folgenden Eigenschaften:

- `id`
  - : Ein String, der das Objekt eindeutig identifiziert, das zur Erstellung der Statistiken überwacht wurde.
    Dieser Wert bleibt über mehrere Berichte hinweg mindestens für die Lebensdauer der Verbindung bestehen.
    Beachten Sie jedoch, dass die ID bei manchen Statistiken je nach Browser und bei späteren Verbindungen variieren kann, selbst wenn die Verbindung zum selben Peer besteht.
- `timestamp`
  - : Ein hochauflösender Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der angibt, wann die Stichprobe erfasst wurde.
    Viele der gemeldeten Statistiken sind kumulative Werte. Anhand des Zeitstempels lassen sich Raten und Durchschnittswerte zwischen zwei beliebigen Berichten bei jeder gewünschten Berichtsfrequenz berechnen.
- `type`
  - : Ein String, dessen Wert angibt, welche Art von Statistiken das Objekt enthält, beispielsweise `candidate-pair`, `inbound-rtp` oder `certificate`.
    Die [Statistiktypen und die zugehörigen Objekte](#statistiktypen) sind unten aufgeführt.

Üblicherweise durchlaufen Sie einen `RTCStatsReport` mit [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach) oder einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und wählen die gewünschten Statistiken anhand der Eigenschaft `type` aus.
Nachdem Sie ein Statistikobjekt anhand seines `type` identifiziert haben, können Sie dessen Eigenschaft `id` bei einem späteren Aufruf von [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwenden, um den Bericht zur selben Statistik zu einem anderen Zeitpunkt abzurufen.

Anhand des Zeitstempels lassen sich Durchschnittswerte für Statistiken berechnen, die sich über die Lebensdauer einer Verbindung aufsummieren.

## Instanzmethoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das für jeden Eintrag im `RTCStatsReport`-Objekt ein Array mit zwei Elementen der Form `[id, statistic-dictionary]` enthält, und zwar in der Reihenfolge, in der die Einträge eingefügt wurden.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `RTCStatsReport`-Objekt auf, und zwar in der Reihenfolge, in der die Einträge eingefügt wurden.
    Wenn Sie `forEach` einen Parameter `thisArg` übergeben, wird dieser bei jedem Callback als `this`-Wert verwendet.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das der übergebenen `id` zugeordnete Statistik-Dictionary zurück oder `undefined`, wenn keines vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob `RTCStatsReport` ein Statistik-Dictionary enthält, das der angegebenen `id` zugeordnet ist.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) aller Einträge im `RTCStatsReport`-Objekt enthält, und zwar in der Reihenfolge, in der die Einträge eingefügt wurden.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistikobjekte) aller Einträge im `RTCStatsReport`-Objekt enthält, und zwar in der Reihenfolge, in der die Einträge eingefügt wurden.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das für jeden Eintrag im `RTCStatsReport`-Objekt ein Array mit zwei Elementen der Form `[id, statistic-dictionary]` enthält, und zwar in der Reihenfolge, in der die Einträge eingefügt wurden.

## Beschreibung

Die Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) geben ein {{jsxref("Promise")}} zurück, das mit einem `RTCStatsReport` erfüllt wird.
Beim Aufruf von `getStats()` für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) können Sie festlegen, ob Sie Statistiken zu ausgehenden Daten, eingehenden Daten oder zur gesamten Verbindung abrufen möchten.
Die `getStats()`-Varianten von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben dagegen nur Statistiken zu eingehenden beziehungsweise ausgehenden Daten zurück.

Der Statistikbericht ist ein schreibgeschütztes, [`Map`-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Dictionary, dessen Schlüssel `id`-Strings sind, die das WebRTC-Objekt eindeutig identifizieren, das für eine bestimmte Statistik untersucht wurde. Der jeweilige Wert ist ein Dictionary-Objekt mit diesen Statistiken.
Sie können einen `RTCStatsReport` auf dieselbe Weise wie eine schreibgeschützte `Map` durchlaufen und verwenden.

Der Bericht kann zahlreiche Kategorien von Statistiken enthalten, darunter Statistiken zu eingehenden und ausgehenden Daten sowohl für die lokale als auch für die entfernte Seite der Peer-Verbindung sowie Informationen zu verwendeten Codecs, Zertifikaten und Medien.
Jede Statistikkategorie wird durch einen eigenen Typ von Statistik-Dictionary-Objekt dargestellt, den Sie anhand seiner Eigenschaft [`type`](#type) identifizieren können.

### Statistiktypen

Die Werte von `type` und die zugehörigen Dictionary-Typen sind unten aufgeführt.

| type                  | Dictionary                                                                                                                       | Beschreibung                                                                                                                                                                                                                                                               |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                                          | Statistiken, die den Wechsel von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, beispielsweise bei einem [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                                              |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                                                    | Statistiken zu einem Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                                                       |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                                                                | Statistiken zu einem bestimmten Codec, der von über diese Verbindung gesendeten oder empfangenen Streams verwendet wird.                                                                                                                                                   |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                                                    | Statistiken zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung.                                                                                                                                                                                   |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                                          | Statistiken zum Zustand eines der eingehenden Datenstreams der Verbindung.                                                                                                                                                                                                 |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem lokalen ICE-Kandidaten, der einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) der Verbindung zugeordnet ist.                                                                                                                                |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken zu den Medien, die vom [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) eines RTP-Senders erzeugt werden. Welchem Dictionary dieser Schlüssel zugeordnet ist, hängt von der Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                                        | Statistiken zum Zustand eines der ausgehenden Datenstreams der Verbindung.                                                                                                                                                                                                 |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                                              | Statistiken zum Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).                                                                                                                                                                                     |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem entfernten ICE-Kandidaten, der einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) der Verbindung zugeordnet ist.                                                                                                                             |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                                              | Statistiken zum Zustand des eingehenden Datenstreams aus Sicht des entfernten Peers.                                                                                                                                                                                       |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                                            | Statistiken zum Zustand des ausgehenden Datenstreams aus Sicht des entfernten Peers.                                                                                                                                                                                       |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                                                        | Statistiken zu einem von der Verbindung verwendeten Transport.                                                                                                                                                                                                             |

## Beispiele

### Bericht einer RTCPeerConnection mit einer forEach-Schleife durchlaufen

Dieses Beispiel zeigt, wie Sie videobezogene Statistiken für den lokalen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) protokollieren können, der für den Empfang gestreamter Medien zuständig ist.

Die Variable `myPeerConnection` enthält eine Instanz von `RTCPeerConnection`. Der Code wartet mit `await` auf den Statistikbericht und durchläuft ihn anschließend mit [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Dabei berücksichtigt er nur Dictionary-Objekte, deren Berichte den `type`-Wert `inbound-rtp` und den `kind`-Wert `video` haben.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Log the frame rate
    console.log(report.framesPerSecond);
  }
});
```

### Bericht eines RTCRtpSender mit einer for...of-Schleife durchlaufen

Dieses Beispiel zeigt, wie Sie die Statistiken zu ausgehenden Daten eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durchlaufen können.

Der Code folgt einem ähnlichen Muster wie im vorherigen Beispiel, verwendet jedoch eine `for...of`-Schleife über [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) und berücksichtigt nur Einträge mit dem `type`-Wert `outbound-rtp`.
Dabei wird vorausgesetzt, dass bereits ein `RTCRtpSender`-Objekt namens „sender“ vorhanden ist.

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

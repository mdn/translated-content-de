---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

{{APIRef("WebRTC")}}

Die Schnittstelle **`RTCStatsReport`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), einen [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) bereit.

Eine `RTCStatsReport`-Instanz ist ein schreibgeschütztes [`Map`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis). Jeder Schlüssel ist ein Bezeichner für ein Objekt, über das Statistiken erfasst werden. Der zugehörige Wert ist ein Dictionary-Objekt mit diesen Statistiken.

## Instanzeigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Einträge im `RTCStatsReport`-Objekt zurück.

## Instanzmethoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das für jedes Element im `RTCStatsReport`-Objekt ein Array mit zwei Einträgen der Form `[id, statistic-dictionary]` enthält, in der Reihenfolge des Einfügens.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `RTCStatsReport`-Objekt auf, in der Reihenfolge des Einfügens.
    Wenn für `forEach` ein `thisArg`-Parameter angegeben wird, dient er bei jedem Callback als `this`-Wert.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das der übergebenen `id` zugeordnete Statistik-Dictionary zurück oder `undefined`, wenn keines vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `RTCStatsReport`-Objekt ein der angegebenen `id` zugeordnetes Statistik-Dictionary enthält.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt enthält, in der Reihenfolge des Einfügens.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistikobjekte) für jedes Element im `RTCStatsReport`-Objekt enthält, in der Reihenfolge des Einfügens.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das für jedes Element im `RTCStatsReport`-Objekt ein Array mit zwei Einträgen der Form `[id, statistic-dictionary]` enthält, in der Reihenfolge des Einfügens.

## Beschreibung

Die Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) geben jeweils eine {{jsxref("Promise")}} zurück, die mit einem `RTCStatsReport` erfüllt wird.
Beim Aufruf von `getStats()` auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) können Sie angeben, ob Sie Statistiken für ausgehende Daten, eingehende Daten oder die gesamte Verbindung erhalten möchten.
Die Varianten von `getStats()` für [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben dagegen nur Statistiken für eingehende beziehungsweise ausgehende Daten zurück.

Der Statistikbericht ist ein schreibgeschütztes [`Map`-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Dictionary, dessen Schlüssel `id`-Zeichenfolgen sind, die das WebRTC-Objekt eindeutig identifizieren, das zur Erstellung einer bestimmten Statistik untersucht wurde. Der zugehörige Wert ist ein Dictionary-Objekt mit diesen Statistiken.
Ein `RTCStatsReport` kann durchlaufen und wie eine schreibgeschützte `Map` verwendet werden.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, darunter Statistiken für eingehende und ausgehende Daten sowohl des lokalen als auch des entfernten Endpunkts der Peer-Verbindung sowie Informationen über verwendete Codecs, Zertifikate und Medien.
Jede Statistikkategorie wird durch einen anderen Typ von Statistik-Dictionary-Objekt bereitgestellt, der anhand seiner Eigenschaft [`type`](#type) identifiziert werden kann.

### Gemeinsame Instanzeigenschaften

Alle Dictionary-Typen haben die folgenden Eigenschaften:

- `id`
  - : Eine Zeichenfolge, die das Objekt eindeutig identifiziert, das zur Erstellung der Statistiken überwacht wurde.
    Dieser Wert bleibt über mehrere Berichte hinweg mindestens für die Lebensdauer der Verbindung erhalten.
    Beachten Sie jedoch, dass die ID bei manchen Statistiken je nach Browser und bei späteren Verbindungen variieren kann, selbst wenn diese zum selben Peer führen.
- `timestamp`
  - : Ein hochauflösender Zeitstempel ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), der angibt, wann die Messung erfolgte.
    Viele der gemeldeten Statistiken sind kumulative Werte. Mithilfe des Zeitstempels lassen sich Raten und Durchschnittswerte zwischen zwei beliebigen Berichten berechnen, unabhängig davon, in welchen Abständen die Berichte erstellt werden.
- `type`
  - : Eine Zeichenfolge, deren Wert den Typ der im Objekt enthaltenen Statistiken angibt, beispielsweise `candidate-pair`, `inbound-rtp` oder `certificate`.
    Die [Statistiktypen und die zugehörigen Objekte](#die_statistiktypen) sind unten aufgeführt.

Üblicherweise durchlaufen Sie einen `RTCStatsReport` mit [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach) oder einer [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife und wählen mithilfe der Eigenschaft `type` die gewünschten Statistiken aus.
Nachdem ein bestimmtes Statistikobjekt anhand seines `type` identifiziert wurde, können Sie seine Eigenschaft `id` bei einem späteren Aufruf von [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwenden, um die entsprechende Statistik zu einem anderen Zeitpunkt abzurufen.

Mithilfe des Zeitstempels lassen sich Durchschnittswerte für Statistiken berechnen, deren Werte sich über die Lebensdauer einer Verbindung aufsummieren.

### Die Statistiktypen

Die Werte von `type` und die zugehörigen Dictionaries sind nachstehend aufgeführt.

| type                  | Dictionary                                                                                                                       | Beschreibung                                                                                                                                                                                                                                                                                |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                                          | Statistiken, die den Wechsel von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, beispielsweise bei einem [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                                                               |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                                                    | Statistiken zu einem Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                                                                        |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                                                                | Statistiken zu einem bestimmten Codec, den über diese Verbindung gesendete oder empfangene Streams verwenden.                                                                                                                                                                               |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                                                    | Statistiken zu einem [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung.                                                                                                                                                                                                    |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                                          | Statistiken, die den Zustand eines eingehenden Datenstreams der Verbindung beschreiben.                                                                                                                                                                                                     |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem lokalen ICE-Kandidaten, der einem der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekte der Verbindung zugeordnet ist.                                                                                                                                     |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken zu den Medien, die von dem an einen RTP-Sender gebundenen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erzeugt werden. Welchem Dictionary dieser Schlüssel zugeordnet ist, hängt von der Eigenschaft [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) des Tracks ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                                        | Statistiken, die den Zustand eines ausgehenden Datenstreams der Verbindung beschreiben.                                                                                                                                                                                                     |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                                              | Statistiken, die den Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreiben.                                                                                                                                                                                     |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                                                  | Statistiken zu einem entfernten ICE-Kandidaten, der einem der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Objekte der Verbindung zugeordnet ist.                                                                                                                                  |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                                              | Statistiken, die den Zustand des eingehenden Datenstreams aus Sicht des entfernten Peers beschreiben.                                                                                                                                                                                       |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                                            | Statistiken, die den Zustand des ausgehenden Datenstreams aus Sicht des entfernten Peers beschreiben.                                                                                                                                                                                       |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                                                        | Statistiken zu einem von der Verbindung verwendeten Transport.                                                                                                                                                                                                                              |

## Beispiele

### Bericht einer RTCPeerConnection mit forEach durchlaufen

Dieses Beispiel zeigt, wie Sie videobezogene Statistiken für den lokalen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) protokollieren können, der für den Empfang gestreamter Medien zuständig ist.

Gegeben ist die Variable `myPeerConnection`, eine Instanz von `RTCPeerConnection`. Der Code wartet mit `await` auf den Statistikbericht und durchläuft ihn anschließend mit [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Dabei filtert er die Dictionaries nach Berichten mit `type` gleich `inbound-rtp` und `kind` gleich `video`.

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

Dieses Beispiel zeigt, wie Sie die Statistiken für ausgehende Daten eines [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durchlaufen können.

Der Code folgt einem ähnlichen Muster wie im vorherigen Beispiel, verwendet jedoch eine `for...of`-Schleife über [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) und filtert nach `type` gleich `outbound-rtp`.
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

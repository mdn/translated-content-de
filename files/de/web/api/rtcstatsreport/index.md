---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`RTCStatsReport`**-Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet einen Statistikbericht für eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) oder [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver).

Eine `RTCStatsReport`-Instanz ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), in dem jeder Schlüssel ein Identifikator für ein Objekt ist, für das Statistiken erstellt werden, und der entsprechende Wert ein Wörterbuchobjekt ist, das die Statistiken bereitstellt.

## Instanz-Eigenschaften

- [`RTCStatsReport.size`](/de/docs/Web/API/RTCStatsReport/size)
  - : Gibt die Anzahl der Elemente im `RTCStatsReport`-Objekt zurück.

## Instanz-Methoden

- [`RTCStatsReport.entries()`](/de/docs/Web/API/RTCStatsReport/entries)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistic-dictionary]` für jedes Element im `RTCStatsReport`-Objekt in Einfügungsreihenfolge enthält.
- [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)
  - : Ruft `callbackFn` einmal für jedes im `RTCStatsReport`-Objekt vorhandene Schlüssel-Wert-Paar in Einfügungsreihenfolge auf. 
    Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jeden Rückruf verwendet.
- [`RTCStatsReport.get()`](/de/docs/Web/API/RTCStatsReport/get)
  - : Gibt das Statistik-Wörterbuch zurück, das mit der übergebenen `id` verknüpft ist, oder `undefined`, wenn keine vorhanden ist.
- [`RTCStatsReport.has()`](/de/docs/Web/API/RTCStatsReport/has)
  - : Gibt einen booleschen Wert zurück, der angibt, ob das `RTCStatsReport` ein Statistik-Wörterbuch enthält, das mit der angegebenen `id` verknüpft ist.
- [`RTCStatsReport.keys()`](/de/docs/Web/API/RTCStatsReport/keys)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt in Einfügungsreihenfolge enthält.
- [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistik-Objekte) für jedes Element im `RTCStatsReport`-Objekt in Einfügungsreihenfolge enthält.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, statistic-dictionary]` für jedes Element im `RTCStatsReport`-Objekt in Einfügungsreihenfolge enthält.

## Beschreibung

Ein {{jsxref("Promise")}}, der sich in ein `RTCStatsReport` auflöst, wird von den Methoden [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats), [`RTCRtpSender.getStats()`](/de/docs/Web/API/RTCRtpSender/getStats) und [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben.
Das Aufrufen von `getStats()` bei einem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ermöglicht es Ihnen, anzugeben, ob Sie ausgehende Statistiken, eingehende Statistiken oder Statistiken für die gesamte Verbindung erhalten möchten.
Die Versionen `getStats()` von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) und [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) geben jeweils nur eingehende bzw. ausgehende Statistiken zurück.

Der Statistikbericht ist ein schreibgeschütztes [Map-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Wörterbuch, bei dem die Eigenschaften `id`-Strings sind, die das WebRTC-Objekt eindeutig identifizieren, das zur Erstellung eines bestimmten Satzes von Statistiken überprüft wurde, und der Wert ein Wörterbuchobjekt ist, das diese Statistiken enthält.
Ein `RTCStatsReport` kann wie ein schreibgeschütztes `Map` durchlaufen und verwendet werden.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, einschließlich ein- und ausgehender Statistiken sowohl für die aktuellen als auch für die Remote-Enden der Peer-Verbindung, Informationen über Codecs, Zertifikate und verwendete Medien und so weiter.
Jede Kategorie von Statistiken wird in einem anderen Typ von Statistik-Wörterbuchobjekt bereitgestellt, das anhand seiner [`type`](#type)-Eigenschaft identifiziert werden kann.

### Allgemeine Instanz-Eigenschaften

Alle Wörterbuchtypen haben die folgenden Eigenschaften:

- `id`
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wurde, um den Satz von Statistiken zu erstellen.
    Dieser Wert bleibt über Berichte hinweg für (mindestens) die Lebensdauer der Verbindung bestehen.
    Beachten Sie jedoch, dass sich die ID für einige Statistiken zwischen Browsern und für nachfolgende Verbindungen, selbst zum gleichen Peer, ändern kann.
- `timestamp`
  - : Ein hochauflösendes Zeitstempelobjekt ([`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)), das Zeit angibt, zu der die Probe entnommen wurde.
    Viele gemeldete Statistiken sind kumulative Werte; der Zeitstempel ermöglicht es, Raten und Durchschnitte zwischen beliebigen zwei Berichten mit jeder gewünschten Berichtsrate zu berechnen.
- `type`
  - : Ein String mit einem Wert, der den Typ der Statistiken angibt, die das Objekt enthält, wie `candidate-pair`, `inbound-rtp`, `certificate` und so weiter.
    Die [Statistik-Typen und deren zugehörige Objekte](#die_statistik-typen) sind unten aufgelistet.

Benutzer iterieren typischerweise ein `RTCStatsReport`, indem sie eine [`forEach()`](/de/docs/Web/API/RTCStatsReport/forEach)- oder [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of)-Schleife verwenden und die interessierenden Statistiken mit der `type`-Eigenschaft auswählen.
Sobald ein bestimmtes Statistikobjekt mit seinem `type` identifiziert wurde, kann die `id`-Eigenschaft anschließend mit [`get()`](/de/docs/Web/API/RTCStatsReport/get) verwendet werden, um denselben Statistikbericht zu einem anderen Zeitpunkt zu erhalten.

Der Zeitstempel kann verwendet werden, um Durchschnittswerte für Statistiken zu berechnen, die sich über die Lebensdauer einer Verbindung ansammeln.

### Die Statistik-Typen

Die Statistik-`type`-Werte und deren entsprechende Wörterbücher sind unten aufgeführt.

| type                  | Dictionary                                                               | Beschreibung                                                                                                                                                                                                |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | [`RTCIceCandidatePairStats`](/de/docs/Web/API/RTCIceCandidatePairStats)                                  | Statistiken, die den Wechsel von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) zu einem anderen beschreiben, wie z.B. während eines [ICE Neustarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).                         |
| `certificate`         | [`RTCCertificateStats`](/de/docs/Web/API/RTCCertificateStats)                                       | Statistiken über ein Zertifikat, das von einem [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) verwendet wird.                                                                                                                            |
| `codec`               | [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)                                             | Statistiken über einen spezifischen Codec, der von den von dieser Verbindung gesendeten oder empfangenen Streams verwendet wird.                                                                                                         |
| `data-channel`        | [`RTCDataChannelStats`](/de/docs/Web/API/RTCDataChannelStats)                                       | Statistiken, die sich auf einen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) in der Verbindung beziehen.                                                                                                                                 |
| `inbound-rtp`         | [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)                                  | Statistiken, die den Zustand eines der eingehenden Datenströme der Verbindung beschreiben.                                                                                                                           |
| `local-candidate`     | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                      | Statistiken über einen lokalen ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) der Verbindung verbunden ist.                                                                                                   |
| `media-source`        | [`RTCAudioSourceStats`](/de/docs/Web/API/RTCAudioSourceStats) oder [`RTCVideoSourceStats`](/de/docs/Web/API/RTCVideoSourceStats) | Statistiken über die Medien, die von der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) erzeugt werden, die an einen RTP-Sender angehängt ist. Das Wörterbuch, dem dieser Schlüssel zugeordnet ist, hängt von der [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) der Spur ab. |
| `outbound-rtp`        | [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)                                 | Statistiken, die den Zustand eines der ausgehenden Datenströme auf dieser Verbindung beschreiben.                                                                                                                    |
| `peer-connection`     | [`RTCPeerConnectionStats`](/de/docs/Web/API/RTCPeerConnectionStats)                                    | Statistiken, die den Zustand der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beschreiben.                                                                                                                                   |
| `remote-candidate`    | [`RTCIceCandidateStats`](/de/docs/Web/API/RTCIceCandidateStats)                                      | Statistiken über einen Remote-ICE-Kandidaten, der mit den [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) der Verbindung verbunden ist.                                                                                                  |
| `remote-inbound-rtp`  | [`RTCRemoteInboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats)                            | Statistiken, die den Zustand des eingehenden Datenstroms aus der Perspektive des Remote-Peers beschreiben.                                                                                                        |
| `remote-outbound-rtp` | [`RTCRemoteOutboundRtpStreamStats`](/de/docs/Web/API/RTCRemoteOutboundRtpStreamStats)                           | Statistiken, die den Zustand des ausgehenden Datenstroms aus der Perspektive des Remote-Peers beschreiben.                                                                                                       |
| `transport`           | [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)                                         | Statistiken über einen Transport, der von der Verbindung verwendet wird.                                                                                                                                                       |

## Beispiele

### Bericht von einer RTCPeerConnection mithilfe der forEach-Schleife iterieren

Dieses Beispiel zeigt, wie Sie videobezogene Statistiken für den lokalen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der für den Empfang von gestreamten Medien verantwortlich ist, protokollieren könnten.

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist, dann verwendet der Code `await`, um auf den Statistikbericht zu warten, und iteriert ihn dann unter Verwendung von [`RTCStatsReport.forEach()`](/de/docs/Web/API/RTCStatsReport/forEach).
Er filtert dann die Wörterbücher für nur die Berichte, die den `type` von `inbound-rtp` und `kind` von `video` haben.

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

Dieses Beispiel zeigt, wie Sie die ausgehenden Statistiken von einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durchlaufen könnten.

Der Code folgt einem ähnlichen Muster wie das vorherige Beispiel, iteriert jedoch mit einer `for...of`-Schleife über die [`RTCStatsReport.values()`](/de/docs/Web/API/RTCStatsReport/values) und filtert den `type` von `outbound-rtp`.
Es wird vorausgesetzt, dass Sie bereits ein `RTCRtpSender`-Objekt namens "sender" haben.

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

---
title: RTCStatsReport
slug: Web/API/RTCStatsReport
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{APIRef("WebRTC")}}

Die **`RTCStatsReport`** Schnittstelle der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet einen Statistikbericht für eine {{domxref("RTCPeerConnection")}}, {{domxref("RTCRtpSender")}} oder {{domxref("RTCRtpReceiver")}}.

Eine Instanz von `RTCStatsReport` ist ein schreibgeschütztes [Map-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Map#map-like_browser_apis), bei dem jeder Schlüssel ein Bezeichner für ein Objekt ist, für das Statistiken gemeldet werden, und der entsprechende Wert ein Wörterbuchobjekt ist, das die Statistiken bereitstellt.

## Instanz Eigenschaften

- {{domxref("RTCStatsReport.size")}}
  - : Gibt die Anzahl der Elemente im `RTCStatsReport`-Objekt zurück.

## Instanzmethoden

- {{domxref("RTCStatsReport.entries()")}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, Statistik-Wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- {{domxref("RTCStatsReport.forEach()")}}
  - : Ruft `callbackFn` einmal für jedes Schlüssel-Wert-Paar im `RTCStatsReport`-Objekt in Einfügereihenfolge auf.
    Wenn ein `thisArg`-Parameter an `forEach` übergeben wird, wird er als `this`-Wert für jeden Rückruf verwendet.
- {{domxref("RTCStatsReport.get()")}}
  - : Gibt das Statistik-Wörterbuch zurück, das mit der übergebenen `id` verknüpft ist, oder `undefined`, wenn keines vorhanden ist.
- {{domxref("RTCStatsReport.has()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob das `RTCStatsReport` ein Statistik-Wörterbuch enthält, das mit der angegebenen `id` verknüpft ist.
- {{domxref("RTCStatsReport.keys()")}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Schlüssel (IDs) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- {{domxref("RTCStatsReport.values()")}}
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das die Werte (Statistikobjekte) für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.
- [`RTCStatsReport[Symbol.iterator]()`](/de/docs/Web/API/RTCStatsReport/Symbol.iterator)
  - : Gibt ein neues [Iterator](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator)-Objekt zurück, das ein zweigliedriges Array von `[id, Statistik-Wörterbuch]` für jedes Element im `RTCStatsReport`-Objekt in Einfügereihenfolge enthält.

## Beschreibung

Ein {{jsxref("Promise")}}, das in ein `RTCStatsReport` aufgelöst wird, wird von den Methoden {{domxref("RTCRtpReceiver.getStats()")}}, {{domxref("RTCRtpSender.getStats()")}} und {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben.
Wenn Sie `getStats()` auf einer {{domxref("RTCPeerConnection")}} aufrufen, können Sie angeben, ob Sie ausgehende Statistiken, eingehende Statistiken oder Statistiken für die gesamte Verbindung erhalten möchten.
Die {{domxref("RTCRtpReceiver")}} und {{domxref("RTCRtpSender")}} Versionen von `getStats()` geben nur eingehende bzw. ausgehende Statistiken zurück.

Der Statistikbericht ist ein schreibgeschütztes [Map-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Map) Objekt: ein geordnetes Wörterbuch, in dem die Eigenschaften `id`-Zeichenfolgen sind, die das WebRTC-Objekt eindeutig identifizieren, das überprüft wurde, um einen bestimmten Satz von Statistiken zu erstellen, und der Wert ein Wörterbuchobjekt ist, das diese Statistiken enthält.
Ein `RTCStatsReport` kann genauso iteriert und verwendet werden wie eine schreibgeschützte `Map`.

Der Bericht kann viele verschiedene Kategorien von Statistiken enthalten, einschließlich eingehender und ausgehender Statistiken sowohl für das aktuelle als auch für das entfernte Ende der Peer-Verbindung, Informationen über verwendete Codecs, Zertifikate und Medien usw.
Jede Kategorie von Statistiken wird in einem anderen Typ von Statistik-Wörterbuchobjekt bereitgestellt, das anhand seiner [`type`](#type) Eigenschaft identifiziert werden kann.

### Gemeinsame Instanzeigenschaften

Alle Wörterbuchtypen haben die folgenden Eigenschaften:

- `id`
  - : Eine Zeichenfolge, die das überwachte Objekt eindeutig identifiziert, um den Satz von Statistiken zu erstellen.
    Dieser Wert bleibt über Berichte hinweg (mindestens) für die Lebensdauer der Verbindung bestehen.
    Beachten Sie jedoch, dass sich die ID für einige Statistiken möglicherweise zwischen Browsern und für nachfolgende Verbindungen unterscheiden kann, selbst für denselben Peer.
- `timestamp`
  - : Ein hochauflösendes Zeitstempelobjekt ({{domxref("DOMHighResTimeStamp")}})-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe genommen wurde.
    Viele gemeldete Statistiken sind kumulierte Werte; der Zeitstempel ermöglicht die Berechnung von Raten und Durchschnitten zwischen zwei beliebigen Berichten, mit einer gewünschten Berichterstattungsrate.
- `type`
  - : Eine Zeichenfolge mit einem Wert, der den Typ der Statistiken angibt, die das Objekt enthält, wie `candidate-pair`, `inbound-rtp`, `certificate` usw.
    Die [Arten von Statistiken und ihre entsprechenden Objekte](#die_statistiktypen) sind unten aufgeführt.

Benutzer iterieren typischerweise ein `RTCStatsReport`, indem sie eine {{domxref("RTCStatsReport.forEach()","forEach()")}} oder eine [`for...of`](/de/docs/Web/JavaScript/Reference/Statements/for...of) Schleife verwenden und die interessierenden Statistiken mithilfe der `type`-Eigenschaft auswählen.
Sobald ein bestimmtes Statistikobjekt mit seinem `type` identifiziert wurde, kann die `id`-Eigenschaft anschließend mit {{domxref("RTCStatsReport.get()","get()")}} verwendet werden, um denselben Statistikbericht zu einem anderen Zeitpunkt zu erhalten.

Der Zeitstempel kann verwendet werden, um Durchschnittswerte für Statistiken zu berechnen, die sich über die Lebensdauer einer Verbindung ansammeln.

### Die Statistiktypen

Die Statistik-`type` Werte und ihre entsprechenden Wörterbücher sind unten aufgeführt.

| Typ                   | Wörterbuch                                                              | Beschreibung                                                                                                                                                                                         |
| --------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `candidate-pair`      | {{domxref("RTCIceCandidatePairStats")}}                                  | Statistiken, die den Wechsel von einem {{domxref("RTCIceTransport")}} zu einem anderen beschreiben, wie bei einem [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).       |
| `certificate`         | {{domxref("RTCCertificateStats")}}                                       | Statistiken über ein Zertifikat, das von einem {{domxref("RTCIceTransport")}} verwendet wird.                                                                                                        |
| `codec`               | {{domxref("RTCCodecStats")}}                                             | Statistiken über einen bestimmten Codec, der von Streams verwendet wird, die von dieser Verbindung gesendet oder empfangen werden.                                                                 |
| `data-channel`        | {{domxref("RTCDataChannelStats")}}                                       | Statistiken zu einem {{domxref("RTCDataChannel")}} der Verbindung.                                                                                                                                 |
| `inbound-rtp`         | {{domxref("RTCInboundRtpStreamStats")}}                                  | Statistiken, die den Zustand eines der eingehenden Datenströme der Verbindung beschreiben.                                                                                                         |
| `local-candidate`     | {{domxref("RTCIceCandidateStats")}}                                      | Statistiken über einen lokalen ICE-Kandidaten, der mit den {{domxref("RTCIceTransport")}}s der Verbindung verknüpft ist.                                                                            |
| `media-source`        | {{domxref("RTCAudioSourceStats")}} oder {{domxref("RTCVideoSourceStats")}} | Statistiken über die von dem {{domxref("MediaStreamTrack")}} erzeugten Medien, die an einen RTP-Sender angehängt sind. Das Wörterbuch, auf das dieser Schlüssel verweist, hängt vom {{domxref("MediaStreamTrack.kind", "kind")}} der Spur ab. |
| `outbound-rtp`        | {{domxref("RTCOutboundRtpStreamStats")}}                                 | Statistiken, die den Zustand eines der ausgehenden Datenströme auf dieser Verbindung beschreiben.                                                                                                 |
| `peer-connection`     | {{domxref("RTCPeerConnectionStats")}}                                    | Statistiken, die den Zustand der {{domxref("RTCPeerConnection")}} beschreiben.                                                                                                                      |
| `remote-candidate`    | {{domxref("RTCIceCandidateStats")}}                                      | Statistiken über einen entfernten ICE-Kandidaten, der mit den {{domxref("RTCIceTransport")}}s der Verbindung verknüpft ist.                                                                          |
| `remote-inbound-rtp`  | {{domxref("RTCRemoteInboundRtpStreamStats")}}                            | Statistiken, die den Zustand des eingehenden Datenstroms aus der Sicht des entfernten Peers beschreiben.                                                                                         |
| `remote-outbound-rtp` | {{domxref("RTCRemoteOutboundRtpStreamStats")}}                           | Statistiken, die den Zustand des ausgehenden Datenstroms aus der Sicht des entfernten Peers beschreiben.                                                                                         |
| `transport`           | {{domxref("RTCTransportStats")}}                                         | Statistiken über ein von der Verbindung verwendetes Transportmittel.                                                                                                                               |

## Beispiele

### Bericht von einer RTCPeerConnection mithilfe einer forEach Schleife iterieren

Dieses Beispiel zeigt, wie Sie videobezogene Statistiken für den lokalen {{domxref("RTCRtpReceiver")}}, der für den Empfang von gestreamten Medien verantwortlich ist, protokollieren könnten.

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von `RTCPeerConnection` ist. Der Code verwendet `await`, um auf den Statistikbericht zu warten, und iteriert ihn dann mit {{domxref("RTCStatsReport.forEach()")}}.
Dann filtert er die Wörterbücher nach den Berichten, die den `type` von `inbound-rtp` und `kind` von `video` haben.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "inbound-rtp" && report.kind === "video") {
    // Loggen Sie die Bildrate
    console.log(report.framesPerSecond);
  }
});
```

### Bericht von einem RTCRtpSender mit einer for...of Schleife iterieren

Dieses Beispiel zeigt, wie Sie die ausgehenden Statistiken von einem {{domxref("RTCRtpSender")}} durchlaufen könnten.

Der Code folgt einem ähnlichen Muster wie das vorherige Beispiel, iteriert jedoch mit einer `for...of`-Schleife über die {{domxref("RTCStatsReport.values()")}} und filtert den `type` von `outbound-rtp`.
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
- {{domxref("RTCPeerConnection")}}
- {{domxref("RTCPeerConnection.getStats()")}}, {{domxref("RTCRtpReceiver.getStats()")}}, und {{domxref("RTCRtpSender.getStats()")}}

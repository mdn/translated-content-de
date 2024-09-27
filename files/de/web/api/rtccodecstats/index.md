---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCCodecStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistiken über einen Codec, der von [RTP](/de/docs/Glossary/RTP)-Streams verwendet wird, die von dem verbundenen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet oder empfangen werden.

Diese Statistiken können durch Iteration des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekts erhalten werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Eintrag mit dem [`type`](#type) `codec` gefunden wird.

Die Codec-Statistiken können mit den ein- oder ausgehenden Stream-Statistiken (sowohl lokal als auch remote) korreliert werden, indem deren `codecId`-Eigenschaft mit der `id` des Codecs abgeglichen wird.
Wenn zum Beispiel [`RTCInboundRtpStreamStats.codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats#codecid) mit einer [`RTCCodecStats.id`](#id) im selben Bericht übereinstimmt, wissen wir, dass der Codec im eingehenden Stream dieser Peer-Verbindung verwendet wird.
Wenn kein Stream `codecId` eine Codec-Statistik referenziert, wird dieses Codec-Statistikobjekt gelöscht — wenn der Codec erneut verwendet wird, wird das Statistikobjekt mit derselben `id` neu erstellt.

Codec-Objekte können von mehreren RTP-Streams in Medienabschnitten referenziert werden, die denselben Transport verwenden.
Tatsächlich wird erwartet, dass Benutzeragenten Informationen pro Nutzlasttyp pro Transport in einem einzigen "codec"-Eintrag zusammenfassen (es sei denn, [sdpFmtpLine](#sdpfmtpline) ist beim Senden oder Empfangen unterschiedlich, in diesem Fall werden unterschiedliche Codecs für Kodierung und Dekodierung benötigt).
Beachten Sie, dass andere Transporte ihre eigenen unterschiedlichen `RTCCodecStats`-Objekte verwenden.

## Instanz-Eigenschaften

- [`channels`](/de/docs/Web/API/RTCCodecStats/channels) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
- [`clockRate`](/de/docs/Web/API/RTCCodecStats/clockRate) {{optional_inline}}
  - : Eine positive Zahl, die die Abtastrate der Medien enthält.
- [`mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)
  - : Ein String, der den MIME-Typ/-Untertyp des Mediums enthält, wie zum Beispiel video/VP8.
- [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der den Nutzlasttyp angibt, der bei der RTP-Kodierung oder -Dekodierung verwendet wird.
- [`sdpFmtpLine`](/de/docs/Web/API/RTCCodecStats/sdpFmtpLine) {{optional_inline}}
  - : Ein String, der die formatspezifischen Parameter der `"a=fmtp"`-Linie im [SDP](/de/docs/Glossary/SDP) des Codecs enthält (falls vorhanden).
- [`transportId`](/de/docs/Web/API/RTCCodecStats/transportId)
  - : Ein String, der den eindeutigen Bezeichner des Transports enthält, auf dem dieser Codec verwendet wird.
    Dies kann verwendet werden, um zu dem entsprechenden [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu passen.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen):

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCodecStats/id)
  - : Ein String, der das Objekt, das zur Erstellung dieses Satzes von Statistiken überwacht wird, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCCodecStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCCodecStats/type)
  - : Ein String mit dem Wert `"codec"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, verwendet der folgende Code `await`, um auf den Statistikbericht zu warten und diesen dann mit `RTCStatsReport.forEach()` zu durchlaufen.
Er filtert die Wörterbücher nur für die Berichte, die den Typ `codec` haben und gibt das Ergebnis aus.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "codec") {
    // Log the codec information
    console.log(report);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)
- `codecs` Option in dem Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) und [`RTCRtpSender.setParameters()()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
- `codecs` Eigenschaft in dem Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) zurückgegeben wird.

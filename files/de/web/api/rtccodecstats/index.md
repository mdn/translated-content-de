---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCCodecStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistiken über einen Codec, der von {{Glossary("RTP", "RTP")}}-Streams verwendet wird, die von dem verbundenen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet oder empfangen werden.

Diese Statistiken können erzielt werden, indem das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt iteriert wird, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](/de/docs/Web/API/RTCCodecStats/type) `codec` finden.

Die Codec-Statistiken können mit den eingehenden oder ausgehenden Stream-Statistiken (sowohl lokal als auch remote) korreliert werden, indem die Eigenschaft `codecId` mit der `id` des Codecs abgeglichen wird.
Ein Beispiel: Wenn [`RTCInboundRtpStreamStats.codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats/codecId) mit einer [`RTCCodecStats.id`](/de/docs/Web/API/RTCCodecStats/id) im gleichen Bericht übereinstimmt, wissen wir, dass der Codec auf diesem Peer-Connection-Eingangsstream verwendet wird.
Wenn keine Stream-`codecId` eine Codec-Statistik referenziert, wird dieses Codec-Statistik-Objekt gelöscht — falls der Codec erneut verwendet wird, wird das Statistik-Objekt mit derselben `id` neu erstellt.

Codec-Objekte können von mehreren RTP-Streams in Medienabschnitten referenziert werden, die denselben Transport verwenden.
Tatsächlich wird erwartet, dass Benutzeragenten Informationen in einem einzigen "codec"-Eintrag pro Nutzlasttyp pro Transport konsolidieren (es sei denn, [sdpFmtpLine](/de/docs/Web/API/RTCCodecStats/sdpFmtpLine) unterscheidet sich beim Senden oder Empfangen, in diesem Fall sind unterschiedliche Codecs für Kodierung und Dekodierung erforderlich).
Beachten Sie, dass andere Transporte ihre eigenen unterschiedlichen `RTCCodecStats`-Objekte verwenden werden.

## Instanz-Eigenschaften

- [`channels`](/de/docs/Web/API/RTCCodecStats/channels) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
- [`clockRate`](/de/docs/Web/API/RTCCodecStats/clockRate) {{optional_inline}}
  - : Eine positive Zahl, die die Medienabtastrate enthält.
- [`mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)
  - : Ein String, der den Medien-MIME-Typ/Subtyp enthält, wie zum Beispiel video/VP8.
- [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)
  - : Ein positiver Ganzzahlenwert im Bereich von 0 bis 127, der den im RTP verwendeten Nutzlasttyp bei der Kodierung oder Dekodierung angibt.
- [`sdpFmtpLine`](/de/docs/Web/API/RTCCodecStats/sdpFmtpLine) {{optional_inline}}
  - : Ein String, der die format-spezifischen Parameter der `"a=fmtp"`-Zeile im Codec-{{Glossary("SDP", "SDP")}} enthält (falls vorhanden).
- [`transportId`](/de/docs/Web/API/RTCCodecStats/transportId)
  - : Ein String, der die eindeutige Kennung des Transports enthält, auf dem dieser Codec verwendet wird.
    Dies kann verwendet werden, um das entsprechende [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt abzugleichen.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistik-Objekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen):

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCodecStats/id)
  - : Ein String, der das Objekt, das überwacht wird, eindeutig identifiziert, um diese Statistik zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCCodecStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistik-Objekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCCodecStats/type)
  - : Ein String mit dem Wert `"codec"`, der den Typ der Statistiken angibt, den das Objekt enthält.

## Beispiele

Gegeben sei eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der folgende Code verwendet `await`, um auf den Statistikbericht zu warten und iteriert dann mit `RTCStatsReport.forEach()` darüber.
Anschließend werden die Wörterbücher gefiltert, sodass nur die Berichte vom Typ `codec` protokolliert werden.

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
- `codecs`-Option im Parameter, der an [`RTCRtpTransceiver.setCodecPreferences()`](/de/docs/Web/API/RTCRtpTransceiver/setCodecPreferences) und [`RTCRtpSender.setParameters()()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wird.
- `codecs`-Eigenschaft im Objekt, das von [`RTCRtpSender.getParameters()`](/de/docs/Web/API/RTCRtpSender/getParameters) und [`RTCRtpReceiver.getParameters()`](/de/docs/Web/API/RTCRtpReceiver/getParameters) zurückgegeben wird.

---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCCodecStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistiken über einen Codec, der von [RTP](/de/docs/Glossary/RTP)-Streams verwendet wird, die vom zugeordneten [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt gesendet oder empfangen werden.

Diese Statistiken können erhalten werden, indem Sie das [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)-Objekt durchlaufen, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Eintrag mit dem [`type`](#type) `codec` finden.

Die Codec-Statistiken können mit den Statistiken des ein- oder ausgehenden Streams (sowohl lokal als auch remote) korreliert werden, indem ihre `codecId`-Eigenschaft mit der `id` des Codecs abgeglichen wird.
Wenn z. B. [`RTCInboundRtpStreamStats.codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats#codecid) mit einer [`RTCCodecStats.id`](#id) im selben Bericht übereinstimmt, wissen wir, dass der Codec auf diesem Peer-Connection-Stream verwendet wird.
Wenn keine Stream-`codecId` auf eine Codec-Statistik verweist, wird dieses Codec-Statistikobjekt gelöscht — wenn der Codec erneut verwendet wird, wird das Statistikobjekt mit derselben `id` neu erstellt.

Codec-Objekte können von mehreren RTP-Streams in Medien-Sektionen referenziert werden, die denselben Transport verwenden.
Tatsächlich wird von Benutzeragenten erwartet, dass sie Informationen in einem einzigen "Codec"-Eintrag pro Payload-Typ und Transport konsolidieren (es sei denn, [sdpFmtpLine](#sdpfmtpline) ist beim Senden oder Empfangen unterschiedlich, in diesem Fall werden verschiedene Codecs zum Codieren und Decodieren benötigt).
Beachten Sie, dass andere Transporte ihre eigenen, unterschiedlichen `RTCCodecStats`-Objekte verwenden.

## Instanz-Eigenschaften

- [`channels`](/de/docs/Web/API/RTCCodecStats/channels) {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
- [`clockRate`](/de/docs/Web/API/RTCCodecStats/clockRate) {{optional_inline}}
  - : Eine positive Zahl, die die Medien-Abtastrate enthält.
- [`mimeType`](/de/docs/Web/API/RTCCodecStats/mimeType)
  - : Ein String, der den MIME-Typ/Subtyp der Medien enthält, wie z.B. video/VP8.
- [`payloadType`](/de/docs/Web/API/RTCCodecStats/payloadType)
  - : Ein positiver Ganzzahlwert im Bereich von 0 bis 127, der den Payload-Typ angibt, der bei der RTP-Codierung oder -Decodierung verwendet wird.
- [`sdpFmtpLine`](/de/docs/Web/API/RTCCodecStats/sdpFmtpLine) {{optional_inline}}
  - : Ein String, der die formatspezifischen Parameter der `"a=fmtp"`-Zeile im [SDP](/de/docs/Glossary/SDP) des Codecs (falls vorhanden) enthält.
- [`transportId`](/de/docs/Web/API/RTCCodecStats/transportId)
  - : Ein String, der die eindeutige Kennung des Transports enthält, auf dem dieser Codec verwendet wird.
    Dies kann verwendet werden, um mit dem entsprechenden [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt abzugleichen.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für weitere Informationen):

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCCodecStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Statistikreihe zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCCodecStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCCodecStats/type)
  - : Ein String mit dem Wert `"codec"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `myPeerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, dann verwendet der untenstehende Code `await`, um auf den Statistikbericht zu warten, und durchläuft diesen dann mit `RTCStatsReport.forEach()`.
Anschließend filtert er die Wörterbücher für nur diejenigen Berichte, die den Typ `codec` haben, und protokolliert das Ergebnis.

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

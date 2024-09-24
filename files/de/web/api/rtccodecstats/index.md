---
title: RTCCodecStats
slug: Web/API/RTCCodecStats
l10n:
  sourceCommit: 11f58a4cd8758f89056900a6fb7c21e2d42fa6f1
---

{{APIRef("WebRTC")}}

Das **`RTCCodecStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Statistiken über einen Codec, der von {{Glossary("RTP")}}-Streams verwendet wird, die vom zugehörigen {{domxref("RTCPeerConnection")}}-Objekt gesendet oder empfangen werden.

Diese Statistiken können durch Iterieren des von {{domxref("RTCPeerConnection.getStats()")}} zurückgegebenen {{domxref("RTCStatsReport")}}-Objekts abgerufen werden, bis Sie einen Eintrag mit dem [`type`](#type) des `codec` finden.

Die Codec-Statistiken können mit den ein- oder ausgehenden Stream-Statistiken (sowohl lokal als auch remote) korreliert werden, indem ihre `codecId`-Eigenschaft mit der `id` des Codecs abgeglichen wird. Wenn zum Beispiel [`RTCInboundRtpStreamStats.codecId`](/de/docs/Web/API/RTCInboundRtpStreamStats#codecid) mit einer [`RTCCodecStats.id`](#id) in demselben Bericht übereinstimmt, wissen wir, dass der Codec auf dem eingehenden Stream dieser Peer-Verbindung verwendet wird. Wenn kein Stream-`codecId` eine Codec-Statistik referenziert, wird dieses Codec-Statistikobjekt gelöscht — wenn der Codec erneut verwendet wird, wird das Statistikobjekt mit derselben `id` neu erstellt.

Codec-Objekte können von mehreren RTP-Streams in Medienabschnitten mit demselben Transport referenziert werden. Tatsächlich wird von Benutzeragenten erwartet, dass sie Informationen zu einem einzigen "Codec"-Eintrag pro Nutzlasttyp pro Transport konsolidieren (es sei denn, [sdpFmtpLine](#sdpfmtpline) unterscheidet sich beim Senden oder Empfangen, in diesem Fall werden unterschiedliche Codecs für das Kodieren und Dekodieren benötigt). Beachten Sie, dass andere Transporte ihre eigenen, unterschiedlichen `RTCCodecStats`-Objekte verwenden werden.

## Instanzeigenschaften

- {{domxref("RTCCodecStats.channels", "channels")}} {{optional_inline}}
  - : Eine positive Zahl, die die Anzahl der vom Codec unterstützten Kanäle angibt.
- {{domxref("RTCCodecStats.clockRate", "clockRate")}} {{optional_inline}}
  - : Eine positive Zahl, die die Medienabtastrate enthält.
- {{domxref("RTCCodecStats.mimeType", "mimeType")}}
  - : Ein String, der den Medien-MIME-Typ bzw. Subtyp enthält, wie z.B. video/VP8.
- {{domxref("RTCCodecStats.payloadType", "payloadType")}}
  - : Ein positiver ganzzahliger Wert im Bereich von 0 bis 127, der den Nutzlasttyp bei der RTP-Kodierung oder -Dekodierung angibt.
- {{domxref("RTCCodecStats.sdpFmtpLine", "sdpFmtpLine")}} {{optional_inline}}
  - : Ein String, der die formatspezifischen Parameter der `"a=fmtp"`-Zeile im {{Glossary("SDP")}} des Codecs enthält (falls vorhanden).
- {{domxref("RTCCodecStats.transportId", "transportId")}}
  - : Ein String, der die eindeutige Kennung des Transports enthält, über den dieser Codec verwendet wird. Dies kann verwendet werden, um zum entsprechenden {{domxref("RTCTransportStats")}}-Objekt zu passen.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam (siehe [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport#common_instance_properties) für mehr Informationen):

<!-- RTCStats -->

- {{domxref("RTCCodecStats.id", "id")}}
  - : Ein String, der das Objekt, das zur Erzeugung dieses Satzes von Statistiken überwacht wird, eindeutig identifiziert.
- {{domxref("RTCCodecStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCCodecStats.type", "type")}}
  - : Ein String mit dem Wert `"codec"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, Sie haben eine Variable `myPeerConnection`, die eine Instanz von {{domxref("RTCPeerConnection")}} ist. Der unten stehende Code verwendet `await`, um auf den Statistikbericht zu warten, und iteriert ihn dann mithilfe von `RTCStatsReport.forEach()`. Er filtert dann die Wörterbücher für nur jene Berichte, die den Typ `codec` haben, und protokolliert das Ergebnis.

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

- {{domxref("RTCStatsReport")}}
- Option `codecs` im Parameter, der an {{domxref("RTCRtpTransceiver.setCodecPreferences()")}} und {{domxref("RTCRtpSender.setParameters()()")}} übergeben wird.
- Eigenschaft `codecs` im Objekt, das von {{domxref("RTCRtpSender.getParameters()")}} und {{domxref("RTCRtpReceiver.getParameters()")}} zurückgegeben wird.

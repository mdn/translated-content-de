---
title: RTCRemoteInboundRtpStreamStats
slug: Web/API/RTCRemoteInboundRtpStreamStats
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken vom Remote-Endpunkt über einen bestimmten eingehenden RTP-Stream zu berichten.
Diese korrespondieren mit einem ausgehenden RTP-Stream am lokalen Ende der {{domxref("RTCPeerConnection")}}.

Die Statistiken können durch Iterieren des {{domxref("RTCStatsReport")}} erhalten werden, das von {{domxref("RTCPeerConnection.getStats()")}} oder {{domxref("RTCRtpReceiver.getStats()")}} zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `remote-inbound-rtp` finden.

## Instanzeigenschaften

### Spezifische Statistiken für eingehende Remote-Verbindungen

<!-- RTCRemoteInboundRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.fractionLost", "fractionLost")}} {{optional_inline}}
  - : Eine Zahl, die den Bruchteil der für diese SSRC verlorenen Pakete seit dem letzten Sender- oder Empfängerbericht angibt.
- {{domxref("RTCRemoteInboundRtpStreamStats.localId", "localId")}} {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale {{domxref("RTCOutboundRtpStreamStats")}} Objekt zu finden, das die gleiche [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) teilt.
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTime", "roundTripTime")}} {{optional_inline}}
  - : Eine Zahl, die die geschätzte Round-Trip-Zeit (RTT) für diese SSRC in Sekunden angibt.
    Diese Eigenschaft existiert nicht, bis gültige RTT-Daten empfangen wurden.
- {{domxref("RTCRemoteInboundRtpStreamStats.roundTripTimeMeasurements", "roundTripTimeMeasurements")}} {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl gültiger Round-Trip-Time-Messungen angibt, die für diese [Synchronisationsquelle (SSRC)](#ssrc) empfangen wurden.
- {{domxref("RTCRemoteInboundRtpStreamStats.totalRoundTripTime", "totalRoundTripTime")}} {{optional_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Time-Messungen seit Beginn der Sitzung in Sekunden angibt.
    Die durchschnittliche Round-Trip-Zeit kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Empfangene RTP-Stream-Statistiken

<!-- RTCReceivedRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.jitter", "jitter")}} {{optional_inline}}
  - : Eine Zahl, die das {{glossary("jitter", "Paket-Jitter")}} für diese Synchronisationsquelle, gemessen in Sekunden, angibt.
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsLost", "packetsLost")}} {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der verlorenen RTP-Pakete für diese SSRC angibt, gemessen am Remote-Endpunkt.
    Dieser Wert kann negativ sein, wenn doppelte Pakete empfangen wurden.
- {{domxref("RTCRemoteInboundRtpStreamStats.packetsReceived", "packetsReceived")}} {{optional_inline}} {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der für diese SSRC empfangenen RTP-Pakete angibt, einschließlich der erneuten Übertragungen.

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.codecId", "codecId")}} {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das {{domxref("RTCCodecStats")}} Objekt zu erzeugen, das mit diesem {{Glossary("RTP")}} Stream verbunden ist.
- {{domxref("RTCRemoteInboundRtpStreamStats.kind", "kind")}}
  - : Ein String, der angibt, ob der mit dem Stream verbundene {{domxref("MediaStreamTrack")}} ein Audio- oder Video-Track ist.
- {{domxref("RTCRemoteInboundRtpStreamStats.ssrc", "ssrc")}}
  - : Eine positive ganze Zahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- {{domxref("RTCRemoteInboundRtpStreamStats.transportId", "transportId")}} {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um das {{domxref("RTCTransportStats")}} Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCRemoteInboundRtpStreamStats.id", "id")}}
  - : Ein String, der das zu überwachende Objekt eindeutig identifiziert, um diesen Satz von Statistiken zu erzeugen.
- {{domxref("RTCRemoteInboundRtpStreamStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}} Objekt, das den Zeitpunkt angibt, an dem das Sample für dieses Statistikobjekt genommen wurde.
- {{domxref("RTCRemoteInboundRtpStreamStats.type", "type")}}
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ von Statistiken angibt, den das Objekt enthält.

## Beispiele

Angenommen, eine Variable `peerConnection` ist eine Instanz einer {{domxref("RTCPeerConnection")}}, der folgende Code verwendet `await`, um auf den Statistikbericht zu warten, und iteriert ihn dann mithilfe von `RTCStatsReport.forEach()`.
Er filtert dann die Wörterbücher für nur jene Berichte, die den Typ `remote-inbound-rtp` haben und gibt das Ergebnis aus.

```js
const stats = await myPeerConnection.getStats();

stats.forEach((report) => {
  if (report.type === "remote-inbound-rtp") {
    console.log("Remote Inbound RTP Stream Stats:");
    console.log(`id: ${report.id}`);
    console.log(`timestamp: ${report.timestamp}`);
    console.log(`transportId: ${report.transportId}`);
    console.log(`ssrc: ${report.ssrc}`);
    console.log(`kind: ${report.kind}`);
    console.log(`codecId: ${report.codecId}`);
    console.log(`packetsReceived: ${report.packetsReceived}`);
    console.log(`packetsLost: ${report.packetsLost}`);
    console.log(`jitter: ${report.jitter}`);
    console.log(`totalRoundTripTime: ${report.totalRoundTripTime}`);
    console.log(
      `roundTripTimeMeasurements: ${report.roundTripTimeMeasurements}`,
    );
    console.log(`roundTripTime: ${report.roundTripTime}`);
    console.log(`localId: ${report.localId}`);
    console.log(`fractionLost: ${report.fractionLost}`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCStatsReport")}}

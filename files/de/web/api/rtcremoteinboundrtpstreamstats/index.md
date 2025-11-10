---
title: RTCRemoteInboundRtpStreamStats
slug: Web/API/RTCRemoteInboundRtpStreamStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteInboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken vom Remote-Endpunkt über einen bestimmten eingehenden RTP-Stream zu berichten.
Diese entsprechen einem ausgehenden RTP-Stream am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Die Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, durchiteriert wird, bis ein Bericht mit dem [`type`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/type) von `remote-inbound-rtp` gefunden wird.

## Instanz-Eigenschaften

### Remote, eingehende spezifische Statistiken

<!-- RTCRemoteInboundRtpStreamStats -->

- [`fractionLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/fractionLost) {{optional_inline}}
  - : Eine Zahl, die den Bruchteil der für diesen SSRC verlorenen Pakete seit dem letzten Sender- oder Empfängerbericht angibt.
- [`localId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/localId) {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu finden, das die gleiche [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) teilt.
- [`roundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime) {{optional_inline}}
  - : Eine Zahl, die die geschätzte Round-Trip-Zeit (RTT) für diesen SSRC in Sekunden angibt.
    Diese Eigenschaft wird nicht existieren, bis gültige RTT-Daten empfangen wurden.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der gültigen Round-Trip-Zeitmessungen für diese [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Zeitmessungen seit Beginn der Sitzung in Sekunden angibt.
    Die durchschnittliche Round-Trip-Zeit kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) geteilt wird.

### Empfangene RTP-Stream-Statistiken

<!-- RTCReceivedRtpStreamStats -->

- [`jitter`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/jitter) {{optional_inline}}
  - : Eine Zahl, die das {{Glossary("jitter", "Paket-Jitter")}} für diese Synchronisationsquelle in Sekunden misst.
- [`packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der für diesen SSRC verlorenen RTP-Pakete angibt, wie sie am Remote-Endpunkt gemessen wurde.
    Dieser Wert kann negativ sein, wenn doppelte Pakete empfangen wurden.
- [`packetsReceived`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der für diesen SSRC empfangenen RTP-Pakete einschließlich der erneuten Übertragungen angibt.

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verbunden ist.
- [`kind`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die den SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verbunden ist.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Statistikdaten zu produzieren.
- [`timestamp`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `peerConnection`, die eine Instanz von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist, wird der folgende Code `await` verwenden, um auf den Statistikbericht zu warten, und ihn dann mithilfe von `RTCStatsReport.forEach()` durchiterieren.
Er filtert dann die Wörterbücher nur für jene Berichte, die den Typ `remote-inbound-rtp` haben und protokolliert das Ergebnis.

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

- [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport)

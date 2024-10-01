---
title: RTCRemoteInboundRtpStreamStats
slug: Web/API/RTCRemoteInboundRtpStreamStats
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteInboundRtpStreamStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken vom entfernten Endpunkt über einen bestimmten eingehenden RTP-Stream zu melden. Diese entsprechen einem ausgehenden RTP-Stream am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Die Statistiken können abgerufen werden, indem man durch den [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) iteriert, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `remote-inbound-rtp` finden.

## Instanzeigenschaften

### Spezifische Statistiken für eingehende Remote-Daten

<!-- RTCRemoteInboundRtpStreamStats -->

- [`fractionLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/fractionLost) {{optional_inline}}
  - : Eine Zahl, die den Anteil der für diesen SSRC verlorenen Pakete seit dem letzten Sender- oder Empfängerbericht angibt.
- [`localId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/localId) {{optional_inline}}
  - : Ein String, der verwendet wird, um das lokale [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu finden, das die gleiche [Synchronisierungsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) teilt.
- [`roundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime) {{optional_inline}}
  - : Eine Zahl, die die geschätzte Round-Trip-Zeit (RTT) für diesen SSRC in Sekunden angibt. Diese Eigenschaft existiert nicht, bis gültige RTT-Daten empfangen wurden.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der gültigen Messungen der Round-Trip-Zeit anzeigt, die für diese [Synchronisierungsquelle (SSRC)](#ssrc) empfangen wurden.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Zeit-Messungen seit Beginn der Sitzung in Sekunden angibt. Die durchschnittliche Round-Trip-Zeit kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Statistiken des empfangenen RTP-Streams

<!-- RTCReceivedRtpStreamStats -->

- [`jitter`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/jitter) {{optional_inline}}
  - : Eine Zahl, die die {{Glossary("jitter", "Paket-Jitter")}} für diese Synchronisierungsquelle in Sekunden angibt.
- [`packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost) {{optional_inline}}
  - : Eine Ganzzahl, die die Gesamtzahl der verlorenen RTP-Pakete für diesen SSRC angibt, gemessen am entfernten Endpunkt. Dieser Wert kann negativ sein, wenn doppelte Pakete empfangen wurden.
- [`packetsReceived`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Eine positive Ganzzahl, die die Gesamtzahl der empfangenen RTP-Pakete für diesen SSRC anzeigt, einschließlich erneuter Übertragungen.

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/codecId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erstellen, das mit diesem {{Glossary("RTP", "RTP")}}-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/kind)
  - : Ein String, der angibt, ob der mit dem Stream verbundene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Videotrack ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
  - : Eine positive Ganzzahl, die den SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) {{optional_inline}}
  - : Ein String, der das Objekt eindeutig identifiziert, das untersucht wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erstellen, das mit diesem RTP-Stream verknüpft ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/id)
  - : Ein String, der das Objekt eindeutig identifiziert, das überwacht wird, um diese Satz von Statistiken zu erstellen.
- [`timestamp`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Zeit angibt, zu der die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/type)
  - : Ein String mit dem Wert `"inbound-rtp"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Gegeben sei eine Variable `peerConnection`, die eine Instanz einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist. Der folgende Code verwendet `await`, um auf den Statistikbericht zu warten, und durchläuft ihn dann mit `RTCStatsReport.forEach()`. Er filtert die Wörterbücher nach nur jenen Berichten, deren Typ `remote-inbound-rtp` ist, und protokolliert das Ergebnis.

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

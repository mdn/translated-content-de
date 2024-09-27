---
title: RTCRemoteInboundRtpStreamStats
slug: Web/API/RTCRemoteInboundRtpStreamStats
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}

Das **`RTCRemoteInboundRtpStreamStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) wird verwendet, um Statistiken vom entfernten Endpunkt über einen bestimmten eingehenden RTP-Stream zu melden. Diese entsprechen einem ausgehenden RTP-Stream am lokalen Ende der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

Die Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) abgerufen werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) oder [`RTCRtpReceiver.getStats()`](/de/docs/Web/API/RTCRtpReceiver/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `remote-inbound-rtp` finden.

## Instanz-Eigenschaften

### Spezifische Statistiken für eingehende Verbindungen

<!-- RTCRemoteInboundRtpStreamStats -->

- [`fractionLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/fractionLost) {{optional_inline}}
  - : Eine Zahl, die den Anteil der für diese SSRC verlorenen Pakete seit dem letzten Sender- oder Empfängerbericht angibt.
- [`localId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/localId) {{optional_inline}}
  - : Eine Zeichenkette, die verwendet wird, um das lokale [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Objekt zu finden, das dieselbe [Synchronisationsquelle (SSRC)](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc) teilt.
- [`roundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTime) {{optional_inline}}
  - : Eine Zahl, die die geschätzte Round-Trip-Zeit (RTT) für diese SSRC in Sekunden angibt. Diese Eigenschaft existiert erst, wenn gültige RTT-Daten empfangen wurden.
- [`roundTripTimeMeasurements`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/roundTripTimeMeasurements) {{optional_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der gültigen Round-Trip-Zeit-Messungen für diese [Synchronisationsquelle (SSRC)](#ssrc) angibt.
- [`totalRoundTripTime`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/totalRoundTripTime) {{optional_inline}}
  - : Eine Zahl, die die kumulative Summe aller Round-Trip-Zeit-Messungen seit Beginn der Sitzung in Sekunden angibt. Die durchschnittliche Round-Trip-Zeit kann berechnet werden, indem `totalRoundTripTime` durch [`roundTripTimeMeasurements`](#roundtriptimemeasurements) geteilt wird.

### Empfangene RTP-Stream-Statistiken

<!-- RTCReceivedRtpStreamStats -->

- [`jitter`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/jitter) {{optional_inline}}
  - : Eine Zahl, die das [Paketjitter](/de/docs/Glossary/jitter) für diese Synchronisationsquelle angibt, gemessen in Sekunden.
- [`packetsLost`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsLost) {{optional_inline}}
  - : Eine ganze Zahl, die die Gesamtanzahl der für diese SSRC verlorenen RTP-Pakete angibt, gemessen am entfernten Endpunkt. Dieser Wert kann negativ sein, wenn doppelte Pakete empfangen wurden.
- [`packetsReceived`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/packetsReceived) {{optional_inline}} {{experimental_inline}}
  - : Eine positive ganze Zahl, die die Gesamtanzahl der für diese SSRC empfangenen RTP-Pakete angibt, einschließlich erneuter Übertragungen.

### Allgemeine RTP-Stream-Statistiken

<!-- RTCRtpStreamStats -->

- [`codecId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/codecId) {{optional_inline}}
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats)-Objekt zu erzeugen, das mit diesem [RTP](/de/docs/Glossary/RTP)-Stream verknüpft ist.
- [`kind`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/kind)
  - : Eine Zeichenkette, die angibt, ob der mit dem Stream verknüpfte [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) ein Audio- oder Video-Track ist.
- [`ssrc`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/ssrc)
  - : Eine positive ganze Zahl, die die SSRC der RTP-Pakete in diesem Stream identifiziert.
- [`transportId`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/transportId) {{optional_inline}}
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das inspiziert wurde, um das [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats)-Objekt zu erzeugen, das mit diesem RTP-Stream verknüpft ist.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/id)
  - : Eine Zeichenkette, die das Objekt eindeutig identifiziert, das überwacht wird, um diesen Satz von Statistiken zu erzeugen.
- [`timestamp`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCRemoteInboundRtpStreamStats/type)
  - : Eine Zeichenkette mit dem Wert `"inbound-rtp"`, die den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Angenommen, eine Variable `peerConnection` ist eine Instanz einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), dann wartet der untenstehende Code mit `await` auf den Statistikbericht und iteriert diesen anschließend mit `RTCStatsReport.forEach()`. Er filtert dann die Wörterbücher für nur diejenigen Berichte, die den Typ `remote-inbound-rtp` haben, und protokolliert das Ergebnis.

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

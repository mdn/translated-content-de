---
title: "RTCOutboundRtpStreamStats: totalPacketSendDelay-Eigenschaft"
short-title: totalPacketSendDelay
slug: Web/API/RTCOutboundRtpStreamStats/totalPacketSendDelay
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`totalPacketSendDelay`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die gesamte Zeit in Sekunden, die Pakete lokal gepuffert wurden, bevor sie übertragen wurden.

Die individuelle Paketverzögerung ist die Zeitspanne zwischen der Ausgabe eines Pakets durch den RTP-Paketisierer und der Übergabe an den Netzwerk-Socket des Betriebssystems.
Die individuelle Verzögerung wird zu `totalPacketSendDelay` addiert, wenn [`packetsSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded) erhöht wird.

> [!NOTE]
> Diese Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Die Verzögerung in Sekunden, dargestellt als Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

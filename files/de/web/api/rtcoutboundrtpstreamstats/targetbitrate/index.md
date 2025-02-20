---
title: "RTCOutboundRtpStreamStats: targetBitrate-Eigenschaft"
short-title: targetBitrate
slug: Web/API/RTCOutboundRtpStreamStats/targetBitrate
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`targetBitrate`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die aktuelle Ziel-Bitraten des vom Stream verwendeten Codecs.

Der Wert ist dynamisch und reflektiert die Encoder-Einstellungen sowie andere Faktoren wie Netzwerkbedingungen und verfügbare Bandbreite. Er sollte eng mit den Nutzlast-Bytes pro Sekunde (ohne erneute Übertragungen) korrelieren.

## Wert

Eine Zahl, die die Ziel-Bitrate in Bits pro Sekunde darstellt. Diese ist auf dieselbe Weise definiert wie die {{rfc("3890","Transport Independent Application Specific (TIAS)")}}-Bitrate.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCOutboundRtpStreamStats.bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent)
- [`RTCOutboundRtpStreamStats.retransmittedBytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/retransmittedBytesSent)

---
title: "RTCOutboundRtpStreamStats: Eigenschaft totalEncodedBytesTarget"
short-title: totalEncodedBytesTarget
slug: Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget
l10n:
  sourceCommit: 74b73e8310d2ecfecd3e4a2aa21e5b54f43d7387
---

{{APIRef("WebRTC")}}{{non-standard_header}}

Die Eigenschaft **`totalEncodedBytesTarget`** des Dictionaries [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats) gibt die Summe der angestrebten Frame-Größen aller bisher codierten Frames an.

Der Codec hat für jeden Frame, den er komprimieren soll, eine angestrebte maximale Größe in Bytes. Diese Eigenschaft gibt die kumulierte Summe der angestrebten Größen aller Frames zum aktuellen Zeitpunkt an. Sie wird sich wahrscheinlich von der Summe der tatsächlichen Frame-Größen unterscheiden. Sie können den Wert mit [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) vergleichen, um abzuschätzen, wie genau der Codec die angestrebte Größe einhält.

Der Wert steigt jedes Mal, wenn [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded) zunimmt.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Wert

Die Summe der angestrebten Frame-Größen in Bytes, dargestellt als positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

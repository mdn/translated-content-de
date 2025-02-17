---
title: "RTCOutboundRtpStreamStats: totalEncodeTime-Eigenschaft"
short-title: totalEncodeTime
slug: Web/API/RTCOutboundRtpStreamStats/totalEncodeTime
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`totalEncodeTime`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die Gesamtanzahl der Sekunden, die für das Kodieren der [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded)-Frames für diesen Stream ([`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)) aufgewendet wurden.

Die durchschnittliche Kodierungszeit kann berechnet werden, indem dieser Wert durch `framesEncoded` geteilt wird.
Die Zeit, die benötigt wird, um einen Frame zu kodieren, ist die Zeit zwischen dem Senden eines Frames an den Encoder und dem Zurückgeben der kodierten Daten durch den Encoder für diesen Frame.
Sie beinhaltet keine Zeit, die für das Packetieren der resultierenden Daten verwendet wurde.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams undefiniert.

## Wert

Eine Zahl, die die Gesamtzeit in Sekunden angibt, die für das Kodieren von Frames aufgewendet wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

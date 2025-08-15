---
title: "RTCInboundRtpStreamStats: Eigenschaft totalProcessingDelay"
short-title: totalProcessingDelay
slug: Web/API/RTCInboundRtpStreamStats/totalProcessingDelay
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalProcessingDelay`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die insgesamt angesammelte Zeit an, die für die Verarbeitung von Audio- oder Videosamples aufgewendet wurde, in Sekunden.

Die Verarbeitungszeit für jedes Audio- oder Videosample wird vom Empfangszeitpunkt des ersten RTP-Pakets (Empfangszeitstempel) bis zu dem Zeitpunkt berechnet, an dem das entsprechende Sample oder Frame dekodiert wird (dekodierter Zeitstempel).
Zu diesem Zeitpunkt ist das Audiosample oder Videoframe vom Decoder vollständig dekodiert und bereit zur Wiedergabe durch die [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

Für Audiostreams kann ein RTP-Paket mehrere Audiosamples enthalten: Diese teilen sich denselben Empfangszeitstempel.
Bei Videostreams kann ein komplettes Frame in mehreren RTP-Paketen ankommen, und der Empfangszeitstempel ist der des ersten empfangenen RTP-Pakets, das Daten für das Frame enthält.
In beiden Fällen ist der dekodierte Zeitstempel der Zeitpunkt, an dem das Sample oder Frame abspielbereit ist.

Für Video wird die Eigenschaft nur für dekodierte Frames akkumuliert (nicht für solche, die verworfen wurden).
Die durchschnittliche Verarbeitungsverzögerung kann berechnet werden, indem man `totalProcessingDelay` durch die [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) teilt. <!-- Audiosamples können keinen Durchschnitt bekommen - totalSamplesDecoded noch nicht in Spezifikation oder implementiert -->

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

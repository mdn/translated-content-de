---
title: "RTCInboundRtpStreamStats: fecPacketsReceived Eigenschaft"
short-title: fecPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsReceived
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`fecPacketsReceived`** Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats) Dictionary gibt an, wie viele Forward Error Correction (FEC)-Pakete von diesem RTP-Empfänger vom entfernten Peer empfangen wurden.

Ein FEC-Paket stellt Paritätsinformationen bereit, die verwendet werden können, um zu versuchen, RTP-Datenpakete, die während des Transports beschädigt wurden, zu rekonstruieren.

## Wert

Ein positiver Ganzzahlwert.

## Beschreibung

Diese Eigenschaft gibt die Gesamtzahl der FEC-Pakete an, die während dieser RTP-Sitzung vom entfernten Peer empfangen wurden.

Forward Error Correction verwendet eine Exklusiv-Oder-Methode, um Paritätsprüfungen der empfangenen Daten durchzuführen.
Durch die Verwendung der FEC-Paritätsinformationen, um zu versuchen, beschädigte Pakete zu rekonstruieren, ist es möglich, die Notwendigkeit zu vermeiden, beschädigte Pakete erneut zu senden, was wiederum hilft, Verzögerungen zu reduzieren oder die Notwendigkeit zu vermeiden, beschädigte Frames ganz zu überspringen.

> [!NOTE]
> Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete im Einklang mit Medieninhalten ankommen; dies kann beispielsweise mit Opus geschehen.

Es ist möglich, dass ein Teil der empfangenen FEC-Pakete verworfen wurde, anstatt verwendet zu werden.
Dies kann passieren, wenn die von den FEC-Paketen abgedeckten Pakete bereits erfolgreich empfangen oder mit einem zuvor empfangenen FEC-Paket bereits rekonstruiert wurden.
Dies kann auch passieren, wenn das FEC-Paket außerhalb des Zeitfensters ankommt, in dem der Client versuchen wird, es zu verwenden.

Wenn Sie wissen möchten, wie viele der empfangenen Pakete verworfen wurden, können Sie den Wert von [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded) untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5109)}} (RTP Payload Format for Generic Forward Error Correction)

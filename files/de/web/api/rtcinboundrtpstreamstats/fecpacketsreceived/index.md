---
title: "RTCInboundRtpStreamStats: fecPacketsReceived-Eigenschaft"
short-title: fecPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsReceived
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`fecPacketsReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele Forward Error Correction (FEC) Pakete von diesem RTP-Empfänger vom entfernten Peer empfangen wurden.

Ein FEC-Paket liefert Paritätsinformationen, die zur Rekonstruktion von RTP-Datenpaketen verwendet werden können, die während der Übertragung beschädigt wurden.

## Wert

Ein positiver Ganzzahlwert.

## Beschreibung

Diese Eigenschaft gibt die Gesamtanzahl der FEC-Pakete an, die während dieser RTP-Sitzung vom entfernten Peer empfangen wurden.

Forward Error Correction verwendet eine Exklusiv-Oder-Methode, um Paritätsprüfungen der empfangenen Daten durchzuführen.
Durch die Verwendung der FEC-Paritätsinformationen, um beschädigte Pakete zu rekonstruieren, kann vermieden werden, dass beschädigte Pakete erneut gesendet werden müssen, was wiederum hilft, Verzögerungen zu reduzieren oder den Bedarf, beschädigte Frames ganz zu überspringen.

> [!NOTE]
> Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete in Band zusammen mit Medieninhalten ankommen; dies kann zum Beispiel bei Opus passieren.

Es ist möglich, dass ein Teil der empfangenen FEC-Pakete verworfen wurde, anstatt verwendet zu werden.
Dies kann passieren, wenn die von den FEC-Paketen abgedeckten Pakete bereits erfolgreich empfangen wurden oder bereits mit einem zuvor empfangenen FEC-Paket rekonstruiert wurden.
Dies kann auch passieren, wenn das FEC-Paket außerhalb des Zeitfensters eintrifft, in dem der Client versuchen wird, es zu verwenden.

Wenn Sie wissen möchten, wie viele der empfangenen Pakete verworfen wurden, können Sie den Wert von [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded) untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5109)}} (RTP-Payload-Format für generische Forward Error Correction)

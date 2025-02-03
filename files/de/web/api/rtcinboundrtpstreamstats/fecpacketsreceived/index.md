---
title: "RTCInboundRtpStreamStats: fecPacketsReceived Eigenschaft"
short-title: fecPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsReceived
l10n:
  sourceCommit: d0e6d8d712a33b9d3c7a9fb9a8ba85d4dd1b7002
---

{{APIRef("WebRTC")}}

Die **`fecPacketsReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele Forward Error Correction (FEC)-Pakete von diesem RTP-Empfänger vom entfernten Teilnehmer empfangen wurden.

Ein FEC-Paket liefert Paritätsinformationen, die verwendet werden können, um zu versuchen, RTP-Datenpakete zu rekonstruieren, die während der Übertragung beschädigt wurden.

## Wert

Ein ganzzahliger Wert ohne Vorzeichen, der die Gesamtzahl der FEC-Pakete angibt, die während dieser RTP-Sitzung vom entfernten Teilnehmer empfangen wurden. Forward Error Correction verwendet eine exklusiv-oder-Methode, um Paritätsprüfungen der empfangenen Daten durchzuführen.

Indem die FEC-Paritätsinformationen verwendet werden, um beschädigte Pakete zu rekonstruieren, kann es vermieden werden, dass beschädigte Pakete erneut gesendet werden müssen, was dazu beiträgt, Verzögerungen zu reduzieren oder das Überspringen beschädigter Frames zu vermeiden.

> [!NOTE]
> Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete gemeinsam mit Medieninhalten in-band ankommen; dies kann zum Beispiel mit Opus passieren.

## Verwendungshinweise

Es ist möglich, dass ein Teil der empfangenen FEC-Pakete verworfen wurde, anstatt verwendet zu werden. Dies kann passieren, wenn die von den FEC-Paketen abgedeckten Pakete bereits erfolgreich empfangen oder bereits mit einem zuvor empfangenen FEC-Paket rekonstruiert wurden. Dies kann auch passieren, wenn das FEC-Paket außerhalb des Zeitfensters eintrifft, in dem der Client versuchen wird, es zu verwenden.

Wenn Sie wissen möchten, wie viele der empfangenen Pakete verworfen wurden, können Sie den Wert von [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded) untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5109)}} (RTP Payload Format for Generic Forward Error Correction)

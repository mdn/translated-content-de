---
title: "RTCInboundRtpStreamStats: fecPacketsReceived-Eigenschaft"
short-title: fecPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsReceived
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`fecPacketsReceived`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele Forward Error Correction (FEC)-Pakete von diesem RTP-Empfänger vom entfernten Peer empfangen wurden.

Ein FEC-Paket bietet Paritätsinformationen, die verwendet werden können, um zu versuchen, RTP-Datenpakete zu rekonstruieren, die während der Übertragung beschädigt wurden.

## Syntax

```js-nolint
const fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived
```

### Wert

Ein positiver Integer-Wert, der die Gesamtanzahl der FEC-Pakete angibt, die während dieser RTP-Sitzung vom entfernten Peer empfangen wurden. Forward Error Correction verwendet eine Exklusiv-Oder-Methode, um Paritätsprüfungen der empfangenen Daten durchzuführen.

Durch den Einsatz der FEC-Paritätsinformationen, um beschädigte Pakete zu rekonstruieren, kann es möglich sein, das erneute Senden beschädigter Pakete zu vermeiden, was wiederum hilft, Verzögerungen zu reduzieren, oder ganz auf das Überspringen beschädigter Frames zu verzichten.

> [!NOTE]
> Dieser Zähler kann auch inkrementiert werden, wenn FEC-Pakete zusammen mit Medieninhalten im In-Band-Format ankommen; dies kann beispielsweise bei Opus vorkommen.

## Verwendungshinweise

Es ist möglich, dass ein Teil der empfangenen FEC-Pakete verworfen wurde, anstatt verwendet zu werden. Dies kann passieren, wenn die von den FEC-Paketen abgedeckten Pakete bereits erfolgreich empfangen oder bereits mit einem zuvor empfangenen FEC-Paket rekonstruiert wurden. Dies kann auch passieren, wenn das FEC-Paket außerhalb des Zeitfensters ankommt, in dem der Client versuchen wird, es zu verwenden.

Wenn Sie wissen möchten, wie viele der empfangenen Pakete verworfen wurden, können Sie den Wert von [`fecPacketsDiscarded`](/de/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded) prüfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5109)}} (RTP-Payload-Format für generische Vorwärtsfehlerkorrektur)

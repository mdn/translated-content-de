---
title: "RTCInboundRtpStreamStats: fecPacketsReceived-Eigenschaft"
short-title: fecPacketsReceived
slug: Web/API/RTCInboundRtpStreamStats/fecPacketsReceived
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`fecPacketsReceived`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt an, wie viele Forward Error Correction (FEC)-Pakete von diesem RTP-Empfänger vom entfernten Teilnehmer empfangen wurden.

Ein FEC-Paket liefert Paritätsinformationen, die verwendet werden können, um zu versuchen, RTP-Datenpakete zu rekonstruieren, die während des Transports beschädigt wurden.

## Syntax

```js-nolint
const fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived
```

### Wert

Ein vorzeichenloser Ganzzahlwert, der die Gesamtanzahl der FEC-Pakete angibt, die von dem entfernten Teilnehmer während dieser RTP-Sitzung empfangen wurden. Forward Error Correction verwendet eine Exklusiv-Oder-Methode, um Paritätsprüfungen der empfangenen Daten durchzuführen.

Indem Sie die FEC-Paritätsinformationen verwenden, um beschädigte Pakete zu rekonstruieren, ist es möglich, die Notwendigkeit zu vermeiden, beschädigte Pakete erneut zu senden, was wiederum hilft, Verzögerungen zu reduzieren oder die Notwendigkeit, beschädigte Rahmen ganz zu überspringen.

> [!NOTE]
> Dieser Zähler kann auch erhöht werden, wenn FEC-Pakete zusammen mit Mediendaten In-Band ankommen; dies kann z.B. bei Opus passieren.

## Anwendungshinweise

Es ist möglich, dass ein Teil der empfangenen FEC-Pakete verworfen wird, anstatt verwendet zu werden. Dies kann passieren, wenn die Pakete, die von den FEC-Paketen abgedeckt werden, bereits erfolgreich empfangen oder mit einem zuvor empfangenen FEC-Paket bereits rekonstruiert wurden. Dies kann auch geschehen, wenn das FEC-Paket außerhalb des Zeitfensters ankommt, in dem der Client versuchen wird, es zu verwenden.

Wenn Sie wissen möchten, wie viele der empfangenen Pakete verworfen wurden, können Sie den Wert von {{domxref("RTCInboundRtpStreamStats.fecPacketsDiscarded", "fecPacketsDiscarded")}} untersuchen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(5109)}} (RTP-Payload-Format für generische Vorwärtsfehlerkorrektur)

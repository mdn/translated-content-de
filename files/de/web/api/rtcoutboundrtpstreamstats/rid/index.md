---
title: "RTCOutboundRtpStreamStats: rid-Eigenschaft"
short-title: rid
slug: Web/API/RTCOutboundRtpStreamStats/rid
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}

Die **`rid`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der die RTP-Stream-ID angibt, falls definiert.

Die Eigenschaft ist nur definiert, wenn die `rid` für den entsprechenden [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesetzt wurde. Wenn sie gesetzt ist, wird dieser Wert unabhängig davon vorhanden sein, ob die RID-RTP-Header-Erweiterung ausgehandelt wurde oder nicht.

## Wert

Der Wert des [`encodings.rid`](/de/docs/Web/API/RTCRtpSender/setParameters#rid)-Arguments, das an [`RTCRtpSender.setParameters()`](/de/docs/Web/API/RTCRtpSender/setParameters) übergeben wurde (falls vorhanden), als der entsprechende Transceiver erstellt wurde. Die Eigenschaft ist nicht definiert, wenn die Stream-ID nicht gesetzt wurde.

> [!NOTE]
> Die Eigenschaft ist für Audiostreams nicht definiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

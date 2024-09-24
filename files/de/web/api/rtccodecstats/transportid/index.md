---
title: "RTCCodecStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCCodecStats/transportId
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des {{domxref("RTCCodecStats")}}-Wörterbuchs ist ein String, der die eindeutige Kennung des entsprechenden Transports enthält, über den dieser Codec verwendet wird.

Sie können die Codec- und zugehörigen Transportstatistiken korrelieren, indem Sie die `RTCCodecStats.transportId` mit einem {{domxref("RTCTransportStats.id")}}-Wert abgleichen.

## Wert

Ein String, der ein entsprechendes {{domxref("RTCTransportStats")}}-Objekt eindeutig durch seine `id` identifiziert.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

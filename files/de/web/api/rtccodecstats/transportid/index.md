---
title: "RTCCodecStats: transportId-Eigenschaft"
short-title: transportId
slug: Web/API/RTCCodecStats/transportId
l10n:
  sourceCommit: 667d3fc3409c0524a1fb97a7f3d784606d12f48d
---

{{APIRef("WebRTC")}}

Die **`transportId`**-Eigenschaft des [`RTCCodecStats`](/de/docs/Web/API/RTCCodecStats) Wörterbuchs ist ein String, der die eindeutige Kennung des entsprechenden Transports enthält, auf dem dieses Codec verwendet wird.

Sie können die Codec- und zugehörigen Transportstatistiken korrelieren, indem Sie die `RTCCodecStats.transportId` mit einem [`RTCTransportStats.id`](/de/docs/Web/API/RTCTransportStats/id)-Wert abgleichen.

## Wert

Ein String, der ein passendes [`RTCTransportStats`](/de/docs/Web/API/RTCTransportStats) Objekt eindeutig anhand ihrer `id` identifiziert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCRemoteInboundRtpStreamStats: codecId-Eigenschaft"
short-title: codecId
slug: Web/API/RTCRemoteInboundRtpStreamStats/codecId
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebRTC")}}

Die **`codecId`**-Eigenschaft des {{domxref("RTCRemoteInboundRtpStreamStats")}} Wörterbuchs ist ein String, der das Objekt eindeutig identifiziert, das inspiziert wurde, um die Daten im {{domxref("RTCCodecStats")}} für den {{Glossary("RTP")}}-Stream zu erzeugen.

`RTCRemoteInboundRtpStreamStats` und `RTCCodecStats` Objekte werden durch Iterieren des {{domxref("RTCStatsReport")}} korreliert, um die Statistikobjekte zu finden, bei denen `RTCRemoteInboundRtpStreamStats.codecId` gleich {{domxref("RTCCodecStats.id")}} ist.

## Wert

Ein String, der die {{domxref("RTCCodecStats.id","id")}} des Objekts enthält, das inspiziert wurde, um das {{domxref("RTCCodecStats")}} Objekt zu erzeugen, das mit diesem RTP-Stream verbunden ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

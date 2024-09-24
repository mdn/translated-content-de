---
title: "RTCDataChannelStats: Eigenschaft bytesSent"
short-title: bytesSent
slug: Web/API/RTCDataChannelStats/bytesSent
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`bytesSent`**-Eigenschaft des {{domxref("RTCDataChannelStats")}}-Wörterbuchs gibt die Gesamtzahl der Payload-Bytes zurück, die über den zugehörigen {{domxref("RTCDataChannel")}} gesendet wurden.

Beachten Sie, dass Nicht-Payload-Bytes, wie diejenigen für Rahmenbildung und in Headern, nicht eingeschlossen sind.

## Wert

Ein positiver ganzzahliger Wert, der die Gesamtzahl der über den zugehörigen Datenkanal gesendeten Payload-Bytes angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCDataChannel")}}

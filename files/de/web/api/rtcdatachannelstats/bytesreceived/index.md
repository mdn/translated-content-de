---
title: "RTCDataChannelStats: bytesReceived-Eigenschaft"
short-title: bytesReceived
slug: Web/API/RTCDataChannelStats/bytesReceived
l10n:
  sourceCommit: 7e6058c754c6d38bc15a16cf8e65f1e31139f05b
---

{{APIRef("WebRTC")}}

Die **`bytesReceived`**-Eigenschaft des {{domxref("RTCDataChannelStats")}}-Wörterbuchs gibt die Gesamtanzahl der Nutzlast-Bytes zurück, die über den zugehörigen {{domxref("RTCDataChannel")}} empfangen wurden.

Beachten Sie, dass nicht zur Nutzlast gehörende Bytes, wie diejenigen für die Rahmenbildung und in Headern, nicht enthalten sind.

## Wert

Ein positiver Ganzzahlwert, der die Gesamtanzahl der auf dem zugehörigen Datenkanal empfangenen Nutzlast-Bytes angibt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCDataChannel")}}

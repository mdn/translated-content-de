---
title: "RTCDataChannel: maxPacketLifeTime-Eigenschaft"
short-title: maxPacketLifeTime
slug: Web/API/RTCDataChannel/maxPacketLifeTime
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`maxPacketLifeTime`** gibt die Zeit in Millisekunden an, die dem Browser erlaubt ist, um zu versuchen, eine Nachricht zu übertragen, wie beim Erstellen des Datenkanals festgelegt, oder `null`. Dies begrenzt, wie lange der Browser versuchen kann, die Nachricht zu übertragen und erneut zu übertragen, bevor er aufgibt.

## Wert

Die Anzahl der Millisekunden, über die der Browser weiterhin versuchen kann, die Nachricht zu übertragen, bis er entweder Erfolg hat oder aufgibt. Wenn diese Eigenschaft nicht festgelegt wurde, als [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) aufgerufen wurde, um den Datenkanal zu erstellen, ist dieser Wert `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.maxRetransmits`](/de/docs/Web/API/RTCDataChannel/maxRetransmits)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)

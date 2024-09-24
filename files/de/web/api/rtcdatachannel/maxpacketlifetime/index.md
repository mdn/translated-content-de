---
title: "RTCDataChannel: maxPacketLifeTime-Eigenschaft"
short-title: maxPacketLifeTime
slug: Web/API/RTCDataChannel/maxPacketLifeTime
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`maxPacketLifeTime`** gibt die Anzahl der Millisekunden zurück, die der Browser maximal Zeit hat, um den Versuch zu unternehmen, eine Nachricht zu übertragen, wie beim Erstellen des Datenkanals festgelegt, oder `null`. Dies begrenzt, wie lange der Browser versucht, die Nachricht zu übertragen und erneut zu übermitteln, bevor er aufgibt.

## Wert

Die Anzahl der Millisekunden, über die der Browser weiterhin versucht, die Nachricht zu übertragen, bis es entweder gelingt oder aufgegeben wird. Wenn dieser Wert bei dem Aufruf von {{domxref("RTCPeerConnection.createDataChannel()")}} zur Erstellung des Datenkanals nicht gesetzt wurde, ist dieser Wert `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.maxRetransmits")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}

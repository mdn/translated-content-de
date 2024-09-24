---
title: "RTCDataChannel: maxRetransmits-Eigenschaft"
short-title: maxRetransmits
slug: Web/API/RTCDataChannel/maxRetransmits
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`maxRetransmits`** gibt die maximale Anzahl an, wie oft der
Browser versuchen soll, eine Nachricht neu zu übertragen, bevor er aufgibt, wie bei der Erstellung des Datenkanals festgelegt, oder `null`, was anzeigt, dass es kein Maximum gibt. Dies kann nur festgelegt werden, wenn das {{domxref("RTCDataChannel")}} durch den Aufruf von {{domxref("RTCPeerConnection.createDataChannel()")}} erstellt wird, unter Verwendung des `maxRetransmits`-Felds in den angegebenen `options`.

## Wert

Die maximale Anzahl, wie oft der Browser versuchen wird, eine Nachricht neu zu übertragen, bevor er aufgibt, oder `null`, wenn nicht festgelegt, als
{{domxref("RTCPeerConnection.createDataChannel()")}} aufgerufen wurde. Der Standardwert ist
`null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCDataChannel.maxPacketLifetime")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}

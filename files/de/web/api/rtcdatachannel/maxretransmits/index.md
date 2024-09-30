---
title: "RTCDataChannel: Eigenschaft maxRetransmits"
short-title: maxRetransmits
slug: Web/API/RTCDataChannel/maxRetransmits
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`maxRetransmits`** gibt an, wie oft der Browser versuchen soll, eine Nachricht erneut zu übertragen, bevor er aufgibt, so wie es bei der Erstellung des Datenkanals festgelegt wurde, oder `null`, was anzeigt, dass es kein Maximum gibt. Dies kann nur festgelegt werden, wenn der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch Aufrufen von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wird, unter Verwendung des `maxRetransmits`-Feldes in den angegebenen `options`.

## Wert

Die maximale Anzahl von Versuchen, die der Browser unternehmen wird, um eine Nachricht erneut zu übertragen, bevor er aufgibt, oder `null`, wenn dies beim Aufruf von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) nicht festgelegt wurde. Der Standardwert ist `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.maxPacketLifetime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifetime)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)

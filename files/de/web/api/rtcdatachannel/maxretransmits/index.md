---
title: "RTCDataChannel: maxRetransmits-Eigenschaft"
short-title: maxRetransmits
slug: Web/API/RTCDataChannel/maxRetransmits
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`maxRetransmits`** gibt die maximale Anzahl von Wiederholungsversuchen an, die der Browser unternehmen sollte, um eine Nachricht erneut zu senden, bevor er aufgibt, wie sie beim Erstellen des Datenkanals festgelegt wurde, oder `null`, was anzeigt, dass es kein Maximum gibt. Dies kann nur festgelegt werden, wenn das [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) durch den Aufruf von [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) erstellt wird, unter Verwendung des `maxRetransmits`-Feldes in den angegebenen `options`.

## Wert

Die maximale Anzahl von Wiederholungsversuchen, die der Browser unternehmen wird, um eine Nachricht erneut zu senden, bevor er aufgibt, oder `null`, wenn dies bei Aufruf von
[`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) nicht festgelegt wurde. Der Standardwert ist `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCDataChannel.maxPacketLifetime`](/de/docs/Web/API/RTCDataChannel/maxPacketLifetime)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)

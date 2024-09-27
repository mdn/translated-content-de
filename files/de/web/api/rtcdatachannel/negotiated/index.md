---
title: "RTCDataChannel: negotiated Eigenschaft"
short-title: negotiated
slug: Web/API/RTCDataChannel/negotiated
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`negotiated`** zeigt an, ob die
Verbindung des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) von der Web-App
(`true`) oder durch die WebRTC-Schicht (`false`) ausgehandelt wurde. **Der
Standardwert ist `false`.**

Weitere Informationen zu dieser Eigenschaft finden Sie unter [Erstellen eines Datenkanals](/de/docs/Web/API/WebRTC_API/Using_data_channels#creating_a_data_channel).

## Wert

`true`, wenn die Verbindung des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) von der
Web-App selbst ausgehandelt wurde; `false`, wenn die Aushandlung von der WebRTC-
Schicht durchgeführt wurde. Der Standardwert ist `false`.

## Beispiel

Das folgende Code-Snippet überprüft den Wert von `negotiated`; wenn er
`true` ist, wird eine Funktion namens `shutdownRemoteChannel()`
mit der [`id`](/de/docs/Web/API/RTCDataChannel/id) des Kanals aufgerufen; vermutlich würde dies
implementiert werden, um ein Abschaltsignal an den entfernten Peer zu senden, bevor die
Verbindung beendet wird.

```js
if (dataChannel.negotiated) {
  shutdownRemoteChannel(dataChannel.id);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)

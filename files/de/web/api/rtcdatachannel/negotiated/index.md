---
title: "RTCDataChannel: negotiated-Eigenschaft"
short-title: negotiated
slug: Web/API/RTCDataChannel/negotiated
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft
**`negotiated`** gibt an, ob die Verbindung des
[`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) von der Web-Anwendung
(`true`) oder von der WebRTC-Schicht (`false`) ausgehandelt wurde. **Der
Standardwert ist `false`.**

Für weitere Informationen zu dieser Eigenschaft siehe [Erstellen eines Datenkanals](/de/docs/Web/API/WebRTC_API/Using_data_channels#creating_a_data_channel).

## Wert

`true`, wenn die Verbindung des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) von der
Web-Anwendung selbst ausgehandelt wurde; `false`, wenn die Aushandlung von der
WebRTC-Schicht durchgeführt wurde. Der Standardwert ist `false`.

## Beispiel

Das folgende Codebeispiel überprüft den Wert von `negotiated`; falls dieser
`true` ist, wird eine Funktion namens `shutdownRemoteChannel()`
aufgerufen, die mit der [`id`](/de/docs/Web/API/RTCDataChannel/id) des Kanals versehen wird; vermutlich würde diese Funktion implementiert werden, um ein Abschaltsignal an den entfernten Teilnehmer zu übermitteln, bevor die
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

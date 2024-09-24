---
title: "RTCDataChannel: negotiated-Eigenschaft"
short-title: negotiated
slug: Web/API/RTCDataChannel/negotiated
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte `RTCDataChannel`-Eigenschaft **`negotiated`** gibt an, ob die Verbindung des {{domxref("RTCDataChannel")}} von der Web-App (`true`) oder durch die WebRTC-Schicht (`false`) ausgehandelt wurde. **Der Standardwert ist `false`.**

Weitere Informationen zu dieser Eigenschaft finden Sie unter [Erstellen eines Datenkanals](/de/docs/Web/API/WebRTC_API/Using_data_channels#creating_a_data_channel).

## Wert

`true`, wenn die Verbindung des {{domxref("RTCDataChannel")}} von der Web-App selbst ausgehandelt wurde; `false`, wenn die Aushandlung durch die WebRTC-Schicht erfolgt. Der Standardwert ist `false`.

## Beispiel

Im folgenden Codebeispiel wird der Wert von `negotiated` überprüft; wenn er `true` ist, wird eine Funktion namens `shutdownRemoteChannel()` mit der {{domxref("RTCDataChannel.id", "id")}} des Kanals aufgerufen; vermutlich wird dies implementiert, um vor der Beendigung der Verbindung ein Herunterfahrsignal an den entfernten Peer zu senden.

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
- {{domxref("RTCDataChannel")}}
- {{domxref("RTCPeerConnection.createDataChannel()")}}

---
title: "RTCPeerConnection: getReceivers()-Methode"
short-title: getReceivers()
slug: Web/API/RTCPeerConnection/getReceivers
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getReceivers()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen RTP-Empfänger darstellt. Jeder RTP-Empfänger verwaltet den Empfang und das Dekodieren von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Syntax

```js-nolint
getReceivers()
```

### Rückgabewert

Ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten, eines für jeden Track auf der Verbindung. Das Array ist leer, wenn es keine RTP-Empfänger auf der Verbindung gibt.

Die Reihenfolge der zurückgegebenen `RTCRtpReceiver`-Instanzen ist in der Spezifikation nicht festgelegt und kann sich von einem Aufruf von `getReceivers()` zum nächsten ändern.

Das Array enthält keine Empfänger, die mit Transceivern verbunden sind, die gestoppt wurden (nach dem Offer/Answer-Prozess).

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)

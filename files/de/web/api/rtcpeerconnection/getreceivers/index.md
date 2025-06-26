---
title: "RTCPeerConnection: getReceivers()-Methode"
short-title: getReceivers()
slug: Web/API/RTCPeerConnection/getReceivers
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`getReceivers()`**-Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten zurück, von denen jedes einen RTP-Empfänger repräsentiert.
Jeder RTP-Empfänger verwaltet den Empfang und die Dekodierung von Daten für ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

## Syntax

```js-nolint
getReceivers()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekten, eines für jeden Track auf der Verbindung.
Das Array ist leer, wenn es keine RTP-Empfänger auf der Verbindung gibt.

Die Reihenfolge der zurückgegebenen `RTCRtpReceiver`-Instanzen ist in der Spezifikation nicht definiert und kann sich bei aufeinanderfolgenden Aufrufen von `getReceivers()` ändern.

Das Array enthält keine Empfänger, die mit Transceivern verbunden sind, die [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach einer Offer/Answer).

## Beispiel

noch ausstehend

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)

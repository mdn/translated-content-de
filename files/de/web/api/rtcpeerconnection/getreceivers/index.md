---
title: "RTCPeerConnection: Methode getReceivers()"
short-title: getReceivers()
slug: Web/API/RTCPeerConnection/getReceivers
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getReceivers()`**-Methode der Schnittstelle {{domxref("RTCPeerConnection")}} gibt ein Array von {{domxref("RTCRtpReceiver")}}-Objekten zurück, von denen jedes einen RTP-Empfänger repräsentiert.
Jeder RTP-Empfänger verwaltet den Empfang und die Dekodierung von Daten für ein {{domxref("MediaStreamTrack")}} auf einer {{domxref("RTCPeerConnection")}}.

## Syntax

```js-nolint
getReceivers()
```

### Rückgabewert

Ein Array von {{domxref("RTCRtpReceiver")}}-Objekten, jeweils eines für jede Spur auf der Verbindung.
Das Array ist leer, wenn keine RTP-Empfänger auf der Verbindung vorhanden sind.

Die Reihenfolge der zurückgegebenen `RTCRtpReceiver`-Instanzen ist in der Spezifikation nicht definiert und kann sich von einem Aufruf der `getReceivers()`-Methode zum nächsten ändern.

Das Array enthält keine Empfänger, die mit Transceivern verknüpft sind, die gestoppt wurden (nach dem Angebot/Antwort-Prinzip).

## Beispiel

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- {{domxref("RTCRtpSender")}}

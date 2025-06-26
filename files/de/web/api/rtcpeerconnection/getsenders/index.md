---
title: "RTCPeerConnection: getSenders() Methode"
short-title: getSenders()
slug: Web/API/RTCPeerConnection/getSenders
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("WebRTC")}}

Die **`getSenders()`** Methode der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Schnittstelle gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekten zurück, von denen jedes den RTP-Sender repräsentiert, der für die Übertragung der Daten eines Tracks verantwortlich ist.
Ein Sender-Objekt bietet Methoden und Eigenschaften zur Überprüfung und Steuerung der Kodierung und Übertragung der Track-Daten.

## Syntax

```js-nolint
getSenders()
```

### Parameter

Keine.

### Rückgabewert

Ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) Objekten, eines für jeden Track in der Verbindung.
Das Array ist leer, wenn keine RTP-Sender in der Verbindung vorhanden sind.

Die Reihenfolge der zurückgegebenen `RTCRtpSender` Instanzen ist durch die Spezifikation nicht definiert und kann sich von einem Aufruf von `getSenders()` zum nächsten ändern.

Das Array enthält keine Sender, die mit Transceivern verknüpft sind, die [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach Angebot/Antwort).

## Beispiel

In diesem Beispiel wird eine `setMuting()` Funktion gezeigt.
Diese Funktion nimmt eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und einen Booleschen Wert, `muting`, als Eingabe. Die Funktion erhält die Liste der Sender der Peer-Verbindung und iteriert über jeden Sender, wobei sie den entsprechenden Medien-Track auf [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled) auf das Inverse des angegebenen `muting` setzt.

```js
function setMuting(pc, muting) {
  let senderList = pc.getSenders();

  senderList.forEach((sender) => {
    sender.track.enabled = !muting;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)

---
title: "RTCPeerConnection: Methode getSenders()"
short-title: getSenders()
slug: Web/API/RTCPeerConnection/getSenders
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getSenders()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces gibt ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten zurück, von denen jedes den RTP-Sender repräsentiert, der für die Übertragung der Daten eines Tracks verantwortlich ist. Ein Sender-Objekt stellt Methoden und Eigenschaften zur Verfügung, um die Kodierung und Übertragung der Daten des Tracks zu untersuchen und zu steuern.

## Syntax

```js-nolint
getSenders()
```

### Rückgabewert

Ein Array von [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekten, eines für jeden Track in der Verbindung. Das Array ist leer, wenn keine RTP-Sender in der Verbindung vorhanden sind.

Die Reihenfolge der zurückgegebenen `RTCRtpSender`-Instanzen ist in der Spezifikation nicht definiert und kann sich von einem Aufruf von `getSenders()` zum nächsten ändern.

Das Array umfasst keine Sender, die mit Transceivern verbunden sind, die [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (im Anschluss an Angebot/Antwort).

## Beispiel

In diesem Beispiel wird eine `setMuting()`-Funktion gezeigt. Diese Funktion nimmt als Eingabe eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), `pc`, und einen Boolean, `muting`. Die Funktion erhält die Liste der Sender der Peer-Verbindung und iteriert über jeden Sender, um die entsprechende Medientrack-`enabled`-Eigenschaft auf das inverse der angegebenen `muting` einzustellen.

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

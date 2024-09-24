---
title: "RTCPeerConnection: getSenders()-Methode"
short-title: getSenders()
slug: Web/API/RTCPeerConnection/getSenders
l10n:
  sourceCommit: 9f18116c362265a3dfb65185728548ec43cd12f4
---

{{APIRef("WebRTC")}}

Die **`getSenders()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt ein Array von {{domxref("RTCRtpSender")}}-Objekten zurück, von denen jedes den RTP-Sender repräsentiert, der für die Übertragung der Daten eines Tracks verantwortlich ist. Ein Senderobjekt bietet Methoden und Eigenschaften zum Überprüfen und Steuern der Kodierung und Übertragung der Trackdaten.

## Syntax

```js-nolint
getSenders()
```

### Rückgabewert

Ein Array von {{domxref("RTCRtpSender")}}-Objekten, eines für jeden Track in der Verbindung. Das Array ist leer, wenn es keine RTP-Sender in der Verbindung gibt.

Die Reihenfolge der zurückgegebenen `RTCRtpSender`-Instanzen wird nicht von der Spezifikation definiert und kann sich von einem Aufruf von `getSenders()` zum nächsten ändern.

Das Array schließt keine Sender ein, die Transceivern zugeordnet sind, die [gestoppt](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) wurden (nach Angebot/Antwort).

## Beispiel

In diesem Beispiel wird eine `setMuting()`-Funktion gezeigt. Diese Funktion nimmt als Eingabe eine {{domxref("RTCPeerConnection")}}, `pc`, und ein Boolean, `muting`. Die Funktion erhält die Liste der Sender der Peer-Verbindung und iteriert über jeden Sender, um die entsprechende Medien-Track-{{domxref("MediaStreamTrack.enabled", "enabled")}}-Eigenschaft auf das inverse `muting` zu setzen.

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
- {{domxref("RTCRtpSender")}}

---
title: "RTCRtpTransceiver: direction-Eigenschaft"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`direction`** von [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ist ein String, der die _bevorzugte_ Richtung des Transceivers angibt.

Die Richtung gibt an, ob der Transceiver anbietet, {{Glossary("RTP", "RTP")}}-Daten zu senden und/oder zu empfangen, oder ob er inaktiv oder gestoppt (beendet) ist.
Wenn Sie die Richtung des Transceivers festlegen, wird der Wert nicht sofort angewendet.
Die _aktuelle_ Richtung wird durch die Eigenschaft [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) angegeben.

## Wert

Ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Der Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und tut dies, wenn der entfernte Peer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und tut dies, wenn der entfernte Peer akzeptiert.
- `"sendonly"`
  - : Der Transceiver bietet an, RTP-Daten zu senden, aber nicht zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und tut dies, wenn der entfernte Peer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und empfängt sie auch nicht.
- `"recvonly"`
  - : Der Transceiver bietet an, RTP-Daten zu empfangen, aber nicht zu senden:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und sendet sie auch nicht.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und tut dies, wenn der entfernte Peer dies anbietet.
- `"inactive"`
  - : Der Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und sendet sie auch nicht.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und empfängt sie auch nicht.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers.
    Der Transceiver ist gestoppt und sendet oder empfängt keine RTP-Daten mehr; er bietet dies auch nicht mehr an.
    Wenn Sie diesen Wert festlegen, obwohl der Transceiver noch nicht gestoppt ist, wird ein `TypeError` ausgelöst.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und sendet sie auch nicht.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und empfängt sie auch nicht.

### Ausnahmen

Beim Festlegen des Werts von `direction` können folgende Ausnahmen auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Receivers ist geschlossen oder der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist gestoppt.
- {{jsxref("TypeError")}}
  - : Der Wert wird auf `stopped` gesetzt, obwohl der aktuelle Wert nicht `stopped` ist.

## Beschreibung

Mit der Eigenschaft **`direction`** können Sie die _bevorzugte_ Richtung des Transceivers festlegen oder abrufen.

Eine Änderung der Richtung wird nicht sofort wirksam.
Wenn sich der neue Wert von `direction` vom bisherigen Wert unterscheidet, muss die Verbindung neu ausgehandelt werden. Daher wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet.
Ein `direction`-Wert (außer `stopped`) wird anschließend von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet, um die von diesen Methoden erzeugte {{Glossary("SDP", "SDP")}}-Nachricht zu erstellen.
Wenn `direction` beispielsweise als `"sendrecv"` angegeben ist, gibt die entsprechende SDP-a-Zeile die Richtung an:

```plain
a=sendrecv
```

Die neue Richtung wird wirksam, sobald der Aushandlungsprozess abgeschlossen und die neue Sitzungsbeschreibung erfolgreich angewendet wurde.

Die _aktuelle_ Richtung des Transceivers wird durch die Eigenschaft [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) angegeben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)

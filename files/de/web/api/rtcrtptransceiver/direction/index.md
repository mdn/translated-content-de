---
title: "RTCRtpTransceiver: direction-Eigenschaft"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Eigenschaft **`direction`** ist ein String, der die _bevorzugte_ Richtungsangabe des Transceivers angibt.

Die Richtungsangabe zeigt an, ob der Transceiver anbietet, [RTP](/de/docs/Glossary/RTP)-Daten zu senden und/oder zu empfangen, oder ob er inaktiv oder gestoppt (beendet) ist.
Beim Setzen der Richtung des Transceivers wird der Wert nicht sofort angewendet.
Die _aktuelle_ Richtung wird durch die [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)-Eigenschaft angezeigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und wird dies tun, wenn der entfernte Peer die Verbindung akzeptiert und mindestens eine der Codierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und tut dies, wenn der entfernte Peer es akzeptiert.
- `"sendonly"`
  - : Transceiver bietet nur an, RTP-Daten zu senden:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und wird dies tun, wenn der entfernte Peer die Verbindung akzeptiert und mindestens eine der Codierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und wird dies nicht tun.
- `"recvonly"`
  - : Transceiver bietet an, aber setzt keine RTP-Daten, zu empfangen:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und wird dies tun, wenn der entfernte Peer es anbietet.
- `"inactive"`
  - : Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und wird dies nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers.
    Der Transceiver ist gestoppt und wird weder RTP-Daten senden noch empfangen oder anbieten, dies zu tun.
    Das Setzen dieses Wertes, wenn der Transceiver nicht bereits gestoppt ist, löst einen `TypeError` aus.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und wird dies nicht tun.

### Ausnahmen

Beim Setzen des Wertes von `direction` kann die folgende Ausnahme auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers ist geschlossen oder der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist gestoppt.
- `TypeError`
  - : Der Wert wird auf `stopped` gesetzt, wenn der aktuelle Wert etwas anderes als `stopped` ist.

## Beschreibung

Mit der **`direction`**-Eigenschaft kann die _bevorzugte_ Richtungsangabe des Transceivers gesetzt oder abgerufen werden.

Eine Aktualisierung der Richtungsangabe tritt nicht sofort in Kraft.
Wenn der neue Wert von `direction` sich vom bestehenden Wert unterscheidet, ist eine Neuverhandlung der Verbindung erforderlich, sodass ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird.
Ein `direction`-Wert (außer `stopped`) wird dann von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet, um die von diesen Methoden erstellte [SDP](/de/docs/Glossary/SDP)-Nachricht zu generieren.
Wenn zum Beispiel die `direction` als `"sendrecv"` angegeben ist, zeigt die entsprechende SDP a-line die Richtungsangabe an:

```plain
a=sendrecv
```

Die neue Richtungsangabe tritt in Kraft, sobald der Verhandlungsprozess abgeschlossen ist und die neue Sitzungsbeschreibung erfolgreich angewendet wurde.

Die _aktuelle_ Richtung des Transceivers wird durch die [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)-Eigenschaft angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)

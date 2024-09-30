---
title: "RTCRtpTransceiver: direction-Eigenschaft"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`direction`** des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ist ein String, der die _bevorzugte_ Richtung des Transceivers angibt.

Die Richtung gibt an, ob der Transceiver anbietet, [RTP](/de/docs/Glossary/RTP)-Daten zu senden und/oder zu empfangen oder ob er inaktiv oder gestoppt (beendet) ist. Wenn die Richtung des Transceivers festgelegt wird, wird der Wert nicht sofort angewendet. Die _aktuelle_ Richtung wird durch die Eigenschaft [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) angegeben.

## Wert

Ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden und wird dies tun, wenn der entfernte Peers die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen und tut dies, wenn der entfernte Peers zustimmt.
- `"sendonly"`
  - : Transceiver bietet an, RTP-Daten nur zu senden, aber nicht zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden und wird dies tun, wenn der entfernte Peers die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies auch nicht tun.
- `"recvonly"`
  - : Transceiver bietet an, RTP-Daten zu empfangen, aber nicht zu senden:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies auch nicht tun.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen und wird dies tun, wenn der entfernte Peers dies anbietet.
- `"inactive"`
  - : Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies auch nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies auch nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers. Der Transceiver ist gestoppt und wird keine RTP-Daten senden oder empfangen oder dies anbieten. Das Festlegen dieses Werts, wenn der Transceiver noch nicht gestoppt ist, führt zu einem `TypeError`.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies auch nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies auch nicht tun.

### Ausnahmen

Beim Setzen des Werts von `direction` kann die folgende Ausnahme auftreten:

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Receiver ist geschlossen oder der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) ist gestoppt.
- `TypeError`
  - : Der Wert wird auf `stopped` gesetzt, wenn der aktuelle Wert etwas anderes als `stopped` ist.

## Beschreibung

Die **`direction`**-Eigenschaft kann verwendet werden, um die _bevorzugte_ Richtung des Transceivers festzulegen oder abzurufen.

Die Aktualisierung der Richtung tritt nicht sofort in Kraft. Wenn der neue Wert von `direction` von dem bestehenden Wert abweicht, ist eine Neuverhandlung der Verbindung erforderlich, sodass ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird. Ein `direction`-Wert (außer `stopped`) wird dann von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) oder [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) verwendet, um die [SDP](/de/docs/Glossary/SDP)-Nachricht zu erzeugen, die durch diese Methoden erstellt wird. Zum Beispiel, wenn die `direction` als `"sendrecv"` angegeben ist, gibt die entsprechende SDP a-Zeile die Richtung an:

```plain
a=sendrecv
```

Die neue Richtung tritt in Kraft, sobald der Verhandlungsprozess abgeschlossen und die neue Sitzungsbeschreibung erfolgreich angewendet wurde.

Die _aktuelle_ Richtung des Transceivers wird durch die Eigenschaft [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)

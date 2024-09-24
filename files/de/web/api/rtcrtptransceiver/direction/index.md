---
title: "RTCRtpTransceiver: Property direction"
short-title: direction
slug: Web/API/RTCRtpTransceiver/direction
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die Eigenschaft **`direction`** des {{domxref("RTCRtpTransceiver")}} ist ein String, der die _bevorzugte_ Ausrichtung des Transceivers angibt.

Die Ausrichtung gibt an, ob der Transceiver anbieten wird, {{Glossary("RTP")}}-Daten zu senden und/oder zu empfangen, oder ob er inaktiv oder gestoppt (beendet) ist. Wenn Sie die Richtung des Transceivers festlegen, wird der Wert nicht sofort angewendet. Die _aktuelle_ Richtung wird durch die Eigenschaft {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} angezeigt.

## Wert

Ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und tut dies, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Codierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und tut dies, wenn der Remote-Peer dies akzeptiert.
- `"sendonly"`
  - : Transceiver bietet an, RTP-Daten zu senden, aber nicht zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und tut dies, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Codierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.
- `"recvonly"`
  - : Transceiver bietet an, RTP-Daten zu empfangen, aber nicht zu senden:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und wird dies tun, wenn der Remote-Peer dies anbietet.
- `"inactive"`
  - : Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und wird dies nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers. Der Transceiver ist gestoppt und wird keine RTP-Daten senden oder empfangen oder dies anbieten. Wenn dieser Wert gesetzt wird, während der Transceiver nicht bereits gestoppt ist, wird ein `TypeError` ausgelöst.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen, und wird dies nicht tun.

### Ausnahmen

Beim Setzen des Wertes von `direction` kann die folgende Ausnahme auftreten:

- `InvalidStateError` {{domxref("DOMException")}}
  - : Der Empfänger des {{domxref("RTCPeerConnection")}} ist geschlossen oder der {{domxref("RTCRtpReceiver")}} ist gestoppt.
- `TypeError`
  - : Der Wert wird auf `stopped` gesetzt, obwohl der aktuelle Wert etwas anderes als `stopped` ist.

## Beschreibung

Die **`direction`**-Eigenschaft kann verwendet werden, um die _bevorzugte_ Ausrichtung des Transceivers festzulegen oder abzufragen.

Die Aktualisierung der Ausrichtung tritt nicht sofort in Kraft. Wenn der neue Wert von `direction` sich vom bestehenden Wert unterscheidet, ist eine Neuaushandlung der Verbindung erforderlich, sodass ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis an den {{domxref("RTCPeerConnection")}} gesendet wird. Ein `direction`-Wert (außer `stopped`) wird dann von {{domxref("RTCPeerConnection.createOffer()")}} oder {{domxref("RTCPeerConnection.createAnswer()")}} verwendet, um die {{glossary("SDP")}}-Nachricht zu erzeugen, die mit diesen Methoden erstellt wird. Zum Beispiel, wenn `direction` als `"sendrecv"` angegeben ist, zeigt die entsprechende SDP a-Linie die Ausrichtung an:

```plain
a=sendrecv
```

Die neue Ausrichtung tritt in Kraft, sobald der Verhandlungsprozess abgeschlossen und die neue Sitzungsbeschreibung erfolgreich angewendet wurde.

Die _aktuelle_ Richtung des Transceivers wird durch die Eigenschaft {{domxref("RTCRtpTransceiver.currentDirection", "currentDirection")}} angezeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpTransceiver.currentDirection")}}

---
title: "RTCRtpTransceiver: currentDirection-Eigenschaft"
short-title: currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Eigenschaft **`currentDirection`** ist ein String, der die aktuell ausgehandelte Richtung des Transceivers angibt.

Die Richtung gibt an, ob der Transceiver anbietet, RTP-Daten zu senden und/oder zu empfangen oder ob er inaktiv oder gestoppt ist und keine Daten senden oder empfangen wird.

Die bevorzugte Richtung des Transceivers kann über die [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft festgelegt und gelesen werden. Eine Änderung der `direction` löst eine Neuverhandlung aus, die letztendlich auch zu einer Änderung der `currentDirection` führen kann.

## Wert

Der Wert ist zunächst `null`, vor der Aushandlung mittels eines Angebots/Antworts.

Nach der Aushandlung ist der Wert ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Der Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und wird dies tun, wenn der entfernte Teilnehmer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen und tut dies, wenn der entfernte Teilnehmer dies akzeptiert.
- `"sendonly"`
  - : Der Transceiver bietet an, RTP-Daten zu senden, aber nicht zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden, und wird dies tun, wenn der entfernte Teilnehmer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.
- `"recvonly"`
  - : Der Transceiver bietet an, RTP-Daten zu empfangen, aber nicht zu senden:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und wird dies tun, wenn der entfernte Teilnehmer dies anbietet.
- `"inactive"`
  - : Der Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers.
    Der Transceiver ist gestoppt und wird keine RTP-Daten senden oder empfangen oder dies anbieten.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden, und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)

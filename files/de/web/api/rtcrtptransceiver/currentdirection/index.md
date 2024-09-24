---
title: "RTCRtpTransceiver: Eigenschaft currentDirection"
short-title: currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte {{domxref("RTCRtpTransceiver")}}-Eigenschaft **`currentDirection`** ist ein String, der die derzeit ausgehandelte Richtungsorientierung des Transceivers anzeigt.

Die Richtungsorientierung gibt an, ob der Transceiver anbietet, {{Glossary("RTP")}}-Daten zu senden und/oder zu empfangen oder ob er inaktiv oder gestoppt ist und keine Daten senden oder empfangen wird.

Die bevorzugte Richtungsorientierung des Transceivers kann mithilfe der {{domxref("RTCRtpTransceiver.direction", "direction")}}-Eigenschaft festgelegt und gelesen werden. Eine Änderung der `direction` löst eine erneute Verhandlung aus, die möglicherweise dazu führt, dass sich auch die `currentDirection` ändert.

## Wert

Der Wert ist zunächst `null`, vor der Verhandlung mit einem Angebot/Antwort.

Nach der Verhandlung ist der Wert ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Transceiver bietet an, RTP-Daten zu senden und zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden und wird dies tun, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und tut dies, wenn der Remote-Peer akzeptiert.
- `"sendonly"`
  - : Transceiver bietet an, nur RTP-Daten zu senden, nicht zu empfangen:
    - `RTCRtpSender`: Bietet an, RTP-Daten zu senden und wird dies tun, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Encodings des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.
- `"recvonly"`
  - : Transceiver bietet an, nur RTP-Daten zu empfangen, nicht zu senden:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet an, RTP-Daten zu empfangen, und wird dies tun, wenn der Remote-Peer anbietet.
- `"inactive"`
  - : Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers.
    Der Transceiver ist gestoppt und wird keine RTP-Daten senden oder empfangen oder anbieten, dies zu tun.
    - `RTCRtpSender`: Bietet _nicht_ an, RTP-Daten zu senden und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ an, RTP-Daten zu empfangen und wird dies nicht tun.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("RTCRtpTransceiver.direction")}}

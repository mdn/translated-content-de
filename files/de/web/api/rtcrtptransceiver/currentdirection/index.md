---
title: "RTCRtpTransceiver: currentDirection-Eigenschaft"
short-title: currentDirection
slug: Web/API/RTCRtpTransceiver/currentDirection
l10n:
  sourceCommit: e83d6f0c25d2b4c1ce34638ef34a0536a7e0c91e
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`currentDirection`** des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) ist ein String, der die aktuell ausgehandelte Richtung des Transceivers anzeigt.

Die Richtung weist darauf hin, ob der Transceiver das Senden und/oder Empfangen von [RTP](/de/docs/Glossary/RTP)-Daten anbietet oder ob er inaktiv oder gestoppt ist und keine Daten senden oder empfangen wird.

Die bevorzugte Richtung des Transceivers kann mit der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft gesetzt und ausgelesen werden. Eine Änderung von `direction` löst eine Neuverhandlung aus, die möglicherweise dazu führt, dass sich auch `currentDirection` ändert.

## Wert

Der Wert ist anfänglich `null`, vor der Verhandlung mittels eines Angebots/Antworts.

Nach der Verhandlung ist der Wert ein String mit einem der folgenden Werte:

- `"sendrecv"`
  - : Transceiver bietet das Senden und Empfangen von RTP-Daten an:
    - `RTCRtpSender`: Bietet das Senden von RTP-Daten an und wird dies tun, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Kodierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet das Empfangen von RTP-Daten an und wird dies tun, wenn der Remote-Peer akzeptiert.
- `"sendonly"`
  - : Transceiver bietet das Senden, aber nicht das Empfangen von RTP-Daten an:
    - `RTCRtpSender`: Bietet das Senden von RTP-Daten an und wird dies tun, wenn der Remote-Peer die Verbindung akzeptiert und mindestens eine der Kodierungen des Senders aktiv ist.
    - `RTCRtpReceiver`: Bietet _nicht_ das Empfangen von RTP-Daten an und wird dies nicht tun.
- `"recvonly"`
  - : Transceiver bietet das Empfangen, aber nicht das Senden von RTP-Daten an:
    - `RTCRtpSender`: Bietet _nicht_ das Senden von RTP-Daten an und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet das Empfangen von RTP-Daten an und wird dies tun, wenn der Remote-Peer dies anbietet.
- `"inactive"`
  - : Transceiver ist inaktiv:
    - `RTCRtpSender`: Bietet _nicht_ das Senden von RTP-Daten an und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ das Empfangen von RTP-Daten an und wird dies nicht tun.
- `"stopped"`
  - : Dies ist der Endzustand des Transceivers.
    Der Transceiver ist gestoppt und wird keine RTP-Daten senden oder empfangen oder dies anbieten.
    - `RTCRtpSender`: Bietet _nicht_ das Senden von RTP-Daten an und wird dies nicht tun.
    - `RTCRtpReceiver`: Bietet _nicht_ das Empfangen von RTP-Daten an und wird dies nicht tun.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`RTCRtpTransceiver.direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)

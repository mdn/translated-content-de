---
title: "RTCError: errorDetail-Eigenschaft"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`errorDetail`** des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces ist eine Zeichenkette, die den [WebRTC](/de/docs/Web/API/WebRTC_API)-spezifischen Fehlercode angibt, der aufgetreten ist.

## Wert

Eine schreibgeschützte Zeichenkette, deren Wert den Typ des WebRTC-spezifischen Fehlers angibt, der auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgetreten ist. Die möglichen Werte sind:

- `data-channel-failure`
  - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist ausgefallen.
- `dtls-failure`
  - : Die Aushandlung der [DTLS](/de/docs/Glossary/DTLS)-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, ist die Eigenschaft [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert) des Fehlerobjekts auf den Wert des empfangenen DTLS-Alarms gesetzt. Wenn hingegen ein schwerwiegender Fehler _gesendet_ wurde, ist [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert des Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt mit keinem der im SDP aufgelisteten Fingerprints überein. Wenn der entfernte Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerprints abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.
- `hardware-encoder-error`
  - : Der Hardware-Encoder unterstützt die gegebenen Konfigurationsparameter nicht.
- `hardware-encoder-not-available`
  - : Die für die Durchführung des angeforderten Vorgangs erforderlichen Ressourcen des Hardware-Encoders sind nicht verfügbar.
- `sctp-failure`
  - : Die [SCTP](/de/docs/Glossary/SCTP)-Aushandlung ist fehlgeschlagen, oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Der SCTP-Ursachencode kann im `RTCError`-Objekt in der Eigenschaft [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode) gefunden werden. SCTP-Fehlerursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : Die SDP-Syntax ist ungültig. Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlers gibt die Zeilennummer innerhalb des SDP an, bei der der Fehler erkannt wurde.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

---
title: "RTCError: errorDetail-Eigenschaft"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`errorDetail`**-Eigenschaft der Schnittstelle [`RTCError`](/de/docs/Web/API/RTCError) ist ein String, der den spezifischen Fehlercode des [WebRTC](/de/docs/Web/API/WebRTC_API) angibt, der aufgetreten ist.

## Wert

Ein schreibgeschützter String, dessen Wert den Typ des WebRTC-spezifischen Fehlers angibt, der auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgetreten ist. Die möglichen Werte sind:

- `data-channel-failure`
  - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist fehlgeschlagen.
- `dtls-failure`
  - : Die Aushandlung der [DTLS](/de/docs/Glossary/DTLS)-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Die [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers enthält Details zur Art des Fehlers. Wenn ein schwerwiegender Fehler _empfangen_ wird, wird die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alarms gesetzt. Wenn hingegen ein schwerwiegender Fehler _gesendet_ wurde, wird die [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert) auf den Wert des Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt mit keinem der im SDP aufgeführten Fingerabdrücke überein. Wenn der entfernte Partner das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl in diesem Fall stattdessen ein `dtls-failure`-Fehler auftreten kann.
- `hardware-encoder-error`
  - : Der Hardware-Encoder unterstützt die gegebenen Konfigurationsparameter nicht.
- `hardware-encoder-not-available`
  - : Die für die Durchführung der angeforderten Operation erforderlichen Hardware-Encoder-Ressourcen sind nicht verfügbar.
- `sctp-failure`
  - : Die [SCTP](/de/docs/Glossary/SCTP)-Aushandlung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet. Der SCTP-Ursachencode kann im `RTCError`-Objekt in der [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode)-Eigenschaft gefunden werden. SCTP-Fehlerursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : Die SDP-Syntax ist ungültig. Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlers gibt die Zeilennummer innerhalb der SDP an, bei der der Fehler entdeckt wurde.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

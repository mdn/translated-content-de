---
title: "RTCError: errorDetail-Eigenschaft"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`errorDetail`** Eigenschaft der [`RTCError`](/de/docs/Web/API/RTCError)-Schnittstelle ist ein String, der den spezifischen Fehlercode von [WebRTC](/de/docs/Web/API/WebRTC_API) angibt, der aufgetreten ist.

## Wert

Ein schreibgeschützter String, dessen Wert den Typ des spezifischen WebRTC-Fehlers angibt, der bei einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgetreten ist. Die möglichen Werte sind:

- `data-channel-failure`
  - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist fehlgeschlagen.
- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
    Die [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers enthält Details über die Art des Fehlers.
    Wenn ein schwerwiegender Fehler _empfangen_ wird, ist die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alarms gesetzt.
    Wenn hingegen ein schwerwiegender Fehler _gesendet_ wurde, ist die [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert)-Eigenschaft auf den Wert des gesendeten Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt mit keinem der in der {{Glossary("SDP", "SDP")}} aufgeführten Fingerabdrücke überein.
    Wenn der entfernte Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen kann.
- `hardware-encoder-error`
  - : Der Hardware-Encoder unterstützt die gegebenen Konfigurationsparameter nicht.
- `hardware-encoder-not-available`
  - : Die für die Durchführung der angeforderten Operation erforderlichen Ressourcen des Hardware-Encoders sind nicht verfügbar.
- `sctp-failure`
  - : Die Aushandlung von {{Glossary("SCTP", "SCTP")}} ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
    Der SCTP-Ursachencode kann in der [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode)-Eigenschaft des `RTCError`-Objekts gefunden werden.
    SCTP-Fehlerursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : Die SDP-Syntax ist ungültig.
    Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlers gibt die Zeilennummer der SDP-Nachricht an, in der der Fehler erkannt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

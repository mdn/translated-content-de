---
title: "RTCError: errorDetail-Eigenschaft"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

Die **`errorDetail`** schreibgeschützte Eigenschaft des [`RTCError`](/de/docs/Web/API/RTCError)-Interfaces ist ein String, der den WebRTC-spezifischen Fehlercode angibt, der aufgetreten ist.

## Wert

Ein schreibgeschützter String, dessen Wert den Typ des WebRTC-spezifischen Fehlers angibt, der auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufgetreten ist.
Die möglichen Werte sind:

- `data-channel-failure`
  - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist fehlgeschlagen.
- `dtls-failure`
  - : Die Verhandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
    Die [`message`](/de/docs/Web/API/DOMException/message)-Eigenschaft des Fehlers enthält Details zur Natur des Fehlers.
    Wenn ein schwerwiegender Fehler _empfangen_ wird, wird die [`receivedAlert`](/de/docs/Web/API/RTCError/receivedAlert)-Eigenschaft des Fehlerobjekts auf den Wert des empfangenen DTLS-Alarms gesetzt.
    Wenn hingegen ein schwerwiegender Fehler _gesendet_ wurde, wird die [`sentAlert`](/de/docs/Web/API/RTCError/sentAlert)-Eigenschaft auf den Wert des Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmt nicht mit einem der in der {{Glossary("SDP", "SDP")}} aufgelisteten Fingerabdrücke überein.
    Wenn das entfernte Gegenüber das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure`-Fehler führen könnte.
- `hardware-encoder-error`
  - : Der Hardware-Encoder unterstützt die gegebenen Konfigurationsparameter nicht.
- `hardware-encoder-not-available`
  - : Die zur Durchführung der angeforderten Operation erforderlichen Hardware-Encoder-Ressourcen sind nicht verfügbar.
- `sctp-failure`
  - : Die Verhandlung des {{Glossary("SCTP", "SCTP")}} ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
    Der SCTP-Ursachencode kann in der [`sctpCauseCode`](/de/docs/Web/API/RTCError/sctpCauseCode)-Eigenschaft des `RTCError`-Objekts gefunden werden.
    SCTP-Ursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : Die SDP-Syntax ist ungültig.
    Die [`sdpLineNumber`](/de/docs/Web/API/RTCError/sdpLineNumber)-Eigenschaft des Fehlers gibt die Zeilennummer der SDP-Nachricht an, bei der der Fehler erkannt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

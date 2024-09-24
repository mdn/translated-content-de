---
title: "RTCError: errorDetail-Eigenschaft"
short-title: errorDetail
slug: Web/API/RTCError/errorDetail
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`errorDetail`**-Eigenschaft des {{domxref("RTCError")}}-Interfaces ist ein String, der den WebRTC-spezifischen Fehlercode angibt, der aufgetreten ist.

## Wert

Ein schreibgeschützter String, dessen Wert den Typ des WebRTC-spezifischen Fehlers angibt, der bei einer {{domxref("RTCPeerConnection")}} aufgetreten ist. Die möglichen Werte sind:

- `data-channel-failure`
  - : Der {{domxref("RTCDataChannel")}} der Verbindung ist fehlgeschlagen.
- `dtls-failure`
  - : Die Aushandlung der {{Glossary("DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem fatalen Fehler beendet. Die {{domxref("DOMException.message", "message")}} des Fehlers enthält Details zur Art des Fehlers. Wenn ein fataler Fehler _empfangen_ wird, wird die Eigenschaft {{domxref("RTCError.receivedAlert", "receivedAlert")}} des Fehlerobjekts auf den Wert des empfangenen DTLSL-Alarms gesetzt. Wenn hingegen ein fataler Fehler _gesendet_ wurde, wird die {{domxref("RTCError.sentAlert", "sentAlert")}} auf den Wert des Alarms gesetzt.
- `fingerprint-failure`
  - : Das entfernte Zertifikat für den {{domxref("RTCDtlsTransport")}} stimmt mit keinem der im SDP aufgeführten Fingerabdrücke überein. Wenn das entfernte Gegenüber das lokale Zertifikat nicht mit den bereitgestellten Fingerabdrücken abgleichen kann, tritt dieser Fehler nicht auf, obwohl dies stattdessen zu einem `dtls-failure` Fehler führen kann.
- `hardware-encoder-error`
  - : Der Hardware-Encoder unterstützt die angegebenen Konfigurationsparameter nicht.
- `hardware-encoder-not-available`
  - : Die für den angeforderten Vorgang erforderlichen Ressourcen des Hardware-Encoders sind nicht verfügbar.
- `sctp-failure`
  - : Die Aushandlung von {{Glossary("SCTP")}} ist fehlgeschlagen oder die Verbindung wurde mit einem fatalen Fehler beendet. Der SCTP-Ursachencode kann im `RTCError`-Objekt in der {{domxref("RTCError.sctpCauseCode", "sctpCauseCode")}} gefunden werden. SCTP-Fehlerursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
- `sdp-syntax-error`
  - : Die SDP-Syntax ist ungültig. Die Eigenschaft {{domxref("RTCError.sdpLineNumber", "sdpLineNumber")}} des Fehlers gibt die Zeilennummer innerhalb des SDP an, bei der der Fehler erkannt wurde.

## Beispiele

tbd

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

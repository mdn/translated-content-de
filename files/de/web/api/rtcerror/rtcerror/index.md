---
title: "RTCError: RTCError() Konstruktor"
short-title: RTCError()
slug: Web/API/RTCError/RTCError
l10n:
  sourceCommit: 581220b4299dd4c44544f7c200440129067a9d9d
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCError()`** Konstruktor erstellt und gibt eine neue [`RTCError`](/de/docs/Web/API/RTCError) Objektinstanz zurück.

## Syntax

```js-nolint
new RTCError(options)
new RTCError(options, message)
```

### Parameter

- `options`
  - : Ein Objekt, das die Details des spezifischen Fehlers in einem `RTCErrorEvent` bereitstellt.
    Das Objekt hat die folgenden Eigenschaften:
    - `errorDetail`
      - : Ein String, der den WebRTC-spezifischen Fehlercode angibt, der den Typ des aufgetretenen Fehlers identifiziert.
        Dies wird eines der folgenden sein:
        - `data-channel-failure`
          - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist fehlgeschlagen.
        - `dtls-failure`
          - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem fatalen Fehler beendet.
            Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details zur Art des Fehlers.
            - Wenn ein fataler Fehler _empfangen_ wird, setzen Sie [`receivedAlert`](#receivedalert) auf den Wert des empfangenen DTLS-Alerts.
            - Wenn ein fataler Fehler _gesendet_ wurde, setzen Sie [`sentAlert`](#sentalert) auf den Wert des Alerts.
        - `fingerprint-failure`
          - : Das entfernte Zertifikat für den [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) entsprach keinem der in der {{Glossary("SDP", "SDP")}}-Nachricht aufgeführten Fingerprints.
            Sollte der entfernte Peer das lokale Zertifikat nicht mit den bereitgestellten Fingerprints abgleichen können, wird dieser Fehler nicht ausgelöst, kann jedoch stattdessen in einem `dtls-failure`-Fehler resultieren.
        - `hardware-encoder-error`
          - : Der Hardware-Encoder unterstützt die angegebenen Konfigurationsparameter nicht.
        - `hardware-encoder-not-available`
          - : Die Hardware-Encoder-Ressourcen, die erforderlich sind, um die angeforderte Operation auszuführen, sind nicht verfügbar.
        - `sctp-failure`
          - : Die {{Glossary("SCTP", "SCTP")}}-Aushandlung ist fehlgeschlagen oder die Verbindung wurde mit einem fatalen Fehler beendet.
            Der SCTP-Ursachencode sollte in [`sctpCauseCode`](#sctpcausecode) gesetzt werden.
            SCTP-Fehlerursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
        - `sdp-syntax-error`
          - : Die SDP-Syntax ist ungültig.
            Die SDP-Nachrichtenzeilennummer, bei der der Fehler entdeckt wurde, sollte in [`sdpLineNumber`](#sdplinenumber) gesetzt werden.

    - `receivedAlert` {{optional_inline}}
      - : Ein positiver Integer-Wert, der einen fatalen {{Glossary("DTLS", "DTLS")}}-Fehler anzeigt, der aus dem Netzwerk empfangen wurde.
        Nur gesetzt, wenn der `errorDetail`-String `dtls-failure` ist.

    - `sctpCauseCode` {{optional_inline}}
      - : Ein Integer, der den {{Glossary("SCTP", "SCTP")}}-Ursachencode spezifiziert, der die Ursache der fehlgeschlagenen SCTP-Aushandlung angibt.
        Sollte nur gesetzt werden, wenn `errorDetail` `sctp-failure` ist.

    - `sdpLineNumber` {{optional_inline}}
      - : Ein Integer, der die {{Glossary("SDP", "SDP")}}-Nachrichtenzeilennummer identifiziert, bei der ein Syntaxfehler aufgetreten ist.
        Nur gesetzt, wenn `errorDetail` `sdp-syntax-error` ist.
    - `sentAlert` {{optional_inline}}
      - : Ein positiver Integer, der einen fatalen DTLS-Fehler anzeigt, der von diesem Gerät gesendet wurde.
        Nur gesetzt, wenn `errorDetail` `dtls-failure` ist.

- `message` {{optional_inline}}
  - : Ein String für die Fehlermeldung.
    Standardmäßig ist dies der leere String (`""`).

### Rückgabewert

Eine neu erstellte [`RTCError`](/de/docs/Web/API/RTCError) Objektinstanz.

## Verwendungshinweise

Dieser Konstruktor führt keine vollständige Validierung des angegebenen `candidateInfo`-Objekts oder Strings durch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

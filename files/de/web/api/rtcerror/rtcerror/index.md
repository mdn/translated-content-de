---
title: "RTCError: RTCError() Konstruktor"
short-title: RTCError()
slug: Web/API/RTCError/RTCError
l10n:
  sourceCommit: e7f93b8ebd8b26bd6fae71f7b0b6214a671a4ef9
---

{{APIRef("WebRTC")}}

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
        Dies wird einer der folgenden sein:
        - `data-channel-failure`
          - : Der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) der Verbindung ist fehlgeschlagen.
        - `dtls-failure`
          - : Die Aushandlung der {{Glossary("DTLS", "DTLS")}}-Verbindung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
            Die [`message`](/de/docs/Web/API/DOMException/message) des Fehlers enthält Details über die Art des Fehlers.
            - Wenn ein schwerwiegender Fehler _empfangen_ wird, setzen Sie [`receivedAlert`](#receivedalert) auf den Wert des empfangenen DTLS-Alarms.
            - Wenn ein schwerwiegender Fehler _gesendet_ wurde, setzen Sie [`sentAlert`](#sentalert) auf den Wert des Alarms.
        - `fingerprint-failure`
          - : Das entfernte Zertifikat für das [`RTCDtlsTransport`](/de/docs/Web/API/RTCDtlsTransport) stimmte mit keinem der im {{Glossary("SDP", "SDP")}} Nachrichten aufgeführten Fingerprints überein.
            Wenn das entfernte Gegenüber das lokale Zertifikat nicht mit den bereitgestellten Fingerprints abgleichen kann, tritt dieser Fehler nicht auf, obwohl diese Situation stattdessen zu einem `dtls-failure` Fehler führen kann.
        - `hardware-encoder-error`
          - : Der Hardware-Encoder unterstützt die angegebenen Konfigurationsparameter nicht.
        - `hardware-encoder-not-available`
          - : Die für die angeforderte Operation erforderlichen Hardware-Encoder-Ressourcen sind nicht verfügbar.
        - `sctp-failure`
          - : Die {{Glossary("SCTP", "SCTP")}} Aushandlung ist fehlgeschlagen oder die Verbindung wurde mit einem schwerwiegenden Fehler beendet.
            Der SCTP-Ursachencode sollte in [`sctpCauseCode`](#sctpcausecode) gesetzt werden.
            SCTP-Ursachencodes 1-13 sind in der SCTP-Spezifikation definiert: {{RFC(4960, "", "3.3.10")}}.
        - `sdp-syntax-error`
          - : Die SDP-Syntax ist ungültig.
            Die SDP-Nachrichtenzeilennummer, bei der der Fehler entdeckt wurde, sollte in [`sdpLineNumber`](#sdplinenumber) gesetzt werden.

    - `receivedAlert` {{optional_inline}}
      - : Ein positiver Ganzzahlwert, der einen schwerwiegenden {{Glossary("DTLS", "DTLS")}}-Fehler angibt, der vom Netzwerk empfangen wurde.
        Nur setzen, wenn der `errorDetail`-String `dtls-failure` ist.

    - `sctpCauseCode` {{optional_inline}}
      - : Eine Ganzzahl, die den {{Glossary("SCTP", "SCTP")}} Ursachencode angibt, der die Ursache der fehlgeschlagenen SCTP-Aushandlung anzeigt.
        Dies sollte nur gesetzt werden, wenn `errorDetail` `sctp-failure` ist.

    - `sdpLineNumber` {{optional_inline}}
      - : Eine Ganzzahl, die die {{Glossary("SDP", "SDP")}} Nachrichtenzeilennummer angibt, bei der ein Syntaxfehler aufgetreten ist.
        Nur setzen, wenn `errorDetail` `sdp-syntax-error` ist.
    - `sentAlert` {{optional_inline}}
      - : Eine positive Ganzzahl, die einen schwerwiegenden DTLS-Fehler angibt, der von diesem Gerät gesendet wurde.
        Nur setzen, wenn `errorDetail` `dtls-failure` ist.

- `message` {{optional_inline}}
  - : Ein String für die Fehlermeldung.
    Standardmäßig ist dies der leere String (`""`).

### Rückgabewert

Eine neu erstellte [`RTCError`](/de/docs/Web/API/RTCError) Objektinstanz.

## Verwendungshinweise

Dieser Konstruktor führt keine vollständige Validierung des angegebenen `candidateInfo`-Objekts oder -Strings durch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

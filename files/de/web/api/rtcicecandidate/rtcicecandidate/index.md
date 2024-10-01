---
title: "RTCIceCandidate: RTCIceCandidate() Konstruktor"
short-title: RTCIceCandidate()
slug: Web/API/RTCIceCandidate/RTCIceCandidate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Der
**`RTCIceCandidate()`**
Konstruktor erstellt und gibt ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt zurück, das konfiguriert werden kann, um einen einzelnen {{Glossary("ICE", "ICE")}} Kandidaten zu repräsentieren.

## Syntax

```js-nolint
new RTCIceCandidate()
new RTCIceCandidate(candidateInfo)
```

### Parameter

- `candidateInfo` {{optional_inline}}

  - : Ein optionales Objekt, das bereitgestellt werden kann, um den Kandidaten zu konfigurieren.
    Das Objekt hat die folgenden Eigenschaften:

    <!-- Die Spezifikation nennt dieses Objekt RTCIceCandidateInit -->

    - `candidate` {{optional_inline}}

      - : Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt entnommen aus dem [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) Attribut `"candidate"`.
        Der Kandidatenstring gibt die Netzwerkverbindungsinformationen für den Kandidaten an.
        Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "end-of-candidates" Marker bekannt.

        Die Syntax des Kandidatenstrings ist beschrieben in {{RFC(5245, "", 15.1)}}.
        Für eine a-line (Attributzeile), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wäre der entsprechende Wert des `candidate` Strings
        `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`.

        Der {{Glossary("user_agent", "User Agent")}} bevorzugt immer Kandidaten mit der höchsten [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn alle anderen Faktoren gleich sind.
        Im obigen Beispiel ist die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
        - [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird zu diesem String kodiert; 2 wird zu `"rtcp"`)
        - [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
        - [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
        - [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
        - [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
        - [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

        > [!NOTE]
        > Für die Rückwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor auch diesen String direkt als Argument.

    - `sdpMid` {{optional_inline}}

      - : Ein String, der das Identifikations-Tag des Medienstreams enthält, mit dem der Kandidat in Beziehung steht, oder `null`, wenn kein zugehöriger Medienstream existiert. Der Standardwert ist `null`.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine Zahlen-Eigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat in Beziehung steht, innerhalb des [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung, oder `null`, wenn keine derartige Assoziation existiert. Der Standardwert ist `null`.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

    - `usernameFragment` {{optional_inline}}

      - : Ein String, der das Benutzername-Fragment enthält (in der Regel in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet).
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN", "STUN")}} Server).

        Der String wird von WebRTC zu Beginn der Sitzung generiert.
        Er kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen zufällige Daten enthalten.
        Er hat keinen Standardwert und ist nicht vorhanden, es sei denn, er wird explizit gesetzt.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

### Rückgabewert

Ein neu erstelltes [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt.

Wenn `candidateInfo` bereitgestellt wird, wird das neue `RTCIceCandidate` wie folgt initialisiert:

- Jedes Mitglied des `RTCIceCandidate` Objekts wird auf den Wert der Eigenschaft mit demselben Namen aus `candidateInfo` initialisiert.
  Dies schließt die Eigenschaften [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex), und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) ein.
- Der `candidate` String (der SDP-Text ist) wird analysiert; jede gefundene Eigenschaft wird im entsprechenden Feld in der `RTCIceCandidate` gespeichert.
  Wenn eines der Felder ungültig ist, wird das Parsen des Strings stillschweigend ohne Ausnahme abgebrochen.
  Der Standardwert des `candidate` ist der leere String, was anzeigt, dass der Kandidat eine "end-of-candidates" Nachricht ist.
- Die folgenden Felder werden auf `null` initialisiert, wenn sie nicht in der [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft enthalten sind:
  [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation),
  [`component`](/de/docs/Web/API/RTCIceCandidate/component),
  [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol),
  [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType),
  [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), und [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort).

> [!NOTE]
> Das Parsen des `candidate` Strings erfolgt unter Verwendung der [candidate-attribute grammar](https://w3c.github.io/webrtc-pc/#candidate-attribute-grammar) aus der WebRTC-Spezifikation.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebene `candidateInfo` sowohl in den Eigenschaften `sdpMid` als auch `sdpMLineIndex` den Wert `null` hat.

## Hinweise zur Nutzung

Dieser Konstruktor führt keine vollständige Validierung des angegebenen `candidateInfo` Objekts oder Strings durch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols#ice)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

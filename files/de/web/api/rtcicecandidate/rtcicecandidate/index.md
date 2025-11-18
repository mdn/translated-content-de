---
title: "RTCIceCandidate: RTCIceCandidate() Konstruktor"
short-title: RTCIceCandidate()
slug: Web/API/RTCIceCandidate/RTCIceCandidate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Der **`RTCIceCandidate()`** Konstruktor erstellt und gibt ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt zurück, das konfiguriert werden kann, um einen einzelnen {{Glossary("ICE", "ICE")}}-Kandidaten zu repräsentieren.

## Syntax

```js-nolint
new RTCIceCandidate()
new RTCIceCandidate(candidateInfo)
```

### Parameter

- `candidateInfo` {{optional_inline}}
  - : Ein optionales Objekt, das bereitgestellt werden kann, um den Kandidaten zu konfigurieren. Das Objekt hat die folgenden Eigenschaften:

    <!-- Die Spezifikation nennt dieses Objekt ein RTCIceCandidateInit -->
    - `candidate` {{optional_inline}}
      - : Ein String, der die Eigenschaften des Kandidaten beschreibt, entnommen direkt aus dem [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attribut `"candidate"`.
        Der Kandidaten-String spezifiziert die Netzwerkverbindungsinformationen für den Kandidaten.
        Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat wird als "end-of-candidates"-Marker bezeichnet.

        Die Syntax des Kandidaten-Strings ist in {{RFC(5245, "", 15.1)}} beschrieben.
        Für eine a-line (Attributzeile), die folgendermaßen aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Wert des `candidate`-Strings
        `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"` sein.

        Der {{Glossary("user_agent", "user agent")}} bevorzugt immer Kandidaten mit der höchsten [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn alle anderen Bedingungen gleich sind.
        Im obigen Beispiel ist die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge angeordnet.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:
        - [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
        - [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird in diesen String kodiert; 2 wird zu `"rtcp"`)
        - [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
        - [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
        - [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
        - [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
        - [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

        Zusätzliche Informationen finden sich in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

        > [!NOTE]
        > Aus Kompatibilitätsgründen mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor auch diesen String direkt als Argument.

    - `sdpMid` {{optional_inline}}
      - : Ein String, der das Identifikationskennzeichen des Mediastreams enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein Mediastream verknüpft ist. Der Standardwert ist `null`.

        Zusätzliche Informationen finden sich in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

    - `sdpMLineIndex` {{optional_inline}}
      - : Eine numerische Eigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat verbunden ist, innerhalb des Medienbeschreibungs-[SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp), oder `null`, wenn keine solche Verbindung besteht. Der Standardwert ist `null`.

        Zusätzliche Informationen finden sich in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

    - `usernameFragment` {{optional_inline}}
      - : Ein String, der das Benutzername-Fragment enthält (in der Regel als "ufrag" oder "ice-ufrag" abgekürzt).
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eine einzelne laufende ICE-Interaktion eindeutig (einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN", "STUN")}}-Server).

        Der String wird von WebRTC zu Beginn der Sitzung generiert.
        Er kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen zufällige Daten enthalten.
        Er hat keinen Standardwert und ist nicht vorhanden, es sei denn, er wird explizit gesetzt.

        Zusätzliche Informationen finden sich in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

### Rückgabewert

Ein neu erstelltes [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt.

Wenn `candidateInfo` bereitgestellt wird, wird das neue `RTCIceCandidate` wie folgt initialisiert:

- Jedes Mitglied des `RTCIceCandidate`-Objekts wird auf den Wert der Eigenschaft mit demselben Namen aus `candidateInfo` initialisiert. Dazu gehören die Eigenschaften [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate), [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid), [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) und [`usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).
- Der `candidate`-String (welches SDP-Text ist) wird geparst; jedes gefundene Attribut wird im entsprechenden Feld des `RTCIceCandidate` gespeichert. Wenn eines der Felder ungültig ist, wird das Parsen des Strings ohne Auslösen einer Ausnahme stillschweigend abgebrochen. Der Standardwert des `candidate` ist der leere String, der anzeigt, dass der Kandidat eine "end-of-candidates"-Nachricht ist.
- Die folgenden Felder werden auf `null` initialisiert, wenn sie nicht in der [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate)-Eigenschaft enthalten sind: [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation), [`component`](/de/docs/Web/API/RTCIceCandidate/component), [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), [`address`](/de/docs/Web/API/RTCIceCandidate/address), [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol), [`port`](/de/docs/Web/API/RTCIceCandidate/port), [`type`](/de/docs/Web/API/RTCIceCandidate/type), [`tcpType`](/de/docs/Web/API/RTCIceCandidate/tcpType), [`relatedAddress`](/de/docs/Web/API/RTCIceCandidate/relatedAddress), und [`relatedPort`](/de/docs/Web/API/RTCIceCandidate/relatedPort).

> [!NOTE]
> Das Parsen des `candidate`-Strings erfolgt unter Verwendung der [candidate-attribute grammar](https://w3c.github.io/webrtc-pc/#candidate-attribute-grammar) aus der WebRTC-Spezifikation.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn das angegebene `candidateInfo` **sowohl** in den Eigenschaften `sdpMid` als auch `sdpMLineIndex` `null`-Werte hat.

## Anwendungshinweise

Dieser Konstruktor führt keine vollständige Validierung des angegebenen `candidateInfo`-Objekts oder Strings durch.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols#ice)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

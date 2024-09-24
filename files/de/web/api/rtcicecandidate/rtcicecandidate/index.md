---
title: "RTCIceCandidate: RTCIceCandidate() Konstruktor"
short-title: RTCIceCandidate()
slug: Web/API/RTCIceCandidate/RTCIceCandidate
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("WebRTC")}}

Der **`RTCIceCandidate()`** Konstruktor erstellt und gibt ein neues {{domxref("RTCIceCandidate")}}-Objekt zurück, das konfiguriert werden kann, um einen einzelnen {{Glossary("ICE")}}-Kandidaten darzustellen.

## Syntax

```js-nolint
new RTCIceCandidate()
new RTCIceCandidate(candidateInfo)
```

### Parameter

- `candidateInfo` {{optional_inline}}

  - : Ein optionales Objekt, das bereitgestellt werden kann, um den Kandidaten zu konfigurieren.
    Das Objekt hat die folgenden Eigenschaften:

    <!-- The spec calls this object an RTCIceCandidateInit -->

    - `candidate` {{optional_inline}}

      - : Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt aus dem [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attribut `"candidate"` entnommen.
        Der Kandidaten-String spezifiziert die Netzwerkverbindungsinformationen für den Kandidaten.
        Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat wird als "end-of-candidates"-Marker bezeichnet.

        Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-line (Attributlinie), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Wert des `candidate`-Strings
        `"candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"` sein.

        Der {{Glossary("user agent")}} bevorzugt immer Kandidaten mit der höchsten {{domxref("RTCIceCandidate.priority", "priority")}}, sofern alle anderen Faktoren gleich sind.
        In dem obigen Beispiel ist die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
        - {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (die Zahl 1 wird als dieser String kodiert; 2 wird zu `"rtcp"`)
        - {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
        - {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
        - {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
        - {{domxref("RTCIceCandidate.port", "port")}} = 44323
        - {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

        Weitere Informationen finden Sie in {{domxref("RTCIceCandidate.candidate")}}.

        > [!NOTE]
        > Aus Gründen der Abwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor diesen String auch direkt als Argument.

    - `sdpMid` {{optional_inline}}

      - : Ein String, der das Identifikations-Tag des Medienstreams enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugeordneter Medienstream vorhanden ist. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in {{domxref("RTCIceCandidate.sdpMid")}}.

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine nummerische Eigenschaft, die den nullbasierten Index der m-line enthält, mit dem der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn eine solche Zuordnung nicht existiert. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in {{domxref("RTCIceCandidate.sdpMLineIndex")}}.

    - `usernameFragment` {{optional_inline}}

      - : Ein String, der das Benutzername-Fragment (in der Regel als "ufrag" oder "ice-ufrag" bezeichnet) enthält.
        Dieses Fragment identifiziert zusammen mit dem ICE-Passwort ("ice-pwd") eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeder Kommunikation mit dem {{Glossary("STUN")}}-Server).

        Der String wird von WebRTC zu Beginn der Sitzung generiert.
        Er kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen zufällige Daten enthalten.
        Es gibt keinen Standardwert und er ist nicht vorhanden, es sei denn, er wird ausdrücklich gesetzt.

        Weitere Informationen finden Sie in {{domxref("RTCIceCandidate.usernameFragment")}}.

### Rückgabewert

Ein neu erstelltes {{domxref("RTCIceCandidate")}}-Objekt.

Wenn `candidateInfo` bereitgestellt wird, wird das neue `RTCIceCandidate` wie folgt initialisiert:

- Jedes Mitglied des `RTCIceCandidate`-Objekts wird auf den Wert der Eigenschaft mit demselben Namen aus `candidateInfo` initialisiert.
  Dies umfasst die {{domxref("RTCIceCandidate.candidate", "candidate")}}, {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}}, {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}}, und {{domxref("RTCIceCandidate.usernameFragment", "usernameFragment")}}-Eigenschaften.
- Der `candidate`-String (der SDP-Text ist) wird geparst; jede gefundene Eigenschaft wird im entsprechenden Feld im `RTCIceCandidate` gespeichert.
  Wenn eines der Felder ungültig ist, wird das Parsen des Strings stillschweigend abgebrochen, ohne eine Ausnahme auszulösen.
  Der Standardwert für `candidate` ist der leere String, was anzeigt, dass der Kandidat eine "end-of-candidates"-Nachricht ist.
- Die folgenden Felder werden auf `null` initialisiert, wenn sie nicht in der {{domxref("RTCIceCandidate.candidate")}}-Eigenschaft enthalten sind:
  {{domxref("RTCIceCandidate.foundation", "foundation")}},
  {{domxref("RTCIceCandidate.component", "component")}},
  {{domxref("RTCIceCandidate.priority", "priority")}}, {{domxref("RTCIceCandidate/address","address")}}, {{domxref("RTCIceCandidate.protocol", "protocol")}},
  {{domxref("RTCIceCandidate.port", "port")}}, {{domxref("RTCIceCandidate.type", "type")}}, {{domxref("RTCIceCandidate.tcpType", "tcpType")}},
  {{domxref("RTCIceCandidate.relatedAddress", "relatedAddress")}}, und {{domxref("RTCIceCandidate.relatedPort", "relatedPort")}}.

> [!NOTE]
> Das Parsen des `candidate`-Strings erfolgt unter Verwendung der [candidate-attribute grammar](https://w3c.github.io/webrtc-pc/#candidate-attribute-grammar) aus der WebRTC-Spezifikation.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebenen Werte von `candidateInfo` in **beiden** den Eigenschaften `sdpMid` und `sdpMLineIndex` `null` sind.

## Hinweise zur Verwendung

Dieser Konstruktor validiert nicht vollständig das angegebene `candidateInfo`-Objekt oder den String.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols#ice)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)

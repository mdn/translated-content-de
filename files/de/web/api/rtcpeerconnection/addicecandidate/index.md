---
title: "RTCPeerConnection: Methode addIceCandidate()"
short-title: addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`addIceCandidate()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces fügt der Remote-Beschreibung der Verbindung einen neuen Remote-Kandidaten hinzu, der den Zustand des Remote-Endes der Verbindung beschreibt.

Wenn eine Website oder App, die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet, einen neuen ICE-Kandidaten vom Remote-Peer über seinen Signalisierungskanal empfängt, liefert sie den neu empfangenen Kandidaten an den ICE-Agenten des Browsers, indem sie **`RTCPeerConnection.addIceCandidate()`** aufruft.
Dies fügt diesen neuen Remote-Kandidaten der Remote-Beschreibung der `RTCPeerConnection` hinzu, die den Zustand des Remote-Endes der Verbindung beschreibt.

Wenn der `candidate`-Parameter fehlt oder beim Aufruf von `addIceCandidate()` ein Wert von `null` angegeben wird, ist der hinzugefügte ICE-Kandidat ein "Ende-der-Kandidaten"-Indikator.
Gleiches gilt, wenn der Wert des angegebenen Objekts [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) entweder fehlt oder eine leere Zeichenkette (`""`) ist, signalisiert es, dass alle Remote-Kandidaten geliefert wurden.

Die Ende-der-Kandidaten-Benachrichtigung wird an den Remote-Peer unter Verwendung eines Kandidaten mit einem a-line-Wert von `end-of-candidates` übertragen.

Während der Verhandlung wird Ihre App wahrscheinlich viele Kandidaten erhalten, die Sie dem ICE-Agenten auf diese Weise übermitteln, damit er eine Liste potenzieller Verbindungsmethoden aufbauen kann.
Dies wird detaillierter in den Artikeln [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) und
[Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) behandelt.

## Syntax

```js-nolint
addIceCandidate(candidate)

addIceCandidate(candidate, successCallback) // deprecated
addIceCandidate(candidate, successCallback, failureCallback) // deprecated
```

### Parameter

- `candidate` {{optional_inline}}

  - : Ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt oder ein Objekt, das die folgenden Eigenschaften hat:

    <!-- RTCIceCandidateInit in spec -->

    - `candidate` {{optional_inline}}

      - : Eine Zeichenfolge, die die Eigenschaften des Kandidaten beschreibt, direkt aus dem [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attribut `"candidate"` entnommen.
        Die Kandidatenzeichenfolge spezifiziert die Netzwerkkonnektivitätsinformationen für den Kandidaten.
        Wenn der `candidate` eine leere Zeichenkette (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "Ende-der-Kandidaten"-Marker bekannt.

        Die Syntax der Kandidatenzeichenfolge wird in {{RFC(5245, "", 15.1)}} beschrieben.
        Für eine a-line (Attributzeile), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Wert der `candidate`-Zeichenfolge sein:

        ```plain
        "candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`
        ```

        Der [User-Agent](/de/docs/Glossary/user_agent) bevorzugt immer Kandidaten mit der höchsten [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn alles andere gleich ist.
        Im obigen Beispiel ist die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
        - [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird in diese Zeichenkette kodiert; 2 wird zu `"rtcp"`)
        - [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
        - [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
        - [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
        - [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
        - [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

        Weitere Informationen finden Sie in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

        > [!NOTE]
        > Für die Abwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor diese Zeichenkette auch direkt als Argument.

    - `sdpMid` {{optional_inline}}

      - : Eine Zeichenfolge, die das Identifikations-Tag des Medienstroms enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugehöriger Medienstrom vorhanden ist. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine Zahlen-Eigenschaft, die den null-basierten Index der m-line enthält, mit der der Kandidat im [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn keine solche Verknüpfung vorhanden ist. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

    - `usernameFragment` {{optional_inline}}

      - : Eine Zeichenfolge, die das Benutzernamen-Fragment enthält (in der Regel als "ufrag" oder "ice-ufrag" abgekürzt).
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzelne laufende ICE-Interaktion (einschließlich der Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)-Server).

        Die Zeichenfolge wird von WebRTC zu Beginn der Sitzung erzeugt.
        Sie kann bis zu 256 Zeichen lang sein und mindestens 24 Bit müssen zufällige Daten enthalten.
        Sie hat keinen Standardwert und ist nicht vorhanden, außer sie wird explizit gesetzt.

        Weitere Informationen finden Sie in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

    Die Methode wirft eine {{jsxref("TypeError")}}-Ausnahme, wenn sowohl `sdpMid` als auch `sdpMLineIndex` `null` sind.

    Der Inhalt des Objekts sollte aus einer Nachricht erstellt werden, die über den Signalisierungskanal empfangen wurde und einen neu empfangenen ICE-Kandidaten beschreibt, der an den lokalen ICE-Agenten geliefert werden soll.

    Wenn kein `candidate`-Objekt angegeben ist oder dessen Wert `null` ist, wird ein Ende-der-Kandidaten-Signal an den Remote-Peer mit der `end-of-candidates` a-line gesendet, die wie folgt formatiert ist:

    ```plain
    a=end-of-candidates
    ```

### Veraltete Parameter

In älterem Code und Dokumentation könnte eine rückrufbasierte Version dieser Funktion zu sehen sein.
Diese wurde veraltet und ihre Verwendung ist **stark** abzuraten.
Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}} basierende Version von `addIceCandidate()` zu verwenden.
Die Parameter für die ältere Form von `addIceCandidate()` sind unten beschrieben, um bei der Aktualisierung vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der ICE-Kandidat erfolgreich hinzugefügt wurde.
    Diese Funktion erhält keine Eingabeparameter und gibt keinen Wert zurück.
- `failureCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn das Hinzufügen des ICE-Kandidaten fehlschlägt.
    Sie erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das beschreibt, warum der Fehler aufgetreten ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Kandidat erfolgreich von dem ICE-Agenten zur Remote-Beschreibung des Remote-Peers hinzugefügt wurde. Das Versprechen erhält keine Eingabeparameter.

### Ausnahmen

Wenn beim Versuch, den ICE-Kandidaten hinzuzufügen, ein Fehler auftritt, wird das von dieser Methode zurückgegebene {{jsxref("Promise")}} abgelehnt und gibt einen der unten stehenden Fehler als [`name`](/de/docs/Web/API/DOMException/name)-Attribut im angegebenen [`DOMException`](/de/docs/Web/API/DOMException)-Objekt zurück, das dem Ablehnungs-Handler übergeben wird.

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn sowohl das angegebene `sdpMid` des Kandidaten als auch das `sdpMLineIndex` `null` sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` derzeit keinen Remote-Peer etabliert hat ([`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) ist `null`).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen zurückgegeben:
    - Der angegebene Wert für `sdpMid` ist nicht-`null` und entspricht nicht der Medienbeschreibungs-ID einer der Medienbeschreibungen, die in der `remoteDescription` enthalten sind.
    - Der angegebene Wert von `sdpMLineIndex` ist größer oder gleich der Anzahl der Medienbeschreibungen, die in der Remote-Beschreibung enthalten sind.
    - Das angegebene [`ufrag`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) stimmt nicht mit dem `ufrag`-Feld in einer der in Betracht gezogenen Remote-Beschreibungen überein.
    - Einer oder mehrere der Werte in der `candidate`-Zeichenfolge sind ungültig oder konnten nicht analysiert werden.
    - Der Versuch, den Kandidaten hinzuzufügen, schlägt aus irgendeinem Grund fehl.

## Beispiele

Dieses Codebeispiel zeigt, wie ICE-Kandidaten über einen beliebigen Signalisierungskanal signalisiert werden.

```js
// This example assumes that the other peer is using a signaling channel as follows:
//
// pc.onicecandidate = (event) => {
//   if (event.candidate) {
//     signalingChannel.send(JSON.stringify({ice: event.candidate})); // "ice" is arbitrary
//   } else {
//     // All ICE candidates have been sent
//   }
// }

signalingChannel.onmessage = (receivedString) => {
  const message = JSON.parse(receivedString);
  if (message.ice) {
    // A typical value of ice here might look something like this:
    //
    // {candidate: "candidate:0 1 UDP 2122154243 192.0.2.43 53421 typ host", sdpMid: "0", …}
    //
    // Pass the whole thing to addIceCandidate:

    pc.addIceCandidate(message.ice).catch((e) => {
      console.log(`Failure during addIceCandidate(): ${e.name}`);
    });
  } else {
    // handle other things you might be signaling, like sdp
  }
};
```

Der letzte Kandidat, der auf diese Weise vom Remote-Peer signalisiert wird, ist ein spezieller Kandidat, der das Ende-der-Kandidaten anzeigt.
Aus Interesse kann Ende-der-Kandidaten wie folgt manuell angezeigt werden:

```js
pc.addIceCandidate({ candidate: "" });
```

In den meisten Fällen müssen Sie jedoch nicht explizit danach suchen, da die Ereignisse, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ansteuern, dies für Sie erledigen und die entsprechenden Ereignisse senden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebenszeit einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

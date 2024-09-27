---
title: "RTCPeerConnection: Methode addIceCandidate()"
short-title: addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`addIceCandidate()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces fügt der Remote-Beschreibung der Verbindung einen neuen Remote-Kandidaten hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn eine Website oder App, die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet, einen neuen ICE-Kandidaten vom Remote-Peer über seinen Signalisierungskanal erhält, übergibt sie den neu empfangenen Kandidaten an den [ICE](/de/docs/Glossary/ICE)-Agent des Browsers, indem sie **`RTCPeerConnection.addIceCandidate()`** aufruft.
Dies fügt den neuen Remote-Kandidaten zur Remote-Beschreibung des `RTCPeerConnection` hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn der `candidate`-Parameter fehlt oder beim Aufruf von `addIceCandidate()` ein Wert von `null` angegeben wird, ist der hinzugefügte ICE-Kandidat ein „Ende-der-Kandidaten“-Indikator.
Dasselbe gilt, wenn der Wert des angegebenen Objekts [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) fehlt oder eine leere Zeichenfolge (`""`) ist, dies signalisiert, dass alle Remote-Kandidaten geliefert wurden.

Die Ende-der-Kandidaten-Benachrichtigung wird an den Remote-Peer mit einem Kandidaten mit einem a-line-Wert von `end-of-candidates` übertragen.

Während der Aushandlung wird Ihre App wahrscheinlich viele Kandidaten erhalten, die Sie auf diese Weise an den ICE-Agenten übergeben, sodass er eine Liste potenzieller Verbindungsmethoden aufbauen kann.
Dies wird in den Artikeln [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) und
[Signalübertragung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) ausführlicher behandelt.

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
        Die Kandidatenzeichenfolge gibt die Netzwerkkonnektivitätsinformationen für den Kandidaten an.
        Wenn der `candidate` eine leere Zeichenfolge (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als „Ende-der-Kandidaten“-Marker bekannt.

        Die Syntax der Kandidatenzeichenfolge wird in {{RFC(5245, "", 15.1)}} beschrieben.
        Für eine a-line (Attributzeile), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Wert der `candidate`-Zeichenfolge sein:

        ```plain
        "candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`
        ```

        Der [User-Agent](/de/docs/Glossary/user_agent) bevorzugt immer Kandidaten mit der höchsten [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), alle anderen Dinge gleich.
        Im obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
        - [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird als dieser String kodiert; 2 wird zu `"rtcp"`)
        - [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
        - [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
        - [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
        - [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
        - [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

        Weitere Informationen finden Sie in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

        > [!NOTE]
        > Aus Gründen der Abwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor dieses String-Argument direkt.

    - `sdpMid` {{optional_inline}}

      - : Eine Zeichenfolge, die das Identifikations-Tag des Mediastreams enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugehöriger Medienstream vorhanden ist. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine Zahlen-Eigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn eine solche Zuordnung nicht existiert. Der Standardwert ist `null`.

        Weitere Informationen finden Sie in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

    - `usernameFragment` {{optional_inline}}

      - : Eine Zeichenfolge, die das Benutzername-Fragment (meistens in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet) enthält.
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eine einzelne laufende ICE-Interaktion eindeutig (einschließlich jeglicher Kommunikation mit dem [STUN](/de/docs/Glossary/STUN)-Server).

        Die Zeichenfolge wird von WebRTC zu Beginn der Sitzung generiert.
        Sie kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen zufällige Daten enthalten.
        Sie hat keinen Standardwert und ist nicht vorhanden, es sei denn, sie wird explizit gesetzt.

        Weitere Informationen finden Sie in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

    Die Methode wird eine {{jsxref("TypeError")}}-Ausnahme werfen, wenn sowohl `sdpMid` als auch `sdpMLineIndex` `null` sind.

    Der Inhalt des Objekts sollte aus einer über den Signalisierungskanal empfangenen Nachricht erstellt werden, die einen neu empfangenen ICE-Kandidaten beschreibt, der bereit ist, an den lokalen ICE-Agenten übergeben zu werden.

    Wenn kein `candidate`-Objekt angegeben wird oder dessen Wert `null` ist, wird ein Ende-der-Kandidaten-Signal mittels der `end-of-candidates` a-line an den Remote-Peer gesendet, formatiert wie folgt:

    ```plain
    a=end-of-candidates
    ```

### Veraltete Parameter

In älterem Code und Dokumentationen können Sie eine rückrufbasierte Version dieser Funktion sehen.
Diese wurde veraltet und ihre Verwendung wird **stark** abgeraten.
Sie sollten vorhandenen Code so aktualisieren, dass die Promise-basierte Version von `addIceCandidate()` verwendet wird.
Die Parameter der älteren Form von `addIceCandidate()` sind unten beschrieben, um beim Aktualisieren vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der ICE-Kandidat erfolgreich hinzugefügt wurde.
    Diese Funktion erhält keine Eingabeparameter und gibt keinen Wert zurück.
- `failureCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Versuch, den ICE-Kandidaten hinzuzufügen, fehlschlägt.
    Diese Funktion erhält ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt als Eingabeparameter, das beschreibt, warum der Fehler aufgetreten ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Kandidat erfolgreich zur Remote-Beschreibung des Peers durch den ICE-Agenten hinzugefügt wurde.
Das Promise empfängt keine Eingabeparameter.

### Ausnahmen

Wenn ein Fehler auftritt, während versucht wird, den ICE-Kandidaten hinzuzufügen, wird das von dieser Methode zurückgegebene {{jsxref("Promise")}} abgelehnt und gibt einen der unten stehenden Fehler als [`name`](/de/docs/Web/API/DOMException/name)-Attribut im angegebenen [`DOMException`](/de/docs/Web/API/DOMException)-Objekt zurück, das an den Rejektionshandler übergeben wird.

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn sowohl das angegebene `sdpMid` des Kandidaten als auch `sdpMLineIndex` `null` sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn `RTCPeerConnection` derzeit keinen Remote-Peer hat ([`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) ist `null`).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen zurückgegeben:
    - Der angegebene Wert für [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) ist nicht `null` und stimmt nicht mit der Medienbeschreibungs-ID einer in der [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) enthaltenen Medienbeschreibung überein.
    - Der angegebene Wert von [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) ist größer oder gleich der Anzahl der in der Remote-Beschreibung enthaltenen Medienbeschreibungen.
    - Der angegebene [`ufrag`](/de/docs/Web/API/RTCIceCandidate/usernameFragment)
      stimmt nicht mit dem `ufrag`-Feld in einer der in Betracht gezogenen Remote-Beschreibungen überein.
    - Einer oder mehrere der Werte in der [`candidate`](/de/docs/Web/API/RTCIceCandidate)-Zeichenfolge sind ungültig oder konnten nicht geparst werden.
    - Der Versuch, den Kandidaten hinzuzufügen, schlägt aus irgendeinem Grund fehl.

## Beispiele

Dieser Codeausschnitt zeigt, wie man ICE-Kandidaten über einen beliebigen Signalisierungskanal signalisiert.

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

Der letzte auf diese Weise vom Remote-Peer signalisierte Kandidat wird ein spezieller Kandidat sein, der das Ende der Kandidaten anzeigt.
Aus Interesse kann das Ende der Kandidaten manuell wie folgt angezeigt werden:

```js
pc.addIceCandidate({ candidate: "" });
```

In den meisten Fällen müssen Sie jedoch nicht explizit danach suchen, da die Ereignisse, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) anstoßen, dies für Sie erledigen und die entsprechenden Ereignisse senden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalübertragung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

---
title: "RTCPeerConnection: addIceCandidate() Methode"
short-title: addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebRTC")}}

Die **`addIceCandidate()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces fügt der Remote-Beschreibung der Verbindung einen neuen Remote-Kandidaten hinzu, der den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn eine Website oder App, die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet, einen neuen ICE-Kandidaten vom Remote-Peer über seinen Signalisierungskanal erhält, wird der neu empfangene Kandidat durch Aufruf von **`RTCPeerConnection.addIceCandidate()`** an den {{Glossary("ICE", "ICE")}}-Agent des Browsers übermittelt. Dadurch wird dieser neue Remote-Kandidat zur Remote-Beschreibung der `RTCPeerConnection` hinzugefügt, die den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn der `candidate`-Parameter fehlt oder ein Wert von `null` beim Aufruf von `addIceCandidate()` angegeben wird, ist der hinzugefügte ICE-Kandidat ein "end-of-candidates"-Indikator. Gleiches gilt, wenn der Wert des angegebenen Objekts [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) entweder fehlt oder ein Leerstring (`""`) ist, signalisiert dies, dass alle Remote-Kandidaten übermittelt wurden.

Die End-of-Candidates-Benachrichtigung wird an den Remote-Peer unter Verwendung eines Kandidaten mit einem a-line-Wert von `end-of-candidates` übermittelt.

Während der Aushandlung wird Ihre App wahrscheinlich viele Kandidaten erhalten, die Sie dem ICE-Agenten auf diese Weise übermitteln, was ihm ermöglicht, eine Liste potenzieller Verbindungsmethoden aufzubauen. Dies wird ausführlicher in den Artikeln [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) und [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) behandelt.

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

      - : Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt entnommen aus dem [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attribut `"candidate"`.
        Der Kandidaten-String gibt die Netzwerkkonnektivitätsinformationen für den Kandidaten an.
        Wenn der `candidate` ein Leerstring (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "end-of-candidates"-Marker bekannt.

        Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben. Für eine a-line (Attributzeile), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Wert des `candidate`-Strings lauten:

        ```plain
        "candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`
        ```

        Der {{Glossary("user_agent", "user agent")}} bevorzugt immer Kandidaten mit der höchsten [`priority`](/de/docs/Web/API/RTCIceCandidate/priority), wenn sonst alles gleich ist. Im obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - [`foundation`](/de/docs/Web/API/RTCIceCandidate/foundation) = 4234997325
        - [`component`](/de/docs/Web/API/RTCIceCandidate/component) = `"rtp"` (die Zahl 1 wird in diesen String kodiert; 2 wird zu `"rtcp"`)
        - [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) = `"udp"`
        - [`priority`](/de/docs/Web/API/RTCIceCandidate/priority) = 2043278322
        - [`ip`](/de/docs/Web/API/RTCIceCandidate/address) = `"192.0.2.172"`
        - [`port`](/de/docs/Web/API/RTCIceCandidate/port) = 44323
        - [`type`](/de/docs/Web/API/RTCIceCandidate/type) = `"host"`

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.candidate`](/de/docs/Web/API/RTCIceCandidate/candidate).

        > [!NOTE]
        > Zur Abwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor diesen String auch direkt als Argument.

    - `sdpMid` {{optional_inline}}

      - : Ein String, der das Identifizierungstoken des Medienstreams enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugeordneter Medienstream vorhanden ist. Der Standardwert ist `null`.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid).

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine Zahleneigenschaft, die den nullbasierten Index der m-line enthält, mit der der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn keine solche Zuordnung besteht. Der Standardwert ist `null`.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex).

    - `usernameFragment` {{optional_inline}}

      - : Ein String, der das Benutzernamensfragment enthält (normalerweise in Kurzform als "ufrag" oder "ice-ufrag" bezeichnet).
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzelne laufende ICE-Interaktion (einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN", "STUN")}}-Server).

        Der String wird von WebRTC zu Beginn der Sitzung generiert. Er kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen Zufallsdaten enthalten. Er hat keinen Standardwert und ist nicht vorhanden, es sei denn, er wird explizit gesetzt.

        Zusätzliche Informationen finden Sie in [`RTCIceCandidate.usernameFragment`](/de/docs/Web/API/RTCIceCandidate/usernameFragment).

    Die Methode wirft eine {{jsxref("TypeError")}}-Ausnahme, wenn sowohl `sdpMid` als auch `sdpMLineIndex` `null` sind.

    Der Inhalt des Objekts sollte aus einer Nachricht konstruiert werden, die über den Signalisierungskanal empfangen wurde und einen neu empfangenen ICE-Kandidaten beschreibt, der bereit ist, an den lokalen ICE-Agenten übermittelt zu werden.

    Wenn kein `candidate`-Objekt angegeben wird oder sein Wert `null` ist, wird ein End-of-Candidates-Signal unter Verwendung der `end-of-candidates` a-line an den Remote-Peer gesendet, formatiert wie folgt:

    ```plain
    a=end-of-candidates
    ```

### Veraltete Parameter

In älterem Code und Dokumentationen können Sie eine Callback-basierte Version dieser Funktion sehen. Diese ist veraltet, und ihre Verwendung wird **dringend** abgeraten. Sie sollten vorhandenen Code aktualisieren, um die {{jsxref("Promise")}}-basierte Version von `addIceCandidate()` stattdessen zu verwenden. Die Parameter der älteren Form von `addIceCandidate()` sind unten beschrieben, um beim Aktualisieren vorhandenen Codes zu helfen.

- `successCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der ICE-Kandidat erfolgreich hinzugefügt wurde. Diese Funktion erhält keine Eingabeparameter und gibt keinen Wert zurück.
- `failureCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Versuch, den ICE-Kandidaten hinzuzufügen, fehlschlägt. Sie erhält als Eingabe ein [`DOMException`](/de/docs/Web/API/DOMException)-Objekt, das beschreibt, warum der Fehler aufgetreten ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Kandidat erfolgreich von dem ICE-Agenten zur Beschreibung des Remote-Peers hinzugefügt wurde. Das Promise erhält keine Eingabeparameter.

### Ausnahmen

Wenn ein Fehler beim Versuch auftritt, den ICE-Kandidaten hinzuzufügen, wird das von dieser Methode zurückgegebene {{jsxref("Promise")}} abgelehnt und gibt einen der unten aufgeführten Fehler als [`name`](/de/docs/Web/API/DOMException/name)-Attribut im angegebenen [`DOMException`](/de/docs/Web/API/DOMException)-Objekt zurück, das an den Ablehnungs-Handler übergeben wird.

- {{jsxref("TypeError")}}
  - : Wird zurückgegeben, wenn sowohl [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) als auch [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) des angegebenen Kandidaten `null` sind.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird zurückgegeben, wenn die `RTCPeerConnection` derzeit keinen Remote-Peer hat ([`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) ist `null`).
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird in einer der folgenden Situationen zurückgegeben:
    - Der angegebene Wert für [`sdpMid`](/de/docs/Web/API/RTCIceCandidate/sdpMid) ist nicht-`null` und stimmt nicht mit der Medienbeschreibungs-ID einer Medienbeschreibung in der [`remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription) überein.
    - Der angegebene Wert von [`sdpMLineIndex`](/de/docs/Web/API/RTCIceCandidate/sdpMLineIndex) ist größer oder gleich der Anzahl der in der Remote-Beschreibung enthaltenen Medienbeschreibungen.
    - Das angegebene [`ufrag`](/de/docs/Web/API/RTCIceCandidate/usernameFragment) stimmt nicht mit dem `ufrag`-Feld in einer der in Betracht gezogenen Remote-Beschreibungen überein.
    - Einer oder mehrere Werte im [`candidate`](/de/docs/Web/API/RTCIceCandidate)-String sind ungültig oder konnten nicht analysiert werden.
    - Jeglicher Versuch, den Kandidaten hinzuzufügen, schlägt aus irgendeinem Grund fehl.

## Beispiele

Dieses Code-Snippet zeigt, wie Sie ICE-Kandidaten über einen beliebigen Signalisierungskanal signalisieren können.

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

Der letzte Kandidat, der auf diese Weise vom Remote-Peer signalisiert wird, ist ein spezieller Kandidat, der das Ende der Kandidaten signalisiert. Aus Interesse kann das Ende der Kandidaten manuell wie folgt angegeben werden:

```js
pc.addIceCandidate({ candidate: "" });
```

In den meisten Fällen müssen Sie jedoch nicht ausdrücklich nach diesem suchen, da die Ereignisse, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) steuern, dies für Sie erledigen und die entsprechenden Ereignisse senden werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

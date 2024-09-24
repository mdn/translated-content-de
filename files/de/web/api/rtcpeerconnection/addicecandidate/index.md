---
title: "RTCPeerConnection: Methode addIceCandidate()"
short-title: addIceCandidate()
slug: Web/API/RTCPeerConnection/addIceCandidate
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`addIceCandidate()`** Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle fügt einen neuen Remote-Kandidaten zur Remote-Beschreibung der Verbindung hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn eine Website oder App, die {{domxref("RTCPeerConnection")}} verwendet, einen neuen ICE-Kandidaten vom entfernten Peer über ihren Signalisierungskanal erhält, übermittelt sie den neu empfangenen Kandidaten an den {{Glossary("ICE")}}-Agent des Browsers, indem sie **`RTCPeerConnection.addIceCandidate()`** aufruft.
Dies fügt diesen neuen Remote-Kandidaten zur Remote-Beschreibung der `RTCPeerConnection` hinzu, die den Zustand des entfernten Endes der Verbindung beschreibt.

Wenn der `candidate`-Parameter fehlt oder ein Wert von `null` angegeben wird, wenn `addIceCandidate()` aufgerufen wird, ist der hinzugefügte ICE-Kandidat ein "Ende-der-Kandidaten"-Indikator.
Dasselbe passiert, wenn der Wert des angegebenen Objekts {{domxref("RTCIceCandidate.candidate", "candidate")}} entweder fehlt oder ein leerer String (`""`) ist, signalisiert dies, dass alle Remote-Kandidaten ausgeliefert wurden.

Die Ende-der-Kandidaten-Benachrichtigung wird an den entfernten Peer gesendet, indem ein Kandidat mit einem A-Linien-Wert von `end-of-candidates` verwendet wird.

Während der Verhandlung wird Ihre App wahrscheinlich viele Kandidaten empfangen, die Sie auf diese Weise an den ICE-Agenten übermitteln, sodass er eine Liste potenzieller Verbindungsmethoden erstellen kann.
Diese Thematik wird ausführlicher in den Artikeln [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity) und
[Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) behandelt.

## Syntax

```js-nolint
addIceCandidate(candidate)

addIceCandidate(candidate, successCallback) // veraltet
addIceCandidate(candidate, successCallback, failureCallback) // veraltet
```

### Parameter

- `candidate` {{optional_inline}}

  - : Ein {{domxref("RTCIceCandidate")}}-Objekt oder ein Objekt, das die folgenden Eigenschaften hat:

    <!-- RTCIceCandidateInit in spec -->

    - `candidate` {{optional_inline}}

      - : Ein String, der die Eigenschaften des Kandidaten beschreibt, direkt abgeleitet vom [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp)-Attribut `"candidate"`.
        Der Kandidaten-String gibt die Netzwerkverbindungsinformationen für den Kandidaten an.
        Wenn der `candidate` ein leerer String (`""`) ist, wurde das Ende der Kandidatenliste erreicht; dieser Kandidat ist als "Ende-der-Kandidaten"-Marker bekannt.

        Die Syntax des Kandidaten-Strings wird in {{RFC(5245, "", 15.1)}} beschrieben.
        Für eine A-Linie (Attributlinie), die so aussieht:

        ```plain
        a=candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host
        ```

        wird der entsprechende Kandidaten-String-Wert sein:

        ```plain
        "candidate:4234997325 1 udp 2043278322 192.0.2.172 44323 typ host"`
        ```

        Der {{Glossary("user agent")}} bevorzugt immer Kandidaten mit der höchsten {{domxref("RTCIceCandidate.priority", "priority")}}, alles andere gleichwertig.
        Im obigen Beispiel beträgt die Priorität `2043278322`. Die Attribute sind alle durch ein einzelnes Leerzeichen getrennt und in einer bestimmten Reihenfolge.
        Die vollständige Liste der Attribute für diesen Beispielkandidaten ist:

        - {{domxref("RTCIceCandidate.foundation", "foundation")}} = 4234997325
        - {{domxref("RTCIceCandidate.component", "component")}} = `"rtp"` (die Zahl 1 wird zu diesem String kodiert; 2 wird zu `"rtcp"`)
        - {{domxref("RTCIceCandidate.protocol", "protocol")}} = `"udp"`
        - {{domxref("RTCIceCandidate.priority", "priority")}} = 2043278322
        - {{domxref("RTCIceCandidate/address", "ip")}} = `"192.0.2.172"`
        - {{domxref("RTCIceCandidate.port", "port")}} = 44323
        - {{domxref("RTCIceCandidate.type", "type")}} = `"host"`

        Zusätzliche Informationen finden Sie in {{domxref("RTCIceCandidate.candidate")}}.

        > [!NOTE]
        > Zur Abwärtskompatibilität mit älteren Versionen der WebRTC-Spezifikation akzeptiert der Konstruktor auch direkt diesen String als Argument.

    - `sdpMid` {{optional_inline}}

      - : Ein String, der das Identifikations-Tag des Medienstroms enthält, mit dem der Kandidat verknüpft ist, oder `null`, wenn kein zugehöriger Medienstrom vorhanden ist. Der Standardwert ist `null`.

        Zusätzliche Informationen finden sich in {{domxref("RTCIceCandidate.sdpMid")}}.

    - `sdpMLineIndex` {{optional_inline}}

      - : Eine Zahleneigenschaft, die den nullbasierten Index der M-Linie enthält, mit der der Kandidat innerhalb der [SDP](/de/docs/Web/API/WebRTC_API/Protocols#sdp) der Medienbeschreibung verknüpft ist, oder `null`, wenn keine solche Verknüpfung existiert. Der Standardwert ist `null`.

        Zusätzliche Informationen finden sich in {{domxref("RTCIceCandidate.sdpMLineIndex")}}.

    - `usernameFragment` {{optional_inline}}

      - : Ein String, der das Benutzername-Fragment enthält (üblicherweise als "ufrag" oder "ice-ufrag" bezeichnet).
        Dieses Fragment, zusammen mit dem ICE-Passwort ("ice-pwd"), identifiziert eindeutig eine einzige laufende ICE-Interaktion (einschließlich jeglicher Kommunikation mit dem {{Glossary("STUN")}}-Server).

        Der String wird von WebRTC zu Beginn der Sitzung generiert.
        Er kann bis zu 256 Zeichen lang sein, und mindestens 24 Bits müssen zufällige Daten enthalten.
        Er hat keinen Standardwert und ist nicht vorhanden, es sei denn, er ist ausdrücklich festgelegt.

        Zusätzliche Informationen finden sich in {{domxref("RTCIceCandidate.usernameFragment")}}.

    Die Methode wirft eine {{jsxref("TypeError")}} Ausnahme, wenn sowohl `sdpMid` als auch `sdpMLineIndex` `null` sind.

    Die Inhalte des Objekts sollten aus einer Nachricht über den Signalisierungskanal konstruiert werden, die einen neu empfangenen ICE-Kandidaten beschreibt, der bereit ist, an den lokalen ICE-Agenten geliefert zu werden.

    Wenn kein `candidate`-Objekt angegeben ist oder sein Wert `null` ist, wird ein Ende-der-Kandidaten-Signal an den entfernten Peer gesendet, indem die `end-of-candidates` A-Linie wie folgt formatiert wird:

    ```plain
    a=end-of-candidates
    ```

### Veraltete Parameter

In älterem Code und Dokumentationen könnten Sie eine rückrufbasierte Version dieser Funktion sehen.
Diese ist veraltet und ihre Verwendung ist **stark** abzuraten.
Sie sollten vorhandenen Code aktualisieren, um die auf {{jsxref("Promise")}}-basierende Version von `addIceCandidate()` zu verwenden.
Die Parameter der älteren Form von `addIceCandidate()` sind nachfolgend beschrieben, um die Aktualisierung vorhandenen Codes zu erleichtern.

- `successCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der ICE-Kandidat erfolgreich hinzugefügt wurde.
    Diese Funktion erhält keine Eingabeparameter und gibt keinen Wert zurück.
- `failureCallback` {{deprecated_inline}}
  - : Eine Funktion, die aufgerufen wird, wenn der Versuch, den ICE-Kandidaten hinzuzufügen, fehlschlägt.
    Sie erhält ein {{domxref("DOMException")}}-Objekt als Eingabe, das beschreibt, warum der Fehler aufgetreten ist.

### Rückgabewert

Ein {{jsxref("Promise")}}, das erfüllt wird, wenn der Kandidat erfolgreich zur Beschreibung des entfernten Peers durch den ICE-Agenten hinzugefügt wurde.
Das Promise erhält keine Eingabeparameter.

### Ausnahmen

Wenn während des Versuchs, den ICE-Kandidaten hinzuzufügen, ein Fehler auftritt, wird das von dieser Methode zurückgegebene {{jsxref("Promise")}} abgelehnt und es wird einer der unten aufgeführten Fehler als {{domxref("DOMException.name", "name")}}-Attribut im angegebenen {{domxref("DOMException")}}-Objekt an den Ablehnungs-Handler übergeben.

- {{jsxref("TypeError")}}
  - : Zurückgegeben, wenn der angegebene Kandidat {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} und {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} beide `null` sind.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Zurückgegeben, wenn die `RTCPeerConnection` derzeit keinen entfernten Peer hat ({{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} ist `null`).
- `OperationError` {{domxref("DOMException")}}
  - : Zurückgegeben in einer der folgenden Situationen:
    - Der angegebene Wert für {{domxref("RTCIceCandidate.sdpMid", "sdpMid")}} ist ungleich `null` und stimmt nicht mit der Medienbeschreibungs-ID einer Medienbeschreibung innerhalb von {{domxref("RTCPeerConnection.remoteDescription", "remoteDescription")}} überein.
    - Der angegebene Wert von {{domxref("RTCIceCandidate.sdpMLineIndex", "sdpMLineIndex")}} ist größer oder gleich der Anzahl der Medienbeschreibungen in der Remote-Beschreibung enthalten.
    - Der angegebene {{domxref("RTCIceCandidate.usernameFragment", "ufrag")}}
      stimmt nicht mit dem `ufrag`-Feld in einer der derzeit betrachteten Remote-Beschreibungen überein.
    - Einer oder mehrere der Werte im {{domxref("RTCIceCandidate", "candidate")}}-String sind ungültig oder konnten nicht geparst werden.
    - Der Versuch, den Kandidaten hinzuzufügen, schlägt aus irgendeinem Grund fehl.

## Beispiele

Dieses Code-Snippet zeigt, wie ICE-Kandidaten über einen beliebigen Signalisierungskanal signalisiert werden.

```js
// Dieses Beispiel geht davon aus, dass der andere Peer einen Signalisierungskanal wie folgt verwendet:
//
// pc.onicecandidate = (event) => {
//   if (event.candidate) {
//     signalingChannel.send(JSON.stringify({ice: event.candidate})); // "ice" ist willkürlich
//   } else {
//     // Alle ICE-Kandidaten wurden gesendet
//   }
// }

signalingChannel.onmessage = (receivedString) => {
  const message = JSON.parse(receivedString);
  if (message.ice) {
    // Ein typischer Wert von ice hier könnte folgendermaßen aussehen:
    //
    // {candidate: "candidate:0 1 UDP 2122154243 192.0.2.43 53421 typ host", sdpMid: "0", …}
    //
    // Übergeben Sie das Ganze an addIceCandidate:

    pc.addIceCandidate(message.ice).catch((e) => {
      console.log(`Fehler während addIceCandidate(): ${e.name}`);
    });
  } else {
    // behandeln Sie andere Dinge, die Sie signalisieren könnten, wie sdp
  }
};
```

Der letzte Kandidat, der auf diese Weise vom entfernten Peer signalisiert wird, ist ein spezieller Kandidat, der das Ende-der-Kandidaten kennzeichnet.
Aus Interesse kann das Ende-der-Kandidaten manuell wie folgt angegeben werden:

```js
pc.addIceCandidate({ candidate: "" });
```

In den meisten Fällen müssen Sie jedoch nicht explizit danach suchen, da die Ereignisse, die die {{domxref("RTCPeerConnection")}} antreiben, dies für Sie erledigen und die entsprechenden Ereignisse senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

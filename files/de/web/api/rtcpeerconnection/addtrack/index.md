---
title: "RTCPeerConnection: addTrack()-Methode"
short-title: addTrack()
slug: Web/API/RTCPeerConnection/addTrack
l10n:
  sourceCommit: cb25e0acbd9f0af27c4a99965cb962230d49a35d
---

{{APIRef("WebRTC")}}

Die **`addTrack()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces fügt einen neuen Medientrack zu der Menge von Tracks hinzu, die an den anderen Peer übertragen werden sollen.

> [!NOTE]
> Das Hinzufügen eines Tracks zu einer Verbindung löst eine Neuverhandlung aus, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst wird.
> Siehe [Beginn der Verhandlung](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation) für Details.

## Syntax

```js-nolint
addTrack(track)
addTrack(track, stream1)
addTrack(track, stream1, stream2)
addTrack(track, stream1, stream2, /* …, */ streamN)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das den Medientrack repräsentiert, der zur Peer-Verbindung hinzugefügt werden soll.
- `stream1`, …, `streamN` {{optional_inline}}
  - : Ein oder mehrere lokale [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekte, zu denen der Track hinzugefügt werden soll.

Der angegebene `track` muss nicht unbedingt bereits Teil eines der angegebenen `stream`s sein.
Stattdessen dienen die `stream`s dazu, Tracks auf der Empfangsseite der Verbindung zu gruppieren und sicherzustellen, dass sie synchronisiert sind.
Alle Tracks, die auf der lokalen Seite der Verbindung zu demselben Stream hinzugefügt werden, befinden sich auch auf der entfernten Seite auf demselben Stream.

### Rückgabewert

Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das verwendet wird, um die Mediendaten zu übertragen.

> [!NOTE]
> Jeder `RTCRtpSender` ist mit einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gekoppelt, um einen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) zu bilden.
> Der zugehörige Receiver ist stummgeschaltet (was anzeigt, dass er keine Pakete liefern kann), bis und sofern nicht ein oder mehrere Streams von dem entfernten Peer zum Receiver hinzugefügt werden.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Track (oder alle seine zugrunde liegenden Streams) bereits Teil der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.

## Hinweise zur Verwendung

### Tracks zu mehreren Streams hinzufügen

Nach dem `track`-Parameter können Sie optional ein oder mehrere [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekte angeben, zu denen der Track hinzugefügt werden soll.
Nur Tracks werden von einem Peer zum anderen gesendet, nicht Streams.
Da Streams für jeden Peer spezifisch sind, bedeutet das Angeben eines oder mehrerer Streams, dass der andere Peer automatisch einen entsprechenden Stream (oder Streams) auf der anderen Seite der Verbindung erstellt und dann den empfangenen Track zu diesen Streams hinzufügt.

#### Streamlose Tracks

Wenn keine Streams angegeben sind, ist der Track **streamlos**.
Das ist vollkommen akzeptabel, obwohl es dem entfernten Peer überlassen bleibt zu entscheiden, in welchen Stream der Track eingefügt werden soll, falls überhaupt.
Dies ist eine sehr gebräuchliche Art, `addTrack()` zu verwenden, wenn Sie viele Arten von einfachen Anwendungen erstellen, bei denen nur ein Stream benötigt wird.
Zum Beispiel, wenn Sie dem entfernten Peer nur einen einzigen Stream mit einem Audio- und einem Videotrack teilen, müssen Sie sich nicht darum kümmern, welcher Track in welchem Stream ist, daher können Sie es einfach dem Transceiver überlassen, dies für Sie zu handeln.

Hier ist ein Beispiel, dass eine Funktion zeigt, die [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um einen Stream von der Kamera und dem Mikrofon eines Benutzers zu erhalten, dann jeden Track aus dem Stream zur Peer-Verbindung hinzufügt, ohne einen Stream für jeden Track anzugeben:

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track);
  }
}
```

Das Ergebnis ist eine Menge von Tracks, die an den entfernten Peer gesendet werden, ohne Streamzuordnungen.
Der Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis auf dem entfernten Peer ist dafür verantwortlich, zu bestimmen, welchem Stream jeder Track hinzugefügt wird, selbst wenn das bedeutet, dass sie alle demselben Stream hinzugefügt werden.
Der [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Handler könnte so aussehen:

```js
let inboundStream = null;

pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    if (!inboundStream) {
      inboundStream = new MediaStream();
      videoElem.srcObject = inboundStream;
    }
    inboundStream.addTrack(ev.track);
  }
};
```

Hier fügt der `track`-Ereignishandler den Track dem ersten Stream hinzu, der vom Ereignis angegeben wird, falls ein Stream angegeben ist.
Andernfalls wird beim ersten Aufruf von `ontrack` ein neuer Stream erstellt und dem Videoelement zugeordnet, und dann der Track zu dem neuen Stream hinzugefügt.
Ab dann werden neue Tracks zu diesem Stream hinzugefügt.

Sie könnten auch einfach für jeden empfangenen Track einen neuen Stream erstellen:

```js
pc.ontrack = (ev) => {
  if (ev.streams && ev.streams[0]) {
    videoElem.srcObject = ev.streams[0];
  } else {
    let inboundStream = new MediaStream(ev.track);
    videoElem.srcObject = inboundStream;
  }
};
```

#### Zuordnung von Tracks zu bestimmten Streams

Durch das Angeben eines Streams und das Ermöglichen, dass [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Streams für Sie erstellt, wird die Zuordnung der Tracks zu den Streams automatisch von der WebRTC-Infrastruktur verwaltet.
Dies umfasst Dinge wie Änderungen der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) des Transceivers und das Anhalten von Tracks mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack).

Zum Beispiel könnte eine Anwendung diese Funktion verwenden, um das Kameraund Mikrofonsignal eines Gerätes über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu einem entfernten Peer zu streamen:

```js
async function openCall(pc) {
  const gumStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  for (const track of gumStream.getTracks()) {
    pc.addTrack(track, gumStream);
  }
}
```

Der entfernte Peer könnte dann einen [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler verwenden, der so aussieht:

```js
pc.ontrack = ({ streams: [stream] }) => (videoElem.srcObject = stream);
```

Dies stellt den aktuellen Stream des Videoelements auf den ein, der den hinzugefügten Track enthält.

### Wiederverwendete Sender

Diese Methode gibt entweder einen neuen `RTCRtpSender` oder eine vorhandene Instanz zur Wiederverwendung zurück.
Eine `RTCRtpSender`-Instanz ist nur zur Wiederverwendung geeignet, wenn sie die folgenden Kriterien erfüllt:

- Es ist kein Track bereits mit dem Sender assoziiert.
- Der mit dem Sender assoziierte [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) verfügt über einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), dessen [`track`](/de/docs/Web/API/RTCRtpReceiver/track)-Eigenschaft einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) angibt, dessen [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) mit dem `kind` des angegebenen `track`-Parameters bei Aufruf von `RTCPeerConnection.addTrack()` übereinstimmt. Dies stellt sicher, dass ein Transceiver nur Audio oder Video und niemals beides gleichzeitig verarbeitet.
- Die [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)-Eigenschaft ist nicht `"stopped"`.
- Der betrachtete `RTCRtpSender` wurde noch nie zum Senden von Daten verwendet.
  Wenn die [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) des Transceivers jemals `"sendrecv"` oder `"sendonly"` war, kann der Sender nicht wiederverwendet werden.

Wenn alle diese Kriterien erfüllt sind, wird der Sender wiederverwendet, was zu diesen Änderungen an dem bestehenden `RTCRtpSender` und seinem `RTCRtpTransceiver` führt:

- Der `RTCRtpSender`'s [`track`](/de/docs/Web/API/RTCRtpSender/track) wird auf den angegebenen Track gesetzt.
- Die Menge der mit dem Sender verbundenen Streams wird auf die Liste der in dieser Methode übergebenen Streams gesetzt, `stream1`, …, `streamN`.
- Der zugeordnete [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) hat seine `currentDirection` aktualisiert, um anzuzeigen, dass er sendet;
  wenn sein aktueller Wert `"recvonly"` ist, wird es `"sendrecv"`, und wenn sein aktueller Wert `"inactive"` ist, wird es `"sendonly"`.

### Neue Sender

Wenn kein vorhandener Sender zur Wiederverwendung existiert, wird ein neuer erstellt. Dies führt auch
zur Erstellung der damit verbundenen Objekte, die existieren müssen. Der Prozess
der Erstellung eines neuen Senders führt zu diesen Änderungen:

- Der neue `RTCRtpSender` wird mit dem angegebenen Track und einer Menge von Stream(s) erstellt.
- Ein neuer [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wird mit einem _neuen_ [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als seiner [`track`](/de/docs/Web/API/RTCRtpReceiver/track)-Eigenschaft erstellt (nicht der Track, der als Parameter beim Aufruf von `addTrack()` angegeben wurde).
  Das `kind` dieses Tracks wird auf das `kind` des als Eingabeparameter bereitgestellten Tracks gesetzt.
- Ein neuer [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) wird erstellt und mit dem neuen Sender und Receiver verknüpft.
- Die `direction` des neuen Transceivers wird auf `"sendrecv"` gesetzt.
- Der neue Transceiver wird in die Menge der Transceiver der `RTCPeerConnection` aufgenommen.

## Beispiele

Dieses Beispiel stammt aus dem im Artikel [Signaling und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) vorgestellten Code und dem zugehörigen Beispielcode.
Es stammt aus der dortigen `handleVideoOfferMsg()`-Methode, die aufgerufen wird, wenn eine Angebotsnachricht von dem entfernten Peer empfangen wird.

```js
const mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // And we want a video track
};

const desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
  .then((stream) => {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

Dieser Code nimmt SDP, das vom entfernten Peer empfangen wurde, und konstruiert eine neue [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) zur Übergabe an [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
Sobald dies erfolgreich ist, wird [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um Zugriff auf die lokale Webcam und das Mikrofon zu erhalten.

Wenn das erfolgreich ist, wird der resultierende Stream als Quelle für ein {{HTMLElement("video")}}-Element zugewiesen, das durch die Variable `previewElement` referenziert wird.

Der letzte Schritt besteht darin, das lokale Video über die Peer-Verbindung an den Anrufer zu senden.
Dies erfolgt durch Hinzufügen jedes Tracks im Stream, indem über die von [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) zurückgegebene Liste iteriert und sie an `addTrack()` zusammen mit dem `stream`, dessen Bestandteil sie sind, übergeben werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)

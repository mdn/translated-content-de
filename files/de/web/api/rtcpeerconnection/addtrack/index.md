---
title: "RTCPeerConnection: addTrack()-Methode"
short-title: addTrack()
slug: Web/API/RTCPeerConnection/addTrack
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die **`addTrack()`**-Methode des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Interfaces fügt eine neue Medienspur zu dem Satz von Spuren hinzu, die an den anderen Teilnehmer übertragen werden.

> [!NOTE]
> Das Hinzufügen einer Spur zu einer Verbindung löst eine Neuverhandlung aus, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst wird.
> Siehe [Beginning negotiation](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling#starting_negotiation) für Details.

## Syntax

```js-nolint
addTrack(track)
addTrack(track, stream1)
addTrack(track, stream1, stream2)
addTrack(track, stream1, stream2, /* …, */ streamN)
```

### Parameter

- `track`
  - : Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt, das die Medienspur repräsentiert, die der Peer-Verbindung hinzugefügt werden soll.
- `stream1`, …, `streamN` {{optional_inline}}
  - : Ein oder mehrere lokale [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekte, denen die Spur hinzugefügt werden soll.

Die angegebene `track` muss nicht unbedingt bereits Teil eines der angegebenen `stream`s sein.
Stattdessen sind die `stream`s eine Möglichkeit, Spuren am empfangenden Ende der Verbindung zu gruppieren und dafür zu sorgen, dass sie synchronisiert sind.
Alle Spuren, die am lokalen Ende der Verbindung zum selben Stream hinzugefügt werden, befinden sich auch am entfernten Ende im selben Stream.

### Rückgabewert

Das [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, welches zum Übertragen der Mediadaten verwendet wird.

> [!NOTE]
> Jeder `RTCRtpSender` wird mit einem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) gepaart, um einen [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) zu bilden.
> Der zugehörige Empfänger ist stummgeschaltet (was darauf hinweist, dass er keine Pakete liefern kann), bis und es sei denn, ein oder mehrere Streams werden vom entfernten Peer zum Empfänger hinzugefügt.

### Ausnahmen

- `InvalidAccessError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene Spur (oder alle ihre zugrundeliegenden Streams) bereits Teil der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) geschlossen ist.

## Hinweise zur Verwendung

### Hinzufügen von Spuren zu mehreren Streams

Nach dem `track`-Parameter können Sie optional ein oder mehrere [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekte angeben, zu denen die Spur hinzugefügt werden soll.
Nur Spuren werden von einem Teilnehmer zum anderen gesendet, nicht Streams.
Da Streams für jeden Teilnehmer spezifisch sind, bedeutet das Angeben eines oder mehrerer Streams, dass der andere Teilnehmer automatisch einen entsprechenden Stream (oder Streams) am anderen Ende der Verbindung erstellt und dann die empfangene Spur automatisch zu diesen Streams hinzufügt.

#### Spurlose Spuren

Wenn keine Streams angegeben sind, ist die Spur **spurlos**.
Das ist vollkommen akzeptabel, obwohl es dem entfernten Teilnehmer obliegt, zu entscheiden, in welchen Stream die Spur eingefügt werden soll, falls überhaupt.
Dies ist eine sehr gebräuchliche Art, `addTrack()` beim Aufbau vieler Arten einfacher Anwendungen zu verwenden, bei denen nur ein Stream benötigt wird.
Wenn zum Beispiel alles, was Sie mit dem entfernten Teilnehmer teilen, ein einzelner Stream mit einer Audiospur und einer Videospur ist, müssen Sie sich nicht darum kümmern, welche Spur in welchem Stream ist, daher können Sie genauso gut den Transceiver es für Sie erledigen lassen.

Hier ist ein Beispiel für eine Funktion, die [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um einen Stream von der Kamera und dem Mikrofon eines Benutzers zu erhalten, und dann jede Spur aus dem Stream zur Peer-Verbindung hinzufügt, ohne für jede Spur einen Stream anzugeben:

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

Das Ergebnis ist ein Satz von Spuren, die an den entfernten Teilnehmer gesendet werden, ohne Stream-Zuordnungen.
Der Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis beim entfernten Teilnehmer ist verantwortlich dafür, zu bestimmen, welchem Stream jede Spur hinzugefügt werden soll, selbst wenn das bedeutet, dass sie alle zum selben Stream hinzugefügt werden.
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

Hier fügt der `track`-Event-Handler die Spur dem ersten vom Ereignis angegebenen Stream hinzu, falls ein Stream angegeben wird.
Andernfalls wird beim ersten Aufruf von `ontrack` ein neuer Stream erstellt und an das Videoelement angehängt, und dann wird die Spur dem neuen Stream hinzugefügt.
Von da an werden neue Spuren diesem Stream hinzugefügt.

Sie könnten auch einfach für jede empfangene Spur einen neuen Stream erstellen:

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

#### Zuordnung von Spuren zu bestimmten Streams

Indem Sie einen Stream angeben und `RTCPeerConnection` Streams für Sie erstellen lassen, werden die Spur-Zuordnungen der Streams automatisch von der WebRTC-Infrastruktur für Sie verwaltet.
Dies umfasst Dinge wie Änderungen der [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction) des Transceivers und das Anhalten von Spuren mit [`removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack).

Betrachten Sie zum Beispiel diese Funktion, die eine Anwendung verwenden könnte, um die Eingaben der Kamera und des Mikrofons eines Geräts über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) an einen entfernten Teilnehmer zu übertragen:

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

Der entfernte Teilnehmer könnte dann einen [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Event-Handler verwenden, der folgendermaßen aussieht:

```js
pc.ontrack = ({ streams: [stream] }) => (videoElem.srcObject = stream);
```

Dies legt den aktuellen Stream des Videoelements auf den Stream, der die Spur enthält, die zur Verbindung hinzugefügt wurde.

### Wiederverwendete Sender

Diese Methode gibt einen neuen `RTCRtpSender` oder eine bestehende Instanz zur Wiederverwendung zurück.
Eine `RTCRtpSender`-Instanz ist nur dann für die Wiederverwendung kompatibel, wenn sie die folgenden Kriterien erfüllt:

- Es gibt keine Spur, die bereits mit dem Sender verknüpft ist.
- Der mit dem Sender verknüpfte [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) hat einen [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), dessen [`track`](/de/docs/Web/API/RTCRtpReceiver/track)-Eigenschaft eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) spezifiziert, deren [`kind`](/de/docs/Web/API/MediaStreamTrack/kind) dem `kind` des bei `RTCPeerConnection.addTrack()` angegebenen `track`-Parameters entspricht. Dies stellt sicher, dass ein Transceiver entweder nur Audio oder Video und niemals beides gleichzeitig verarbeitet.
- Die [`RTCRtpTransceiver.currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection)-Eigenschaft ist nicht `"stopped"`.
- Der in Betracht gezogene `RTCRtpSender` wurde noch nie zum Senden von Daten verwendet.
  Wenn die [`currentDirection`](/de/docs/Web/API/RTCRtpTransceiver/currentDirection) des Transceivers jemals `"sendrecv"` oder `"sendonly"` war, kann der Sender nicht wiederverwendet werden.

Wenn all diese Kriterien erfüllt sind, wird der Sender wiederverwendet, was diese Änderungen am bestehenden `RTCRtpSender` und seinem `RTCRtpTransceiver` zur Folge hat:

- Der `RTCRtpSender`'s [`track`](/de/docs/Web/API/RTCRtpSender/track) wird auf die angegebene Spur gesetzt.
- Die Menge der mit dem Sender verknüpften Streams wird auf die in dieser Methode übergebene Streamliste `stream...` gesetzt.
- Der zugehörige [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) hat seine `currentDirection` aktualisiert, um anzuzeigen, dass er sendet;
  wenn sein aktueller Wert `"recvonly"` ist, wird er zu `"sendrecv"`, und wenn sein aktueller Wert `"inactive"` ist, wird er zu `"sendonly"`.

### Neue Sender

Wenn kein vorhandener Sender existiert, der wiederverwendet werden kann, wird ein neuer erstellt. Dies führt auch zur Erstellung der zugehörigen Objekte, die existieren müssen. Der Prozess der Erstellung eines neuen Senders führt zu diesen Änderungen:

- Der neue `RTCRtpSender` wird mit der angegebenen Spur und einer Gruppe von Streams erstellt.
- Ein neuer [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wird mit einer _neuen_ [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) als seiner [`track`](/de/docs/Web/API/RTCRtpReceiver/track)-Eigenschaft erstellt (nicht der Spur, die beim Aufruf von `addTrack()` als Parameter angegeben wurde).
  Die `kind` dieser Spur wird so eingestellt, dass sie dem `kind` der als Eingabeparameter bereitgestellten Spur entspricht.
- Ein neuer [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) wird erstellt und mit dem neuen Sender und Empfänger verknüpft.
- Die `direction` des neuen Transceivers wird auf `"sendrecv"` gesetzt.
- Der neue Transceiver wird zu dem Satz der Transceiver der `RTCPeerConnection` hinzugefügt.

## Beispiele

Dieses Beispiel ist aus dem im Artikel [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) vorgestellten Code und dem entsprechenden Beispielcode gezogen.
Es stammt aus der `handleVideoOfferMsg()`-Methode dort, die aufgerufen wird, wenn eine Angebotsnachricht vom entfernten Teilnehmer empfangen wird.

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

Dieser Code nimmt SDP, das vom entfernten Teilnehmer empfangen wurde, und erstellt eine neue [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription), um es an [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) zu übergeben.
Sobald das gelingt, wird [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) verwendet, um Zugriff auf die lokale Webcam und das Mikrofon zu erhalten.

Wenn das erfolgreich ist, wird der resultierende Stream als Quelle für ein {{HTMLElement("video")}}-Element zugewiesen, das durch die Variable `previewElement` referenziert wird.

Der letzte Schritt besteht darin, das lokale Video über die Peer-Verbindung an den Anrufer zu senden.
Dies wird erreicht, indem man jede Spur im Stream hinzufügt, indem man über die Liste iteriert, die von [`MediaStream.getTracks()`](/de/docs/Web/API/MediaStream/getTracks) zurückgegeben wird, und sie an `addTrack()` zusammen mit dem `stream` übergibt, von dem sie ein Bestandteil sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)

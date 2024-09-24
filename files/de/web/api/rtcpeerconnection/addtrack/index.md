---
title: "RTCPeerConnection: Methode addTrack()"
short-title: addTrack()
slug: Web/API/RTCPeerConnection/addTrack
l10n:
  sourceCommit: 7972ac25580ffbfb160e6d40013bbab3013d7cbe
---

{{APIRef("WebRTC")}}

Die **`addTrack()`**-Methode der {{domxref("RTCPeerConnection")}}-Schnittstelle fügt eine neue Medienspur zu der Menge von Spuren hinzu, die an den anderen Peer übertragen werden sollen.

> [!NOTE]
> Das Hinzufügen einer Spur zu einer Verbindung löst eine Neuverhandlung aus, indem ein {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}-Ereignis ausgelöst wird.
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
  - : Ein {{domxref("MediaStreamTrack")}}-Objekt, das die hinzuzufügende Medienspur zur Peer-Verbindung darstellt.
- `stream1`, …, `streamN` {{optional_inline}}
  - : Ein oder mehrere lokale {{domxref("MediaStream")}}-Objekte, zu denen die Spur hinzugefügt werden soll.

Die angegebene `track` muss nicht unbedingt bereits Teil eines der angegebenen `stream`s sein.
Stattdessen sind die `stream`s eine Möglichkeit, Spuren am empfangenden Ende der Verbindung zusammenzufassen und sicherzustellen, dass sie synchronisiert sind.
Alle Spuren, die am lokalen Ende der Verbindung zu demselben Stream hinzugefügt werden, werden auch am entfernten Ende in demselben Stream sein.

### Rückgabewert

Das {{domxref("RTCRtpSender")}}-Objekt, das zum Übertragen der Mediendaten verwendet wird.

> [!NOTE]
> Jeder `RTCRtpSender` ist mit einem {{domxref("RTCRtpReceiver")}} gepaart, um einen {{domxref("RTCRtpTransceiver")}} zu bilden.
> Der zugehörige Empfänger ist stummgeschaltet (zeigt an, dass er keine Pakete liefern kann), bis ein oder mehrere Streams vom entfernten Peer zum Empfänger hinzugefügt werden.

### Ausnahmen

- `InvalidAccessError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die angegebene Spur (oder alle ihre zugrunde liegenden Streams) bereits Teil der {{domxref("RTCPeerConnection")}} ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("RTCPeerConnection")}} geschlossen ist.

## Anwendungshinweise

### Hinzufügen von Spuren zu mehreren Streams

Nach dem `track`-Parameter können optional ein oder mehrere {{domxref("MediaStream")}}-Objekte angegeben werden, zu denen die Spur hinzugefügt werden soll.
Nur Spuren werden von einem Peer zum anderen gesendet, nicht die Streams.
Da Streams für jeden Peer spezifisch sind, bedeutet das Angeben eines oder mehrerer Streams, dass der andere Peer automatisch einen entsprechenden Stream (oder Streams) am anderen Ende der Verbindung erstellt und dann automatisch die empfangene Spur zu diesen Streams hinzufügt.

#### Spurlose Spuren

Wenn keine Streams angegeben sind, ist die Spur **spurlose**.
Das ist völlig akzeptabel, obwohl es dem entfernten Peer überlassen bleibt, zu entscheiden, in welchen Stream die Spur eingefügt werden soll, falls überhaupt.
Dies ist eine sehr gängige Methode, `addTrack()` beim Erstellen vieler Arten von einfachen Anwendungen zu verwenden, bei denen nur ein Stream benötigt wird.
Zum Beispiel, wenn Sie mit dem entfernten Peer nur einen einzigen Stream mit einer Audio- und einer Videospur teilen, brauchen Sie sich nicht darum zu kümmern, welche Spur in welchem Stream ist, deshalb können Sie dem Transceiver einfach überlassen, dies für Sie zu handhaben.

Hier ist ein Beispiel, das eine Funktion zeigt, die {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} verwendet, um einen Stream von der Kamera und dem Mikrofon eines Benutzers zu erhalten und dann jede Spur aus dem Stream zur Peer-Verbindung hinzuzufügen, ohne für jede Spur einen Stream anzugeben:

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

Das Ergebnis ist eine Menge von Spuren, die an den entfernten Peer gesendet werden, ohne Stream-Zuordnungen.
Der Handler für das {{DOMxRef("RTCPeerConnection/track_event", "track")}}-Ereignis auf dem entfernten Peer wird dafür verantwortlich sein, zu bestimmen, in welchen Stream jede Spur hinzugefügt werden soll, selbst wenn das bedeutet, dass alle in denselben Stream eingefügt werden.
Der {{domxref("RTCPeerConnection.track_event", "ontrack")}}-Handler könnte so aussehen:

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

Hier fügt der `track`-Ereignis-Handler die Spur dem ersten im Ereignis angegebenen Stream hinzu, falls ein Stream angegeben wird.
Andernfalls wird das erste Mal, wenn `ontrack` aufgerufen wird, ein neuer Stream erstellt und mit dem Video-Element verbunden, und dann wird die Spur dem neuen Stream hinzugefügt.
Von da an werden neue Spuren zu diesem Stream hinzugefügt.

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

Indem Sie einen Stream angeben und {{domxref("RTCPeerConnection")}} ermöglichen, Streams für Sie zu erstellen, werden die Track-Zuordnungen der Streams automatisch für Sie von der WebRTC-Infrastruktur verwaltet.
Dies umfasst Dinge wie Änderungen an der {{domxref("RTCRtpTransceiver.direction", "direction")}} des Transceivers und das Stoppen von Spuren durch {{domxref("RTCPeerConnection.removeTrack", "removeTrack()")}}.

Zum Beispiel, betrachten Sie diese Funktion, die eine Anwendung verwenden könnte, um mit dem Streaming der Kamera- und Mikrofoneingabe eines Geräts über eine {{domxref("RTCPeerConnection")}} zu einem entfernten Peer zu beginnen:

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

Der entfernte Peer könnte dann einen {{DOMxRef("RTCPeerConnection/track_event", "track")}}-Ereignishandler verwenden, der so aussieht:

```js
pc.ontrack = ({ streams: [stream] }) => (videoElem.srcObject = stream);
```

Dies setzt den aktuellen Stream des Video-Elements auf den, der die zur Verbindung hinzugefügte Spur enthält.

### Wiederverwendete Sender

Diese Methode gibt entweder einen neuen `RTCRtpSender` oder eine vorhandene Instanz zur Wiederverwendung zurück.
Eine `RTCRtpSender`-Instanz ist nur dann zur Wiederverwendung geeignet, wenn sie die folgenden Kriterien erfüllt:

- Es ist keine Spur mit dem Sender bereits verknüpft.
- Der mit dem Sender assoziierte {{domxref("RTCRtpTransceiver")}} hat einen {{domxref("RTCRtpReceiver")}}, dessen {{domxref("RTCRtpReceiver.track", "track")}}-Eigenschaft eine {{domxref("MediaStreamTrack")}} spezifiziert, deren {{domxref("MediaStreamTrack.kind", "kind")}} die gleiche ist wie der `kind`-Parameter der `track`, die bei der Aufrufung von `RTCPeerConnection.addTrack()` angegeben wurde. Dies stellt sicher, dass ein Transceiver entweder nur Audio oder nur Video verarbeitet, niemals beides.
- Die {{domxref("RTCRtpTransceiver.currentDirection")}}-Eigenschaft ist nicht `"stopped"`.
- Der in Betracht gezogene `RTCRtpSender` wurde noch nie zum Senden von Daten verwendet.
  Wenn die currentDirection des Transceivers jemals `"sendrecv"` oder `"sendonly"` war, kann der Sender nicht wiederverwendet werden.

Wenn alle diese Kriterien erfüllt sind, wird der Sender wiederverwendet, was zu folgenden Änderungen am vorhandenen `RTCRtpSender` und seinem `RTCRtpTransceiver` führt:

- Die {{domxref("RTCRtpSender.track", "track")}} des `RTCRtpSender` wird auf die angegebene Spur gesetzt.
- Der Satz assoziierter Streams des Senders wird auf die Liste der Streams gesetzt, die in dieser Methode übergeben werden, `stream...`.
- Der zugehörige {{domxref("RTCRtpTransceiver")}} hat seine `currentDirection` aktualisiert, um anzuzeigen, dass er sendet; wenn sein aktueller Wert `"recvonly"` ist, wird er zu `"sendrecv"` und wenn sein aktueller Wert `"inactive"` ist, wird er zu `"sendonly"`.

### Neue Sender

Wenn kein bestehender Sender vorhanden ist, der wiederverwendet werden kann, wird ein neuer erstellt. Dies führt auch zur Erstellung der zugehörigen Objekte, die existieren müssen. Der Prozess zur Erstellung eines neuen Senders führt zu folgenden Änderungen:

- Der neue `RTCRtpSender` wird mit der angegebenen Spur und dem Satz von Streams erstellt.
- Ein neuer {{domxref("RTCRtpReceiver")}} wird mit einer _neuen_ {{domxref("MediaStreamTrack")}} als seiner {{domxref("RTCRtpReceiver.track", "track")}}-Eigenschaft erstellt (nicht die Spur, die als Parameter beim Aufruf von `addTrack()` angegeben wurde).
  Das {{domxref("MediaStreamTrack.kind", "kind")}} dieser Spur wird so gesetzt, dass es zum `kind` der als Eingabeparameter bereitgestellten Spur passt.
- Ein neuer {{domxref("RTCRtpTransceiver")}} wird erstellt und mit dem neuen Sender und Empfänger assoziiert.
- Die {{domxref("RTCRtpTransceiver.direction", "direction")}} des neuen Transceivers wird auf `"sendrecv"` gesetzt.
- Der neue Transceiver wird zum Satz von Transceivern der `RTCPeerConnection` hinzugefügt.

## Beispiele

Dieses Beispiel stammt aus dem im Artikel [Signaling und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) präsentierten Code und dem entsprechenden Beispielcode.
Es stammt aus der Methode `handleVideoOfferMsg()`, die aufgerufen wird, wenn eine Angebotsnachricht vom entfernten Peer empfangen wird.

```js
const mediaConstraints = {
  audio: true, // Wir möchten eine Audiospur
  video: true, // Und wir möchten eine Videospur
};

const desc = new RTCSessionDescription(sdp);

pc.setRemoteDescription(desc)
  .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
  .then((stream) => {
    previewElement.srcObject = stream;

    stream.getTracks().forEach((track) => pc.addTrack(track, stream));
  });
```

Dieser Code nimmt SDP, das vom entfernten Peer empfangen wurde, und konstruiert eine neue {{domxref("RTCSessionDescription")}} zum Übergeben an {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}.
Sobald dies erfolgreich ist, verwendet er {{domxref("MediaDevices.getUserMedia()")}}, um Zugriff auf die lokale Webcam und das Mikrofon zu erhalten.

Wenn das erfolgreich ist, wird der resultierende Stream als Quelle für ein {{HTMLElement("video")}}-Element zugewiesen, das durch die Variable `previewElement` referenziert wird.

Der letzte Schritt besteht darin, das lokale Video über die Peer-Verbindung an den Anrufer zu senden.
Dies wird erreicht, indem jede Spur im Stream hinzugefügt wird, indem die durch {{domxref("MediaStream.getTracks()")}} zurückgegebene Liste iteriert und sie mit `addTrack()` zusammen mit dem `stream`, von dem sie ein Bestandteil sind, übergeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC](/de/docs/Web/API/WebRTC_API)
- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{DOMxRef("RTCPeerConnection/track_event", "track")}}

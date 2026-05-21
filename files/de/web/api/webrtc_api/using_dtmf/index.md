---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{DefaultAPISidebar("WebRTC")}}

Um die Unterstützung von Audio-/Video-Konferenzen zu verbessern, unterstützt [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF", "DTMF")}} an den Remote-Teilnehmer auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick auf hoher Ebene darüber, wie DTMF über WebRTC funktioniert, und liefert dann einen Leitfaden für Entwickler, wie DTMF über eine `RTCPeerConnection` gesendet werden kann. Das DTMF-System wird oft als "Tonwahl" bezeichnet, nach einem alten Handelsnamen für das System.

WebRTC sendet DTMF-Codes nicht als Audiodaten. Stattdessen werden sie außerhalb des Bandes als RTP-Nutzdaten gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es derzeit jedoch keine Möglichkeit gibt, _eingehende_ DTMF zu erkennen oder zu empfangen. WebRTC ignoriert derzeit diese Nutzlasten; dies liegt daran, dass die DTMF-Unterstützung von WebRTC in erster Linie für die Verwendung mit älteren Telefonsystemen gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie diese durchzuführen:

- Telefonkonferenzsysteme
- Menüsysteme
- Voicemail-Systeme
- Eingabe von Kreditkarten oder anderen Zahlungsinformationen
- Passcode-Eingabe

> [!NOTE]
> Obwohl das DTMF nicht an den Remote-Teilnehmer als Audio gesendet wird, können Browser als Teil ihrer Benutzererfahrung den entsprechenden Ton dem lokalen Benutzer vorspielen, da Benutzer typischerweise daran gewöhnt sind, ihre Telefone die Töne hörbar abspielen zu hören.

## Senden von DTMF auf einer RTCPeerConnection

Eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medienspuren haben, die gesendet oder empfangen werden. Wenn Sie DTMF-Signale übermitteln möchten, müssen Sie zuerst entscheiden, auf welcher Spur Sie diese senden möchten, da DTMF als eine Serie von außerhalb des Bandes befindlichen Nutzlasten über den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieser Spur an den anderen Teilnehmer verantwortlich ist.

Sobald die Spur ausgewählt ist, können Sie von ihrem `RTCRtpSender` das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt erhalten, das Sie zum Senden von DTMF verwenden werden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale zu senden, die über die Spur an den anderen Teilnehmer gesendet werden sollen. Der `RTCRtpSender` sendet dann die Töne zusammen mit den Audiodaten der Spur als Pakete an den anderen Teilnehmer.

Jedes Mal, wenn ein Ton gesendet wird, empfängt die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft, die angibt, welcher Ton gerade abgespielt wurde, was eine Gelegenheit bietet, beispielsweise Interface-Elemente zu aktualisieren. Wenn der Tonpuffer leer ist, was bedeutet, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis mit seiner `tone`-Eigenschaft als "" (ein leerer String) an das Verbindungsobjekt geliefert.

Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzlasten auf RTP behandelt werden, liegen außerhalb des Umfangs dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF im Kontext einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel erstellt zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, etabliert eine Verbindung zwischen ihnen und wartet dann darauf, dass der Benutzer auf eine "Wählen" Schaltfläche klickt. Wenn die Schaltfläche geklickt wird, wird ein DTMF-String über die Verbindung gesendet, indem [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) verwendet wird. Sobald die Töne übertragen wurden, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten existieren würden und das Signalisieren über das Netzwerk stattfinden würde, anstatt es wie hier inline verbunden zu sein.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das Audio wiederzugeben, das von der `RTCPeerConnection`, die "angerufen" wird, empfangen wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte zu starten, und dann die DTMF-Töne zu senden.
- Ein {{HTMLElement("div")}}, das den Log-Text empfängt und anzeigt, um Statusinformationen zu zeigen.

```html
<p>
  This example demonstrates the use of DTMF in WebRTC. Note that this example is
  "cheating" by generating both peers in one code stream, rather than having
  each be a truly separate entity.
</p>

<audio id="audio" autoplay controls></audio><br />
<button name="dial" id="dial">Dial</button>

<div class="log"></div>
```

### JavaScript

Werfen wir als nächstes einen Blick auf den JavaScript-Code. Beachten Sie, dass der Prozess des Verbindungsaufbaus hier etwas konstruiert ist; normalerweise würden Sie nicht beide Enden der Verbindung im selben Dokument erstellen.

#### Globale Variablen

Zuerst legen wir globale Variablen fest.

```js
let dialString = "12024561111";

let callerPC = null;
let receiverPC = null;
let dtmfSender = null;

let hasAddTrack = false;

let mediaConstraints = {
  audio: true,
  video: false,
};
```

Diese sind in der Reihenfolge:

- `dialString`
  - : Der DTMF-String, den der Anrufer senden wird, wenn die "Wählen"-Schaltfläche geklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden initialisiert, wenn der Anruf startet, in unserer `connectAndDial()`-Funktion, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) unten gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt für die Verbindung. Dieses wird während des Verbindungsaufbaus in der `gotStream()`-Funktion erhalten, die im Abschnitt [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung) gezeigt wird.
- `hasAddTrack`
  - : Da einige Browser `RTCPeerConnection.addTrack()` noch nicht implementiert haben und daher die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode erforderlich machen, verwenden wir dieses Boolean, um festzustellen, ob der Benutzeragent `addTrack()` unterstützt; wenn nicht, werden wir zu `addStream()` zurückfallen. Dies wird herausgefunden in `connectAndDial()`, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Starten der Verbindung verwendet werden sollen. Wir möchten eine reine Audioverbindung, daher ist `video` auf `false`, während `audio` auf `true` gesetzt ist.

#### Initialisierung

Wir holen Referenzen auf die Wähltaste und die Log-Ausgabefeldelemente und verwenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignis-Listener zur Wähltaste hinzuzufügen, so dass das Klicken darauf die `connectAndDial()`-Funktion aufruft, um den Verbindungsprozess zu starten.

```js
const dialButton = document.querySelector("#dial");
const logElement = document.querySelector(".log");
dialButton.addEventListener("click", connectAndDial);
```

#### Starten des Verbindungsprozesses

Wenn auf die Wählen-Schaltfläche geklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung auf das Senden der DTMF-Codes.

```js
function connectAndDial() {
  callerPC = new RTCPeerConnection();

  hasAddTrack = callerPC.addTrack !== undefined;

  callerPC.onicecandidate = handleCallerIceEvent;
  callerPC.onnegotiationneeded = handleCallerNegotiationNeeded;
  callerPC.oniceconnectionstatechange = handleCallerIceConnectionStateChange;
  callerPC.onsignalingstatechange = handleCallerSignalingStateChangeEvent;
  callerPC.onicegatheringstatechange = handleCallerGatheringStateChangeEvent;

  receiverPC = new RTCPeerConnection();
  receiverPC.onicecandidate = handleReceiverIceEvent;

  if (hasAddTrack) {
    receiverPC.ontrack = handleReceiverTrackEvent;
  } else {
    receiverPC.onaddstream = handleReceiverAddStreamEvent;
  }

  navigator.mediaDevices
    .getUserMedia(mediaConstraints)
    .then(gotStream)
    .catch((err) => log(err.message));
}
```

Nachdem die `RTCPeerConnection` für den Anrufer (`callerPC`) erstellt wurde, prüfen wir, ob sie die [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode hat. Wenn ja, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable lässt das Beispiel sogar auf Browsern arbeiten, die die neuere `addTrack()`-Methode noch nicht implementiert haben; wir werden dies tun, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode zurückfallen.

Als nächstes werden die Ereignis-Handler für den Anrufer festgelegt. Wir werden diese später im Detail behandeln.

Dann wird eine zweite `RTCPeerConnection`, die das empfangende Ende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; auch ihr `onicecandidate`-Ereignis-Handler wird eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignis-Handler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)- und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Wenn dies erfolgreich ist, wird die Funktion `gotStream()` aufgerufen, andernfalls loggen wir den Fehler, weil der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn der Audioeingang vom Mikrofon erhalten wird. Ihre Aufgabe ist es, den Stream zu erstellen, der an den Empfänger gesendet wird, damit der tatsächliche Prozess des Sendens beginnen kann. Sie erhält auch Zugriff auf den `RTCDTMFSender`, den wir zum Ausgeben von DTMF auf der Verbindung verwenden werden.

```js
function gotStream(stream) {
  log("Got access to the microphone.");

  let audioTracks = stream.getAudioTracks();

  if (hasAddTrack) {
    if (audioTracks.length > 0) {
      audioTracks.forEach((track) => callerPC.addTrack(track, stream));
    }
  } else {
    log(
      "Your browser doesn't support RTCPeerConnection.addTrack(). Falling " +
        "back to the <strong>deprecated</strong> addStream() method…",
    );
    callerPC.addStream(stream);
  }

  if (callerPC.getSenders) {
    dtmfSender = callerPC.getSenders()[0].dtmf;
  } else {
    log(
      "Your browser doesn't support RTCPeerConnection.getSenders(), so " +
        "falling back to use <strong>deprecated</strong> createDTMFSender() " +
        "instead.",
    );
    dtmfSender = callerPC.createDTMFSender(audioTracks[0]);
  }

  dtmfSender.ontonechange = handleToneChangeEvent;
}
```

Nachdem `audioTracks` als Liste der Audio-Tracks des Streams vom Mikrofon des Benutzers festgelegt wurde, ist es Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jeden der Audiotracks des Streams, einzeln, zur Verbindung hinzu, indem wir [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwenden. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als eine Einheit zum Anruf hinzuzufügen.

Als nächstes prüfen wir, ob die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) implementiert ist. Wenn ja, rufen wir sie auf `callerPC` auf und holen den ersten Eintrag in der zurückgegebenen Liste der Sender; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für das Übertragen von Daten für den ersten Audiotrack des Anrufs verantwortlich ist (was der Track ist, auf dem wir DTMF senden werden). Anschließend holen wir die `RTCRtpSender`-Eigenschaft [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf), die ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt ist, das DTMF auf der Verbindung vom Anrufer zum Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, damit ältere Browser (und solche, die noch nicht aktualisiert sind, um die aktuelle WebRTC-DTMF-API zu unterstützen) das Beispiel ausführen können.

Schließlich setzen wir den `ontonechange`-Ereignis-Handler des DTMF-Senders, damit wir jedes Mal benachrichtigt werden, wenn ein DTMF-Ton fertig gespielt wurde.

Sie finden die Log-Funktion am Ende der Dokumentation.

#### Wenn ein Ton fertig abgespielt ist

Jedes Mal, wenn ein DTMF-Ton fertig abgespielt wird, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` geliefert. Der Ereignis-Listener für diese ist als Funktion `handleToneChangeEvent()` implementiert.

```js
function handleToneChangeEvent(event) {
  if (event.tone !== "") {
    log(`Tone played: ${event.tone}`);
  } else {
    log("All tones have played. Disconnecting.");
    callerPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });
    receiverPC.getLocalStreams().forEach((stream) => {
      stream.getTracks().forEach((track) => {
        track.stop();
      });
    });

    audio.pause();
    audio.srcObject = null;
    receiverPC.close();
    callerPC.close();
  }
}
```

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelner Ton gespielt wurde, als auch wann alle Töne fertig gespielt wurden. Die [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses ist ein String, der angibt, welcher Ton gerade fertig gespielt wurde. Wenn alle Töne fertig gespielt wurden, ist `tone` ein leerer String; in diesem Fall ist [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) leer.

In diesem Beispiel loggen wir auf dem Bildschirm, welcher Ton gerade fertig gespielt wurde. In einer fortgeschritteneren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, zum Beispiel, um anzuzeigen, welcher Ton aktuell gespielt wird.

Andererseits, wenn der Tonpuffer leer ist, ist unser Beispiel darauf ausgelegt, den Anruf zu trennen. Dies geschieht, indem wir jeden Stream sowohl beim Anrufer als auch beim Empfänger stoppen, indem wir über jede Track-Liste von `RTCPeerConnection` iterieren (wie sie durch ihre [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode zurückgegeben wird) und jede Track's [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode aufrufen.

Sobald die Medien-Tracks sowohl des Anrufers als auch des Empfängers alle gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`. Dies trennt den Audiostream vom {{HTMLElement("audio")}}-Element.

Dann schließlich wird jede `RTCPeerConnection` durch Aufrufen ihrer [`close()`](/de/docs/Web/API/RTCPeerConnection/close)-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die `RTCPeerConnection`-ICE-Schicht des Anrufers einen neuen Kandidaten zur Vorschlag hat, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `callerPC` aus. Der `icecandidate`-Ereignis-Handler ist dafür zuständig, den Kandidaten an den Empfänger zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, so dass wir den Kandidaten einfach direkt an den Empfänger hinzufügen können, indem wir seine [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Das wird von `handleCallerIceEvent()` gehandhabt:

```js
function handleCallerIceEvent(event) {
  if (event.candidate) {
    log(`Adding candidate to receiver: ${event.candidate.candidate}`);

    receiverPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Error adding candidate to receiver: ${err}`));
  } else {
    log("Caller is out of candidates.");
  }
}
```

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null` `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und "übermitteln" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und den neuen `RTCIceCandidate` als Eingabe bereitstellen. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in unser Log-Feld aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir loggen diese Information.

#### Wählen, sobald die Verbindung geöffnet ist

Unser Design erfordert, dass beim Herstellen der Verbindung sofort der DTMF-String gesendet wird. Um dies zu erreichen, überwachen wir, dass der Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis erhält. Dieses Ereignis wird gesendet, wenn eine der vielen Änderungen am Zustand des ICE-Verbindungsprozesses auftritt, einschließlich der erfolgreichen Herstellung einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält nicht tatsächlich den neuen Zustand, daher lesen wir den aktuellen Zustand des Verbindungsprozesses aus der [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft von `callerPC`. Nachdem wir den neuen Zustand geloggt haben, prüfen wir, ob der Zustand `"connected"` ist. Wenn ja, loggen wir, dass wir kurz davor sind, den DTMF zu senden, und dann rufen wir [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um den DTMF auf dem gleichen Track wie die Audiodaten zu senden, und die Methode auf dem `RTCDTMFSender`-Objekt, das wir [zuvor gespeichert](#hinzufügen_des_audios_zur_verbindung) haben in `dtmfSender`.

Unser Aufruf von `insertDTMF()` gibt nicht nur den zu sendenden DTMF an (`dialString`), sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeit zwischen den Tönen (50 ms).

#### Die Verbindung verhandeln

Wenn die anrufende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beginnt, Medien zu empfangen (nachdem der Stream des Mikrofons hinzugefügt wurde), erhält der Anrufer ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das ihn darüber informiert, dass es an der Zeit ist, die Verbindung mit dem Empfänger zu verhandeln. Wie zuvor erwähnt, ist unser Beispiel aufgrund der direkten Kontrolle sowohl des Anrufers als auch des Empfängers etwas vereinfacht, sodass `handleCallerNegotiationNeeded()` in der Lage ist, die Verbindung schnell zu konstruieren, indem es Methoden für sowohl den Anrufer als auch den Empfänger aufruft, wie unten gezeigt.

```js
// Offer to receive audio but not video
const constraints = { audio: true, video: false };

async function handleCallerNegotiationNeeded() {
  log("Negotiating…");
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    for (const track of stream.getTracks()) {
      pc.addTrack(track, stream);
    }
    const offer = await callerPC.createOffer();
    log(`Setting caller's local description: ${offer.sdp}`);
    await callerPC.setLocalDescription(offer);
    log("Setting receiver's remote description to the same as caller's local");
    await receiverPC.setRemoteDescription(callerPC.localDescription);
    log("Creating answer");
    const answer = await receiverPC.createAnswer();
    log(`Setting receiver's local description to ${answer.sdp}`);
    await receiverPC.setLocalDescription(answer);
    log("Setting caller's remote description to match");
    await callerPC.setRemoteDescription(receiverPC.localDescription);
  } catch (err) {
    log(`Error during negotiation: ${err.message}`);
  }
}
```

Da die verschiedenen Methoden, die an der Verhandlung der Verbindung beteiligt sind, {{jsxref("Promise")}}s zurückgeben, können wir sie so zusammenketteln:

1. Rufen Sie [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erhalten.
2. Dann nehmen Sie das Angebot und setzen Sie die lokale Beschreibung des Anrufers auf das Angebot, indem Sie [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufrufen.
3. Dann "übermitteln" Sie das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies konfiguriert den Empfänger, sodass er weiß, wie der Anrufer konfiguriert ist.
4. Dann erstellt der Empfänger eine Antwort, indem er [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
5. Dann setzt der Empfänger seine lokale Beschreibung auf die neu erstellte Antwort, indem er [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufruft.
6. Dann wird die Antwort an den Anrufer "übermittelt", indem [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Dies lässt den Anrufer wissen, wie der Empfänger konfiguriert ist.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt die `catch()`-Klausel eine Fehlermeldung an das Log aus.

#### Verfolgen anderer Statusänderungen

Wir können auch Änderungen am Signalisierungsstatus (durch Akzeptieren von [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignissen) und dem ICE-Sammelstatus (durch Akzeptieren von [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignissen) überwachen. Wir verwenden diese für nichts, daher loggen wir sie einfach. Wir hätten diese Ereignis-Listener überhaupt nicht einrichten müssen.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die `RTCPeerConnection`-ICE-Schicht des Empfängers einen neuen Kandidaten zur Vorschlag hat, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `receiverPC` aus. Der `icecandidate`-Ereignis-Handler ist dafür zuständig, den Kandidaten an den Anrufer zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, so dass wir den Kandidaten einfach direkt an den Anrufer hinzufügen können, indem wir seine [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Das wird von `handleReceiverIceEvent()` gehandhabt.

Dieser Code ist analog zum `icecandidate`-Ereignis-Handler für den Anrufer, wie im Abschnitt [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) gezeigt.

```js
function handleReceiverIceEvent(event) {
  if (event.candidate) {
    log(`Adding candidate to caller: ${event.candidate.candidate}`);

    callerPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Error adding candidate to caller: ${err}`));
  } else {
    log("Receiver is out of candidates.");
  }
}
```

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null` `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und liefern es an den Anrufer, indem wir es in `callerPC.addIceCandidate()` übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in das Logfeld aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir loggen diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers, `receiverPC`, geliefert. Wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) erklärt, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir auch das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` unten gezeigt.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaft, die ein Array der Streams enthält, in denen sich der Track befindet (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und hängen ihn an das {{HTMLElement("audio")}}-Element.

Das `addstream`-Ereignis enthält eine [`stream`](/de/docs/Web/API/MediaStreamEvent/stream)-Eigenschaft, die einen einzelnen Stream angibt, der zum Track hinzugefügt wurde. Wir hängen ihn an das `<audio>`-Element.

#### Logging

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an ein {{HTMLElement("div")}}-Feld anzuhängen, das Status und Fehler an den Benutzer anzeigt.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die "Wählen"-Schaltfläche klicken, sollten Sie eine Reihe von Log-Nachrichten ausgeben sehen; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil ihrer Benutzererfahrung hörbar abspielt, sollten Sie sie hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess detailliert erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

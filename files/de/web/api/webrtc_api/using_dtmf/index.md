---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{DefaultAPISidebar("WebRTC")}}

Um Audio-/Videokonferenzen besser zu unterstützen, ermöglicht [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF", "DTMF")}} an den Remote-Partner auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick darüber, wie DTMF über WebRTC funktioniert, und stellt dann einen Leitfaden für Entwickler bereit, wie DTMF über eine `RTCPeerConnection` gesendet wird. Das DTMF-System wird oft als "Tonwahl" bezeichnet, nach einem alten Handelsnamen für das System.

WebRTC sendet keine DTMF-Codes als Audiodaten. Stattdessen werden sie als RTP-Nutzdaten gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es jedoch derzeit keine Möglichkeit gibt, eingehendes DTMF zu erkennen oder zu empfangen. WebRTC ignoriert diese Nutzdaten derzeit; dies liegt daran, dass die DTMF-Unterstützung von WebRTC hauptsächlich für die Verwendung mit älteren Telefonsystemen gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie folgende auszuführen:

- Telefonkonferenzsysteme
- Menüs
- Voicemailsysteme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Passworteingabe

> [!NOTE]
> Obwohl DTMF nicht als Audio an den Remote-Partner gesendet wird, können Browser den entsprechenden Ton dem lokalen Benutzer als Teil der Benutzererfahrung vorspielen, da Benutzer es gewohnt sind, die Töne ihres Telefons zu hören.

## Senden von DTMF auf einer RTCPeerConnection

Eine gegebene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medien-Tracks senden oder empfangen. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zuerst entscheiden, auf welchem Track Sie sie senden möchten, da DTMF als eine Reihe von nicht-bandgebundenen Nutzdaten auf dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Track-Daten an den anderen Partner verantwortlich ist.

Sobald der Track ausgewählt ist, können Sie von dessen `RTCRtpSender` das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt abrufen, das Sie zum Senden von DTMF verwenden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale in die Warteschlange zu stellen, um sie auf dem Track an den anderen Partner zu senden. Der `RTCRtpSender` sendet die Töne dann als Pakete zusammen mit den Audiodaten des Tracks an den anderen Partner.

Jedes Mal, wenn ein Ton gesendet wird, erhält die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft, die angibt, welcher Ton gerade fertig abgespielt wurde, was eine Gelegenheit bietet, zum Beispiel Benutzerschnittstellenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was anzeigt, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis mit seiner `tone`-Eigenschaft, die auf "" (eine leere Zeichenkette) gesetzt ist, an das Verbindungsobjekt geliefert.

Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details dazu, wie DTMF-Nutzdaten auf RTP behandelt werden, gehen über den Rahmen dieses Artikels hinaus. Stattdessen konzentrieren wir uns darauf, wie DTMF im Kontext einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel konstruiert zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, stellt eine Verbindung zwischen ihnen her und wartet dann, bis der Benutzer auf eine "Wählen"-Schaltfläche klickt. Wenn die Schaltfläche angeklickt wird, wird eine DTMF-Zeichenkette über die Verbindung mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) gesendet. Sobald die Töne fertig übertragen sind, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten existieren würden und das Signalisieren über das Netzwerk erfolgen würde, anstatt dass alles intern verknüpft ist, wie es hier der Fall ist.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das von der `RTCPeerConnection` empfangene Audio "abzuspielen".
- Ein {{HTMLElement("button")}}-Element, um die Erstellung und Verbindung der beiden `RTCPeerConnection`-Objekte auszulösen und anschließend die DTMF-Töne zu senden.
- Ein {{HTMLElement("div")}}, um Protokolltext zu empfangen und anzuzeigen, um Statusinformationen zu zeigen.

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

Lassen Sie uns als Nächstes den JavaScript-Code betrachten. Beachten Sie, dass der Prozess des Verbindungsaufbaus hier etwas konstruiert ist; normalerweise entwickeln Sie nicht beide Enden der Verbindung im selben Dokument.

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

let dialButton = null;
let logElement = null;
```

Diese sind in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer senden wird, wenn die "Wählen"-Schaltfläche angeklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden initialisiert, wenn der Anruf in unserer `connectAndDial()`-Funktion beginnt, wie unten in [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt für die Verbindung. Dies wird beim Einrichten der Verbindung abgerufen, in der `gotStream()`-Funktion, die in [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung) gezeigt wird.
- `hasAddTrack`
  - : Da einige Browser [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) noch nicht implementiert haben und daher die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode erfordern, verwenden wir diesen Boolean, um festzustellen, ob der User-Agent `addTrack()` unterstützt oder nicht; wenn nicht, werden wir auf `addStream()` zurückgreifen. Dies wird in `connectAndDial()` ermittelt, wie in [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Starten der Verbindung verwendet werden sollen. Wir möchten eine reine Audio-Verbindung, daher ist `video` `false`, während `audio` `true` ist.
- `dialButton` und `logElement`
  - : Diese Variablen werden verwendet, um Referenzen auf die Wählen-Schaltfläche und das {{HTMLElement("div")}}, in das Protokollinformationen geschrieben werden, zu speichern. Sie werden beim ersten Laden der Seite eingerichtet. Siehe [Initialisierung](#initialisierung) unten.

#### Initialisierung

Wenn die Seite geladen wird, führen wir einige grundlegende Setups durch: Wir holen Referenzen auf die Wählen-Schaltfläche und das Protokoll-Ausgabefeld ein, und wir verwenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um der Wählen-Schaltfläche einen Ereignis-Listener hinzuzufügen, sodass beim Klicken darauf die `connectAndDial()`-Funktion aufgerufen wird, um den Verbindungsprozess zu beginnen.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### Starten des Verbindungsprozesses

Wenn die Wählen-Schaltfläche angeklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung des Sendens der DTMF-Codes.

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

Nach der Erstellung der `RTCPeerConnection` für den Anrufer (`callerPC`) prüfen wir, ob sie eine [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode hat. Wenn dies der Fall ist, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable ermöglicht es dem Beispiel, auch in Browsern zu funktionieren, die die neuere `addTrack()`-Methode noch nicht implementiert haben; wir tun dies, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode zurückgreifen.

Als Nächstes werden die Ereignishandler für den Anrufer eingerichtet. Wir werden diese später im Detail behandeln.

Dann wird eine zweite `RTCPeerConnection` erstellt, die das empfangende Ende des Anrufs darstellt, und in `receiverPC` gespeichert; sein `onicecandidate`-Ereignishandler wird ebenfalls eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignishandler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)- und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Bei Erfolg wird die Funktion `gotStream()` aufgerufen, andernfalls protokollieren wir den Fehler, da der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn der Audioeingang vom Mikrofon erfasst wird. Seine Aufgabe besteht darin, den zu sendenden Stream an den Empfänger zu bauen, sodass der eigentliche Übertragungsprozess beginnen kann. Es erhält außerdem Zugriff auf den `RTCDTMFSender`, den wir zum Senden von DTMF auf der Verbindung verwenden.

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

Nachdem `audioTracks` auf eine Liste der Audiotracks des Streams vom Mikrofon des Benutzers gesetzt wurde, ist es an der Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jeden einzelnen Audiotrack des Streams einzeln zur Verbindung hinzu, indem wir [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) verwenden. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als eine Einheit zum Anruf hinzuzufügen.

Als Nächstes prüfen wir, ob die [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)-Methode implementiert ist. Wenn ja, rufen wir sie auf `callerPC` auf und erhalten den ersten Eintrag in der zurückgegebenen Liste der Sender; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für die Übertragung der Daten für den ersten Audiotrack des Anrufs verantwortlich ist (der Track, über den wir DTMF senden werden). Wir rufen dann die Eigenschaft [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) des `RTCRtpSender`-Objekts ab, die ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt ist, das DTMF auf der Verbindung vom Anrufer zum Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, um es älteren Browsern (und denen, die noch nicht aktualisiert wurden, um die aktuelle WebRTC-DTMF-API zu unterstützen) zu ermöglichen, das Beispiel auszuführen.

Schließlich richten wir den [`ontonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignishandler des DTMF-Senders so ein, dass wir jedes Mal benachrichtigt werden, wenn ein DTMF-Ton fertig abgespielt wird.

Sie finden die Protokollierungsfunktion am Ende der Dokumentation.

#### Wenn ein Ton die Wiedergabe beendet

Jedes Mal, wenn ein DTMF-Ton die Wiedergabe beendet, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` geliefert. Der Ereignis-Listener für diese Ereignisse ist als Funktion `handleToneChangeEvent()` implementiert.

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

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzugeben, wann ein einzelner Ton abgespielt wurde, als auch wann alle Töne fertig abgespielt wurden. Die Eigenschaft [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) des Ereignisses ist eine Zeichenkette, die angibt, welcher Ton gerade fertig abgespielt wurde. Wenn alle Töne fertig abgespielt wurden, ist `tone` eine leere Zeichenkette; wenn dies der Fall ist, ist [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welcher Ton gerade fertig abgespielt wurde. In einer fortschrittlicheren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, um beispielsweise anzuzeigen, welcher Ton gerade spielt.

Andererseits, wenn der Tonpuffer leer ist, ist unser Beispiel so konzipiert, dass der Anruf getrennt wird. Dies geschieht, indem jeder Stream sowohl beim Anrufer als auch beim Empfänger gestoppt wird, indem über die Track-Liste jeder `RTCPeerConnection` (wie sie mit der Methode [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks) zurückgegeben wird) iteriert und die Methode [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) jedes Tracks aufgerufen wird.

Sobald alle Medienspuren des Anrufers und des Empfängers gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`. Dies trennt den Audiostream vom {{HTMLElement("audio")}}-Element.

Dann werden schließlich beide `RTCPeerConnection` geschlossen, indem ihre Methode [`close()`](/de/docs/Web/API/RTCPeerConnection/close) aufgerufen wird.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die ICE-Schicht der `RTCPeerConnection` des Anrufers einen neuen Kandidaten vorschlägt, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `callerPC` aus. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Empfänger weiterzugeben. In unserem Beispiel steuern wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten einfach direkt durch Aufrufe der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) dem Empfänger hinzufügen können. Das wird von `handleCallerIceEvent()` gehandhabt:

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null`-`candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus der `event.candidate`-Zeichenkette und "übermitteln" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und das neue `RTCIceCandidate` als Eingabe bereitstellen. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in unserem Protokollfeld aus.

Wenn `event.candidate` `null` ist, zeigt das an, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Wählen, sobald die Verbindung steht

Unser Design erfordert, dass beim Aufbau der Verbindung sofort die DTMF-Zeichenfolge gesendet wird. Um dies zu erreichen, beobachten wir, dass beim Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis empfangen wird. Dieses Ereignis wird gesendet, wenn eine Anzahl von Änderungen am Zustand des ICE-Verbindungsprozesses auftreten, einschließlich dem erfolgreichen Aufbau einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält selbst nicht den neuen Zustand, daher erhalten wir den aktuellen Zustand des Verbindungsprozesses aus der Eigenschaft [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) von `callerPC`. Nachdem wir den neuen Zustand protokolliert haben, prüfen wir, ob der Zustand `"connected"` ist. Wenn ja, protokollieren wir die Tatsache, dass wir im Begriff sind, die DTMF zu senden, und dann rufen wir [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um die DTMF über denselben Track wie die Audiodatenmethode auf dem `RTCDTMFSender`-Objekt zu senden, das wir zuvor in `dtmfSender` gespeichert haben.

Unser Aufruf von `insertDTMF()` gibt nicht nur die zu sendende DTMF-Zeichenfolge (`dialString`) an, sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeit zwischen den Tönen (50 ms).

#### Verhandlung der Verbindung

Wenn die anrufende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beginnt, Medien zu empfangen (nachdem der Mikrofon-Stream hinzugefügt wurde), wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an den Anrufer geliefert und informiert ihn darüber, dass es an der Zeit ist, die Verbindung mit dem Empfänger zu verhandeln. Wie bereits erwähnt, ist unser Beispiel aufgrund der direkten Kontrolle über Anrufer und Empfänger vereinfacht, sodass `handleCallerNegotiationNeeded()` in der Lage ist, die Verbindung schnell durch Aufrufen der Methoden sowohl für den Anrufer als auch den Empfänger zu konstruieren, wie unten gezeigt.

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

Da die verschiedenen Methoden, die an der Verhandlung der Verbindung beteiligt sind, {{jsxref("promise")}}s zurückgeben, können wir sie wie folgt verketten:

1. Rufen Sie [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erhalten.
2. Dann nehmen Sie dieses Angebot und stellen die lokale Beschreibung des Anrufers durch Aufruf von [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ein.
3. Dann "übermitteln" Sie das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies konfiguriert den Empfänger, sodass er weiß, wie der Anrufer konfiguriert ist.
4. Dann erstellt der Empfänger eine Antwort, indem er [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
5. Dann stellt der Empfänger seine lokale Beschreibung so ein, dass sie der neu erstellten Antwort entspricht, indem er [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufruft.
6. Dann wird die Antwort an den Anrufer "übermittelt", indem [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Dadurch erfährt der Anrufer, wie die Konfiguration des Empfängers aussieht.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt die `catch()`-Klausel eine Fehlermeldung im Protokoll aus.

#### Verfolgen anderer Zustandsänderungen

Wir können auch Änderungen an den Signalzustand (indem wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse akzeptieren) und den ICE-Sammeleinzustand (indem wir [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse akzeptieren) verfolgen. Wir verwenden diese für nichts Spezielles, sodass wir sie nur protokollieren. Wir hätten diese Ereignis-Listener überhaupt nicht einrichten müssen.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die ICE-Schicht des Empfängers `RTCPeerConnection` einen neuen Kandidaten vorschlägt, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `receiverPC` aus. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Anrufer weiterzugeben. In unserem Beispiel steuern wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten einfach direkt durch Aufrufe der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) dem Anrufer hinzufügen können. Das wird von `handleReceiverIceEvent()` gehandhabt.

Dieser Code ist analog zum `icecandidate`-Ereignishandler für den Anrufer, wie in [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) oben gezeigt.

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null`-`candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus der `event.candidate`-Zeichenkette und liefern es an den Anrufer, indem wir es in `callerPC.addIceCandidate()` übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in unserem Protokollfeld aus.

Wenn `event.candidate` `null` ist, zeigt das an, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers, `receiverPC`, geliefert. Wie in [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) erklärt, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir zusätzlich das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` gezeigt.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaft, die ein Array der Streams enthält, denen der Track angehört (ein Track kann Teil mehrerer Streams sein). Wir nehmen den ersten Stream und hängen ihn an das {{HTMLElement("audio")}}-Element an.

Das `addstream`-Ereignis enthält eine [`stream`](/de/docs/Web/API/MediaStreamEvent/stream)-Eigenschaft, die einen Stream angibt, der dem Track hinzugefügt wurde. Wir hängen ihn an das `<audio>`-Element an.

#### Protokollierung

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an ein {{HTMLElement("div")}}-Feld anzuhängen, um Status und Fehler an den Benutzer anzuzeigen.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die Schaltfläche "Wählen" klicken, sollten Sie eine Reihe von Protokollnachrichten sehen, die ausgegeben werden; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil seiner Benutzererfahrung hörbar wiedergibt, sollten Sie diese hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Nachdem die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess ausführlicher erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

---
title: Verwenden von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Um Audio-/Videokonferenzen umfassender zu unterstützen, ermöglicht [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von [DTMF](/de/docs/Glossary/DTMF) an den Remote-Peer über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick über die Funktionsweise von DTMF über WebRTC und liefert anschließend einen Leitfaden für Alltagsentwickler zur Übertragung von DTMF über eine `RTCPeerConnection`. Das DTMF-System wird oft als "Tonwahl" bezeichnet, nach einem alten Markennamen für das System.

WebRTC sendet keine DTMF-Codes als Audiodaten. Stattdessen werden sie außerhalb des Bandes als RTP-Nutzdaten gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es derzeit aber keine Möglichkeit gibt, eingehende DTMF zu erkennen oder zu empfangen. WebRTC ignoriert derzeit diese Nutzdaten; dies liegt daran, dass die DTMF-Unterstützung von WebRTC hauptsächlich für die Verwendung mit älteren Telefonsystemen gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie die folgenden zu erledigen:

- Telekonferenzsysteme
- Menüsysteme
- Voicemail-Systeme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Eingabe von Passcodes

> [!NOTE]
> Auch wenn die DTMF nicht als Audio an den Remote-Peer gesendet wird, können Browser dennoch den entsprechenden Ton für den lokalen Benutzer abspielen, um deren Benutzererlebnis zu verbessern, da Benutzer in der Regel daran gewöhnt sind, dass ihr Telefon die Töne hörbar abspielt.

## Senden von DTMF über eine RTCPeerConnection

Eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medienspuren haben, die darauf gesendet oder empfangen werden. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zunächst entscheiden, auf welcher Spur Sie diese senden möchten, da DTMF als Reihe von außerhalb des Bandes liegenden Nutzdaten auf dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieser Spur an den anderen Peer verantwortlich ist.

Sobald die Spur ausgewählt ist, können Sie vom `RTCRtpSender` der Spur das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt erhalten, das Sie zum Senden von DTMF verwenden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale zur Übertragung auf der Spur an den anderen Peer einzureihen. Der `RTCRtpSender` sendet dann die Töne als Pakete zusammen mit den Audiodaten der Spur an den anderen Peer.

Jedes Mal, wenn ein Ton gesendet wird, erhält die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft, die angibt, welcher Ton gerade zuende gespielt wurde. Dies bietet die Möglichkeit, beispielsweise Schnittstellenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was anzeigt, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis mit einer leeren `tone`-Eigenschaft (ein leerer String) an das Verbindungsobjekt gesendet.

Wenn Sie mehr darüber erfahren möchten, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzdaten auf RTP behandelt werden, sind nicht Gegenstand dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF innerhalb des Kontexts einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir uns ein Beispiel ansehen.

## Einfaches Beispiel

Dieses einfache Beispiel erstellt zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, stellt eine Verbindung zwischen ihnen her und wartet dann darauf, dass der Benutzer auf eine Schaltfläche "Wählen" klickt. Wenn die Schaltfläche angeklickt wird, wird eine DTMF-Zeichenfolge über die Verbindung mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) gesendet. Sobald die Töne fertig übertragen sind, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten vorhanden wären und die Signalisierung über das Netzwerk erfolgen würde, anstatt alles wie hier verknüpft zu werden.

### HTML

Das HTML für dieses Beispiel ist sehr grundlegend; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das über die `RTCPeerConnection` empfangene Audio abzuspielen, das "angerufen" wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte und dann das Senden der DTMF-Töne auszulösen.
- Ein {{HTMLElement("div")}}, um Protokolltexte zu empfangen und anzuzeigen, um Statusinformationen anzuzeigen.

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

Schauen wir uns als Nächstes den JavaScript-Code an. Beachten Sie, dass der Prozess des Aufbauens der Verbindung hier etwas konstruiert ist; normalerweise bauen Sie nicht beide Enden der Verbindung im selben Dokument auf.

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

let offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 0,
};

let dialButton = null;
let logElement = null;
```

Diese sind in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer senden wird, wenn die "Wählen"-Taste geklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden beim Start des Anrufs in unserer `connectAndDial()`-Funktion initialisiert, wie unten unter [Verbindungsaufbau starten](#verbindungsaufbau_starten) gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt für die Verbindung. Es wird beim Einrichten der Verbindung in der `gotStream()`-Funktion bezogen, wie in [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung) gezeigt.
- `hasAddTrack`
  - : Da einige Browser [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) noch nicht implementiert haben und daher die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode erfordern, verwenden wir diese Boolesche Variable, um festzustellen, ob der Benutzeragent `addTrack()` unterstützt. Wenn nicht, verwenden wir alternativ `addStream()`. Dies wird in `connectAndDial()` ermittelt, wie unten unter [Verbindungsaufbau starten](#verbindungsaufbau_starten) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Start der Verbindung verwendet werden sollen. Wir wollen eine Audio-Verbindung, daher ist `video` `false`, während `audio` `true` ist.
- `offerOptions`
  - : Ein Objekt, das Optionen angibt, die beim Aufrufen von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) festgelegt werden sollen. In diesem Fall geben wir an, dass wir Audio, aber kein Video empfangen möchten.
- `dialButton` und `logElement`
  - : Diese Variablen werden verwendet, um Referenzen zur Wähltaste und dem {{HTMLElement("div")}}, in das Protokollinformationen geschrieben werden, zu speichern. Sie werden eingerichtet, wenn die Seite erstmals geladen wird. Siehe [Initialisierung](#initialisierung) unten.

#### Initialisierung

Beim Laden der Seite führen wir einige grundlegende Einrichtungsarbeiten durch: Wir holen Referenzen zur Wähltaste und zu den Protokollausgabe-Elementen und verwenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um dem Wähltasten-Klickereignis einen Listener hinzuzufügen, sodass beim Klicken die `connectAndDial()`-Funktion aufgerufen wird, um den Verbindungsprozess zu starten.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### Verbindungsaufbau starten

Wenn die Wähltaste geklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung auf das Senden der DTMF-Codes.

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

Nachdem die `RTCPeerConnection` für den Anrufer (`callerPC`) erstellt wurde, prüfen wir, ob sie eine [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode hat. Wenn ja, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable lässt das Beispiel auch auf Browsern laufen, die die neuere `addTrack()`-Methode noch nicht implementiert haben; wir tun dies, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode zurückgreifen.

Als Nächstes werden die Ereignis-Handler für den Anrufer festgelegt. Wir werden diese später ausführlich behandeln.

Dann wird eine zweite `RTCPeerConnection`, die das empfangende Ende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; ihr `onicecandidate`-Ereignis-Handler wird ebenfalls eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignis-Handler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)- und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Wenn dies erfolgreich ist, wird die Funktion `gotStream()` aufgerufen, andernfalls protokollieren wir den Fehler, da der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn der Audioeingang vom Mikrofon erhalten wird. Seine Aufgabe ist es, den Stream zu erstellen, der an den Empfänger gesendet wird, sodass der eigentliche Übertragungsprozess beginnen kann. Es erhält auch Zugriff auf den `RTCDTMFSender`, den wir verwenden werden, um DTMF über die Verbindung zu senden.

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

Nachdem `audioTracks` auf eine Liste der Audiotracks im Stream vom Mikrofon des Benutzers gesetzt wurde, ist es an der Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jeden Audiotrack des Streams einzeln mit [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Verbindung hinzu. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als Einheit zum Anruf hinzuzufügen.

Als Nächstes prüfen wir, ob die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) implementiert ist. Wenn dies der Fall ist, rufen wir sie auf `callerPC` auf und erhalten den ersten Eintrag in der zurückgegebenen Liste der Sender; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für die Übertragung der Daten des ersten Audiotracks im Anruf verantwortlich ist (dies ist der Track, über den wir DTMF senden werden). Wir erhalten dann die [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft des `RTCRtpSender`, die ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt ist, das DTMF über die Verbindung vom Anrufer an den Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, um älteren Browsern (und solchen, die noch nicht auf die aktuelle WebRTC DTMF API aktualisiert wurden) zu ermöglichen, das Beispiel auszuführen.

Schließlich setzen wir den [`ontonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis-Handler des DTMF-Senders, damit wir benachrichtigt werden, wenn jedes DTMF-Signal das Abspielen beendet.

Sie finden die Protokollfunktion am Ende der Dokumentation.

#### Wenn ein Ton das Abspielen beendet

Jedes Mal, wenn ein DTMF-Signal das Abspielen beendet, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` gesendet. Der Ereignis-Listener dafür ist als die Funktion `handleToneChangeEvent()` implementiert.

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

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelnes Signal abgespielt wurde, als auch wenn alle Signale das Abspielen beendet haben. Die [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses ist ein String, der anzeigt, welches Signal gerade abgespielt wurde. Wenn alle Signale abgespielt wurden, ist `tone` ein leerer String; wenn das der Fall ist, ist [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welches Signal gerade abgespielt wurde. In einer fortschrittlicheren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, um beispielsweise anzuzeigen, welche Note aktuell abgespielt wird.

Andererseits, wenn der Tonpuffer leer ist, ist unser Beispiel so konzipiert, dass es den Anruf trennt. Dies geschieht, indem jeder Stream sowohl beim Anrufer als auch beim Empfänger gestoppt wird, indem wir jede `RTCPeerConnection`-Trackliste (wie von ihrer [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode zurückgegeben) durchgehen und die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode jedes Tracks aufrufen.

Sobald alle Medien-Streams sowohl des Anrufers als auch des Empfängers gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen seine [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`. Dies trennt den Audio-Stream vom {{HTMLElement("audio")}}-Element.

Dann wird schließlich jede `RTCPeerConnection` durch Aufruf ihrer [`close()`](/de/docs/Web/API/RTCPeerConnection/close)-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die ICE-Schicht der `RTCPeerConnection` des Anrufers einen neuen Kandidaten vorschlägt, tritt ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis bei `callerPC` auf. Der `icecandidate`-Ereignis-Handler hat die Aufgabe, den Kandidaten an den Empfänger zu übermitteln. In unserem Beispiel steuern wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten direkt an den Empfänger übergeben können, indem wir seine [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Dies wird von `handleCallerIceEvent()` gehandhabt:

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null` `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem String `event.candidate` und "übermitteln" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und den neuen `RTCIceCandidate` als Eingabe übergeben. Falls `addIceCandidate()` fehlschlägt, gibt der `catch()`-Abschnitt den Fehler in unsere Protokollbox aus.

Wenn `event.candidate` `null` ist, deutet dies darauf hin, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Informationen.

#### Wählen, sobald die Verbindung geöffnet ist

Unser Design erfordert, dass wir die DTMF-Zeichenfolge sofort senden, wenn die Verbindung hergestellt ist. Dazu beobachten wir, ob der Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis erhält. Dieses Ereignis wird gesendet, wenn eine von mehreren Änderungen des Zustands des ICE-Verbindungsprozesses auftritt, einschließlich der erfolgreichen Herstellung einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält eigentlich nicht innerhalb von sich selbst den neuen Zustand, also holen wir den aktuellen Zustand des Verbindungsprozesses von der [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft von `callerPC`. Nachdem wir den neuen Zustand protokolliert haben, prüfen wir, ob der Zustand `"connected"` ist. Wenn ja, protokollieren wir die Tatsache, dass wir im Begriff sind, die DTMF zu senden, und rufen dann [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um die DTMF über denselben Track wie die Audiodaten-Methode auf dem zuvor in `dtmfSender` gespeicherten `RTCDTMFSender`-Objekt zu senden.

Unser Aufruf von `insertDTMF()` gibt nicht nur die zu sendende DTMF-Zeichenfolge (`dialString`) an, sondern auch die Länge jedes Tones in Millisekunden (400 ms) und die Zeit zwischen den Tönen (50 ms).

#### Verhandeln der Verbindung

Wenn die Anruf-`RTCPeerConnection` beginnt, Medien zu empfangen (nachdem der Mikrofonstream hinzugefügt wurde), wird dem Anrufer ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis zugestellt, das ihm signalisiert, dass es an der Zeit ist, die Verbindung mit dem Empfänger zu verhandeln. Wie bereits erwähnt, ist unser Beispiel etwas vereinfacht, da wir sowohl den Anrufer als auch den Empfänger steuern, sodass `handleCallerNegotiationNeeded()` in der Lage ist, die Verbindung schnell zu konstruieren, indem die erforderlichen Anrufe sowohl für den Anrufer als auch für den Empfänger, wie unten gezeigt, miteinander verknüpft werden.

```js
function handleCallerNegotiationNeeded() {
  log("Negotiating…");
  callerPC
    .createOffer(offerOptions)
    .then((offer) => {
      log(`Setting caller's local description: ${offer.sdp}`);
      return callerPC.setLocalDescription(offer);
    })
    .then(() => {
      log(
        "Setting receiver's remote description to the same as caller's local",
      );
      return receiverPC.setRemoteDescription(callerPC.localDescription);
    })
    .then(() => {
      log("Creating answer");
      return receiverPC.createAnswer();
    })
    .then((answer) => {
      log(`Setting receiver's local description to ${answer.sdp}`);
      return receiverPC.setLocalDescription(answer);
    })
    .then(() => {
      log("Setting caller's remote description to match");
      return callerPC.setRemoteDescription(receiverPC.localDescription);
    })
    .catch((err) => log(`Error during negotiation: ${err.message}`));
}
```

Da die verschiedenen Methoden, die an der Verhandlung der Verbindung beteiligt sind, {{jsxref("promise")}}s zurückgeben, können wir sie auf diese Weise verknüpfen:

1. Aufruf von [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer), um ein Angebot zu erhalten.
2. Dann das Angebot nehmen und die lokale Beschreibung des Anrufers durch Aufrufen von [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) darauf einstellen.
3. Übermitteln Sie das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies konfiguriert den Empfänger, damit er weiß, wie der Anrufer konfiguriert ist.
4. Der Empfänger erstellt dann eine Antwort, indem er [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
5. Der Empfänger legt dann seine lokale Beschreibung auf die neu erstellte Antwort fest, indem er [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufruft.
6. Dann wird die Antwort dem Anrufer durch Aufrufen von [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) "übermittelt". Dies lässt den Anrufer wissen, wie die Konfiguration des Empfängers ist.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt der `catch()`-Abschnitt eine Fehlermeldung in das Protokoll aus.

#### Verfolgen anderer Statusänderungen

Wir können auch Änderungen des Signalierungszustands beobachten (indem wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse akzeptieren) und den Zustand der ICE-Sammlung (indem wir [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse akzeptieren). Wir verwenden diese für nichts, sodass wir sie nur protokollieren. Wir hätten diese Ereignis-Listener überhaupt nicht einrichten müssen.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die ICE-Schicht der `RTCPeerConnection` des Empfängers einen neuen Kandidaten vorschlägt, tritt ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis bei `receiverPC` auf. Der `icecandidate`-Ereignis-Handler hat die Aufgabe, den Kandidaten an den Anrufer zu übermitteln. In unserem Beispiel steuern wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten direkt an den Anrufer übergeben können, indem wir seine [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Das wird von `handleReceiverIceEvent()` gehandhabt.

Dieser Code ist analog zum `icecandidate`-Ereignis-Handler für den Anrufer, der oben unter [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) zu sehen ist.

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null` `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem String `event.candidate` und übermitteln es dem Anrufer, indem wir es an `callerPC.addIceCandidate()` übergeben. Falls `addIceCandidate()` fehlschlägt, gibt der `catch()`-Abschnitt den Fehler in unsere Protokollbox aus.

Wenn `event.candidate` `null` ist, deutet dies darauf hin, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Informationen.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers, `receiverPC`, gesendet. Wie in [Verbindungsaufbau starten](#verbindungsaufbau_starten) erklärt, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir auch das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis behandeln. Dies wird in den unten gezeigten Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` demonstriert.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaft, die ein Array der Streams enthält, von denen der Track Mitglied ist (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und hängen ihn an das {{HTMLElement("audio")}}-Element.

Das `addstream`-Ereignis enthält eine [`stream`](/de/docs/Web/API/MediaStreamEvent/stream)-Eigenschaft, die einen einzelnen Stream angibt, der zum Track hinzugefügt wurde. Wir hängen es an das `<audio>`-Element.

#### Protokollierung

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an eine {{HTMLElement("div")}}-Box anzuhängen, um dem Benutzer Status und Fehler anzuzeigen.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die Taste "Wählen" klicken, sollten eine Reihe von Protokollnachrichten ausgegeben werden; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil seines Benutzererlebnisses hörbar abspielt, sollten Sie sie hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess im Detail erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

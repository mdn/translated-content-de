---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 0ea88f719ad95045993f8a54d5bbaee857617380
---

{{DefaultAPISidebar("WebRTC")}}

Um Audio-/Videokonferenzen besser zu unterstützen, ermöglicht [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF", "DTMF")}} an den entfernten Partner auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick darüber, wie DTMF über WebRTC funktioniert, gefolgt von einem Leitfaden für Entwickler, wie DTMF über eine `RTCPeerConnection` gesendet werden kann. Das DTMF-System wird oft als "Touch Tone" bezeichnet, nach einem alten Handelsnamen für das System.

WebRTC sendet DTMF-Codes nicht als Audiodaten. Stattdessen werden sie außerhalb des normalen Datenstroms als RTP-Payloads gesendet. Beachten Sie jedoch, dass es möglich ist, DTMF über WebRTC zu _senden_, es jedoch derzeit keine Möglichkeit gibt, _eingehende_ DTMF zu erkennen oder zu empfangen. WebRTC ignoriert derzeit diese Nutzlasten; dies liegt daran, dass die DTMF-Unterstützung von WebRTC in erster Linie für die Verwendung mit traditionellen Telefondiensten gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie die folgenden auszuführen:

- Telekonferenzsysteme
- Menüsysteme
- Voicemailsysteme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Passworteingabe

> [!NOTE]
> Obwohl DTMF nicht als Audio an den entfernten Partner gesendet wird, können Browser wählen, den entsprechenden Ton für den lokalen Benutzer als Teil ihrer Benutzererfahrung abzuspielen, da Benutzer in der Regel daran gewöhnt sind, dass ihr Telefon die Töne hörbar wiedergibt.

## Senden von DTMF auf einer RTCPeerConnection

Eine gegebene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medien-Tracks haben, die gesendet oder empfangen werden. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zunächst entscheiden, auf welchem Track sie gesendet werden sollen, da DTMF als Reihe von außerhalb des normalen Datenstroms liegenden Nutzlasten auf dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieses Tracks an den anderen Teilnehmer verantwortlich ist.

Sobald der Track ausgewählt ist, können Sie von dessen `RTCRtpSender` das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt erhalten, das Sie zum Senden von DTMF verwenden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale in die Warteschlange einzureihen, die auf dem Track zum anderen Teilnehmer gesendet werden sollen. Der `RTCRtpSender` wird dann die Töne als Pakete zusammen mit den Audiodaten des Tracks an den anderen Teilnehmer senden.

Jedes Mal, wenn ein Ton gesendet wird, empfängt die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft, die angibt, welcher Ton gerade zu Ende gespielt wurde, was eine Gelegenheit ist, um beispielsweise Schnittstellenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was bedeutet, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis mit seiner `tone`-Eigenschaft auf "" (einem leeren String) an das Verbindungsobjekt zugestellt.

Wenn Sie mehr darüber wissen möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzlasten auf RTP gehandhabt werden, liegen außerhalb des Umfangs dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF innerhalb des Kontexts einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel erstellt zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, stellt eine Verbindung zwischen ihnen her und wartet dann darauf, dass der Benutzer auf einen "Wählen"-Button klickt. Wenn der Button geklickt wird, wird eine DTMF-Zeichenfolge über die Verbindung gesendet, indem [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) verwendet wird. Sobald die Töne fertig übertragen sind, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten existieren würden und das Signalisieren über das Netzwerk statt an Ort und Stelle hier durchgeführt würde.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wesentliche Elemente:

- Ein {{HTMLElement("audio")}}-Element zum Abspielen des Audios, das von der "angerufenen" `RTCPeerConnection` empfangen wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte zu triggern und dann die DTMF-Töne zu senden.
- Ein {{HTMLElement("div")}} zur Aufnahme und Anzeige von Protokolltext, um Statusinformationen anzuzeigen.

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

Schauen wir uns nun den JavaScript-Code an. Beachten Sie, dass der Verbindungsaufbau hier etwas konstruiert ist; normalerweise bauen Sie nicht beide Enden der Verbindung im selben Dokument auf.

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

Diese sind, in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer senden wird, wenn der "Wählen"-Button geklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden initialisiert, wenn der Anruf in unserer `connectAndDial()`-Funktion beginnt, wie im Abschnitt [Beginn des Verbindungsprozesses](#beginn_des_verbindungsprozesses) unten gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt für die Verbindung. Dies wird während des Verbindungsaufbaus im `gotStream()`-Funktion, gezeigt unter [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung), erhalten.
- `hasAddTrack`
  - : Da einige Browser [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) noch nicht implementiert haben, so dass die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode erforderlich ist, verwenden wir diesen Boolean, um festzustellen, ob der Benutzeragent `addTrack()` unterstützt; wenn nicht, greifen wir auf `addStream()` zurück. Dies wird in `connectAndDial()` ermittelt, wie in [Beginn des Verbindungsprozesses](#beginn_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Starten der Verbindung verwendet werden sollen. Wir wollen eine reine Audioverbindung, daher ist `video` `false`, während `audio` `true` ist.

#### Initialisierung

Wir holen Referenzen zum Wählen-Button und den Protokollausgabe-Box-Elementen und fügen ein Ereignislistener zum Wählen-Button hinzu, so dass durch Klicken darauf die `connectAndDial()`-Funktion aufgerufen wird, um den Verbindungsprozess zu starten.

```js
const dialButton = document.querySelector("#dial");
const logElement = document.querySelector(".log");
dialButton.addEventListener("click", connectAndDial);
```

#### Beginn des Verbindungsprozesses

Wenn der Wählen-Button geklickt wird, wird `connectAndDial()` aufgerufen. Diese startet den Aufbau der WebRTC-Verbindung zur Vorbereitung des Sendens der DTMF-Codes.

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

Nachdem die `RTCPeerConnection` für den Anrufer (`callerPC`) erstellt wurde, schauen wir, ob diese eine [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode hat. Wenn ja, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable lässt das Beispiel auch auf Browsern funktionieren, die die neuere `addTrack()`-Methode noch nicht implementiert haben; wir erreichen dies, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode zurückgreifen.

Als nächstes werden die Ereignishandler für den Anrufer festgelegt. Diese werden später im Detail behandelt.

Dann wird eine zweite `RTCPeerConnection`, die das empfangende Ende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; dessen `onicecandidate`-Ereignishandler wird ebenfalls eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignishandler des Empfängers ein; andernfalls wird `onaddstream` eingerichtet. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)- und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Am Ende rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Bei Erfolg wird die Funktion `gotStream()` aufgerufen, andernfalls protokollieren wir den Fehler, da der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn der Audioeingang vom Mikrofon erhalten wird. Ihre Aufgabe ist es, den Stream aufzubauen, der an den Empfänger gesendet wird, sodass der eigentliche Übertragungsvorgang beginnen kann. Es erhält auch Zugriff auf den `RTCDTMFSender`, den wir verwenden werden, um DTMF auf der Verbindung auszugeben.

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

Nachdem `audioTracks` auf eine Liste der Audiotracks des Streams vom Mikrofon des Benutzers gesetzt wurde, ist es an der Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jeden der Audiotracks des Streams einzeln zur Verbindung hinzu, indem [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) aufgerufen wird. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als eine Einheit zum Anruf hinzuzufügen.

Als nächstes prüfen wir, ob die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) implementiert ist. Wenn ja, rufen wir sie auf `callerPC` auf und erhalten den ersten Eintrag in der zurückgegebenen Senderliste; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für die Übertragung von Daten des ersten Audiotracks im Anruf verantwortlich ist (dies ist der Track, über den wir DTMF senden werden). Dann erhalten wir die [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf)-Eigenschaft des `RTCRtpSender`, die ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt ist, das DTMF auf der Verbindung vom Anrufer zum Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, um älteren Browsern (und solchen, die noch nicht aktualisiert sind, um die aktuelle WebRTC-DTMF-API zu unterstützen) die Ausführung des Beispiels zu ermöglichen.

Am Ende setzen wir den [`ontonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignishandler des DTMF-Senders, damit wir jedes Mal benachrichtigt werden, wenn ein DTMF-Ton das Abspielen beendet hat.

Sie finden die Protokollfunktion am Ende der Dokumentation.

#### Wenn ein Ton das Abspielen beendet hat

Jedes Mal, wenn ein DTMF-Ton das Abspielen beendet hat, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` zugestellt. Der Ereignislistener hierfür ist als Funktion `handleToneChangeEvent()` implementiert.

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

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelner Ton abgespielt wurde, als auch wann alle Töne das Abspielen beendet haben. Die [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses ist eine Zeichenfolge, die angibt, welcher Ton gerade das Abspielen beendet hat. Wenn alle Töne das Abspielen beendet haben, ist `tone` ein leerer String; wenn dies der Fall ist, ist [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welcher Ton gerade das Abspielen beendet hat. In einer fortgeschritteneren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, um z.B. anzuzeigen, welcher Ton gerade abgespielt wird.

Wenn der Tonpuffer leer ist, ist unser Beispiel so ausgelegt, dass der Anruf getrennt wird. Dies geschieht, indem alle Streams auf beiden Seiten, Anrufer und Empfänger, gestoppt werden, indem wir über jede Trackliste der `RTCPeerConnection` iterieren (wie es durch deren [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode zurückgegeben wird) und die [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode jedes Tracks aufrufen.

Sobald alle Medientracks sowohl beim Anrufer als auch beim Empfänger gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`. Dies entkoppelt den Audiostream vom {{HTMLElement("audio")}}-Element.

Dann schließlich wird jede `RTCPeerConnection` durch Aufrufen ihrer [`close()`](/de/docs/Web/API/RTCPeerConnection/close)-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die ICE-Schicht der `RTCPeerConnection` des Anrufers einen neuen Kandidaten vorschlägt, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `callerPC` aus. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Empfänger zu übermitteln. In unserem Beispiel kontrollieren wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten einfach direkt durch Aufrufen der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) des Empfängers hinzufügen können. Dies wird von `handleCallerIceEvent()` behandelt:

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-null `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und "übertragen" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und das neue `RTCIceCandidate` als Eingabe bereitstellen. Wenn `addIceCandidate()` fehlschlägt, gibt der `catch()`-Abschnitt den Fehler in unserer Protokollbox aus.

Wenn `event.candidate` `null` ist, bedeutet dies, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Wählen, wenn die Verbindung geöffnet ist

Unser Design erfordert, dass beim Aufbau der Verbindung sofort die DTMF-Zeichenfolge gesendet wird. Um das zu erreichen, beobachten wir, dass der Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis erhält. Dieses Ereignis wird gesendet, wenn sich einer von mehreren Zuständen des ICE-Verbindungsprozesses ändert, einschließlich des erfolgreichen Verbindungsaufbaus.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält nicht tatsächlich den neuen Zustand, daher ermitteln wir den aktuellen Zustand des Verbindungsprozesses aus der [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft von `callerPC`. Nachdem wir den neuen Zustand protokolliert haben, sehen wir nach, ob der Zustand `"connected"` ist. Wenn ja, protokollieren wir die Tatsache, dass wir im Begriff sind, das DTMF zu senden, und rufen dann [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um das DTMF auf demselben Track wie die Audiodaten über die Methode des `RTCDTMFSender`-Objekts zu senden, das wir [zuvor gespeichert haben](#hinzufügen_des_audios_zur_verbindung) in `dtmfSender`.

Unser Aufruf von `insertDTMF()` legt nicht nur die DTMF fest (`dialString`), sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeitspanne zwischen den Tönen (50 ms).

#### Verbindungsaushandlung

Wenn die anrufende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beginnt, Medien zu empfangen (nachdem der Mikrofon-Stream hinzugefügt wurde), wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an den Anrufer zugestellt, das ihn wissen lässt, dass es Zeit ist, die Verbindung mit dem Empfänger auszuhandeln. Wie bereits erwähnt, ist unser Beispiel vereinfacht, da wir sowohl den Anrufer als auch den Empfänger kontrollieren, sodass `handleCallerNegotiationNeeded()` die Verbindung schnell durch Aufrufen von Methoden sowohl für den Anrufer als auch den Empfänger erstellen kann, wie im Folgenden dargestellt.

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

Da die verschiedenen Methoden, die an der Aushandlung der Verbindung beteiligt sind, {{jsxref("promise")}}s zurückgeben, können wir sie so verketten:

1. Rufen Sie [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erstellen.
2. Dann nehmen Sie dieses Angebot und setzen mit [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) die lokale Beschreibung des Anrufers, um es abzugleichen.
3. Dann "übertragen" Sie das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dadurch wird der Empfänger konfiguriert, so dass er weiß, wie der Anrufer konfiguriert ist.
4. Dann erstellt der Empfänger eine Antwort, indem er [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
5. Dann setzt der Empfänger seine lokale Beschreibung mit [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), um die neu erstellte Antwort abzugleichen.
6. Dann wird die Antwort dem Anrufer "übertragen", indem [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Dadurch weiß der Anrufer, wie die Konfiguration des Empfängers lautet.
7. Wenn irgendwann ein Fehler auftritt, gibt der `catch()`-Abschnitt eine Fehlermeldung an das Protokoll aus.

#### Verfolgen anderer Zustandsänderungen

Wir können auch Änderungen im Signalisierungszustand überwachen (durch Akzeptieren von [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignissen) und im ICE-Gathering-Zustand (durch Akzeptieren von [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignissen). Wir nutzen diese für nichts, also protokollieren wir sie nur. Wir hätten diese Ereignislistener auch gar nicht einrichten können.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die ICE-Schicht der `RTCPeerConnection` des Empfängers einen neuen Kandidaten vorschlägt, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `receiverPC` aus. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Anrufer zu übermitteln. In unserem Beispiel kontrollieren wir direkt sowohl den Anrufer als auch den Empfänger, sodass wir den Kandidaten einfach direkt durch Aufrufen der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) des Anrufers hinzufügen können. Das wird von `handleReceiverIceEvent()` behandelt.

Dieser Code ist analog zum `icecandidate`-Ereignishandler für den Anrufer, der in [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) oben zu sehen ist.

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-null `candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und übermitteln es an den Anrufer, indem wir `callerPC.addIceCandidate()` aufrufen. Wenn `addIceCandidate()` fehlschlägt, gibt der `catch()`-Abschnitt den Fehler in unserer Protokollbox aus.

Wenn `event.candidate` `null` ist, bedeutet dies, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers, `receiverPC`, zugestellt. Wie im Abschnitt [Beginn des Verbindungsprozesses](#beginn_des_verbindungsprozesses) erklärt, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir auch das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` unten demonstriert.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaft, die ein Array der Streams enthält, denen der Track angehört (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und verbinden ihn mit dem {{HTMLElement("audio")}}-Element.

Das `addstream`-Ereignis enthält eine [`stream`](/de/docs/Web/API/MediaStreamEvent/stream)-Eigenschaft, die einen einzelnen Stream angibt, der zum Track hinzugefügt wurde. Wir verbinden diesen mit dem `<audio>`-Element.

#### Protokollierung

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an eine {{HTMLElement("div")}}-Box anzufügen, um Status und Fehler für den Benutzer anzuzeigen.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf den "Wählen"-Button klicken, sollten Sie eine Reihe von Protokollmeldungen sehen, die ausgegeben werden; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil seiner Benutzererfahrung hörbar abspielt, sollten Sie sie hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um sich wieder zu verbinden und die Töne erneut zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisieren und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess ausführlicher erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

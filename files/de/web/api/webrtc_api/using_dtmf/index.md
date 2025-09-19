---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebRTC")}}

Um Audio-/Video-Konferenzen besser zu unterstützen, ermöglicht [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF", "DTMF")}} an den entfernten Partner auf einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick darüber, wie DTMF über WebRTC funktioniert, und liefert anschließend einen Leitfaden für alltägliche Entwickler, wie Sie DTMF über eine `RTCPeerConnection` senden können. Das DTMF-System wird oft als "Tonwahl" bezeichnet, ein alter Handelsname für das System.

WebRTC sendet DTMF-Codes nicht als Audiodaten. Stattdessen werden sie außerhalb des Bandes als RTP-Nutzlasten gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF über WebRTC zu _senden_, es derzeit jedoch keine Möglichkeit gibt, eingehende DTMF zu erkennen oder zu empfangen. WebRTC ignoriert diese Nutzlasten momentan; dies liegt daran, dass die DTMF-Unterstützung von WebRTC in erster Linie für die Verwendung mit alten Telefonsystemen gedacht ist, die auf DTMF-Töne zur Ausführung von Aufgaben wie:

- Telekonferenzsysteme
- Menüsysteme
- Voicemail-Systeme
- Eingabe von Kreditkarten oder anderen Zahlungsinformationen
- Passworteingabe

> [!NOTE]
> Obwohl DTMF nicht als Audio an den entfernten Benutzer gesendet wird, können Browser den entsprechenden Ton für den lokalen Benutzer abspielen, um das Benutzererlebnis zu verbessern, da Benutzer es gewohnt sind, die Töne auf ihrem Telefon hörbar zu hören.

## Senden von DTMF auf einer RTCPeerConnection

Eine gegebene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medienspuren enthalten, die gesendet oder empfangen werden. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zunächst entscheiden, auf welcher Spur Sie diese senden möchten, da DTMF als eine Reihe von außerhalb des Bandes liegenden Nutzlasten über den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieser Spur an den anderen Partner verantwortlich ist.

Sobald die Spur ausgewählt ist, können Sie vom `RTCRtpSender` das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt erhalten, das Sie zum Senden von DTMF verwenden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale in die Warteschlange zu stellen, die auf der Spur an den anderen Partner gesendet werden sollen. Der `RTCRtpSender` sendet dann die Töne als Pakete zusammen mit den Audiodaten der Spur an den anderen Partner.

Jedes Mal, wenn ein Ton gesendet wird, erhält die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft, die angibt, welcher Ton zu Ende gespielt wurde, was eine Gelegenheit bietet, zum Beispiel Benutzeroberflächenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was darauf hinweist, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis mit seiner `tone`-Eigenschaft auf "" (einen leeren String) an das Verbindungsobjekt geliefert.

Wenn Sie mehr darüber erfahren möchten, wie das funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzlasten auf RTP behandelt werden, fallen nicht in den Umfang dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF im Kontext einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir studieren, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel konstruiert zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, stellt eine Verbindung zwischen ihnen her und wartet dann darauf, dass der Benutzer auf eine "Wählen"-Schaltfläche klickt. Wenn die Schaltfläche angeklickt wird, wird eine DTMF-Zeichenfolge über die Verbindung mit [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) gesendet. Sobald die Töne fertig übertragen sind, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten existieren würden und die Signalgebung über das Netzwerk erfolgen würde, anstatt dass alles so verbunden ist, wie es hier der Fall ist.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das von der `RTCPeerConnection` "gerufene" empfangene Audio abzuspielen.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der zwei `RTCPeerConnection`-Objekte anzustoßen und dann die DTMF-Töne zu senden.
- Ein {{HTMLElement("div")}}, um Log-Text zu empfangen und anzuzeigen, um Statusinformationen zu zeigen.

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

Sehen wir uns als nächstes den JavaScript-Code an. Beachten Sie, dass der Prozess zum Aufbau der Verbindung hier etwas konstruiert ist; normalerweise erstellt man beide Enden der Verbindung nicht im selben Dokument.

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

Dies sind, in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer sendet, wenn die "Wählen"-Schaltfläche angeklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die den Anrufer und den Empfänger darstellen. Diese werden initialisiert, wenn der Anruf in unserer `connectAndDial()`-Funktion startet, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) unten gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender)-Objekt für die Verbindung. Dieses wird während der Verbindungseinrichtung im `gotStream()`-Funktion, die im Abschnitt [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung) gezeigt wird, erhalten.
- `hasAddTrack`
  - : Da einige Browser [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) noch nicht implementiert haben und daher die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode erfordern, nutzen wir dieses Boolean, um zu bestimmen, ob der Benutzeragent `addTrack()` unterstützt. Wenn nicht, greifen wir auf `addStream()` zurück. Diese Information wird in `connectAndDial()` herausgefunden, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Starten der Verbindung verwendet werden sollen. Wir möchten eine reine Audioverbindung, daher ist `video` auf `false` gesetzt, während `audio` auf `true` gesetzt ist.
- `dialButton` und `logElement`
  - : Diese Variablen werden verwendet, um Referenzen zur Wahlschaltfläche und zum {{HTMLElement("div")}}, in den die Protokollinformationen geschrieben werden, zu speichern. Sie werden eingerichtet, wenn die Seite erstmals geladen wird. Siehe [Initialisierung](#initialisierung) unten.

#### Initialisierung

Beim Laden der Seite führen wir einige grundlegende Einstellungen durch: Wir holen Referenzen zu den Wahlschaltflächen- und Protokollausgabe-Feldelementen und verwenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um der Wahlschaltfläche einen Ereignislistener hinzuzufügen, der `connectAndDial()` aufruft, um den Verbindungsprozess zu starten.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial);
});
```

#### Starten des Verbindungsprozesses

Wenn die Wahlschaltfläche angeklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung auf das Senden der DTMF-Codes.

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

Nachdem die `RTCPeerConnection` für den Anrufer (`callerPC`) erstellt wurde, überprüfen wir, ob sie eine [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode hat. Wenn ja, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable ermöglicht es dem Beispiel, selbst in Browsern zu funktionieren, die die neuere `addTrack()`-Methode noch nicht implementiert haben; das erreichen wir, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream)-Methode zurückgreifen.

Anschließend werden die Ereignishandler für den Anrufer eingerichtet. Wir werden diese später im Detail behandeln.

Dann wird eine zweite `RTCPeerConnection`, die das Empfangsende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; auch ihr `onicecandidate`-Ereignishandler wird eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignishandler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignisse werden ausgelöst, wenn Medien zur Verbindung hinzugefügt werden.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Wenn dies erfolgreich ist, wird die Funktion `gotStream()` aufgerufen, andernfalls loggen wir den Fehler, da der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn der Audioeingang vom Mikrofon erhalten wird. Ihre Aufgabe ist es, den Stream aufzubauen, der an den Empfänger gesendet wird, sodass der eigentliche Prozess des Sendens beginnen kann. Außerdem wird Zugriff auf den `RTCDTMFSender` erlangt, mit dem wir DTMF über die Verbindung ausgeben werden.

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

Nachdem `audioTracks` auf eine Liste der Audiotracks im Stream vom Benutzer-Mikrofon gesetzt wurde, ist es an der Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jeden der Audiotracks des Streams einzeln zur Verbindung mithilfe von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) hinzu. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als Ganzes zum Anruf hinzuzufügen.

Anschließend überprüfen wir, ob die [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders)-Methode implementiert ist. Wenn ja, rufen wir sie auf `callerPC` auf und erhalten den ersten Eintrag in der zurückgegebenen Liste der Sender; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für das Senden von Daten für den ersten Audiotrack des Anrufs verantwortlich ist (dieser Track ist derjenige, über den wir DTMF senden werden). Danach erhalten wir die `dtmf`-Eigenschaft des `RTCRtpSender`, das ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) ist, das DTMF auf der Verbindung vom Anrufer an den Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, um älteren Browsern (und solchen, die noch nicht aktualisiert wurden, um die aktuelle WebRTC-DTMF-API zu unterstützen) die Möglichkeit zu geben, das Beispiel auszuführen.

Schließlich setzen wir den [`ontonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignishandler des DTMF-Senders, um bei jedem Abspielen eines DTMF-Tons benachrichtigt zu werden.

Die Protokollfunktion finden Sie am Ende der Dokumentation.

#### Wenn ein Ton zu Ende gespielt ist

Jedes Mal, wenn ein DTMF-Ton zu Ende gespielt ist, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` gesendet. Der Ereignislistener für diese Ereignisse wird als `handleToneChangeEvent()`-Funktion implementiert.

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

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelner Ton abgespielt wurde, als auch wenn alle Töne fertig abgespielt sind. Die [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone)-Eigenschaft des Ereignisses ist ein String, der angibt, welcher Ton gerade fertig gespielt wurde. Wenn alle Töne fertig gespielt sind, ist `tone` ein leerer String; wenn das der Fall ist, ist `RTCDTMFSender.toneBuffer` leer.

In diesem Beispiel schreiben wir auf den Bildschirm, welcher Ton gerade fertig gespielt wurde. In einer fortgeschritteneren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, um beispielsweise anzuzeigen, welcher Ton gerade gespielt wird.

Andererseits, wenn der Tonpuffer leer ist, ist unser Beispiel so gestaltet, dass der Anruf getrennt wird. Dies geschieht, indem jeder Stream sowohl beim Anrufer als auch beim Empfänger gestoppt wird, indem über jede `RTCPeerConnection`-Trackliste (wie von ihrer [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode zurückgegeben) iteriert und die `stop()`-Methode jedes Tracks aufgerufen wird.

Nachdem sowohl die Media-Tracks des Anrufers als auch des Empfängers gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`. Dadurch wird der Audiostream vom {{HTMLElement("audio")}}-Element getrennt.

Dann schließlich wird jede `RTCPeerConnection` durch Aufruf ihrer [`close()`](/de/docs/Web/API/RTCPeerConnection/close)-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die `RTCPeerConnection`-ICE-Schicht des Anrufers einen neuen Kandidaten vorschlägt, sendet sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `callerPC`. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Empfänger zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, daher können wir den Kandidaten einfach dem Empfänger hinzufügen, indem wir dessen [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Das wird von `handleCallerIceEvent()` gehandhabt:

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null`-`candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und "übermitteln" es dem Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und dem neuen `RTCIceCandidate` als Eingabe übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler an unseren Protokollkasten aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Wählen, sobald die Verbindung offen ist

Unser Design fordert, dass bei Herstellung der Verbindung sofort die DTMF-Zeichenfolge gesendet wird. Um dies zu erreichen, warten wir, bis der Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis empfängt. Dieses Ereignis wird gesendet, wenn eine von mehreren Änderungen am Status des ICE-Verbindungsprozesses auftritt, einschließlich des erfolgreichen Aufbaus einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält nicht direkt den neuen Status, daher holen wir den aktuellen Status des Verbindungsprozesses von der [`RTCPeerConnection.iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState)-Eigenschaft von `callerPC`. Nach dem Protokollieren des neuen Status prüfen wir, ob der Status `"connected"` ist. Wenn ja, protokollieren wir die Tatsache, dass wir dabei sind, den DTMF zu senden, dann rufen wir [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um den DTMF auf derselben Spur zu senden wie die Audiodatenmethode auf dem `RTCDTMFSender`-Objekt, das wir [zuvor gespeichert](#hinzufügen_des_audios_zur_verbindung) haben in `dtmfSender`.

Unser Aufruf an `insertDTMF()` gibt nicht nur den zu sendenden DTMF (`dialString`) an, sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeit zwischen den Tönen (50 ms).

#### Aushandeln der Verbindung

Wenn die aufrufende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beginnt, Medien zu empfangen (nachdem der Mikrophon-Stream hinzugefügt wurde), wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an den Anrufer gesendet, das ihn darüber informiert, dass es Zeit ist, die Verbindung mit dem Empfänger zu verhandeln. Wie bereits erwähnt, ist unser Beispiel etwas vereinfacht, da wir sowohl den Anrufer als auch den Empfänger kontrollieren, sodass `handleCallerNegotiationNeeded()` in der Lage ist, die Verbindung schnell zu konstruieren, indem es Methoden für sowohl den Anrufer als auch den Empfänger aufruft, wie unten gezeigt.

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

Da die verschiedenen beteiligten Methoden `promise`s zurückgeben, können wir sie folgendermaßen verketten:

1. Rufen Sie [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erhalten.
2. Dann nehmen Sie dieses Angebot und setzen die lokale Beschreibung des Anrufers, indem Sie [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufrufen.
3. Dann "übermitteln" Sie das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dadurch wird der Empfänger konfiguriert, damit er weiß, wie der Anrufer konfiguriert ist.
4. Als nächstes erstellt der Empfänger eine Antwort, indem er [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
5. Dann setzt der Empfänger seine lokale Beschreibung auf die neu erstellte Antwort, indem er [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufruft.
6. Schließlich wird die Antwort an den Anrufer "übermittelt", indem [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen wird. Dadurch wird dem Anrufer mitgeteilt, wie die Konfiguration des Empfängers aussieht.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt die `catch()`-Klausel eine Fehlermeldung an das Protokoll aus.

#### Verfolgen anderer Statusänderungen

Wir können auch Änderungen am Signalisierungsstatus (durch Akzeptieren von [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignissen) und am ICE-Sammlungsstatus (durch Akzeptieren von [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignissen) beobachten. Wir verwenden diese für nichts, daher protokollieren wir sie nur. Wir hätten diese Ereignislistener auch gar nicht einrichten können.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die `RTCPeerConnection`-ICE-Schicht des Empfängers einen neuen Kandidaten vorschlägt, sendet sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis an `receiverPC`. Die Aufgabe des `icecandidate`-Ereignishandlers ist es, den Kandidaten an den Anrufer zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, daher können wir den Kandidaten einfach dem Anrufer hinzufügen, indem wir dessen [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate)-Methode aufrufen. Das wird von `handleReceiverIceEvent()` gehandhabt.

Dieser Code ist analog zum `icecandidate`-Ereignishandler für den Anrufer, wie im Abschnitt [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) oben gezeigt.

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

Wenn das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis eine nicht-`null`-`candidate`-Eigenschaft hat, erstellen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt aus dem `event.candidate`-String und liefern es an den Anrufer, indem wir das in `callerPC.addIceCandidate()` übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler an unseren Protokollkasten aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers gesendet, `receiverPC`. Wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) erklärt, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir auch das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event)-Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` unten demonstriert.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaft, die ein Array der Streams enthält, deren Mitglied der Track ist (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und verbinden ihn mit dem {{HTMLElement("audio")}}-Element.

Das `addstream`-Ereignis enthält eine [`stream`](/de/docs/Web/API/MediaStreamEvent/stream)-Eigenschaft, die einen einzelnen Stream angibt, der zum Track hinzugefügt wurde. Wir verbinden ihn mit dem `<audio>`-Element.

#### Protokollierung

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an einen {{HTMLElement("div")}}-Kasten anzuhängen, um Status- und Fehlermeldungen an den Benutzer anzuzeigen.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die "Wählen"-Schaltfläche klicken, sollten Sie eine Reihe von Protokollnachrichten sehen; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil seines Benutzererlebnisses hörbar abspielt, sollten Sie sie hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Nachdem die Töne übertragen wurden, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um sich wieder zu verbinden und die Töne zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess detaillierter erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

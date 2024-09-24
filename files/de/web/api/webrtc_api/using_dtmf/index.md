---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Um die Unterstützung für Audio-/Videokonferenzen umfassender zu gestalten, unterstützt [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF")}} an den entfernten Teilnehmer einer {{domxref("RTCPeerConnection")}}. Dieser Artikel bietet einen kurzen Überblick darüber, wie DTMF über WebRTC funktioniert, und bietet dann einen Leitfaden für Entwickler, wie DTMF über eine `RTCPeerConnection` gesendet wird. Das DTMF-System wird oft als "Tonwahl" bezeichnet, nach einem alten Handelsnamen für das System.

WebRTC sendet keine DTMF-Codes als Audiodaten. Stattdessen werden sie außerhalb des Bandes als RTP-Datenpakete gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es derzeit jedoch keine Möglichkeit gibt, eingehendes DTMF zu erkennen oder zu empfangen. WebRTC ignoriert diese Nutzlasten derzeit; dies liegt daran, dass die DTMF-Unterstützung von WebRTC in erster Linie zur Verwendung mit älteren Telefonsystemen gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie die folgenden auszuführen:

- Telefonkonferenzsysteme
- Menüsysteme
- Voicemail-Systeme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Passworteingabe

> [!NOTE]
> Während das DTMF nicht als Audio an den entfernten Teilnehmer gesendet wird, können Browser wählen, ob sie den entsprechenden Ton dem lokalen Benutzer als Teil ihrer Benutzererfahrung vorspielen, da Benutzer normalerweise daran gewöhnt sind, zu hören, wie ihr Telefon die Töne hörbar wiedergibt.

## Senden von DTMF über eine RTCPeerConnection

Eine gegebene {{domxref("RTCPeerConnection")}} kann mehrere Medienstreams senden oder empfangen. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zunächst entscheiden, auf welchem Track Sie sie senden möchten, da DTMF als eine Reihe von außerhalb des Bandes gesendeten Nutzlasten über den {{domxref("RTCRtpSender")}} gesendet wird, der für die Übertragung der Daten dieses Tracks an den anderen Teilnehmer verantwortlich ist.

Sobald der Track ausgewählt ist, können Sie vom entsprechenden `RTCRtpSender` das {{domxref("RTCDTMFSender")}}-Objekt abrufen, das Sie zum Senden von DTMF verwenden. Von dort aus können Sie {{domxref("RTCDTMFSender.insertDTMF()")}} aufrufen, um DTMF-Signale zur Übertragung auf dem Track an den anderen Teilnehmer zu übermitteln. Der `RTCRtpSender` sendet dann die Töne zusammen mit den Audiodaten des Tracks in Paketen an den anderen Teilnehmer.

Jedes Mal, wenn ein Ton gesendet wird, empfängt die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis mit einer {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}}-Eigenschaft, die angibt, welcher Ton abgespielt wurde, was eine Gelegenheit ist, beispielsweise Schnittstellenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was bedeutet, dass alle Töne gesendet wurden, wird der Verbindungsobjekt ein `tonechange`-Ereignis mit seiner `tone`-Eigenschaft gleich "" (ein leerer String) zugestellt.

Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzlasten bei RTP behandelt werden, liegen außerhalb des Rahmens dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF im Kontext einer {{domxref("RTCPeerConnection")}} verwendet wird, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel konstruiert zwei {{domxref("RTCPeerConnection")}}, stellt eine Verbindung zwischen ihnen her und wartet darauf, dass der Benutzer auf eine "Wählen"-Schaltfläche klickt. Wenn die Schaltfläche angeklickt wird, wird eine DTMF-Zeichenfolge über die Verbindung mithilfe von {{domxref("RTCDTMFSender.insertDTMF()")}} gesendet. Sobald die Töne übertragen sind, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection`-Objekte auf verschiedenen Geräten existieren würden, und die Signalübermittlung würde über das Netzwerk erfolgen, anstatt dass alles hier miteinander verbunden ist.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das von der `RTCPeerConnection` empfangene Audio abzuspielen, das "angerufen" wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte und das anschließende Senden der DTMF-Töne auszulösen.
- Ein {{HTMLElement("div")}}, um Protokolltexte zu empfangen und anzuzeigen, um Statusinformationen zu zeigen.

```html
<p>
  Dieses Beispiel demonstriert die Verwendung von DTMF in WebRTC. Beachten Sie, dass dieses Beispiel "schummelt", indem es beide Teilnehmer in einem Code-Stream generiert, anstatt dass jeder ein wirklich separates Objekt ist.
</p>

<audio id="audio" autoplay controls></audio><br />
<button name="dial" id="dial">Wählen</button>

<div class="log"></div>
```

### JavaScript

Schauen wir uns nun den JavaScript-Code an. Beachten Sie, dass der Prozess zum Aufbau der Verbindung hier etwas konstruiert ist; normalerweise erstellt man nicht beide Enden der Verbindung im selben Dokument.

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

Diese sind, in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer sendet, wenn die "Wählen"-Schaltfläche angeklickt wird.
- `callerPC` und `receiverPC`
  - : Die {{domxref("RTCPeerConnection")}}-Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden initialisiert, wenn der Anruf in unserer Funktion `connectAndDial()` startet, wie im Abschnitt [Starting the connection process](#starten_des_verbindungsprozesses) unten gezeigt.
- `dtmfSender`
  - : Das {{domxref("RTCDTMFSender")}}-Objekt für die Verbindung. Dies wird während der Einrichtung der Verbindung in der in [Adding the audio to the connection](#hinzufügen_des_audios_zur_verbindung) gezeigten Funktion `gotStream()` abgerufen.
- `hasAddTrack`
  - : Da einige Browser {{domxref("RTCPeerConnection.addTrack()")}} noch nicht implementiert haben und daher die Verwendung der veralteten {{domxref("RTCPeerConnection.addStream", "addStream()")}}-Methode erforderlich ist, verwenden wir diesen Boolean-Wert, um festzustellen, ob der Benutzeragent `addTrack()` unterstützt; wenn nicht, greifen wir auf `addStream()` zurück. Dies wird in `connectAndDial()` ermittelt, wie im Abschnitt [Starting the connection process](#starten_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Start der Verbindung verwendet werden sollen. Wir möchten eine reine Audio-Verbindung, daher ist `video` `false`, während `audio` `true` ist.
- `offerOptions`
  - : Ein Objekt, das Optionen bereitstellt, die beim Aufrufen von {{domxref("RTCPeerConnection.createOffer()")}} angegeben werden. In diesem Fall geben wir an, dass wir nur Audio, aber kein Video empfangen möchten.
- `dialButton` und `logElement`
  - : Diese Variablen werden verwendet, um Referenzen auf die Wahltaste und das {{HTMLElement("div")}}, in das Protokollinformationen geschrieben werden, zu speichern. Sie werden beim ersten Laden der Seite eingerichtet. Siehe [Initialization](#initialisierung) unten.

#### Initialisierung

Wenn die Seite geladen wird, führen wir einige grundlegende Setups durch: Wir holen Referenzen zu den Wahltasten- und Protokollausgabefeld-Elementen und verwenden {{domxref("EventTarget.addEventListener", "addEventListener()")}}, um einen Ereignis-Listener zur Wahltaste hinzuzufügen, sodass beim Klicken die Funktion `connectAndDial()` aufgerufen wird, um den Verbindungsprozess zu starten.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### Starten des Verbindungsprozesses

Wenn die Wahltaste angeklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung des Sendens der DTMF-Codes.

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

Nach dem Erstellen der `RTCPeerConnection` für den Anrufer (`callerPC`) prüfen wir, ob es eine {{domxref("RTCPeerConnection.addTrack", "addTrack()")}}-Methode hat. Wenn dem so ist, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable ermöglicht dem Beispiel, auch auf Browsern zu funktionieren, die die neuere `addTrack()`-Methode noch nicht implementiert haben; wir tun dies, indem wir auf die ältere {{domxref("RTCPeerConnection.addStream", "addStream()")}}-Methode zurückgreifen.

Als nächstes werden die Ereignishandler für den Anrufer eingerichtet. Wir werden diese später im Detail besprechen.

Dann wird eine zweite `RTCPeerConnection`, die dieses Mal das empfangende Ende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; ihr `onicecandidate`-Ereignishandler wird ebenfalls eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack`-Ereignishandler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die {{domxref("RTCPeerConnection.track_event", "track")}}- und {{domxref("RTCPeerConnection/addstream_event", "addstream")}}-Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Zuletzt rufen wir {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} auf, um Zugriff auf das Mikrofon des Anrufers zu erhalten. Wenn dies erfolgreich ist, wird die Funktion `gotStream()` aufgerufen, andernfalls protokollieren wir den Fehler, da das Aufrufen fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird, wenn der Audioeingang vom Mikrofon bereitgestellt wird, `gotStream()` aufgerufen. Ihre Aufgabe ist es, den Stream aufzubauen, der an den Empfänger gesendet wird, sodass der eigentliche Übertragungsprozess beginnen kann. Sie erhält auch Zugriff auf den `RTCDTMFSender`, den wir zur Übertragung von DTMF über die Verbindung verwenden.

```js
function gotStream(stream) {
  log("Zugriff auf das Mikrofon erhalten.");

  let audioTracks = stream.getAudioTracks();

  if (hasAddTrack) {
    if (audioTracks.length > 0) {
      audioTracks.forEach((track) => callerPC.addTrack(track, stream));
    }
  } else {
    log(
      "Ihr Browser unterstützt RTCPeerConnection.addTrack() nicht. " +
        "Zurückfallen auf die <strong>veraltete</strong> addStream() Methode…",
    );
    callerPC.addStream(stream);
  }

  if (callerPC.getSenders) {
    dtmfSender = callerPC.getSenders()[0].dtmf;
  } else {
    log(
      "Ihr Browser unterstützt RTCPeerConnection.getSenders() nicht, daher " +
        "verwenden wir die <strong>veraltete</strong> createDTMFSender() " +
        "stattdessen.",
    );
    dtmfSender = callerPC.createDTMFSender(audioTracks[0]);
  }

  dtmfSender.ontonechange = handleToneChangeEvent;
}
```

Nachdem `audioTracks` auf eine Liste der Audiotracks des Streams von dem Mikrofon des Benutzers gesetzt wird, ist es an der Zeit, das Medium zur `RTCPeerConnection` des Anrufers hinzuzufügen. Wenn `addTrack()` für die `RTCPeerConnection` verfügbar ist, fügen wir jeden der Audiotracks des Streams einzeln der Verbindung mit {{domxref("RTCPeerConnection.addTrack()")}} hinzu. Andernfalls rufen wir {{domxref("RTCPeerConnection.addStream()")}} auf, um den Stream als eine Einheit zum Anruf hinzuzufügen.

Als nächstes prüfen wir, ob die Methode {{domxref("RTCPeerConnection.getSenders()")}} implementiert ist. Wenn dies der Fall ist, rufen wir sie auf `callerPC` auf und erhalten den ersten Eintrag in der zurückgegebenen Liste der Sender; dies ist der {{domxref("RTCRtpSender")}}, der für die Übertragung der Daten des ersten Audiotracks beim Anruf verantwortlich ist (was der Track ist, über den wir DTMF senden werden). Wir erhalten dann die `RTCRtpSender`-{{domxref("RTCRtpSender.dtmf", "dtmf")}}-Eigenschaft, die ein {{domxref("RTCDTMFSender")}}-Objekt darstellt, das DTMF auf der Verbindung vom Anrufer an den Empfänger senden kann.

Wenn `getSenders()` nicht verfügbar ist, rufen wir stattdessen {{domxref("RTCPeerConnection.createDTMFSender()")}} auf, um das `RTCDTMFSender`-Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, um es älteren Browsern (und solchen, die noch nicht aktualisiert wurden, um die aktuelle WebRTC-DTMF-API zu unterstützen) zu ermöglichen, das Beispiel auszuführen.

Zuletzt setzen wir den {{domxref("RTCDTMFSender.tonechange_event", "ontonechange")}}-Ereignishandler des DTMF-Senders, damit wir benachrichtigt werden, jedes Mal, wenn ein DTMF-Ton zu Ende gespielt wird.

Sie finden die Protokollfunktion am Ende der Dokumentation.

#### Wenn ein Ton zu Ende gespielt wird

Jedes Mal, wenn ein DTMF-Ton zu Ende gespielt wird, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an `callerPC` gesendet. Der Ereignis-Listener für diese ist als `handleToneChangeEvent()`-Funktion implementiert.

```js
function handleToneChangeEvent(event) {
  if (event.tone !== "") {
    log(`Ton gespielt: ${event.tone}`);
  } else {
    log("Alle Töne wurden gespielt. Verbindung trennen.");
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

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelner Ton gespielt wurde, als auch wenn alle Töne abgespielt wurden. Die {{domxref("RTCDTMFToneChangeEvent.tone", "tone")}}-Eigenschaft des Ereignisses ist ein String, der angibt, welcher Ton gerade gespielt wurde. Wenn alle Töne abgespielt sind, ist `tone` ein leerer String; wenn dies der Fall ist, ist der {{domxref("RTCDTMFSender.toneBuffer")}} leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welcher Ton gerade gespielt wurde. In einer fortgeschritteneren Anwendung könnten Sie die Benutzeroberfläche aktualisieren, um beispielsweise anzuzeigen, welcher Ton gerade abgespielt wird.

Andererseits, wenn der Tonpuffer leer ist, ist unser Beispiel darauf ausgelegt, den Anruf zu beenden. Dies wird erreicht, indem jeder Stream sowohl des Anrufers als auch des Empfängers gestoppt wird, indem über die Trackliste jeder `RTCPeerConnection` iteriert wird (wie durch die {{domxref("MediaStream.getTracks", "getTracks()")}}-Methode zurückgegeben) und die Methode {{domxref("MediaStreamTrack.stop", "stop()")}} jedes Tracks aufgerufen wird.

Sobald sowohl die Media-Tracks des Anrufers als auch des Empfängers gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen sein {{domxref("HTMLMediaElement.srcObject", "srcObject")}} auf `null`. Dies trennt den Audiostream vom {{HTMLElement("audio")}}-Element.

Dann werden schließlich beide `RTCPeerConnection`-Verbindungen durch das Aufrufen ihrer {{domxref("RTCPeerConnection.close", "close()")}}-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die ICE-Schicht der `RTCPeerConnection` des Anrufers einen neuen Kandidaten zur Vorschlagserstellung findet, wird ein {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis an `callerPC` gesendet. Der `icecandidate`-Ereignishandler hat die Aufgabe, den Kandidaten an den Empfänger zu übertragen. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, sodass wir den Kandidaten einfach direkt an den Empfänger hinzufügen können, indem wir seine {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}-Methode aufrufen. Das wird durch `handleCallerIceEvent()` gehandhabt:

```js
function handleCallerIceEvent(event) {
  if (event.candidate) {
    log(`Kandidat zum Empfänger hinzufügen: ${event.candidate.candidate}`);

    receiverPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Fehler beim Hinzufügen des Kandidaten zum Empfänger: ${err}`));
  } else {
    log("Anrufer hat keine weiteren Kandidaten mehr.");
  }
}
```

Wenn das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis eine nicht-`null` `candidate`-Eigenschaft aufweist, erstellen wir aus dem `event.candidate`-String ein neues {{domxref("RTCIceCandidate")}}-Objekt und "übertragen" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` aufrufen und den neuen `RTCIceCandidate` als Eingabe bereitstellen. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in unser Protokoll aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Wählen, sobald die Verbindung offen ist

Unser Design erfordert, dass wir, sobald die Verbindung hergestellt ist, sofort die DTMF-Zeichenfolge senden. Um dies zu ermöglichen, achten wir darauf, dass der Anrufer ein {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Ereignis empfängt. Dieses Ereignis wird ausgelöst, wenn sich eine Reihe von Änderungen am Zustand des ICE-Verbindungsvorgangs ergeben, einschließlich der erfolgreichen Herstellung einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Der Verbindungsstatus des Anrufers hat sich auf ${callerPC.iceConnectionState} geändert`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Senden von DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange`-Ereignis enthält tatsächlich nicht den neuen Zustand, daher erhalten wir den aktuellen Zustand des Verbindungsprozesses von der {{domxref("RTCPeerConnection.iceConnectionState")}}-Eigenschaft von `callerPC`. Nachdem wir den neuen Zustand protokolliert haben, prüfen wir, ob der Zustand `"connected"` ist. Wenn ja, protokollieren wir, dass wir dabei sind, die DTMF zu senden, dann rufen wir {{domxref("RTCDTMFSender.insertDTMF", "dtmf.insertDTMF()")}} auf, um die DTMF auf demselben Track wie die Audiodatenmethode des `RTCDTMFSender`-Objekts zu senden, die wir [zuvor gespeichert](#hinzufügen_des_audios_zur_verbindung) in `dtmfSender`.

Unser Aufruf `insertDTMF()` gibt nicht nur die zu sendende DTMF (`dialString`) an, sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeit zwischen den Tönen (50 ms).

#### Verhandeln der Verbindung

Wenn die aufrufende {{domxref("RTCPeerConnection")}} beginnt, Medien zu empfangen (nachdem der Mikrofonstream hinzugefügt wurde), wird ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis an den Anrufer gesendet, um ihm mitzuteilen, dass es Zeit ist, die Verbindung mit dem Empfänger auszuhandeln. Wie bereits erwähnt, ist unser Beispiel etwas vereinfacht, da wir sowohl den Anrufer als auch den Empfänger kontrollieren. Daher kann `handleCallerNegotiationNeeded()` die Verbindung schnell durch das Verketten der erforderlichen Aufrufe für Anrufer und Empfänger aufbauen, wie unten gezeigt.

```js
function handleCallerNegotiationNeeded() {
  log("Aushandeln…");
  callerPC
    .createOffer(offerOptions)
    .then((offer) => {
      log(`Lokale Beschreibung des Anrufers festlegen: ${offer.sdp}`);
      return callerPC.setLocalDescription(offer);
    })
    .then(() => {
      log(
        "Fernbeschreibung des Empfängers so festlegen, dass sie der lokalen Beschreibung des Anrufers entspricht",
      );
      return receiverPC.setRemoteDescription(callerPC.localDescription);
    })
    .then(() => {
      log("Antwort erstellen");
      return receiverPC.createAnswer();
    })
    .then((answer) => {
      log(`Lokale Beschreibung des Empfängers festlegen: ${answer.sdp}`);
      return receiverPC.setLocalDescription(answer);
    })
    .then(() => {
      log("Fernbeschreibung des Anrufers anpassen");
      return callerPC.setRemoteDescription(receiverPC.localDescription);
    })
    .catch((err) => log(`Fehler während der Verhandlung: ${err.message}`));
}
```

Da die verschiedenen Methoden, die an der Aushandlung der Verbindung beteiligt sind, {{jsxref("promise")}}s zurückgeben, können wir sie so verketten:

1. Rufen Sie {{domxref("RTCPeerConnection.createOffer", "callerPC.createOffer()")}} auf, um ein Angebot zu erhalten.
2. Nehmen Sie dann dieses Angebot und setzen Sie die lokale Beschreibung des Anrufers durch das Aufrufen von {{domxref("RTCPeerConnection.setLocalDescription", "callerPC.setLocalDescription()")}}.
3. "Übertragen" Sie dann das Angebot an den Empfänger, indem Sie {{domxref("RTCPeerConnection.setRemoteDescription", "receiverPC.setRemoteDescription()")}} aufrufen. Dies konfiguriert den Empfänger, damit er weiß, wie der Anrufer konfiguriert ist.
4. Der Empfänger erstellt dann eine Antwort durch das Aufrufen von {{domxref("RTCPeerConnection.createAnswer", "receiverPC.createAnswer()")}}.
5. Der Empfänger setzt dann seine lokale Beschreibung so, dass sie der neu erstellten Antwort entspricht, indem er {{domxref("RTCPeerConnection.setLocalDescription", "receiverPC.setLocalDescription()")}} aufruft.
6. Die Antwort wird dann "übertragen" an den Anrufer, indem {{domxref("RTCPeerConnection.setRemoteDescription", "callerPC.setRemoteDescription()")}} aufgerufen wird. Dies informiert den Anrufer über die Konfiguration des Empfängers.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt die `catch()`-Klausel eine Fehlermeldung im Protokoll aus.

#### Verfolgen von anderen Zustandsänderungen

Wir können auch Änderungen am Signalisierungszustand beobachten (durch das Akzeptieren von {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}-Ereignissen) und am ICE-Sammelzustand (durch das Akzeptieren von {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}-Ereignissen). Wir verwenden diese für nichts, daher protokollieren wir nur ihre Namen. Wir hätten diese Ereignis-Listener gar nicht einrichten müssen.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Der Signalisierungszustand des Anrufers hat sich geändert zu ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Der ICE-Sammelzustand des Anrufers hat sich geändert zu ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die ICE-Schicht der `RTCPeerConnection` des Empfängers einen neuen Kandidaten zur Vorschlagserstellung findet, wird ein {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis an `receiverPC` gesendet. Der `icecandidate`-Ereignishandler hat die Aufgabe, den Kandidaten an den Anrufer zu übertragen. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, sodass wir den Kandidaten einfach direkt an den Anrufer hinzufügen können, indem wir seine {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}-Methode aufrufen. Dies wird durch `handleReceiverIceEvent()` gehandhabt.

Dieser Code ist analog zum `icecandidate`-Ereignishandler für den Anrufer, wie in [Adding candidates to the caller](#hinzufügen_von_kandidaten_zum_anrufer) oben gezeigt.

```js
function handleReceiverIceEvent(event) {
  if (event.candidate) {
    log(`Kandidat zum Anrufer hinzufügen: ${event.candidate.candidate}`);

    callerPC
      .addIceCandidate(new RTCIceCandidate(event.candidate))
      .catch((err) => log(`Fehler beim Hinzufügen des Kandidaten zum Anrufer: ${err}`));
  } else {
    log("Empfänger hat keine weiteren Kandidaten mehr.");
  }
}
```

Wenn das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis eine nicht-`null` `candidate`-Eigenschaft aufweist, erstellen wir aus dem `event.candidate`-String ein neues {{domxref("RTCIceCandidate")}}-Objekt und übergeben es dem Anrufer, indem wir das an `callerPC.addIceCandidate()` übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt die `catch()`-Klausel den Fehler in unser Protokoll aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die {{domxref("RTCPeerConnection")}} des Empfängers, `receiverPC`, gesendet. Wie im Abschnitt [Starting the connection process](#starten_des_verbindungsprozesses) erklärt, verwendet die derzeitige WebRTC-Spezifikation das {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignis dafür. Da einige Browser noch nicht aktualisiert wurden, um dies zu unterstützen, müssen wir auch das {{domxref("RTCPeerConnection/addstream_event", "addstream")}}-Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` unten gezeigt.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track`-Ereignis enthält eine {{domxref("RTCTrackEvent.streams", "streams")}}-Eigenschaft, die ein Array der Streams enthält, bei denen der Track Mitglied ist (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und hängen ihn an das {{HTMLElement("audio")}}-Element an.

Das `addstream`-Ereignis enthält eine {{domxref("MediaStreamEvent.stream", "stream")}}-Eigenschaft, die einen einzelnen Stream angibt, der dem Track hinzugefügt wurde. Wir hängen ihn an das `<audio>`-Element an.

#### Protokollierung

Eine einfache `log()`-Funktion wird im gesamten Code verwendet, um Text an ein {{HTMLElement("div")}}-Feld anzuhängen, das Status und Fehler an den Benutzer anzeigt.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die Schaltfläche "Wählen" klicken, sollten eine Reihe von Protokollnachrichten ausgegeben werden; dann beginnt das Wählen. Wenn Ihr Browser die Töne als Teil seiner Benutzererfahrung hörbar wiedergibt, sollten Sie sie hören, während sie übertragen werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne beendet ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess ausführlicher erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

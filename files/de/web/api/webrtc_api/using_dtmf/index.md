---
title: Verwendung von DTMF mit WebRTC
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Um Audio-/Videokonferenzen umfassender zu unterstützen, ermöglicht [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von [DTMF](/de/docs/Glossary/DTMF) an den entfernten Teilnehmer über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen Überblick darüber, wie DTMF über WebRTC funktioniert, und liefert dann einen Leitfaden für Entwickler, wie man DTMF über eine `RTCPeerConnection` sendet. Das DTMF-System wird oft als "Tonwahl" bezeichnet, nach einem alten Markennamen für das System.

WebRTC sendet DTMF-Codes nicht als Audiodaten. Stattdessen werden sie außerhalb der Bandbreite als RTP-Nutzlast gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es jedoch derzeit keinen Weg gibt, _eingehende_ DTMF zu erkennen oder zu empfangen. WebRTC ignoriert aktuell diese Nutzlasten, da die Unterstützung von DTMF in WebRTC in erster Linie für die Verwendung mit älteren Telefonsystemen gedacht ist, die auf DTMF-Töne angewiesen sind, um Aufgaben wie folgende auszuführen:

- Telefonkonferenzsysteme
- Menüs
- Voicemail-Systeme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Eingabe von Passcodes

> [!NOTE]
> Während DTMF nicht als Audio an den entfernten Teilnehmer gesendet wird, können Browser wählen, den entsprechenden Ton dem lokalen Benutzer als Teil ihrer Benutzererfahrung abzuspielen, da Benutzer typischerweise daran gewöhnt sind, ihre Telefone die Töne hörbar abspielen zu lassen.

## Senden von DTMF auf einer RTCPeerConnection

Eine gegebene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medientracks senden oder empfangen. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zuerst entscheiden, auf welchem Track Sie diese senden möchten, da DTMF als eine Reihe von außerhalb der Bandbreite gesendeten Nutzlasten auf dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieses Tracks an den anderen Teilnehmer verantwortlich ist.

Sobald der Track ausgewählt ist, können Sie vom `RTCRtpSender` das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) Objekt erhalten, das Sie zum Senden von DTMF verwenden werden. Von dort aus können Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) aufrufen, um DTMF-Signale in die Warteschlange zu stellen, die auf dem Track an den anderen Teilnehmer gesendet werden sollen. Der `RTCRtpSender` wird dann die Töne als Pakete neben den Audiodaten des Tracks an den anderen Teilnehmer senden.

Jedes Mal, wenn ein Ton gesendet wird, erhält die `RTCPeerConnection` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis mit einer [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) Eigenschaft, die angibt, welcher Ton gerade beendet wurde, was eine Gelegenheit bietet, beispielsweise Interface-Elemente zu aktualisieren. Wenn der Ton-Puffer leer ist und alle Töne gesendet wurden, wird ein `tonechange` Ereignis mit seiner `tone` Eigenschaft auf "" (ein leerer String) auf das Verbindungsobjekt geliefert.

Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details, wie DTMF-Nutzlasten auf RTP behandelt werden, liegen außerhalb des Geltungsbereichs dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie man DTMF im Kontext einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel konstruiert zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, stellt eine Verbindung zwischen ihnen her und wartet dann, bis der Benutzer auf einen "Wählen"-Button klickt. Wenn der Button geklickt wird, wird eine DTMF-Zeichenkette über die Verbindung gesendet, indem [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) verwendet wird. Sobald die Töne übertragen wurden, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da normalerweise die beiden `RTCPeerConnection` Objekte auf verschiedenen Geräten existieren würden und das Signaling über das Netzwerk stattfindet, anstatt dass alles hier inline verbunden wird.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element, um das Audio abzuspielen, das von der "zu rufenden" `RTCPeerConnection` empfangen wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte zu triggern und dann die DTMF-Töne zu senden.
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

Schauen wir uns als Nächstes den JavaScript-Code an. Beachten Sie, dass der Prozess des Aufbauens der Verbindung hier etwas konstruiert ist; normalerweise baut man nicht beide Enden der Verbindung im selben Dokument auf.

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

Dies sind in der Reihenfolge:

- `dialString`
  - : Die DTMF-Zeichenkette, die gesendet wird, wenn der "Wählen"-Button geklickt wird.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekte, die den Anrufer bzw. den Empfänger darstellen. Diese werden bei Beginn des Anrufs in unserer `connectAndDial()` Funktion initialisiert, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) unten gezeigt.
- `dtmfSender`
  - : Das [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) Objekt für die Verbindung. Dieses wird während der Einrichtung der Verbindung in der `gotStream()` Funktion, die im Abschnitt [Hinzufügen des Audios zur Verbindung](#hinzufügen_des_audios_zur_verbindung) gezeigt wird, erhalten.
- `hasAddTrack`
  - : Da einige Browser [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) noch nicht implementiert haben und daher die Verwendung der veralteten [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) Methode erfordern, verwenden wir diese Boolesche Variable, um zu bestimmen, ob der Benutzeragent `addTrack()` unterstützt; wenn nicht, fallen wir auf `addStream()` zurück. Dies wird in `connectAndDial()` festgestellt, wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `mediaConstraints`
  - : Ein Objekt, das die Einschränkungen angibt, die beim Starten der Verbindung verwendet werden sollen. Wir wollen eine audio-only Verbindung, daher ist `video` auf `false` und `audio` auf `true`.
- `offerOptions`
  - : Ein Objekt, das Optionen bereitstellt, die beim Aufrufen von [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) spezifiziert werden sollen. In diesem Fall geben wir an, dass wir Audio, aber kein Video empfangen möchten.
- `dialButton` und `logElement`
  - : Diese Variablen werden verwendet, um Referenzen auf den Wählbutton und das {{HTMLElement("div")}}, in das Protokollinformationen geschrieben werden, zu speichern. Sie werden eingerichtet, wenn die Seite zum ersten Mal geladen wird. Siehe [Initialisierung](#initialisierung) unten.

#### Initialisierung

Wenn die Seite geladen wird, führen wir einige grundlegende Setups durch: Wir holen Referenzen auf den Wählbutton und das Log-Ausgabeelement ab, und verwenden [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), um einen Ereignis-Listener zum Wählbutton hinzuzufügen, sodass beim Klicken darauf die `connectAndDial()` Funktion aufgerufen wird, um den Verbindungsprozess zu beginnen.

```js
window.addEventListener("load", () => {
  logElement = document.querySelector(".log");
  dialButton = document.querySelector("#dial");

  dialButton.addEventListener("click", connectAndDial, false);
});
```

#### Starten des Verbindungsprozesses

Wenn der Wählbutton geklickt wird, wird `connectAndDial()` aufgerufen. Dies beginnt mit dem Aufbau der WebRTC-Verbindung zur Vorbereitung des Sendens der DTMF-Codes.

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

Nachdem die `RTCPeerConnection` für den Anrufer (`callerPC`) erstellt wurde, prüfen wir, ob sie eine [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) Methode hat. Wenn dies der Fall ist, setzen wir `hasAddTrack` auf `true`; andernfalls setzen wir es auf `false`. Diese Variable ermöglicht es dem Beispiel, auch in Browsern zu funktionieren, die die neuere `addTrack()` Methode noch nicht implementiert haben; wir tun dies, indem wir auf die ältere [`addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) Methode zurückgreifen.

Als Nächstes werden die Ereignishandler für den Anrufer eingerichtet. Wir werden diese später im Detail behandeln.

Dann wird eine zweite `RTCPeerConnection`, die das Empfangsende des Anrufs darstellt, erstellt und in `receiverPC` gespeichert; sein `onicecandidate` Ereignishandler wird ebenfalls eingerichtet.

Wenn `addTrack()` unterstützt wird, richten wir den `ontrack` Ereignishandler des Empfängers ein; andernfalls richten wir `onaddstream` ein. Die [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) und [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) Ereignisse werden gesendet, wenn Medien zur Verbindung hinzugefügt werden.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um Zugang zum Mikrofon des Anrufers zu erhalten. Bei Erfolg wird die Funktion `gotStream()` aufgerufen, andernfalls protokollieren wir den Fehler, weil der Anruf fehlgeschlagen ist.

#### Hinzufügen des Audios zur Verbindung

Wie oben erwähnt, wird `gotStream()` aufgerufen, wenn das Audioeingangssignal vom Mikrofon erfasst wird. Die Aufgabe von `gotStream()` ist es, den Stream aufzubauen, der an den Empfänger gesendet wird, damit der eigentliche Übertragungsprozess beginnen kann. Es erhält auch Zugang zu dem `RTCDTMFSender`, den wir verwenden werden, um DTMF auf der Verbindung auszugeben.

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

Nachdem `audioTracks` auf eine Liste der Audiospuren des Streams vom Mikrofon des Benutzers gesetzt wurde, ist es an der Zeit, die Medien zur `RTCPeerConnection` des Anrufers hinzuzufügen. Falls `addTrack()` auf der `RTCPeerConnection` verfügbar ist, fügen wir jede der Audiospuren des Streams einzeln mithilfe von [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zur Verbindung hinzu. Andernfalls rufen wir [`RTCPeerConnection.addStream()`](/de/docs/Web/API/RTCPeerConnection/addStream) auf, um den Stream als Einheit dem Anruf hinzuzufügen.

Als Nächstes überprüfen wir, ob die Methode [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) implementiert ist. Falls ja, rufen wir sie auf `callerPC` auf und holen den ersten Eintrag in der zurückgegebenen Liste von Sendern; dies ist der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der für die Übertragung von Daten für die erste Audiospur des Anrufs verantwortlich ist (was die Spur ist, über die wir DTMF senden werden). Dann erhalten wir die `dtmf` Eigenschaft des `RTCRtpSender`, welche ein [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) Objekt ist, das DTMF auf der Verbindung vom Anrufer zum Empfänger senden kann.

Falls `getSenders()` nicht verfügbar ist, rufen wir stattdessen [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender) auf, um das `RTCDTMFSender` Objekt zu erhalten. Obwohl diese Methode veraltet ist, unterstützt dieses Beispiel sie als Fallback, damit ältere Browser (und solche, die noch nicht aktualisiert wurden, um die aktuelle WebRTC DTMF API zu unterstützen) das Beispiel ausführen können.

Schließlich setzen wir den [`ontonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignishandler des DTMF-Senders, damit wir jedes Mal benachrichtigt werden, wenn ein DTMF-Ton zu Ende gespielt ist.

Die Log-Funktion finden Sie am Ende der Dokumentation.

#### Wenn ein Ton zu Ende gespielt ist

Jedes Mal, wenn ein DTMF-Ton zu Ende gespielt ist, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event) Ereignis an `callerPC` gesendet. Der Ereignis-Listener für diese ist als die Funktion `handleToneChangeEvent()` implementiert.

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

Das `tonechange` Ereignis wird sowohl verwendet, um anzuzeigen, wann ein individueller Ton gespielt wurde, als auch wann alle Töne zu Ende gespielt sind. Die Eigenschaft `tone` des Ereignisses ist eine Zeichenkette, die angibt, welcher Ton gerade beendet wurde. Wenn alle Töne zu Ende gespielt sind, ist `tone` eine leere Zeichenkette; in diesem Fall ist der `toneBuffer` des `RTCDTMFSender` leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welcher Ton gerade zu Ende gespielt wurde. In einer fortgeschritteneren Anwendung könnten Sie das Benutzerinterface aktualisieren, beispielsweise um anzugeben, welcher Ton gerade gespielt wird.

Wenn der Ton-Puffer leer ist, ist unser Beispiel so gestaltet, dass der Anruf getrennt wird. Dies geschieht, indem jeder Stream sowohl auf der Seite des Anrufers als auch des Empfängers gestoppt wird, indem über jede Trackliste des `RTCPeerConnection` (wie sie durch die Methode `getTracks()` zurückgegeben wird) iteriert und die `stop()` Methode jedes Tracks aufgerufen wird.

Sobald alle Medienspuren des Anrufers und des Empfängers gestoppt sind, pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen `srcObject` auf `null`. Dies löst den Audio-Stream vom `HTMLMediaElement`.

Schließlich wird jede `RTCPeerConnection` durch Aufrufen ihrer `close()`-Methode geschlossen.

#### Hinzufügen von Kandidaten zum Anrufer

Wenn die ICE-Schicht von `RTCPeerConnection` des Anrufers einen neuen Vorschlag für einen Kandidaten hat, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis an `callerPC` aus. Der `icecandidate` Ereignishhandler hat die Aufgabe, den Kandidaten an den Empfänger zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, also können wir den Kandidaten einfach direkt an den Empfänger anfügen, indem wir dessen Methode `addIceCandidate()` aufrufen. Das wird von `handleCallerIceEvent()` behandelt:

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

Wenn das `icecandidate` Ereignis eine nicht-`null` Eigenschaft `candidate` hat, erzeugen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt aus der `event.candidate` Zeichenkette und "übermitteln" es an den Empfänger, indem wir `receiverPC.addIceCandidate()` mit dem neuen `RTCIceCandidate` als Eingabe aufrufen. Wenn `addIceCandidate()` fehlschlägt, gibt der `catch()`-Klausel den Fehler in unserem Protokollfeld aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Wählen, sobald die Verbindung offen ist

Unser Entwurf erfordert, dass, sobald die Verbindung hergestellt ist, wir sofort die DTMF-Zeichenkette senden. Um dies zu erreichen, überwachen wir, ob der Anrufer ein [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) Ereignis erhält. Dieses Ereignis wird gesendet, wenn eine der zahlreichen Änderungen am Zustand des ICE-Verbindungsprozesses auftritt, einschließlich der erfolgreichen Herstellung einer Verbindung.

```js
function handleCallerIceConnectionStateChange() {
  log(`Caller's connection state changed to ${callerPC.iceConnectionState}`);
  if (callerPC.iceConnectionState === "connected") {
    log(`Sending DTMF: "${dialString}"`);
    dtmfSender.insertDTMF(dialString, 400, 50);
  }
}
```

Das `iceconnectionstatechange` Ereignis beinhaltet nicht direkt den neuen Zustand, daher erhalten wir den aktuellen Zustand des Verbindungsprozesses von der `iceConnectionState` Eigenschaft von `callerPC`. Nach dem Protokollieren des neuen Zustands prüfen wir, ob der Zustand `connected` ist. Wenn dies der Fall ist, protokollieren wir, dass wir dabei sind, die DTMF zu senden, und rufen dann [`dtmf.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um die DTMF auf dem gleichen Track wie die Audiodaten auszugeben mit der Methode `RTCDTMFSender` Objekt, das wir [zuvor gespeichert haben](#hinzufügen_des_audios_zur_verbindung) in `dtmfSender`.

Unser Aufruf von `insertDTMF()` spezifiziert nicht nur die DTMF, die gesendet werden soll (`dialString`), sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeitspanne zwischen den Tönen (50 ms).

#### Aushandeln der Verbindung

Wenn die anrufende [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) beginnt, Medien zu empfangen (nachdem der Mikrofonstream hinzugefügt wurde), wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis an den Anrufer gesendet, das ihn darüber informiert, dass es Zeit ist, die Verbindung mit dem Empfänger auszuhandeln. Wie bereits erwähnt, ist unser Beispiel somewhat vereinfacht, da wir sowohl den Anrufer als auch den Empfänger kontrollieren, sodass `handleCallerNegotiationNeeded()` in der Lage ist, die Verbindung schnell zu konstruieren, indem es die erforderlichen Aufrufe sowohl für den Anrufer als auch den Empfänger zusammen-kettet, wie unten gezeigt.

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

Da die verschiedenen Methoden, die zur Aushandlung der Verbindung erforderlich sind, {{jsxref("promise")}}-Objekte zurückgeben, können wir sie wie folgt verketten:

1. Rufen Sie [`callerPC.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erhalten.
2. Nehmen Sie dann dieses Angebot und setzen Sie die lokale Beschreibung des Anrufers entsprechend durch Aufrufen von [`callerPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription).
3. "Übermitteln" Sie dann das Angebot an den Empfänger, indem Sie [`receiverPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies konfiguriert den Empfänger so, dass er weiß, wie der Anrufer konfiguriert ist.
4. Lassen Sie dann den Empfänger eine Antwort erstellen, indem Sie [`receiverPC.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufrufen.
5. Lassen Sie den Empfänger seine lokale Beschreibung entsprechend der neu erstellten Antwort durch Aufrufen von [`receiverPC.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) anpassen.
6. "Übermitteln" Sie dann die Antwort an den Anrufer, indem Sie [`callerPC.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies teilt dem Anrufer mit, wie die Konfiguration des Empfängers ist.
7. Wenn zu irgendeinem Zeitpunkt ein Fehler auftritt, gibt die `catch()`-Klausel eine Fehlermeldung in das Protokoll aus.

#### Überwachen von anderen Statusänderungen

Wir können auch Änderungen des Signalisierungszustands (durch Akzeptieren von [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) Ereignissen) und des ICE-Sammezustands (durch Akzeptieren von [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignissen) beobachten. Wir verwenden diese für nichts, daher protokollieren wir sie nur. Wir hätten diese Ereignis-Listener auch gar nicht einrichten können.

```js
function handleCallerSignalingStateChangeEvent() {
  log(`Caller's signaling state changed to ${callerPC.signalingState}`);
}

function handleCallerGatheringStateChangeEvent() {
  log(`Caller's ICE gathering state changed to ${callerPC.iceGatheringState}`);
}
```

#### Hinzufügen von Kandidaten zum Empfänger

Wenn die ICE-Schicht von `RTCPeerConnection` des Empfängers einen neuen Vorschlag für einen Kandidaten hat, gibt sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis an `receiverPC` aus. Der `icecandidate` Ereignis-Handler ist dafür verantwortlich, den Kandidaten an den Anrufer zu übermitteln. In unserem Beispiel kontrollieren wir sowohl den Anrufer als auch den Empfänger direkt, sodass wir den Kandidaten einfach direkt an den Anrufer anfügen können, indem wir dessen Methode `addIceCandidate()` aufrufen. Das wird von `handleReceiverIceEvent()` behandelt.

Dieser Code ist analog zum `icecandidate` Ereignis-Handler für den Anrufer, wie im Abschnitt [Hinzufügen von Kandidaten zum Anrufer](#hinzufügen_von_kandidaten_zum_anrufer) oben zu sehen ist.

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

Wenn das `icecandidate` Ereignis eine nicht-`null` Eigenschaft `candidate` hat, erzeugen wir ein neues [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt aus der `event.candidate` Zeichenkette und überliefern es an den Anrufer, indem wir dieses an `callerPC.addIceCandidate()` übergeben. Wenn `addIceCandidate()` fehlschlägt, gibt der `catch()`-Klausel den Fehler in unser Protokollfeld aus.

Wenn `event.candidate` `null` ist, bedeutet das, dass keine weiteren Kandidaten verfügbar sind, und wir protokollieren diese Information.

#### Hinzufügen von Medien zum Empfänger

Wenn der Empfänger beginnt, Medien zu empfangen, wird ein Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) des Empfängers, `receiverPC`, ausgeliefert. Wie im Abschnitt [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) erläutert, verwendet die aktuelle WebRTC-Spezifikation das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis hierfür. Da einige Browser hierfür noch nicht aktualisiert wurden, müssen wir auch das [`addstream`](/de/docs/Web/API/RTCPeerConnection/addstream_event) Ereignis behandeln. Dies wird in den Methoden `handleReceiverTrackEvent()` und `handleReceiverAddStreamEvent()` unten dargestellt.

```js
function handleReceiverTrackEvent(event) {
  audio.srcObject = event.streams[0];
}

function handleReceiverAddStreamEvent(event) {
  audio.srcObject = event.stream;
}
```

Das `track` Ereignis enthält eine `streams` Eigenschaft, die ein Array der Streams enthält, deren Mitglied der Track ist (ein Track kann Teil vieler Streams sein). Wir nehmen den ersten Stream und binden ihn an das {{HTMLElement("audio")}}-Element.

Das `addstream` Ereignis enthält eine `stream` Eigenschaft, die einen einzelnen zum Track hinzugefügten Stream angibt. Wir binden ihn an das `<audio>`-Element.

#### Protokollierung

Eine einfache `log()` Funktion wird im gesamten Code verwendet, um Text an eine {{HTMLElement("div")}}-Box anzuhängen, in der dem Benutzer Status und Fehler angezeigt werden.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie den "Wählen"-Button klicken, sollten Sie eine Reihe von Protokollnachrichten angezeigt bekommen; dann beginnt das Wählen. Wenn Ihr Browser die Töne hörbar wiedergibt als Teil seiner Benutzererfahrung, sollten Sie sie hören, während sie gesendet werden.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf "Wählen" klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess detaillierter erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

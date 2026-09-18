---
title: DTMF mit WebRTC verwenden
slug: Web/API/WebRTC_API/Using_DTMF
l10n:
  sourceCommit: 0fd1f93376bb12cf086a17c4537bbdc7e68dc331
---

{{DefaultAPISidebar("WebRTC")}}

Zur umfassenderen Unterstützung von Audio-/Videokonferenzen unterstützt [WebRTC](/de/docs/Web/API/WebRTC_API) das Senden von {{Glossary("DTMF", "DTMF")}} an den Remote-Peer über eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection). Dieser Artikel bietet einen kurzen allgemeinen Überblick darüber, wie DTMF über WebRTC funktioniert, und enthält anschließend einen Leitfaden für alltägliche Entwickler dazu, wie DTMF über eine `RTCPeerConnection` gesendet wird. Das DTMF-System wird häufig als „Touch Tone“ bezeichnet, nach einer früheren Handelsbezeichnung für das System.

WebRTC sendet DTMF-Codes nicht als Audiodaten. Stattdessen werden sie außerhalb des Audiokanals als RTP-Nutzlasten gesendet. Beachten Sie jedoch, dass es zwar möglich ist, DTMF mit WebRTC zu _senden_, es derzeit aber keine Möglichkeit gibt, _eingehendes_ DTMF zu erkennen oder zu empfangen. WebRTC ignoriert diese Nutzlasten derzeit; der Grund dafür ist, dass die DTMF-Unterstützung von WebRTC hauptsächlich für die Verwendung mit älteren Telefondiensten vorgesehen ist, die DTMF-Töne nutzen, um Aufgaben wie die folgenden auszuführen:

- Telefonkonferenzsysteme
- Menüsysteme
- Voicemail-Systeme
- Eingabe von Kreditkarten- oder anderen Zahlungsinformationen
- Eingabe von Zugangscodes

> [!NOTE]
> Obwohl DTMF nicht als Audio an den Remote-Peer gesendet wird, können Browser im Rahmen ihrer Benutzererfahrung den entsprechenden Ton für den lokalen Benutzer wiedergeben, da Benutzer in der Regel daran gewöhnt sind, die Töne ihres Telefons hörbar zu hören.

## DTMF auf einer RTCPeerConnection senden

Eine bestimmte [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) kann mehrere Medien-Tracks senden oder empfangen. Wenn Sie DTMF-Signale übertragen möchten, müssen Sie zunächst entscheiden, auf welchem Track sie gesendet werden sollen, da DTMF als Reihe von Nutzlasten außerhalb des Audiokanals auf dem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet wird, der für die Übertragung der Daten dieses Tracks an den anderen Peer zuständig ist.

[`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) gibt den `RTCRtpSender` für den hinzugefügten Track zurück, daher verfügen Sie normalerweise bereits über den benötigten Sender. Sie können ihn auch später mit [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) finden.

Lesen Sie die Eigenschaft [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) des Senders, um den [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) für diesen Track zu erhalten. Nur Audio-Sender verfügen über einen solchen; Video-Sender geben `null` zurück.

Rufen Sie [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) auf, um Töne in die Warteschlange einzureihen. Der `RTCRtpSender` sendet sie zusammen mit den Audiodaten des Tracks als Pakete an den anderen Peer. Da die Töne zusammen mit dem Audio übertragen werden, muss die Verbindung hergestellt sein und senden, und die beiden Peers müssen den Codec `audio/telephone-event` ausgehandelt haben. Bis dahin ist [`canInsertDTMF`](/de/docs/Web/API/RTCDTMFSender/canInsertDTMF) `false`, und `insertDTMF()` löst einen `InvalidStateError` aus. In der Regel reicht es aus, darauf zu warten, dass der Verbindungsstatus `connected` wird.

Jedes Mal, wenn ein Ton abgespielt wird, empfängt der `RTCDTMFSender` ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis, dessen Eigenschaft [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) diesen Ton benennt. Dies ist beispielsweise eine Gelegenheit, Oberflächenelemente zu aktualisieren. Wenn der Tonpuffer leer ist, was darauf hinweist, dass alle Töne gesendet wurden, wird ein `tonechange`-Ereignis bereitgestellt, dessen Eigenschaft `tone` auf `""` (eine leere Zeichenfolge) gesetzt ist.

> [!NOTE]
> Älterer Code verwendet möglicherweise stattdessen die veraltete, nicht standardmäßige Methode [`RTCPeerConnection.createDTMFSender()`](/de/docs/Web/API/RTCPeerConnection/createDTMFSender). Firefox und Safari haben sie nie implementiert, und Chrome entfernt sie. Verwenden Sie in neuem Code [`RTCRtpSender.dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf).

Wenn Sie mehr darüber erfahren möchten, wie dies funktioniert, lesen Sie {{RFC(3550, "RTP: A Transport Protocol for Real-Time Applications")}} und {{RFC(4733, "RTP Payload for DTMF Digits, Telephony Tones, and Telephony Signals")}}. Die Details dazu, wie DTMF-Nutzlasten über RTP verarbeitet werden, liegen außerhalb des Umfangs dieses Artikels. Stattdessen konzentrieren wir uns darauf, wie DTMF im Kontext einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verwendet wird, indem wir untersuchen, wie ein Beispiel funktioniert.

## Einfaches Beispiel

Dieses einfache Beispiel erstellt zwei [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)s, stellt eine Verbindung zwischen ihnen her und wartet dann darauf, dass der Benutzer auf eine Schaltfläche „Wählen“ klickt. Wenn auf die Schaltfläche geklickt wird, wird mithilfe von [`RTCDTMFSender.insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) eine DTMF-Zeichenfolge über die Verbindung gesendet. Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen.

> [!NOTE]
> Dieses Beispiel ist offensichtlich etwas konstruiert, da die beiden `RTCPeerConnection`-Objekte normalerweise auf verschiedenen Geräten existieren würden und die Signalisierung über das Netzwerk erfolgen würde, anstatt wie hier alles direkt im Code zu verbinden.

### HTML

Das HTML für dieses Beispiel ist sehr einfach; es gibt nur drei wichtige Elemente:

- Ein {{HTMLElement("audio")}}-Element zum Abspielen des Audios, das von der „angerufenen“ `RTCPeerConnection` empfangen wird.
- Ein {{HTMLElement("button")}}-Element, um das Erstellen und Verbinden der beiden `RTCPeerConnection`-Objekte auszulösen und anschließend die DTMF-Töne zu senden.
- Ein {{HTMLElement("div")}}, um Protokolltext mit Statusinformationen zu empfangen und anzuzeigen.

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

Sehen wir uns als Nächstes den JavaScript-Code an. Beachten Sie, dass der Prozess zum Herstellen der Verbindung hier etwas konstruiert ist; normalerweise erstellen Sie nicht beide Enden der Verbindung im selben Dokument.

#### Globale Variablen

Zunächst definieren wir globale Variablen.

```js
const dialString = "12024561111";

const dialButton = document.querySelector("#dial");
const logElement = document.querySelector(".log");
const audioElement = document.querySelector("#audio");

let callerPC;
let receiverPC;
let dtmfSender;
```

Dies sind der Reihe nach:

- `dialString`
  - : Die DTMF-Zeichenfolge, die der Anrufer sendet, wenn auf die Schaltfläche „Wählen“ geklickt wird.
- `dialButton`, `logElement` und `audioElement`
  - : Die Elemente aus dem HTML-Abschnitt: die Schaltfläche, die den Anruf startet, das Feld, in das wir Statusmeldungen protokollieren, und das `<audio>`-Element, das das vom Empfänger erhaltene Audio abspielt.
- `callerPC` und `receiverPC`
  - : Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die jeweils den Anrufer und den Empfänger darstellen. Diese werden beim Start des Anrufs in unserer Funktion `connectAndDial()` erstellt, wie unter [Starten des Verbindungsprozesses](#starten_des_verbindungsprozesses) gezeigt.
- `dtmfSender`
  - : Der [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender), über den wir die Töne senden. Wir erhalten ihn in `connectAndDial()` vom Audio-Sender des Anrufers.

#### Initialisierung

Wir fügen der Wähltaste einen Event-Listener hinzu, sodass ein Klick darauf die Funktion `connectAndDial()` aufruft, um den Verbindungsprozess zu beginnen.

```js
dialButton.addEventListener("click", connectAndDial);
```

#### Starten des Verbindungsprozesses

Wenn auf die Wähltaste geklickt wird, wird `connectAndDial()` aufgerufen. Dadurch beginnt der Aufbau der WebRTC-Verbindung zur Vorbereitung des Sendens der DTMF-Codes.

```js
async function connectAndDial() {
  callerPC = new RTCPeerConnection();
  receiverPC = new RTCPeerConnection();

  callerPC.addEventListener("negotiationneeded", negotiate);
  callerPC.addEventListener("connectionstatechange", dialWhenConnected);

  callerPC.addEventListener("icecandidate", (event) => {
    addCandidate(receiverPC, event.candidate);
  });
  receiverPC.addEventListener("icecandidate", (event) => {
    addCandidate(callerPC, event.candidate);
  });

  receiverPC.addEventListener("track", (event) => {
    audioElement.srcObject = event.streams[0];
  });

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    log("Got access to the microphone.");

    const [track] = stream.getAudioTracks();
    const sender = callerPC.addTrack(track, stream);

    // The track is an audio track, so the sender has a DTMF sender
    dtmfSender = sender.dtmf;
    dtmfSender.addEventListener("tonechange", handleToneChange);
  } catch (err) {
    log(`Error getting the microphone: ${err}`);
  }
}
```

Zuerst erstellen wir beide `RTCPeerConnection`-Objekte: `callerPC` für den Anrufer und `receiverPC` für den Empfänger.

Anschließend fügen wir Event-Listener hinzu. Das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis des Anrufers teilt uns mit, dass wir die Verbindung aushandeln sollen, und sein [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)-Ereignis teilt uns mit, wann die Verbindung hergestellt ist, also wann wir wählen. Das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis jeder Verbindung liefert uns einen Kandidaten, den wir an den anderen Peer weitergeben. Das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis des Empfängers wird ausgelöst, wenn das eingehende Audio ankommt, und wir hängen dessen Stream an das `<audio>`-Element an, um ihn abzuspielen.

Schließlich rufen wir [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf, um das Mikrofon des Anrufers abzurufen, und fügen dessen Audio-Track mit [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zum Anrufer hinzu. Dies gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) für den Track zurück, dessen Eigenschaft [`dtmf`](/de/docs/Web/API/RTCRtpSender/dtmf) der [`RTCDTMFSender`](/de/docs/Web/API/RTCDTMFSender) ist, über den wir Töne senden werden. Wir lauschen auf dessen [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis, damit wir jedes Mal benachrichtigt werden, wenn ein Ton abgespielt wird.

Das Hinzufügen des Tracks löst außerdem das `negotiationneeded`-Ereignis aus, wodurch die Aushandlung beginnt.

#### Aushandeln der Verbindung

Da wir beide Enden des Anrufs steuern, kann `negotiate()` beide Rollen übernehmen und jede Beschreibung direkt an die andere Verbindung weitergeben, anstatt sie über einen Signalisierungskanal zu senden.

```js
async function negotiate() {
  try {
    log("Negotiating…");
    await callerPC.setLocalDescription();
    await receiverPC.setRemoteDescription(callerPC.localDescription);
    await receiverPC.setLocalDescription();
    await callerPC.setRemoteDescription(receiverPC.localDescription);
  } catch (err) {
    log(`Error during negotiation: ${err}`);
  }
}
```

Der Aufruf von [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter erstellt die richtige Beschreibung für den aktuellen Status der Verbindung — ein Angebot für den Anrufer, eine Antwort für den Empfänger — daher benötigen wir weder `createOffer()` noch `createAnswer()`. Die Schritte sind:

1. Der Anrufer setzt seine lokale Beschreibung, wodurch ein Angebot erzeugt wird.
2. Der Empfänger übernimmt dieses Angebot als seine Remote-Beschreibung, sodass er weiß, wie der Anrufer konfiguriert ist.
3. Der Empfänger setzt seine eigene lokale Beschreibung, wodurch eine Antwort erzeugt wird.
4. Der Anrufer übernimmt diese Antwort als seine Remote-Beschreibung, sodass er weiß, wie der Empfänger konfiguriert ist.
5. Falls etwas fehlschlägt, protokolliert der `catch`-Block den Fehler.

#### Austausch von ICE-Kandidaten

Jedes Mal, wenn die ICE-Schicht einer Verbindung einen Kandidaten findet, löst sie ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis aus. Normalerweise würden Sie den Kandidaten über Ihren Signalisierungskanal an den anderen Peer senden. In diesem Beispiel befinden sich beide Peers auf derselben Seite, daher übergeben wir den Kandidaten mit [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) direkt an die andere Verbindung.

```js
async function addCandidate(pc, candidate) {
  try {
    await pc.addIceCandidate(candidate);
  } catch (err) {
    log(`Error adding candidate: ${err}`);
  }
}
```

Ein `null`-Kandidat bedeutet, dass die Verbindung keine weiteren Kandidaten anzubieten hat, und fungiert für den Peer als Ende-der-Kandidaten-Signal.

#### Wählen, sobald die Verbindung geöffnet ist

Wir senden die DTMF-Zeichenfolge, sobald die Verbindung hergestellt ist. Das [`connectionstatechange`](/de/docs/Web/API/RTCPeerConnection/connectionstatechange_event)-Ereignis des Anrufers wird ausgelöst, wenn sich [`connectionState`](/de/docs/Web/API/RTCPeerConnection/connectionState) ändert, daher achten wir auf den Status `connected`.

```js
function dialWhenConnected() {
  log(`Caller's connection state changed to ${callerPC.connectionState}`);

  if (callerPC.connectionState !== "connected") {
    return;
  }
  log(`Sending DTMF: "${dialString}"`);
  dtmfSender.insertDTMF(dialString, 400, 50);
}
```

Unser Aufruf von [`insertDTMF()`](/de/docs/Web/API/RTCDTMFSender/insertDTMF) gibt nicht nur das zu sendende DTMF (`dialString`) an, sondern auch die Länge jedes Tons in Millisekunden (400 ms) und die Zeitspanne zwischen den Tönen (50 ms).

#### Wenn ein Ton fertig abgespielt ist

Jedes Mal, wenn ein DTMF-Ton abgespielt wird, wird ein [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis an den `RTCDTMFSender` übermittelt. Der Event-Listener für `tonechange`-Ereignisse wird als Funktion `handleToneChange()` implementiert.

```js
function handleToneChange(event) {
  if (event.tone !== "") {
    log(`Tone played: ${event.tone}`);
    return;
  }
  log("All tones have played. Disconnecting.");

  for (const pc of [callerPC, receiverPC]) {
    for (const sender of pc.getSenders()) {
      sender.track?.stop();
    }
    pc.close();
  }
  audioElement.pause();
  audioElement.srcObject = null;
}
```

Das [`tonechange`](/de/docs/Web/API/RTCDTMFSender/tonechange_event)-Ereignis wird sowohl verwendet, um anzuzeigen, wann ein einzelner Ton abgespielt wurde, als auch wann alle Töne fertig abgespielt sind. Die Eigenschaft [`tone`](/de/docs/Web/API/RTCDTMFToneChangeEvent/tone) des Ereignisses ist eine Zeichenfolge, die angibt, welcher Ton gerade abgespielt wurde. Wenn alle Töne abgespielt wurden, ist `tone` eine leere Zeichenfolge; in diesem Fall ist [`RTCDTMFSender.toneBuffer`](/de/docs/Web/API/RTCDTMFSender/toneBuffer) leer.

In diesem Beispiel protokollieren wir auf dem Bildschirm, welcher Ton gerade abgespielt wurde. In einer weiterentwickelten Anwendung könnten Sie beispielsweise die Benutzeroberfläche aktualisieren, um anzuzeigen, welcher Ton gerade abgespielt wird.

Wenn der Tonpuffer hingegen leer ist, ist unser Beispiel darauf ausgelegt, den Anruf zu trennen. Für jede Verbindung rufen wir auf dem Track jedes [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) [`stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf, um alles zu stoppen, was wir senden, und schließen dann die Verbindung mit [`close()`](/de/docs/Web/API/RTCPeerConnection/close). Das Schließen einer Verbindung beendet auch die Tracks, die sie empfangen hat.

Anschließend pausieren wir das {{HTMLElement("audio")}}-Element und setzen dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) auf `null`, wodurch der Audio-Stream davon getrennt wird.

#### Protokollierung

Im gesamten Code wird eine einfache Funktion `log()` verwendet, um Text an ein {{HTMLElement("div")}}-Feld anzuhängen, das dem Benutzer Statusinformationen und Fehler anzeigt.

```js
function log(msg) {
  logElement.innerText += `${msg}\n`;
}
```

### Ergebnis

Sie können dieses Beispiel hier ausprobieren. Wenn Sie auf die Schaltfläche „Wählen“ klicken, sollten Sie eine Reihe von Protokollmeldungen sehen; anschließend beginnt der Wählvorgang. Wenn Ihr Browser die Töne im Rahmen seiner Benutzererfahrung hörbar wiedergibt, sollten Sie sie während der Übertragung hören.

{{ EmbedLiveSample('Simple_example', 600, 500, "", "", "", "microphone") }}

Sobald die Übertragung der Töne abgeschlossen ist, wird die Verbindung geschlossen. Sie können erneut auf „Wählen“ klicken, um die Verbindung wiederherzustellen und die Töne zu senden.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)
- [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) (ein Tutorial und Beispiel, das den Signalisierungsprozess ausführlicher erklärt)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)

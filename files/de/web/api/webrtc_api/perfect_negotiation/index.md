---
title: "Herstellen einer Verbindung: Das WebRTC-Perfect-Negotiation-Muster"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: ffa6f5871f50856c60983a125cef7de267be7aeb
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel stellt die WebRTC-**Perfect Negotiation** vor, beschreibt, wie sie funktioniert und warum sie die empfohlene Methode zur Aushandlung einer WebRTC-Verbindung zwischen Peers ist, und liefert Beispielcode, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für Signale während der Aushandlung einer neuen Peer-Verbindung vorschreibt, ist es sehr flexibel. Trotz dieser Flexibilität im Transport und der Kommunikation von Signalmeldungen gibt es dennoch ein empfohlenes Entwurfsmuster, das Sie nach Möglichkeit befolgen sollten, bekannt als Perfect Negotiation.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Aushandlungsprozesses für typische Anwendungsfälle komplexer waren, als es nötig gewesen wäre. Dies lag an einer geringen Anzahl von Problemen mit der API und einigen möglichen Race Conditions, die verhindert werden mussten. Diese Probleme wurden inzwischen behoben, sodass wir unsere WebRTC-Aushandlung erheblich vereinfachen können. Das Perfect Negotiation-Muster ist ein Beispiel dafür, wie sich die Aushandlung seit den frühen Tagen von WebRTC verbessert hat.

## Konzepte der Perfect Negotiation

Perfect Negotiation ermöglicht es, den Aushandlungsprozess nahtlos und vollständig vom Rest der Logik Ihrer Anwendung zu trennen. Aushandlung ist ein inhärent asymmetrischer Vorgang: Eine Seite muss als "Anrufer" fungieren, während der andere Peer der "Angerufene" ist. Das Perfect Negotiation-Muster glättet diesen Unterschied, indem es diesen Unterschied in unabhängige Aushandlungslogik auslagert, sodass es Ihrer Anwendung egal sein kann, welches Ende der Verbindung sie ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie anrufen oder einen Anruf empfangen.

Das Beste an der Perfect Negotiation ist, dass derselbe Code sowohl für den Anrufer als auch für den Angerufenen verwendet wird, sodass es keine Wiederholungen oder anderweitig hinzugefügte Ebenen von Aushandlungscode zu schreiben gibt.

Perfect Negotiation funktioniert, indem jedem der beiden Peers eine Rolle im Aushandlungsprozess zugewiesen wird, die vollständig vom WebRTC-Verbindungsstatus getrennt ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Ein höflicher Peer kann im Wesentlichen Angebote senden, aber dann, wenn ein Angebot vom anderen Peer eintrifft, mit "Okay, egal, lass mein Angebot fallen und ich werde Ihres stattdessen betrachten" antworten.
- Ein **unhöflicher** Peer, der eingehende Angebote, die mit seinen eigenen Angeboten kollidieren, immer ignoriert. Er entschuldigt sich nie oder gibt dem höflichen Peer irgendetwas nach. Jedes Mal, wenn eine Kollision auftritt, gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was passieren soll, wenn es Kollisionen zwischen gesendeten Angeboten gibt. Die Reaktionen auf Fehlersituationen werden weit vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher unhöflich ist, bleibt im Allgemeinen Ihnen überlassen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuweisen, der sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas Ausgefeilteres tun, wie die Peers zufällige Zahlen austauschen zu lassen und die höfliche Rolle dem Gewinner zuzuweisen. Wie auch immer Sie die Bestimmung treffen, sobald diese Rollen den beiden Peers zugewiesen sind, können sie zusammenarbeiten, um Signalisierungen zu verwalten, ohne dass eine Blockierung entsteht oder viel zusätzlicher Code zur Verwaltung benötigt wird.

Eine wichtige Sache, die Sie beachten sollten, ist: Die Rollen des Anrufers und Angerufenen können sich während der Perfect Negotiation ändern. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, aber es eine Kollision mit dem unhöflichen Peer gibt, wirft der höfliche Peer sein Angebot ab und antwortet stattdessen mit dem Angebot, das er vom unhöflichen Peer erhalten hat. Dadurch hat der höfliche Peer vom Anrufer zum Angerufenen gewechselt!

Werfen wir einen Blick auf ein Beispiel, das das Perfect Negotiation-Muster implementiert. Der Code geht davon aus, dass eine `SignalingChannel`-Klasse definiert ist, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede beliebige Signalisierungstechnik verwenden.

Beachten Sie, dass dieser Code für beide Peers, die an der Verbindung beteiligt sind, identisch ist.

## Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier aufgeführte {{Glossary("STUN", "STUN")}}-Server ist offensichtlich kein echter; Sie müssen `stun.my-server.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.my-stun-server.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code erhält auch die {{HTMLElement("video")}}-Elemente mit den Klassen "self-view" und "remote-view"; diese enthalten jeweils die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom entfernten Peer.

## Verbindung zu einem entfernten Peer

```js
const constraints = { audio: true, video: true };
const selfVideo = document.querySelector("video.self-view");
const remoteVideo = document.querySelector("video.remote-view");

async function start() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);

    for (const track of stream.getTracks()) {
      pc.addTrack(track, stream);
    }
    selfVideo.srcObject = stream;
  } catch (err) {
    console.error(err);
  }
}
```

Die oben gezeigte `start()`-Funktion kann von jedem der beiden Endpunkte aufgerufen werden, die miteinander sprechen möchten. Es spielt keine Rolle, wer es zuerst tut; die Aushandlung wird einfach funktionieren.

Dies unterscheidet sich nicht wesentlich von älterem WebRTC-Verbindungsaufbaucode. Die Kamera und das Mikrofon des Benutzers werden durch Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) gewonnen. Die resultierenden Medienspuren werden dann zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt, indem sie an [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) übergeben werden. Schließlich wird die Medienquelle für das Selbstansichts-{{HTMLElement("video")}}-Element, das durch die `selfVideo`-Konstante angegeben wird, auf den Kamera- und Mikrofonstream gesetzt, sodass der lokale Benutzer sehen kann, was der andere Peer sieht.

## Umgang mit eingehenden Spuren

Als nächstes müssen wir einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse einrichten, um eingehende Video- und Audiospuren zu handhaben, die ausgehandelt wurden, um von dieser Peer-Verbindung empfangen zu werden. Dazu implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler.

```js
pc.ontrack = ({ track, streams }) => {
  track.onunmute = () => {
    if (remoteVideo.srcObject) {
      return;
    }
    remoteVideo.srcObject = streams[0];
  };
};
```

Wenn das `track`-Ereignis auftritt, wird dieser Handler ausgeführt. Durch die Verwendung von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) werden die Eigenschaften [`track`](/de/docs/Web/API/RTCTrackEvent/track) und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) extrahiert. Ersteres ist entweder die Videospur oder die Audiospur, die empfangen wird. Letzteres ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils einen Stream darstellen, der diese Spur enthält (eine Spur kann in seltenen Fällen gleichzeitig zu mehreren Streams gehören). In unserem Fall enthält dieses Array immer einen Stream an Index 0, da wir zuvor einen Stream an `addTrack()` übergeben haben.

Wir fügen der Spur einen Unmute-Event-Handler hinzu, da die Spur stummgeschaltet wird, sobald sie Pakete empfängt. Wir platzieren den Rest unseres Empfangscodes dort.

Wenn wir bereits Video vom entfernten Peer erhalten (was wir sehen können, wenn die `srcObject`-Eigenschaft des `remote view`-`<video>`-Elements bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream an Index 0 im `streams`-Array.

## Die Perfect Negotiation-Logik

Jetzt kommen wir zur eigentlichen Perfect Negotiation-Logik, die vollständig unabhängig vom Rest der Anwendung funktioniert.

### Umgang mit dem negotiationneeded-Ereignis

Zuerst implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignishandler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), um eine lokale Beschreibung zu erhalten und diese über den Signalisierungskanal an den entfernten Peer zu senden.

```js
let makingOffer = false;

pc.onnegotiationneeded = async () => {
  try {
    makingOffer = true;
    await pc.setLocalDescription();
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  } finally {
    makingOffer = false;
  }
};
```

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die entsprechende Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und setzt. Die gesetzte Beschreibung ist entweder eine Antwort auf das letzte Angebot des entfernten Peers _oder_ ein frisch erstelltes Angebot, wenn keine Aushandlung im Gange ist. Hier wird es immer ein `offer` sein, da das negotiationneeded-Ereignis nur im `stable`-Zustand ausgelöst wird.

Ein Boolean-Variable `makingOffer` wird auf `true` gesetzt, um zu kennzeichnen, dass wir ein Angebot vorbereiten. Wir setzen `makingOffer` direkt vor dem Aufruf von `setLocalDescription()`, um mögliche Interferenzen beim Senden dieses Angebots zu sperren, und setzen es nicht zurück auf `false`, bis das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der das Unterbreiten des Angebots verhindert hat). Um Races zu vermeiden, verwenden wir diesen Wert später anstelle des Signalisierungsstatus, um festzustellen, ob ein Angebot verarbeitet wird, da sich der Wert von [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron ändert, was zu einer möglichen Kollision eines ausgehenden und eines eingehenden Anrufs führen kann („Glare“).

### Umgang mit eingehenden ICE-Kandidaten

Als Nächstes müssen wir das `RTCPeerConnection`-Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) behandeln, das es der lokalen ICE-Schicht ermöglicht, Kandidaten an uns zur Weiterleitung an den entfernten Peer über den Signalisierungskanal zu übergeben.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies übernimmt das `candidate`-Mitglied dieses ICE-Ereignisses und leitet es durch die `send()`-Methode des Signalisierungskanals zur Übertragung über den Signalisierungsserver an den entfernten Peer weiter.

### Umgang mit eingehenden Nachrichten auf dem Signalisierungskanal

Das letzte Puzzlestück ist Code, um mit eingehenden Nachrichten des Signalisierungsservers umzugehen. Das wird hier als `onmessage`-Ereignishandler des Signalisierungskanals implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

```js
let ignoreOffer = false;
let isSettingRemoteAnswerPending = false;

signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const readyForOffer =
        !makingOffer &&
        (pc.signalingState === "stable" || isSettingRemoteAnswerPending);
      const offerCollision = description.type === "offer" && !readyForOffer;

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) {
        return;
      }
      isSettingRemoteAnswerPending = description.type === "answer";
      await pc.setRemoteDescription(description);
      isSettingRemoteAnswerPending = false;
      if (description.type === "offer") {
        await pc.setLocalDescription();
        signaler.send({ description: pc.localDescription });
      }
    } else if (candidate) {
      try {
        await pc.addIceCandidate(candidate);
      } catch (err) {
        if (!ignoreOffer) {
          throw err;
        }
      }
    }
  } catch (err) {
    console.error(err);
  }
};
```

Beim Empfang einer eingehenden Nachricht vom `SignalingChannel` über seinen `onmessage`-Ereignishandler wird das empfangene JSON-Objekt destrukturiert, um die innerhalb gefundenen `description` oder `candidate` zu erhalten. Wenn die eingehende Nachricht eine `description` hat, ist es entweder ein Angebot oder eine Antwort, die vom anderen Peer gesendet wird.

Wenn die Nachricht andererseits einen `candidate` enthält, ist es ein ICE-Kandidat, der vom entfernten Peer als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat ist dafür bestimmt, der lokalen ICE-Schicht zugeführt zu werden, indem er in [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

#### Beim Empfang einer Beschreibung

Wenn wir eine `description` empfangen haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst überprüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn der Signalisierungsstatus der Verbindung nicht `stable` ist oder wenn unsere Seite der Verbindung den Prozess der Erstellung eines eigenen Angebots begonnen hat, müssen wir auf Angebotskollisionen achten.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot empfangen, kehren wir zurück, ohne die Beschreibung zu setzen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns auf dem Signalisierungskanal sendet und die zu diesem Angebot gehören. Dadurch wird Fehlerrauschen vermieden, da wir unsere Seite nie über dieses Angebot informiert haben.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot empfangen, müssen wir nichts Besonderes tun, da unser bestehendes Angebot im nächsten Schritt automatisch zurückgesetzt wird.

Nachdem wir sichergestellt haben, dass wir das Angebot annehmen wollen, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Damit erfährt WebRTC, wie die vorgeschlagene Konfiguration des anderen Peers aussieht. Wenn wir der höfliche Peer sind, werden wir unser Angebot fallen lassen und das neue annehmen.

Wenn die neu gesetzte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine geeignete lokale Konfiguration auszuwählen, indem wir die Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ohne Parameter aufrufen. Dies führt dazu, dass `setLocalDescription()` automatisch eine geeignete Antwort als Reaktion auf das empfangene Angebot generiert. Dann senden wir die Antwort über den Signalisierungskanal zurück an den ersten Peer.

#### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält, liefern wir ihn an die lokale {{Glossary("ICE", "ICE")}}-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Wenn ein Fehler auftritt und wir das letzte Angebot ignoriert haben, ignorieren wir auch jeden Fehler, der beim Versuch, den Kandidaten hinzuzufügen, auftreten könnte.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

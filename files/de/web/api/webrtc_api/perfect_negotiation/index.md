---
title: "Aufbau einer Verbindung: Das WebRTC-Perfect-Negotiation-Muster"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die WebRTC **perfect negotiation** ein, beschreibt, wie sie funktioniert und warum sie die empfohlene Methode ist, um eine WebRTC-Verbindung zwischen Peers zu verhandeln. Zudem wird Beispielcode bereitgestellt, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für die Signalgebung während der Verhandlung einer neuen Peer-Verbindung vorgibt, ist es sehr flexibel. Trotz dieser Flexibilität bei Transport und Kommunikation von Signalmeldungen gibt es jedoch ein empfohlenes Designmuster, dem Sie, wann immer möglich, folgen sollten – bekannt als perfect negotiation.

Nach den ersten Implementierungen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Verhandlungsprozesses komplizierter waren, als für typische Anwendungsfälle notwendig. Dies war auf eine kleine Anzahl von Problemen mit der API und einige potenzielle Race-Conditions zurückzuführen, die verhindert werden mussten. Diese Probleme wurden inzwischen behoben, was es uns ermöglicht, unsere WebRTC-Verhandlung erheblich zu vereinfachen. Das perfect negotiation-Muster ist ein Beispiel dafür, wie die Verhandlung seit den Anfängen von WebRTC verbessert wurde.

## Konzepte der Perfect Negotiation

Perfect negotiation ermöglicht es, den Verhandlungsprozess nahtlos und vollständig von der restlichen Logik Ihrer Anwendung zu trennen. Verhandlung ist eine inhärent asymmetrische Operation: Eine Seite muss als "Anrufer" dienen, während der andere Peer der "Angerufene" ist. Das perfect negotiation-Muster glättet diesen Unterschied, indem es diesen Unterschied in unabhängige Verhandlungslogik auslagert, sodass Ihre Anwendung nicht wissen muss, welches Ende der Verbindung sie ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie anrufen oder einen Anruf empfangen.

Das Beste an perfect negotiation ist, dass derselbe Code sowohl für den Anrufer als auch den Angerufenen verwendet wird, sodass Sie keinen zusätzlichen Verhandlungscode schreiben müssen.

Perfect negotiation funktioniert, indem jedem der beiden Peers eine Rolle im Verhandlungsprozess zugewiesen wird, die vollständig getrennt vom WebRTC-Verbindungsstatus ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Ein höflicher Peer ist im Wesentlichen ein Peer, der zwar Angebote senden kann, aber wenn ein Angebot vom anderen Peer ankommt, mit "Okay, vergiss mein Angebot, ich betrachte deines stattdessen" antwortet.
- Ein **unhöflicher** Peer, der eingehende Angebote, die mit seinen eigenen kollidieren, immer ignoriert. Er entschuldigt sich nie oder gibt dem höflichen Peer nichts ab. Bei jeder Kollision gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was geschehen soll, wenn es Kollisionen zwischen gesendeten Angeboten gibt. Reaktionen auf Fehlerbedingungen werden viel vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher unhöflich ist, bleibt im Allgemeinen Ihnen überlassen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuweisen, der sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas Ausgefeilteres tun, wie die Peers zufällige Zahlen austauschen zu lassen und die höfliche Rolle dem Gewinner zuzuweisen. Sobald diese Rollen den beiden Peers zugewiesen sind, können sie zusammenarbeiten, um die Signalisierung auf eine Weise zu verwalten, die nicht blockiert und nicht viel zusätzlichen Code erfordert.

Ein wichtiger Punkt, den man im Kopf behalten sollte, ist folgender: Die Rollen von Anrufer und Angerufenem können während der perfect negotiation wechseln. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, es aber eine Kollision mit dem unhöflichen Peer gibt, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das Angebot, das er vom unhöflichen Peer erhalten hat. Dadurch hat der höfliche Peer von der Rolle des Anrufers zur Rolle des Angerufenen gewechselt!

Werfen wir einen Blick auf ein Beispiel, das das perfect negotiation-Muster implementiert. Der Code geht davon aus, dass eine `SignalingChannel`-Klasse definiert ist, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede Signalisierungstechnik verwenden, die Ihnen gefällt.

Beachten Sie, dass dieser Code für beide in die Verbindung involvierten Peers identisch ist.

## Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier aufgeführte {{Glossary("STUN", "STUN")}}-Server ist offensichtlich kein realer; Sie müssen `stun.my-server.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.my-stun-server.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code erhält auch die {{HTMLElement("video")}}-Elemente, die die Klassen "self-view" und "remote-view" verwenden; diese enthalten jeweils die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom entfernten Peer.

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

Die oben gezeigte `start()`-Funktion kann von einem der beiden Endpunkte aufgerufen werden, die miteinander kommunizieren wollen. Es spielt keine Rolle, wer es zuerst tut; die Verhandlung wird einfach funktionieren.

Dies unterscheidet sich nicht wesentlich vom älteren WebRTC-Verbindungsaufbaucode. Die Kamera und das Mikrofon des Benutzers werden durch Aufrufen von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen. Die resultierenden Medienspuren werden dann zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt, indem sie in [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) übergeben werden. Schließlich wird die Medienquelle für das Selbstansichts-{{HTMLElement("video")}}-Element, das durch die Konstante `selfVideo` angegeben ist, auf den Kamera- und Mikrofonstream gesetzt, sodass der lokale Benutzer sehen kann, was der andere Peer sieht.

## Umgang mit eingehenden Spuren

Als Nächstes müssen wir einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse einrichten, um eingehende Video- und Audiospuren zu handhaben, die für diesen Peer-Verbindung verhandelt wurden. Dazu implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)'s [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignishandler.

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

Wenn das `track`-Ereignis auftritt, wird dieser Handler ausgeführt. Mithilfe von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) werden die [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)'s [`track`](/de/docs/Web/API/RTCTrackEvent/track) und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) Eigenschaften extrahiert. Erstere ist entweder die empfangene Videospur oder die Audiospur. Letztere ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils einen Stream enthalten, der diese Spur enthält (eine Spur kann in seltenen Fällen gleichzeitig zu mehreren Streams gehören). In unserem Fall wird dieses Array immer einen Stream an Index 0 enthalten, da wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen der Spur einen Unmute-Ereignishandler hinzu, da die Spur ungemutet wird, sobald sie Pakete empfängt. Wir platzieren den Rest unseres Empfangscodes dort.

Wenn wir bereits eingehendes Video vom entfernten Peer haben (was wir sehen können, wenn die `<video>`-Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Remote-Ansichtselements bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream bei Index 0 im `streams`-Array.

## Die Perfect Negotiation-Logik

Nun befassen wir uns mit der eigentlichen perfect negotiation-Logik, die völlig unabhängig vom Rest der Anwendung funktioniert.

### Behandlung des negotiationneeded-Ereignisses

Zunächst implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignishandler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), um eine lokale Beschreibung zu erhalten und diese über den Signalisierungskanal an den entfernten Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die geeignete Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und festlegt. Die festgelegte Beschreibung ist entweder eine Antwort auf das zuletzt erhaltene Angebot vom entfernten Peer _oder_ ein neu erstelltes Angebot, wenn keine Verhandlung im Gange ist. Hier wird es immer ein `offer` sein, da das negotiationneeded-Ereignis nur im `stable`-Zustand ausgelöst wird.

Wir setzen eine boolesche Variable `makingOffer` auf `true`, um zu kennzeichnen, dass wir ein Angebot vorbereiten. Wir setzen `makingOffer` unmittelbar vor dem Aufruf von `setLocalDescription()`, um zu verhindern, dass wir durch das Senden dieses Angebots gestört werden, und setzen es erst wieder auf `false`, wenn das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der das Angebot verhindert hat). Um Rennen zu vermeiden, verwenden wir diesen Wert später anstelle des Signalisierungszustands, um festzustellen, ob ein Angebot bearbeitet wird, da sich der Wert von [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron ändert und eine potenzielle Kollision eines ausgehenden und eines eingehenden Anrufs ("glare") einführt.

### Behandlung eingehender ICE-Kandidaten

Als nächstes müssen wir das `RTCPeerConnection`-Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) behandeln, mit dem die lokale ICE-Schicht Kandidaten zur Übertragung an den entfernten Peer über den Signalisierungskanal an uns übergibt.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies übernimmt das `candidate`-Element dieses ICE-Ereignisses und übergibt es an die `send()`-Methode des Signalisierungskanals, damit es über den Signalisierungsserver an den entfernten Peer gesendet wird.

### Behandlung eingehender Nachrichten auf dem Signalisierungskanal

Das letzte Puzzlestück ist der Code zur Behandlung eingehender Nachrichten vom Signalisierungsserver. Dies wird hier als `onmessage`-Ereignishandler auf dem Signalisierungskanalobjekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

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
      isSettingRemoteAnswerPending = description.type == "answer";
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

Beim Empfang einer eingehenden Nachricht von `SignalingChannel` über seinen `onmessage`-Ereignishandler wird das empfangene JSON-Objekt so aufgelöst, dass die darin enthaltene `description` oder `candidate` extrahiert wird. Wenn die eingehende Nachricht eine `description` enthält, handelt es sich entweder um ein Angebot oder eine Antwort, die vom anderen Peer gesendet wurde.

Wenn hingegen die Nachricht einen `candidate` enthält, handelt es sich um einen ICE-Kandidaten, der vom entfernten Peer als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat soll an die lokale ICE-Schicht übergeben werden, indem er in [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

#### Beim Empfang einer Beschreibung

Wenn wir eine `description` erhalten haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst prüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn der Signalisierungszustand der Verbindung nicht `stable` ist oder unser Verbindungsteil begonnen hat, ein eigenes Angebot zu erstellen, müssen wir auf Angebotskollisionen achten.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot empfangen, kehren wir zurück, ohne die Beschreibung festzulegen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns möglicherweise auf dem Signalisierungskanal zu diesem Angebot sendet. Dies vermeidet Fehlergeräusche, da wir unsere Seite nie über dieses Angebot informiert haben.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot empfangen, müssen wir nichts Besonderes tun, da unser bestehendes Angebot im nächsten Schritt automatisch zurückgesetzt wird.

Nach der Sicherstellung, dass wir das Angebot annehmen möchten, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dadurch erfährt WebRTC, welche Konfiguration beim anderen Peer vorgeschlagen wird. Wenn wir der höfliche Peer sind, verwerfen wir unser Angebot und akzeptieren das neue.

Wenn die neu festgelegte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine geeignete lokale Konfiguration auszuwählen, indem wir die Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ohne Parameter aufrufen. Dies führt dazu, dass `setLocalDescription()` automatisch eine geeignete Antwort auf das empfangene Angebot generiert. Dann senden wir die Antwort über den Signalisierungskanal zurück an den ersten Peer.

#### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält, übergeben wir ihn an die lokale {{Glossary("ICE", "ICE")}}-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Tritt ein Fehler auf und wir haben das letzte Angebot ignoriert, ignorieren wir auch jeden Fehler, der auftreten kann, wenn wir versuchen, den Kandidaten hinzuzufügen.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

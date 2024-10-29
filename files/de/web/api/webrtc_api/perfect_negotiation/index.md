---
title: "Verbindungsaufbau: Das WebRTC Perfect Negotiation Pattern"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt das **Perfect Negotiation** von WebRTC ein, beschreibt, wie es funktioniert und warum es der empfohlene Weg ist, um eine WebRTC-Verbindung zwischen Peers zu verhandeln. Es wird auch Beispielcode bereitgestellt, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für das Signalisieren während der Verhandlung einer neuen Peer-Verbindung vorschreibt, ist es sehr flexibel. Dennoch gibt es trotz dieser Flexibilität in Transport und Kommunikation von Signalisierungsnachrichten ein empfohlenes Designmuster, dem Sie folgen sollten, wann immer es möglich ist, bekannt als Perfect Negotiation.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Verhandlungsprozesses komplizierter waren als nötig für typische Anwendungsfälle. Dies lag an einer kleinen Anzahl von Problemen mit der API und einigen potenziellen Race Conditions, die vermieden werden mussten. Diese Probleme wurden inzwischen gelöst, sodass wir unsere WebRTC-Verhandlungen erheblich vereinfachen können. Das Perfect Negotiation Pattern ist ein Beispiel dafür, wie sich die Verhandlungen seit den frühen Tagen von WebRTC verbessert haben.

## Konzepte der Perfect Negotiation

Perfect Negotiation ermöglicht es, den Verhandlungsprozess nahtlos und vollständig vom Rest der Logik Ihrer Anwendung zu trennen. Die Verhandlung ist eine von Natur aus asymmetrische Operation: Eine Seite muss als "Anrufer" dienen, während der andere Peer der "Angerufene" ist. Das Perfect Negotiation Pattern glättet diesen Unterschied, indem es diesen Unterschied in unabhängige Verhandlungslogik ausgliedert, sodass Ihre Anwendung sich nicht darum kümmern muss, welches Ende der Verbindung sie ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie anrufen oder einen Anruf empfangen.

Das Beste an Perfect Negotiation ist, dass derselbe Code sowohl für den Anrufer als auch für den Angerufenen verwendet wird, sodass es keine Wiederholungen oder anderweitig hinzugefügte Ebenen von Verhandlungscode gibt, die geschrieben werden müssen.

Perfect Negotiation funktioniert, indem jedem der beiden Peers eine Rolle im Verhandlungsprozess zugewiesen wird, die vollständig von dem WebRTC-Verbindungsstatus getrennt ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Ein höflicher Peer sendet im Wesentlichen Angebote, reagiert jedoch, wenn ein Angebot vom anderen Peer kommt, mit "Okay, egal, verwerfen Sie mein Angebot und ich nehme stattdessen Ihres in Betracht."
- Ein **nicht höflicher** Peer, der immer eingehende Angebote ignoriert, die mit seinen eigenen Angeboten kollidieren. Er entschuldigt sich nie oder gibt nichts an den höflichen Peer ab. Bei jeder Kollision gewinnt der nicht höfliche Peer.

Auf diese Weise wissen beide Peers genau, was passieren soll, wenn Kollisionsangebote gesendet wurden. Reaktionen auf Fehlerzustände werden viel vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher nicht höflich ist, liegt im Allgemeinen bei Ihnen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuweisen, der sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas Aufwändigeres machen, wie die Peers zufällige Zahlen austauschen lassen und dem Gewinner die höfliche Rolle zuweisen. Wie auch immer Sie die Bestimmung durchführen, sobald diese Rollen den beiden Peers zugewiesen sind, können sie dann zusammenarbeiten, um das Signalisieren auf eine Weise zu verwalten, die keine Deadlocks erzeugt und keinen zusätzlichen Code zur Verwaltung erfordert.

Ein wichtiger Punkt, den Sie im Hinterkopf behalten sollten, ist: Die Rollen von Anrufer und Angerufenem können sich während der Perfect Negotiation ändern. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, aber es eine Kollision mit dem nicht höflichen Peer gibt, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das Angebot, das er vom nicht höflichen Peer erhalten hat. Durch diesen Vorgang hat der höfliche Peer die Rolle vom Anrufer zum Angerufenen gewechselt!

## Implementierung der Perfect Negotiation

Schauen wir uns ein Beispiel an, das das Perfect Negotiation Pattern implementiert. Der Code geht davon aus, dass es eine `SignalingChannel`-Klasse gibt, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede Signalisierungstechnik verwenden, die Sie möchten.

Beachten Sie, dass dieser Code für beide Peers in der Verbindung identisch ist.

### Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier angegebene {{Glossary("STUN", "STUN")}}-Server ist offensichtlich kein echter; Sie müssen `stun.my-server.tld` durch die Adresse eines realen STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.my-stun-server.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code ruft auch die {{HTMLElement("video")}}-Elemente mit den Klassen "self-view" und "remote-view" ab; diese enthalten jeweils die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom Remote-Peer.

### Verbindung zu einem entfernten Peer herstellen

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

Die oben gezeigte `start()`-Funktion kann von beiden Endpunkten aufgerufen werden, die miteinander sprechen möchten. Es spielt keine Rolle, wer dies zuerst tut; die Verhandlung funktioniert einfach.

Dies ist nicht merklich anders als älterer WebRTC-Verbindungsherstellungscode. Die Kamera und das Mikrofon des Benutzers werden abgerufen, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird. Die resultierenden Medien-Tracks werden dann zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt, indem sie in [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) übergeben werden. Schließlich wird die Medienquelle für das Selbstansichts-{{HTMLElement("video")}}-Element, wie durch die Konstante `selfVideo` angegeben, auf den Kamera- und Mikrofonstream gesetzt, sodass der lokale Benutzer sehen kann, was der andere Peer sieht.

### Umgang mit eingehenden Tracks

Wir müssen als Nächstes einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse einrichten, um eingehende Video- und Audiotracks zu verarbeiten, die für diese Peer-Verbindung verhandelt wurden. Dazu implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)'s [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)-Event-Handler.

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

Wenn das `track`-Ereignis auftritt, wird dieser Handler ausgeführt. Mittels [Destrukturierung](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden die [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)'s [`track`](/de/docs/Web/API/RTCTrackEvent/track)- und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams)-Eigenschaften extrahiert. Die erste ist entweder der empfangene Videotrack oder Audiotrack. Letztere ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, von denen jedes einen Stream darstellt, der diesen Track enthält (ein Track kann in seltenen Fällen zu mehreren Streams gleichzeitig gehören). In unserem Fall wird dies immer einen Stream enthalten, an Index 0, weil wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen dem Track einen Unmute-Event-Handler hinzu, da der Track ungemutet wird, sobald er Pakete empfangen beginnt. Wir platzieren den Rest unseres Empfangscodes dort.

Wenn wir bereits Video vom Remote-Peer empfangen (was wir sehen können, wenn die `srcObject`-Eigenschaft des Remote-Ansichts-`<video>`-Elements bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream an Index 0 im `streams`-Array.

### Die Logik der Perfect Negotiation

Jetzt kommen wir zur eigentlichen Logik der Perfect Negotiation, die völlig unabhängig von der restlichen Anwendung funktioniert.

#### Handhabung des negotiationneeded-Ereignisses

Zuerst implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Ereignis-Handler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event), um eine lokale Beschreibung zu erhalten und sie mittels des Signalisierungskanals an den Remote-Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die entsprechende Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und setzt. Die eingestellte Beschreibung ist entweder eine Antwort auf das zuletzt vom Remote-Peer gesendete Angebot _oder_ ein neu erstelltes Angebot, wenn keine Verhandlung im Gange ist. Hier wird es immer ein `offer` sein, weil das negotiationneeded-Ereignis nur im `stable`-Zustand ausgelöst wird.

Wir setzen eine boolesche Variable, `makingOffer`, auf `true`, um zu markieren, dass wir ein Angebot vorbereiten. Um Konkurrenzsituationen zu vermeiden, werden wir diesen Wert später anstelle des Signalisierungsstatus verwenden, um zu ermitteln, ob ein Angebot bearbeitet wird, da der Wert des [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron geändert wird, was eine Glare-Situation hervorruft.

Sobald das Angebot erstellt, gesetzt und gesendet (oder ein Fehler aufgetreten) ist, wird `makingOffer` wieder auf `false` gesetzt.

#### Behandlung eingehender ICE-Kandidaten

Als Nächstes müssen wir das `RTCPeerConnection`-Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) behandeln, das es der lokalen ICE-Schicht ermöglicht, Kandidaten zur Übertragung an den Remote-Peer über den Signalisierungskanal zu übergeben.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies übernimmt das `candidate`-Mitglied dieses ICE-Ereignisses und übergibt es an die `send()`-Methode des Signalisierungskanals, um es über den Signalisierungsserver an den Remote-Peer zu senden.

#### Behandlung eingehender Nachrichten auf dem Signalisierungskanal

Das letzte Teilstück des Puzzles ist der Code zur Behandlung eingehender Nachrichten vom Signalisierungsserver. Dies wird hier als `onmessage`-Event-Handler am Signalisierungskanalobjekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

```js
let ignoreOffer = false;

signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const offerCollision =
        description.type === "offer" &&
        (makingOffer || pc.signalingState !== "stable");

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) {
        return;
      }

      await pc.setRemoteDescription(description);
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

Beim Empfang einer eingehenden Nachricht von `SignalingChannel` über seinen `onmessage`-Event-Handler wird das empfangene JSON-Objekt destrukturiert, um die darin enthaltene `description` oder `candidate` zu erhalten. Wenn die eingehende Nachricht eine `description` hat, ist es entweder ein Angebot oder eine Antwort, die vom anderen Peer gesendet wurde.

Wenn andererseits die Nachricht einen `candidate` enthält, ist es ein ICE-Kandidat, der als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) vom Remote-Peer empfangen wurde. Der Kandidat soll an die lokale ICE-Schicht übergeben werden, indem er in [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

##### Beim Empfang einer Beschreibung

Wenn wir eine `description` erhalten haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst prüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn der Signalisierungsstatus der Verbindung nicht `stable` ist oder wenn unser Ende der Verbindung mit der Erstellung eines eigenen Angebots begonnen hat, müssen wir auf Angebotskollisionen achten.

Wenn wir der nicht höfliche Peer sind und ein kollidierendes Angebot erhalten, geben wir zurück, ohne die Beschreibung zu setzen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns als Teil dieses Angebots über den Signalisierungskanal senden kann. Damit wird Störlärm vermieden, da wir unserer Seite nie über dieses Angebot informiert haben.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot erhalten, müssen wir nichts Besonderes tun, da unser bestehendes Angebot im nächsten Schritt automatisch zurückgesetzt wird.

Nachdem wir sichergestellt haben, dass wir das Angebot annehmen möchten, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies signalisiert WebRTC, wie die vorgeschlagene Konfiguration des anderen Peers aussieht. Wenn wir der höfliche Peer sind, verwerfen wir unser Angebot und nehmen das neue an.

Wenn die neu gesetzte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine geeignete lokale Konfiguration auszuwählen, indem wir die Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescripcion) ohne Parameter aufrufen. Dies führt dazu, dass `setLocalDescription()` automatisch eine passende Antwort auf das erhaltene Angebot generiert. Anschließend senden wir die Antwort über den Signalisierungskanal zurück an den ersten Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidat enthält, liefern wir diesen an die lokale {{Glossary("ICE", "ICE")}}-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) auf dem [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Wenn ein Fehler auftritt und wir das jüngste Angebot ignoriert haben, ignorieren wir auch einen möglichen Fehler beim Hinzufügen des Kandidaten.

## Perfekte Verhandlung möglich machen

Falls Sie sich fragen, was perfekte Verhandlung _so perfekt_ macht, ist dieser Abschnitt für Sie. Hier werden wir uns jede Änderung ansehen, die an der WebRTC-API und an den Best Practice-Empfehlungen gemacht wurde, um perfekte Verhandlung möglich zu machen.

### Glare-freie setLocalDescription()

In der Vergangenheit war das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis leicht in einer Weise zu behandeln, die anfällig für Glare war—also anfällig für Kollisionen, bei denen beide Peers versuchen konnten, gleichzeitig ein Angebot zu erstellen, was dazu führte, dass ein oder der andere Peer einen Fehler erhielt und den Verbindungsversuch abbrach.

#### Die alte Methode

Betrachten Sie diesen [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis-Handler:

```js example-bad
pc.onnegotiationneeded = async () => {
  try {
    await pc.setLocalDescription(await pc.createOffer());
    signaler.send({ description: pc.localDescription });
  } catch (err) {
    console.error(err);
  }
};
```

Da die Methode [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) asynchron ist und einige Zeit zur Ausführung benötigt, besteht die Möglichkeit, dass der Remote-Peer versucht, ein eigenes Angebot zu senden, was dazu führt, dass wir den `stable`-Zustand verlassen und in den Zustand `have-remote-offer` wechseln, was bedeutet, dass wir nun auf eine Antwort auf das Angebot warten. Sobald es jedoch das Angebot erhält, das wir gerade gesendet haben, ist der Remote-Peer ebenfalls in dieser Wartesituation. Dies führt dazu, dass beide Peers in einen Zustand versetzt werden, in dem der Verbindungsversuch nicht abgeschlossen werden kann.

#### Perfekte Verhandlung mit der aktualisierten API

Wie im Abschnitt [Implementierung der Perfekten Verhandlung](#implementierung_perfekter_verhandlung) gezeigt, können wir dieses Problem durch die Einführung einer Variablen (hier `makingOffer` genannt) eliminieren, welche wir verwenden, um anzuzeigen, dass wir dabei sind, ein Angebot zu senden, und durch die Nutzung der aktualisierten `setLocalDescription()`-Methode:

```js example-good
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

Wir setzen `makingOffer` sofort, bevor wir `setLocalDescription()` aufrufen, um zu verhindern, dass es zu Interferenzen durch das Senden dieses Angebots kommt, und wir setzen es nicht zurück auf `false`, bis das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler eingetreten ist, der das Erstellen des Angebots verhindert). Dadurch vermeiden wir das Risiko von kollidierenden Angeboten.

### Automatisches Rollback in setRemoteDescription()

Ein Schlüsselelement der perfekten Verhandlung ist das Konzept des höflichen Peers, der sich immer zurückzieht, wenn er ein Angebot erhält, während er selbst auf eine Antwort auf ein Angebot wartet. Zuvor war es notwendig, die Bedingungen für das Rollback manuell zu überprüfen und das Rollback manuell auszulösen, indem die lokale Beschreibung auf eine mit dem Typ `rollback` gesetzt wurde, wie hier:

```js
await pc.setLocalDescription({ type: "rollback" });
```

Dies setzt den lokalen Peer zurück in den `stable` [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) von welchem Zustand auch immer er zuvor gewesen ist. Da ein Peer nur Angebote annehmen kann, wenn er im `stable`-Zustand ist, hat der Peer somit sein Angebot zurückgezogen und ist bereit, das Angebot vom entfernten (nicht höflichen) Peer zu akzeptieren. Wie wir gleich sehen werden, gibt es jedoch Probleme mit diesem Ansatz.

#### Perfekte Verhandlung mit der alten API

Die Verwendung der vorherigen API zum Implementieren von eingehenden Verhandlungsnachrichten während der perfekten Verhandlung sah in etwa so aus:

```js example-bad
signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      if (description.type === "offer" && pc.signalingState !== "stable") {
        if (!polite) {
          return;
        }

        await Promise.all([
          pc.setLocalDescription({ type: "rollback" }),
          pc.setRemoteDescription(description),
        ]);
      } else {
        await pc.setRemoteDescription(description);
      }

      if (description.type === "offer") {
        await pc.setLocalDescription(await pc.createAnswer());
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

Da das Rollback dadurch funktioniert, dass Änderungen bis zur nächsten Verhandlung aufgeschoben werden (die sofort nach Abschluss der aktuellen erfolgt), muss der höfliche Peer wissen, wann er ein erhaltenes Angebot wegwerfen muss, wenn er darauf wartet, eine Antwort auf ein bereits gesendetes Angebot zu erhalten.

Der Code prüft, ob die Nachricht ein Angebot ist, und wenn ja, ob der lokale Signalisierungszustand nicht `stable` ist. Ist er nicht stabil _und_ der lokale Peer ist der höfliche, müssen wir das Rollback auslösen, damit wir das ausgehende Angebot durch das neue eingehende ersetzen können. Und diese müssen beide abgeschlossen sein, bevor wir mit der Behandlung des erhaltenen Angebots fortfahren können.

Da es keinen einzelnen Befehl gibt, der "Zurücksetzen und stattdessen dieses Angebot verwenden" lautet, erfordert diese Änderung am höflichen Peer zwei Schritte, die im Kontext von [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) ausgeführt werden. So wird sichergestellt, dass beide Anweisungen vollständig ausgeführt werden, bevor mit dem verarbeiteten Angebot fortgefahren wird. Die erste Anweisung löst das Rollback aus und die zweite setzt die Remote-Beschreibung auf die empfangene, womit der Prozess des Ersetzens des zuvor gesendeten Angebots mit dem neu empfangenen Angebot abgeschlossen ist. Der höfliche Peer ist jetzt der Angerufene statt der Anrufer.

Alle anderen vom nicht höflichen Peer empfangenen Beschreibungen werden normal verarbeitet, indem sie an [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) weitergegeben werden.

Schließlich verarbeiten wir ein empfangenes Angebot, indem wir `setLocalDescription()` aufrufen, um unsere lokale Beschreibung auf die durch [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) zurückgegebene zu setzen. Das wird dann dem höflichen Peer über den Signalisierungskanal gesendet.

Wenn die eingehende Nachricht ein ICE-Kandidat anstelle einer SDP-Beschreibung ist, wird dieser an die ICE-Schicht übergeben, indem er an die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übergeben wird. Wenn ein Fehler auftritt und wir ein Angebot aufgrund eines Zusammenstoßes als unhöflicher Peer gerade ignoriert haben, werfen wir den Fehler, damit der Aufrufer ihn behandeln kann. Andernfalls ignorieren wir den Fehler, da er in diesem Kontext keine Rolle spielt.

#### Perfekte Verhandlung mit der aktualisierten API

Der aktualisierte Code nutzt die Tatsache, dass Sie nun [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter aufrufen können, sodass es für Sie einfach das Richtige tut, sowie die Tatsache, dass `setRemoteDescription()` bei Bedarf automatisch ein Rollback durchführt. Dadurch müssen wir nicht mehr auf [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgreifen, um das Timing in Ordnung zu halten, da das Rollback zu einem im Wesen atomaren Bestandteil des `setRemoteDescription()`-Aufrufs wird.

```js example-good
let ignoreOffer = false;

signaler.onmessage = async ({ data: { description, candidate } }) => {
  try {
    if (description) {
      const offerCollision =
        description.type === "offer" &&
        (makingOffer || pc.signalingState !== "stable");

      ignoreOffer = !polite && offerCollision;
      if (ignoreOffer) {
        return;
      }

      await pc.setRemoteDescription(description);
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

Während der Unterschied in der Codegröße gering ist, und die Komplexität sich nicht stark verringert, ist der Code deutlich zuverlässiger. Lassen Sie uns einen Blick in den Code werfen, um zu sehen, wie er jetzt funktioniert.

##### Beim Empfang einer Beschreibung

Im überarbeiteten Code, wenn die empfangene Nachricht eine SDP-`description` ist, prüfen wir, ob sie eintrifft, während wir versuchen, ein Angebot zu senden. Wenn die empfangene Nachricht ein `offer` ist _und_ der lokale Peer der nicht höfliche Peer ist _und_ ein Zusammenstoß auftritt, ignorieren wir das Angebot, weil wir weiterhin versuchen wollen, das Angebot zu verwenden, das bereits gesendet wird. Das ist der unhöfliche Peer in Aktion.

In jedem anderen Fall werden wir versuchen, die eingehende Nachricht zu bearbeiten. Dies beginnt damit, dass die Remote-Beschreibung auf die empfangene `description` gesetzt wird, indem sie an [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben wird. Dies funktioniert unabhängig davon, ob wir mit einem Angebot oder einer Antwort umgehen, da Rollback bei Bedarf automatisch durchgeführt wird.

An diesem Punkt, wenn die empfangene Nachricht ein `offer` ist, verwenden wir `setLocalDescription()`, um eine passende lokale Beschreibung zu erstellen und zu setzen, dann senden wir sie über den Signalisierungsserver an den Remote-Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält—angezeigt durch das JSON-Objekt, das ein `candidate`-Mitglied enthält—liefern wir es an die lokale ICE-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Fehler werden, wie zuvor, ignoriert, wenn wir gerade ein Angebot verworfen haben.

### Hinzufügung der Methode restartIce()

Die bisher verwendeten Techniken, um einen [ICE-Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) während der Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses auszulösen, wiesen signifikante Mängel auf. Diese Mängel erschwerten es, sicher und zuverlässig einen Neustart während der Verhandlung auszulösen. Die Verbesserungen der Perfekten Verhandlung haben dies mit der Hinzufügung einer neuen Methode [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) zu `RTCPeerConnection` behoben.

#### Die alte Methode

In der Vergangenheit, wenn Sie auf einen ICE-Fehler stießen und die Verhandlung neu starten mussten, hätten Sie vielleicht etwas wie dies gemacht:

```js example-bad
pc.onnegotiationneeded = async (options) => {
  await pc.setLocalDescription(await pc.createOffer(options));
  signaler.send({ description: pc.localDescription });
};
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === "failed") {
    pc.onnegotiationneeded({ iceRestart: true });
  }
};
```

Dies weist eine Reihe von Zuverlässigkeitsproblemen und offensichtlichen Fehlern auf (wie das Fehlschlagen, wenn das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis ausgelöst wird, wenn der Signalisierungsstatus nicht `stable` ist), aber es gab keine Möglichkeit, tatsächlich einen ICE-Neustart anzufordern, außer durch das Erstellen und Senden eines Angebots mit der `iceRestart`-Option auf `true`. Der Neustartantrag erforderte somit das direkte Aufrufen des Handlers des `negotiationneeded`-Ereignisses. Es richtig hinzubekommen war bestenfalls schwierig, und es war so leicht falsch zu machen, dass Fehler häufig vorkommen.

#### Verwendung von restartIce()

Jetzt können Sie `restartIce()` verwenden, um dies viel sauberer zu tun:

```js example-good
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
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === "failed") {
    pc.restartIce();
  }
};
```

Mit dieser verbesserten Technik, anstatt direkt `onnegotiationneeded` mit Optionen zum Auslösen eines ICE-Neustarts aufzurufen, ruft der `failed` [ICE-Verbindungsstatus](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) auf. `restartIce()` teilt der ICE-Schicht mit, dass das nächste gesendete ICE-Nachricht automatisch das `iceRestart`-Flag hinzugefügt wird. Problem gelöst!

### Rollback wird im pranswer-Zustand nicht mehr unterstützt

Die letzte der herausragenden API-Änderungen ist, dass Sie keinen Rollback durchführen können, wenn Sie sich in einem der `have-remote-pranswer`- oder `have-local-pranswer`-Zustände befinden. Glücklicherweise ist es bei der Verwendung von Perfekter Verhandlung ohnehin nicht notwendig, dies zu tun, da die Situationen, die dies erforderlich machen, abgefangen und verhindert werden, bevor diese Zustände je erreicht werden.

Daher wird ein Versuch, im `pranswer`-Zustand ein Rollback auszulösen, nun einen `InvalidStateError` werfen.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebenszeit einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

---
title: "Eine Verbindung herstellen: Das perfekte WebRTC-Verhandlungsmuster"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 0b2db5ae5d76003622a3fb7dab024a1e31e72561
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die **perfekte Verhandlung** von WebRTC ein, beschreibt, wie sie funktioniert und warum sie die empfohlene Methode zur Verhandlung einer WebRTC-Verbindung zwischen Peers ist, und bietet Beispielcode, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Übertragungsmechanismus für das Signalisieren während der Verhandlung einer neuen Peer-Verbindung vorschreibt, ist es äußerst flexibel. Trotz dieser Flexibilität beim Transport und der Kommunikation von Signalisierungsnachrichten gibt es ein empfohlenes Designmuster, dem Sie nach Möglichkeit folgen sollten, das als perfekte Verhandlung bekannt ist.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Verhandlungsprozesses komplizierter waren, als sie für typische Anwendungsfälle sein mussten. Dies war auf einige wenige Probleme mit der API und einige potenzielle Race-Bedingungen zurückzuführen, die verhindert werden mussten. Diese Probleme wurden inzwischen behoben, sodass wir unsere WebRTC-Verhandlungen erheblich vereinfachen können. Das perfekte Verhandlungsmuster ist ein Beispiel dafür, wie sich Verhandlungen seit den frühen Tagen von WebRTC verbessert haben.

## Konzepte der perfekten Verhandlung

Die perfekte Verhandlung ermöglicht es, den Verhandlungsprozess nahtlos und vollständig vom Rest der Anwendungslogik zu trennen. Verhandlung ist eine inhärent asymmetrische Operation: Eine Seite muss als "Anrufer" fungieren, während der andere Peer der "Angerufene" ist. Das perfekte Verhandlungsmuster glättet diesen Unterschied, indem es diesen Unterschied in eine unabhängige Verhandlungsmethodik auslagert, sodass Ihre Anwendung nicht darauf achten muss, welches Ende der Verbindung sie ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie anrufen oder einen Anruf erhalten.

Das Beste an der perfekten Verhandlung ist, dass derselbe Code sowohl für den Anrufer als auch den Angerufenen verwendet wird, sodass es keine Wiederholungen oder ansonsten zusätzliche Ebenen von Verhandlungscode zu schreiben gibt.

Die perfekte Verhandlung funktioniert, indem jedem der beiden Peers eine Rolle im Verhandlungsprozess zugewiesen wird, die völlig unabhängig vom WebRTC-Verbindungsstatus ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Im Wesentlichen ist ein höflicher Peer einer, der Angebote senden kann, aber dann antwortet, wenn ein Angebot vom anderen Peer eintrifft, mit „Okay, macht nichts, verwerfe mein Angebot und ich werde stattdessen Ihres in Betracht ziehen.“
- Ein **unhöflicher** Peer, der immer eingehende Angebote ignoriert, die mit seinen eigenen Angeboten kollidieren. Er entschuldigt sich niemals oder gibt dem höflichen Peer etwas auf. Jedes Mal, wenn eine Kollision auftritt, gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was passieren soll, wenn Kollisionen zwischen gesendeten Angeboten auftreten. Reaktionen auf Fehlerbedingungen werden weitaus vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher unhöflich ist, bleibt in der Regel Ihnen überlassen. Es könnte so einfach sein, dem ersten Peer, der sich mit dem Signalisierungsserver verbindet, die höfliche Rolle zuzuweisen, oder Sie könnten etwas Ausgeklügelteres tun, wie beispielsweise die Peers Zufallszahlen austauschen zu lassen und die höfliche Rolle dem Gewinner zuzuweisen. Unabhängig davon, wie Sie die Bestimmung treffen, sobald diese Rollen den beiden Peers zugewiesen sind, können sie zusammenarbeiten, um die Signalisierung auf eine Weise zu verwalten, die keine Sackgassen erzeugt und nicht viel zusätzlichen Code erfordert.

Ein wichtiger Punkt, den Sie im Auge behalten sollten, ist: Die Rollen von Anrufer und Angerufenem können sich während der perfekten Verhandlung ändern. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, es jedoch eine Kollision mit dem unhöflichen Peer gibt, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das Angebot, das er vom unhöflichen Peer erhalten hat. Dadurch hat der höfliche Peer die Rolle vom Anrufer zum Angerufenen gewechselt!

## Implementierung der perfekten Verhandlung

Werfen wir einen Blick auf ein Beispiel, das das perfekte Verhandlungsmuster implementiert. Der Code geht davon aus, dass eine `SignalingChannel`-Klasse definiert ist, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede beliebige Signalisierungstechnik verwenden.

Beachten Sie, dass dieser Code für beide Peers der Verbindung identisch ist.

### Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier angegebene {{Glossary("STUN", "STUN")}}-Server ist offensichtlich kein echter; Sie müssen `stun.myserver.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.mystunserver.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code ruft auch die {{HTMLElement("video")}}-Elemente auf, die die Klassen "selfview" und "remoteview" verwenden; diese enthalten jeweils die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom Remote-Peer.

### Verbindung zu einem Remote-Peer herstellen

```js
const constraints = { audio: true, video: true };
const selfVideo = document.querySelector("video.selfview");
const remoteVideo = document.querySelector("video.remoteview");

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

Die oben gezeigte Funktion `start()` kann von einem der beiden Endpunkte aufgerufen werden, die miteinander kommunizieren möchten. Es spielt keine Rolle, wer dies zuerst tut; die Verhandlung wird einfach funktionieren.

Dies unterscheidet sich nicht wesentlich von älterem WebRTC-Verbindungsaufbaucode. Die Kamera und das Mikrofon des Benutzers werden durch Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen. Die resultierenden Medienstreams werden dann durch Übergabe an [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) zum [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt. Schließlich wird die Medienquelle für das Selbstansichts-{{HTMLElement("video")}}-Element, das durch die Konstante `selfVideo` angegeben ist, auf den Kamera- und Mikrofonstream gesetzt, sodass der lokale Benutzer sehen kann, was der andere Peer sieht.

### Verarbeiten von eingehenden Tracks

Als nächstes müssen wir einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse einrichten, um eingehende Video- und Audiotracks zu verarbeiten, die als empfangen für diese Peer-Verbindung verhandelt wurden. Dazu implementieren wir den [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignishandler der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection).

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

Wenn das `track`-Ereignis auftritt, wird dieser Handler ausgeführt. Unter Verwendung von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden die Eigenschaften [`track`](/de/docs/Web/API/RTCTrackEvent/track) und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) extrahiert. Ersteres ist entweder der Videotrack oder der Audiotrack, der empfangen wird. Letzteres ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, die jeweils einen Stream enthalten, der diesen Track enthält (ein Track kann in seltenen Fällen gleichzeitig zu mehreren Streams gehören). In unserem Fall enthält dies immer einen Stream an Index 0, da wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen dem Track einen "unmute"-Ereignishandler hinzu, da der Track stumm wird, sobald er Pakete empfängt. Den Rest unseres Empfangscodes stellen wir dort unter.

Wenn wir bereits Video vom Remote-Peer empfangen (was wir daran erkennen können, ob das `<video>`-Element der Remote-Ansicht eine [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream an Index 0 im `streams`-Array.

### Die perfekte Verhandlungslogik

Nun kommen wir zur eigentlichen Logik der perfekten Verhandlung, die völlig unabhängig vom Rest der Anwendung funktioniert.

#### Ereignis „negotiationneeded“ verarbeiten

Zunächst implementieren wir den Ereignishandler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um eine lokale Beschreibung zu erhalten und diese über den Signalisierungskanal an den Remote-Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die geeignete Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und einstellt. Die festgelegte Beschreibung ist entweder eine Antwort auf das jüngste Angebot des Remote-Peers _oder_ ein frisch erstelltes Angebot, wenn keine Verhandlung im Gange ist. Hier wird es immer ein `offer` sein, da das Ereignis „negotiationneeded“ nur im Zustand „stable“ ausgelöst wird.

Wir setzen eine boolesche Variable `makingOffer` auf `true`, um zu markieren, dass wir ein Angebot vorbereiten. Um Rennen zu vermeiden, verwenden wir diesen Wert später anstelle des Signalisierungsstatus, um festzustellen, ob ein Angebot verarbeitet wird, da der Wert von [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron geändert wird, was eine Blendungsmöglichkeit einführt.

Sobald das Angebot erstellt, gesetzt und gesendet wurde (oder ein Fehler auftritt), wird `makingOffer` wieder auf `false` gesetzt.

#### Eingehende ICE-Kandidaten verarbeiten

Als nächstes müssen wir das Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) der `RTCPeerConnection` verarbeiten, über das die lokale ICE-Schicht Kandidaten zur Übermittlung an den Remote-Peer über den Signalisierungskanal an uns übergibt.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies nimmt das `candidate`-Mitglied dieses ICE-Ereignisses und übergibt es über die `send()`-Methode des Signalisierungskanals, um über den Signalisierungsserver an den Remote-Peer gesendet zu werden.

#### Eingehende Nachrichten auf dem Signalisierungskanal verarbeiten

Das letzte Teil des Puzzles ist der Code zum Verarbeiten eingehender Nachrichten vom Signalisierungsserver. Dies wird hier als `onmessage`-Ereignishandler am Signalisierungskanal-Objekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

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

Beim Empfang einer eingehenden Nachricht vom `SignalingChannel` über seinen `onmessage`-Ereignishandler wird das empfangene JSON-Objekt mit Destructuring extrahiert, um die in ihm enthaltene `description` oder `candidate` zu erhalten. Wenn die eingehende Nachricht eine `description` enthält, handelt es sich um ein Angebot oder eine Antwort, die vom anderen Peer gesendet wurde.

Wenn die Nachricht hingegen einen `candidate` enthält, handelt es sich um einen ICE-Kandidaten, der vom Remote-Peer als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat soll durch Übergabe an [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) an die lokale ICE-Schicht übergeben werden.

##### Beim Empfang einer Beschreibung

Wenn wir eine `description` erhalten haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu antworten. Zuerst prüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn der Signalisierungszustand der Verbindung nicht `stable` ist oder wenn unser Ende der Verbindung den Prozess begonnen hat, sein eigenes Angebot zu machen, müssen wir auf eine Angebotskollision achten.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot erhalten, kehren wir zurück, ohne die Beschreibung festzulegen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite möglicherweise an uns über den Signalisierungskanal sendet, der zu diesem Angebot gehört. Auf diese Weise vermeiden wir Fehlermeldungen, da wir unserem Ende dieses Angebot nie mitgeteilt haben.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot erhalten, müssen wir nichts Besonderes unternehmen, da unser bestehendes Angebot automatisch im nächsten Schritt zurückgesetzt wird.

Nachdem sichergestellt wurde, dass wir das Angebot annehmen möchten, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies teilt WebRTC mit, welche vorgeschlagene Konfiguration der andere Peer verwendet. Wenn wir der höfliche Peer sind, werden wir unser Angebot aufgeben und das neue annehmen.

Wenn die neu eingestellte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine geeignete lokale Konfiguration auszuwählen, indem wir die Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ohne Parameter aufrufen. Dies veranlasst `setLocalDescription()`, automatisch eine geeignete Antwort auf das empfangene Angebot zu generieren. Dann senden wir die Antwort über den Signalisierungskanal an den ersten Peer zurück.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält, liefern wir diesen an die lokale {{Glossary("ICE", "ICE")}}-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Wenn ein Fehler auftritt und wir das zuletzt erhaltene Angebot ignoriert haben, ignorieren wir auch einen möglicherweise auftretenden Fehler, wenn wir versuchen, den Kandidaten hinzuzufügen.

## Die Verhandlung perfekt machen

Wenn Sie sich fragen, was die perfekte Verhandlung so _perfekt_ macht, dann ist dieser Abschnitt für Sie. Hier schauen wir uns jede Änderung an der WebRTC-API und den besten Praxisempfehlungen an, um perfekte Verhandlungen möglich zu machen.

### Blendfreie setLocalDescription()

In der Vergangenheit konnte das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis leicht so gehandhabt werden, dass es anfällig für Blendung war – das heißt, es gab häufig Kollisionen, bei denen beide Peers versuchen konnten, gleichzeitig ein Angebot zu machen, was dazu führte, dass einer der beiden Peers einen Fehler erhielt und der Verbindungsversuch abgebrochen wurde.

#### Der alte Weg

Betrachten Sie diesen [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignishandler:

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

Weil die Methode [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) asynchron ist und einige Zeit benötigt, um abzuschließen, besteht die Möglichkeit, dass der Remote-Peer versucht, ein eigenes Angebot zu senden, was dazu führt, dass wir den Zustand „stable“ verlassen und in den Zustand „have-remote-offer“ wechseln, was bedeutet, dass wir nun auf eine Antwort auf das Angebot warten. Sobald er jedoch das Angebot erhält, das wir gerade gesendet haben, ist auch der Remote-Peer so eingestellt. Dies lässt beide Peers in einem Zustand zurück, in dem der Verbindungsversuch nicht abgeschlossen werden kann.

#### Perfekte Verhandlung mit der aktualisierten API

Wie im Abschnitt [Implementierung der perfekten Verhandlung](#implementierung_der_perfekten_verhandlung) gezeigt, können wir dieses Problem beheben, indem wir eine Variable (hier `makingOffer` genannt) einführen, die wir verwenden, um anzuzeigen, dass wir im Prozess der Übermittlung eines Angebots sind, und die aktualisierte Methode `setLocalDescription()` verwenden:

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

Wir setzen `makingOffer` unmittelbar vor dem Aufruf von `setLocalDescription()`, um eine Beeinträchtigung des Sendens dieses Angebots zu vermeiden, und setzen es nicht auf `false` zurück, bis das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der verhindert, dass das Angebot gemacht wird). Auf diese Weise vermeiden wir das Risiko von Angebotskollisionen.

### Automatisches Rollback in setRemoteDescription()

Ein wesentlicher Bestandteil der perfekten Verhandlung ist das Konzept des höflichen Peers, der sich immer zurückrollt, wenn er ein Angebot erhält, während er selbst auf eine Antwort auf ein Angebot wartet. Früher war das Auslösen eines Rollbacks mit dem manuellen Überprüfen von Rollback-Bedingungen und dem manuellen Auslösen des Rollbacks durch Setzen der lokalen Beschreibung auf eine mit dem Typ `rollback` verbunden, wie in diesem Beispiel:

```js
await pc.setLocalDescription({ type: "rollback" });
```

Dies führt dazu, dass der lokale Peer in den Zustand `stable` versetzt wird, aus welchem Zustand er zuvor gewesen war. Da ein Peer nur Angebote im Zustand `stable` akzeptieren kann, hat der Peer damit sein Angebot zurückgezogen und ist bereit, das Angebot des Remote-Peers (unhöflich) zu empfangen. Wie wir gleich sehen werden, gibt es dabei jedoch Probleme.

#### Perfekte Verhandlung mit der alten API

Mit der vorherigen API würde der Code zum Implementieren eingehender Verhandlungsnachrichten während der perfekten Verhandlung folgendermaßen aussehen:

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

Da das Rollback funktioniert, indem Änderungen bis zur nächsten Verhandlung verschoben werden (die sofort nach Abschluss der aktuellen Verhandlung beginnt), muss der höfliche Peer wissen, wann er ein empfangenes Angebot verwerfen muss, wenn er gerade auf eine Antwort auf ein bereits gesendetes Angebot wartet.

Der Code überprüft, ob die Nachricht ein Angebot ist, und wenn ja, ob der lokale Signalisierungszustand nicht `stable` ist. Wenn er nicht stabil ist und der lokale Peer der höfliche ist, müssen wir das Rollback auslösen, damit wir das ausgehende Angebot durch das neue eingehende ersetzen können. Und dies muss alles abgeschlossen sein, bevor wir fortfahren können, das empfangene Angebot zu bearbeiten.

Da es keine "Rollback und benutze stattdessen dieses Angebot" gibt, erfordert das Ändern dieses Vorgangs auf dem höflichen Peer zwei Schritte, die im Kontext von [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) ausgeführt werden, das verwendet wird, um sicherzustellen, dass beide Anweisungen vollständig ausgeführt werden, bevor das empfangene Angebot weiter bearbeitet wird. Die erste Anweisung löst das Rollback aus und die zweite setzt die Remote-Beschreibung auf die empfangene, sodass der Vorgang, das zuvor _gesendete_ Angebot durch das neu _empfangene_ Angebot zu ersetzen, abgeschlossen ist. Der höfliche Peer ist nun der Angerufene statt der Anrufer geworden.

Alle anderen vom unhöflichen Peer empfangenen Beschreibungen werden normal verarbeitet, indem sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben werden.

Schließlich bearbeiten wir ein empfangenes Angebot, indem wir `setLocalDescription()` aufrufen, um unsere lokale Beschreibung auf die von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) zurückgegebene Beschreibung zu setzen. Diese wird dann über den Signalisierungskanal an den höflichen Peer gesendet.

Wenn die eingehende Nachricht ein ICE-Kandidat anstelle einer SDP-Beschreibung ist, wird dieser an die ICE-Schicht übergeben, indem er in die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übergeben wird. tritt hier ein Fehler auf und wir haben das Angebot nicht gerade wegen einer Kollision als unhöflicher Peer abgelegt, werfen wir den Fehler, damit der Anrufer ihn behandeln kann. Andernfalls ignorieren wir den Fehler, da es in diesem Kontext keine Rolle spielt.

#### Perfekte Verhandlung mit der aktualisierten API

Der aktualisierte Code nutzt die Tatsache, dass Sie jetzt [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter aufrufen können, sodass es einfach das richtige für Sie tut, sowie die Tatsache, dass `setRemoteDescription()` bei Bedarf automatisch zurückrollt. Dies ermöglicht es uns, die Verwendung eines [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zu entfernen, um das Timing in Ordnung zu halten, da das Rollback zu einem im Wesentlichen atomaren Teil des Aufrufs von `setRemoteDescription()` wird.

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

Obwohl der Unterschied in der Codegröße gering ist und die Komplexität nicht wesentlich reduziert ist, ist der Code weitaus zuverlässiger. Schauen wir uns den Code genauer an, um zu sehen, wie er jetzt funktioniert.

##### Beim Empfang einer Beschreibung

Im überarbeiteten Code prüfen wir, wenn die empfangene Nachricht eine SDP `description` ist, ob sie angekommen ist, während wir versuchen, ein Angebot zu senden. Wenn die empfangene Nachricht ein `offer` ist und der lokale Peer der unhöfliche Peer ist und eine Kollision auftritt, ignorieren wir das Angebot, weil wir versuchen möchten, das Angebot zu verwenden, das bereits im Prozess des Sendens ist. Das ist der unhöfliche Peer in Aktion.

In allen anderen Fällen werden wir versuchen, die eingehende Nachricht zu verarbeiten. Dies beginnt mit dem Setzen der Remote-Beschreibung auf die empfangene `description`, indem sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben wird. Dies funktioniert unabhängig davon, ob wir ein Angebot oder eine Antwort bearbeiten, da das Rollback bei Bedarf automatisch durchgeführt wird.

Zu diesem Zeitpunkt, wenn die empfangene Nachricht ein `offer` ist, verwenden wir `setLocalDescription()`, um eine geeignete lokale Beschreibung zu erstellen und festzulegen, und senden sie dann über den Signalisierungsserver an den Remote-Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält—angezeigt durch das JSON-Objekt mit einem `candidate`-Mitglied—liefern wir diesen an die lokale ICE-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Fehler werden wie zuvor ignoriert, wenn wir gerade ein Angebot abgelehnt haben.

### Explizite restartIce()-Methode hinzugefügt

Die zuvor verwendeten Techniken zur Auslösung eines [ICE Restarts](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) während der Bearbeitung des Ereignisses [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) haben erhebliche Mängel. Diese Mängel haben es schwierig gemacht festzustellen, während der Verhandlung sicher und verlässlich einen Neustart auszulösen. Die Verbesserungen der perfekten Verhandlung haben dieses Problem durch die Hinzufügung einer neuen Methode [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) zu `RTCPeerConnection` behoben.

#### Der alte Weg

In der Vergangenheit, wenn Sie einen ICE-Fehler auftraten und die Verhandlung neu starten mussten, hätten Sie möglicherweise etwas wie dies getan:

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

Dies hat eine Reihe von Zuverlässigkeitsproblemen und sogar Bugs (wie das Fehlschlagen, wenn das Ereignis [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) ausgelöst wird, wenn der Signalisierungszustand nicht `stable` ist), aber es gab keine Möglichkeit, tatsächlich einen ICE-Neustart anzufordern, außer durch das Erstellen und Senden eines Angebots mit gesetzter `iceRestart`-Option. Das Senden der Neustartanforderung erforderte daher das direkte Aufrufen des Handlers des `negotiationneeded`-Ereignisses. Es richtig zu machen, war bestenfalls knifflig und so einfach, falsch zu machen, dass Fehler häufig sind.

#### Verwendung von restartIce()

Nun können Sie `restartIce()` verwenden, um dies viel sauberer zu erledigen:

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

Mit dieser verbesserten Technik, anstatt direkt `onnegotiationneeded` mit Optionen zum Auslösen des ICE-Neustarts aufzurufen, erfolgt der Aufruf von [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) im Zustand `failed` [ICE-Verbindung](/de/docs/Web/API/RTCPeerConnection/iceConnectionState). `restartIce()` fordert die ICE-Schicht auf, das `iceRestart`-Flag automatisch zur nächsten gesendeten ICE-Nachricht hinzuzufügen. Problem gelöst!

### Rollback im pranswer-Zustand nicht mehr unterstützt

Die letzte der API-Änderungen, die hervorstechen, ist, dass Sie nicht länger zurückrollen können, wenn Sie sich in einem der beiden Zustände `have-remote-pranswer` oder `have-local-pranswer` befinden. Glücklicherweise ist dies bei der Verwendung der perfekten Verhandlung nicht notwendig, da die Situationen, die dies verursachen, abgefangen und verhindert werden, bevor ein Zurückrollen jemals notwendig wird.

Daher führt der Versuch, das Zurückrollen auszulösen, während man sich in einem der beiden pranswer-Zustände befindet, jetzt zu einem `InvalidStateError`.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

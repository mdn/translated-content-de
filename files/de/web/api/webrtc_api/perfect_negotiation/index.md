---
title: "Verbindung herstellen: Das WebRTC-Perfekte-Verhandlungs-Muster"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 0b2db5ae5d76003622a3fb7dab024a1e31e72561
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in das WebRTC **perfekte Verhandeln** ein, beschreibt, wie es funktioniert und warum es die empfohlene Methode ist, um eine WebRTC-Verbindung zwischen den Peers auszuhandeln, und liefert Beispielcode zur Demonstration der Technik.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für Signalisierung während der Verhandlung einer neuen Peer-Verbindung vorschreibt, ist es hochflexibel. Trotz dieser Flexibilität hinsichtlich Transport und Kommunikation der Signalisierungsnachrichten gibt es immer noch ein empfohlenes Designmuster, das Sie nach Möglichkeit befolgen sollten, bekannt als perfektes Verhandeln.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Verhandlungsprozesses für typische Anwendungsfälle komplizierter waren als nötig. Dies lag an einer kleinen Anzahl von Problemen mit der API sowie an potenziellen Race-Bedingungen, die verhindert werden mussten. Diese Probleme wurden mittlerweile behoben, wodurch wir unsere WebRTC-Verhandlungen erheblich vereinfachen können. Das perfekte Verhandeln ist ein Beispiel dafür, wie die Verhandlungen sich seit den Anfängen von WebRTC verbessert haben.

## Konzepte des Perfekten Verhandelns

Das perfekte Verhandeln ermöglicht es, den Verhandlungsprozess nahtlos und vollständig von der restlichen Logik Ihrer Anwendung zu trennen. Verhandlungen sind von Natur aus ein asymmetrischer Vorgang: Eine Seite muss als "Anrufer" fungieren, während der andere Peer der "Angerufene" ist. Das perfekte Verhandeln glättet diesen Unterschied, indem es diese Unterschiede in eine unabhängige Verhandlungslogik ausgliedert, sodass Ihre Anwendung nicht beachten muss, welches Ende der Verbindung es ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie einen Anruf tätigen oder empfangen.

Das Beste am perfekten Verhandeln ist, dass derselbe Code sowohl für den Anrufer als auch für den Angerufenen verwendet wird, sodass keine Wiederholung oder zusätzliche Verhandlungscode geschrieben werden muss.

Das perfekte Verhandeln funktioniert, indem jedem der beiden Peers eine Rolle im Verhandlungsprozess zugewiesen wird, die völlig unabhängig vom WebRTC-Verbindungsstatus ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Im Wesentlichen ist ein höflicher Peer einer, der Angebote senden kann, aber darauf reagiert, wenn ein Angebot vom anderen Peer eingeht, indem er sagt: "Okay, schon gut, verwerfen Sie mein Angebot und ich werde stattdessen Ihres berücksichtigen."
- Ein **unhöflicher** Peer, der eingehende Angebote, die mit seinen eigenen kollidieren, immer ignoriert. Er entschuldigt sich nie oder gibt dem höflichen Peer etwas auf. Jedes Mal, wenn eine Kollision auftritt, gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was passieren soll, wenn es zu Kollisionen zwischen gesendeten Angeboten kommt. Reaktionen auf Fehlerbedingungen werden dadurch wesentlich vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher unhöflich ist, bleibt in der Regel Ihnen überlassen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuweisen, der sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas aufwendiger vorgehen, indem Sie die Peers zufällig Zahlen austauschen lassen und die höfliche Rolle dem Gewinner zuweisen. Wie auch immer Sie die Entscheidung treffen, sobald diese Rollen den beiden Peers zugewiesen sind, können sie zusammenarbeiten, um die Signalisierung auf eine Weise zu verwalten, die keine Blockaden verursacht und nicht viel zusätzlichen Code erfordert.

Eine wichtige Sache, die man im Auge behalten sollte, ist, dass sich die Rollen von Anrufer und Angerufenem während des perfekten Verhandelns wechseln können. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, aber eine Kollision mit dem unhöflichen Peer auftritt, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das Angebot, das er vom unhöflichen Peer erhalten hat. Dadurch hat sich der höfliche Peer vom Anrufer zum Angerufenen gewandelt!

## Implementierung des Perfekten Verhandelns

Schauen wir uns ein Beispiel an, das das Muster des perfekten Verhandelns implementiert. Der Code geht davon aus, dass es eine `SignalingChannel`-Klasse gibt, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede Signalisierungstechnik verwenden, die Sie möchten.

Beachten Sie, dass dieser Code für beide Peers, die an der Verbindung beteiligt sind, identisch ist.

### Erstellung der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die {{domxref("RTCPeerConnection")}} erstellt werden. Der hier aufgeführte {{Glossary("STUN")}}-Server ist offensichtlich kein echter; Sie müssen `stun.myserver.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.mystunserver.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code holt auch die {{HTMLElement("video")}}-Elemente mit den Klassen "selfview" und "remoteview"; diese enthalten entsprechend die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom Remote-Peer.

### Verbindung mit einem entfernten Peer

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

Die oben gezeigte `start()`-Funktion kann von einem der beiden Endpunkte aufgerufen werden, die miteinander sprechen möchten. Es spielt keine Rolle, wer es zuerst tut; die Verhandlung wird einfach funktionieren.

Dies unterscheidet sich nicht wesentlich vom älteren Code zur Einrichtung einer WebRTC-Verbindung. Die Kamera und das Mikrofon des Benutzers werden durch Aufruf von {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} erlangt. Die resultierenden Medientracks werden dann durch Übergabe an {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} zur {{domxref("RTCPeerConnection")}} hinzugefügt. Zuletzt wird die Medienquelle für das Selbstansicht-{{HTMLElement("video")}}-Element, das durch die konstante `selfVideo` angegeben ist, auf den Kamera- und Mikrofon-Stream gesetzt, sodass der lokale Benutzer sehen kann, was der andere Peer sieht.

### Umgang mit eingehenden Tracks

Als nächstes müssen wir einen Handler einrichten für {{domxref("RTCPeerConnection.track_event", "track")}}-Events, um eingehende Video- und Audiotracks zu behandeln, die für diese Peer-Verbindung verhandelt wurden, um empfangen zu werden. Dazu implementieren wir den {{domxref("RTCPeerConnection")}}-Handler für das {{domxref("RTCPeerConnection.track_event", "ontrack")}}-Event.

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

Wenn das `track`-Event auftritt, wird dieser Handler ausgeführt. Mit [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden die Eigenschaften {{domxref("RTCTrackEvent")}}'s {{domxref("RTCTrackEvent.track", "track")}} und {{domxref("RTCTrackEvent.streams", "streams")}} extrahiert. Ersteres ist entweder der Video- oder Audiotrack, der empfangen wird. Letzteres ist ein Array von {{domxref("MediaStream")}}-Objekten, die jeweils einen Stream enthalten, der diesen Track enthält (ein Track kann in seltenen Fällen gleichzeitig zu mehreren Streams gehören). In unserem Fall wird dies immer einen Stream enthalten, an Index 0, weil wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen dem Track einen Unmute-Event-Handler hinzu, da der Track unmuted wird, sobald er Pakete empfängt. Der Rest unseres Empfangscodes wird dort eingefügt.

Wenn wir bereits Video vom Remote-Peer empfangen (was wir sehen können, wenn die `srcObject`-Eigenschaft des `<video>`-Elements des Remote-Anzeige bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream bei Index 0 im `streams`-Array.

### Die Perfekte-Verhandlungs-Logik

Nun kommen wir zur eigentlichen Logik des perfekten Verhandelns, die völlig unabhängig vom Rest der Anwendung funktioniert.

#### Umgang mit dem negotiationneeded-Event

Zuerst implementieren wir den {{domxref("RTCPeerConnection")}}-Event-Handler {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}}, um eine lokale Beschreibung zu erhalten und diese über den Signalisierungskanal an den entfernten Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch eine passende Beschreibung basierend auf dem aktuellen {{domxref("RTCPeerConnection.signalingState", "signalingState")}} erstellt und setzt. Die gesetzte Beschreibung ist entweder eine Antwort auf das zuletzt vom Remote-Peer empfangene Angebot _oder_ ein frisch erstelltes Angebot, wenn keine Verhandlung im Gange ist. Hier wird es immer ein `offer` sein, da das negotiationneeded-Event nur im `stable`-Zustand ausgelöst wird.

Wir setzen eine boolesche Variable, `makingOffer`, auf `true`, um zu kennzeichnen, dass wir ein Angebot vorbereiten. Um Race-Bedingungen zu vermeiden, verwenden wir diesen Wert später statt des Signalisierungszustands, um zu bestimmen, ob ein Angebot bearbeitet wird, da der Wert von {{domxref("RTCPeerConnection.signalingState", "signalingState")}} asynchron ändert, was eine Glare-Gelegenheit einführt.

Sobald das Angebot erstellt, gesetzt und gesendet wurde (oder ein Fehler auftritt), wird `makingOffer` wieder auf `false` gesetzt.

#### Umgang mit eingehenden ICE-Kandidaten

Als Nächstes müssen wir das `RTCPeerConnection`-Event {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}} behandeln, das uns vom lokalen ICE-Layer Kandidaten zur Übermittlung an den Remote-Peer über den Signalisierungskanal bereitstellt.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies nimmt das `candidate`-Element dieses ICE-Events und gibt es an die `send()`-Methode des Signalisierungskanals weiter, um es über den Signalisierungsserver an den Remote-Peer zu senden.

#### Umgang mit eingehenden Nachrichten auf dem Signalisierungskanal

Das letzte Puzzleteil ist der Code zum Umgang mit eingehenden Nachrichten vom Signalisierungsserver. Das wird hier als `onmessage`-Event-Handler auf dem Signalisierungskanal-Objekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

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

Beim Empfang einer eingehenden Nachricht vom `SignalingChannel` über seinen `onmessage`-Event-Handler wird das empfangene JSON-Objekt destrukturisiert, um die darin enthaltene `description` oder `candidate` zu erhalten. Wenn die eingehende Nachricht eine `description` hat, ist sie entweder ein Angebot oder eine Antwort, die vom anderen Peer gesendet wurde.

Wenn die Nachricht hingegen einen `candidate` enthält, ist es ein ICE-Kandidat, der vom Remote-Peer als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat soll der lokalen ICE-Schicht durch Übergabe an {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} zugeführt werden.

##### Beim Empfang einer Beschreibung

Wenn wir eine `description` erhalten haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst überprüfen wir, ob wir in einem Zustand sind, in dem wir ein Angebot akzeptieren können. Wenn der Signalisierungszustand der Verbindung nicht `stable` ist oder unser Ende der Verbindung den Prozess der Erstellung eines eigenen Angebots gestartet hat, müssen wir eine Angebot-Kollision vermeiden.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot erhalten, kehren wir zurück, ohne die Beschreibung zu setzen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns möglicherweise auf dem Signalisierungskanal sendet, der zu diesem Angebot gehört. Auf diese Weise vermeiden wir Fehlgeräusche, da wir unser Ende niemals über dieses Angebot informiert haben.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot erhalten, müssen wir nichts Besonderes tun, da unser bestehendes Angebot im nächsten Schritt automatisch zurückgesetzt wird.

Nachdem wir sichergestellt haben, dass wir das Angebot annehmen möchten, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} aufrufen. Dadurch erfährt WebRTC, welche Konfiguration des anderen Peers vorgeschlagen wird. Wenn wir der höfliche Peer sind, werden wir unser Angebot fallen lassen und das neue akzeptieren.

Wenn die neu gesetzte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine passende lokale Konfiguration auszuwählen, indem wir die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} ohne Parameter aufrufen. Dadurch wird `setLocalDescription()` automatisch eine passende Antwort im Hinblick auf das empfangene Angebot generieren. Dann senden wir die Antwort über den Signalisierungskanal zurück an den ersten Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält, stellen wir ihn der lokalen {{Glossary("ICE")}}-Schicht zu, indem wir die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} aufrufen. Wenn ein Fehler auftritt und wir das jüngste Angebot ignoriert haben, ignorieren wir auch jeden Fehler, der auftreten kann, wenn wir versuchen, den Kandidaten hinzuzufügen.

## Perfekte Verhandlungen ermöglichen

Wenn Sie neugierig sind, was das perfekte Verhandeln _so perfekt_ macht, ist dieser Abschnitt genau das Richtige für Sie. Hier schauen wir auf jede Änderung, die an der WebRTC-API und den Best-Practice-Empfehlungen vorgenommen wurde, um perfektes Verhandeln möglich zu machen.

### Glare-freie setLocalDescription()

In der Vergangenheit war das {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Event leicht auf eine Weise behandelte, die anfällig für Glare war - das heißt, es war anfällig für Kollisionen, bei denen beide Peers gleichzeitig versuchen konnten, ein Angebot zu machen, was dazu führte, dass einer oder der andere Peer einen Fehler erhielt und der Verbindungsversuch abgebrochen wurde.

#### Die alte Methode

Betrachten Sie diesen {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}}-Event-Handler:

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

Da die Methode {{domxref("RTCPeerConnection.createOffer", "createOffer()")}} asynchron ist und einige Zeit benötigt, um abgeschlossen zu werden, gibt es eine Phase, in der der Remote-Peer versuchen könnte, ein eigenes Angebot zu senden, wodurch wir den `stable`-Zustand verlassen und den `have-remote-offer`-Zustand betreten, was bedeutet, dass wir auf eine Antwort auf das Angebot warten. Aber sobald es das Angebot erhält, das wir gerade gesendet haben, ist auch der Remote-Peer in diesem Zustand. Dies lässt beide Peers in einem Zustand, in dem der Verbindungsversuch nicht abgeschlossen werden kann.

#### Perfektes Verhandeln mit der aktualisierten API

Wie im Abschnitt [Implementierung des Perfekten Verhandelns](#implementierung_des_perfekten_verhandelns) gezeigt, können wir dieses Problem durch die Einführung einer Variablen (hier `makingOffer` genannt) lösen, die wir verwenden, um anzuzeigen, dass wir gerade dabei sind, ein Angebot zu senden, und die aktualisierte Methode `setLocalDescription()` verwenden:

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

Wir setzen `makingOffer` unmittelbar bevor wir `setLocalDescription()` aufrufen, um gegen das Senden dieses Angebots zu sperren, und wir setzen es nicht zurück auf `false`, bis das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der verhindert, dass das Angebot gemacht wird). Auf diese Weise vermeiden wir das Risiko von Angebotskollisionen.

### Automatischer Rollback in setRemoteDescription()

Ein wesentlicher Bestandteil des perfekten Verhandelns ist das Konzept des höflichen Peers, der sich immer zurückrollt, wenn er ein Angebot empfängt, während er selbst auf eine Antwort auf ein Angebot wartet. Früher erforderte das Auslösen eines Rollbacks die manuelle Überprüfung der Rollback-Bedingungen und das manuelle Auslösen des Rollbacks, indem die lokale Beschreibung auf eine mit dem Typ `rollback` gesetzt wurde, wie folgt:

```js
await pc.setLocalDescription({ type: "rollback" });
```

Dadurch wird der lokale Peer auf den `stable`-{{domxref("RTCPeerConnection.signalingState", "signalingState")}} zurückversetzt, aus welchem Zustand er sich vorher auch immer befinden mochte. Da ein Peer Angebote nur akzeptieren kann, wenn er im `stable`-Zustand ist, hat sich der Peer somit von seinem Angebot zurückgezogen und ist bereit, das Angebot des entfernten (unhöflichen) Peers zu empfangen. Wie wir gleich sehen werden, gibt es jedoch Probleme mit diesem Ansatz.

#### Perfektes Verhandeln mit der alten API

Bei Verwendung der bisherigen API zur Implementierung eingehender Verhandlungsnachrichten während des perfekten Verhandelns würde dies etwa so aussehen:

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

Da Rollback funktioniert, indem Änderungen bis zur nächsten Verhandlung verschoben werden (die sofort nach der aktuellen abgeschlossen wird), muss der höfliche Peer wissen, wann er ein empfangenes Angebot verwerfen muss, wenn er gerade auf eine Antwort auf ein bereits gesendetes Angebot wartet.

Der Code überprüft, ob die Nachricht ein Angebot ist und ob der lokale Signalisierungszustand nicht `stable` ist. Wenn er nicht stabil ist _und_ der lokale Peer der höfliche ist, müssen wir einen Rollback auslösen, damit wir das ausgehende Angebot durch das neue eingehende ersetzen können. Und diese müssen beide vollständig ausgeführt werden, bevor wir mit der Bearbeitung des empfangenen Angebots fortfahren können.

Da es keinen einzigen "Rückwärtsgang und dieses Angebot stattdessen verwenden" gibt, erfordert die Durchführung dieser Änderung am höflichen Peer zwei Schritte, die im Kontext von [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) ausgeführt werden, das verwendet wird, um sicherzustellen, dass beide Anweisungen vollständig ausgeführt werden, bevor die Verarbeitung des empfangenen Angebots fortgesetzt wird. Die erste Anweisung löst einen Rollback aus und die zweite setzt die Remote-Beschreibung auf die empfangene, wodurch der Prozess des Ersetzens des zuvor _gesendeten_ Angebots mit dem neu _empfangenen_ Angebot abgeschlossen wird. Der höfliche Peer ist nun der Angerufene anstelle des Anrufers geworden.

Alle anderen vom unhöflichen Peer empfangenen Beschreibungen werden wie gewohnt verarbeitet, indem sie an {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} übergeben werden.

Schließlich verarbeiten wir ein empfangenes Angebot, indem wir `setLocalDescription()` aufrufen, um unsere lokale Beschreibung auf die von {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} zurückgegebene zu setzen. Dann wird diese über den Signalisierungskanal an den höflichen Peer gesendet.

Wenn die eingehende Nachricht ein ICE-Kandidat anstelle einer SDP-Beschreibung ist, wird sie der ICE-Schicht zugeführt, indem sie an die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} übergeben wird. Wenn dabei ein Fehler auftritt und wir nicht gerade ein Angebot wegen einer Kollision infolge der Unhöflichkeit verworfen haben, [`werfen`](/de/docs/Web/JavaScript/Reference/Statements/throw) wir den Fehler, damit der Aufrufer ihn behandeln kann. Ansonsten ignorieren wir den Fehler, da er in diesem Kontext keine Bedeutung hat.

#### Perfektes Verhandeln mit der aktualisierten API

Der aktualisierte Code nutzt die Tatsache, dass Sie jetzt {{domxref("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}} ohne Parameter aufrufen können, sodass es einfach das Richtige für Sie tut, sowie die Tatsache, dass `setRemoteDescription()` automatisch zurücksetzt, wenn nötig. Dadurch wird die Notwendigkeit, ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zu verwenden, beseitigt, um das Timing in Ordnung zu halten, da das Zurückrollen ein im Wesentlichen atomarer Teil des `setRemoteDescription()`-Aufrufs wird.

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

Obwohl der Unterschied im Codeumfang gering ist und die Komplexität sich nicht stark verringert, ist der Code weitaus zuverlässiger. Werfen wir einen Blick in den Code, um zu sehen, wie er jetzt funktioniert.

##### Beim Empfang einer Beschreibung

Im überarbeiteten Code, wenn die empfangene Nachricht eine SDP-`description` ist, überprüfen wir, ob sie eingetroffen ist, während wir versuchen, ein Angebot zu übertragen. Wenn die empfangene Nachricht ein `offer` ist _und_ der lokale Peer der unhöfliche Peer ist, _und_ eine Kollision auftritt, ignorieren wir das Angebot, weil wir weiterhin versuchen möchten, das Angebot zu verwenden, das bereits gesendet wird. Das ist das unhöfliche Verhalten des Peers in Aktion.

In jedem anderen Fall werden wir versuchen, die eingehende Nachricht zu verarbeiten. Dies beginnt damit, dass wir die Remote-Beschreibung auf die empfangene `description` setzen, indem wir sie an {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} übergeben. Dies funktioniert unabhängig davon, ob wir ein Angebot oder eine Antwort bearbeiten, da das Zurücksetzen bei Bedarf automatisch durchgeführt wird.

An diesem Punkt, wenn die empfangene Nachricht ein `offer` ist, verwenden wir `setLocalDescription()`, um eine passende lokale Beschreibung zu erstellen und zu setzen, und senden sie dann über den Signalisierungsserver an den Remote-Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen ein ICE-Kandidat ist—angezeigt durch das JSON-Objekt, das ein `candidate`-Element enthält—liefern wir ihn an die lokale ICE-Schicht, indem wir die {{domxref("RTCPeerConnection")}}-Methode {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} aufrufen. Wenn dabei ein Fehler auftritt, ignorieren wir ihn, ebenso wie vorher, wenn wir gerade ein Angebot verworfen haben.

### Explizite restartIce()-Methode hinzugefügt

Die Techniken, die bisher verwendet wurden, um ein [ICE-Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) während des {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Events auszulösen, hatten erhebliche Schwächen. Diese Schwächen erschwerten es, sicher und zuverlässig einen Neustart während der Verhandlung auszulösen. Die Verbesserungen beim perfekten Verhandeln haben dies behoben, indem eine neue {{domxref("RTCPeerConnection.restartIce", "restartIce()")}}-Methode zu `RTCPeerConnection` hinzugefügt wurde.

#### Die alte Methode

Früher, wenn Sie auf einen ICE-Fehler stießen und die Verhandlung neu starten mussten, haben Sie möglicherweise etwas Ähnliches gemacht:

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

Dies hat eine Reihe von Zuverlässigkeitsproblemen und offensichtlichen Fehlern (wie das Fehlschlagen, wenn das {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Event ausgelöst wird, wenn der Signalisierungszustand nicht `stable` ist), aber es gab keine Möglichkeit, eine ICE-Neustart tatsächlich zu fordern, außer durch Erstellung und Senden eines Angebots mit der Option `iceRestart` auf `true`. Der Neustart musste durch direktes Aufrufen des `negotiationneeded`-Event-Handlers gesendet werden. Es richtig zu machen war bestenfalls schwierig, und es war so einfach, es falsch zu machen, dass Fehler häufig sind.

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

Mit dieser verbesserten Technik, anstatt den `onnegotiationneeded`-Handler direkt mit Optionen zum Auslösen des ICE-Neustarts aufzurufen, ruft der `failed` [ICE-Verbindungszustand](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) {{domxref("RTCPeerConnection.restartIce", "restartIce()")}} auf. `restartIce()` weist die ICE-Schicht an, das `iceRestart`-Flag automatisch zur nächsten gesendeten ICE-Nachricht hinzuzufügen. Problem gelöst!

### Rollback im pranswer-Zustand nicht mehr unterstützt

Die letzte herausragende Änderung der API ist, dass Sie beim Aufenthalt in einem der `have-remote-pranswer`- oder `have-local-pranswer`-Zustände nicht mehr zurückrollen können. Glücklicherweise besteht bei der Verwendung des perfekten Verhandelns keine Notwendigkeit mehr, dies zu tun, da die Situationen, die dies verursachen, rechtzeitig erkannt und verhindert werden, bevor das Rückrollen jemals erforderlich wird.

Daher wird der Versuch, ein Rollback im einen der beiden `pranswer`-Zustände auszulösen, nun einen `InvalidStateError` auslösen.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

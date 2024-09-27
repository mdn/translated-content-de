---
title: "Eine Verbindung herstellen: Das WebRTC Mustergültige Verhandlungsverfahren"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 0b2db5ae5d76003622a3fb7dab024a1e31e72561
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel stellt das Mustergültige Verhandlungsverfahren von WebRTC vor, beschreibt, wie es funktioniert und warum es die empfohlene Methode ist, um eine WebRTC-Verbindung zwischen Peers zu verhandeln. Außerdem wird Beispielcode bereitgestellt, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für das Signaling während der Aushandlung einer neuen Peer-Verbindung vorschreibt, ist es äußerst flexibel. Trotz dieser Flexibilität bei Transport und Kommunikation von Signaling-Nachrichten gibt es ein empfohlenes Designmuster, das Sie nach Möglichkeit befolgen sollten, bekannt als das Mustergültige Verhandlungsverfahren.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Verhandlungsprozesses für typische Anwendungsfälle komplizierter waren als nötig. Dies lag an einer kleinen Anzahl von Problemen mit der API und einigen potenziellen Race Conditions, die vermieden werden mussten. Diese Probleme wurden inzwischen behoben, sodass wir unsere WebRTC-Verhandlungen erheblich vereinfachen können. Das Mustergültige Verhandlungsverfahren ist ein Beispiel für die Verbesserungen der Verhandlung seit den frühen Tagen von WebRTC.

## Konzepte der mustergültigen Verhandlung

Die mustergültige Verhandlung ermöglicht es, den Verhandlungsprozess nahtlos und vollständig von der restlichen Logik Ihrer Anwendung zu trennen. Die Verhandlung ist eine von Natur aus asymmetrische Operation: Eine Seite muss als "Anrufer" dienen, während das andere Peer der "Angerufene" ist. Das Mustergültige Verhandlungsverfahren beseitigt diesen Unterschied, indem es diese Asymmetrie in unabhängige Verhandlungslogik auslagert, sodass Ihre Anwendung nicht darauf achten muss, welches Ende der Verbindung es ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie hinauswählen oder einen Anruf entgegennehmen.

Das Beste an der mustergültigen Verhandlung ist, dass derselbe Code sowohl für den Anrufer als auch den Angerufenen verwendet wird, sodass keine Wiederholung oder zusätzliche Ebenen von Verhandlungscode geschrieben werden müssen.

Die mustergültige Verhandlung funktioniert, indem jeder der beiden Peers eine Rolle zugewiesen wird, die im Verhandlungsprozess vollständig vom WebRTC-Verbindungsstatus getrennt ist:

- Ein **höflicher** Peer, das ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu vermeiden. Ein höflicher Peer kann Angebote senden, aber wenn ein Angebot vom anderen Peer eingeht, antwortet er mit „Okay, vergiss mein Angebot, ich werde stattdessen deines in Betracht ziehen.“
- Ein **unhöflicher** Peer, der eingehende Angebote, die mit seinen eigenen kollidieren, immer ignoriert. Er entschuldigt sich nie und gibt dem höflichen Peer nichts auf. Bei jeder Kollision gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was geschehen soll, wenn es Kollisionen zwischen gesendeten Angeboten gibt. Die Reaktionen auf Fehlerbedingungen werden dadurch viel vorhersehbarer.

Wie Sie bestimmen, welches Peer höflich und welches unhöflich ist, liegt in der Regel bei Ihnen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuordnen, das sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas aufwändiger vorgehen, indem Sie die Peers zufällige Zahlen austauschen lassen und die höfliche Rolle dem Gewinner zuweisen. Wie auch immer Sie die Entscheidung treffen, sobald diese Rollen den beiden Peers zugewiesen sind, können sie gemeinsam Signalisierung in einer Weise verwalten, die keine Deadlocks verursacht und keinen großen zusätzlichen Code erfordert.

Etwas Wichtiges, das Sie beachten sollten: Die Rollen von Anrufer und Angerufenem können während der mustergültigen Verhandlung wechseln. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, aber eine Kollision mit dem unhöflichen Peer auftritt, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das empfangene Angebot vom unhöflichen Peer. Durch diese Handlung hat der höfliche Peer von Anrufer zu Angerufenem gewechselt!

## Implementierung der mustergültigen Verhandlung

Lassen Sie uns einen Blick auf ein Beispiel werfen, das das Mustergültige Verhandlungsverfahren implementiert. Der Code geht davon aus, dass eine `SignalingChannel` Klasse definiert ist, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede beliebige Signaltechnik verwenden.

Beachten Sie, dass dieser Code für beide in die Verbindung involvierten Peers identisch ist.

### Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier aufgeführte [STUN](/de/docs/Glossary/STUN) Server ist offensichtlich kein echter; Sie müssen `stun.myserver.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.mystunserver.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code erhält auch die {{HTMLElement("video")}} Elemente mit den Klassen "selfview" und "remoteview"; diese enthalten jeweils die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom entfernten Peer.

### Verbindung zu einem entfernten Peer herstellen

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

Die oben gezeigte `start()` Funktion kann von jedem der beiden Endpunkte aufgerufen werden, die miteinander sprechen möchten. Es spielt keine Rolle, wer es zuerst tut; die Verhandlungen werden einfach funktionieren.

Dies unterscheidet sich nicht wesentlich von älterem WebRTC-Verbindungsaufbaucode. Die Kamera und das Mikrofon des Benutzers werden durch Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) abgerufen. Die resultierenden Media-Tracks werden dann der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt, indem sie an [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) übergeben werden. Schließlich wird die Medienquelle für das Selbstansicht-{{HTMLElement("video")}} Element, angegeben durch die `selfVideo` Konstante, auf den Stream von Kamera und Mikrofon gesetzt, was dem lokalen Benutzer ermöglicht zu sehen, was der andere Peer sieht.

### Umgang mit eingehenden Tracks

Als nächstes müssen wir einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignisse einrichten, um eingehende Video- und Audio-Tracks zu verarbeiten, die für diese Peer-Verbindung ausgehandelt wurden. Dazu implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignishandler.

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

Wenn das `track` Ereignis auftritt, wird dieser Handler ausgeführt. Mithilfe von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) werden die Eigenschaften [`track`](/de/docs/Web/API/RTCTrackEvent/track) und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) extrahiert. Ersteres ist entweder der empfangene Videotrack oder Audiotrack. Letzteres ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream) Objekten, die jeweils einen Stream darstellen, der diesen Track enthält (ein Track kann in seltenen Fällen zu mehreren Streams gehören). In unserem Fall wird dies immer einen Stream an Index 0 enthalten, da wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen dem Track einen Handler für das Unmute-Ereignis hinzu, da der Track stummgeschaltet wird, sobald er Pakete empfängt. Den Rest unseres Empfangscodes platzieren wir darin.

Wenn wir bereits Video vom entfernten Peer empfangen (was wir sehen können, wenn die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaft des Remote-Ansichts-`<video>` Elements bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream an Index 0 im `streams` Array.

### Die mustergültige Verhandlungslogik

Nun kommen wir zur eigentlichen mustergültigen Verhandlungslogik, die völlig unabhängig vom Rest der Anwendung funktioniert.

#### Umgang mit dem Negotiationneeded-Ereignis

Zuerst implementieren wir den Ereignishandler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) für [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um eine lokale Beschreibung zu erhalten und sie mit dem Signalisierungskanal an das Remote-Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die passende Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und setzt. Die gesetzte Beschreibung ist entweder eine Antwort auf das jüngste Angebot des entfernten Peers _oder_ ein frisch erstelltes Angebot, wenn keine Verhandlung im Gange ist. Hier wird es immer ein `angebot` sein, da das Negotiationneeded-Ereignis nur im `stabilen` Zustand ausgelöst wird.

Wir setzen eine boolesche Variable `makingOffer` auf `true`, um zu kennzeichnen, dass wir ein Angebot vorbereiten. Um Race Conditions zu vermeiden, werden wir später diesen Wert anstelle des Signalisierungsstatus verwenden, um zu bestimmen, ob ein Angebot verarbeitet wird, da sich der Wert von [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron ändert und eine Glare-Gelegenheit bietet.

Sobald das Angebot erstellt, gesetzt und gesendet wurde (oder ein Fehler auftritt), wird `makingOffer` wieder auf `false` gesetzt.

#### Umgang mit eingehenden ICE-Kandidaten

Als nächstes müssen wir das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis von `RTCPeerConnection` behandeln, das die lokale ICE-Schicht mit Kandidaten versorgt, die wir zur Übermittlung an das entfernte Peer über den Signalisierungskanal erhalten.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies nimmt das `candidate`-Mitglied dieses ICE-Ereignisses und übergibt es der `send()` Methode des Signalisierungs-Kanals, um es über den Signalisierungsserver an das entfernte Peer zu senden.

#### Umgang mit eingehenden Nachrichten auf dem Signalisierungskanal

Das letzte Element des Puzzles ist der Code, um eingehende Nachrichten vom Signalisierungsserver zu behandeln. Dies wird hier als `onmessage` Ereignishandler auf dem Signalisierungskanal-Objekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

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

Nach dem Empfang einer eingehenden Nachricht vom `SignalingChannel` durch sein `onmessage` Ereignishandler wird das empfangene JSON-Objekt desktruiert, um die darin enthaltene `description` oder `candidate` zu erhalten. Wenn die eingehende Nachricht eine `description` enthält, handelt es sich dabei entweder um ein Angebot oder eine Antwort, die von dem anderen Peer gesendet wurde.

Wenn die Nachricht andererseits einen `candidate` enthält, handelt es sich um einen ICE-Kandidaten, der vom entfernten Peer als Teil von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat soll zur lokalen ICE-Schicht geliefert werden, indem er in [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

##### Beim Empfang einer Beschreibung

Wenn wir eine `description` empfangen, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst überprüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn sich der Signalisierungsstatus der Verbindung nicht im `stabilen` Zustand befindet oder unsere Seite der Verbindung begonnen hat, den Prozess zur Erstellung eines eigenen Angebots einzuleiten, müssen wir auf Angebotskollisionen achten.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot erhalten, kehren wir zurück, ohne die Beschreibung festzulegen, und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns möglicherweise für dieses Angebot über den Signalisierungskanal sendet. Dadurch wird Fehlergeräusch vermieden, da wir unsere Seite nie über dieses Angebot informierten.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot erhalten, müssen wir nichts Besonderes tun, da unser bestehendes Angebot im nächsten Schritt automatisch zurückgenommen wird.

Nachdem sichergestellt wurde, dass wir das Angebot annehmen möchten, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies teilt WebRTC mit, wie die vorgeschlagene Konfiguration des anderen Peers aussieht. Wenn wir der höfliche Peer sind, wird unser Angebot zurückgenommen und das neue angenommen.

Wenn die neu eingestellte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine passende lokale Konfiguration zu wählen, indem wir die Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufrufen, ohne Parameter. Dies führt dazu, dass `setLocalDescription()` automatisch eine passende Antwort auf das empfangene Angebot generiert. Dann senden wir die Antwort über den Signalisierungsserver an das erste Peer zurück.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht andererseits einen ICE-Kandidaten enthält, liefern wir ihn an die lokale [ICE](/de/docs/Glossary/ICE)-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Wenn ein Fehler auftritt und wir das letzte Angebot ignoriert haben, ignorieren wir auch jeden Fehler, der beim Versuch, den Kandidaten hinzuzufügen, auftreten kann.

## Die mustergültige Verhandlung perfekt machen

Wenn Sie neugierig sind, was die mustergültige Verhandlung _so perfekt_ macht, ist dieser Abschnitt für Sie. Hier werfen wir einen Blick auf jede Änderung, die an der WebRTC API vorgenommen wurde, und auf die Empfehlungen für Best Practices, um mustergültige Verhandlungen möglich zu machen.

### Glare-freies setLocalDescription()

In der Vergangenheit war das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis einfach in einer Weise zu handhaben, die anfällig für Glare war – das heißt, es war anfällig für Kollisionen, bei denen beide Peers versuchen konnten, gleichzeitig ein Angebot zu machen, was dazu führte, dass einer der Peers einen Fehler erhielt und die Verbindungsversuche abbrach.

#### Die alte Methode

Betrachten Sie diesen [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignishandler:

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

Da die Methode [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) asynchron ist und einige Zeit zur Ausführung benötigt, gibt es einen Zeitraum, in dem der entfernte Peer möglicherweise versucht, ein eigenes Angebot zu senden, wodurch wir den `stabilen` Zustand verlassen und in den `have-remote-offer` Zustand gelangen, was bedeutet, dass wir nun auf eine Antwort auf das Angebot warten. Sobald jedoch das gerade gesendete Angebot empfangen wird, ist dies auch der entfernte Peer. Dies lässt beide Peers in einem Zustand, in dem der Verbindungsversuch nicht abgeschlossen werden kann.

#### Die mustergültige Verhandlung mit der aktualisierten API

Wie im Abschnitt [Implementierung der mustergültigen Verhandlung](#implementierung_der_mustergültigen_verhandlung) gezeigt, können wir dieses Problem beheben, indem wir eine Variable (hier `makingOffer` genannt) einführen, die wir verwenden, um anzuzeigen, dass wir dabei sind, ein Angebot zu senden, und indem wir die aktualisierte `setLocalDescription()` Methode verwenden:

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

Wir setzen `makingOffer` sofort bevor wir `setLocalDescription()` aufrufen, um den Versand dieses Angebots einzusperren, und setzen es erst dann wieder auf `false`, wenn das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der verhindert, dass das Angebot gemacht wird). Auf diese Weise vermeiden wir das Risiko von Angebotskollisionen.

### Automatischer Rollback in setRemoteDescription()

Ein Schlüsselelement der mustergültigen Verhandlung ist das Konzept des höflichen Peers, der immer zurückrollt, wenn es ein Angebot erhält, während es selbst auf eine Antwort auf ein Angebot wartet. Früher bedeutete das Auslösen des Rollbacks das manuelle Überprüfen auf Rollback-Bedingungen und das manuelle Auslösen des Rollbacks, indem die lokale Beschreibung auf eine mit dem Typ `rollback` gesetzt wurde, wie hier:

```js
await pc.setLocalDescription({ type: "rollback" });
```

Durch das Zurücksetzen des lokalen Peers in den `stabilen` [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) von welchem Zustand auch immer er sich zuvor befand, kann ein Peer nur dann Angebote annehmen, wenn er sich im `stabilen` Zustand befindet, und der Peer hat somit sein Angebot zurückgezogen und ist bereit, das Angebot vom entfernten (unhöflichen) Peer zu erhalten. Wie wir jedoch in einem Moment sehen werden, gibt es bei diesem Ansatz Probleme.

#### Die mustergültige Verhandlung mit der alten API

Die Verwendung der vorherigen API zum Implementieren eingehender Verhandlungsnachrichten während der mustergültigen Verhandlung würde etwa so aussehen:

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

Da Rückfragen aufgeschoben werden, bis die nächste Verhandlung beginnt (die sofort nach Abschluss der aktuellen Sitzung starten wird), muss der höfliche Peer wissen, wann er ein empfangenes Angebot wegwerfen muss, wenn er derzeit auf eine Antwort auf ein bereits gesendetes Angebot wartet.

Der Code überprüft, ob die Nachricht ein Angebot ist und ob der lokale Signalisierungsstatus nicht `stabil` ist. Wenn sie nicht stabil ist _und_ der lokale Peer der höfliche ist, müssen wir ein Rollback auslösen, damit wir das ausgehende Angebot mit dem neuen eingehenden ersetzen können. Und beides muss abgeschlossen sein, bevor wir mit der Handhabung des empfangenen Angebots fortfahren können.

Da es keinen einzigen „Rollback und verwenden dieses Angebot statt“ gibt, erfordert die Durchführung dieser Änderung auf dem höflichen Peer zwei Schritte, die im Kontext von [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) ausgeführt werden, das verwendet wird, um sicherzustellen, dass beide Anweisungen vollständig ausgeführt werden, bevor die Verarbeitung des empfangenen Angebots fortgesetzt wird. Die erste Anweisung löst das Rollback aus, und die zweite setzt die Remote-Beschreibung auf die empfangene, wodurch der Prozess des Ersetzens des zuvor _gesendeten_ Angebots durch das neu _empfangene_ Angebot abgeschlossen wird. Der höfliche Peer ist nun vom Anrufer zum Angerufenen geworden.

Alle anderen vom unhöflichen Peer empfangenen Beschreibungen werden normal verarbeitet, indem sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben werden.

Schließlich verarbeiten wir ein empfangenes Angebot, indem wir `setLocalDescription()` aufrufen, um unsere lokale Beschreibung auf die von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) zurückgegebene einzustellen. Diese wird dann über den Signalisierungskanal an den höflichen Peer gesendet.

Wenn die eingehende Nachricht ein ICE-Kandidat ist, anstatt einer SDP-Beschreibung, wird sie an die ICE-Schicht übergeben, indem sie in die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übergeben wird. Wenn hier ein Fehler auftritt und wir gerade kein Angebot aufgrund einer Kollision ignorieren, werfen wir den Fehler mit [`throw`](/de/docs/Web/JavaScript/Reference/Statements/throw), damit der Anrufer ihn abfangen kann. Andernfalls ignorieren wir den Fehler, da er in diesem Kontext keine Rolle spielt.

#### Die mustergültige Verhandlung mit der aktualisierten API

Der aktualisierte Code nutzt die Tatsache, dass Sie jetzt [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter aufrufen können, sodass diese automatisch das Richtige für Sie tut, sowie die Tatsache, dass `setRemoteDescription()` automatisch zurückgerollt wird, wenn nötig. Dies ermöglicht es uns, die Verwendung von [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zur Sicherstellung der richtigen Zeitabläufe zu vermeiden, da das Rollback zu einem im Wesentlichen atomaren Teil des `setRemoteDescription()` Aufrufs wird.

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

Obwohl der Unterschied im Codeumfang gering ist und die Komplexität auch nicht wesentlich reduziert wird, ist der Code viel, viel zuverlässiger. Schauen wir uns den Code jetzt an, um zu sehen, wie er funktioniert.

##### Beim Empfang einer Beschreibung

Im überarbeiteten Code überprüfen wir, wenn die empfangene Nachricht eine SDP `description` ist, ob sie eingetroffen ist, während wir versuchen, ein Angebot zu senden. Wenn die empfangene Nachricht ein `Angebot` _und_ der lokale Peer der unhöfliche Peer ist und eine Kollision stattfindet, ignorieren wir das Angebot, da wir weiterhin versuchen möchten, das Angebot zu verwenden, das bereits im Prozess des Sendens ist. Das ist der unhöfliche Peer in Aktion.

In jedem anderen Fall werden wir stattdessen versuchen, die eingehende Nachricht zu verarbeiten. Dies beginnt damit, die Remote-Beschreibung auf die empfangene `description` zu setzen, indem sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben wird. Dies funktioniert unabhängig davon, ob wir ein Angebot oder eine Antwort behandeln, da Rollbacks automatisch nach Bedarf ausgeführt werden.

Zu diesem Zeitpunkt, wenn die empfangene Nachricht ein `Angebot` ist, verwenden wir `setLocalDescription()`, um eine passende lokale Beschreibung zu erstellen und zu setzen, und senden sie dann über den Signalisierungsserver an das entfernte Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht hingegen einen ICE-Kandidaten enthält – was an dem Vorhandensein eines `candidate` Mitglieds im JSON-Objekt zu erkennen ist – übergeben wir ihn an die lokale ICE-Schicht, indem wir die Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) von [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) aufrufen. Fehler werden, wie zuvor, ignoriert, wenn wir gerade ein Angebot verworfen haben.

### Explizite restartIce() Methode hinzugefügt

Die zuvor verwendeten Techniken, um einen [ICE Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) während der Behandlung des Ereignisses [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) auszulösen, wiesen erhebliche Mängel auf. Diese Mängel haben es schwierig gemacht, während der Verhandlung sicher und zuverlässig einen Neustart auszulösen. Die Verbesserungen der mustergültigen Verhandlung haben dieses Problem durch die Hinzufügung einer neuen [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) Methode für `RTCPeerConnection` behoben.

#### Die alte Methode

In der Vergangenheit, wenn ein ICE-Fehler auftrat und Sie die Verhandlung neu starten mussten, könnten Sie so etwas gemacht haben:

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

Dies hat eine Vielzahl von Zuverlässigkeitsproblemen und sogar Fehler (wie das Versagen, wenn das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) Ereignis ausgelöst wird, während der Signalisierungsstatus nicht `stabil` ist), aber es gab keine Möglichkeit, tatsächlich einen ICE-Neustart anzufordern, außer durch Erstellen und Senden eines Angebots mit der `iceRestart` Option auf `true`. Das Senden der Neustartanfrage erforderte also das direkte Auslösen des Handlers des `negotiationneeded` Ereignisses. Dies richtig zu machen war im besten Fall schwierig und war so leicht falsch zu machen, dass es häufig zu Fehlern kam.

#### Verwenden von restartIce()

Jetzt können Sie `restartIce()` verwenden, um dies viel sauberer zu erledigen:

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

Mit dieser verbesserten Technik, anstatt direkt `onnegotiationneeded` mit Optionen aufzurufen, um einen ICE-Neustart auszulösen, ruft der `failed` [ICE Verbindungsstatus](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) auf. `restartIce()` teilt der ICE-Schicht mit, automatisch das `iceRestart` Flag an die nächste gesendete ICE-Nachricht anzufügen. Problem gelöst!

### Rollback im pranswer Zustand nicht mehr unterstützt

Die letzte der herausragenden API-Änderungen ist, dass Sie beim Verwenden der `have-remote-pranswer` oder `have-local-pranswer` Zustände nicht mehr zurückrollen können. Glücklicherweise ist dies bei Verwendung der mustergültigen Verhandlung ohnehin nicht erforderlich, da die Situationen, die dies verursachen, abgefangen und verhindert werden, bevor ein Zurückrollen jemals notwendig wird.

Daher führt ein Versuch, ein Rollback auszulösen, während Sie sich in einem der beiden `pranswer` Zustände befinden, jetzt zu einem `InvalidStateError`.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

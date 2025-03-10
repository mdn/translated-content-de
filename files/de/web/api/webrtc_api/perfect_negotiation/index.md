---
title: "Verbindung herstellen: Das WebRTC Perfect Negotiation-Muster"
slug: Web/API/WebRTC_API/Perfect_negotiation
l10n:
  sourceCommit: 8cf6d8c10adf3ce5370f8a3f180bec11112d4d44
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die WebRTC **perfect negotiation** ein, beschreibt, wie sie funktioniert und warum sie der empfohlene Weg ist, um eine WebRTC-Verbindung zwischen Peers auszuhandeln. Außerdem wird Beispielcode bereitgestellt, um die Technik zu demonstrieren.

Da [WebRTC](/de/docs/Web/API/WebRTC_API) keinen spezifischen Transportmechanismus für das Signaling während der Aushandlung einer neuen Peer-Verbindung vorschreibt, ist es äußerst flexibel. Trotz dieser Flexibilität beim Transport und der Kommunikation von Signalisierungsnachrichten gibt es jedoch ein empfohlenes Designmuster, dem Sie nach Möglichkeit folgen sollten, bekannt als perfect negotiation.

Nach den ersten Einsätzen von WebRTC-fähigen Browsern wurde erkannt, dass Teile des Aushandlungsprozesses für typische Anwendungsfälle komplizierter waren als nötig. Dies lag an einigen Problemen mit der API und einigen möglichen Race Conditions, die vermieden werden mussten. Diese Probleme wurden mittlerweile behoben, sodass wir unsere WebRTC-Aushandlung erheblich vereinfachen können. Das perfect negotiation-Muster ist ein Beispiel dafür, wie sich die Aushandlung seit den frühen Tagen von WebRTC verbessert hat.

## Konzepte der Perfect Negotiation

Perfect negotiation ermöglicht es, den Aushandlungsprozess nahtlos und vollständig von der restlichen Logik Ihrer Anwendung zu trennen. Die Aushandlung ist eine inhärent asymmetrische Operation: Eine Seite muss als "Anrufer" dienen, während der andere Peer der "Angerufene" ist. Das perfect negotiation-Muster glättet diesen Unterschied, indem es diesen Unterschied in eine unabhängige Aushandlungslogik auslagert, sodass Ihre Anwendung sich nicht darum kümmern muss, welches Ende der Verbindung sie ist. Für Ihre Anwendung macht es keinen Unterschied, ob Sie anrufen oder einen Anruf empfangen.

Das Beste an perfect negotiation ist, dass derselbe Code sowohl für den Anrufer als auch für den Angerufenen verwendet wird, sodass kein redundanter oder zusätzlicher Aushandlungscode geschrieben werden muss.

Perfect negotiation funktioniert, indem jedem der beiden Peers eine Rolle im Aushandlungsprozess zugewiesen wird, die völlig unabhängig vom WebRTC-Verbindungszustand ist:

- Ein **höflicher** Peer, der ICE-Rollback verwendet, um Kollisionen mit eingehenden Angeboten zu verhindern. Ein höflicher Peer sendet grundsätzlich Angebote, reagiert aber, wenn ein Angebot vom anderen Peer eingeht, mit "Okay, vergiss mein Angebot, ich werde deins stattdessen betrachten."
- Ein **unhöflicher** Peer, der eingehende Angebote, die mit eigenen Angeboten kollidieren, immer ignoriert. Er entschuldigt sich nie oder gibt dem höflichen Peer nichts auf. Wenn eine Kollision auftritt, gewinnt der unhöfliche Peer.

Auf diese Weise wissen beide Peers genau, was passieren soll, wenn Kollisionen zwischen gesendeten Angeboten auftreten. Reaktionen auf Fehlerbedingungen werden viel vorhersehbarer.

Wie Sie bestimmen, welcher Peer höflich und welcher unhöflich ist, bleibt im Allgemeinen Ihnen überlassen. Es könnte so einfach sein, die höfliche Rolle dem ersten Peer zuzuweisen, der sich mit dem Signalisierungsserver verbindet, oder Sie könnten etwas aufwendigeres tun, wie den Peers zufällige Zahlen austauschen zu lassen und die höfliche Rolle dem Gewinner zuzuweisen. Unabhängig davon, wie Sie diese Bestimmung treffen, können die beiden Peers, sobald die Rollen zugewiesen sind, zusammenarbeiten, um das Signaling auf eine Weise zu verwalten, die nicht in einer Pattsituation endet und keine Menge an extra Code zur Verwaltung erfordert.

Eine wichtige Sache, die Sie beachten sollten, ist: Die Rollen des Anrufers und des Angerufenen können sich während der perfect negotiation ändern. Wenn der höfliche Peer der Anrufer ist und ein Angebot sendet, das mit dem Angebot des unhöflichen Peers kollidiert, verwirft der höfliche Peer sein Angebot und antwortet stattdessen auf das Angebot, das er vom unhöflichen Peer erhalten hat. Dadurch hat der höfliche Peer seine Rolle als Anrufer zu Angerufenen gewechselt!

## Umsetzung der Perfect Negotiation

Werfen wir einen Blick auf ein Beispiel, das das perfect negotiation-Muster implementiert. Der Code geht davon aus, dass eine `SignalingChannel`-Klasse definiert ist, die zur Kommunikation mit dem Signalisierungsserver verwendet wird. Ihr eigener Code kann natürlich jede Signalisierungstechnik verwenden, die Sie möchten.

Beachten Sie, dass dieser Code für beide an der Verbindung beteiligten Peers identisch ist.

### Erstellen der Signalisierungs- und Peer-Verbindungen

Zuerst muss der Signalisierungskanal geöffnet und die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt werden. Der hier aufgeführte {{Glossary("STUN", "STUN")}}-Server ist offensichtlich nicht real; Sie müssen `stun.my-server.tld` durch die Adresse eines echten STUN-Servers ersetzen.

```js
const config = {
  iceServers: [{ urls: "stun:stun.my-stun-server.tld" }],
};

const signaler = new SignalingChannel();
const pc = new RTCPeerConnection(config);
```

Dieser Code ruft auch die {{HTMLElement("video")}}-Elemente mit den Klassen "self-view" und "remote-view" ab; diese werden entsprechend die Selbstansicht des lokalen Benutzers und die Ansicht des eingehenden Streams vom Remote-Peer enthalten.

### Verbindung zu einem Remote-Peer herstellen

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

Die oben gezeigte `start()`-Funktion kann von einem der beiden Endpunkte aufgerufen werden, die miteinander kommunizieren möchten. Es spielt keine Rolle, wer es zuerst tut; die Aushandlung wird einfach funktionieren.

Dies unterscheidet sich nicht wesentlich von älterem WebRTC-Verbindungsherstellungscode. Die Kamera und das Mikrofon des Benutzers werden durch Aufruf von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) erfasst. Die resultierenden Medientracks werden dann zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) hinzugefügt, indem sie in [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) übergeben werden. Schließlich wird die Medienquelle für das Selbstansicht-{{HTMLElement("video")}}-Element, das durch die Konstante `selfVideo` angezeigt wird, auf den Kamera- und Mikrofonstream gesetzt, wodurch der lokale Benutzer sehen kann, was der andere Peer sieht.

### Umgang mit eingehenden Tracks

Als Nächstes müssen wir einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse einrichten, um eingehende Video- und Audiotracks zu verarbeiten, die für diesen Peer-Verbindung ausgehandelt wurden. Dazu implementieren wir den [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Event-Handler [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event).

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

Wenn das `track`-Ereignis auftritt, wird dieser Handler ausgeführt. Unter Verwendung von [Destructuring](/de/docs/Web/JavaScript/Reference/Operators/Destructuring) werden die Eigenschaften [`track`](/de/docs/Web/API/RTCTrackEvent/track) und [`streams`](/de/docs/Web/API/RTCTrackEvent/streams) des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) extrahiert. Ersteres ist entweder der Empfang von Video- oder Audiotrack. Letzteres ist ein Array von [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekten, von denen jedes einen Stream darstellt, der diesen Track enthält (ein Track kann in seltenen Fällen mehreren Streams gleichzeitig angehören). In unserem Fall wird dies immer einen Stream enthalten, an Index 0, weil wir zuvor einen Stream in `addTrack()` übergeben haben.

Wir fügen dem Track einen Unmute-Event-Handler hinzu, weil der Track einmal ungemutet wird, wenn er beginnt, Pakete zu empfangen. Wir platzieren den Rest unseres Empfangscodes dort.

Wenn wir bereits Video vom Remote-Peer empfangen (was wir sehen können, wenn die `srcObject`-Eigenschaft des `<video>`-Elements der Remote-Ansicht bereits einen Wert hat), tun wir nichts. Andernfalls setzen wir `srcObject` auf den Stream an Index 0 im `streams`-Array.

### Die Perfect Negotiation-Logik

Nun kommen wir zur eigentlichen perfect negotiation-Logik, die völlig unabhängig vom Rest der Anwendung funktioniert.

#### Umgang mit dem negotiationneeded-Ereignis

Zuerst implementieren wir den Event-Handler [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um eine lokale Beschreibung zu erhalten und über den Signalisierungskanal an den Remote-Peer zu senden.

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

Beachten Sie, dass `setLocalDescription()` ohne Argumente automatisch die entsprechende Beschreibung basierend auf dem aktuellen [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) erstellt und setzt. Die gesetzte Beschreibung ist entweder eine Antwort auf das jüngste Angebot vom Remote-Peer _oder_ ein neu erstelltes Angebot, wenn keine Aushandlung im Gange ist. Hier wird es immer ein `offer` sein, da das negotiationneeded-Ereignis nur im `stable`-Zustand ausgelöst wird.

Wir setzen eine boolesche Variable `makingOffer` auf `true`, um zu markieren, dass wir ein Angebot vorbereiten. Um Race Conditions zu vermeiden, verwenden wir diesen Wert später anstelle des Signalisierungszustands, um festzustellen, ob ein Angebot verarbeitet wird, da sich der Wert von [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) asynchron ändert und eine Blendgefahr einführt.

Sobald das Angebot erstellt, gesetzt und gesendet wurde (oder ein Fehler aufgetreten ist), wird `makingOffer` zurück auf `false` gesetzt.

#### Umgang mit eingehenden ICE-Kandidaten

Als Nächstes müssen wir das `RTCPeerConnection`-Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) behandeln, über das uns die lokale ICE-Schicht Kandidaten zur Übermittlung an den Remote-Peer über den Signalisierungskanal übergibt.

```js
pc.onicecandidate = ({ candidate }) => signaler.send({ candidate });
```

Dies übernimmt das `candidate`-Mitglied dieses ICE-Ereignisses und wird über die `send()`-Methode des Signalisierungskanals durch den Signalisierungsserver an den Remote-Peer gesendet.

#### Umgang mit eingehenden Nachrichten auf dem Signalkanal

Das letzte Puzzlestück ist der Code zum Umgang mit eingehenden Nachrichten vom Signalisierungsserver. Dies wird hier als `onmessage`-Event-Handler auf dem Signalisierungskanalobjekt implementiert. Diese Methode wird jedes Mal aufgerufen, wenn eine Nachricht vom Signalisierungsserver eintrifft.

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

Beim Empfang einer eingehenden Nachricht vom `SignalingChannel` über seinen `onmessage`-Event-Handler wird das empfangene JSON-Objekt so de-strukturiert, dass die darin enthaltene `description` oder `candidate` erhalten wird. Wenn die eingehende Nachricht eine `description` enthält, handelt es sich um ein Angebot oder eine Antwort, die vom anderen Peer gesendet wurde.

Wenn andererseits die Nachricht einen `candidate` enthält, handelt es sich um einen ICE-Kandidaten, der vom Remote-Peer im Rahmen von [trickle ICE](/de/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) empfangen wurde. Der Kandidat soll an die lokale ICE-Schicht übergeben werden, indem er in [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird.

##### Beim Empfang einer Beschreibung

Wenn wir eine `description` erhalten haben, bereiten wir uns darauf vor, auf das eingehende Angebot oder die Antwort zu reagieren. Zuerst überprüfen wir, ob wir uns in einem Zustand befinden, in dem wir ein Angebot annehmen können. Wenn der Signalisierungszustand der Verbindung nicht `stable` ist oder wenn unser Ende der Verbindung den Prozess der Erstellung eines eigenen Angebots begonnen hat, müssen wir auf Angebotskollisionen achten.

Wenn wir der unhöfliche Peer sind und ein kollidierendes Angebot erhalten, kehren wir ohne das Festlegen der Beschreibung zurück und setzen stattdessen `ignoreOffer` auf `true`, um sicherzustellen, dass wir auch alle Kandidaten ignorieren, die die andere Seite uns auf dem Signalisierungskanal im Zusammenhang mit diesem Angebot senden könnte. Dies vermeidet Fehlermeldungen, da wir unsererseits nie über dieses Angebot informiert wurden.

Wenn wir der höfliche Peer sind und ein kollidierendes Angebot erhalten, müssen wir nichts Besonderes tun, da unser bestehendes Angebot automatisch im nächsten Schritt zurückgenommen wird.

Nachdem wir sichergestellt haben, dass wir das Angebot annehmen wollen, setzen wir die Remote-Beschreibung auf das eingehende Angebot, indem wir [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen. Dies teilt WebRTC mit, welche Konfiguration der andere Peer vorschlägt. Wenn wir der höfliche Peer sind, lassen wir unser Angebot fallen und akzeptieren das neue.

Wenn die neu gesetzte Remote-Beschreibung ein Angebot ist, bitten wir WebRTC, eine entsprechende lokale Konfiguration auszuwählen, indem wir die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter aufrufen. Dadurch wird `setLocalDescription()` automatisch eine entsprechende Antwort auf das empfangene Angebot generieren. Dann senden wir diese Antwort über den Signalisierungskanal zurück an den ersten Peer.

##### Beim Empfang eines ICE-Kandidaten

Wenn die empfangene Nachricht andererseits einen ICE-Kandidaten enthält, liefern wir ihn an die lokale {{Glossary("ICE", "ICE")}}-Schicht, indem wir die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Wenn ein Fehler auftritt und wir das jüngste Angebot ignoriert haben, ignorieren wir auch jeden Fehler, der beim Versuch, den Kandidaten hinzuzufügen, auftreten könnte.

## Die Aushandlung perfekt machen

Wenn Sie neugierig sind, was perfect negotiation _so perfekt_ macht, ist dieser Abschnitt für Sie. Hier schauen wir uns jede Änderung an, die an der WebRTC-API und an den besten Vorgehensweisen vorgenommen wurde, um perfekte Aushandlung möglich zu machen.

### Blendfreie setLocalDescription()

In der Vergangenheit ließ sich das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis leicht in einer Weise behandeln, die anfällig für Blendung war—das heißt, es war anfällig für Kollisionen, bei denen beide Peers gleichzeitig versuchen konnten, ein Angebot zu erstellen, was dazu führte, dass entweder die Verbindung abgebrochen wurde.

#### Der alte Weg

Betrachten Sie diesen [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Event-Handler:

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

Da die [`createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer)-Methode asynchron ist und einige Zeit zur Ausführung benötigt, gibt es eine Zeit, in der der Remote-Peer versuchen könnte, selbst ein Angebot zu senden, was dazu führt, dass wir den Zustand `stable` verlassen und in den Zustand `have-remote-offer` wechseln, was bedeutet, dass wir jetzt auf eine Antwort auf das Angebot warten. Aber sobald es das von uns gerade gesendete Angebot erhält, wartet auch der Remote-Peer. Dies lässt beide Peers in einem Zustand, in dem der Verbindungsversuch nicht abgeschlossen werden kann.

#### Perfektes Verhandeln mit der aktualisierten API

Wie im Abschnitt [Umsetzung der Perfect Negotiation](#umsetzung_der_perfect_negotiation) gezeigt, können wir dieses Problem beseitigen, indem wir eine Variable (hier `makingOffer` genannt) einführen, die wir verwenden, um anzuzeigen, dass wir dabei sind, ein Angebot zu senden, und indem wir die aktualisierte `setLocalDescription()`-Methode verwenden:

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

Wir setzen `makingOffer` unmittelbar bevor wir `setLocalDescription()` aufrufen, um zu verhindern, dass wir uns bei der Sendung dieses Angebots gegenseitig beeinflussen, und setzen es erst dann wieder auf `false`, wenn das Angebot an den Signalisierungsserver gesendet wurde (oder ein Fehler aufgetreten ist, der verhindert hat, dass das Angebot erstellt werden konnte). Auf diese Weise vermeiden wir das Risiko kollidierender Angebote.

### Automatisches Rollback in setRemoteDescription()

Ein zentrales Element der perfect negotiation ist das Konzept des höflichen Peers, der sich immer zurückrollt, wenn er ein Angebot erhält, während er selbst auf eine Antwort wartet. Früher war das Auslösen eines Rollbacks mit einer manuellen Überprüfung der Rollback-Bedingungen und der manuellen Auslösung des Rollbacks verbunden, indem die lokale Beschreibung auf eine mit dem Typ `rollback` gesetzt wurde, wie hier:

```js
await pc.setLocalDescription({ type: "rollback" });
```

Dies kehrt den lokalen Peer in den Zustand `stable` [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) zurück, aus welchem Zustand er sich zuvor befunden hat. Da ein Peer Angebote nur im `stable`-Zustand akzeptieren kann, hat der Peer damit sein Angebot zurückgezogen und ist bereit, das Angebot des Remote-Peers zu erhalten. Wie wir gleich sehen werden, gibt es mit diesem Ansatz jedoch Probleme.

#### Perfektes Verhandeln mit der alten API

Die Verwendung der vorherigen API zur Implementierung eingehender Verhandlungsnachrichten während der perfect negotiation könnte folgendermaßen aussehen:

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

Da das Rollback Änderungen aufschiebt, bis die nächste Verhandlung beginnt (die sofort nach Abschluss der aktuellen beginnen wird), muss der höfliche Peer wissen, wann er ein empfangenes Angebot verwerfen muss, falls er derzeit auf eine Antwort auf ein bereits gesendetes Angebot wartet.

Der Code prüft, ob die Nachricht ein Angebot ist, und wenn ja, ob der lokale Signalisierungszustand nicht `stable` ist. Wenn es nicht stabil ist _und_ der lokale Peer der höfliche ist, müssen wir das Rollback auslösen, damit wir das ausgehende Angebot durch das neue eingehende ersetzen können. Und diese Schritte müssen beide abgeschlossen sein, bevor wir mit der Bearbeitung des empfangenen Angebots fortfahren können.

Da es kein einzelnes "Rollback und stattdessen dieses Angebot verwenden" gibt, erfordert die Durchführung dieser Änderung am höflichen Peer zwei Schritte, die im Kontext von [`Promise.all()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) ausgeführt werden, das verwendet wird, um sicherzustellen, dass beide Anweisungen vollständig ausgeführt werden, bevor die Bearbeitung des empfangenen Angebots fortgesetzt wird. Die erste Anweisung löst das Rollback aus und die zweite setzt die Remote-Beschreibung auf das empfangene Angebot, wodurch der Prozess des Ersetzens des zuvor _gesendeten_ Angebots durch das neu _erhaltene_ abgeschlossen wird. Der höfliche Peer ist jetzt anstelle des Anrufers zum Angerufenen geworden.

Alle anderen vom unhöflichen Peer erhaltenen Beschreibungen werden wie gewohnt verarbeitet, indem sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben werden.

Schließlich verarbeiten wir ein empfangenes Angebot, indem wir `setLocalDescription()` aufrufen, um unsere lokale Beschreibung auf diejenige zu setzen, die von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) zurückgegeben wird. Dann wird das über den Signalisierungskanal an den höflichen Peer gesendet.

Wenn die eingehende Nachricht ein ICE-Kandidat anstelle einer SDP-Beschreibung ist, wird dieser an die ICE-Schicht geliefert, indem er in die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird. Wenn hier ein Fehler auftritt und wir nicht gerade ein Angebot verworfen haben, weil wir der unhöfliche Peer während einer Kollision waren, [`werfen`](/de/docs/Web/JavaScript/Reference/Statements/throw) wir den Fehler, damit der Aufrufer ihn verarbeiten kann. Andernfalls lassen wir den Fehler fallen und ignorieren ihn, da er in diesem Kontext nicht relevant ist.

#### Perfektes Verhandeln mit der aktualisierten API

Der aktualisierte Code nutzt die Tatsache, dass Sie jetzt [`setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) ohne Parameter aufrufen können, damit es einfach das Richtige für Sie tut, sowie die Tatsache, dass `setRemoteDescription()` automatisch bei Bedarf Rollbacks durchführt. Dies ermöglicht es uns, die Notwendigkeit zu vermeiden, ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zu verwenden, um das Timing korrekt zu halten, da das Rollback im Wesentlichen ein atomarer Teil des `setRemoteDescription()`-Aufrufs wird.

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

Während der Unterschied in der Codegröße gering ist und die Komplexität auch nicht wesentlich reduziert wird, ist der Code viel, viel zuverlässiger. Lassen Sie uns einen Blick in den Code werfen, um zu sehen, wie er jetzt funktioniert.

##### Beim Empfang einer Beschreibung

Im überarbeiteten Code, wenn die empfangene Nachricht eine SDP-`description` ist, überprüfen wir, ob sie eingetroffen ist, während wir versuchen, ein Angebot zu senden. Wenn die empfangene Nachricht ein `angebot` _ist_ und der lokale Peer der unhöfliche Peer ist _und_ eine Kollision auftritt, ignorieren wir das Angebot, da wir weiterhin versuchen möchten, das bereits gesendete Angebot zu verwenden. Das ist der unhöfliche Peer in Aktion.

In jedem anderen Fall versuchen wir, die eingehende Nachricht zu verarbeiten. Das beginnt damit, die Remote-Beschreibung auf die empfangene `description` zu setzen, indem wir sie in [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies funktioniert unabhängig davon, ob wir ein Angebot oder eine Antwort bearbeiten, da Rollbacks automatisch bei Bedarf durchgeführt werden.

Zu diesem Zeitpunkt, wenn die empfangene Nachricht ein `angebot` ist, verwenden wir `setLocalDescription()`, um eine entsprechende lokale Beschreibung zu erstellen und zu setzen, und senden sie dann über den Signalisierungsserver an den Remote-Peer.

##### Beim Empfang eines ICE-Kandidaten

Andererseits, wenn die empfangene Nachricht ein ICE-Kandidat ist—angezeigt durch das JSON-Objekt, das ein `candidate`-Mitglied enthält—liefern wir es an die lokale ICE-Schicht, indem wir die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Fehler werden wie zuvor ignoriert, wenn wir gerade ein Angebot verworfen haben.

### Explizite restartIce() Methode hinzugefügt

Die Techniken, die zuvor verwendet wurden, um einen [ICE Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) während des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses zu erzwingen, haben erhebliche Schwächen. Diese Schwächen haben es schwierig gemacht, einen Neustart während der Aushandlung sicher und zuverlässig auszulösen. Die Verbesserungen der perfect negotiation haben dieses Problem behoben, indem sie eine neue [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce)-Methode zu `RTCPeerConnection` hinzugefügt haben.

#### Der alte Weg

Früher, wenn Sie auf einen ICE-Fehler gestoßen sind und die Aushandlung neu starten mussten, hätten Sie vielleicht etwas wie dies getan:

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

Dies hat eine Reihe von Zuverlässigkeitsproblemen und direkten Fehlern (wie z. B. das Versagen, wenn das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis ausgelöst wird, während der Signalisierungszustand nicht `stable` ist), aber es gab keine Möglichkeit, tatsächlich einen ICE-Neustart anzufordern, außer durch das Erstellen und Senden eines Angebots mit der `iceRestart`-Option, die auf `true` gesetzt ist. Das Senden der Neustartanfrage erforderte somit das direkte Aufrufen des `negotiationneeded`-Ereignis-Handlers. Das richtige Handhaben war bestenfalls knifflig und so leicht falsch zu machen, dass Bugs häufig sind.

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

Mit dieser verbesserten Technik ruft der `failed`-Zustand des [ICE-Verbindungszustands](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) statt direkt `onnegotiationneeded` aufzurufen, mit Optionen, um den ICE-Neustart auszulösen, [`restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) auf. `restartIce()` teilt der ICE-Schicht mit, die `iceRestart`-Markierung automatisch zur nächsten gesendeten ICE-Nachricht hinzuzufügen. Problem gelöst!

### Rollback nicht mehr im pranswer-Zustand unterstützt

Die letzte der herausragenden API-Änderungen ist, dass ein Rollback nicht mehr ausgeführt werden kann, wenn man sich entweder im `have-remote-pranswer`-oder `have-local-pranswer`-Zustand befindet. Glücklicherweise gibt es bei der Verwendung der perfect negotiation keinen Grund, dies sowieso zu tun, da die Situationen, die dies verursachen, abgefangen und verhindert werden, bevor diese Rollbacks notwendig werden.

Daher wird der Versuch, ein Rollback auszulösen, während man sich in einem der beiden `pranswer`-Zustände befindet, nun einen `InvalidStateError` auslösen.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

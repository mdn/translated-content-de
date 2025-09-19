---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: f71683f74da0078d9371c4d0c1ff9d3898fc7b59
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeitaustausch von Medien zwischen zwei Geräten über Peer-to-Peer-Verbindungen. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess namens **Signalisierung** hergestellt. In diesem Tutorial wird Ihnen gezeigt, wie Sie einen Zwei-Wege-Videoanruf aufbauen können.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständige Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einer zentralen Einschränkung. Es muss ein Entdeckungsprozess und eine Medienformatverhandlung stattfinden, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in verschiedenen Netzwerken einander finden können. Dieser Prozess wird **Signalisierung** genannt und erfordert, dass beide Geräte eine Verbindung zu einem dritten, gegenseitig vereinbarten Server herstellen. Über diesen dritten Server können die beiden Geräte einander finden und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir weiter ausbauen, um einen Zwei-Wege-Videoanruf zwischen Nutzern zu unterstützen. Sie können [dieses Beispiel auf Render ausprobieren](https://webrtc-from-chat.onrender.com), um damit zu experimentieren.
Sie können sich auch [das vollständige Projekt](https://github.com/bsmth/examples/tree/main/webrtc-from-chat) auf GitHub ansehen.

## Der Signalisierungsserver

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, ist die Verwendung eines **Signalisierungsservers** erforderlich, um zu lösen, wie sie über das Internet verbunden werden können. Aufgabe eines Signalisierungsservers ist es, als Vermittler zu dienen, um zwei Peers zu finden und eine Verbindung herzustellen, wobei die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zunächst benötigen wir den Signalisierungsserver selbst. WebRTC spezifiziert keinen Transportmechanismus für die Signalisierungsinformationen. Sie können alles verwenden, was Ihnen gefällt, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, spielt dies tatsächlich keine so große Rolle: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist im Wesentlichen eine Blackbox. Was zählt, ist, dass, wenn das {{Glossary("ICE", "ICE")}}-Subsystem Ihnen anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun, und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem übermitteln kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt ist für den Signalisierungsserver völlig irrelevant.

### Vorbereitung des Chat-Servers für die Signalisierung

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben wie das Registrieren neuer Nutzer, das Festlegen von Nutzernamen und das Senden öffentlicher Chat-Nachrichten zu verarbeiten.

Um dem Server die Unterstützung der Signalisierung und ICE-Verhandlung zu ermöglichen, müssen wir den Code aktualisieren. Wir müssen das Senden von Nachrichten an einen bestimmten Nutzer erlauben, anstatt alle verbundenen Nutzer zu benachrichtigen, und sicherstellen, dass nicht erkannte Nachrichtentypen durchgereicht und übermittelt werden, ohne dass der Server wissen muss, was sie sind. Dadurch können wir Signalisierungsnachrichten über diesen selben Server senden, anstatt einen separaten Server zu benötigen.

Schauen wir uns die Änderungen an, die wir am Chat-Server vornehmen müssen, um WebRTC-Signalisierung zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat-server.js).

Zunächst ist die Funktion `sendToOneUser()` hinzuzufügen. Wie der Name schon sagt, sendet dies eine stringifizierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Nutzer, bis ein Benutzername gefunden wird, der mit dem angegebenen übereinstimmt, und sendet dann die Nachricht an diesen Nutzer. Der Parameter `msgString` ist ein stringifiziertes JSON-Objekt. Wir hätten es empfangen können, um unser ursprüngliches Nachrichtenobjekt zu erhalten, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits stringifiziert wurde, können wir sie ohne weitere Verarbeitung senden. Jedes Element in der `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach dessen [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte nicht das Senden von Nachrichten an einen spezifischen Nutzer. Die nächste Aufgabe besteht darin, den Haupt-Handler für WebSocket-Nachrichten zu aktualisieren, um dies zu ermöglichen. Dies erfordert eine Änderung am Ende der `"connection"`-Nachricht:

```js
if (sendToClients) {
  const msgString = JSON.stringify(msg);

  if (msg.target && msg.target.length !== 0) {
    sendToOneUser(msg.target, msgString);
  } else {
    for (const connection of connectionArray) {
      connection.send(msgString);
    }
  }
}
```

Dieser Code überprüft jetzt die ausstehende Nachricht, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an ihn zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem über die Verbindungsliste iteriert und die Nachricht an jeden Benutzer gesendet wird.

Da der vorhandene Code das Senden von Nachrichten beliebiger Typen ermöglicht, sind keine weiteren Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Nutzer senden, sodass sie Signalisierungsnachrichten nach Belieben hin und her senden können.

Das ist alles, was wir auf der Serverseite ändern müssen. Wenden wir uns nun dem Signalisierungsprotokoll zu, das wir implementieren werden.

### Entwurf des Signalisierungsprotokolls

Jetzt, wo wir einen Mechanismus für den Nachrichtenaustausch gebaut haben, brauchen wir ein Protokoll, das definitions, wie diese Nachrichten aussehen werden. Dies kann auf verschiedene Arten getan werden; was hier demonstriert wird, ist nur eine mögliche Art, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet stringifizierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Dies bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen, mit Inhalten, die angeben, welche Art von Nachrichten sie sind und welche zusätzlichen Informationen benötigt werden, um die Nachrichten korrekt zu verarbeiten.

#### Austausch von Sitzungsbeschreibungen

Beim Start des Signalisierungsprozesses erstellt der Benutzer, der den Anruf initiiert, ein **Angebot**. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss dem empfangenden Benutzer, den wir den **Angerufenen** nennen werden, zugestellt werden. Der Angerufene antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver wird WebSocket verwenden, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten enthalten die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an, und umgekehrt).
- `sdp`
  - : Der SDP-String, der das lokale Ende der Verbindung aus Sicht des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

An diesem Punkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie die Mediendaten selbst übertragen werden sollen. Hier kommt {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen zu verhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer verwenden kann, um zu kommunizieren. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet Kandidaten weiter, bis ihm die Vorschläge ausgehen, selbst wenn Medien bereits gestreamt werden.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald sich die beiden Peers auf einen gegenseitig kompatiblen Kandidaten einigen, wird das SDP des Kandidaten von jedem Peer verwendet, um eine Verbindung herzustellen und zu öffnen, über die dann Medien fließen. Wenn sie sich später auf einen besseren (normalerweise leistungsfähigeren) Kandidaten einigen, kann der Stream bei Bedarf das Format ändern.

Obwohl derzeit nicht unterstützt, könnte ein nach Medienfluss empfangener Kandidat theoretisch auch verwendet werden, um bei Bedarf auf eine Verbindung mit niedrigerer Bandbreite herunterzustufen.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidatennachricht enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidat-String, der die vorgeschlagene Verbindungsmethode beschreibt. Sie müssen sich normalerweise nicht mit dem Inhalt dieses Strings befassen. Ihr Code muss lediglich über den Signalisierungsserver an den entfernten Peer weitergeleitet werden.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst ist oder ein Relay-Server), zusammen mit anderen Informationen vor, die erforderlich sind, um die beiden Computer zu verbinden. Dies schließt NAT oder andere Netzwerkkomplexitäten ein.

> [!NOTE]
> Das Wichtigste ist Folgendes: Der einzige Aspekt, den Ihr Code während der ICE-Verhandlung erledigen muss, ist das Annehmen ausgehender Kandidaten der ICE-Ebene und das Senden über die Signalisierungsverbindung an den anderen Peer, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, und das Empfangen von ICE-Kandidaten-Nachrichten vom Signalisierungsserver (wenn die `"new-ice-candidate"`-Nachricht empfangen wird) und das Übermitteln an Ihre ICE-Ebene durch Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate). Und das war's.
>
> Der Inhalt der SDP ist in fast allen Fällen für Sie irrelevant. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Der Weg führt sonst ins Chaos.

Ihr Signalisierungsserver muss jetzt nur noch die Nachrichten senden, um die er gebeten wird. Ihr Arbeitsablauf kann auch Anmelde-/Authentifizierungsfunktionen erfordern, aber solche Details können variieren.

> [!NOTE]
> Der [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event und der [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Promise sind beide asynchrone Aufrufe, die getrennt behandelt werden. Stellen Sie sicher, dass Ihre Signalisierung die Reihenfolge nicht ändert! Beispielsweise muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach der Einstellung der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Signalisierungsprozessfluss

Der Signalisierungsprozess umfasst diesen Nachrichtenaustausch zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Vorgang variiert natürlich, aber allgemein gibt es einige wichtige Punkte, an denen Signalisierungsnachrichten verarbeitet werden:

- Jeder Nutzerclient, der innerhalb eines Webbrowsers läuft
- Jeder Webbrowser der Nutzer
- Der Signalisierungsserver
- Der Webserver, der den Chatdienst hostet

Stellen Sie sich vor, Naomi und Priya führen eine Diskussion mit der Chatsoftware, und Naomi entscheidet sich, einen Videoanruf zwischen den beiden zu starten. Hier ist die erwartete Abfolge von Ereignissen:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Laufe dieses Artikels ausführlicher sehen.

### Verfahren zum Austausch von ICE-Kandidaten

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, tritt sie in einen Austausch unter den verschiedenen Punkten in der Kette ein, der in etwa so aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten der anderen, sobald diese von ihrer lokalen ICE-Ebene empfangen werden; es gibt kein Wechseln der Reihenfolge oder Batching der Kandidaten. Sobald die beiden Peers sich auf einen Kandidaten einigen, den sie beide für den Medienaustausch verwenden können, beginnt der Medienfluss. Jeder Peer sendet bis dahin weiterhin Kandidaten, selbst nachdem die Medien begonnen haben zu fließen. Dies geschieht in der Hoffnung, noch bessere Optionen zu finden als die ursprünglich ausgewählte.

Wenn sich die Bedingungen ändern (zum Beispiel, wenn die Netzwerkverbindung sich verschlechtert), kann einer oder beide Peers vorschlagen, zu einer niedrigeren Bandbreiten-Medienlösung oder zu einem alternativen Codec zu wechseln. Dies löst einen neuen Austausch von Kandidaten aus, nach dem möglicherweise ein weiteres Media-Format- und/oder Codec-Änderungen stattfinden können. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) können Sie mehr über die von WebRTC erforderlichen und zusätzlichen von den Browsern unterstützten Codecs erfahren und wie Sie die besten Codecs wählen, die Sie verwenden möchten.

Optional finden Sie die {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3) für ein tieferes Verständnis des Prozesses innerhalb der ICE-Schicht. Beachten Sie, dass Kandidaten ausgetauscht werden und Medien fließen, sobald die ICE-Schicht zufrieden ist. Dies wird alles im Hintergrund behandelt. Unsere Aufgabe ist es, die Kandidaten hin und her über den Signalisierungsserver zu senden.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist die Nachrichtenverarbeitung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Natürlich sollten Sie einen Mechanismus zum Austausch von Signalisierungsinformationen wählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisierung des HTML

Das HTML unseres Clients benötigt einen Bereich, um Video anzuzeigen. Dazu sind Videoelemente erforderlich sowie eine Schaltfläche zum Auflegen des Anrufs:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" disabled>Hang Up</button>
  </div>
</div>
```

```js
document.getElementById("hangup-button").addEventListener("click", hangUpCall);
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, um uns über CSS die volle Kontrolle über das Seitenlayout zu geben. Wir überspringen die Layout-Details in diesem Leitfaden, aber [schauen Sie sich das CSS](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir damit umgegangen sind. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` wird das von dem verbundenen Benutzer empfangene Video darstellen. Wir geben das `autoplay`-Attribut an, das sicherstellt, dass das Video, sobald es eintrifft, sofort abgespielt wird. Dies entfernt die Notwendigkeit, die Wiedergabe explizit in unserem Code zu behandeln. Das `local_video`-`<video>`-Element zeigt eine Vorschau der Kamera des Benutzers; wir spezifizieren das `muted`-Attribut, da wir das lokale Audio in diesem Vorschaubereich nicht hören müssen.

Schließlich wird das `hangup-button` {{HTMLElement("button")}}, um die Verbindung zu trennen, definiert und so konfiguriert, dass es beim Start deaktiviert wird (dies ist unsere Standardvorgabe, wenn keine Verbindung besteht) und die Funktion `hangUpCall()` beim Klick ausführt. Diese Funktion schließt den Anruf und sendet eine Benachrichtigung an den Signalisierungsserver an den anderen Peer, der ihn ebenfalls schließt.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche aufteilen, um leichter beschreiben zu können, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und richtet einen Handler ein, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code bearbeitet im Allgemeinen Textchat-Nachrichten wie zuvor.

#### Senden von Nachrichten an den Signalisierungsserver

Der gesamte Code ruft `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Aufgabe zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das an diese Funktion übergebene Nachrichtenobjekt wird durch Aufruf von {{jsxref("JSON.stringify()")}} in einen JSON-String umgewandelt, dann wird die WebSocket-Verbindungsmethode [`send()`](/de/docs/Web/API/WebSocket/send) aufgerufen, um die Nachricht an den Server zu übertragen.

#### UI zum Starten eines Anrufs

Der Code, der die `"user-list"`-Nachricht handhabt, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links vom Chatbildschirm angezeigt wird. Diese Funktion empfängt ein Nachrichtenobjekt, dessen Eigenschaft `users` ein Array von Strings enthält, die die Benutzernamen jedes verbundenen Benutzers angeben.

```js
function handleUserListMsg(msg) {
  const listElem = document.querySelector(".user-list-box");

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  msg.users.forEach((username) => {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(username));
    item.addEventListener("click", invite);

    listElem.appendChild(item);
  });
}
```

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}} geholt haben, das die Liste der Benutzernamen enthält, leeren wir die Liste, indem wir jedes ihrer Kindselemente entfernen.

> [!NOTE]
> Natürlich wäre es effizienter, die Liste zu aktualisieren, indem man Benutzer einzeln hinzufügt und entfernt, anstatt die gesamte Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber dies ist gut genug für die Zwecke dieses Beispiels.

Dann iterieren wir über das Array von Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element und erstellen dann einen neuen Textknoten mit dem Benutzernamen, indem wir [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) verwenden. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Als Nächstes setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf das Listenelement, sodass ein Klick auf einen Benutzernamen unsere `invite()`-Methode aufruft, die wir im nächsten Abschnitt näher betrachten werden.

Schließlich fügen wir das neue Element der `<ul>` hinzu, die alle Benutzernamen enthält.

#### Starten eines Anrufs

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die Funktion `invite()` als Ereignishandler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

```js
const mediaConstraints = {
  audio: true, // We want an audio track
  video: true, // And we want a video track
};

function invite(evt) {
  if (myPeerConnection) {
    alert("You can't start a call because you already have one open!");
  } else {
    const clickedUsername = evt.target.textContent;

    if (clickedUsername === myUsername) {
      alert(
        "I'm afraid I can't let you talk to yourself. That would be weird.",
      );
      return;
    }

    targetUsername = clickedUsername;
    createPeerConnection();

    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then((localStream) => {
        document.getElementById("local_video").srcObject = localStream;
        localStream
          .getTracks()
          .forEach((track) => myPeerConnection.addTrack(track, localStream));
      })
      .catch(handleGetUserMediaError);
  }
}
```

Dies beginnt mit einer grundlegenden Plausibilitätsprüfung: Ist der Benutzer bereits verbunden? Wenn bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) besteht, können sie offensichtlich keinen Anruf tätigen. Dann wird der Name des angeklickten Benutzers aus der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen, und wir überprüfen, dass es nicht der gleiche Benutzer ist, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und konfigurieren wird.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir durch Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), was uns über die Eigenschaft [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Verfügung steht, Zugriff auf die Kamera und das Mikrofon des Benutzers an. Wenn dies erfolgreich ist, wird unser `then`-Handler ausgeführt. Er erhält ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt als Eingabe, das den Stream mit Audio vom Mikrofon des Benutzers und Video von deren Webcam darstellt.

> [!NOTE]
> Wir könnten den Satz erlaubter Medieneingaben auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste von Geräten zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien zu filtern und die ausgewählten Geräte-IDs in dem `deviceId`-Feld des `mediaConstraints`-Objekts verwenden, das `getUserMedia()` übergeben wird. In der Praxis ist dies jedoch selten erforderlich, da die meiste Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir hängen den eingehenden Stream an das lokale Vorschau-{{HTMLElement("video")}}-Element, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements setzen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream im lokalen Vorschaufenster zu laufen.

Dann iterieren wir über die Spuren im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jede Spur zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Versand von Daten beginnen, wenn es für Sie angemessen erscheint. Die Medien, die empfangen werden, bevor die ICE-Verhandlung abgeschlossen ist, können verwendet werden, um ICE bei der Entscheidung über den besten Verbindungsansatz zu helfen und so den Verhandlungsprozess zu unterstützen.

Beachten Sie, dass für native Apps, wie etwa eine Telefonanwendung, Sie erst mit dem Senden beginnen sollten, wenn die Verbindung von beiden Enden akzeptiert wurde, mindestens, um das versehentliche Senden von Video- und/oder Audiodaten zu vermeiden, wenn der Benutzer noch nicht darauf vorbereitet ist.

Sobald die Medien an die `RTCPeerConnection` angehängt sind, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die Verbindung ausgelöst, damit die ICE-Verhandlung gestartet werden kann.

Tritt ein Fehler auf, während versucht wird, den lokalen Medienstrom zu erhalten, ruft unser `catch`-Klausel `handleGetUserMediaError()` auf, was dem Benutzer im Bedarfsfall eine entsprechende Fehlermeldung anzeigt.

#### Behandlung von getUserMedia()-Fehlern

Wenn das von `getUserMedia()` zurückgegebene Versprechen fehlschlägt, wird unsere `handleGetUserMediaError()`-Funktion ausgeführt.

```js
function handleGetUserMediaError(e) {
  switch (e.name) {
    case "NotFoundError":
      alert(
        "Unable to open your call because no camera and/or microphone" +
          "were found.",
      );
      break;
    case "SecurityError":
    case "PermissionDeniedError":
      // Do nothing; this is the same as the user canceling the call.
      break;
    default:
      alert(`Error opening your camera and/or microphone: ${e.message}`);
      break;
  }

  closeVideoCall();
}
```

In allen Fällen außer einem wird eine Fehlermeldung angezeigt. In diesem Beispiel ignorieren wir `"SecurityError"`- und `"PermissionDeniedError"`-Ergebnisse, indem wir die Verweigerung der Erlaubnis zur Nutzung der Medienhardware als dasselbe behandeln wie das Abbrechen des Anrufs durch den Benutzer.

Egal, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und alle bereits durch den Versuch zugewiesenen Ressourcen freizugeben. Dieser Code ist darauf ausgelegt, teilweise gestartete Anrufe sicher zu behandeln.

#### Erzeugen der Peer-Verbindung

Die `createPeerConnection()`-Funktion wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu konstruieren, also ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene eine Angebotsnachricht vom Anrufer erhält.

```js
function createPeerConnection() {
  myPeerConnection = new RTCPeerConnection({
    iceServers: [
      // Information about ICE servers - Use your own!
      {
        urls: "stun:stun.stunprotocol.org",
      },
    ],
  });

  myPeerConnection.onicecandidate = handleICECandidateEvent;
  myPeerConnection.ontrack = handleTrackEvent;
  myPeerConnection.onnegotiationneeded = handleNegotiationNeededEvent;
  myPeerConnection.onremovetrack = handleRemoveTrackEvent;
  myPeerConnection.oniceconnectionstatechange =
    handleICEConnectionStateChangeEvent;
  myPeerConnection.onicegatheringstatechange =
    handleICEGatheringStateChangeEvent;
  myPeerConnection.onsignalingstatechange = handleSignalingStateChangeEvent;
}
```

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors werden wir ein Objekt angeben, das Konfigurationsparameter für die Verbindung enthält. In diesem Beispiel verwenden wir nur eines davon: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server beschreiben, die die {{Glossary("ICE", "ICE")}}-Ebene verwendet, um zu versuchen, eine Route zwischen dem Anrufer und dem Angerufenen herzustellen. Diese Server werden verwendet, um den besten Weg und die Protokolle zu bestimmen, die beim Kommunizieren zwischen den Peers verwendet werden, auch wenn sie sich hinter einer Firewall befinden oder {{Glossary("NAT", "NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie besitzen, oder für deren Verwendung Sie spezifische Genehmigung haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber diesen zu missbrauchen, ist keine gute Form.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das die URLs angibt, unter denen der angegebene Server erreichbar ist. Es kann auch `username`- und `credential`-Werte bereitstellen, um Authentifizierung zu ermöglichen, falls erforderlich.

Nachdem die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wurde, richten wir Handler für die Ereignisse ein, die für uns wichtig sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie handhaben, um irgendetwas zu tun, das gestreamte Medien mit WebRTC beinhaltet. Die restlichen sind nicht zwingend erforderlich, können aber nützlich sein, und wir werden sie näher erforschen. Es gibt noch ein paar andere verfügbare Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier ist eine Zusammenfassung von jedem der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Ebene ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn sie Sie auffordert, einen ICE-Kandidaten über Ihren Signalisierungsserver an den anderen Peer zu übermitteln. Siehe [Senden von ICE-Kandidaten](#senden_von_ice-kandidaten) für weitere Informationen und um den Code für dieses Beispiel zu sehen.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird von der lokalen WebRTC-Ebene aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies ermöglicht es Ihnen, die eingehenden Medien an ein Element zu binden, um sie anzuzeigen, zum Beispiel. Details hierzu finden Sie unter [Empfangen neuer Streams](#empfang_neuer_streams).
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird immer dann aufgerufen, wenn die WebRTC-Infrastruktur Sie dazu benötigt, den Sitzungsverhandlungsprozess erneut zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, damit er sich mit uns verbindet. Weitere Informationen hierzu finden Sie unter [Verhandlungsbeginn](#verhandlungsbeginn).
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu verarbeiten; es wird auf die `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track aus den gesendeten Medien entfernt. Siehe [Umgang mit dem Entfernen von Tracks](#umgang_mit_dem_entfernen_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Ebene gesendet, um Sie über Änderungen im Zustand der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung fehlgeschlagen oder verloren gegangen ist. Wir werden uns den Code für dieses Beispiel im Abschnitt [ICE-Verbindungszustand](#ice-verbindungszustand) unten ansehen.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Ebene sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis, wenn der Prozess des Sammlens von Kandidaten durch den ICE-Agent seiner Phasen wechselt (zum Beispiel mit dem Sammeln von Kandidaten beginnt oder die Verhandlung abschließt). Siehe [ICE-Sammlung Zustand](#ice-sammlungszustand) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Nachricht, wenn sich der Zustand des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signalisierungszustand](#ice-signalisierungszustand) für unseren Code.

#### Verhandlungsbeginn

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt, einen Medienstrom erzeugt und die Spuren zur Verbindung hinzugefügt hat, wie im Abschnitt [Starten eines Anrufs](#starten_eines_anrufs) gezeigt, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) liefern, um anzuzeigen, dass er bereit ist, die Verhandlung mit dem anderen Peer zu beginnen. Hier ist unser Code zum Handlen des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

```js
function handleNegotiationNeededEvent() {
  myPeerConnection
    .createOffer()
    .then((offer) => myPeerConnection.setLocalDescription(offer))
    .then(() => {
      sendToServer({
        name: myUsername,
        target: targetUsername,
        type: "video-offer",
        sdp: myPeerConnection.localDescription,
      });
    })
    .catch(window.reportError);
}
```

Um den Verhandlungsprozess zu beginnen, müssen wir ein SDP-Angebot an den Peer erstellen und senden, zu dem wir eine Verbindung herstellen möchten. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstrom, den wir lokal zur Verbindung hinzugefügt haben (das heißt das Video, das wir ans andere Ende des Anrufs senden möchten) und beliebige bereits durch die ICE-Schicht gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (das Versprechen erfüllt wird), übergeben wir die erstellten Angebotsinformationen in [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), was den Zustand der Verbindung und der Medienkonfiguration für das Anruferende der Verbindung konfiguriert.

> [!NOTE]
> Technisch gesprochen ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und gesetzt wurde, wenn das von `setLocalDescription()` zurückgegebene Versprechen erfüllt wird. Dann senden wir unser Angebot an den anderen Peer, indem wir eine neue `"video-offer"`-Nachricht erstellen, die die lokale Beschreibung (jetzt gleich dem Angebot) enthält, und sie dann durch unseren Signalisierungsserver an den Angerufenen senden. Das Angebot enthält die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Tritt ein Fehler auf, entweder im initialen `createOffer()` oder in jedem der nachfolgenden Erfüllungs-Handler, wird ein Fehler durch Aufruf unserer `window.reportError()`-Funktion gemeldet.

Nachdem der Erfüllungshandler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent damit, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potenzielle Konfiguration, die er entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übermitteln.

#### Sitzungsverhandlungen

Jetzt, da wir mit der Verhandlung mit dem anderen Peer begonnen und ein Angebot gesendet haben, wollen wir uns eine Weile ansehen, was auf der Seite des Angerufenen passiert. Der Angerufene erhält das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Schauen wir uns an, wie der Angerufene die `"video-offer"`-Nachricht verarbeitet.

##### Bearbeitung der Einladung

Wenn das Angebot ankommt, wird die Funktion `handleVideoOfferMsg()` des Angerufenen mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Spuren mit dem Audio und Video von Mikrophon und Webcam hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, ihrerseits eine Antwort erstellen und senden.

```js
function handleVideoOfferMsg(msg) {
  let localStream = null;

  targetUsername = msg.name;
  createPeerConnection();

  const desc = new RTCSessionDescription(msg.sdp);

  myPeerConnection
    .setRemoteDescription(desc)
    .then(() => navigator.mediaDevices.getUserMedia(mediaConstraints))
    .then((stream) => {
      localStream = stream;
      document.getElementById("local_video").srcObject = localStream;

      localStream
        .getTracks()
        .forEach((track) => myPeerConnection.addTrack(track, localStream));
    })
    .then(() => myPeerConnection.createAnswer())
    .then((answer) => myPeerConnection.setLocalDescription(answer))
    .then(() => {
      const msg = {
        name: myUsername,
        target: targetUsername,
        type: "video-answer",
        sdp: myPeerConnection.localDescription,
      };

      sendToServer(msg);
    })
    .catch(handleGetUserMediaError);
}
```

Dieser Code ist dem, was wir in der `invite()`-Funktion im Abschnitt [Starten eines Anrufs](#starten_eines_anrufs) getan haben, sehr ähnlich. Es beginnt mit der Erstellung und Konfiguration einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) unter Verwendung unserer `createPeerConnection()`-Funktion. Dann nimmt es das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzung des Anrufers beschreibt.

Diese Sitzungsbeschreibung wird dann in [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Damit wird das empfangene Angebot als die Beschreibung des entfernten (anrufenden) Endes der Verbindung festgelegt. Wenn dies erfolgreich ist, startet der Erfüllungshandler des Versprechens (im `then()`-Abschnitt) den Prozess, Zugriff auf die Kamera und das Mikrophon des Angerufenen zu erhalten, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird, die Spuren zur Verbindung hinzugefügt werden und so weiter, wie wir es zuvor in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung auf das SDP der Antwort gesetzt, indem [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird, dann wird die Antwort durch den Signalisierungsserver an den Anrufer übermittelt, um ihm mitzuteilen, was die Antwort ist.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` weitergereicht, wie in [Behandlung von getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben.

> [!NOTE]
> Wie im Fall des Anrufers beginnt der Browser, wenn der Erfüllungshandler von `setLocalDescription()` ausgeführt wird, damit [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse zu senden, die der Angerufene verarbeiten muss, eines für jeden Kandidaten, der an den entfernten Peer übermittelt werden muss.

Schließlich behandelt der Anrufer die empfangene Antwortnachricht, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und es in [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Verhandlungsprozess beinhaltet, dass jeder Peer dem anderen immer wieder Kandidaten sendet, bis ihm die potenziellen Wege ausgehen, die er zur Unterstützung der Medienanforderungen der `RTCPeerConnection` bereitstellen kann. Da ICE nichts über Ihren Signalisierungsserver weiß, behandelt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler erhält ein Ereignis, dessen `candidate`-Eigenschaft das SDP beschreibt, das den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Layer keine potenziellen Konfigurationen mehr vorschlagen möchte). Der Inhalt von `candidate` ist das, was Sie mit Ihrem Signalisierungsserver übermitteln müssen. Hier ist die Implementierung unseres Beispiels:

```js
function handleICECandidateEvent(event) {
  if (event.candidate) {
    sendToServer({
      type: "new-ice-candidate",
      target: targetUsername,
      candidate: event.candidate,
    });
  }
}
```

Dies erstellt ein Objekt, das den Kandidaten enthält, und sendet es dann mit der zuvor beschriebenen `sendToServer()`-Funktion an den anderen Peer, wie im Abschnitt [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver) beschrieben. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden soll. Dies ermöglicht es dem Signalisierungsserver, die Nachricht zu leiten.
- `candidate`
  - : Die SDP, die den Kandidaten beschreibt, den die ICE-Ebene dem anderen Peer senden möchte.

Das Format dieser Nachricht (wie alles, was Sie beim Umgang mit der Signalisierung tun) liegt ganz bei Ihnen, abhängig von Ihren Bedürfnissen; Sie können andere Informationen nach Bedarf bereitstellen.

> [!NOTE]
> Es ist wichtig, sich daran zu erinnern, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufes ankommen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufes gesendet, damit Sie die Aufgabe übernehmen können, die Daten über den von Ihnen gewählten Kanal zu übermitteln. Dies kann verwirrend sein, wenn Sie neu in WebRTC sind.

##### Empfang von ICE-Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten mit der von ihm gewählten Methode an den Zielpeer; in unserem Beispiel geschieht dies als JSON-Objekte, mit einer `type`-Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere Funktion `handleNewICECandidateMsg()` wird von unserem Haupt-WebSocket-Eingangsnachrichten-Code aufgerufen, um diese Nachrichten zu verarbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion konstruiert ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie das empfangene SDP in dessen Konstruktor übergibt, und liefert dann den Kandidaten an die ICE-Ebene, indem sie ihn in [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dies gibt den frischen ICE-Kandidaten an die lokale ICE-Ebene weiter und schließlich ist unsere Rolle im Prozess der Behandlung dieses Kandidaten vollständig.

Jeder Peer sendet dem anderen Peer einen Kandidaten für jede potenzielle Transportkonfiguration, die er für den Austausch der Medien vermutet. Irgendwann stimmen die beiden Peers zu, dass ein gegebener Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen damit, Medien zu teilen. Es ist jedoch wichtig zu beachten, dass die ICE-Verhandlung _nicht_ aufhört, wenn Medien fließen. Stattdessen können die Kandidaten weiterhin ausgetauscht werden, nachdem das Gespräch begonnen hat, entweder während versucht wird, einen besseren Verbindungsmethode zu finden, oder weil sie bereits in den Transport unterwegs waren, als die Peers ihre Verbindung erfolgreich herstellten.

Zusätzlich, wenn etwas passiert, das eine Änderung im Streaming-Szenario verursacht, werden die Verhandlungen erneut beginnen, mit dem [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt von Neuem, wie zuvor beschrieben. Dies kann in einer Vielzahl von Situationen passieren, einschließlich:

- Änderungen im Netzwerkstatus, wie zum Beispiel eine Bandbreitenänderung, der Wechsel von WLAN zu Mobilfunkverbindung oder Ähnlichem.
- Der Wechsel zwischen der Vorder- und Rückkamera an einem Handy.
- Eine Änderung der Konfiguration des Streams, wie zum Beispiel Auflösung oder Bildrate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch Aufruf ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder durch erneute Verhandlung des Stream-Formats—wird für jeden zur Verbindung hinzugefügten Track ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` gesendet. Die Nutzung der neu hinzugefügten Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiges Bedürfnis ist es, die eingehenden Medien an ein geeignetes HTML-Element anzubinden. In unserem Beispiel fügen wir den Stream des Tracks zum {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird dem `"received_video"`-{{HTMLElement("video")}}-Element zugeordnet, und das "Auflegen" {{HTMLElement("button")}}-Element wird aktiviert, sodass der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird schließlich das von dem anderen Peer gesendete Video im lokalen Browserfenster angezeigt!

##### Umgang mit dem Entfernen von Tracks

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der entfernte Peer einen Track aus der Verbindung entfernt, indem er [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aufruft. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code ruft den eingehenden Video-[`MediaStream`](/de/docs/Web/API/MediaStream) aus der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des {{HTMLElement("video")}}-Elements `"received_video"` ab, dann ruft er die Methode [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks) des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn die Länge des Arrays null ist, was bedeutet, dass keine Tracks mehr im Stream vorhanden sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies versetzt unsere App in einen Zustand zurück, in dem sie bereit ist, einen weiteren Anruf zu starten oder zu empfangen. Wie `closeVideoCall()` funktioniert, erfahren Sie im Abschnitt [Beendigung des Anrufs](#beendigung_des_anrufs).

#### Beendigung des Anrufs

Es gibt viele Gründe, warum Anrufe enden können. Ein Anruf könnte beendet sein, mit einem oder beiden Seiten, die aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat ihren Browser verlassen oder hatte einen Systemabsturz. In jedem Fall müssen auch gute Dinge zu Ende gehen.

##### Auflegen

Wenn der Benutzer auf die Schaltfläche "Auflegen" klickt, um den Anruf zu beenden, wird die Funktion `hangUpCall()` aufgerufen:

```js
function hangUpCall() {
  closeVideoCall();
  sendToServer({
    name: myUsername,
    target: targetUsername,
    type: "hang-up",
  });
}
```

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen und die Ressourcen freizugeben. Dann baut es eine `"hang-up"`-Nachricht auf und sendet diese an das andere Ende des Anrufes, um den anderen Peer zu bitten, sich ebenfalls ordnungsgemäß herunterzufahren.

##### Beendigung des Anrufs

Die Funktion `closeVideoCall()`, die unten gezeigt wird, ist verantwortlich für das Stoppen der Streams, die Bereinigung und die Entsorgung des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts:

```js
function closeVideoCall() {
  const remoteVideo = document.getElementById("received_video");
  const localVideo = document.getElementById("local_video");

  if (myPeerConnection) {
    myPeerConnection.ontrack = null;
    myPeerConnection.onremovetrack = null;
    myPeerConnection.onremovestream = null;
    myPeerConnection.onicecandidate = null;
    myPeerConnection.oniceconnectionstatechange = null;
    myPeerConnection.onsignalingstatechange = null;
    myPeerConnection.onicegatheringstatechange = null;
    myPeerConnection.onnegotiationneeded = null;

    if (remoteVideo.srcObject) {
      remoteVideo.srcObject.getTracks().forEach((track) => track.stop());
    }

    if (localVideo.srcObject) {
      localVideo.srcObject.getTracks().forEach((track) => track.stop());
    }

    myPeerConnection.close();
    myPeerConnection = null;
  }

  remoteVideo.removeAttribute("src");
  remoteVideo.removeAttribute("srcObject");
  localVideo.removeAttribute("src");
  localVideo.removeAttribute("srcObject");

  document.getElementById("hangup-button").disabled = true;
  targetUsername = null;
}
```

Nachdem wir Referenzen zu den beiden {{HTMLElement("video")}}-Elementen abgerufen haben, prüfen wir, ob eine WebRTC-Verbindung besteht; wenn ja, fahren wir fort, um den Anruf zu trennen und zu schließen:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass einzelne Ereignishandler ausgelöst werden, während die Verbindung im Schließvorgang ist, was potenziell zu Fehlern führen könnte.
2. Für beide Remote- und lokale Video-Streams iterieren wir über jeden Track und rufen die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf, um jeden zu schließen.
3. Die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) wird geschlossen, indem [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufgerufen wird.
4. Setzen Sie `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code lernt, dass kein laufender Anruf mehr besteht; dies ist nützlich, wenn der Benutzer einen Namen in der Benutzerliste anklickt.

Dann entfernen wir für beide eingehenden und ausgehenden {{HTMLElement("video")}}-Elemente deren [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften mithilfe ihrer [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden. Dies vervollständigt die Dissoziation der Streams von den Videoelementen.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` auf der "Auflegen"-Schaltfläche, was sie unanklickbar macht, während kein Anruf im Gange ist; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies ermöglicht dem Benutzer, einen weiteren Anruf zu tätigen oder einen eingehenden Anruf zu empfangen.

#### Umgang mit Zustandsänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Zuhörer einrichten können, die Ihren Code über verschiedene Zustandsänderungen informieren. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungszustand

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden von der ICE-Ebene zur [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Verbindungszustand ändert (zum Beispiel, wenn der Anruf vom anderen Ende beendet wird).

```js
function handleICEConnectionStateChangeEvent(event) {
  switch (myPeerConnection.iceConnectionState) {
    case "closed":
    case "failed":
      closeVideoCall();
      break;
  }
}
```

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn sich der ICE-Verbindungszustand in `"closed"` oder `"failed"` ändert. Damit wird unser Ende der Verbindung heruntergefahren, damit wir bereit sind, erneut einen Anruf zu starten oder zu akzeptieren.

> [!NOTE]
> Wir beobachten den `disconnected`-Signalisierungszustand hier nicht, da er vorübergehende Probleme anzeigen kann und nach einiger Zeit wieder in den `connected`-Zustand zurückkehren könnte. Ihn zu beobachten, würde den Videoanruf bei jedem vorübergehenden Netzwerkproblem schließen.

##### ICE-Signalisierungszustand

Ebenso beobachten wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungszustand auf `closed` ändert, schließen wir den Anruf ebenfalls.

```js
function handleSignalingStateChangeEvent(event) {
  switch (myPeerConnection.signalingState) {
    case "closed":
      closeVideoCall();
      break;
  }
}
```

> [!NOTE]
> Der `closed`-Signalisierungszustand wurde zugunsten des `closed`-[`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) abgesetzt. Wir beobachten ihn hier, um etwas Rückwärtskompatibilität hinzuzufügen.

##### ICE-Sammlungszustand

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden verwendet, um Sie darüber zu informieren, wann sich der Zustand des ICE-Kandidatensammlungsprozesses ändert. Unser Beispiel verwendet dies für nichts, aber es kann nützlich sein, diese Ereignisse für Debugzwecke zu beobachten und um zu erkennen, wann die Sammlung von Kandidaten abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können jetzt [dieses Beispiel ausprobieren](https://webrtc-from-chat.onrender.com/), um es in Aktion zu sehen.
Öffnen Sie die Webkonsole auf beiden Geräten und sehen Sie sich die Protokollausgaben an—obwohl Sie sie im oben gezeigten Code nicht sehen, hat der Code auf dem Server (und auf [GitHub](https://github.com/bsmth/examples/tree/main/webrtc-from-chat)) viele Konsolenausgaben, sodass Sie die Signalisierungs- und Verbindungsprozesse in Aktion sehen können.

Eine weitere offensichtliche Verbesserung wäre die Einführung eines „Klingelns“, sodass anstelle der einfachen Anfrage um Erlaubnis zur Nutzung der Kamera und des Mikrofons zuerst ein „Benutzer X ruft an. Möchten Sie antworten?“ angezeigt wird.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [API für Medienerfassung und Streams](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Medien-Fähigkeiten-API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream-Aufzeichnungs-API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfekte Verhandlungs-](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)-Muster

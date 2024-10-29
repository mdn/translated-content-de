---
title: Signalisierung und Videotelefonie
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-, Peer-to-Peer-Medienaustausch zwischen zwei Geräten. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess hergestellt, der als **Signalisierung** bezeichnet wird. Dieses Tutorial wird Sie beim Erstellen eines bidirektionalen Videoanrufs unterstützen.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten mit einem wesentlichen Punkt. Eine Form der Entdeckung und Aushandlung des Medienformats muss stattfinden, [wie an anderer Stelle beschrieben](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in verschiedenen Netzwerken einander lokalisieren können. Dieser Prozess wird **Signalisierung** genannt und beinhaltet, dass sich beide Geräte mit einem dritten, gemeinsam vereinbarten Server verbinden. Durch diesen dritten Server können sich die beiden Geräte finden und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiterentwickeln, der erstmals als Teil unserer WebSocket-Dokumentation erstellt wurde (dieser Artikel-Link ist noch nicht online verfügbar), um die Eröffnung eines bidirektionalen Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/) und auch [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können auch [das vollständige Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort alle Verbindungen zurücksetzen. Außerdem gibt es eine kurze Timeout-Periode; die Glitch-Instanz ist nur für schnelle Experimente und Tests gedacht.

## Der Signalisierungsserver

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, muss ein **Signalisierungsserver** verwendet werden, um zu klären, wie sie über das Internet verbunden werden. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu dienen, um zwei Peers zu finden und eine Verbindung herzustellen, während die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert eigentlich der Signalisierungsprozess?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC spezifiziert keinen Transportmechanismus für die Signalisierungsinformationen. Sie können alles verwenden, was Sie möchten, von [WebSocket](/de/docs/Web/API/WebSockets_API) über `fetch()` bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server die Inhalte der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, ist dies nicht so entscheidend: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist im Grunde eine Blackbox. Wichtig ist, dass wenn das {{Glossary("ICE", "ICE")}}-Subsystem Ihnen anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem weiterleiten kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt spielt für den Signalisierungsserver keine Rolle.

### Vorbereitung des Chatservers für die Signalisierung

Unser [Chatserver](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben wie die Registrierung neuer Benutzer, das Setzen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten zu bewältigen.

Um dem Server zu ermöglichen, die Signalisierung und die ICE-Aushandlung zu unterstützen, müssen wir den Code aktualisieren. Wir müssen das Senden von Nachrichten an einen bestimmten Benutzer statt an alle verbundenen Benutzer ermöglichen und sicherstellen, dass nicht erkannte Nachrichtentypen durchgeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Auf diese Weise können wir Signalisierungsnachrichten über denselben Server senden, ohne einen separaten Server zu benötigen.

Werfen wir einen Blick auf die Änderungen, die wir am Chatserver vornehmen müssen, um die WebRTC-Signalisierung zu unterstützen. Dies ist in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst kommt die Funktion `sendToOneUser()` hinzu. Wie der Name schon sagt, sendet dies eine stringifizierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion durchläuft die Liste der verbundenen Benutzer, bis sie einen Benutzer mit dem angegebenen Benutzernamen findet, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein stringifizierter JSON-Objekt. Wir hätten unsere ursprüngliche Nachrichtenobjekt übergeben können, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits stringifiziert wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach die Methode [`send()`](/de/docs/Web/API/WebSocket/send) direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-WebSocket-Nachrichten-Handler zu aktualisieren, um dies zu unterstützen. Dies beinhaltet eine Änderung am Ende des `"connection"` Nachricht-Handlers:

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

Dieser Code überprüft nun die ausstehende Nachricht, um festzustellen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an diesen zu senden. Andernfalls wird die Nachricht an alle Benutzer übertragen, indem die Verbindungslisten iteriert und die Nachricht an jeden Benutzer gesendet wird.

Da der vorhandene Code das Senden von beliebigen Nachrichtentypen ermöglicht, sind keine weiteren Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an jeden bestimmten Benutzer senden, sodass sie Signalisierungsnachrichten nach Belieben hin und her senden können.

Das ist alles, was wir auf der Serverseite der Gleichung ändern müssen. Lassen Sie uns nun das Signalisierungsprotokoll in Betracht ziehen, das wir implementieren werden.

### Entwerfen des Signalisierungsprotokolls

Jetzt, da wir einen Mechanismus zum Austauschen von Nachrichten aufgebaut haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen. Dies kann auf verschiedene Arten geschehen; was hier demonstriert wird, ist nur eine mögliche Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet stringifizierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Dies bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen, mit Inhalten, die angeben, um welche Art von Nachrichten es sich handelt, sowie alle zusätzlichen Informationen, die zum ordnungsgemäßen Verarbeiten der Nachrichten erforderlich sind.

#### Austauschen von Sitzungsbeschreibungen

Beim Starten des Signalisierungsprozesses wird ein **Angebot** vom Benutzer, der den Anruf initiiert, erstellt. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss an den empfangenden Benutzer übermittelt werden, den wir als **Callee** bezeichnen werden. Der Callee antwortet auf das Angebot mit einer **Antwort**-Nachricht, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver wird WebSocket nutzen, um Angebotsnachrichten mit dem Typ `"video-offer"` zu übertragen, und Antwortnachrichten mit dem Typ `"video-answer"`. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Callee an, und umgekehrt).
- `sdp`
  - : Die SDP (Session Description Protocol)-Zeichenfolge, die das lokale Ende der Verbindung aus der Perspektive des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

An diesem Punkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie sie die Mediendaten selbst übertragen sollen. Hier kommt {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer verwenden kann, um zu kommunizieren. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, selbst wenn Medien bereits gestreamt werden.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald sich die beiden Peers auf einen gegenseitig kompatiblen Kandidaten einigen, wird der SDP dieses Kandidaten von jedem Peer verwendet, um eine Verbindung aufzubauen und zu öffnen, durch die dann Medien fließen. Wenn sie sich später auf einen besseren (normalerweise leistungsfähigeren) Kandidaten einigen, kann sich der Stream bei Bedarf ändern.

Obwohl derzeit nicht unterstützt, könnte ein Kandidat, der empfangen wird, nachdem Medien bereits fließen, theoretisch auch verwendet werden, um auf eine Verbindung mit geringerer Bandbreite herunterzustufen, wenn erforderlich.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidaten-Nachricht enthält folgende Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung im Gange ist; der Server leitet die Nachricht nur an diesen Benutzer weiter.
- `candidate`
  - : Die SDP-Kandidatenzeichenfolge, die die vorgeschlagene Verbindungsmethode beschreibt. Normalerweise müssen Sie sich den Inhalt dieser Zeichenfolge nicht ansehen. Ihr Code muss sie lediglich durch den Signalisierungsserver an den entfernten Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst oder ein Relay-Server ist), sowie andere Informationen vor, die zur Verbindung der beiden Computer erforderlich sind. Dies umfasst NAT oder andere Netzwerkanforderungen.

> [!NOTE]
> Wichtig zu beachten ist: Der einzige Punkt, für den Ihr Code während der ICE-Verhandlung verantwortlich ist, ist das Akzeptieren ausgehender Kandidaten aus der ICE-Schicht und das Senden über die Signalisierungsverbindung an den anderen Peer, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, sowie das Empfangen von ICE-Kandidaten-Nachrichten vom Signalisierungsserver (wenn die Nachricht `"new-ice-candidate"` empfangen wird) und deren Übergabe an Ihre ICE-Schicht durch Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate). Das war's.
>
> Der Inhalt der SDP ist für Sie in den meisten Fällen unerheblich. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Auf diesem Weg liegt der Wahnsinn.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist, die Nachrichten zu senden, die von ihm verlangt werden. Ihr Workflow kann auch Anforderungen an Login/Authentifizierung stellen, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis und das Versprechen von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) sind beide asynchrone Aufrufe, die separat behandelt werden. Stellen Sie sicher, dass Ihre Signalisierung nicht die Reihenfolge ändert! Zum Beispiel muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den Ice-Kandidaten des Servers nach der Einstellung der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Signalisierungs-Transaktionsfluss

Der Signalisierungsprozess umfasst diesen Austausch von Nachrichten zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess wird natürlich variieren, aber im Allgemeinen gibt es einige kritische Punkte, an denen Signalisierungsnachrichten behandelt werden:

- Jeder Benutzer-Client, der in einem Webbrowser ausgeführt wird
- Jeder Benutzer-Webbrowser
- Der Signalisierungsserver
- Der Webserver, der den Chat-Dienst hostet

Stellen Sie sich vor, Naomi und Priya führen eine Diskussion unter Verwendung der Chat-Software, und Naomi beschließt, einen Videoanruf zwischen den beiden zu eröffnen. Hier ist die erwartete Abfolge der Ereignisse:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Verlauf dieses Artikels genauer betrachten.

### ICE-Kandidaten-Austauschprozess

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, beginnt sie mit einem Austausch unter den verschiedenen Punkten in der Kette, der so aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihrer lokalen ICE-Schicht empfängt; es gibt kein abwechselndes Senden oder Gruppieren von Kandidaten. Sobald die beiden Peers sich auf einen Kandidaten einigen, den sie beide verwenden können, um Medien auszutauschen, beginnen die Medien zu fließen. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Möglichkeiten ausgehen, selbst nachdem die Medien bereits zu fließen begonnen haben. Dies geschieht in der Hoffnung, noch bessere Optionen zu identifizieren als die anfänglich gewählte.

Wenn sich die Bedingungen ändern (zum Beispiel verschlechtert sich die Netzwerkverbindung), könnte einer oder beide Peers vorschlagen, zu einer Medienauflösung mit niedrigerer Bandbreite oder zu einem alternativen Codec zu wechseln. Das löst einen neuen Austausch von Kandidaten aus, nach dem ein weiterer Medienformat- und/oder Codec-Wechsel stattfinden kann. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden, und wie Sie die besten Codecs auswählen, die Sie verwenden möchten.

Siehe optional {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein tieferes Verständnis dafür erlangen möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Dies wird alles hinter den Kulissen erledigt. Unsere Aufgabe ist es, die Kandidaten hin und her durch den Signalisierungsserver zu senden.

## Die Client-Anwendung

Das Kernstück jedes Signalisierungsprozesses ist seine Nachrichtenverarbeitung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Sie sollten natürlich einen Mechanismus zur Übertragung von Signalisierungsinformationen auswählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisierung des HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt wird. Dazu sind Videoelemente erforderlich, sowie eine Schaltfläche, um den Anruf zu beenden:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, die uns die volle Kontrolle über das Seitenlayout geben, indem sie die Verwendung von CSS ermöglichen. Wir werden auf die Layout-Details in diesem Leitfaden verzichten, aber [schauen Sie sich das CSS](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir es umgesetzt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` zeigt das von dem verbundenen Benutzer empfangene Video an. Wir spezifizieren das `autoplay`-Attribut, wodurch sichergestellt wird, dass das Video, sobald es ankommt, sofort abgespielt wird. Dies beseitigt die Notwendigkeit, die Wiedergabe explizit in unserem Code zu behandeln. Das `local_video`-`<video>`-Element zeigt eine Vorschau der Kamera des Benutzers; wir spezifizieren das `muted`-Attribut, da wir den lokalen Ton in diesem Vorschaufenster nicht hören müssen.

Schließlich ist die `hangup-button` {{HTMLElement("button")}} definiert und so konfiguriert, dass sie beim Klicken die Funktion `hangUpCall()` ausführt. Diese Funktion schließt den Anruf und sendet eine Benachrichtigung an den Signalisierungsserver, in der der andere Peer gebeten wird, ebenfalls zu schließen.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche unterteilen, um leichter zu beschreiben, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und richtet einen Handler ein, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code behandelt im Allgemeinen Text-Chat-Nachrichten so wie zuvor.

#### Senden von Nachrichten an den Signalisierungsserver

Im gesamten Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das Nachrichtenobjekt, das an diese Funktion übergeben wird, wird mit einem Aufruf von {{jsxref("JSON.stringify()")}} in eine JSON-Zeichenfolge konvertiert, dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"user-list"` Nachricht behandelt, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links neben dem Chat-Panel angezeigt wird. Diese Funktion empfängt ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Strings ist, das die Benutzernamen jedes verbundenen Benutzers angibt.

```js
function handleUserListMsg(msg) {
  const listElem = document.querySelector(".user-list-box");

  while (listElem.firstChild) {
    listElem.removeChild(listElem.firstChild);
  }

  msg.users.forEach((username) => {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(username));
    item.addEventListener("click", invite, false);

    listElem.appendChild(item);
  });
}
```

Nachdem wir einen Verweis auf das {{HTMLElement("ul")}} erhalten haben, das die Liste der Benutzernamen enthält, in die Variable `listElem`, leeren wir die Liste, indem wir jedes ihrer Kind-Elemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem einzelne Benutzer hinzugefügt und entfernt werden, anstatt die gesamte Liste jedes Mal, wenn sie sich ändert, neu zu erstellen, aber dies ist für die Zwecke dieses Beispiels gut genug.

Dann iterieren wir über das Array von Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}} Element, dann erstellen wir einen neuen Textknoten, der den Benutzernamen enthält, mit [`createTextNode()`](/de/docs/Web/API/Document/createTextNode). Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Anschließend setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf dem Listenelement, sodass ein Klick auf einen Benutzernamen unsere `invite()`-Methode aufruft, die wir im nächsten Abschnitt ansehen werden.

Schließlich fügen wir das neue Element zum `<ul>` hinzu, das alle Benutzernamen enthält.

#### Starten eines Anrufs

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()`-Funktion als Ereignis-Handler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einem grundlegenden Prüfpunkt: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, der angeklickt wurde, aus der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen, und wir überprüfen, ob es sich nicht um denselben Benutzer handelt, der den Anruf starten möchte.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und eine grundlegende Konfiguration vornehmen wird.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir über einen Aufruf von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) Zugriff auf die Kamera und das Mikrofon des Benutzers an, die uns durch die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft zur Verfügung gestellt werden. Wenn dies erfolgreich ist, wird das zurückgegebene Versprechen erfüllt, und unser `then`-Handler wird ausgeführt. Der Handler empfängt als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der zulässigen Media-Eingaben auf ein bestimmtes Gerät oder eine bestimmte Geräteklasse beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste von Geräten zu erhalten, die resultierende Liste nach unseren gewünschten Kriterien filtern und dann die `deviceId`-Werte der gewählten Geräte im `deviceId`-Feld des `mediaConstraints`-Objekts verwenden, das an `getUserMedia()` übergeben wird. In der Praxis ist dies selten notwendig, da die meiste Arbeit bereits für Sie von `getUserMedia()` erledigt wird.

Wir heften den eingehenden Stream an das lokale Vorschau-{{HTMLElement("video")}}-Element, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements festlegen. Da das Element so konfiguriert ist, dass Videos automatisch abgespielt werden, beginnt der Stream, in unserem lokalen Vorschaubereich zu spielen.

Wir iterieren dann über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie beginnen, Daten zu senden, wenn Sie es für angemessen halten. Medien, die vor dem Abschluss der ICE-Verhandlung empfangen werden, können verwendet werden, um ICE bei der Entscheidung über den besten Konnektivitätsansatz zu unterstützen, was wiederum den Verhandlungsprozess unterstützt.

Beachten Sie, dass Sie für native Apps, wie eine Telefonanwendung, mit dem Senden erst beginnen sollten, nachdem die Verbindung an beiden Enden akzeptiert wurde, um zu vermeiden, dass Video- und/oder Audiodaten versehentlich gesendet werden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt sind, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an der Verbindung ausgelöst, sodass die ICE-Verhandlung gestartet werden kann.

Tritt beim Versuch, den lokalen Mediastream zu erhalten, ein Fehler auf, ruft unsere `catch`-Klausel `handleGetUserMediaError()` auf, die dem Benutzer bei Bedarf eine entsprechende Fehlermeldung anzeigt.

#### Behandeln von `getUserMedia()`-Fehlern

Wenn das von `getUserMedia()` zurückgegebene Versprechen in einem Fehler endet, führt unsere `handleGetUserMediaError()`-Funktion aus.

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

In allen Fällen wird eine Fehlermeldung angezeigt, außer in einem. In diesem Beispiel ignorieren wir die Ergebnisse `"SecurityError"` und `"PermissionDeniedError"`, und behandeln die Verweigerung der Erlaubnis zur Verwendung der Medienhardware genauso wie das Abbrechen des Anrufs durch den Benutzer.

Unabhängig davon, warum der Versuch, den Stream zu erhalten, fehlgeschlagen ist, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu schließen und alle bereits vom Versuch verursachten Ressourcen freizugeben. Dieser Code ist darauf ausgelegt, teilweise gestartete Anrufe sicher zu behandeln.

#### Erstellen der Peer-Verbindung

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu erstellen, ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()` aufgerufen, wenn der Angerufene eine Angebotsnachricht vom Anrufer erhält.

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

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors spezifizieren wir ein Objekt, das Konfigurationsparameter für die Verbindung bereitstellt. Wir verwenden in diesem Beispiel nur eines davon: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server für die {{Glossary("ICE", "ICE")}}-Schicht beschreiben, die verwendet werden, um bei dem Versuch, eine Route zwischen dem Anrufer und dem Angerufenen zu verbinden. Diese Server werden verwendet, um die besten Routen und Protokolle zu bestimmen, wenn Peers kommunizieren, auch wenn sie sich hinter einer Firewall oder mit {{Glossary("NAT", "NAT")}} befinden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie besitzen oder die Sie ausdrücklich verwenden dürfen. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber dessen Missbrauch ist unangebracht.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs angibt, unter denen der angegebene Server erreichbar ist. Es kann auch `username` und `credential` Werte bereitstellen, um eine Authentifizierung durchzuführen, falls erforderlich.

Nachdem wir die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt haben, richten wir Handler für die Ereignisse ein, die uns wichtig sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie behandeln, um irgendetwas mit gestreamten Medien mit WebRTC zu tun. Die restlichen sind nicht unbedingt erforderlich, können aber nützlich sein, und wir werden sie erkunden. Es gibt einige andere Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier ist eine Zusammenfassung der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn Sie einen ICE-Kandidaten an den anderen Peer über Ihren Signalisierungsserver übermitteln müssen. Siehe [Senden von ICE-Kandidaten](#senden_von_ice-kandidaten), um weitere Informationen und um den Code für dieses Beispiel zu sehen.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird von der lokalen WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies ermöglicht Ihnen, das eingehende Medium einem Element zuzuordnen, um es beispielsweise anzuzeigen. Siehe [Empfangen neuer Streams](#empfangen_neuer_streams) für Details.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wann immer die WebRTC-Infrastruktur Sie benötigt, um den Sitzungsverhandlungsprozess neu zu starten. Ihre Aufgabe besteht darin, ein Angebot an den Angerufenen zu erstellen und zu senden, um ihn zu bitten, sich mit uns zu verbinden. Siehe [Starten der Verhandlungen](#starten_der_verhandlungen), um zu sehen, wie wir dies handhaben.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu behandeln; es wird an die `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track aus den gesendeten Medien entfernt. Siehe [Behandeln der Entfernung von Tracks](#handhabung_der_entfernung_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen im Zustand der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung fehlgeschlagen oder verloren hat. Wir werden den Code für dieses Beispiel in [ICE-Verbindungszustand](#ice-verbindungszustand) unten ansehen.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis, wenn sich der Zustand des Sammelprozesses von ICE-Kandidaten ändert, vom Starten des Sammlers bis zur Beendigung der Verhandlungen. Siehe [Ice Gathering State](#ice-gathering-zustand) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Nachricht, wenn sich der Zustand des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signalisierungszustand](#ice-signalisierungszustand), um unseren Code zu sehen.

#### Starten der Verhandlungen

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt, einen Medienstream erstellt und seine Tracks wie unter [Starten eines Anrufs](#starten_eines_anrufs) zur Verbindung hinzugefügt hat, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) senden, um anzuzeigen, dass er bereit ist, die Verhandlungen mit dem anderen Peer zu beginnen. Hier ist unser Code zur Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Verhandlungsprozess zu starten, müssen wir ein SDP-Angebot an den Peer senden, mit dem wir eine Verbindung herstellen möchten. Dieses Angebot enthält eine Liste der unterstützten Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstream, den wir lokal zur Verbindung hinzugefügt haben (das heißt das Video, das wir an das andere Ende des Anrufs senden möchten), und alle von der ICE-Schicht bereits gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (und das Versprechen erfüllt wird), geben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) weiter, die den Zustands der Verbindung und der Medienkonfiguration für das Ende des Anrufers konfiguriert.

> [!NOTE]
> Technisch gesehen ist die von `createOffer()` zurückgegebene Zeichenfolge ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das von `setLocalDescription()` zurückgegebene Versprechen erfüllt wird. Zu diesem Zeitpunkt senden wir unser Angebot an den anderen Peer, indem wir eine neue `"video-offer"` Nachricht erstellen, die die lokale Beschreibung enthält (die nun identisch mit dem Angebot ist), und sie dann über unseren Signalisierungsserver an den Angerufenen senden. Das Angebot hat die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Die SDP-Zeichenfolge, die das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im anfänglichen `createOffer()` oder in einem der nachfolgenden Erfüllungshandler, wird ein Fehler durch Aufruf unserer Funktion `window.reportError()` gemeldet.

Sobald der `setLocalDescription()` Erfüllungshandler ausgeführt wurde, beginnt das ICE-Agent, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potenzielle Konfiguration, die es entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übertragen.

#### Sitzungsverhandlung

Jetzt, da wir die Verhandlungen mit dem anderen Peer begonnen und ein Angebot übermittelt haben, schauen wir, was auf der Seite des Angerufenen für eine Weile passiert. Der Angerufene empfängt das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Lassen Sie uns sehen, wie der Angerufene die `"video-offer"`-Nachricht behandelt.

##### Handhabung der Einladung

Wenn das Angebot eintrifft, wird auf der Angerufenen-Seite die Funktion `handleVideoOfferMsg()` mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Zunächst muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks, die den Ton und das Video von ihrem Mikrofon und ihrer Webcam enthalten, zu dieser hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, indem sie die eigene Antwort erstellt und sendet.

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

Dieser Code ist dem, was wir in der `invite()`-Funktion unter [Starten eines Anrufs](#starten_eines_anrufs) getan haben, sehr ähnlich. Es beginnt mit dem Erstellen und Konfigurieren einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch unsere `createPeerConnection()`-Funktion. Dann nimmt es das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies stellt das empfangene Angebot als die Beschreibung des entfernten (anrufenden) Endes der Verbindung ein. Wenn dies erfolgreich ist, startet der Erfüllungshandler des Versprechens (im `then()`-Abschnitt) den Prozess des Zugriffs auf die Kamera und das Mikrofon des Angerufenen durch [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), fügt die Tracks zur Verbindung hinzu und so weiter, wie wir bereits in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung aus der Antwort-SDP durch Aufruf von [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) festgelegt, dann wird die Antwort über den Signalisierungsserver an den Anrufer übermittelt, um ihn über die Antwort zu informieren.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` übergeben, wie unter [Behandlung von getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben.

> [!NOTE]
> Wie im Fall des Anrufers werden auch beim Angerufenen, sobald der `setLocalDescription()`-Erfüllungshandler ausgeführt wurde, vom Browser [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse gesendet, die der Angerufene behandeln muss, eines für jeden Kandidaten, der an den entfernten Peer übermittelt werden muss.

Schließlich behandelt der Anrufer die erhaltene Antwortnachricht, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und es an
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Verhandlungsprozess beinhaltet, dass jeder Peer dem anderen wiederholt Kandidaten sendet, bis ihm die potenziellen Wege ausgehen, auf denen er die Medienanforderungen der `RTCPeerConnection` unterstützen kann. Da ICE nichts über Ihren Signalisierungsserver weiß, behandelt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler empfängt ein Ereignis, dessen `candidate`-Eigenschaft die SDP beschreibt, die den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Schicht keine weiteren potenziellen Konfigurationen zum Vorschlagen übrig sind). Der Inhalt von `candidate` ist das, was Sie mit Ihrem Signalisierungsserver übertragen müssen. Hier ist die Implementierung unseres Beispiels:

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

Dies baut ein Objekt auf, das den Kandidaten enthält, und sendet es dann mit der zuvor unter [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver) beschriebenen `sendToServer()`-Funktion an den anderen Peer. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat weitergeleitet werden muss. So kann der Signalisierungsserver die Nachricht weiterleiten.
- `candidate`
  - : Die SDP, die den Kandidaten beschreibt, den die ICE-Schicht an den anderen Peer übermitteln möchte.

Das Format dieser Nachricht (wie es bei allem der Fall ist, was Sie bei der Behandlung der Signalisierung tun) ist vollständig Ihnen überlassen, je nach Ihren Bedürfnissen; Sie können je nach Bedarf zusätzliche Informationen bereitstellen.

> [!NOTE]
> Es ist wichtig zu beachten, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** ausgelöst wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs ankommen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe übernehmen, die Daten über welchen Kanal auch immer Ihrer Wahl zu übertragen. Das kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### Empfangen von ICE-Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten dem Ziel-Peer unter Verwendung einer beliebigen Methode, die er wählt; in unserem Beispiel erfolgt dies als JSON-Objekte mit einer `type`-Eigenschaft, die die Zeichenfolge `"new-ice-candidate"` enthält. Unsere Funktion `handleNewICECandidateMsg()` wird von unserem Hauptwebsocket einkommenden Nachrichten-Code aufgerufen, um diese Nachrichten zu bearbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie die empfangene SDP an ihren Konstruktor übergibt, und reicht dann den Kandidaten an die ICE-Schicht durch, indem sie ihn in [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dies übergibt den frischen ICE-Kandidaten an die lokale ICE-Schicht, und schließlich ist unsere Rolle im Prozess der Behandlung dieses Kandidaten abgeschlossen.

Jeder Peer sendet dem anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, die er für die Medienübertragung viabel hält. Irgendwann kommen beide Peers überein, dass ein gegebener Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien zu teilen. Es ist jedoch wichtig zu beachten, dass die ICE-Verhandlung **nicht** beendet wird, sobald die Medien fließen. Vielmehr können Kandidaten weiterhin ausgetauscht werden, nachdem das Gespräch begonnen hat, entweder im Versuch, eine bessere Verbindungsmethode zu finden, oder weil sie bereits in der Übertragung waren, als die Peers erfolgreich ihre Verbindung herstellten.

Zusätzlich, wenn etwas passiert, das eine Änderung des Streaming-Szenarios verursacht, beginnt die Verhandlung erneut, wobei das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie zuvor beschrieben. Dies kann in einer Vielzahl von Situationen geschehen, einschließlich:

- Änderungen im Netzwerkstatus, wie eine Bandbreitenänderung, der Übergang von WLAN zu Mobilfunkkonnektivität oder Ähnliches.
- Wechsel zwischen der vorderen und der hinteren Kamera auf einem Telefon.
- Eine Änderung der Stream-Konfiguration, wie ihrer Auflösung oder Bildrate.

##### Empfangen neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch Aufruf ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder aufgrund der Neuverhandlung des Stream-Formats—wird ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` für jeden zur Verbindung hinzugefügten Track gesendet. Die Verwendung von neu hinzugefügten Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiges Bedürfnis ist es, das eingehende Medium einem geeigneten HTML-Element zuzuordnen. In unserem Beispiel fügen wir den Track-Stream dem {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird an das `"received_video"`-{{HTMLElement("video")}}-Element angehängt, und das "Hang Up"-{{HTMLElement("button")}}-Element wird aktiviert, sodass der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird das von dem anderen Peer gesendete Video schließlich im lokalen Browserfenster angezeigt!

##### Handhabung der Entfernung von Tracks

Ihr Code empfängt ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der entfernte Peer einen Track durch Aufruf von [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) von der Verbindung entfernt. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code holt den eingehenden Video [`MediaStream`](/de/docs/Web/API/MediaStream) aus der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `"received_video"`-{{HTMLElement("video")}}-Elements, und ruft dann die [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn die Länge des Arrays null ist, bedeutet dies, dass es keine Tracks mehr im Stream gibt, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unseren App in den Zustand zurück bereit, in dem sie einen weiteren Anruf starten oder empfangen kann. Siehe [Anruf beenden](#anruf_beenden), um zu erfahren, wie `closeVideoCall()` funktioniert.

#### Anruf beenden

Es gibt viele Gründe, warum Anrufe beendet werden können. Ein Anruf könnte abgeschlossen sein, wobei eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat seinen Browser verlassen oder hatte einen Systemabsturz. In jedem Fall müssen alle guten Dinge ein Ende haben.

##### Auflegen

Wenn der Benutzer auf die "Hang Up"-Schaltfläche klickt, um den Anruf zu beenden, wird die Funktion `hangUpCall()` aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen, zurückzusetzen und Ressourcen freizugeben. Dann wird eine `"hang-up"`-Nachricht erstellt und an das andere Ende des Anrufs gesendet, um dem anderen Peer mitzuteilen, dass er sich ordentlich schließen soll.

##### Anruf beenden

Die Funktion `closeVideoCall()`, die unten gezeigt wird, ist dafür verantwortlich, die Streams zu stoppen, aufzuräumen und das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt zu entsorgen:

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

Nachdem Verweise auf die beiden {{HTMLElement("video")}}-Elemente gezogen wurden, prüfen wir, ob eine WebRTC-Verbindung besteht; wenn ja, fahren wir mit dem Trennen und Schließen des Anrufs fort:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass streunende Ereignishandler während des Prozesses des Schließens der Verbindung ausgelöst werden, was möglicherweise Fehler verursachen kann.
2. Für beide entfernten und lokalen Videostreams iterieren wir über jeden Track und rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode auf, um jeden zu schließen.
3. Schließen Sie die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch Aufruf von [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close).
4. Setzen Sie `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code erfährt, dass kein laufender Anruf besteht; dies ist nützlich, wenn der Benutzer auf einen Namen in der Benutzerliste klickt.

Dann entfernen wir sowohl für die eingehenden als auch die ausgehenden {{HTMLElement("video")}}-Elemente ihre [`src`](/de/docs/Web/API/HTMLMediaElement/src)- und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften mithilfe ar ihrer [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden. Dies schließt die Dissoziation der Streams von den Videoelementen ab.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` auf der "Hang Up"-Schaltfläche, was es unanklickbar macht, während kein Anruf stattfindet; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies ermöglicht es dem Benutzer, einen anderen Benutzer anzurufen oder einen eingehenden Anruf zu erhalten.

#### Umgang mit Zustandsänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Zuhörer setzen können, um Ihren Code über eine Vielzahl von Zustandsänderungen zu informieren. Wir verwenden drei von ihnen: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungszustand

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von der ICE-Schicht gesendet, wenn sich der Verbindungszustand ändert (zum Beispiel wenn der Anruf vom anderen Ende beendet wird).

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

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn sich der ICE-Verbindungsstatus in `"closed"` oder `"failed"` ändert. Dies hilft uns, unsere Verbindungs-Ende herunterzufahren, damit wir bereit sind, den Anruf erneut zu starten oder anzunehmen.

> [!NOTE]
> Wir beobachten hier nicht den Signalisierungszustand `disconnected`, da er auf vorübergehende Probleme hinweisen kann und möglicherweise nach einiger Zeit in einen `connected`-Zustand zurückkehrt. Wenn wir ihn überwachen würden, würde der Videoanruf bei jedem vorübergehenden Netzwerkproblem beendet werden.

##### ICE-Signalisierungszustand

Ähnlich beobachten wir die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungszustand in `closed` ändert, schließen wir den Anruf ebenfalls ab.

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
> Der `closed`-Signalisierungszustand wurde zugunsten des `closed` [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) eingestellt. Wir beobachten ihn hier, um ein wenig Rückwärtskompatibilität hinzuzufügen.

##### ICE-Gathering-Zustand

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden gesendet, um Sie wissen zu lassen, wenn sich der Zustand des ICE-Kandidatensammlungsprozesses ändert. Unser Beispiel verwendet dies für nichts, kann aber nützlich sein, um diese Ereignisse zu beobachten, für Debugging-Zwecke, sowie um zu erkennen, wann die Kandidatensammlung abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können dieses Beispiel [auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), um es in Aktion zu sehen. Öffnen Sie die Webkonsole auf beiden Geräten und schauen Sie sich die protokollierten Ausgaben an—obwohl Sie sie im oben angezeigten Code nicht sehen, hat der Code auf dem Server (und auf [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) viele Konsolenausgaben, sodass Sie die Signalisierungs- und Verbindungsprozesse bei der Arbeit sehen können.

Ein weiterer offensichtlicher Verbesserungspunkt wäre das Hinzufügen einer "Klingeln"-Funktion, damit anstelle des reinen Anfragens der Erlaubnis zur Verwendung von Kamera und Mikrofon zuerst ein "Benutzer X ruft an. Möchten Sie antworten?"-Prompt erscheint.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation) Muster

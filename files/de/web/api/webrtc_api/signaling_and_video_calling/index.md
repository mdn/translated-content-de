---
title: Signalisierung und Videoanruf
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 950f04d94b48f259c471175bdafb52933b2b038d
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-Austausch von Medien zwischen zwei Geräten direkt von Peer zu Peer. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess namens **Signalisierung** hergestellt. Diese Anleitung führt Sie durch den Aufbau eines bidirektionalen Videoanrufs.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einem zentralen Vorbehalt. Eine Art der Entdeckung und Medienformatverhandlung muss erfolgen, [wie an anderer Stelle behandelt wird](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in verschiedenen Netzwerken einander finden können. Dieser Prozess wird als **Signalisierung** bezeichnet und beinhaltet, dass beide Geräte sich mit einem dritten, gemeinsam vereinbarten Server verbinden. Durch diesen dritten Server können die beiden Geräte einander finden und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der erstmals als Teil unserer WebSocket-Dokumentation erstellt wurde (dieser Artikel-Link folgt; er ist noch nicht online) und das Öffnen eines bidirektionalen Videoanrufs zwischen Benutzern unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), und Sie können [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können auch [das vollständige Projekt auf GitHub ansehen](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat).

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort alle Verbindungen zurücksetzen. Außerdem gibt es eine kurze Timeout-Periode; die Glitch-Instanz ist nur für schnelle Experimente und Tests gedacht.

## Der Signalisierungs-Server

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, wird ein **Signalisierungs-Server** benötigt, um zu klären, wie die Verbindung über das Internet aufgebaut werden kann. Die Aufgabe eines Signalisierungs-Servers besteht darin, als Vermittler zu fungieren, um zwei Peers zu ermöglichen, sich zu finden und eine Verbindung herzustellen, während die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst benötigen wir den Signalisierungs-Server selbst. WebRTC legt kein Transportmechanismus für die Signalisierungsinformationen fest. Sie können alles verwenden, was Sie möchten, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server die Inhalte der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, ist auch dies nicht so entscheidend: Der Inhalt der Nachricht, die durch den Signalisierungs-Server geht, ist im Grunde eine Blackbox. Was zählt, ist, dass Ihnen das {{Glossary("ICE", "ICE")}} Subsystem anweist, Signalisierungsdaten an den anderen Peer zu senden. Sie tun dies, und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem übermitteln kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu senden. Den Inhalt des SDP müssen Sie überhaupt nicht kennen. Der Signalisierungs-Server ist nicht daran interessiert.

### Den Chat-Server für die Signalisierung bereit machen

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}} Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt verschiedene Nachrichtentypen, um Aufgaben wie das Registrieren neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten zu handhaben.

Um dem Server die Unterstützung von Signalisierung und ICE-Verhandlung zu ermöglichen, müssen wir den Code aktualisieren. Wir müssen es erlauben, Nachrichten an einen bestimmten Benutzer statt an alle verbundenen Benutzer zu richten, und sicherstellen, dass nicht erkannte Nachrichtentypen weitergeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Dies ermöglicht es uns, Signalisierungsnachrichten mithilfe dieses gleichen Servers zu senden, anstatt einen separaten Server zu benötigen.

Betrachten wir die Änderungen, die wir am Chat-Server vornehmen müssen, um WebRTC-Signalisierung zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst erfolgt die Ergänzung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet dies eine formatierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen passenden Benutzernamen findet, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein formatierter JSON-Objekt. Wir hätten den Empfang unserer ursprünglichen Nachricht vornehmen können, aber in diesem Beispiel ist dies effizienter. Da die Nachricht bereits formatiert wurde, können wir sie ohne weitere Verarbeitung senden. Jedes Element in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket) Objekt, deshalb können wir einfach die [`send()`](/de/docs/Web/API/WebSocket/send) Methode direkt aufrufen.

Unser ursprüngliches Chat-Demo ermöglichte es nicht, Nachrichten an einen bestimmten Benutzer zu senden. Die nächste Aufgabe ist es, den WebSocket-Hauptnachrichtenhandler zu aktualisieren, um dies zu unterstützen. Dies beinhaltet eine Änderung am Ende des `"connection"` Nachrichtenhandlers:

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

Dieser Code prüft nun die anstehende Nachricht, ob sie ein `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an diese zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem die Verbindungsliste durchlaufen und die Nachricht an jeden Benutzer gesendet wird.

Da der vorhandene Code die Bereitstellung beliebiger Nachrichtentypen erlaubt, sind keine zusätzlichen Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Benutzer senden, sodass sie Signalisierungsnachrichten nach Belieben hin- und hersenden können.

Das ist alles, was wir auf der Serverseite ändern müssen. Schauen wir uns nun das Signalisierungsprotokoll an, das wir implementieren werden.

### Das Signalisierungsprotokoll entwerfen

Nachdem wir nun einen Mechanismus zum Austausch von Nachrichten erstellt haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen sollen. Dies kann auf verschiedene Arten geschehen; das hier demonstrierte Beispiel ist nur eine Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet formatierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen, wobei der Inhalt spezifiziert, um welche Art von Nachrichten es sich handelt sowie alle zusätzlichen Informationen, die zur ordnungsgemäßen Handhabung der Nachrichten benötigt werden.

#### Austauschen von Sitzungsbeschreibungen

Beim Start des Signalisierungsprozesses wird einem **Angebot** erstellt, von dem Benutzer, der den Anruf initiiert. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}} Format und muss an den empfängenden Benutzer, den wir **Callee** nennen, übermittelt werden. Der Callee antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungs-Server wird WebSocket verwenden, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten enthalten folgende Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Callee an und umgekehrt).
- `sdp`
  - : Der SDP (Session Description Protocol) String, der das lokale Ende der Verbindung aus der Sicht des Senders (oder das entfernte Ende der Verbindung aus Sicht des Empfängers) beschreibt.

An diesem Punkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie sie die Mediendaten selbst übertragen können. Hier kommt die {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer verwenden kann, um zu kommunizieren. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, auch wenn die Medien bereits gestreamt werden.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen gegenseitig kompatiblen Kandidaten geeinigt haben, wird der SDP dieses Kandidaten von jedem Peer verwendet, um eine Verbindung zu konstruieren und zu öffnen, durch die dann die Medien zu fließen beginnen. Wenn sie sich später auf einen besseren (in der Regel leistungsfähigeren) Kandidaten einigen, kann der Stream bei Bedarf das Format ändern.

Obwohl derzeit nicht unterstützt, könnte ein Kandidat, der nach Beginn des Medienflusses empfangen wird, theoretisch auch verwendet werden, um bei Bedarf zu einer Verbindung mit niedrigerer Bandbreite herunterzustufen.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungs-Server an den entfernten Peer gesendet wird. Jede Kandidatennachricht enthält folgende Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung läuft; der Server richtet die Nachricht nur an diesen Benutzer.
- `candidate`
  - : Der SDP-Kandidat-String, der die vorgeschlagene Verbindungsmethode beschreibt. In der Regel müssen Sie den Inhalt dieses Strings nicht betrachten. Ihr Code muss ihn lediglich über den Signalisierungs-Server an den Remote-Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (z. B. ob die angegebene IP der Peer selbst oder ein Relais-Server ist), zusammen mit anderen Informationen vor, um die beiden Computer miteinander zu verbinden. Dazu gehören NAT oder andere Netzwerkkomplexitäten.

> [!NOTE]
> Wichtig zu beachten ist: Das Einzige, wofür Ihr Code während der ICE-Verhandlungen verantwortlich ist, besteht darin, ausgehende Kandidaten aus der ICE-Schicht zu akzeptieren und über die Signalisierungsverbindung an den anderen Peer zu senden, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Handler ausgeführt wird, und ICE-Kandidaten-Nachrichten vom Signalisierungs-Server zu empfangen (wenn die `"new-ice-candidate"` Nachricht empfangen wird) und sie an Ihre ICE-Schicht zu übermitteln, indem Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Das war's.
>
> Der Inhalt des SDP ist in nahezu allen Fällen irrelevant für Sie. Widerstehen Sie der Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Auf diesem Weg liegt Wahnsinn.

Alles, was Ihr Signalisierungs-Server jetzt tun muss, ist die Nachrichten zu senden, die von ihm angefordert werden. Ihre Arbeitsweise kann auch Anmelde-/Authentifizierungsfunktionen erfordern, aber solche Details werden variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) Versprechen sind beide asynchrone Aufrufe, die separat behandelt werden. Stellen Sie sicher, dass Ihre Signalisierung die Reihenfolge nicht ändert! Beispielsweise müssen [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Setzen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Transaktionsfluss bei der Signalisierung

Der Signalisierungsprozess umfasst dieses Austauschen von Nachrichten zwischen zwei Peers mit einem Vermittler, dem Signalisierungs-Server. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es ein paar wichtige Punkte, an denen Signalisierungsnachrichten verarbeitet werden:

- Jeder Client des Benutzers in einem Webbrowser
- Jeder Webbrowser des Benutzers
- Der Signalisierungs-Server
- Der Webserver, der den Chatdienst hostet

Stellen Sie sich vor, Naomi und Priya sind in ein Gespräch mit der Chat-Software verwickelt, und Naomi entscheidet sich, einen Videoanruf zwischen ihnen zu eröffnen. Hier ist die erwartete Abfolge der Ereignisse:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies ausführlicher im Laufe dieses Artikels sehen.

### ICE-Kandidaten-Austauschprozess

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, tritt sie in einen Austausch zwischen den verschiedenen Punkten in der Kette ein, der wie folgt aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihrer lokalen ICE-Schicht erhält; es gibt kein Abwechseln oder Bündeln von Kandidaten. Sobald sich die beiden Peers auf einen Kandidaten verständigen, den sie beide verwenden können, um die Medien auszutauschen, beginnt der Medienfluss. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Optionen ausgehen, auch nachdem die Medien bereits zu fließen begonnen haben. Dies geschieht in der Hoffnung, noch bessere Optionen als die anfänglich ausgewählte zu identifizieren.

Wenn sich die Bedingungen ändern (zum Beispiel verschlechtert sich die Netzwerkverbindung), könnte einer oder beide Peers vorschlagen, zu einer niedrigeren Bandbreitenauflösung oder zu einem alternativen Codec zu wechseln. Dies löst einen neuen Austausch von Kandidaten aus, nach dem ein weiterer Medienformat- und/oder Codecwechsel stattfinden kann. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs auswählen.

Optional siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3) wenn Sie ein tieferes Verständnis davon erlangen möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Es sollte beachtet werden, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Dies wird alles im Hintergrund erledigt. Unsere Rolle besteht darin, die Kandidaten, hin und her, über den Signalisierungs-Server zu senden.

## Die Client-Anwendung

Der Kern eines jeden Signalisierungsprozesses ist sein Umgang mit Nachrichten. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine häufige Lösung. Sie sollten selbstverständlich einen Mechanismus auswählen, der für den Austausch von Signalisierungsinformationen geeignet ist und zu Ihrer Anwendung passt.

Lassen Sie uns den Chat-Client aktualisieren, um Videoanrufe zu unterstützen.

### Aktualisierung des HTML

Das HTML für unseren Client benötigt einen Bereich, in dem das Video angezeigt wird. Dazu benötigen wir Videoelemente und einen Button, um den Anruf zu beenden:

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

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}} Elemente, die uns vollständige Kontrolle über das Seitenlayout ermöglichen, indem sie die Verwendung von CSS erlauben. Wir werden keine Layoutdetails in diesem Leitfaden behandeln, aber [sehen Sie sich das CSS](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir es gehandhabt haben. Beachten Sie die beiden {{HTMLElement("video")}} Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}} Element.

Das `<video>` Element mit der `id` `received_video` wird das Video des verbundenen Benutzers anzeigen. Wir geben das `autoplay` Attribut an, das sicherstellt, dass das Video, sobald es beginnt einzutreffen, sofort abgespielt wird. Dies entfernt die Notwendigkeit, die Wiedergabe explizit in unserem Code zu verarbeiten. Das `local_video` `<video>` Element zeigt eine Vorschau der Kamera des Benutzers an; das `muted` Attribut wird festgelegt, da keine lokale Audioausgabe in diesem Vorschaumodus benötigt wird.

Schließlich das `hangup-button` {{HTMLElement("button")}}, um den Anruf zu beenden, ist definiert und so konfiguriert, dass es standardmäßig deaktiviert startet (wir setzen dies als Standard, wenn kein Anruf verbunden ist) und die Funktion `hangUpCall()` beim Klick ausgeführt wird. Die Rolle dieser Funktion besteht darin, den Anruf zu beenden, und eine Meldung an den Signalisierungs-Server zu senden, um den anderen Peer zu informieren, dass er ebenfalls schließen soll.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche unterteilen, um leichter zu beschreiben, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`. Dies öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket) Server auf Port 6503 und stellt einen Handler bereit, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code behandelt im Allgemeinen Textchat-Nachrichten wie zuvor.

#### Senden von Nachrichten an den Signalisierungs-Server

Während unseres Codes rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungs-Server zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API) Verbindung, um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das übergebene Nachrichtenobjekt in diese Funktion wird in einen JSON-String umgewandelt, indem wir {{jsxref("JSON.stringify()")}} aufrufen. Danach rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send) Funktion auf, um die Nachricht an den Server zu senden.

#### UI zum Starten eines Anrufs

Der Code, der mit der `"user-list"` Nachricht umgeht, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links vom Chat-Fenster angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users` Eigenschaft ein Array von Strings ist, die die Benutzernamen aller verbundenen Benutzer spezifizieren.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}} erhalten haben, welches die Liste der Benutzernamen enthält, leeren wir die Liste, indem wir jedes ihrer Kind-Elemente entfernen.

> [!HINWEIS]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem man einzelne Benutzer hinzufügt und entfernt, anstatt die gesamte Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber dies reicht für die Zwecke dieses Beispiels.

Dann durchlaufen wir das Array von Benutzernamen mithilfe von {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}} Element, erstellen dann mittels [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) ein neues Textknoten mit dem Benutzernamen. Dieser Textknoten wird als Kind zum `<li>` Element hinzugefügt. Danach setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis auf das Listenelement, sodass beim Klicken auf einen Benutzernamen unsere `invite()` Methode aufgerufen wird, die wir im nächsten Abschnitt ansehen werden.

Schließlich fügen wir das neue Element der `<ul>` hinzu, die alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()` Funktion als Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event) Ereignis aufgerufen:

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

Das beginnt mit einem grundlegenden Plausibilitätscheck: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus der [`textContent`](/de/docs/Web/API/Node/textContent) Eigenschaft des Ereignisziels entnommen, und wir überprüfen sicher, dass es nicht derselbe Benutzer ist, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und deren Grundkonfiguration vornimmt.

Sobald die `RTCPeerConnection` erstellt ist, fordern wir Zugang zur Kamera und zum Mikrofon des Benutzers an, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, die über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) Eigenschaft verfügbar ist. Wenn dies erfolgreich ist und das zurückgegebene Versprechen erfüllt wird, wird unser `then` Handler ausgeführt. Er erhält als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream) Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!HINWEIS]
> Wir könnten den Satz der erlaubten Medieneingaben auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der Geräte zu erhalten, die resultierende Liste auf Basis unserer gewünschten Kriterien filtern und dann die ausgewählten `deviceId` Werte der Geräte in das `deviceId` Feld des `mediaConstraints` Objekts übergeben, das in `getUserMedia()` eingegeben wird. In der Praxis ist dies jedoch fast nie notwendig, da die meiste Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir fügen den eingehenden Stream dem lokalen Vorschau-{{HTMLElement("video")}}-Element hinzu, indem wir das [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigentum des Elements setzen. Da das Element konfiguriert ist, eingehendes Video automatisch abzuspielen, beginnt der Stream, in unserem lokalen Vorschaufenster abgespielt zu werden.

Wir iterieren dann über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie beginnen, Daten zu senden, wenn es Ihnen sinnvoll erscheint. Medien, die empfangen werden, bevor die ICE-Verhandlung abgeschlossen ist, können verwendet werden, um ICE zu helfen, den besten Verbindungsweg zu bestimmen, und so den Verhandlungsprozess zu unterstützen.

Beachten Sie, dass für native Apps wie eine Telefonanwendung, Sie nicht mit dem Senden beginnen sollten, bis die Verbindung an beiden Enden akzeptiert wurde, zumindest, um zu vermeiden, unbeabsichtigt Video- und/oder Audiodaten zu senden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt wurden, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis an der Verbindung ausgelöst, sodass die ICE-Verhandlung gestartet werden kann.

Wenn beim Versuch, den lokalen Medienstream zu erhalten, ein Fehler auftritt, ruft unsere catch-Klausel `handleGetUserMediaError()` auf, die eine geeignete Fehlermeldung an den Benutzer anzeigt, wie erforderlich.

#### Fehler bei getUserMedia() behandeln

Wenn das durch `getUserMedia()` zurückgegebene Versprechen mit einem Fehler endet, führt unsere `handleGetUserMediaError()` Funktion durch:

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

Eine Fehlermeldung wird in allen Fällen angezeigt, bis auf einen. In diesem Beispiel ignorieren wir `"SecurityError"` und `"PermissionDeniedError"` Ergebnisse und behandeln die Verweigerung der Erlaubnis zur Nutzung der Medienhardware genauso, als würde der Benutzer den Anruf abbrechen.

Unabhängig davon, warum der Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere Funktion `closeVideoCall()` auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und bereits durch den Anrufversuch genutzte Ressourcen freizugeben. Dieser Code ist darauf ausgelegt, Anrufe, die nur teilweise gestartet wurden, sicher zu handhaben.

#### Die Peer-Verbindung erstellen

Die `createPeerConnection()` Funktion wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekte zu erstellen, die jeweiligen Enden der WebRTC-Verbindung. Sie wird durch `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()` aufgerufen, wenn der Angerufene ein Angebot vom Anrufer erhält.

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

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) Konstruktors geben wir ein Objekt an, das Konfigurationsparameter für die Verbindung bereitstellt. In diesem Beispiel verwenden wir nur einen dieser Parameter: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server beschreiben, die von der {{Glossary("ICE", "ICE")}} Schicht verwendet werden, um zu versuchen, eine Verbindung zwischen dem Anrufer und dem Angerufenen herzustellen. Diese Server werden verwendet, um den besten Weg und die besten Protokolle für die Kommunikation zwischen den Peers zu bestimmen, auch wenn sie hinter einer Firewall oder einem {{Glossary("NAT", "NAT")}} liegen.

> [!HINWEIS]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie besitzen oder für deren Verwendung Sie eine spezielle Genehmigung haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber der Missbrauch dieser ist schlechter Stil.

Jedes Objekt in `iceServers` enthält mindestens ein `urls` Feld, das die URLs bereitstellt, unter denen der angegebene Server erreichbar ist. Es kann auch `username` und `credential` Werte bereitstellen, um eine Authentifizierung durchzuführen, wenn erforderlich.

Nachdem die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wurde, richten wir Handler für die Ereignisse ein, die für uns wichtig sind.

Die ersten drei dieser Ereignis-Handler sind erforderlich; Sie müssen sie behandeln, um alles mit gestreamten Medien mit WebRTC zu tun. Die restlichen sind nicht zwingend erforderlich, können aber nützlich sein, und wir werden sie untersuchen. Es gibt noch ein paar andere verfügbare Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier ist eine Zusammenfassung jedes der Ereignis-Handler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis-Handler auf, wenn sie Sie braucht, um einen ICE-Kandidaten an den anderen Peer über Ihren Signalisierungs-Server zu übermitteln. Siehe [Senden von ICE-Kandidaten](#ice-kandidaten_senden) für weitere Informationen und um den Code für dieses Beispiel zu sehen.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis wird durch die lokale WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies ermöglicht es Ihnen, die eingehenden Medien an ein Element anzuschließen, um sie beispielsweise anzuzeigen. Siehe [Empfangen neuer Streams](#empfang_neuer_streams) für Details.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird immer dann aufgerufen, wenn die WebRTC-Infrastruktur benötigt, dass Sie den Verhandlungsprozess der Sitzung erneut starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, damit er sich mit uns verbindet. Siehe [Verhandlung starten](#verhandlungen_starten), um zu sehen, wie wir damit umgehen.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignis zu behandeln; es wird an die `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track aus den gesendeten Medien entfernt. Siehe [Umgang mit der Entfernung von Tracks](#behandlung_der_entfernung_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen des Zustands der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung ausgefallen ist oder verloren wurde. Wir werden den Code für dieses Beispiel im Abschnitt unten [ICE-Verbindungsstatus](#ice-verbindungsstatus) betrachten.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis, wenn sich der Prozess des Kandidatensammelns des ICE-Agents von einem Zustand in einen anderen verschiebt (wie das Starten, um Kandidaten zu sammeln oder die Verhandlung abzuschließen). Siehe [ICE-Sammelstatus](#ice-sammelstatus) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) Nachricht, wenn sich der Zustand des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungs-Server ändert). Siehe [Signalisierungsstatus](#ice-signalisierungsstatus), um unseren Code zu sehen.

#### Verhandlungen starten

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt hat, einen Medienstrom eingerichtet und dessen Tracks zur Verbindung hinzugefügt hat, wie in [Einen Anruf starten](#einen_anruf_starten) gezeigt, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) übermitteln, um anzugeben, dass es bereit ist, die Verhandlung mit dem anderen Peer zu beginnen. Hier ist unser Code für die Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignisses:

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

Um den Verhandlungsprozess zu beginnen, müssen wir ein SDP-Angebot erstellen und an den Peer senden, mit dem wir eine Verbindung aufbauen wollen. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstrom, den wir lokal zur Verbindung hinzugefügt haben (d.h. das Video, das wir ans andere Ende des Anrufs senden wollen), und der bereits von der ICE-Schicht gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (Versprechen erfüllt wird), übergeben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), die die Verbindung und den Medienkonfigurationsstatus für das Ende des Anrufers der Verbindung konfiguriert.

> [!HINWEIS]
> Technisch gesehen, ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}} Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das durch `setLocalDescription()` zurückgegebene Versprechen erfüllt ist. Dies ist der Moment, in dem wir unser Angebot an den anderen Peer senden, indem wir eine neue `"video-offer"` Nachricht erstellen, die die lokale Beschreibung (jetzt gleich dem Angebot) enthält, und sie dann über unseren Signalisierungs-Server an den Angerufenen senden. Das Angebot hat folgende Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im ursprünglichen `createOffer()` oder in einem der nachfolgenden Erfüllungs-Handler, wird ein Fehler durch das Aufrufen unserer `window.reportError()` Funktion gemeldet.

Nachdem der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potentielle Konfiguration, die er entdeckt. Unser Handler für das `icecandidate` Ereignis ist dafür zuständig, die Kandidaten an den anderen Peer zu übermitteln.

#### Sitzungsverhandlungen

Nachdem wir die Verhandlung mit dem anderen Peer begonnen haben und ein Angebot übermittelt haben, sehen wir nun, was auf der Seite des Angerufenen geschieht, eine Weile. Der Angerufene erhält das Angebot und ruft die `handleVideoOfferMsg()` Funktion auf, um es zu verarbeiten. Sehen wir uns an, wie der Angerufene das `"video-offer"` behandelt.

##### Die Einladung bearbeiten

Wenn das Angebot eintrifft, wird die `handleVideoOfferMsg()` Funktion des Angerufenen mit der empfangenen `"video-offer"` Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks, die das Audio und Video von ihrem Mikrofon und ihrer Webcam enthalten, hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, eine Antwort erstellen und senden.

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

Dieser Code ist dem, was wir in der `invite()` Funktion in [Einen Anruf starten](#einen_anruf_starten) getan haben, sehr ähnlich. Sie beginnt damit, eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mithilfe unserer `createPeerConnection()` Funktion zu erstellen und zu konfigurieren. Danach nimmt sie das SDP-Angebot aus der empfangenen `"video-offer"` Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann in [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dadurch wird das empfangene Angebot als Beschreibung des entfernten (Anrufer-) Endes der Verbindung festgelegt. Wenn dies erfolgreich ist, beginnt der Erfüllungs-Handler des Versprechens (in der `then()` Klausel) den Abruf des Zugangs zur Kamera und zum Mikrofon des Angerufenen, Tracks zur Verbindung hinzuzufügen und so weiter, wie wir es zuvor in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung auf die SDP der Antwort gesetzt, indem [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird. Dann wird die Antwort über den Signalisierungs-Server an den Anrufer übermittelt, um ihnen mitzuteilen, was die Antwort ist.

Alle Fehler werden aufgefangen und an `handleGetUserMediaError()` weitergeleitet, wie in [Fehler bei getUserMedia() behandeln](#handling_getusermedia_errors) beschrieben.

> [!HINWEIS]
> Wie beim Anrufer beginnt der Browser, nachdem der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignisse zu senden, die der Angerufene für jeden Kandidaten, den er an den entfernten Peer übertragen muss, behandeln muss.

Schließlich verarbeitet der Anrufer die Antwortnachricht, die er erhalten hat, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription) Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und es in
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### ICE-Kandidaten senden

Der ICE-Verhandlungsprozess beinhaltet, dass jeder Peer fortlaufend Kandidaten an den anderen sendet, bis ihm die Möglichkeiten ausgehen, die seinen `RTCPeerConnection` Medienübertragungsanforderungen entsprechen. Da ICE nichts von Ihrem Signalisierungs-Server weiß, behandelt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Handler erhält ein Ereignis, dessen `candidate` Eigenschaft die SDP beschreibt, die den Kandidaten repräsentiert (oder `null` ist, um anzugeben, dass der ICE-Schicht die möglichen Konfigurationen ausgegangen sind). Die Inhalte von `candidate` sind das, was Sie unter Verwendung Ihres Signalisierungs-Servers senden müssen. Hier ist die Implementierung unseres Beispiels:

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

Dies erstellt ein Objekt, das den Kandidaten enthält, und sendet es unter Verwendung der zuvor in [Nachrichten an den Signalisierungs-Server senden](#senden_von_nachrichten_an_den_signalisierungs-server) beschriebenen `sendToServer()` Funktion an den anderen Peer. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden muss. Dies ermöglicht es dem Signalisierungs-Server, die Nachricht zu routen.
- `candidate`
  - : Die SDP, die den Kandidaten repräsentiert, den die ICE-Schicht an den anderen Peer übermitteln möchte.

Das Format dieser Nachricht (wie bei allem, was Sie bei der Signalisierung handhaben) liegt ganz bei Ihnen, je nach Ihren Bedürfnissen; Sie können andere Informationen nach Bedarf bereitstellen.

> [!HINWEIS]
> Es ist wichtig zu bedenken, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, sodass Sie die Aufgabe übernehmen, die Daten über den von Ihnen gewählten Kanal zu übertragen. Dies kann verwirrend sein, wenn Sie neu in WebRTC sind.

##### ICE-Kandidaten empfangen

Der Signalisierungs-Server übermittelt jeden ICE-Kandidaten mit der von ihm gewählten Methode an den Ziel-Peer; in unserem Beispiel sind dies JSON-Objekte, mit einer `type` Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere `handleNewICECandidateMsg()` Funktion wird durch unseren Haupt-WebSocket eingehenden Nachrichten-Code aufgerufen, um diese Nachrichten zu verarbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) Objekt, indem sie die empfangene SDP in ihren Konstruktor übergibt, und dann übergibt sie den Kandidaten an die ICE-Schicht, indem sie ihn in [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Damit wird der frische ICE-Kandidat an die lokale ICE-Schicht weitergegeben, und schließlich ist unsere Rolle im Prozess der Handhabung dieses Kandidaten abgeschlossen.

Jeder Peer sendet an den anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, die er als potenziell machbar für die ausgetauschten Medien hält. Irgendwann sind sich die beiden Peers einig, dass ein bestimmter Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, die Medien zu teilen. Es ist jedoch wichtig zu beachten, dass die ICE-Verhandlung nicht stoppt, sobald die Medien fließen. Stattdessen können Kandidaten eventuell weiterhin ausgetauscht werden, nachdem das Gespräch begonnen hat, entweder während des Versuchs, eine bessere Verbindungsmethode zu finden, oder weil sie bereits in Übertragung waren, als die Peers ihre Verbindung erfolgreich hergestellt haben.

Zusätzlich, wenn etwas passiert, das eine Änderung in der Streaming-Situation verursacht, beginnt zusammenhängig eine neue Verhandlung, wobei das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie zuvor beschrieben. Dies kann in einer Vielzahl von Situationen geschehen, darunter:

- Änderungen im Netzwerkstatus, wie eine Bandbreitenänderung, der Übergang von WLAN zu Mobilfunkverbindung oder ähnliches.
- Wechsel zwischen den vorderen und hinteren Kameras auf einem Telefon.
- Eine Änderung der Konfiguration des Streams, wie seiner Auflösung oder Bildrate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch Aufrufen ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) Methode oder aufgrund einer Neuverhandlung des Stream-Formats—wird für jeden Track, der zur Verbindung hinzugefügt wird, ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis an die `RTCPeerConnection` gesendet. Die Nutzung von neu hinzugefügten Medien erfordert die Implementierung eines Handlers für das `track` Ereignis. Ein häufiges Bedürfnis ist es, die eingehenden Medien mit einem geeigneten HTML-Element zu verbinden. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}} Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird dem `"received_video"` {{HTMLElement("video")}} Element hinzugefügt, und das "Hang Up" {{HTMLElement("button")}} Element wird aktiviert, damit der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird endlich das Video, das vom anderen Peer gesendet wird, im lokalen Browserfenster angezeigt!

##### Behandlung der Entfernung von Tracks

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignis, wenn der entfernte Peer einen Track aus der Verbindung entfernt, indem er [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aufruft. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code holt den einkommenden Video [`MediaStream`](/de/docs/Web/API/MediaStream) aus der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaft des `"received_video"` {{HTMLElement("video")}} Elements ab und ruft dann die [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks) Methode des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn die Länge des Arrays null ist, das bedeutet, dass im Stream keine Tracks mehr vorhanden sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unseren App sauber in einen Zustand zurück, indem sie bereit ist, einen weiteren Anruf zu tätigen oder zu empfangen. Siehe [Den Anruf beenden](#den_anruf_beenden), um zu verstehen, wie `closeVideoCall()` funktioniert.

#### Den Anruf beenden

Es gibt viele Gründe, warum Anrufe beendet werden können. Ein Anruf könnte abgeschlossen sein, wobei eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat möglicherweise seinen Browser beendet, oder hatte einen Systemabsturz. In jedem Fall müssen alle guten Dinge zu einem Ende kommen.

##### Abhängen

Wenn der Benutzer auf die Schaltfläche "Hang Up" klickt, um den Anruf zu beenden, wird die Funktion `hangUpCall()` aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen und zurückzusetzen sowie Ressourcen freizugeben. Danach erstellt es eine `"hang-up"` Nachricht und sendet sie an das andere Ende des Anrufs, um den Peer aufzufordern, sich ebenfalls sauber herunterzufahren.

##### Den Anruf beenden

Die `closeVideoCall()` Funktion, die unten gezeigt wird, ist dafür verantwortlich, die Streams zu stoppen, aufzuräumen und das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) Objekt zu entsorgen:

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

Nachdem die Referenzen zu den beiden {{HTMLElement("video")}} Elementen gezogen wurden, überprüfen wir, ob eine WebRTC-Verbindung existiert; wenn ja, fahren wir fort und trennen die Verbindung und schließen den Anruf:

1. Alle Ereignis-Handler werden entfernt. Dies verhindert, dass unerwartete Ereignis-Handler ausgelöst werden, während die Verbindung im Schließprozess ist, was potenziell Fehler verursachen könnte.
2. Für sowohl die entfernten als auch die lokalen Videostreams iterieren wir über jeden Track und rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) Methode auf, um jeden zu schließen.
3. Schließen Sie die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch das Aufrufen von [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close).
4. Setzen Sie `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code erkennt, dass es keinen laufenden Anruf gibt; dies ist nützlich, wenn der Benutzer einen Namen in der Benutzerliste anklickt.

Dann entfernen wir für sowohl die eingehenden als auch die ausgehenden {{HTMLElement("video")}} Elemente ihre [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) Eigenschaften mithilfe ihrer [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute) Methoden. Damit ist die Dissoziation der Streams von den Videoelementen abgeschlossen.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled) Eigenschaft auf `true` an der "Hang Up" Taste, was sie unanklickbar macht, während kein Anruf im Gange ist; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Damit kann der Benutzer einen anderen Benutzer anrufen oder einen eingehenden Anruf empfangen.

#### Umgang mit Zustandsänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Listener einrichten können, um Ihren Code über verschiedene Zustandsänderungen zu benachrichtigen. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungsstatus

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) Ereignisse werden von der ICE-Schicht an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Verbindungsstatus ändert (zum Beispiel, wenn der Anruf vom anderen Ende beendet wird).

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

Hier wenden wir unsere `closeVideoCall()` Funktion an, wenn sich der ICE-Verbindungsstatus auf `"closed"` oder `"failed"` ändert. Dies verwaltet das Herunterfahren unserer Seite der Verbindung, sodass wir bereit sind, erneut einen Anruf zu starten oder anzunehmen.

> [!HINWEIS]
> Wir überwachen hier nicht den `disconnected` Signalisierungsstatus, da er temporäre Probleme anzeigen kann und nach einiger Zeit möglicherweise in einen `connected` Status zurückkehrt. Wenn wir es überwachen, würde es bei jedem temporären Netzwerkproblem den Videoanruf schließen.

##### ICE-Signalisierungsstatus

Ähnlich überwachen wir die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) Ereignisse. Wenn sich der Signalisierungsstatus auf `closed` ändert, schließen wir ebenfalls den Anruf.

```js
function handleSignalingStateChangeEvent(event) {
  switch (myPeerConnection.signalingState) {
    case "closed":
      closeVideoCall();
      break;
  }
}
```

> [!HINWEIS]
> Der `closed` Signalisierungsstatus ist zugunsten des `closed` [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) veraltet. Wir beobachten ihn hier, um ein wenig Rückwärtskompatibilität hinzuzufügen.

##### ICE-Sammelstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignisse werden verwendet, um Sie darüber zu informieren, wann sich der ICE-Kandidatensammeln-Prozesszustand ändert. Unser Beispiel verwendet dies nicht für etwas, es kann jedoch nützlich sein, diese Ereignisse zum Debuggen oder zur Erkennung zu verwenden, wenn die Kandidatensammlung beendet ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können jetzt [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), um es in Aktion zu sehen. Öffnen Sie die Webkonsole auf beiden Geräten und schauen Sie sich die geloggen Ausgaben an—auch wenn Sie es nicht im Code sehen, wie oben gezeigt, hat der Code auf dem Server (und auf [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) viel Konsolenausgabe, damit Sie die Signalisierungs- und Verbindungsprozesse in Aktion sehen können.

Eine weitere offensichtliche Verbesserung wäre das Hinzufügen einer Klingelfunktion, sodass anstelle der Anfrage an den Benutzer, die Kamera- und Mikrofonberechtigung zu erteilen, zuerst eine "Benutzer X ruft an. Möchten Sie antworten?"-Abfrage erscheint.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfekte Verhandlungsmuster](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)

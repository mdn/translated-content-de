---
title: Signalisierung und Videotelefonie
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-, Peer-to-Peer-Medienaustausch zwischen zwei Geräten. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess namens **Signalisierung** etabliert. Dieses Tutorial führt Sie durch die Erstellung eines zweiseitigen Videoanrufs.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einer zentralen Einschränkung. Eine Art von Entdeckungs- und Medienformatverhandlung muss stattfinden, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in verschiedenen Netzwerken einander finden können. Dieser Prozess wird **Signalisierung** genannt und beinhaltet, dass beide Geräte sich mit einem dritten, einvernehmlich vereinbarten Server verbinden. Über diesen dritten Server können die beiden Geräte einander lokalisieren und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der ursprünglich im Rahmen unserer WebSocket-Dokumentation erstellt wurde (dieser Artikel-Link wird noch erstellt; es ist derzeit nicht online), um das Öffnen eines zweiseitigen Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/) und Sie können [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können auch [das vollständige Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort Verbindungen zurücksetzen. Zudem gibt es eine kurze Zeitüberschreitung; die Glitch-Instanz ist nur für schnelle Experimente und Tests gedacht.

## Der Signalisierungsserver

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, ist die Verwendung eines **Signalisierungsservers** erforderlich, um zu klären, wie sie über das Internet verbunden werden können. Die Aufgabe eines Signalisierungsservers besteht darin, als Zwischenstation zu dienen, um zwei Peers zu finden und eine Verbindung herzustellen und dabei die mögliche Offenlegung privater Informationen so weit wie möglich zu minimieren. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst brauchen wir den Signalisierungsserver selbst. WebRTC legt keinen Transportmechanismus für die Signalisierungsinformation fest. Sie können alles verwenden, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es {{Glossary("SDP", "SDP")}} ist, spielt das keine große Rolle: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist effektiv eine Blackbox. Was wichtig ist, ist, dass, wenn das {{Glossary("ICE", "ICE")}}-Subsystem Sie anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun und der andere Peer diese Informationen empfangen und an sein eigenes ICE-Subsystem liefern kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt ist für den Signalisierungsserver völlig nebensächlich.

### Vorbereitung des Chat-Servers für die Signalisierung

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben zu erledigen, wie z.B. das Registrieren neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten.

Um den Server zu unterstützen, dass Signalisierungs- und ICE-Verhandlungen unterstützt werden, müssen wir den Code aktualisieren. Wir müssen Nachrichten an einen bestimmten Benutzer senden können, anstatt sie an alle verbundenen Benutzer zu senden, und sicherstellen, dass unerklärliche Nachrichtentypen weitergeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Auf diese Weise können wir Signalisierungsnachrichten über denselben Server senden, ohne dass ein separater Server erforderlich ist.

Sehen wir uns die Änderungen an, die wir am Chat-Server vornehmen müssen, um die WebRTC-Signalisierung zu unterstützen. Dies ist in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst ist die Hinzufügung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet diese eine JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen findet, der mit dem angegebenen Benutzernamen übereinstimmt, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein JSON-Objekt. Wir hätten es so platzieren können, dass es unsere ursprüngliche Nachricht erhält, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits in einen String umgewandelt wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach seine [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-Handler der WebSocket-Nachricht so zu aktualisieren, dass dies unterstützt wird. Dies beinhaltet eine Änderung am Ende des `"connection"`-Nachrichtenhandlers.

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

Dieser Code schaut nun auf die anstehende Nachricht, um festzustellen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an ihn zu senden. Ansonsten wird die Nachricht durch Iterieren über die Verbindungsliste an alle Benutzer gesendet und an jeden Benutzer gesendet.

Da der vorhandene Code das Senden von beliebigen Nachrichtentypen erlaubt, sind keine weiteren Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Benutzer senden, sodass sie Signalisierungsnachrichten nach Belieben hin- und hersenden können.

Dies ist alles, was wir an der Serverseite ändern müssen. Lassen Sie uns nun das Signalisierungsprotokoll, das wir implementieren werden, betrachten.

### Entwurf des Signalisierungsprotokolls

Nachdem wir nun einen Mechanismus zum Austausch von Nachrichten aufgebaut haben, benötigen wir ein Protokoll, das festlegt, wie diese Nachrichten aussehen sollen. Dies kann auf verschiedene Weise geschehen; das hier gezeigte ist nur eine Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet zeichenbasierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen, mit Inhalten, die angeben, welche Art von Nachrichten sie sind und alle zusätzlichen Informationen enthalten, die erforderlich sind, um die Nachrichten richtig zu bearbeiten.

#### Austausch von Sitzungsbeschreibungen

Beim Starten des Signalisierungsprozesses wird ein **Angebot** von dem Benutzer erstellt, der den Anruf initiiert. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss dem empfangenden Benutzer zugestellt werden, den wir als **Angerufenen** bezeichnen. Der Angerufene antwortet dem Angebot mit einer **Antwort**-Nachricht, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver verwendet WebSocket, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben folgende Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung empfangen soll (wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an und umgekehrt).
- `sdp`
  - : Der SDP-String (Session Description Protocol), der das lokale Ende der Verbindung aus der Sicht des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen allerdings noch nicht, wie die Mediendaten selbst übertragen werden können. Hier kommt die {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer verwenden kann, um zu kommunizieren. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, auch wenn die Medienübertragung bereits begonnen hat.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen gegenseitig kompatiblen Kandidaten geeinigt haben, verwenden beide Peers den SDP dieses Kandidaten, um eine Verbindung zu konstruieren und zu öffnen, über die dann Medien fließen. Wenn sie sich später auf einen besseren (in der Regel leistungsstärkeren) Kandidaten einigen, kann der Stream nach Bedarf das Format ändern.

Obwohl derzeit nicht unterstützt, könnte ein Kandidat, der nach dem Beginn des Medienflusses empfangen wird, theoretisch auch verwendet werden, um gegebenenfalls auf eine Verbindung mit geringerer Bandbreite herunterzuschalten.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht vom Typ `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidaten-Nachricht enthält folgende Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidat-String, der die vorgeschlagene Verbindungsmethode beschreibt. Im Allgemeinen müssen Sie sich den Inhalt dieses Strings nicht anschauen. Alles, was Ihr Code tun muss, ist, ihn über den Signalisierungsserver zum entfernten Peer zu leiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst oder ein Relay-Server ist), zusammen mit anderen Informationen vor, die notwendig sind, um die beiden Computer miteinander zu verbinden. Dies schließt NAT oder andere Netzwerkintransparenz ein.

> [!NOTE]
> Das Wichtigste ist Folgendes: Das Einzige, was Ihr Code während der ICE-Verhandlung tun muss, ist, ausgehende Kandidaten von der ICE-Schicht zu akzeptieren und sie über die Signalisierungsverbindung an den anderen Peer zu senden, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, und ICE-Kandidaten-Nachrichten vom Signalisierungsserver zu empfangen (wenn die `"new-ice-candidate"`-Nachricht empfangen wird) und sie an Ihre ICE-Schicht weiterzuleiten, indem Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Das war's.
>
> Der Inhalt der SDP ist für Sie im Wesentlichen in allen Fällen irrelevant. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Das wäre der Weg ins Chaos.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist die Nachrichten zu senden, die von ihm angefordert werden. Ihr Workflow kann auch Login-/Authentifizierungsfunktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Versprechen sind beide asynchrone Aufrufe, die getrennt behandelt werden. Stellen Sie sicher, dass sich die Reihenfolge der Signalisierung nicht ändert! Zum Beispiel muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Einstellen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Signalisierungsvorgang

Der Signalisierungsprozess umfasst diesen Austausch von Nachrichten zwischen zwei Peers über einen Intermediär, den Signalisierungsserver. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es ein paar kritische Punkte, an denen Signalisierungsnachrichten bearbeitet werden:

- Der in einem Webbrowser laufende Client jedes Benutzers
- Der Webbrowser jedes Benutzers
- Der Signalisierungsserver
- Der Webserver, der den Chat-Dienst hostet

Stellen Sie sich vor, Naomi und Priya unterhalten sich mit der Chat-Software, und Naomi entscheidet sich, einen Videoanruf zwischen den beiden zu eröffnen. Hier ist die erwartete Abfolge von Ereignissen:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Verlauf dieses Artikels detaillierter erläutern.

### ICE-Kandidaten-Austauschprozess

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, beteiligt sie sich an einem Austausch zwischen den verschiedenen Punkten in der Kette, der wie folgt aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihrer lokalen ICE-Schicht erhält; es gibt kein Abwechseln oder Bündeln von Kandidaten. Sobald die beiden Peers sich auf einen Kandidaten geeinigt haben, den sie beide zur Übertragung von Medien verwenden können, beginnt der Medienfluss. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Möglichkeiten ausgehen, auch nachdem der Medienfluss bereits begonnen hat. Dies geschieht in der Hoffnung, noch bessere Optionen als die anfänglich ausgewählte zu finden.

Wenn sich die Bedingungen ändern (zum Beispiel verschlechtert sich die Netzwerkverbindung), könnte einer oder beide Peers vorschlagen, auf eine Verbindung mit geringerer Bandbreite umzuschalten oder auf einen alternativen Codec zu wechseln. Dies löst einen neuen Austausch von Kandidaten aus, wonach möglicherweise ein weiteres Medienformat und/oder ein Codec-Wechsel erfolgt. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC voraussetzt, dass Browser unterstützen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden, und wie man die besten Codecs auswählt.

Optional siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Aushandlung von Kandidatenpaaren und Abschluss der ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein tieferes Verständnis dafür erlangen möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Dies wird alles im Hintergrund erledigt. Unsere Rolle besteht darin, die Kandidaten hin und her über den Signalisierungsserver zu senden.

## Die Client-Anwendung

Das Kernstück eines Signalisierungsprozesses ist das Nachrichten-Handling. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine verbreitete Lösung. Sie sollten natürlich den Mechanismus zum Austausch von Signalisierungsinformationen wählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisierung des HTML

Das HTML für unseren Client benötigt einen Ort, um das Video zu präsentieren. Dies erfordert Video-Elemente und eine Schaltfläche zum Auflegen des Anrufs:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, wodurch wir die volle Kontrolle über das Seitendesign haben und die Verwendung von CSS ermöglicht wird. Wir lassen die Layout-Details in diesem Leitfaden aus, aber [sehen Sie sich das CSS](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir es gehandhabt haben. Beachten Sie die zwei {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` wird Video präsentieren, das von dem verbundenen Benutzer empfangen wird. Wir geben das `autoplay`-Attribut an, wodurch das Video sofort abgespielt wird, sobald es zu kommen beginnt. Dadurch entfällt die Notwendigkeit, die Wiedergabe speziell in unserem Code zu handhaben. Das `local_video`-`<video>`-Element präsentiert eine Vorschau der Kamera des Benutzers; wir geben das `muted`-Attribut an, da wir das lokale Audio in diesem Vorschaubildschirm nicht hören müssen.

Schließlich das `hangup-button`-{{HTMLElement("button")}}, um die Verbindung zu trennen, und es wird so definiert und konfiguriert, dass es standardmäßig deaktiviert ist (wir setzen dies als Standard, wenn keine Verbindung besteht) und die Funktion `hangUpCall()` bei Klick anwendet. Diese Funktion hat die Aufgabe, den Anruf zu beenden, und sendet eine Benachrichtigung an den anderen Peer, dass er sich ebenfalls schließen soll.

### Der JavaScript-Code

Wir teilen diesen Code in Funktionsbereiche auf, um leichter zu beschreiben, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: Diese öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und erstellt einen Handler, um Nachrichten im JSON-Objekt-Format zu empfangen. Dieser Code behandelt im Allgemeinen Textchat-Nachrichten wie zuvor.

#### Senden von Nachrichten an den Signalisierungsserver

In unserem Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das an diese Funktion übergebene Nachrichtenobjekt wird durch Aufruf von {{jsxref("JSON.stringify()")}} in einen JSON-String umgewandelt, dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"user-list"`-Nachricht behandelt, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Liste anzuzeigenden Benutzernamen links vom Chatfenster ein. Diese Funktion empfängt ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Strings ist, das die Benutzernamen aller verbundenen Benutzer angibt.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}-Element mit der Namensliste in der Variablen `listElem` abgerufen haben, leeren wir die Liste, indem wir jedes ihrer Kind-Elemente entfernen.

> [!NOTE]
> Es wäre offensichtlich effizienter, die Liste zu aktualisieren, indem man einzelne Benutzer hinzufügt und entfernt, statt die ganze Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber das ist für dieses Beispiel gut genug.

Dann iterieren wir über das Array der Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element, erstellen dann einen neuen Textknoten, der den Benutzernamen enthält, mittels [`createTextNode()`](/de/docs/Web/API/Document/createTextNode). Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Danach legen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf das Listenelement fest. Das Klicken auf einen Benutzernamen ruft unsere `invite()`-Methode auf, die wir im nächsten Abschnitt betrachten werden.

Schließlich fügen wir das neue Element dem `<ul>` hinzu, das die Benutzernamen enthält.

#### Starten eines Anrufs

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()`-Funktion als Ereignishandler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einem grundlegenden Sanity-Check: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, durch die [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen und wir prüfen, ob es nicht der gleiche Benutzer ist, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die Grundkonfiguration der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durchführt.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir den Zugriff auf die Kamera und das Mikrofon des Benutzers an, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, die uns über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft zur Verfügung gestellt wird. Wenn dies erfolgreich ist und das zurückgegebene Versprechen erfüllt, wird unser `then`-Handler ausgeführt. Dieser erhält als Eingang ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio von dem Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Auswahl der zulässigen Medieneingaben auf ein bestimmtes Gerät oder eine Gerätegruppe beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste von Geräten zu erhalten, die resultierende Liste zu filtern basierend auf unseren gewünschten Kriterien und den `deviceId`-Werten der ausgewählten Geräte im `deviceId`-Feld des `mediaConstraints`-Objekts zu verwenden, das an `getUserMedia()` übergeben wird. In der Praxis ist dies jedoch selten erforderlich, da die meiste Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir fügen den eingehenden Stream dem lokalen Vorschau-{{HTMLElement("video")}}-Element hinzu, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements einstellen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream in unserem lokalen Vorschaufenster zu spielen.

Wir iterieren dann über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn es Ihnen angemessen erscheint. Medien, die empfangen werden, bevor die ICE-Verhandlung abgeschlossen ist, können zur Unterstützung der ICE bei der Entscheidung über den besten Konnektivitätsansatz verwendet werden, was den Verhandlungsprozess unterstützt.

Beachten Sie, dass bei nativen Anwendungen wie z.B. einer Telefonanwendung das Senden erst beginnen sollte, wenn die Verbindung an beiden Enden akzeptiert wurde, zumindest um versehentliches Senden von Video-/Audiodaten zu vermeiden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angeschlossen sind, löst die Verbindung ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis aus, sodass die ICE-Verhandlung gestartet werden kann.

Wenn ein Fehler beim Versuch, den lokalen Mediastream abzurufen, auftritt, ruft unsere `catch`-Klausel `handleGetUserMediaError()` auf, die einen entsprechenden Fehler dem Benutzer je nach Bedarf anzeigt.

#### Umgang mit getUserMedia()-Fehlern

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

Eine Fehlermeldung wird in allen Fällen angezeigt, mit Ausnahme von einem. In diesem Beispiel ignorieren wir `"SecurityError"` und `"PermissionDeniedError"`-Ergebnisse und behandeln die Verweigerung der Erlaubnis zur Nutzung der Medienhardware genauso, als ob der Benutzer den Anruf abbricht.

Unabhängig davon, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und alle bereits durch den Versuch, den Anruf einzuleiten, zugewiesenen Ressourcen freizugeben. Dieser Code ist dafür ausgelegt, teilweise gestartete Anrufe sicher zu handhaben.

#### Erstellung der Peer-Verbindung

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre jeweiligen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte, die Enden der WebRTC-Verbindung, zu konstruieren. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene eine Angebotsnachricht vom Anrufer erhält.

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

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors geben wir ein Objekt an, das Konfigurationsparameter für die Verbindung bereitstellt. Wir verwenden in diesem Beispiel nur eines dieser Details: `iceServers`. Es handelt sich um ein Array von Objekten, die STUN- und/oder TURN-Server für die {{Glossary("ICE", "ICE")}}-Schicht beschreiben, die verwendet werden, um den besten Weg und die besten Protokolle zu bestimmen, die bei der Kommunikation zwischen den Peers verwendet werden sollen, selbst wenn sich diese hinter einer Firewall befinden oder {{Glossary("NAT", "NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN-/TURN-Server verwenden, die Ihnen gehören oder zu deren Nutzung Sie eine spezifische Erlaubnis haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber dessen Missbrauch ist schlechter Stil.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das die URLs angibt, bei denen der angegebene Server erreicht werden kann. Es kann auch `username`- und `credential`-Werte bereitstellen, um eine Authentifizierung durchzuführen, falls erforderlich.

Nachdem die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wurde, richten wir Handler für die Ereignisse ein, die für uns von Bedeutung sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie behandeln, um irgendetwas mit gestreamten Medien mit WebRTC zu tun. Der Rest ist nicht unbedingt erforderlich, kann aber nützlich sein, und wir werden sie erkunden. Es gibt noch einige andere Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier ist eine Zusammenfassung der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn Sie einen ICE-Kandidaten an den anderen Peer über Ihren Signalisierungsserver übertragen müssen. Siehe [Senden von ICE-Kandidaten](#senden_von_ickandidaten) für weitere Informationen und den Code in diesem Beispiel.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird von der lokalen WebRTC-Schicht aufgerufen, wenn ein Track in die Verbindung aufgenommen wird. Dies ermöglicht es Ihnen, das eingehende Medienmaterial an ein Element anzuschließen, um es anzuzeigen. Einzelheiten finden Sie unter [Empfangen neuer Streams](#empfang_neuer_streams).
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wenn die WebRTC-Infrastruktur es benötigt, dass Sie den Sitzungsverhandlungsprozess von neuem starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, um es zu bitten, mit uns zu verbinden. Weitere Informationen finden Sie unter [Starten von Verhandlungen](#starten_von_verhandlungen).
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, sobald ein Track aus den gesendeten Medien entfernt wird. Es behandelt das Ereignis [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event), das an die `RTCPeerConnection` gesendet wird, wenn der ferngesteuerte Peer einen Track entfernt. Siehe [Umgang mit der Entfernung von Tracks](#umgang_mit_der_entfernung_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen im Verbindungszustand der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung fehlgeschlagen oder verloren gegangen ist. Den Code für dieses Beispiel werden wir in [ICE-Verbindungsstatus](#ice-verbindungsstatus) sehen.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis, wenn sich der Zustand des Suchbegriffs des ICE-Agenten ändert (z.B. beginnt, Kandidaten zu sammeln oder die Verhandlung abzuschließen). Siehe [ICE-Suchstatus](#ice-suchstatus).
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Nachricht, wenn sich der Signalisierungsprozess ändert (oder die Verbindung zum Signalisierungsserver ändert). Siehe [Signalisierungsstatus](#ice-signalisierungsstatus), um unseren Code zu sehen.

#### Starten von Verhandlungen

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt hat, einen Medienstrom erstellt und seine Tracks zur Verbindung hinzugefügt hat, wie unter [Starten eines Anrufs](#starten_eines_anrufs) gezeigt, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) liefern, um anzuzeigen, dass es bereit ist, eine Verhandlung mit dem anderen Peer zu beginnen. Hier ist unser Code zur Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Verhandlungsprozess zu starten, müssen wir ein SDP-Angebot an den Peer senden, mit dem wir verbinden möchten. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstrom, den wir lokal zur Verbindung hinzugefügt haben (also das Video, das wir an das andere Ende des Anrufs senden möchten), und alle vom ICE-Schicht bereits gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (das Versprechen erfüllt), übergeben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), das den Zustand der Verbindung und der Medienkonfiguration für das Ende des Anrufers der Verbindung konfiguriert.

> [!NOTE]
> Technisch gesehen ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das Versprechen, das von `setLocalDescription()` zurückgegeben wird, erfüllt ist. Dann senden wir unser Angebot an den anderen Peer, indem wir eine neue `"video-offer"`-Nachricht mit der lokalen Beschreibung (jetzt die gleiche wie das Angebot) erstellen und sie über unseren Signalisierungsserver an den Angerufenen senden. Das Angebot hat folgende Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Bei einem Fehler, entweder im initialen `createOffer()` oder in einem der darauf folgenden Erfüllungs-Handler, wird ein Fehler durch den Aufruf unserer `window.reportError()`-Funktion gemeldet.

Sobald der Erfüllung-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede mögliche Konfiguration, die es entdeckt. Unser Handler für das `icecandidate`-Ereignis ist verantwortlich für die Übermittlung der Kandidaten an den anderen Peer.

#### Sitzungsverhandlung

Nachdem wir nun die Verhandlung mit dem anderen Peer gestartet und ein Angebot übermittelt haben, wollen wir eine Weile sehen, was auf der Seite des Angerufenen der Verbindung passiert. Der Angerufene erhält das Angebot und ruft die `handleVideoOfferMsg()`-Funktion auf, um es zu verarbeiten. Sehen wir, wie der Angerufene die `"video-offer"`-Nachricht behandelt.

##### Umgang mit der Einladung

Wenn das Angebot eintrifft, wird die `handleVideoOfferMsg()`-Funktion des Angerufenen mit der erhaltenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks, die das Audio und Video von ihrem Mikrofon und ihrer Webcam enthalten, zu dieser hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, eine Antwort erstellen und senden.

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

Dieser Code ist sehr ähnlich dem, was wir in der `invite()`-Funktion im Abschnitt [Starten eines Anrufs](#starten_eines_anrufs) getan haben. Er beginnt mit der Erstellung und Konfiguration einer [`RTCPeerConnection`](/ru/docs/Web/API/RTCPeerConnection), indem unsere `createPeerConnection()`-Funktion verwendet wird. Dann nimmt sie das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Damit wird das empfangene Angebot als Beschreibung des Remote-Endes (des Anrufers) der Verbindung festgelegt. Wenn dies erfolgreich ist, beginnt der Promise-Erfüllungs-Handler (in der `then()`-Klausel) den Prozess, Zugriff auf die Kamera und das Mikrofon des Angerufenen zu erhalten, indem er [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufruft, die Tracks zur Verbindung hinzufügt und so weiter, wie wir zuvor in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung durch Aufruf von [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf die SDP der Antwort festgelegt, dann wird die Antwort über den Signalisierungsserver an den Anrufer gesendet, um ihnen mitzuteilen, was die Antwort ist.

Alle Fehler werden erkannt und an `handleGetUserMediaError()` weitergeleitet, das im Abschnitt [Umgang mit getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben wird.

> [!NOTE]
> Wie bei dem Anrufer beginnt der Browser nach dem Ausführen des `setLocalDescription()`-Erfüllungs-Handlers [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse auszulösen, die der Angerufene behandeln muss, eines für jeden Kandidaten, der an den Remote-Peer übertragen werden muss.

Schließlich behandelt der Anrufer die empfangene Antwortnachricht, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und übergibt diese an
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICKandidaten

Der ICE-Verhandlungsprozess beinhaltet, dass jede Seite wiederholt Kandidaten an die andere sendet, bis die möglichen verschiedenen Arten von Konfigurationen aufgebraucht sind, die sie zur Unterstützung der Medienübertragungsbedürfnisse der `RTCPeerConnection` glaubt bieten zu können. Da ICE nicht von Ihrem Signalisierungsserver weiß, behandelt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) handler erhält ein Ereignis, dessen `candidate`-Eigenschaft die SDP beschreibt, die den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Verhandlung keine möglichen Konfigurationen mehr vorzuschlagen hat). Der Inhalt von `candidate` ist das, was Sie über Ihren Signalisierungsserver übertragen müssen. Hier ist die Implementierung unseres Beispiels:

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

Diese Konstrukte bilden ein Objekt, das den Kandidaten enthält, und senden es an den anderen Peer unter Verwendung der `sendToServer()`-Funktion, die im Abschnitt [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver) beschrieben wird. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, zu dem der ICE-Kandidat geliefert werden muss. Dies ermöglicht es dem Signalisierungsserver, die Nachricht weiterzuleiten.
- `candidate`
  - : Der SDP, der den Kandidaten beschreibt, den die ICE-Schicht an den anderen Peer senden möchte.

Das Format dieser Nachricht (wie alles, was Sie beim Umgang mit der Signalisierung tun) liegt vollständig in Ihrer Hand, je nach Ihren Bedürfnissen; Sie können andere Informationen nach Bedarf liefern.

> [!NOTE]
> Wichtig ist es, sich bewusst zu machen, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie von Ihrem eigenen Anrufende gesendet, so dass Sie die Aufgabe der Übermittlung der Daten über den von Ihnen gewählten Kanal übernehmen können. Dies kann verwirrend sein, wenn Sie neu mit WebRTC sind.

##### Empfang von ICE Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten an den Zielpeers auf dem gewählten Weg; in unserem Beispiel sind dies JSON-Objekte, mit einer `type`-Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere `handleNewICECandidateMsg()`-Funktion wird von unserem Haupt-[WebSocket](/de/docs/Web/API/WebSockets_API)-eingehenden Nachrichten-Code aufgerufen, um diese Nachrichten zu bearbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie den empfangenen SDP an seinen Konstruktor übergibt, und übergibt dann den Kandidaten an die ICE-Ebene, indem sie ihn an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dies liefert den frischen ICE-Kandidaten an die lokale ICE-Schicht und schließlich ist unsere Rolle im Prozess der Behandlung dieses Kandidaten abgeschlossen.

Jeder Peer sendet an den anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, von der sie glauben, dass sie für die ausgetauschten Medien möglicherweise akzeptabel sein könnte. Irgendwann stimmen die beiden Peers zu, dass ein gegebener Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien zu teilen. Wichtig zu beachten ist jedoch, dass die ICE-Verhandlung _nicht_ aufhört, sobald Medien fließen. Stattdessen können Kandidaten auch nach Beginn der Unterhaltung weiterhin ausgetauscht werden, entweder während des Versuchs, eine bessere Verbindungsmethode zu finden, oder weil sie bereits im Transport waren, als die Peers erfolgreich ihre Verbindung hergestellt haben.

Darüber hinaus, wenn etwas passiert, das eine Änderung des Streaming-Szenarios verursacht, wird die Verhandlung erneut beginnen, mit dem [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie bereits beschrieben. Dies kann in einer Vielzahl von Situationen passieren, einschließlich:

- Änderungen im Netzwerkstatus, wie z.B. eine Bandbreitenänderung, Übergang von WLAN zu mobiler Konnektivität oder Ähnliches.
- Wechsel zwischen Front- und Rückkamera auf einem Telefon.
- Eine Änderung der Konfiguration des Streams, wie z.B. seine Auflösung oder Bildwiederholrate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch Aufruf ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder aufgrund einer Neuverhandlung des Stream-Formats—wird ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` für jeden Track gesendet, der zur Verbindung hinzugefügt wird. Die Verwendung neu hinzugefügter Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiger Bedarf ist es, die eingehenden Medien an ein geeignetes HTML-Element anzuschließen. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird dem `"received_video"`-{{HTMLElement("video")}}-Element hinzugefügt, und das "Auflegen"-{{HTMLElement("button")}}-Element so konfiguriert, dass der Benutzer den Anruf auflegen kann.

Nachdem dieser Code abgeschlossen ist, wird das Video, das vom anderen Peer gesendet wird, im lokalen Browser-Fenster angezeigt!

##### Umgang mit der Entfernung von Tracks

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der fernempfangende Peer einen Track durch Aufruf von [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aus der Verbindung entfernt. Unser Handler für `"removetrack"` sieht folgendermaßen aus:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code holt den eingehenden Video-`[MediaStream]`(/de/docs/Web/API/MediaStream) aus der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `"received_video"`-{{HTMLElement("video")}}-Elements ab, und ruft dann die Methode [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks) des Streams auf, um ein Array der Tracks im Stream zu erhalten.

Wenn die Länge des Arrays null ist, was bedeutet, dass keine Tracks mehr im Stream sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unser App sauber wieder auf den Zustand zurück, in der sie bereit ist, einen weiteren Anruf zu tätigen oder zu empfangen. Weitere Informationen darüber, wie `closeVideoCall()` funktioniert, finden Sie unter [Beenden der Verbindung](#beenden_der_verbindung).

#### Beenden der Verbindung

Es gibt viele Gründe, warum Verbindungen enden können. Ein Anruf könnte beendet worden sein und eine oder beide Seiten haben das Gespräch aufgelegt. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat ihren Browser verlassen oder es gab einen Systemabsturz. In jedem Fall muss alles Gute zu einem Ende kommen.

##### Auflegen

Wenn der Benutzer auf die Schaltfläche "Auflegen" klickt, um den Anruf zu beenden, wird die `hangUpCall()`-Funktion aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu trennen und die Ressourcen freizugeben. Dann erstellt sie eine `"hang-up"`-Nachricht und sendet sie an das andere Ende des Anrufs, um den anderen Peer zu instruieren, sich ebenfalls ordentlich herunterzufahren.

##### Beenden der Verbindung

Die `closeVideoCall()`-Funktion, die unten dargestellt ist, ist verantwortlich für das Stoppen der Streams, das Bereinigen und das Entsorgen des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts:

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

Nachdem Referenzen auf die zwei {{HTMLElement("video")}}-Elemente erkannt wurden, prüfen wir, ob eine WebRTC-Verbindung besteht; wenn dies der Fall ist, schreiten wir zur Trennung fort und beenden den Anruf:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass streunende Ereignishandler ausgelöst werden, während die Verbindung im Prozess des Schließens ist, was möglicherweise Fehler verursacht.
2. Für beide Fern- und lokale Video-Streams iterieren wir über jeden Track, indem die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) aufgerufen wird, um jeden Track zu schließen.
3. Schließen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch Aufruf von [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close).
4. Setzen `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code erfährt, dass kein laufender Anruf besteht; dies ist nützlich, wenn der Benutzer auf einen Namen in der Benutzerliste klickt.

Dann für jedes der eingehenden und ausgehenden {{HTMLElement("video")}}-Elemente entfernen wir ihre [`src`](/de/docs/Web/API/HTMLMediaElement/src)- und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften, indem ihre [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden aufgerufen werden. Dies schließt die Dissoziierung der Streams von den Video-Elementen ab.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` auf dem "Auflegen"-Button, um ihn nicht mehr anklickbar zu machen, während kein Anruf läuft; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies ermöglicht es dem Benutzer, einen weiteren Benutzer anzurufen oder einen eingehenden Anruf zu empfangen.

#### Umgang mit Statusänderungen

Es gibt eine Reihe weiterer Ereignisse, bei denen Sie Listener einrichten können, die Ihren Code über verschiedene Statusänderungen informieren. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event), und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungsstatus

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden von der ICE-Schicht an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Verbindungsstatus ändert (z.B. wenn der Anruf vom anderen Ende beendet wird).

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

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn sich der ICE-Verbindungsstatus auf `"closed"` oder `"failed"` ändert. Dies sorgt dafür, dass unser Verbindungsende heruntergefahren wird, so dass wir bereit sind, einen Anruf erneut zu starten oder entgegenzunehmen.

> [!NOTE]
> Wir beobachten den `disconnected`-Signalisierungsstatus hier nicht, da er vorübergehende Probleme anzeigen kann und nach einiger Zeit wieder in den `connected`-Status wechseln könnte. Das Überwachen würde den Videoanruf bei jedem temporären Netzwerkproblem beenden.

##### ICE-Signalisierungsstatus

Ähnlich überwachen wir Hinweise auf [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungsstatus in `closed` ändert, schließen wir ebenfalls das Gespräch.

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
> Der `closed`-Signalisierungsstatus wurde zugunsten des `closed`-[`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) als veraltet angesehen. Wir beobachten ihn hier, um etwas Rückwärtskompatibilität zu ermöglichen.

##### ICE-Suchstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden verwendet, um Ihnen mitzuteilen, wenn der Status des Suchprozesses der ICE-Agenten sich ändert. Unser Beispiel verwendet dies nicht für irgendetwas, aber es kann nützlich sein, diese Ereignisse zu beobachten, um sie für Debugging-Zwecke zu nutzen, sowie um zu erkennen, wenn die Kandidatensammlung abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können nun [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), um es in Aktion zu sehen. Öffnen Sie die Web-Konsole auf beiden Geräten und schauen Sie sich die geloggten Ausgaben an—auch wenn Sie es im gezeigten Code nicht sehen, der Code auf dem Server (und auf [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) hat viele Konsolenausgaben, damit Sie die Signalisierungs- und Verbindungsprozesse bei der Arbeit sehen können.

Eine weitere offensichtliche Verbesserung wäre das Hinzufügen einer "Klingel"-Funktion, sodass anstatt nur nach der Erlaubnis zu fragen, Kamera und Mikrofon zu verwenden, zuerst ein "Benutzer X ruft an. Möchten Sie antworten?"-Prompt erscheint.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten auf dem Web](/de/docs/Web/Media/Guides/Formats)
- [Media Capture and Streams-API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities-API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording-API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfekte Verhandlungs](/de/docs/Web/API/WebRTC_API/Perfect_negotiation) Muster

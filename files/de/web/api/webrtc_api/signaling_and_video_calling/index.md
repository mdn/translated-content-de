---
title: Signalgebung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: c117b75eb187453a310580ae0c761f8018db83fa
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Peer-to-Peer-Medienaustausch in Echtzeit zwischen zwei Geräten. Eine Verbindung wird durch einen Entdeckungs- und Aushandlungsprozess namens **Signalisierung** hergestellt. Dieses Tutorial wird Sie durch den Aufbau eines beidseitigen Videoanrufs führen.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einer zentralen Einschränkung. Eine Form der Entdeckung und Medienformataushandlung muss stattfinden, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit sich zwei Geräte in unterschiedlichen Netzwerken finden können. Dieser Prozess wird **Signalisierung** genannt und beinhaltet, dass sich beide Geräte mit einem dritten, gemeinsam vereinbarten Server verbinden. Über diesen dritten Server können die beiden Geräte einander lokalisieren und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir die Unterstützung für das Öffnen eines beidseitigen Videoanrufs zwischen Benutzern weiter verbessern. Sie können [dieses Beispiel auf Render ausprobieren](https://webrtc-from-chat.onrender.com), um damit zu experimentieren. Sie können sich das [komplette Projekt auf GitHub](https://github.com/bsmth/examples/tree/main/webrtc-from-chat) ansehen.

## Der Signalisierungsserver

Die Etablierung einer WebRTC-Verbindung zwischen zwei Geräten erfordert die Verwendung eines **Signalisierungsservers**, um zu bestimmen, wie sie über das Internet verbunden werden können. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu fungieren, um es zwei Partnern zu ermöglichen, eine Verbindung zu finden und herzustellen, während die potenzielle Offenlegung privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess eigentlich?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC legt keinen Transportmechanismus für die Signalisierungsinformationen fest. Sie können alles verwenden, was Sie mögen, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Partnern auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, spielt das im Großen und Ganzen keine Rolle: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist im Grunde genommen eine Black Box. Wichtig ist nur, dass, wenn das {{Glossary("ICE", "ICE")}}-Subsystem Sie anweist, Signalisierungsdaten an den anderen Partner zu senden, Sie dies tun, und der andere Partner weiß, wie er diese Informationen empfängt und an sein eigenes ICE-Subsystem weiterleitet. Alles, was Sie tun müssen, ist, die Informationen hin und her zu kanalisieren. Die Inhalte sind für den Signalisierungsserver völlig irrelevant.

### Vorbereitung des Chatservers für die Signalisierung

Unser [Chatserver](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt verschiedene Nachrichtentypen zur Bearbeitung von Aufgaben wie der Registrierung neuer Benutzer, dem Festlegen von Benutzernamen und dem Senden öffentlicher Chats.

Um es dem Server zu ermöglichen, Signalisierung und ICE-Aushandlung zu unterstützen, müssen wir den Code aktualisieren. Wir müssen Nachrichten an einen bestimmten Benutzer richten können, anstatt sie an alle verbundenen Benutzer zu senden, und sicherstellen, dass unbekannte Nachrichtentypen durchgeleitet und ausgeliefert werden, ohne dass der Server wissen muss, was sie bedeuten. Dies ermöglicht uns, Signalisierungsnachrichten über diesen gleichen Server zu senden, anstatt einen separaten Server zu benötigen.

Werfen wir einen Blick auf die Änderungen, die wir am Chatserver vornehmen müssen, um WebRTC-Signalisierung zu unterstützen. Diese befindet sich in der Datei [`chatserver.js`](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat-server.js).

Zuerst kommt die Hinzufügung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet diese eine stringifizierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen findet, der mit dem angegebenen Benutzernamen übereinstimmt, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein stringifiziertes JSON-Objekt. Wir hätten es auch so gestalten können, dass es unser ursprüngliches Nachrichtenobjekt empfängt, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits stringifiziert wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach dessen [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-WebSocket-Nachrichten-Handler zu aktualisieren, um dies zu unterstützen. Dies beinhaltet eine Änderung am Ende des `"connection"`-Nachrichten-Handlers:

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

Dieser Code prüft nun die ausstehende Nachricht, um zu sehen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, bestimmt sie den Benutzernamen des Clients, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an ihn zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem über die Verbindungs- liste iteriert und die Nachricht an jeden Benutzer gesendet wird.

Da der bestehende Code das Senden von beliebigen Nachrichtentypen erlaubt, sind keine zusätzlichen Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an jeden bestimmten Benutzer senden, was ihnen ermöglicht, Signalisierungsnachrichten nach Belieben hin und her zu senden.

Das ist alles, was wir auf der Serverseite der Gleichung ändern müssen. Jetzt betrachten wir das Signalisierungsprotokoll, das wir implementieren werden.

### Gestaltung des Signalisierungsprotokolls

Jetzt, da wir einen Mechanismus für den Nachrichtenaustausch erstellt haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen werden. Dies kann auf verschiedene Weise erfolgen; das hier vorgestellte ist nur eine mögliche Art, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet stringifizierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen werden, mit Inhalten, die spezifizieren, welche Art von Nachrichten sie sind sowie jede zusätzliche Information, die erforderlich ist, um die Nachrichten ordnungsgemäß zu handhaben.

#### Austausch von Sitzungsbeschreibungen

Beim Starten des Signalisierungsprozesses wird ein **Angebot** von dem Benutzer erstellt, der den Anruf initiiert. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss an den empfangenden Benutzer geliefert werden, den wir **Angerufener** nennen werden. Der Angerufene antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver wird WebSocket verwenden, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Senders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung empfangen soll (wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an und umgekehrt).
- `sdp`
  - : Der SDP (Session Description Protocol)-String, der das lokale Ende der Verbindung aus der Perspektive des Senders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie sie die Mediendaten selbst übertragen sollen. Hier kommt das {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Partner müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Partner verwenden kann, um zu kommunizieren. Jeder Partner sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, selbst wenn die Medien bereits gestreamt werden.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Partner sich auf einen gegenseitig kompatiblen Kandidaten geeinigt haben, wird das SDP des Kandidaten von jedem Partner verwendet, um eine Verbindung zu erstellen und zu öffnen, durch die dann Medien fließen. Wenn sie sich später auf einen besseren (normalerweise leistungsstärkeren) Kandidaten einigen, kann sich das Streaming-Format ändern, wie erforderlich.

Obwohl derzeit nicht unterstützt, könnte ein Kandidat, der empfangen wird, nachdem die Medien bereits fließen, theoretisch auch dazu verwendet werden, auf eine Verbindung mit geringerer Bandbreite herunterzuschalten, falls erforderlich.

Jeder ICE-Kandidat wird an den anderen Partner gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Partner gesendet wird. Jede Kandidatennachricht enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer leiten.
- `candidate`
  - : Der SDP-Kandidat-String, der die vorgeschlagene Verbindungsmethode beschreibt. Sie müssen den Inhalt dieses Strings typischerweise nicht anschauen. Alles, was Ihr Code tun muss, ist, ihn durch den Signalisierungsserver an den entfernten Partner zu leiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Partner selbst oder ein Relay-Server ist), sowie andere Informationen vor, die erforderlich sind, um die beiden Computer miteinander zu verbinden. Dies beinhaltet NAT oder andere Netzwerkomplexität.

> [!NOTE]
> Wichtig ist, folgendes zu beachten: Das Einzige, wofür Ihr Code während der ICE-Aushandlung verantwortlich ist, ist das Akzeptieren ausgehender Kandidaten aus der ICE-Schicht und das Senden dieser über die Signalisierungsverbindung an den anderen Partner, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, sowie das Empfangen von ICE-Kandidaten-Nachrichten vom Signalisierungsserver (wenn die `"new-ice-candidate"`-Nachricht empfangen wird) und das Übermitteln dieser an Ihre ICE-Schicht, indem Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Das ist alles.
>
> Der Inhalt des SDP ist für Sie im Wesentlichen in allen Fällen irrelevant. Vermeiden Sie die Versuchung, es komplizierter machen zu wollen, bis Sie wirklich wissen, was Sie tun. Das führt nur in den Wahnsinn.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist, die Nachrichten zu senden, die er soll. Ihr Arbeitsablauf kann auch Anmelde-/Authentifizierungsfunktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Versprechen sind beide asynchrone Aufrufe, die separat behandelt werden. Stellen Sie sicher, dass die Signalisierung nicht die Reihenfolge ändert! Zum Beispiel muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers aufgerufen werden, nachdem die Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) festgelegt wurde.

### Signalisierungsablauf

Der Signalisierungsprozess umfasst diesen Austausch von Nachrichten zwischen zwei Partnern unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess wird natürlich variieren, aber im Allgemeinen gibt es einige wesentliche Punkte, an denen Signalisierungsnachrichten bearbeitet werden:

- Jeder Nutzer-Client, der in einem Webbrowser läuft
- Jeder Webbrowser des Nutzers
- Der Signalisierungsserver
- Der Webserver, der den Chat-Dienst hostet

Stellen Sie sich vor, Naomi und Priya sind in eine Diskussion über die Chat-Software vertieft, und Naomi beschließt, einen Videoanruf zwischen den beiden zu öffnen. Hier ist die erwartete Abfolge von Ereignissen:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Über den Verlauf dieses Artikels werden wir dies detaillierter sehen.

### ICE-Kandidaten-Austauschprozess

Wenn die ICE-Schicht jedes Partners beginnt, Kandidaten zu senden, tritt sie in einen Exchange-Prozess unter den verschiedenen Punkten in der Kette ein, der so aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie diese von ihrer lokalen ICE-Schicht erhält; es gibt keine Wartezeiten oder Gruppierungen von Kandidaten. Sobald die beiden Partner sich auf einen Kandidaten einigen, den sie beide für den Austausch der Medien verwenden können, beginnen die Medien zu fließen. Jeder Teilnehmer sendet weiterhin Kandidaten, bis ihm die Optionen ausgehen, selbst nachdem die Medien bereits zu fließen begonnen haben. Dies wird in der Hoffnung gemacht, bessere Optionen zu identifizieren als diejenige, die anfangs ausgewählt wurde.

Wenn sich die Bedingungen ändern (zum Beispiel wenn sich die Netzverbindung verschlechtert), könnte einer oder beide Partner vorschlagen, zu einer Medienauflösung mit geringerer Bandbreite zu wechseln oder zu einem alternativen Codec. Dies löst einen neuen Austausch von Kandidaten aus, nach dem ein anderes Medienformat und/oder ein Codec-Wechsel stattfinden kann. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC-Browser unterstützen müssen, welche zusätzliche Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs auswählen, die Sie verwenden sollten.

Optional sehen Sie {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein besseres Verständnis dafür erlangen möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Dies wird alles hinter den Kulissen geregelt. Unsere Rolle besteht darin, die Kandidaten hin und her durch den Signalisierungsserver zu senden.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist seine Nachrichtenbearbeitung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Sie sollten natürlich einen Mechanismus für den Austausch von Signalisierungsinformationen auswählen, der für Ihre Anwendung geeignet ist.

Wir aktualisieren den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisierung des HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt wird. Dies erfordert Videoelemente und einen Button, um den Anruf zu beenden:

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

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, die uns volle Kontrolle über das Seitenlayout geben, indem sie die Verwendung von CSS ermöglichen. Wir überspringen Layoutdetails in diesem Leitfaden, aber [sehen Sie sich das CSS auf GitHub](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat.css) an, um zu sehen, wie wir damit umgegangen sind. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` wird Video anzeigen, das von dem verbundenen Benutzer empfangen wird. Wir geben das `autoplay`-Attribut an, um sicherzustellen, dass das Video, sobald es ankommt, sofort abgespielt wird. Dies entfernt jegliche Notwendigkeit, die Wiedergabe explizit in unserem Code zu handhaben. Das `local_video` `<video>`-Element zeigt eine Vorschau der Kamera des Benutzers; wir geben das `muted`-Attribut an, da wir keinen lokalen Ton in diesem Vorschaufenster hören müssen.

Schließlich das {{HTMLElement("button")}} `hangup-button`, das Anrufe trennen soll, wird definiert und so konfiguriert, dass es standardmäßig deaktiviert ist (wir legen dies als Standard fest, wenn kein Anruf verbunden ist) und die Funktion `hangUpCall()` bei Klick aufruft. Diese Funktion hat die Aufgabe, den Anruf zu beenden und dem anderen Partner eine Mitteilung an den Signalisierungsserver zu senden, die ihn ebenfalls auffordert, sich zu beenden.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche unterteilen, um leichter zu beschreiben, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: Sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und stellt einen Handler zum Empfangen von Nachrichten im JSON-Objektformat bereit. Dieser Code behandelt im Allgemeinen Textchat- Nachrichten, wie er es vorher getan hat.

#### Senden von Nachrichten an den Signalisierungsserver

Im gesamten Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das Nachrichtenobjekt, das in diese Funktion übergeben wird, wird durch den Aufruf von {{jsxref("JSON.stringify()")}} in einen JSON-String konvertiert, und dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"user-list"`-Nachricht behandelt, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links neben dem Chat-Panel angezeigt wird. Diese Funktion empfängt ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Strings ist, die die Benutzernamen jedes verbundenen Benutzers angeben.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}-Element, das die Liste der Benutzernamen enthält, in die Variable `listElem` erhalten haben, leeren wir die Liste, indem wir jedes ihrer Kind-Elemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem man einzelne Benutzer hinzufügt und entfernt, anstatt die ganze Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber für die Zwecke dieses Beispiels reicht das aus.

Dann iterieren wir über das Benutzername-Array mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element und erstellen einen neuen Knoten mit dem Benutzernamen, indem wir [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) verwenden. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Als Nächstes setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf das Listenelement, sodass beim Klicken auf einen Benutzernamen unsere `invite()`-Methode aufgerufen wird, die wir im nächsten Abschnitt genauer betrachten werden.

Zum Schluss fügen wir das neue Element der `<ul>`-Liste hinzu, die alle Benutzernamen enthält.

#### Einen Anruf starten

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

Dies beginnt mit einem grundlegenden Wahnsinnscheck: Ist der Benutzer bereits verbunden? Wenn bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) vorhanden ist, können sie offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen, und wir prüfen, ob es nicht derselbe Benutzer ist, der den Anruf starten möchte.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und grundlegend konfiguriert.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir den Zugriff auf die Kamera und das Mikrofon des Benutzers an, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, das uns über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft zur Verfügung steht. Wenn dies erfolgreich ist und das zurückgegebene Versprechen erfüllt wird, wird unser `then`-Handler ausgeführt. Er erhält als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio vom Mikrofon des Nutzers und Video von dessen Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der erlaubten Medieneingaben auf ein bestimmtes Gerät oder eine Reihe von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der Geräte zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien zu filtern und dann die gewählten Geräte-`deviceId`-Werte im `deviceId`-Feld des `mediaConstraints`-Objekts, das an `getUserMedia()` übergeben wird, zu verwenden. In der Praxis ist dies selten, wenn überhaupt, notwendig, da der Großteil dieses Vorgangs für Sie durch `getUserMedia()` erledigt wird.

Wir hängen den eingehenden Stream durch Festlegen der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des lokalen Vorschau-{{HTMLElement("video")}}-Elements an. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream in unserem lokalen Vorschaufenster zu spielen.

Wir iterieren dann über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Selbst wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wann immer Sie es für angemessen halten. Medien, die empfangen werden, bevor die ICE-Aushandlung abgeschlossen ist, können zur Hilfe bei der Entscheidung durch ICE über den besten Verbindungsansatz genutzt werden und so den Verhandlungsprozess unterstützen.

Beachten Sie, dass Sie, wenn Sie native Apps wie eine Telefonanwendung entwickeln, nicht beginnen sollten, Daten zu senden, bis die Verbindung an beiden Enden akzeptiert wurde, mindestens, um versehentliches Senden von Video- und/oder Audiodaten zu vermeiden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald die Medien an die `RTCPeerConnection` angehängt sind, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an der Verbindung ausgelöst, so dass die ICE-Aushandlung gestartet werden kann.

Tritt ein Fehler beim Versuch auf, auf den lokalen Medienstrom zuzugreifen, wird unsere catch-Klausel `handleGetUserMediaError()` aufrufen, die dem Benutzer bei Bedarf einen entsprechenden Fehler anzeigt.

#### Fehlermanagement bei `getUserMedia()`

Wenn das von `getUserMedia()` zurückgegebene Versprechen fehlschlägt, wird unsere `handleGetUserMediaError()`-Funktion aufgerufen.

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

Eine Fehlermeldung wird in allen Fällen angezeigt, außer in einem. In diesem Beispiel ignorieren wir `"SecurityError"`- und `"PermissionDeniedError"`-Ergebnisse und behandeln die Weigerung, die Berechtigung zur Nutzung der Medienhardware zu erteilen, als gleichbedeutend mit dem Abbrechen des Anrufes durch den Benutzer.

Unabhängig davon, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und alle Ressourcen freizugeben, die bereits während des Versuchs, den Anruf zu tätigen, zugeteilt wurden. Dieser Code ist dazu gedacht, sicher mit teilweise gestarteten Anrufen umzugehen.

#### Erstellen der Peer-Verbindung

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu erstellen — ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene ein Angebots-Nachricht vom Anrufer empfängt.

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

Bei der Verwendung des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors geben wir ein Objekt an, das Konfigurationsparameter für die Verbindung bereitstellt. In diesem Beispiel verwenden wir nur einen davon: `iceServers`. Dies ist ein Array von Objekten, das STUN- und/oder TURN-Server beschreibt, die von der {{Glossary("ICE", "ICE")}}-Schicht verwendet werden sollen, um den besten Pfad bei den Verbindungsversuchen zwischen Anrufer und Angerufenem zu ermitteln. Diese Server werden verwendet, um den besten Weg und die besten Protokolle für die Kommunikation zwischen den Partnern zu bestimmen, selbst wenn sie sich hinter einer Firewall oder einem {{Glossary("NAT", "NAT")}} befinden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Ihnen gehören, oder für die Sie eine spezielle Autorisierung zur Nutzung haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber deren Missbrauch ist unhöflich.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs bereitstellt, unter denen der angegebene Server erreichbar ist. Es kann gegebenenfalls auch `username` und `credential`-Werte bereitstellen, um die Authentifizierung zu erlauben, falls erforderlich.

Nach dem Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) richten wir Handler für die Ereignisse ein, die für uns wichtig sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie behandeln, um irgendetwas mit gestreamten Medien mit WebRTC zu tun. Die restlichen sind nicht unbedingt erforderlich, können aber nützlich sein, und wir werden sie erläutern. Es gibt noch einige andere Ereignisse, die in diesem Beispiel nicht verwendet werden. Hier ist ein kurzer Überblick über jeden der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn es notwendig ist, dass Sie einen ICE-Kandidaten durch Ihren Signalisierungsserver an den anderen Partner übermitteln. Siehe [Senden von ICE-Kandidaten](#senden_von_ice-kandidaten) für mehr Informationen und den Code für dieses Beispiel.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird durch die lokale WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies lässt Sie eingehende Medien an ein Element anschließen, um sie anzuzeigen, zum Beispiel. Siehe [Empfangen neuer Streams](#empfang_neuer_streams) für Detailinformationen.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird jedes Mal aufgerufen, wenn die WebRTC-Infrastruktur Sie dazu auffordert, den Sitzungsverhandlungsprozess neu zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und dem Angerufenen zu senden, um ihn zu bitten, mit uns zu verbinden. Siehe [Beginn der Verhandlungen](#beginn_der_verhandlung) für Informationen zu der Umsetzung unsererseits.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um auf das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu reagieren; es wird an die `RTCPeerConnection` gesendet, wenn der entfernte Partner einen Track aus den Medien entfernt, die gesendet wurden. Siehe [Umgang mit dem Entfernen von Tracks](#behandlung_der_entfernung_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen im Status der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung abgebrochen oder verloren wurde. Wir schauen uns den Code dazu im Abschnitt [ICE-Verbindungsstatus](#ice-verbindungsstatus) unten an.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Sie erhalten ein [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis von der ICE-Schicht, wenn der Prozess des ICE-Agents zur Sammlung von Kandidaten von einem Status in einen anderen wechselt (zum Beispiel beim Start des Sammeln von Kandidaten oder beim Abschluss der Verhandlung). Siehe [ICE-Sammlungstatus](#ice-sammlungstatus) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen das [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignis jedes Mal, wenn sich der Status des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signalisierungsstatus](#ice-signalisierungsstatus) für unseren Code diesbezüglich.

#### Beginn der Verhandlung

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt, einen Medienstream erstellt und dessen Tracks zur Verbindung hinzugefügt hat, wie in [Einen Anruf starten](#einen_anruf_starten) gezeigt, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) liefern, um anzuzeigen, dass es bereit ist, die Verhandlung mit dem anderen Partner zu beginnen. Hier ist unser Code für die Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Verhandlungsprozess zu beginnen, müssen wir ein SDP-Angebot an den Partner, mit dem wir uns verbinden wollen, erstellen und senden. Dieses Angebot enthält eine Liste von unterstützten Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstream, den wir lokal zur Verbindung hinzugefügt haben (d.h. das Video, das wir an das andere Ende des Anrufs senden wollen), und alle bereits durch die ICE-Schicht gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (das Versprechen erfüllt wird), übergeben wir die erstellte Angebotinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), die den Zustand der Verbindung und der Medienkonfiguration für das Anruferende der Verbindung konfiguriert.

> [!NOTE]
> Technisch gesehen ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das von `setLocalDescription()` zurückgegebene Versprechen erfüllt wird. Dann senden wir unser Angebot an den anderen Partner, indem wir eine neue `"video-offer"`-Nachricht erstellen, die die lokale Beschreibung enthält (nun ist sie identisch mit dem Angebot), dann diese durch unseren Signalisierungsserver an den Angerufenen senden. Das Angebot hat folgende Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im anfänglichen `createOffer()` oder in einem der folgenden Fulfillment-Handler, wird ein Fehler gemeldet, indem unsere `window.reportError()`-Funktion aufgerufen wird.

Sobald der Fulfillment-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent mit dem Senden von [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignissen an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), eines für jede potenzielle Konfiguration, die es entdeckt. Unser Handler für das `icecandidate`-Ereignis ist verantwortlich für die Übermittlung der Kandidaten an den anderen Partner.

#### Sitzungsverhandlung

Jetzt, da wir die Verhandlung mit dem anderen Partner gestartet haben und ein Angebot übertragen haben, sehen wir uns an, was auf der Seite des Angerufenen für eine Weile passiert. Der Angerufene empfängt das Angebot und ruft die `handleVideoOfferMsg()`-Funktion auf, um es zu verarbeiten. Lassen Sie uns sehen, wie der Angerufene mit der `"video-offer"`-Nachricht umgeht.

##### Behandlung der Einladung

Wenn das Angebot ankommt, wird die `handleVideoOfferMsg()`-Funktion des Angerufenen mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks, die das Audio und Video von ihrem Mikrofon und ihrer Webcam enthalten, hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten und ihre eigene Antwort konstruieren und senden.

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

Dieser Code ist sehr ähnlich zu dem, was wir in der `invite()`-Funktion im Abschnitt [Einen Anruf starten](#einen_anruf_starten) getan haben. Er beginnt mit der Erstellung und Konfiguration einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem unsere `createPeerConnection()`-Funktion aufgerufen wird. Dann wird die SDP-Angebotsbeschreibung aus der empfangenen `"video-offer"`-Nachricht genommen und verwendet, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies etabliert das erhaltene Angebot als die Beschreibung des entfernten (anruferseitigen) Endes der Verbindung. Wenn dies erfolgreich ist, startet der Erfüllungshandler (im `then()`-Abschnitt) den Prozess, um Zugriff auf die Kamera und das Mikrofon des Angerufenen zu erhalten, indem [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufgerufen wird, Tracks werden zur Verbindung hinzugefügt und so weiter, wie wir es im Abschnitt `invite()` vorher gesehen haben.

Sobald die Antwort durch einen Aufruf von [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung auf das SDP der Antwort gesetzt, indem wir [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufrufen, dann wird die Antwort durch den Signalisierungsserver an den Anrufer übertragen, um ihm mitzuteilen, was die Antwort ist.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` weitergeleitet, wie im Abschnitt [Fehlermanagement bei getUserMedia()](#handling_getusermedia_errors) beschrieben.

> [!NOTE]
> Wie bei dem Anrufer beginnt der Browser, sobald der Fulfillment-Handler von `setLocalDescription()` ausgeführt wurde, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse, die der Angerufene behandeln muss, zu senden, ein Ereignis für jeden Kandidaten, der an den entfernten Partner übertragen werden muss.

Schließlich behandelt der Anrufer die Antwortnachricht, die er erhalten hat, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und übergibt es an
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Aushandlungsprozess beinhaltet den wiederholten Versand von Kandidaten an den anderen Partner, bis ihm die potenziellen Möglichkeiten ausgehen, die er zur Unterstützung der Medienübertragungsanforderungen der `RTCPeerConnection` für sinnvoll hält. Da ICE nichts über Ihren Signalisierungsserver weiß, behandelt Ihr Code die Übermittlung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler empfängt ein Ereignis, dessen `candidate`-Eigenschaft das SDP beschreibt, das den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Schicht die potenziellen Konfigurationen ausgegangen sind, die er vorschlagen kann). Der Inhalt von `candidate` ist das, was Sie mit Ihrem Signalisierungsserver übertragen müssen. Hier ist die Implementierung in unserem Beispiel:

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

Dies baut ein Objekt, das den Kandidaten enthält, dann sendet es ihn an den anderen Partner, indem die in [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver) beschriebene Funktion `sendToServer()` genutzt wird. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden muss. Dadurch kann der Signalisierungsserver die Nachricht weiterleiten.
- `candidate`
  - : Das SDP, das den Kandidaten beschreibt, den die ICE-Schicht an den anderen Partner übertragen möchte.

Das Format dieser Nachricht (wie es bei allem, was Sie bei der Behandlung der Signalisierung tun) ist völlig Ihnen überlassen, abhängig von Ihren Bedürfnissen; Sie können zusätzliche Informationen bereitstellen, falls erforderlich.

> [!NOTE]
> Es ist wichtig zu beachten, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs ankommen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe der Übertragung der Daten über einen beliebigen Kanal Ihrer Wahl übernehmen können. Dies kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### Empfang von ICE-Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten an den empfangenden Partner mit einer Methode seiner Wahl; in unserem Beispiel handelt es sich dabei um JSON-Objekte, mit einer `type`-Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere `handleNewICECandidateMsg()`-Funktion wird von unserem Haupt-WebSocket-Eingangs-Nachrichten-Code aufgerufen, um diese Nachrichten zu bearbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion konstruiert ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem das empfangene SDP an seinen Konstruktor übergeben wird, und liefert dann den Kandidaten an die ICE-Schicht, indem er es an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dies übergibt den neuen ICE-Kandidaten an die lokale ICE-Schicht, und schließlich ist unsere Rolle im Prozess der Handhabung dieses Kandidaten abgeschlossen.

Jeder Partner sendet dem anderen einen Kandidaten für jede mögliche Transportkonfiguration, die er glaubt, dass sie für den Austausch der Medien geeignet sein könnte. Irgendwann einigen sich die beiden Partner darauf, dass ein bestimmter Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien zu teilen. Es ist jedoch wichtig zu beachten, dass die ICE-Aushandlung _nicht_ stoppt, sobald die Medien fließen. Stattdessen können auch nach dem Start des Gesprächs weiterhin Kandidaten ausgetauscht werden, entweder um eine bessere Verbindungsmethode zu finden oder weil sie bereits im Transport waren, als die Partner erfolgreich ihre Verbindung herstellten.

Darüber hinaus, falls etwas eine Änderung im Streaming-Szenario verursacht, beginnt die Aushandlung erneut, indem das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess startet erneut, wie zuvor beschrieben. Dies kann in einer Vielzahl von Situationen passieren, einschließlich:

- Änderungen im Netzwerkstatus, wie eine Bandbreitenänderung, eine Umstellung vom WLAN auf die Mobilfunkverbindung oder Ähnliches.
- Wechsel zwischen der Vorder- und der Rückkamera auf einem Telefon.
- Eine Änderung der Konfiguration des Streams, wie Auflösung oder Frame-Rate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch das Aufrufen ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder aufgrund einer Neuverhandlung des Stream-Formats—wird ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` für jeden Track gesendet, der zur Verbindung hinzugefügt wurde. Die Verwendung von neu hinzugefügten Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiger Bedarf ist, die eingehenden Medien an ein entsprechendes HTML-Element zu koppeln. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}}-Element hinzu, das die eingehenden Videos anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird an das `"received_video"` {{HTMLElement("video")}}-Element angehängt, und das "Hang Up" {{HTMLElement("button")}}-Element wird aktiviert, damit der Benutzer den Anruf auflegen kann.

Sobald dieser Code durchgeführt wurde, wird schließlich das von dem anderen Partner gesendete Video im lokalen Browserfenster angezeigt!

##### Behandlung der Entfernung von Tracks

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der entfernte Partner einen Track durch Aufruf von [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aus der Verbindung entfernt. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code ruft den eingehenden [`MediaStream`](/de/docs/Web/API/MediaStream) aus der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des `"received_video"` {{HTMLElement("video")}}-Elements ab und ruft dann die [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode des Streams auf, um ein Array der Tracks zu erhalten.

Wenn die Länge des Arrays null ist, was bedeutet, dass keine Tracks mehr im Stream sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unser App sauber wieder auf den Zustand, in dem sie bereit ist, einen weiteren Anruf zu starten oder zu empfangen. Weitere Informationen zu `closeVideoCall()` finden Sie im Abschnitt [Anruf beenden](#den_anruf_beenden).

#### Anruf beenden

Es gibt viele Gründe, warum Anrufe beendet werden können. Ein Anruf könnte abgeschlossen sein, wobei eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkausfall aufgetreten, oder ein Benutzer hat seinen Browser beendet oder erlebt einen Systemabsturz. Auf jeden Fall müssen alle guten Dinge zu Ende gehen.

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung herunterzufahren und zurückzusetzen. Es erstellt dann eine `"hang-up"`-Nachricht und sendet sie an das andere Ende des Anrufs, um den anderen Partner aufzufordern, sich ebenfalls sauber herunterzufahren.

##### Den Anruf beenden

Die `closeVideoCall()`-Funktion, die unten gezeigt wird, ist verantwortlich für das Anhalten der Streams, Bereinigen und Entsorgen des [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekts:

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

Nachdem Referenzen auf die zwei {{HTMLElement("video")}}-Elemente gezogen wurden, überprüfen wir, ob eine WebRTC-Verbindung besteht; wenn ja, fahren wir fort, um den Anruf zu trennen und zu schließen:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass während des Schließens der Verbindung möglicherweise Fehler verursachende Ereignishandler ausgelöst werden.
2. Für beide eingehenden und ausgehenden Videostreams iterieren wir über jeden Track und rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode auf, um jeden zu beenden.
3. Schließen Sie die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem Sie [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufrufen.
4. Setzen Sie `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code erfährt, dass kein laufender Anruf stattfindet; dies ist nützlich, wenn der Benutzer auf einen Namen in der Benutzerliste klickt.

Dann entfernen wir für beide eingehenden und ausgehenden {{HTMLElement("video")}}-Elemente deren [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften mit ihren [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden. Dies schließt die Entkopplung der Streams von den Videoelementen ab.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` an der "Auflegen"-Schaltfläche, um sie unanklickbar zu machen, während kein Anruf durchgeführt wird; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies ermöglicht es dem Benutzer, einen anderen Anruf zu tätigen oder einen eingehenden Anruf zu empfangen.

#### Umgang mit Zustandsänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Listener einrichten können, um Ihren Code über verschiedene Zustandsänderungen zu informieren. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungsstatus

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von der ICE-Schicht gesendet, wenn sich der Verbindungsstatus ändert (zum Beispiel wenn der Anruf vom anderen Ende beendet wird).

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

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn sich der ICE-Verbindungsstatus auf `"closed"` oder `"failed"` ändert. Dies hilft beim Herunterfahren des Endes der Verbindung, sodass wir bereit sind, erneut einen Anruf zu starten oder zu akzeptieren.

> [!NOTE]
> Wir beobachten hier nicht den `disconnected`-Signalisierungsstatus, da er vorübergehende Probleme anzeigen kann und nach einiger Zeit möglicherweise wieder in den `connected`-Status zurückkehrt. Wenn wir ihn beobachten, würde es den Anruf bei jedem vorübergehenden Netzwerkproblem beenden.

##### ICE-Signalisierungsstatus

Ähnlich beobachten wir auch [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungsstatus auf `closed` ändert, beenden wir den Anruf ebenso.

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
> Der Signalisierungsstatus `closed` wurde zugunsten des `closed`-[`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) abgelehnt. Wir beobachten ihn hier, um ein wenig Rückwärtskompatibilität hinzuzufügen.

##### ICE-Sammlungstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden verwendet, um Sie über Änderungen im Status des ICE-Kandidatensammlungsprozesses zu informieren. Unser Beispiel nutzt dies für nichts, aber es kann nützlich sein, diese Ereignisse aus Debugging-Zwecken sowie zur Erkennung, wann die Kandidatensammlung abgeschlossen ist, zu beobachten.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können jetzt [dieses Beispiel ausprobieren](https://webrtc-from-chat.onrender.com/), um es in Aktion zu sehen.
Öffnen Sie die Webkonsole auf beiden Geräten und schauen Sie sich die geloggten Ausgaben an—obwohl Sie es im obigen Code nicht sehen, hat der Code auf dem Server (und auf [GitHub](https://github.com/bsmth/examples/tree/main/webrtc-from-chat)) viele Konsolenausgaben, damit Sie die Signalisierungen und Verbindungsprozesse in Aktion sehen können.

Eine weitere naheliegende Verbesserung wäre, eine "Klingel"-Funktion hinzuzufügen, sodass anstelle der bloßen Frage nach der Erlaubnis zum Zugriff auf die Kamera und das Mikrofon zuerst ein "Benutzer X ruft an. Möchten Sie antworten?"-Prompt erscheint.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Web-Smediotechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfekte Verhandlungs]-Muster(/de/docs/Web/API/WebRTC_API/Perfect_negotiation)

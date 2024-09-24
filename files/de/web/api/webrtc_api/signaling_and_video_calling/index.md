---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 903568f48bedf9266dcc7df072b94c21a98e5792
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht einen Echtzeit-Medienaustausch zwischen zwei Geräten, der peer-to-peer erfolgt. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess hergestellt, der **Signalisierung** genannt wird. Dieses Tutorial führt Sie durch den Aufbau eines Zwei-Wege-Videoanrufs.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine rein peer-to-peer Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einer zentralen Einschränkung. Eine Form der Entdeckung und Medienformatverhandlung muss stattfinden, [wie an anderer Stelle diskutiert](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit sich zwei Geräte in verschiedenen Netzwerken erkennen können. Dieser Prozess wird **Signalisierung** genannt und beinhaltet, dass beide Geräte eine Verbindung zu einem dritten, gemeinsam vereinbarten Server herstellen. Über diesen dritten Server können die beiden Geräte sich gegenseitig finden und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der zunächst im Rahmen unserer WebSocket-Dokumentation erstellt wurde (dieser Link zum Artikel folgt noch; er ist noch nicht online), um die Eröffnung eines Zwei-Wege-Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/) und [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können sich auch [das vollständige Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort alle Verbindungen zurücksetzen. Außerdem gibt es eine kurze Timeout-Periode; die Glitch-Instanz dient nur für schnelle Experimente und Tests.

## Der Signalisierungsserver

Die Herstellung einer WebRTC-Verbindung zwischen zwei Geräten erfordert die Verwendung eines **Signalisierungsservers**, um zu klären, wie sie über das Internet verbunden werden. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu agieren, um zwei Peers zu ermöglichen, eine Verbindung zu finden und herzustellen, während die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC spezifiziert keinen Transportmechanismus für die Signalisierungsinformationen. Sie können alles verwenden, was Sie möchten, von [WebSocket](/de/docs/Web/API/WebSockets_API) über {{domxref("Window/fetch", "fetch()")}} bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP")}} handelt, spielt das keine große Rolle: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist im Wesentlichen eine Black Box. Was zählt, ist, dass das {{Glossary("ICE")}}-Subsystem Sie anweist, Signalisierungsdaten an den anderen Peer zu senden, und dass der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem übermitteln kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt spielt für den Signalisierungsserver überhaupt keine Rolle.

### Vorbereitung des Chat-Servers für die Signalisierung

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben zu bearbeiten, z. B. das Registrieren neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten.

Um dem Server die Unterstützung von Signalisierung und ICE-Verhandlung zu ermöglichen, müssen wir den Code aktualisieren. Wir müssen zulassen, dass Nachrichten an einen bestimmten Benutzer gerichtet werden können, anstatt sie an alle verbundenen Benutzer zu senden, und sicherstellen, dass unbekannte Nachrichtentypen durchgeschleust und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Dies ermöglicht es uns, Signalisierungsnachrichten über denselben Server zu senden, anstatt einen separaten Server zu benötigen.

Schauen wir uns die Änderungen an, die wir am Chat-Server vornehmen müssen, um WebRTC-Signalisierung zu unterstützen. Dies ist in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js) enthalten.

Zuerst die Hinzufügung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet diese eine in einen JSON-String umgewandelte Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen findet, dessen Benutzername mit dem angegebenen übereinstimmt, und sendet die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein in JSON umgewandeltes Objekt. Wir könnten es so anpassen, dass es unser ursprüngliches Nachrichtenobjekt empfängt, aber in diesem Beispiel ist es effizienter auf diese Weise. Da die Nachricht bereits umgewandelt wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein {{domxref("WebSocket")}}-Objekt, sodass wir einfach dessen {{domxref("WebSocket.send", "send()")}}-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-Handler für WebSocket-Nachrichten zu aktualisieren, um dies zu ermöglichen. Dies beinhaltet eine Änderung am Ende des `"connection"`-Nachrichtenhandlers:

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

Dieser Code betrachtet die anstehende Nachricht jetzt, um zu sehen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, wird der Benutzername des Clients festgelegt, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an diesen Benutzer zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem die Verbindungsauflistung durchlaufen und die Nachricht an jeden Benutzer gesendet wird.

Da der bestehende Code das Senden beliebiger Nachrichtentypen erlaubt, sind keine zusätzlichen Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Benutzer senden und damit Signalisierungsnachrichten nach Belieben hin und her senden.

Das ist alles, was wir auf der Serverseite ändern müssen. Schauen wir uns jetzt das Signalisierungsprotokoll an, das wir implementieren werden.

### Gestaltung des Signalisierungsprotokolls

Da wir jetzt einen Mechanismus zum Austausch von Nachrichten erstellt haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen werden. Dies kann auf verschiedene Arten erfolgen; das hier demonstrierte ist nur eine Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet in JSON-Objekte umgewandelte Strings, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen, mit Inhalten, die angeben, um welche Art von Nachrichten es sich handelt, sowie jegliche zusätzliche Informationen, die erforderlich sind, um die Nachrichten ordnungsgemäß zu verwalten.

#### Austauschen von Sitzungsbeschreibungen

Bei Beginn des Signalisierungsprozesses wird vom Benutzer, der den Anruf initiiert, ein **Angebot** erstellt. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP")}}-Format und muss an den empfangenden Benutzer, den wir den **Angerufenen** nennen, übermittelt werden. Der Angerufene antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver verwendet WebSocket, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an und umgekehrt).
- `sdp`
  - : Der SDP-String (Session Description Protocol), der das lokale Ende der Verbindung aus Sicht des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

An diesem Punkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) für diesen Anruf verwendet werden. Sie wissen jedoch noch nicht, wie die Mediendaten selbst übertragen werden. Hier kommt {{Glossary('ICE', 'Interactive Connectivity Establishment (ICE)')}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer zur Kommunikation verwenden kann. Jeder Peer sendet Kandidaten in der Reihenfolge ihrer Entdeckung und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, selbst wenn Medien bereits gestreamt werden.

Ein {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis wird an die {{domxref("RTCPeerConnection")}} gesendet, um den Vorgang des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen kompatiblen Kandidaten geeinigt haben, wird der SDP dieses Kandidaten von jedem Peer verwendet, um eine Verbindung zu erstellen und zu öffnen, durch die Medien dann zu fließen beginnen. Wenn sie später einen besseren (normalerweise leistungsstärkeren) Kandidaten finden, kann sich das Stream-Format bei Bedarf ändern.

Obwohl derzeit nicht unterstützt, könnte ein Kandidat, der nach Beginn des Medienflusses empfangen wird, theoretisch auch verwendet werden, um auf eine Verbindung mit niedrigerer Bandbreite herunterzustufen, falls erforderlich.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidatennachricht enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidat-String, der die vorgeschlagene Verbindungsmethode beschreibt. In der Regel müssen Sie sich den Inhalt dieses Strings nicht ansehen. Ihr Code muss ihn nur über den Signalisierungsserver an den entfernten Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst oder ein Relais-Server ist) zusammen mit anderen Informationen vor, die benötigt werden, um die beiden Computer miteinander zu verbinden. Dies schließt NAT oder andere Netzwerkkomplexität ein.

> [!NOTE]
> Das Wichtigste hierbei ist Folgendes: Das Einzige, wofür Ihr Code während der ICE-Verhandlung verantwortlich ist, besteht darin, ausgehende Kandidaten von der ICE-Schicht zu übernehmen und sie über die Signalisierungsverbindung an den anderen Peer zu senden, wenn Ihr {{domxref("RTCPeerConnection.icecandidate_event", "onicecandidate")}}-Handler ausgeführt wird, und ICE-Kandidatennachrichten vom Signalisierungsserver (wenn die `"new-ice-candidate"`-Nachricht empfangen wird) zu empfangen und sie an Ihre ICE-Schicht zu übermitteln, indem Sie {{domxref("RTCPeerConnection.addIceCandidate()")}} verwenden. Das ist alles.
>
> Der Inhalt der SDP ist für Sie in fast allen Fällen irrelevant. Vermeiden Sie die Versuchung, es komplizierter machen zu wollen, bis Sie wirklich wissen, was Sie tun. Dieser Weg führt in den Wahnsinn.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist die Nachrichten zu senden, um die er gebeten wird. Ihr Arbeitsfluss kann auch Login-/Authentifizierungsfunktionen erfordern, aber solche Details können variieren.

> [!NOTE]
> Das {{domxref("RTCPeerConnection.icecandidate_event", "onicecandidate")}}-Ereignis und das {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}}-Versprechen sind beide asynchrone Aufrufe, die separat behandelt werden. Achten Sie darauf, dass sich die Reihenfolge Ihrer Signalisierung nicht ändert! Beispielsweise muss {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} mit den ICE-Kandidaten des Servers nach dem Festlegen der Antwort mit {{domxref("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}} aufgerufen werden.

### Ablauf der Signalisierungstransaktionen

Der Signalisierungsprozess umfasst diesen Nachrichtenaustausch zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess kann natürlich variieren, aber im Allgemeinen gibt es einige Schlüsselpunkte, an denen Signalisierungsnachrichten behandelt werden:

- Der Client jedes Benutzers, der im Webbrowser ausgeführt wird
- Der Webbrowser jedes Benutzers
- Der Signalisierungsserver
- Der Webserver, der den Chatdienst hostet

Stellen Sie sich vor, dass Naomi und Priya eine Diskussion mit der Chat-Software führen, und Naomi entscheidet sich, einen Videoanruf zwischen den beiden zu starten. Hier ist die erwartete Ereignisabfolge:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Laufe dieses Artikels ausführlicher sehen.

### ICE-Kandidatenaustauschprozess

Wenn die ICE-Schicht jedes Peers damit beginnt, Kandidaten zu senden, tritt sie in einen Austausch zwischen den verschiedenen Punkten in der Kette ein, der so aussieht:

![Diagramm des ICE-Kandidatenaustauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie diese von ihrer lokalen ICE-Schicht erhält; es gibt kein abwechselndes Senden oder Bündeln von Kandidaten. Sobald die beiden Peers sich auf einen Kandidaten geeinigt haben, den sie beide für den Austausch der Medien verwenden können, beginnt der Medienfluss. Jeder Peer sendet weiter Kandidaten, bis ihm die Optionen ausgehen, selbst nachdem die Medien bereits zu fließen begonnen haben. Dies geschieht in der Hoffnung, dass sogar bessere Optionen als die zunächst gewählte identifiziert werden.

Wenn sich die Bedingungen ändern (zum Beispiel, wenn sich die Netzwerkverbindung verschlechtert), könnte einer oder beide Peers vorschlagen, zu einer medienauflösung mit niedrigerer Bandbreite zu wechseln, oder zu einem alternativen Codec. Das löst einen neuen Austausch von Kandidaten aus, nach dem ein weiteres Medienformat und/oder Codec-Wechsel stattfinden kann. Im Leitfaden [Codecs used by WebRTC](/de/docs/Web/Media/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs zur Verwendung auswählen.

Optional siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein tieferes Verständnis dafür wünschen, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Beachten Sie, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. All dies wird im Hintergrund erledigt. Unsere Rolle besteht darin, die Kandidaten hin und her zu senden, über den Signalisierungsserver.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist die Nachrichtenverarbeitung. Es ist nicht erforderlich, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Natürlich sollten Sie einen Mechanismus für den Austausch von Signalisierungsinformationen auswählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videotelefonie zu unterstützen.

### Aktualisieren des HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt wird. Dazu sind Videoelemente erforderlich sowie ein Button, um den Anruf zu beenden:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Auflegen</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente und gibt uns die volle Kontrolle über das Seitenlayout durch die Möglichkeit, CSS zu verwenden. Layoutdetails überspringen wir in diesem Leitfaden, aber [sehen Sie sich das CSS auf GitHub an](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css), um zu sehen, wie wir es gehandhabt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für die Selbstansicht, eines für die Verbindung sowie das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` "`received_video`" wird das von dem verbundenen Benutzer empfangene Video anzeigen. Wir geben das `autoplay`-Attribut an, um sicherzustellen, dass das Video, sobald es eintrifft, sofort abgespielt wird. Dies entfernt jegliche Notwendigkeit, die Wiedergabe explizit in unserem Code zu behandeln. Das "`local_video`" `<video>`-Element zeigt eine Vorschau der Kamera des Benutzers, wobei wir das `muted`-Attribut angeben, da wir den lokalen Ton in diesem Vorschaufenster nicht hören müssen.

Schließlich definieren und konfigurieren wir das "`hangup-button`" {{HTMLElement("button")}}, um bei einem Klick die Funktion `hangUpCall()` anzuwenden. Diese Funktion soll den Anruf beenden und dem anderen Peer eine Benachrichtigung über den Signalisierungsserver senden, wobei die Anfrage gestellt wird, dass dieser ebenfalls schließt.

### Der JavaScript-Code

Wir unterteilen diesen Code in funktionale Bereiche, um die Funktionsweise leichter beschreiben zu können. Der Hauptteil dieses Codes befindet sich in der `connect()`-Funktion: Sie öffnet einen {{domxref("WebSocket")}}-Server auf Port 6503 und stellt einen Handler bereit, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code behandelt im Allgemeinen Textchat-Nachrichten wie zuvor.

#### Senden von Nachrichten an den Signalisierungsserver

In unserem gesamten Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Aufgabe zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das Nachrichtenobjekt, das an diese Funktion übergeben wird, wird durch Aufrufen von {{jsxref("JSON.stringify()")}} in einen JSON-String umgewandelt, dann rufen wir die {{domxref("WebSocket.send", "send()")}}-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu senden.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"userlist"`-Nachricht bearbeitet, ruft `handleUserlistMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, der links neben dem Chat-Bereich angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Strings ist, das die Benutzernamen aller verbundenen Benutzer angibt.

```js
function handleUserlistMsg(msg) {
  const listElem = document.querySelector(".userlistbox");

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}, das die Liste der Benutzernamen enthält, in die Variable `listElem` übernommen haben, leeren wir die Liste, indem wir jedes ihrer Kindelemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem einzelne Benutzer hinzugefügt oder entfernt werden, anstatt die gesamte Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber das ist für die Zwecke dieses Beispiels ausreichend.

Dann iterieren wir über das Array von Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element, dann erstellen wir einen neuen Textknoten, der den Benutzernamen enthält, indem wir {{domxref("Document.createTextNode", "createTextNode()")}} verwenden. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Als nächstes setzen wir einen Handler für das {{domxref("Element/click_event", "click")}}-Ereignis für das Listenelement, sodass beim Klicken auf einen Benutzernamen unsere `invite()`-Methode aufgerufen wird, die wir im nächsten Abschnitt betrachten werden.

Schließlich fügen wir das neue Element der `<ul>` hinzu, das alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()`-Funktion als Ereignishandler für dieses {{domxref("Element/click_event", "click")}}-Ereignis aufgerufen:

```js
const mediaConstraints = {
  audio: true, // Wir wollen eine Audiospur
  video: true, // Und wir wollen eine Videospur
};

function invite(evt) {
  if (myPeerConnection) {
    alert("Sie können keinen Anruf starten, da Sie bereits einen offenen haben!");
  } else {
    const clickedUsername = evt.target.textContent;

    if (clickedUsername === myUsername) {
      alert("Ich befürchte, ich kann Ihnen nicht erlauben, mit sich selbst zu sprechen. Das wäre seltsam.");
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

Dies beginnt mit einer grundlegenden Sicherheitsüberprüfung: Ist der Benutzer bereits verbunden? Wenn bereits eine {{domxref("RTCPeerConnection")}} besteht, können sie offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus der {{domxref("Node.textContent", "textContent")}}-Eigenschaft des Ereignisziels abgerufen, und wir überprüfen, ob es sich nicht um denselben Benutzer handelt, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die {{domxref("RTCPeerConnection")}} erstellen und grundlegend konfigurieren wird.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir Zugriff auf die Kamera und das Mikrofon des Benutzers an, indem wir {{domxref("MediaDevices.getUserMedia()")}} aufrufen, das uns über die {{domxref("MediaDevices.getUserMedia")}}-Eigenschaft zur Verfügung steht. Wenn dies erfolgreich ist, wird unser `then`-Handler ausgeführt. Er empfängt als Eingabe ein {{domxref("MediaStream")}}-Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der zulässigen Medieneingaben auf ein bestimmtes Gerät oder eine Menge von Geräten beschränken, indem wir {{domxref("MediaDevices.enumerateDevices", "navigator.mediaDevices.enumerateDevices()")}} aufrufen, um eine Liste der Geräte zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien zu filtern, und dann die ausgewählten Geräte {{domxref("MediaTrackConstraints.deviceId", "deviceId")}}-Werte im `deviceId`-Feld des `mediaConstraints`-Objekts zu verwenden, das an `getUserMedia()` übergeben wird. In der Praxis ist dies fast nie notwendig, da das meiste dieser Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir binden den eingehenden Stream an das lokale Vorschau-{{HTMLElement("video")}}-Element, indem wir die {{domxref("HTMLMediaElement.srcObject", "srcObject")}}-Eigenschaft des Elements setzen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream in unserem lokalen Vorschaurechteck zu spielen.

Wir iterieren dann über die Tracks im Stream und rufen {{domxref("RTCPeerConnection.addTrack", "addTrack()")}} auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn Sie dies für angemessen halten. Medien, die empfangen werden, bevor die ICE-Verhandlung abgeschlossen ist, können verwendet werden, um ICE dabei zu helfen, den besten Konnektivitätsansatz zu bestimmen, und so den Verhandlungsprozess unterstützen.

Beachten Sie, dass es bei nativen Apps, wie einer Telefonanwendung, notwendig ist, mit dem Senden nicht zu beginnen, bevor die Verbindung an beiden Enden akzeptiert wurde, um versehentliches Senden von Video- und/oder Audiodaten zu vermeiden, wenn der Benutzer möglicherweise noch nicht bereit dafür ist.

Sobald Medien an die `RTCPeerConnection` angeschlossen sind, wird ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis an die Verbindung ausgelöst, damit die ICE-Verhandlung gestartet werden kann.

Wenn beim Versuch, den lokalen Medienstream zu erhalten, ein Fehler auftritt, ruft unsere catch-Klausel `handleGetUserMediaError()` auf, die dem Benutzer je nach Bedarf einen entsprechenden Fehler anzeigt.

#### Behandlung von getUserMedia()-Fehlern

Wenn das von `getUserMedia()` zurückgegebene Versprechen zu einem Ausfall kommt, wird unsere Funktion `handleGetUserMediaError()` aufgerufen.

```js
function handleGetUserMediaError(e) {
  switch (e.name) {
    case "NotFoundError":
      alert(
        "Ihr Anruf kann nicht geöffnet werden, da keine Kamera und/oder kein Mikrofon gefunden wurden.",
      );
      break;
    case "SecurityError":
    case "PermissionDeniedError":
      // Tun Sie nichts; dies ist gleichbedeutend damit, dass der Benutzer den Anruf abbricht.
      break;
    default:
      alert(`Fehler beim Öffnen Ihrer Kamera und/oder Ihres Mikrofons: ${e.message}`);
      break;
  }

  closeVideoCall();
}
```

Eine Fehlermeldung wird in allen Fällen angezeigt, außer in einem. In diesem Beispiel ignorieren wir `"SecurityError"`- und `"PermissionDeniedError"`-Ergebnisse und behandeln eine Verweigerung der Erlaubnis zur Verwendung der Medienhardware genauso, als hätte der Benutzer den Anruf abgebrochen.

Unabhängig davon, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die {{domxref("RTCPeerConnection")}} herunterzufahren und alle bereits durch den Prozess der Anrufversuchs gebuchten Ressourcen freizugeben. Dieser Code soll sicher mit teilweise gestarteten Anrufen umgehen.

#### Erstellen der Peer-Verbindung

Die `createPeerConnection()`-Funktion wird von sowohl dem Anrufer als auch dem Angerufenen verwendet, um ihre {{domxref("RTCPeerConnection")}}-Objekte zu erstellen, also ihre jeweiligen Enden der WebRTC-Verbindung. Diese wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene ein Angebot vom Anrufer erhält.

```js
function createPeerConnection() {
  myPeerConnection = new RTCPeerConnection({
    iceServers: [
      // Informationen über ICE-Server - Verwenden Sie hier Ihre eigenen!
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

Beim Verwenden des {{domxref("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}-Konstruktors spezifizieren wir ein Objekt mit Konfigurationsparametern für die Verbindung. Wir verwenden in diesem Beispiel nur einen dieser Parameter: `iceServers`. Dies ist ein Array von Objekten, das STUN- und/oder TURN-Server beschreibt, die die {{Glossary("ICE")}}-Schicht verwendet, um einen geeigneten Weg zwischen dem Anrufer und dem Angerufenen zu ermitteln. Diese Server werden verwendet, um zu bestimmen, welcher Pfad und welche Protokolle bei der Kommunikation zwischen den Peers verwendet werden sollten, selbst wenn diese hinter einer Firewall sind oder {{Glossary("NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN-/TURN-Server verwenden, die Sie besitzen oder zu deren Verwendung Sie eine spezifische Autorisierung haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber solche zu missbrauchen ist unangemessen.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs angibt, unter denen der angegebene Server erreichbar ist. Es kann auch `username`- und `credential`-Werte enthalten, um eine Authentifizierung zu ermöglichen, falls erforderlich.

Nach dem Erstellen der {{domxref("RTCPeerConnection")}} setzen wir Handler für die uns wichtigen Ereignisse.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie behandeln, um irgendetwas mit gestreamten Medien mit WebRTC zu tun. Die restlichen sind nicht unbedingt erforderlich, können aber nützlich sein, und wir werden sie erforschen. Es gibt auch ein paar andere Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier sind Zusammenfassungen der Ereignishandler, die wir implementieren:

- {{domxref("RTCPeerConnection.icecandidate_event", "onicecandidate")}}
  - : Die lokale ICE-Schicht ruft bei Ihrem {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignishandler an, wenn ein ICE-Kandidat an den anderen Peer gesendet werden soll, über Ihren Signalisierungsserver. Weitere Informationen und den Beispielcode finden Sie unter [Versenden von ICE-Kandidaten](#senden_von_ice-kandidaten).
- {{domxref("RTCPeerConnection.track_event", "ontrack")}}
  - : Dieser Handler für das {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignis wird von der lokalen WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dadurch können Sie das eingehende Medium mit einem Element verknüpfen, um es anzuzeigen. Details dazu finden Sie unter [Empfangen neuer Streams](#empfang_neuer_streams).
- {{domxref("RTCPeerConnection.negotiationneeded_event", "onnegotiationneeded")}}
  - : Diese Funktion wird aufgerufen, wann immer die WebRTC-Infrastruktur sie benötigt, um den Sitzungsverhandlungsprozess von vorne zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, damit dieser sich mit uns verbindet. Siehe [Verhandlungen beginnen](#verhandlungen_beginnen), um zu sehen, wie wir das handhaben.
- {{domxref("RTCPeerConnection.removetrack_event", "onremovetrack")}}
  - : Dieses Gegenstück zu `ontrack` wird zum Verwalten des {{domxref("MediaStream/removetrack_event", "removetrack")}}-Ereignisses aufgerufen; es wird an die `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track aus den gesendeten Medien entfernt. Weitere Informationen finden Sie unter [Umgang mit der Entfernung von Tracks](#umgang_mit_der_entfernung_von_tracks).
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "oniceconnectionstatechange")}}
  - : Das {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen des ICE-Verbindungszustands zu informieren. Dies kann Ihnen helfen, zu erfahren, wann die Verbindung gescheitert oder verloren ist. Den Code für dieses Beispiel finden Sie unter [ICE-Verbindungszustand](#ice-verbindungszustand).
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "onicegatheringstatechange")}}
  - : Die ICE-Schicht sendet Ihnen das {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}-Ereignis, wenn sich der Prozess des Sammelns von Kandidaten durch den ICE-Agenten in einem anderen Zustand (z. B. Beginn des Sammelns von Kandidaten oder Abschluss der Verhandlung) ändert. Siehe [ICE-Sammlungsstatus](#ice-sammlungsstatus).
- {{domxref("RTCPeerConnection.signalingstatechange_event", "onsignalingstatechange")}}
  - : Die WebRTC-Infrastruktur sendet Ihnen die Nachricht {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}, wenn sich der Status des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Sehen Sie [Signalisierungszustand](#ice-signalisierungszustand), um unseren Code zu sehen.

#### Verhandlungen beginnen

Sobald der Anrufer sein {{domxref("RTCPeerConnection")}} erstellt hat, einen Medienstream erstellt und seine Tracks zur Verbindung hinzugefügt hat, wie in [Einen Anruf starten](#einen_anruf_starten) dargestellt, wird der Browser ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis an die {{domxref("RTCPeerConnection")}} senden, um anzuzeigen, dass es bereit ist, die Verhandlung mit dem anderen Peer zu beginnen. Hier ist unser Code zum Behandeln des {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignisses:

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
    .catch(reportError);
}
```

Um den Verhandlungsprozess zu starten, müssen wir ein SDP-Angebot an den Peer erstellen und senden, mit dem wir eine Verbindung herstellen möchten. Dieses Angebot enthält eine Liste von unterstützten Konfigurationen für die Verbindung, einschließlich Informationen über den lokalen Medienstream, den wir an das andere Ende des Anrufs senden möchten, und allen von der ICE-Schicht bereits gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir {{domxref("RTCPeerConnection.createOffer", "myPeerConnection.createOffer()")}} aufrufen.

Wenn `createOffer()` erfolgreich ist (das Versprechen erfüllt), übergeben wir die erstellten Angebotsinformationen an {{domxref("RTCPeerConnection.setLocalDescription", "myPeerConnection.setLocalDescription()")}}, das den Verbindungs- und Medienkonfigurationszustand für das Anruferende der Verbindung konfiguriert.

> [!NOTE]
> Technisch gesehen, ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das Versprechen von `setLocalDescription()` erfüllt wird. Dies ist der Zeitpunkt, an dem wir unser Angebot an den anderen Peer senden, indem wir eine neue `"video-offer"`-Nachricht mit der lokalen Beschreibung erstellen (die jetzt mit dem Angebot übereinstimmt), dann senden wir sie über unseren Signalisierungsserver an den Angerufenen. Das Angebot hat die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im anfänglichen `createOffer()` oder in einem der nachfolgenden Fulfillment-Handler, wird ein Fehler durch Aufrufen unserer `reportError()`-Funktion gemeldet.

Sobald der Fullfillment-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent mit dem Senden von {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignissen an die {{domxref("RTCPeerConnection")}}, eines für jede mögliche Konfiguration, die er entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übertragen.

#### Sitzungsverhandlungen

Jetzt, da wir die Verhandlungen mit dem anderen Peer begonnen und ein Angebot übermittelt haben, schauen wir uns an, was auf der Seite des Angerufenen der Verbindung passiert. Der Angerufene empfängt das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Schauen wir uns an, wie der Angerufene die `"video-offer"`-Nachricht handhabt.

##### Behandlung der Einladung

Wenn das Angebot eintrifft, wird die Funktion `handleVideoOfferMsg()` des Angerufenen mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene {{domxref("RTCPeerConnection")}} erstellen und die Tracks mit Audio und Video von ihrem Mikrofon und ihrer Webcam hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, eine Antwort erstellen und senden.

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

Dieser Code ist sehr ähnlich zu dem, was wir in der Funktion `invite()` gesehen haben, zurück in [Einen Anruf starten](#einen_anruf_starten). Er beginnt mit dem Erstellen und Konfigurieren einer {{domxref("RTCPeerConnection")}}-Verbindung mithilfe unserer `createPeerConnection()`-Funktion. Dann nimmt sie das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues {{domxref("RTCSessionDescription")}}-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an {{domxref("RTCPeerConnection.setRemoteDescription", "myPeerConnection.setRemoteDescription()")}} übergeben. Dies stellt das empfangene Angebot als die Beschreibung des entfernten (Anrufer-)Endes der Verbindung dar. Wenn dies erfolgreich ist, startet der Fulfillment-Handler des Versprechens (im `then()`-Klausel) den Prozess des Zugriffs auf die Kamera und das Mikrofon des Angerufenen mit {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}}, fügt die Tracks zur Verbindung hinzu und so weiter, wie wir es zuvor in `invite()` gesehen haben.

Sobald die Antwort erstellt wurde, indem {{domxref("RTCPeerConnection.createAnswer", "myPeerConnection.createAnswer()")}} aufgerufen wird, wird die Beschreibung des lokalen Endes der Verbindung auf den SDP der Antwort gesetzt, indem {{domxref("RTCPeerConnection.setLocalDescription", "myPeerConnection.setLocalDescription()")}} aufgerufen wird, dann wird die Antwort über den Signalisierungsserver an den Anrufer übermittelt, um ihnen mitzuteilen, was die Antwort ist.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` übergeben, das in [Behandlung von getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben wird.

> [!NOTE]
> Wie im Fall des Anrufers beginnt der Browser nach dem Fulfillment-Handler von `setLocalDescription()` mit dem Senden von {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignissen, die der Angerufene behandeln muss, eines für jeden Kandidaten, der an den entfernten Peer übertragen werden muss.

Schließlich bearbeitet der Anrufer die empfangene Antwortnachricht, indem er ein neues {{domxref("RTCSessionDescription")}}-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen darstellt, und es an
{{domxref("RTCPeerConnection.setRemoteDescription", "myPeerConnection.setRemoteDescription()")}} übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Verhandlungsprozess erfordert, dass sich gegenseitig Kandidaten senden, wiederholt, bis sie keine weiteren möglichen Konfigurationsmöglichkeiten mehr haben, um die Medienanforderungen der `RTCPeerConnection` zu unterstützen. Da ICE nichts über Ihren Signalisierungsserver weiß, übernimmt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis.

Ihr {{domxref("RTCPeerConnection.icecandidate_event", "onicecandidate")}}-Handler empfängt ein Ereignis, dessen `candidate`-Eigenschaft den SDP darstellt, der den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Schicht die möglichen Konfigurationen ausgegangen sind, die vorgeschlagen werden könnten). Der Inhalt von `candidate` ist das, was Sie mit Ihrem Signalisierungsserver senden müssen. Hier ist die Implementierung unseres Beispiels:

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

Dieser erstellt ein Objekt, das den Kandidaten enthält, und sendet es dann an den anderen Peer unter Verwendung der zuvor beschriebenen Funktion `sendToServer()` in [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver). Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden muss. Dies ermöglicht es dem Signalisierungsserver, die Nachricht zu routen.
- `candidate`
  - : Der SDP, der den Kandidaten darstellt, den die ICE-Schicht an den anderen Peer übertragen möchte.

Das Format dieser Nachricht (wie bei allem, was Sie bei der Handhabung der Signalisierung tun) liegt vollkommen bei Ihnen, abhängig von Ihren Bedürfnissen; Sie können andere Informationen nach Bedarf bereitstellen.

> [!NOTE]
> Es ist wichtig, sich bewusst zu sein, dass das {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, sodass Sie die Aufgabe der Übertragung der Daten über den von Ihnen gewählten Kanal übernehmen können. Das kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### Empfang von ICE-Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten an den Zielpeer in einer Weise, die er wählt; in unserem Beispiel geschieht dies als JSON-Objekte mit einer `type`-Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere `handleNewICECandidateMsg()`-Funktion wird von unserem Haupt-WebSocket-Code für eingehende Nachrichten aufgerufen, um diese Nachrichten zu behandeln:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(reportError);
}
```

Diese Funktion erstellt ein {{domxref("RTCIceCandidate")}}-Objekt, indem der empfangene SDP an dessen Konstruktor übergeben wird, und übergibt dann den Kandidaten an die ICE-Schicht, indem er ihn an {{domxref("RTCPeerConnection.addIceCandidate", "myPeerConnection.addIceCandidate()")}} übergibt. Dies übergibt den frischen ICE-Kandidaten an die lokale ICE-Schicht. Schließlich ist unsere Rolle im Prozess der Bearbeitung dieses Kandidaten abgeschlossen.

Jeder Peer sendet dem anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, die er für die übertragenen Medien als gangbar einschätzt. An einem bestimmten Punkt vereinbaren die beiden Peers, dass ein bestimmter Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien zu teilen. Es ist wichtig zu beachten, dass die ICE-Verhandlung nicht _stoppt_, sobald Medien fließen. Stattdessen können Kandidaten auch nach dem Beginn des Gesprächs weiterhin ausgetauscht werden, entweder in der Hoffnung, einen besseren Verbindungsmöglichkeit zu finden, oder weil sie bereits in der Übertragung waren, als die Peers ihre Verbindung erfolgreich herstellen konnten.

Darüber hinaus, wenn etwas passiert, das eine Änderung des Streaming-Szenarios verursacht, beginnt die Verhandlung von Neuem, mit dem {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis, das an die {{domxref("RTCPeerConnection")}} gesendet wird, und der gesamte Prozess beginnt erneut, wie zuvor beschrieben. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Änderungen der Netzwerkstatus, wie eine Bandbreitenänderung, der Wechsel von Wi-Fi zu Mobilfunkverbindung oder Ähnliches.
- Wechsel zwischen der Front- und Rückkamera an einem Telefon.
- Eine Änderung der Konfiguration des Streams, wie seiner Auflösung oder Bildrate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden — entweder durch Aufrufen ihrer {{domxref("RTCPeerConnection.addTrack", "addTrack()")}}-Methode oder aufgrund einer Neuaushandlung des Stream-Formats — wird ein {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignis an die `RTCPeerConnection` für jeden zur Verbindung hinzugefügten Track gesendet. Die Nutzung neu hinzugefügter Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiger Bedarf ist das Verbinden der eingehenden Medien mit einem geeigneten HTML-Element. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird dem `"received_video"`-{{HTMLElement("video")}}-Element zugewiesen, und das "Auflegen"-{{HTMLElement("button")}}-Element wird aktiviert, damit der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird das Video, das vom anderen Peer gesendet wird, endlich im lokalen Browserfenster angezeigt!

##### Umgang mit der Entfernung von Tracks

Ihr Code empfängt ein {{domxref("MediaStream/removetrack_event", "removetrack")}}-Ereignis, wenn der entfernte Peer einen Track von der Verbindung entfernt, indem er {{domxref("RTCPeerConnection.removeTrack()")}} aufruft. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code bezieht den eingehenden Video-{{domxref("MediaStream")}} von der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des `"received_video"`-{{HTMLElement("video")}}-Elements und ruft dann die {{domxref("MediaStream.getTracks", "getTracks()")}}-Methode des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn die Länge des Arrays null ist, was bedeutet, dass keine Tracks mehr im Stream vorhanden sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt sicher, dass unsere App in einen Zustand zurückkehrt, in dem sie bereit ist, einen weiteren Anruf zu starten oder zu empfangen. Weitere Informationen dazu finden Sie unter [Beendigung des Anrufs](#beendigung_des_anrufs).

#### Beendigung des Anrufs

Es gibt viele Gründe, warum Anrufe enden können. Ein Anruf könnte abgeschlossen sein, mit einem oder beiden Seiten, die aufgelegt haben. Möglicherweise ist ein Netzwerkfehler aufgetreten, oder ein Benutzer könnte seinen Browser geschlossen haben oder einen Systemabsturz erlebt haben. In jedem Fall müssen alle guten Dinge ein Ende haben.

##### Auflegen

Wenn der Benutzer den "Auflegen"-Button klickt, um den Anruf zu beenden, wird die `hangUpCall()`-Funktion aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen und Ressourcen freizugeben. Anschließend wird eine `"hang-up"`-Nachricht erstellt und an das andere Ende des Anrufs gesendet, damit der andere Peer sich ordentlich herunterfahren kann.

##### Beendigung des Anrufs

Die `closeVideoCall()`-Funktion, unten gezeigt, ist verantwortlich für das Anhalten der Streams, das Aufräumen und das Entsorgen des {{domxref("RTCPeerConnection")}}-Objects:

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

Nachdem wir Verweise auf die beiden {{HTMLElement("video")}}-Elemente erhalten haben, prüfen wir, ob eine WebRTC-Verbindung besteht; wenn dies der Fall ist, fahren wir fort, um den Anruf zu trennen und zu schließen:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass während des Schließprozesses verirrte Ereignishandler ausgelöst werden, die potenziell Fehler verursachen könnten.
2. Bei beiden entfernten und lokalen Videostreams iterieren wir über jeden Track und rufen die {{domxref("MediaStreamTrack.stop()")}}-Methode auf, um jeden zu beenden.
3. Schließen Sie die {{domxref("RTCPeerConnection")}}, indem Sie {{domxref("RTCPeerConnection.close", "myPeerConnection.close()")}} aufrufen.
4. Setzen Sie `myPeerConnection` auf `null`, damit unser Code erfährt, dass kein laufender Anruf mehr besteht; dies ist nützlich, wenn der Benutzer auf einen Namen in der Benutzerliste klickt.

Dann entfernen wir für beide ein- und ausgehenden {{HTMLElement("video")}}-Elemente ihre [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften, indem wir ihre {{domxref("Element.removeAttribute", "removeAttribute()")}}-Methoden verwenden. Dies beendet die Zuordnung der Streams zu den Videoelementen.

Schließlich setzen wir die Eigenschaft {{domxref("HTMLButtonElement.disabled", "disabled")}} auf `true` für den "Auflegen"-Button, um ihn nicht klickbar zu machen, während kein Anruf läuft; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies ermöglicht es dem Benutzer, einen anderen Benutzer anzurufen oder einen eingehenden Anruf zu erhalten.

#### Umgang mit Zustandsänderungen

Es gibt eine Anzahl zusätzlicher Ereignisse, für die Sie Listener setzen können, um Ihren Code über verschiedene Zustandsänderungen zu benachrichtigen. Wir verwenden drei davon: {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}, {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}, und {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}.

##### ICE-Verbindungszustand

{{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}-Ereignisse werden von der ICE-Schicht an die {{domxref("RTCPeerConnection")}} gesendet, wenn sich der Verbindungszustand ändert (z. B. wenn der Anruf vom anderen Ende beendet wird).

```js
function handleICEConnectionStateChangeEvent(event) {
  switch (myPeerConnection.iceConnectionState) {
    case "geschlossen":
    case "gescheitert":
      closeVideoCall();
      break;
  }
}
```

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn sich der ICE-Verbindungszustand in "geschlossen" oder "gescheitert" ändert. Dies behandelt das Herunterfahren unseres Endes der Verbindung, sodass wir bereit sind, einen Anruf erneut zu starten oder zu akzeptieren.

> [!NOTE]
> Wir überwachen den Signalisierungszustand `disconnected` hier nicht, da er vorübergehende Probleme anzeigen und nach einiger Zeit wieder in einen `connected`-Zustand zurückkehren kann. Eine Beobachtung würde den Videoanruf bei jedem temporären Netzwerkproblem beenden.

##### ICE-Signalisierungszustand

In ähnlicher Weise überwachen wir {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}-Ereignisse. Wenn sich der Signalisierungszustand in `geschlossen` ändert, schließen wir ebenfalls den Anruf.

```js
function handleSignalingStateChangeEvent(event) {
  switch (myPeerConnection.signalingState) {
    case "geschlossen":
      closeVideoCall();
      break;
  }
}
```

> [!NOTE]
> Der Signalisierungszustand `geschlossen` wurde zugunsten des `geschlossen`-{{domxref("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} veraltet. Wir überwachen ihn hier, um etwas Abwärtskompatibilität zu gewährleisten.

##### ICE-Sammlungsstatus

{{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}-Ereignisse werden verwendet, um Ihnen mitzuteilen, wann sich der Zustand des ICE-Kandidaten-Sammlungsprozesses ändert. Unser Beispiel verwendet dies für nichts, aber es kann nützlich sein, diese Ereignisse zur Fehlerbehebung zu beobachten, sowie zur Erkennung, wann die Sammlung der Kandidaten abgeschlossen wurde.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Unser Beispiel schreibt hier nur Informationen in die Konsole,
  // aber Sie können tun, was Sie möchten.
}
```

## Nächste Schritte

Sie können jetzt [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), um es in Aktion zu sehen. Öffnen Sie die Webkonsole auf beiden Geräten und schauen Sie sich die protokollierte Ausgabe an - obwohl Sie es nicht im obigen Code sehen, hat der Code auf dem Server (und auf [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) viele Konsolenausgaben, damit Sie die Signalisierungs- und Verbindungsprozesse beobachten können.

Eine weitere offensichtliche Verbesserung wäre das Hinzufügen einer "Klingel"-Funktion, sodass anstatt den Benutzer einfach um Erlaubnis für die Nutzung der Kamera und des Mikrofons zu bitten, ein "Benutzer X ruft an. Möchten Sie antworten?" Eingabeaufforderung zuerst erscheint.

## Siehe auch

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation) Muster

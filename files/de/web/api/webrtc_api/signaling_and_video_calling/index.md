---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-Austausch von Medien zwischen zwei Geräten in einer Peer-to-Peer-Verbindung. Eine Verbindung wird durch einen Entdeckungs- und Aushandlungsprozess hergestellt, der als **Signalisierung** bezeichnet wird. Dieses Tutorial führt Sie durch den Aufbau eines zweiseitigen Videoanrufs.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeit-Austausch von Audio, Video und Daten, mit einer zentralen Einschränkung. Eine Form der Entdeckung und Medienformataushandlung muss stattfinden, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit sich zwei Geräte in verschiedenen Netzwerken finden können. Dieser Prozess wird als **Signalisierung** bezeichnet und erfordert, dass beide Geräte sich mit einem dritten, gemeinsam vereinbarten Server verbinden. Über diesen dritten Server können die beiden Geräte einander finden und Aushandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der zunächst als Teil unserer WebSocket-Dokumentation erstellt wurde (dieser Artikel-Link folgt noch; er ist derzeit nicht online verfügbar), um das Öffnen eines zweiseitigen Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/) und das Beispiel [remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können sich auch [das vollständige Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code jede Verbindung sofort zurücksetzen. Außerdem gibt es ein kurzes Zeitlimit; die Glitch-Instanz dient nur zu kurzen Experimenten und Tests.

## Der Signalisierungsserver

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, ist die Verwendung eines **Signalisierungsservers** erforderlich, um zu klären, wie sie über das Internet verbunden werden können. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu dienen, damit zwei Peers eine Verbindung herstellen können, während die Exposition potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC spezifiziert keinen Transportmechanismus für die Signalisierungsinformationen. Sie können alles verwenden, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um [SDP](/de/docs/Glossary/SDP) handelt, spielt das keine große Rolle: Der Inhalt der Nachricht, die über den Signalisierungsserver geht, ist im Grunde eine Black Box. Wichtig ist, dass wenn das [ICE](/de/docs/Glossary/ICE)-Subsystem Sie anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem übermitteln kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt ist für den Signalisierungsserver völlig irrelevant.

### Vorbereitung des Chat-Servers für die Signalisierung

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um Informationen als [JSON](/de/docs/Glossary/JSON)-Zeichenfolgen zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen zur Bearbeitung von Aufgaben wie das Registrieren neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten.

Um es dem Server zu ermöglichen, Signalisierung und ICE-Aushandlung zu unterstützen, müssen wir den Code aktualisieren. Wir müssen ermöglichen, Nachrichten an einen bestimmten Benutzer zu richten, anstatt sie an alle verbundenen Benutzer zu senden, und sicherstellen, dass nicht erkannte Nachrichtentypen durchgelassen und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Auf diese Weise können wir Signalisierungsnachrichten mit demselben Server senden, anstatt einen separaten Server zu benötigen.

Schauen wir uns die Änderungen an, die wir am Chat-Server vornehmen müssen, um die WebRTC-Signalisierung zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst hinzufügen wir die Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet diese eine JSON-nachrichtierte Zeichenfolge an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen findet, der mit dem angegebenen Benutzernamen übereinstimmt, und sendet die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein JSON-objekt als Zeichenfolge. Wir hätten ihn dazu bringen können, unser ursprüngliches Nachrichtenobjekt zu empfangen, aber in diesem Beispiel ist es effizienter auf diese Weise. Da die Nachricht bereits als Zeichenfolge vorliegt, können wir sie ohne weitere Verarbeitung senden. Jedes Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir seine [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-WebSocket-Nachrichten-Handler zu aktualisieren, um dies zu unterstützen. Dazu gehört eine Änderung am Ende des `"connection"` Nachrichten-Handlers:

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

Dieser Code überprüft nun die ausstehende Nachricht, um zu sehen, ob sie ein `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an sie zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem sie über die Verbindungsliste iteriert und die Nachricht an jeden Benutzer gesendet wird.

Da der vorhandene Code das Senden beliebiger Nachrichtentypen erlaubt, sind keine zusätzlichen Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Benutzer senden und dabei die gewünschten Signalisierungsnachrichten hin und her senden.

Das ist alles, was wir auf der Serverseite ändern müssen. Lassen Sie uns nun das Signalisierungsprotokoll betrachten, das wir implementieren werden.

### Entwerfen des Signalisierungsprotokolls

Nachdem wir einen Mechanismus zum Austausch von Nachrichten erstellt haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen werden. Dies kann auf verschiedene Arten erfolgen; das hier demonstrierte Beispiel ist nur eine Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet zeichenfolgenbasierte JSON-objekte zur Kommunikation mit seinen Clients. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen müssen, mit Inhalten, die spezifizieren, um welche Art von Nachrichten es sich handelt, sowie um alle weiteren Informationen, die erforderlich sind, um die Nachrichten richtig zu verarbeiten.

#### Austauschen von Sitzungsbeschreibungen

Beim Starten des Signalisierungsprozesses wird von dem Benutzer, der den Anruf initiiert, ein **Angebot** erstellt. Dieses Angebot enthält eine Sitzungsbeschreibung im [SDP](/de/docs/Glossary/SDP)-Format und muss an den empfangenden Benutzer, den wir **Angerufener** nennen werden, übermittelt werden. Der Angerufene antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver wird WebSocket verwenden, um Angebotsnachrichten mit dem Typ `"video-offer"` zu übertragen, und Antwortnachrichten mit dem Typ `"video-answer"`. Diese Nachrichten enthalten folgende Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an und umgekehrt).
- `sdp`
  - : Die SDP (Session Description Protocol) Zeichenfolge, die das lokale Ende der Verbindung aus Sicht des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch immer noch nicht, wie sie die Mediendaten selbst übertragen können. Hier kommt [Interactive Connectivity Establishment (ICE)](/de/docs/Glossary/ICE) ins Spiel.

### Austauschen von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer zur Kommunikation verwenden kann. Jeder Peer sendet die Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, auch wenn Medien bereits zu streamen begonnen haben.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Vorgang zum Hinzufügen einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich über einen kompatiblen Kandidaten einig sind, verwenden beide Peers das SDP dieses Kandidaten, um eine Verbindung herzustellen und zu öffnen, über die dann Medien zu fließen beginnen. Wenn sie sich später auf einen besseren (in der Regel leistungsfähigeren) Kandidaten einigen, kann der Stream nach Bedarf das Format ändern.

Obwohl derzeit nicht unterstützt, könnte theoretisch ein Kandidat, der empfangen wird, nachdem Medien bereits fließen, auch verwendet werden, um auf eine Verbindung mit niedrigerer Bandbreite herunterzustufen, falls erforderlich.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidatennachricht enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Aushandlung stattfindet; der Server leitet die Nachricht nur an diesen Benutzer weiter.
- `candidate`
  - : Die SDP-Kandidatenzeichenfolge, die die vorgeschlagene Verbindungsmethode beschreibt. Sie müssen normalerweise nicht auf den Inhalt dieser Zeichenfolge schauen. Alles, was Ihr Code tun muss, ist, sie über den Signalisierungsserver an den entfernten Peer weiterzuleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (z.B. ob die angegebene IP die des Peers selbst oder eines Relay-Servers ist) sowie andere Informationen vor, die erforderlich sind, um die beiden Computer miteinander zu verbinden. Dazu gehören NAT oder sonstige Netzwerkkomplexität.

> [!NOTE]
> Das Wichtigste ist Folgendes: Sie müssen während der ICE-Aushandlung nur die ausgehenden Kandidaten vom ICE-Layer akzeptieren und sie über die Signalisierungsverbindung an den anderen Peer senden, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, und ICE-Kandidaten-Nachrichten vom Signalisierungsserver empfangen (wenn die `"new-ice-candidate"` Nachricht eingegangen ist) und sie an Ihr ICE-Layer weitergeben, indem Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Das ist alles.
>
> Der Inhalt des SDP ist für Sie im Wesentlichen in allen Fällen irrelevant. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Das führt zu Verrücktheit.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist, die Nachrichten zu senden, die angefordert werden. Ihr Workflow kann auch Anmelde-/Authentifizierungsfunktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Versprechen sind beide asynchrone Aufrufe, die getrennt behandelt werden. Stellen Sie sicher, dass Ihre Signalisierung nicht die Reihenfolge ändert! Beispielsweise muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Setzen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Ablauf der Signalisierungstransaktion

Der Signalisierungsprozess umfasst diesen Austausch von Nachrichten zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es einige wichtige Punkte, an denen Signalisierungsnachrichten gehandhabt werden:

- Jeder Benutzer-Client, der in einem Webbrowser läuft
- Jeder Webbrowser des Benutzers
- Der Signalisierungsserver
- Der Webserver, der den Chatdienst hostet

Stellen Sie sich vor, Naomi und Priya führen eine Unterhaltung mit der Chat-Software, und Naomi entscheidet sich, einen Videoanruf zwischen ihnen zu öffnen. Hier ist die erwartete Abfolge der Ereignisse:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Verlauf dieses Artikels genauer betrachten.

### ICE-Kandidaten-Austauschprozess

Wenn das ICE-Layer jedes Peers beginnt, Kandidaten zu senden, tritt dies in einen Austausch zwischen den verschiedenen Punkten in der Kette ein, der folgendermaßen aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihren lokalen ICE-Layern erhält; es gibt kein Abwechseln oder Bündeln von Kandidaten. Sobald die beiden Peers sich auf einen Kandidaten einigen, den sie beide nutzen können, um die Medien auszutauschen, beginnt das Medium zu fließen. Jeder Peer setzt das Senden von Kandidaten fort, bis ihm die Optionen ausgehen, selbst nachdem das Medium bereits zu fließen begonnen hat. Dies geschieht in der Hoffnung, bessere Optionen als die ursprünglich ausgewählten zu identifizieren.

Wenn sich die Bedingungen ändern (z.B. Verschlechterung der Netzwerkverbindung), könnte ein oder beide Peers vorschlagen, zu einer niedrigeren Medienauflösung zu wechseln oder zu einem alternativen Codec. Das löst einen neuen Austausch von Kandidaten aus, nach dem ein weiteres Medienformat und/oder ein Codec-Wechsel stattfinden kann. Im Leitfaden [von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die von WebRTC erfordert werden, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs auswählen.

Optional, siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiating Candidate Pairs and Concluding ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein tieferes Verständnis dafür bekommen wollen, wie dieser Prozess innerhalb des ICE-Layers abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und das Medium zu fließen beginnt, sobald das ICE-Layer zufrieden ist. Das alles wird hinter den Kulissen erledigt. Unsere Rolle besteht darin, die Kandidaten über den Signalisierungsserver hin und her zu senden.

## Die Client-Anwendung

Der Kern jedes Signalisierungsvorgangs ist seine Nachrichtenbehandlung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Sie sollten natürlich einen Mechanismus für den Austausch von Signalisierungsinformationen wählen, der für Ihre Anwendung geeignet ist.

Lassen Sie uns den Chat-Client aktualisieren, um Videoanrufe zu unterstützen.

### Aktualisieren des HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt wird. Dies erfordert Videoelemente und eine Schaltfläche zum Auflegen des Anrufs:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, wodurch wir die volle Kontrolle über das Seitenlayout durch die Verwendung von CSS haben. Wir werden auf Layoutdetails in diesem Leitfaden verzichten, aber [schauen Sie sich das CSS auf GitHub an](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css), um zu sehen, wie wir es gehandhabt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für die eigene Ansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit `id` `received_video` wird das von dem verbundenen Benutzer empfangene Video anzeigen. Wir spezifizieren das `autoplay`-Attribut, um sicherzustellen, dass das Video, sobald es startet, sofort abgespielt wird. Dies entfernt jeglichen Bedarf, die Wiedergabe explizit in unserem Code zu behandeln. Das `local_video` `<video>`-Element zeigt eine Vorschau der Kamera des Benutzers; wir geben das `muted`-Attribut an, da wir keine lokalen Audiodaten in diesem Vorschaubereich hören müssen.

Abschließend definieren und konfigurieren wir die `hangup-button` {{HTMLElement("button")}}, um die Verbindung zu trennen, indem wir sie zunächst deaktivieren (indem wir dies als Standard festlegen, wenn kein Anruf verbunden ist) und die Funktion `hangUpCall()` beim Klicken anwenden. Die Rolle dieser Funktion ist es, den Anruf zu beenden und dem anderen Peer eine Benachrichtigung über den Signalisierungsserver zu senden, um ihn zu bitten, ebenfalls zu schließen.

### Der JavaScript-Code

Wir werden diesen Code in Funktionsbereiche unterteilen, um besser zu erklären, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der `connect()`-Funktion: Sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und stellt einen Handler bereit, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code behandelt im Allgemeinen Text-Chat-Nachrichten wie zuvor.

#### Nachrichten an den Signalisierungsserver senden

Während unseres Codes rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das in diese Funktion übergebene Nachrichtenobjekt wird durch Aufrufen von {{jsxref("JSON.stringify()")}} in eine JSON-Zeichenfolge umgewandelt, dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übermitteln.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"userlist"` Nachricht behandelt, ruft `handleUserlistMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links im Chatfenster angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Zeichenfolgen enthält, das die Benutzernamen aller verbundenen Benutzer angibt.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}} erhalten haben, das die Liste der Benutzernamen enthält, löschen wir die Liste, indem wir jedes ihrer Kindelemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem Benutzer einzeln hinzugefügt und entfernt werden, anstatt die ganze Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber dies ist für die Zwecke dieses Beispiels ausreichend.

Dann iterieren wir mit {{jsxref("Array.forEach", "forEach()")}} über das Array der Benutzernamen. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element, dann erstellen wir einen neuen Textknoten, der den Benutzernamen durch [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) enthält. Dieser Textknoten wird dem `<li>`-Element als Kind hinzugefügt. Anschließend setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf das Listenelement, dass, beim Klicken auf einen Benutzernamen, unsere `invite()`-Methode aufgerufen wird, die wir im nächsten Abschnitt betrachten werden.

Schließlich fügen wir das neue Element dem `<ul>` hinzu, das alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()`-Funktion als Ereignishandler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einem grundlegenden Sanity-Check: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen, und wir überprüfen, ob es sich nicht um den gleichen Benutzer handelt, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen wollen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und grundlegend konfiguriert.

Nachdem die `RTCPeerConnection` erstellt wurde, fordern wir den Zugriff auf die Kamera und das Mikrofon des Benutzers an, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, das uns über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft zur Verfügung steht. Wenn dies erfolgreich ist und das zurückgegebene Versprechen erfüllt wird, wird unser `then`-Handler ausgeführt. Er erhält als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der erlaubten Medieneingänge auf ein spezifisches Gerät oder eine Gruppe von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der Geräte zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien filtern und dann die `deviceId`-Werte der ausgewählten Geräte im `deviceId`-Feld des `mediaConstraints`-Objekts verwenden, das an `getUserMedia()` übergeben wird. In der Praxis ist dies selten bis nie notwendig, da die meiste Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir fügen den eingehenden Stream dem lokalen Vorschaubild im {{HTMLElement("video")}}-Element hinzu, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements festlegen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream in unserem lokalen Vorschaubereich zu spielen.

Dann iterieren wir über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track der `RTCPeerConnection` hinzuzufügen. Selbst wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn es Ihnen angemessen erscheint. Medien, die empfangen werden, bevor die ICE-Aushandlung abgeschlossen ist, können helfen, ICE bei der Bestimmung des besten Verbindungsansatzes zu unterstützen, und so den Aushandlungsprozess unterstützen.

Beachten Sie, dass Sie für native Apps, wie etwa eine Telefonanwendung, das Senden nicht beginnen sollten, bis die Verbindung mindestens an beiden Enden akzeptiert wurde, um versehentliches Senden von Video- und/oder Audiodaten zu vermeiden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt sind, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die Verbindung ausgelöst, um ICE-Aushandlung zu starten.

Falls beim Versuch, den lokalen Medienstream zu erhalten, ein Fehler auftritt, wird unsere Catch-Klausel `handleGetUserMediaError()` aufrufen, die dem Benutzer erforderlichenfalls eine entsprechende Fehlermeldung anzeigt.

#### Umgang mit getUserMedia()-Fehlern

Falls das von `getUserMedia()` zurückgegebene Versprechen fehlschlägt, wird unsere Funktion `handleGetUserMediaError()` ausgeführt.

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

In allen außer einem Fall wird eine Fehlermeldung angezeigt. In diesem Beispiel ignorieren wir die Ergebnisse `"SecurityError"` und `"PermissionDeniedError"`, indem wir die Weigerung, die Berechtigung zur Verwendung der Medienhardware zu erteilen, genauso behandeln wie das Stornieren des Anrufs durch den Benutzer.

Unabhängig davon, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere Funktion `closeVideoCall()` auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu schließen und alle Ressourcen freizugeben, die bereits durch den Anrufversuch zugewiesen wurden. Dieser Code ist darauf ausgelegt, teilweise gestartete Anrufe sicher zu behandeln.

#### Erstellen der Peer-Verbindung

Die `createPeerConnection()`-Funktion wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte und ihre jeweiligen Enden der WebRTC-Verbindung zu konstruieren. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene ein Angebotsnachricht vom Anrufer erhält.

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

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors spezifizieren wir ein Objekt, das Konfigurationsparameter für die Verbindung bereitstellt. In diesem Beispiel verwenden wir nur einen: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server für das [ICE](/de/docs/Glossary/ICE)-Layer beschreiben, die bei dem Versuch verwendet werden, eine Route zwischen Anrufer und Angerufenem zu erstellen. Diese Server werden verwendet, um die beste Route und Protokolle zu bestimmen, die bei der Kommunikation zwischen den Peers verwendet werden sollen, selbst wenn sie hinter einer Firewall sind oder [NAT](/de/docs/Glossary/NAT) verwenden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie besitzen oder zu deren Verwendung Sie eine spezifische Autorisierung haben. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber deren Missbrauch ist nicht die feine Art.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs bereitstellt, unter denen der angegebene Server erreicht werden kann. Es kann auch `username` und `credential`-Werte bereitstellen, um eine Authentifizierung zu ermöglichen, falls erforderlich.

Nach der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) richten wir Handler für die Ereignisse ein, die für uns von Bedeutung sind.

Die ersten drei dieser Ereignishandler sind erforderlich; sie müssen für alles, was gestreamte Medien mit WebRTC betrifft, behandelt werden. Die restlichen sind nicht unbedingt notwendig, können jedoch nützlich sein, und wir werden sie erkunden. Es gibt noch ein paar andere Ereignisse, die in diesem Beispiel nicht verwendet werden. Hier ist eine Zusammenfassung der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Der lokale ICE-Layer ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignishandler auf, wenn er von Ihnen verlangt, einen ICE-Kandidaten an den anderen Peer über Ihren Signalisierungsserver zu senden. Siehe [Sending ICE candidates](#ice-kandidaten_senden) für weitere Informationen und um den Code für dieses Beispiel zu sehen.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis wird von der lokalen WebRTC-Ebene aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies ermöglicht es Ihnen, die eingehenden Medien mit einem Element zu verbinden, um sie anzuzeigen, zum Beispiel. Siehe [Receiving new streams](#empfang_neuer_streams) für Details.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wann immer die WebRTC-Infrastruktur von Ihnen verlangt, den Sitzungsverhandlungsprozess neu zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, in dem er aufgefordert wird, sich mit uns zu verbinden. Siehe [Starting negotiation](#aushandlung_starten), um zu sehen, wie wir dies handhaben.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Das Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignis zu behandeln; es wird zum `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track aus den gesendeten Medien entfernt. Siehe [Handling the removal of tracks](#umgang_mit_dem_entfernen_von_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) Ereignis wird von der ICE-Ebene gesendet, um Ihnen über Änderungen des Zustandes der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wenn die Verbindung fehlgeschlagen ist oder verloren wurde. Wir werden uns den Code für dieses Beispiel in [ICE connection state](#ice_connection_state) unten ansehen.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Ebene sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis, wenn sich der Prozess der Sammlung von Kandidaten durch den ICE-Agenten von einem Zustand zum anderen ändert (wie zum Beispiel der Beginn der Sammlung von Kandidaten oder der Abschluss der Aushandlung). Siehe [ICE gathering state](#ice_gathering_state) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event) Nachricht, wenn sich der Zustand des Signalisierungsprozesses ändert (oder ob sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signaling state](#ice_signaling_state), um unseren Code zu sehen.

#### Aushandlung starten

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt hat, einen Medienstream erstellt und seine Tracks zur Verbindung hinzugefügt hat, wie in [Einen Anruf starten](#einen_anruf_starten) gezeigt, wird der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) senden, um anzugeben, dass sie bereit ist, Verhandlungen mit dem anderen Peer zu beginnen. Hier ist unser Code für die Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) Ereignisses:

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

Um den Aushandlungsprozess zu starten, müssen wir ein SDP-Angebot an den Peer senden, mit dem wir verbinden möchten. Dieses Angebot enthält eine Liste der unterstützten Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstream, den wir lokal zur Verbindung hinzugefügt haben (also das Video, das wir an das andere Ende des Anrufs senden wollen), und alle ICE-Kandidaten, die bereits vom ICE-Layer gesammelt wurden. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (d.h. das Versprechen erfüllt), übergeben wir die erstellten Angebotsinformationen in [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), das die Zustandsverbindung und Medienkonfiguration auf dem Anruferende konfiguriert.

> [!NOTE]
> Technisch gesehen ist die von `createOffer()` zurückgegebene Zeichenfolge ein {{RFC(3264)}} Angebot.

Wir wissen, dass die Beschreibung gültig ist und gesetzt wurde, wenn das von `setLocalDescription()` zurückgegebene Versprechen erfüllt ist. Zu diesem Zeitpunkt senden wir unser Angebot an den anderen Peer, indem wir eine neue `"video-offer"` Nachricht erstellen, die die lokale Beschreibung enthält (jetzt dasselbe wie das Angebot), und sie über unseren Signalisierungsserver an den Angerufenen senden. Das Angebot hat die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Die SDP-Zeichenfolge, die das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im initialen `createOffer()` oder in einem der nachfolgenden Erfüllungs-Handler, wird ein Fehler gemeldet, indem unsere `window.reportError()`-Funktion aufgerufen wird.

Sobald der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potenzielle Konfiguration, die er entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übertragen.

#### Sitzungsverhandlung

Nun, da wir Verhandlungen mit dem anderen Peer begonnen und ein Angebot übermittelt haben, schauen wir uns an, was auf der Seite des Angerufenen passiert. Der Angerufene empfängt das Angebot und ruft die `handleVideoOfferMsg()`-Funktion auf, um es zu verarbeiten. Schauen wir uns an, wie der Angerufene die `"video-offer"`-Nachricht behandelt.

##### Die Einladung bearbeiten

Wenn das Angebot eintrifft, wird die `handleVideoOfferMsg()`-Funktion des Angerufenen mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge erledigen. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks mit dem Audio und Video aus ihrem Mikrofon und ihrer Webcam hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, um ihre Antwort zu erstellen und zu senden.

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

Dieser Code ist dem, was wir in der Funktion `invite()` gesehen haben, ähnlich, wie in [Einen Anruf starten](#einen_anruf_starten). Er beginnt mit der Erstellung und Basiskonfiguration einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mit unserer Funktion `createPeerConnection()`. Anschließend nimmt er das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies stellt das empfangene Angebot als Beschreibung der entfernten (Anrufer-)Verbindung ein. Wenn dies erfolgreich ist, der Versprechenerfüllungs-Handler (im `then()`-Abschnitt) startet den Prozess, Zugang zur Kamera und zum Mikrofon des Angerufenen mit [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) zu erhalten, die Tracks zur Verbindung hinzuzufügen usw., wie wir zuvor in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Ende der Verbindung mit dem SDP der Antwort festgelegt, indem [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) aufgerufen wird, und dann wird die Antwort über den Signalisierungsserver an den Anrufer übertragen, um ihm mitzuteilen, was die Antwort ist.

Alle Fehler werden aufgefangen und an `handleGetUserMediaError()`, wie in [Umgang mit getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben, weitergegeben.

> [!NOTE]
> Wie bei dem Anrufer beginnen, nachdem der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, vom Browser [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignisse ausgelöst zu werden, die der Angerufene behandeln muss, eines für jeden Kandidaten, der an den entfernten Peer übertragen werden muss.

Schließlich behandelt der Anrufer die Antwortnachricht, die er durch Erstellung eines neuen [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts, das die Sitzungsbeschreibung des Angerufenen darstellt, und übergibt sie an
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### ICE-Kandidaten senden

Der ICE-Austauschprozess beinhaltet, dass jeder Peer Kandidaten an den anderen sendet, wiederholt, bis ihm die möglichen Konfigurationen ausgehen, die er unterstützen kann, um die Medienbedürfnisse der `RTCPeerConnection` zu erfüllen. Da ICE nichts von Ihrem Signalisierungsserver weiß, übernimmt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler empfängt ein Ereignis, dessen `candidate`-Eigenschaft die SDP ist, die den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass dem ICE-Layer die potenziellen Konfigurationen ausgegangen sind). Der Inhalt des `candidate` ist das, was Sie mithilfe Ihres Signalisierungsservers übertragen müssen. Hier ist unsere Implementierung des Beispiels:

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

Dies erstellt ein Objekt mit dem Kandidaten und sendet es dann an den anderen Peer mit der zuvor in [Nachrichten an den Signalisierungsserver senden](#nachrichten_an_den_signalisierungsserver_senden) beschriebenen `sendToServer()`-Funktion. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat übermittelt werden muss. Dadurch kann der Signalisierungsserver die Nachricht weiterleiten.
- `candidate`
  - : Das SDP, das den Kandidaten beschreibt, den das ICE-Layer an den anderen Peer senden möchte.

Das Format dieser Nachricht (wie bei allem, was Sie bei der Signalisierungsbehandlung tun) hängt ganz von Ihnen und Ihren Anforderungen ab; Sie können je nach Bedarf andere Informationen bereitstellen.

> [!NOTE]
> Es ist wichtig zu beachten, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe übernehmen, die Daten über einen von Ihnen gewählten Kanal zu übertragen. Dies kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### ICE-Kandidaten empfangen

Der Signalisierungsserver übermittelt jeden ICE-Kandidaten an den Ziel-Peer über die von ihm gewählte Methode; in unserem Beispiel werden diese als JSON-Objekte mit einer `type`-Eigenschaft, die die Zeichenfolge `"new-ice-candidate"` enthält, übermittelt. Unsere `handleNewICECandidateMsg()`-Funktion wird von unserem Haupt-WebSocket-Eingangsnachrichtencode aufgerufen, um diese Nachrichten zu bearbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion konstruiert ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem das empfangene SDP in dessen Konstruktor übergeben wird, und übergibt den Kandidaten dann an das ICE-Layer, indem sie an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergeben wird. Dies übergibt den neuen ICE-Kandidaten an das lokale ICE-Layer, und schließlich ist unsere Rolle im Umgang mit diesem Kandidaten abgeschlossen.

Jeder Peer sendet dem anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, die er für die Medien, die ausgetauscht werden, als geeignet erachtet. An einem bestimmten Punkt stimmen die beiden Peers zu, dass ein gegebener Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien auszutauschen. Es ist jedoch wichtig zu beachten, dass die ICE-Aushandlung nicht aufhört, sobald Medien fließen. Stattdessen können auch nach dem Beginn des Gesprächs weiterhin Kandidaten ausgetauscht werden, entweder, während versucht wird, eine bessere Verbindungsmethode zu finden, oder weil sie bereits im Transport waren, als die Peers erfolgreich ihre Verbindung hergestellt haben.

Darüber hinaus, wenn etwas passiert, das ein Change im Streaming-Szenario verursacht, beginnt die Aushandlung erneut, mit dem [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie zuvor beschrieben. Dies kann in einer Vielzahl von Situationen vorkommen, einschließlich:

- Änderungen im Netzwerkstatus, zum Beispiel eine Bandbreitenänderung, der Wechsel von WLAN zu Mobilfunknetz oder ähnliches.
- Wechsel zwischen der vorderen und hinteren Kamera auf einem Telefon.
- Eine Änderung der Konfiguration des Streams, zum Beispiel seiner Auflösung oder Bildfrequenz.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden - entweder durch Aufrufen ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder aufgrund einer Neuaushandlung des Stream-Formats - wird für jeden zur Verbindung hinzugefügten Track ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) Ereignis an die `RTCPeerConnection` gesendet. Die Nutzung neu hinzugefügter Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Eine häufige Anforderung besteht darin, die eingehenden Medien mit einem passenden HTML-Element zu verbinden. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird dem `"received_video"` {{HTMLElement("video")}}-Element hinzugefügt, und die "Auflegen"-{{HTMLElement("button")}} wird aktiviert, damit der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird endlich das von dem anderen Peer gesendete Video im lokalen Browserfenster angezeigt!

##### Umgang mit dem Entfernen von Tracks

Ihr Code empfängt ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignis, wenn der entfernte Peer einen Track aus der Verbindung entfernt, indem er [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aufruft. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code holt den eingehenden Video-`MediaStream` vom `"received_video"` {{HTMLElement("video")}}-Element `srcObject`-Eigenschaft, dann ruft er die `getTracks()` Methode des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn das Array die Länge null hat, was bedeutet, dass keine Tracks mehr im Stream vorhanden sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unser Anwendung ordnungsgemäß in einen Zustand zurück, in dem sie bereit ist, einen weiteren Anruf zu starten oder zu empfangen. Siehe [Ende des Anrufs](#das_beenden_des_anrufs), um zu erfahren, wie `closeVideoCall()` funktioniert.

#### Ende des Anrufs

Es gibt viele Gründe, warum Anrufe enden können. Ein Anruf könnte beendet worden sein, indem einer oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer könnte seinen Browser geschlossen oder einen Systemabsturz gehabt haben. In jedem Fall müssen alle guten Dinge ein Ende finden.

##### Auflegen

Wenn der Benutzer auf die "Auflegen"-Schaltfläche klickt, um den Anruf zu beenden, wird die `hangUpCall()`-Funktion aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen, zurückzusetzen und Ressourcen freizugeben. Dann wird eine `"hang-up"` Nachricht erstellt und an das andere Ende des Anrufs gesendet, um den anderen Peer aufzufordern, sich ordentlich selbst herunterzufahren.

##### Das Beenden des Anrufs

Die `closeVideoCall()`-Funktion, die unten gezeigt wird, ist dafür verantwortlich, die Streams zu stoppen, aufzuräumen und das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt zu entsorgen:

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

Nachdem Referenzen auf die beiden {{HTMLElement("video")}}-Elemente abgerufen wurden, prüfen wir, ob eine WebRTC-Verbindung vorhanden ist. Wenn dies der Fall ist, fahren wir mit der Trennung und dem Schließen des Anrufs fort:

1. Alle den Ereignishandler werden entfernt. Dies verhindert, dass während des Prozesses des Schließens der Verbindung versehentlich Ereignisbehandler ausgelöst werden, die möglicherweise Fehler verursachen.
2. Für sowohl entfernte als auch lokale Videostreams iterieren wir über jeden Track und rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode auf, um jeden zu schließen.
3. Schließen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufgerufen wird.
4. Setzen Sie `myPeerConnection` auf null, um sicherzustellen, dass unser Code lernt, dass kein laufender Anruf stattfindet; das ist nützlich, wenn der Benutzer auf einen Namen in der Benutz...

---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-Medienaustausch zwischen zwei Geräten über eine Peer-to-Peer-Verbindung. Eine Verbindung wird durch einen Entdeckungs- und Aushandlungsprozess namens **Signalisierung** hergestellt. Dieses Tutorial wird Sie durch den Aufbau eines Zwei-Wege-Videoanrufs führen.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, jedoch mit einem zentralen Vorbehalt. Eine Form der Entdeckungs- und Medieneformat-Aushandlung muss stattfinden, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in unterschiedlichen Netzwerken einander finden können. Dieser Prozess wird als **Signalisierung** bezeichnet und erfordert, dass beide Geräte sich mit einem dritten, gemeinsam vereinbarten Server verbinden. Über diesen dritten Server können die beiden Geräte einander finden und Aushandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der erstmals im Rahmen unserer WebSocket-Dokumentation erstellt wurde (dieser Artikellink ist noch nicht online), um die Eröffnung eines Zwei-Wege-Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), und Sie können [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können auch [das vollständige Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort jede Verbindung zurücksetzen. Außerdem gibt es eine kurze Timeout-Periode; die Glitch-Instanz ist nur für schnelle Experimente und Tests gedacht.

## Der Signalisierungsserver

Um eine WebRTC-Verbindung zwischen zwei Geräten herzustellen, ist die Verwendung eines **Signalisierungsservers** erforderlich, um zu klären, wie sie über das Internet verbunden werden können. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu fungieren, um zwei Peers zu ermöglichen, eine Verbindung herzustellen, während die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC spezifiziert keinen Transportmechanismus für die Signalisierungsinformationen. Sie können alles verwenden, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Signalisierungsdateninhalt nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, spielt das keine große Rolle: der Inhalt der Nachricht, die über den Signalisierungsserver geht, ist im Wesentlichen eine Black Box. Entscheidend ist, dass, wenn das {{Glossary("ICE", "ICE")}} Subsystem Sie anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun, und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem weiterleiten kann. Sie müssen lediglich die Informationen hin und her leiten. Der Inhalt spielt für den Signalisierungsserver überhaupt keine Rolle.

### Den Chatserver für die Signalisierung vorbereiten

Unser [Chatserver](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben wie die Registrierung neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten zu verwalten.

Um dem Server die Unterstützung der Signalisierung und ICE-Aushandlung zu ermöglichen, müssen wir den Code aktualisieren. Wir müssen das Senden von Nachrichten an einen bestimmten Benutzer anstelle des Broadcastings an alle verbundenen Benutzer ermöglichen und sicherstellen, dass unbekannte Nachrichtentypen durchgeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Dadurch können wir Signalisierungsnachrichten über denselben Server senden, ohne einen separaten Server zu benötigen.

Sehen wir uns die Änderungen an, die wir am Chatserver vornehmen müssen, um die WebRTC-Signalisierung zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst ist die Hinzufügung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet diese eine zeichenfolgenformatierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen findet, der mit dem angegebenen Benutzernamen übereinstimmt, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein zeichenfolgenformatierter JSON-Objekt. Wir könnten es so gestalten, dass es unser ursprüngliches Nachrichtenobjekt empfängt, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits in eine Zeichenkette umgewandelt wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach die [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-Handler für WebSocket-Nachrichten zu aktualisieren, um dies zu unterstützen. Das beinhaltet eine Änderung am Ende des Handlers für die `"connection"`-Nachricht:

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

Dieser Code prüft jetzt die ausstehende Nachricht, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an ihn zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem die Verbindungsliste durchlaufen wird und die Nachricht an jeden Benutzer gesendet wird.

Da der vorhandene Code das Senden beliebiger Nachrichtentypen ermöglicht, sind keine weiteren Änderungen erforderlich. Unsere Clients können nun Nachrichten unbekannter Typen an einen bestimmten Benutzer senden und so Signalisierungsnachrichten nach Bedarf hin und her senden.

Das ist alles, was wir auf der Serverseite ändern müssen. Betrachten wir nun das Signalisierungsprotokoll, das wir implementieren werden.

### Das Signalisierungsprotokoll entwerfen

Jetzt, da wir einen Mechanismus zum Austausch von Nachrichten eingerichtet haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen. Dies kann auf verschiedene Arten geschehen; das hier gezeigte ist nur eine Möglichkeit, Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet JSON-Objekte im Zeichenkettenformat, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen werden, mit Inhalten, die spezifizieren, welche Art von Nachrichten sie sind und alle zusätzlichen Informationen, die erforderlich sind, um die Nachrichten ordnungsgemäß zu behandeln.

#### Sitzungsbeschreibungen austauschen

Beim Starten des Signalisierungsprozesses wird von dem Benutzer, der den Anruf initiiert, ein **Angebot** erstellt. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss an den empfangenden Benutzer, den wir **callee** nennen, übermittelt werden. Der Callee antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver wird WebSocket verwenden, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, spezifiziert dies den Callee und umgekehrt).
- `sdp`
  - : Der SDP (Session Description Protocol)-String, der das lokale Ende der Verbindung aus Sicht des Absenders (oder das entfernte Ende der Verbindung aus Sicht des Empfängers) beschreibt.

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie die Mediendaten selbst übertragen werden können. Hier kommt die {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### ICE-Kandidaten austauschen

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen zu verhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer zur Kommunikation verwenden kann. Jeder Peer sendet Kandidaten in der Reihenfolge ihrer Entdeckung und sendet weiter Kandidaten, bis ihm die Vorschläge ausgehen, auch wenn die Medienübertragung bereits begonnen hat.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen gegenseitig kompatiblen Kandidaten geeinigt haben, wird das SDP dieses Kandidaten von jedem Peer verwendet, um eine Verbindung zu erstellen und zu öffnen, über die dann die Medienübertragung beginnt. Wenn sie sich später auf einen besseren (in der Regel leistungsstärkeren) Kandidaten einigen, kann sich das Format des Streams nach Bedarf ändern.

Obwohl derzeit nicht unterstützt, könnte theoretisch ein Kandidat, der nach Beginn der Medienübertragung empfangen wird, auch verwendet werden, um bei Bedarf auf eine Verbindung mit niedrigerer Bandbreite umzuschalten.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signalisierungsserver an den Remote-Peer gesendet wird. Jede Kandidatennachricht enthält folgende Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Aushandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidatenstring, der die vorgeschlagene Verbindungsmethode beschreibt. Normalerweise müssen Sie sich den Inhalt dieses Strings nicht ansehen. Alles, was Ihr Code tun muss, ist, ihn über den Signalisierungsserver an den Remote-Peer weiterzuleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (z.B. ob die angegebene IP der Peer selbst oder ein Relay-Server ist) sowie andere Informationen vor, die notwendig sind, um die beiden Computer miteinander zu verbinden. Dies schließt NAT oder andere Netzwerkkomplexitäten ein.

> [!NOTE]
> Wichtig ist: Das Einzige, wofür Ihr Code während der ICE-Aushandlung verantwortlich ist, besteht darin, ausgehende Kandidaten von der ICE-Schicht zu akzeptieren und sie über die Signalisierungsverbindung an den anderen Peer zu senden, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, und ICE-Kandidatennachrichten vom Signalisierungsserver zu empfangen (wenn die `"new-ice-candidate"`-Nachricht empfangen wird) und diese an Ihre ICE-Schicht zu übergeben, indem Sie [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) aufrufen. Das ist alles.
>
> Die Inhalte der SDP sind für Sie in fast allen Fällen irrelevant. Widerstehen Sie der Versuchung, es komplizierter zu machen, bis Sie wirklich wissen, was Sie tun. Dieser Weg führt ins Chaos.

Ihr Signalisierungsserver muss jetzt nur noch die Nachrichten senden, zu denen er aufgefordert wird. Ihr Workflow kann auch Anmelde-/Authentifizierungsfunktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) Event und das Promise von [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) sind beide asynchrone Aufrufe, die separat behandelt werden. Stellen Sie sicher, dass Ihre Signalisierung sich nicht in der Reihenfolge ändert! Zum Beispiel muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Setzen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Ablauf des Signalisierungsprozesses

Der Signalisierungsprozess umfasst den Austausch von Nachrichten zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es einige wichtige Punkte, an denen Signalisierungsnachrichten verarbeitet werden:

- Der Client jedes Benutzers, der in einem Webbrowser ausgeführt wird
- Der Webbrowser jedes Benutzers
- Der Signalisierungsserver
- Der Webserver, der den Chat-Dienst hostet

Stellen Sie sich vor, Naomi und Priya befinden sich in einer Diskussion mit der Chat-Software, und Naomi entscheidet sich, einen Videoanruf zwischen den beiden zu eröffnen. Hier ist die erwartete Ereignisfolge:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Laufe dieses Artikels ausführlicher sehen.

### Prozess des Austauschs von ICE-Kandidaten

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, tritt sie in einen Austausch zwischen den verschiedenen Punkten in der Kette ein, der so aussieht:

![Diagramm des Austauschprozesses von ICE-Kandidaten](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihrer lokalen ICE-Schicht erhält; es gibt keine abwechselnde Reihenfolge oder Bündelung von Kandidaten. Sobald sich die beiden Peers auf einen Kandidaten geeinigt haben, den sie beide verwenden können, um die Medien auszutauschen, beginnt der Medienstrom. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Optionen ausgehen, auch nachdem der Medienstrom bereits begonnen hat. Dies geschieht in der Hoffnung, noch bessere Optionen zu finden als die ursprünglich ausgewählte.

Wenn sich die Bedingungen ändern (zum Beispiel, wenn sich die Netzwerkverbindung verschlechtert), könnte einer oder beide Peers vorschlagen, auf eine niedrigere Bandbreitenmedienauflösung oder einen alternativen Codec umzuschalten. Dies löst einen neuen Austausch von Kandidaten aus, nach dem möglicherweise ein weiterer Medienformat- und/oder Codecwechsel stattfindet. Im Leitfaden [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs zur Verwendung auswählen.

Optional siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Verhandeln von Kandidatenpaaren und Abschließen von ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein besseres Verständnis dafür erhalten möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Dies wird alles hinter den Kulissen erledigt. Unsere Rolle besteht darin, die Kandidaten über den Signalisierungsserver hin und her zu senden.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist die Nachrichtenverarbeitung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine häufige Lösung. Natürlich sollten Sie eine Möglichkeit zum Austausch von Signalisierungsinformationen wählen, die für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisieren des HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt wird. Dies erfordert Videoelemente und einen Knopf, um den Anruf zu beenden:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, die uns die volle Kontrolle über das Seitenlayout ermöglichen, indem sie die Verwendung von CSS ermöglichen. Wir werden Layoutdetails in diesem Leitfaden auslassen, aber [sehen Sie sich das CSS](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir es gehandhabt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` wird das empfangene Video des verbundenen Benutzers präsentieren. Wir geben das Attribut `autoplay` an, das sicherstellt, dass es sofort abgespielt wird, sobald das Video beginnt, ohne dass es in unserem Code explizit gehandhabt werden muss. Das `local_video` `<video>`-Element zeigt eine Vorschau der Benutzerkamera an; das Attribut `muted` wird gesetzt, da wir den lokalen Ton in diesem Vorschaubildschirm nicht hören müssen.

Schließlich das {{HTMLElement("button")}} `hangup-button`, um eine Trennung des Anrufs zu veranlassen, ist definiert und so konfiguriert, dass es standardmäßig deaktiviert ist (unsere Standardeinstellung, wenn kein laufender Anruf besteht) und die Funktion `hangUpCall()` beim Klicken aufgerufen wird. Diese Funktion hat die Aufgabe, den Anruf zu beenden und eine Benachrichtigung an den Signalisierungsserver über den anderen Peer zu senden, die ebenfalls ein Beenden anfordert.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche unterteilen, um einfacher beschreiben zu können, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: es öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und richtet einen Handler ein, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code verarbeitet im Allgemeinen Textchatnachrichten wie zuvor.

#### Senden von Nachrichten an den Signalisierungsserver

Im gesamten Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das Nachrichtenobjekt, das an diese Funktion übergeben wird, wird durch Aufrufen von {{jsxref("JSON.stringify()")}} in eine JSON-Zeichenkette konvertiert, dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### UI, um einen Anruf zu starten

Der Code, der die `"userlist"`-Nachricht verarbeitet, ruft `handleUserlistMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links vom Chat-Panel angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Zeichenfolgen enthält, das die Benutzernamen jedes verbundenen Benutzers angibt.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}-Element erhalten haben, das die Liste der Benutzernamen in die Variable `listElem` enthält, leeren wir die Liste, indem wir jedes seiner Kinder entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem wir einzelne Benutzer hinzufügen und entfernen, anstatt die gesamte Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber das ist für die Zwecke dieses Beispiels ausreichend.

Dann iterieren wir über das Array der Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element, dann erstellen wir einen neuen Textknoten, der den Benutzernamen mit [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) enthält. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Als Nächstes setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Listenelements, sodass ein Klick auf einen Benutzernamen unsere `invite()`-Methode aufruft, die wir im nächsten Abschnitt betrachten werden.

Schließlich fügen wir das neue Element dem `<ul>` hinzu, das alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die Funktion `invite()` als Ereignis-Handler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einem grundlegenden Sanitätscheck: Ist der Benutzer bereits verbunden? Wenn bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) besteht, kann er offenbar keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus dem [`textContent`](/de/docs/Web/API/Node/textContent)-Eigentum des Ereignisziels abgerufen, und wir vergewissern uns, dass es sich nicht um denselben Benutzer handelt, der versucht, den Anruf zu starten.

Danach kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()`, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und die grundlegende Konfiguration dafür vornimmt.

Sobald die `RTCPeerConnection` erstellt wurde, beantragen wir den Zugriff auf die Kamera und das Mikrofon des Benutzers, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, die uns über die Eigenschaft [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Verfügung steht. Wenn dies gelingt, wird unser `then`-Handler ausgeführt, der als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt erhält, das den Stream mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der erlaubten Medieneingaben auf ein bestimmtes Gerät oder eine Gruppe von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste der Geräte zu erhalten, die resultierende Liste nach unseren Kriterien filtern und dann den ausgewählten Geräten ihre [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId)-Werte in das `deviceId`-Feld des `mediaConstraints`-Objekts verwenden, um das in `getUserMedia()` übergeben wird. In der Praxis ist dies selten erforderlich, da die meisten dieser Aufgaben bereits durch `getUserMedia()` abgedeckt werden.

Wir hängen den eingehenden Stream an das lokale Vorschaubild-{{HTMLElement("video")}}-Element an, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements setzen. Da das Element so konfiguriert ist, dass eingehendes Video automatisch wiedergegeben wird, beginnt der Stream in unserem lokalen Vorschaufenster zu laufen.

Wir durchlaufen dann die Spuren im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jede Spur zur `RTCPeerConnection` hinzuzufügen. Selbst wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie beginnen, Daten zu senden, wenn Sie dies für angemessen halten. Medien, die empfangen werden, bevor die ICE-Aushandlung abgeschlossen ist, können verwendet werden, um ICE bei der Auswahl des besten Kommunikationsansatzes zu unterstützen und so den Verhandlungsprozess zu erleichtern.

Beachten Sie, dass für native Apps, wie eine Telefonanwendung, Sie das Senden erst beginnen sollten, wenn die Verbindung mindestens an beiden Enden akzeptiert wurde, um zu vermeiden, dass Video- und/oder Audiodaten versehentlich gesendet werden, wenn der Benutzer noch nicht bereit dazu ist.

Sobald Medien an die `RTCPeerConnection` angehängt sind, wird am Verbindungspunkt ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst, sodass die ICE-Aushandlung beginnen kann.

Wenn ein Fehler auftritt, während versucht wird, den lokalen Medienstrom zu erhalten, wird unsere Catch-Klausel die `handleGetUserMediaError()` aufrufen, die dem Benutzer bei Bedarf einen entsprechenden Fehler anzeigt.

#### Umgang mit getUserMedia()-Fehlern

Wenn das Promise, das von `getUserMedia()` zurückgegeben wird, mit einem Fehler endet, wird unsere `handleGetUserMediaError()`-Funktion ausgeführt.

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

In allen Fällen außer einem wird eine Fehlermeldung angezeigt. In diesem Beispiel ignorieren wir die Ergebnisse `"SecurityError"` und `"PermissionDeniedError"` und behandeln die Weigerung, die Genehmigung zur Nutzung der Medienhardware zu erteilen, als ob der Benutzer den Anruf abbricht.

Unabhängig davon, warum der Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu schließen und alle Ressourcen freizugeben, die bereits durch den Versuch des Anrufs zugewiesen wurden. Dieser Code ist so ausgelegt, dass er teilweise gestartete Anrufe sicher behandelt.

#### Erstellen der Peer-Verbindung

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre jeweiligen [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu erstellen, also ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene eine Angebotsnachricht von dem Anrufer erhält.

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

Beim Verwenden des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors geben wir ein Objekt mit Konfigurationsparametern für die Verbindung an. Wir verwenden in diesem Beispiel nur einen davon: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server für die {{Glossary("ICE", "ICE")}}-Schicht beschreiben, die bei dem Versuch einer Verbindung zwischen dem Anrufer und dem Angerufenen verwendet werden sollen. Diese Server werden verwendet, um die beste Route und die besten Protokolle zu bestimmen, um zwischen den Peers zu kommunizieren, auch wenn sie sich hinter einer Firewall befinden oder {{Glossary("NAT", "NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie besitzen oder zu deren Verwendung Sie ausdrücklich berechtigt sind. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber dessen Missbrauch ist schlechte Manieren.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das die URLs angibt, unter denen der angegebene Server erreichbar ist. Es kann auch `username`- und `credential`-Werte bereitstellen, um gegebenenfalls eine Authentifizierung durchzuführen.

Nachdem die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt wurde, richten wir Handler für die Ereignisse ein, die für uns wichtig sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie verarbeiten, um alles mit gestreamten Medien in WebRTC zu tun. Die restlichen sind nicht unbedingt erforderlich, können aber nützlich sein, und wir werden sie erkunden. Es gibt ein paar andere Ereignisse, die in diesem Beispiel nicht verwendet werden. Hier ist eine Zusammenfassung der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn sie benötigt, dass Sie einen ICE-Kandidaten an den anderen Peer über Ihren Signalisierungsserver übermitteln. Siehe [Senden von ICE-Kandidaten](#senden_von_ice-kandidaten) für weitere Informationen und um den Code für dieses Beispiel zu sehen.
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird von der lokalen WebRTC-Schicht aufgerufen, wenn eine Spur zur Verbindung hinzugefügt wird. Dadurch können Sie die eingehenden Medien an ein Element anschließen, um sie anzuzeigen, zum Beispiel. Siehe [Empfangen neuer Streams](#empfang_neuer_streams) für Details.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wann immer die WebRTC-Infrastruktur benötigt, dass Sie den Sitzungsverhandlungsprozess neu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Callee zu senden, um ihn einzuladen, sich mit uns zu verbinden. Siehe [Verhandlungsbeginn](#verhandlungsbeginn), um zu sehen, wie wir dies handhaben.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Diese Gegenstelle zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu behandeln; es wird an die `RTCPeerConnection` gesendet, wenn der Remote-Peer eine Spur aus den gesendeten Medien entfernt. Siehe [Umgang mit der Entfernung von Spuren](#umgang_mit_der_entfernung_von_spuren).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Schicht gesendet, um Ihnen über Änderungen am Status der ICE-Verbindung Bescheid zu geben. Dies kann Ihnen helfen zu wissen, wann die Verbindung fehlgeschlagen oder verloren gegangen ist. Wir sehen uns den Code für dieses Beispiel in [ICE-Verbindungsstatus](#ice-verbindungsstatus) unten an.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis, wenn sich der Status des ICE-Agent-Prozesses der Kandidatensammlung ändert, von einem Status zu einem anderen (wie das Starten der Sammlung von Kandidaten oder das Abschließen der Verhandlung). Siehe [ICE-Sammelstatus](#ice-sammelstatus) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen das [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignis, wenn sich der Status des Signalprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signalstatus](#ice-signalstatus), um unseren Code zu sehen.

#### Verhandlungsbeginn

Nachdem der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt hat, einen Medienstream erstellt und seine Spuren zur Verbindung hinzugefügt hat, wie unter [Einen Anruf starten](#einen_anruf_starten) beschrieben, liefert der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um anzuzeigen, dass es bereit ist, die Aushandlung mit dem anderen Peer zu beginnen. Hier ist unser Code für die Verarbeitung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Verhandlungsprozess zu starten, müssen wir ein SDP-Angebot an den Peer erstellen und senden, mit dem wir eine Verbindung herstellen möchten. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstream, den wir lokal zur Verbindung hinzugefügt haben (das heißt, das Video, das wir an das andere Ende des Anrufs senden möchten), und alle vom ICE-Layer bereits gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (das Promise wird erfüllt), übergeben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), die den Verbindungs- und Medienkonfigurationsstatus für das Ende des Anrufers konfigurieren.

> [!NOTE]
> Technisch gesehen, ist die Zeichenkette, die von `createOffer()` zurückgegeben wird, ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das Promise, das von `setLocalDescription()` zurückgegeben wird, erfüllt ist. Dies ist der Zeitpunkt, an dem wir unser Angebot an den anderen Peer senden, indem wir eine neue `"video-offer"`-Nachricht erstellen, die die lokale Beschreibung enthält (jetzt dasselbe wie das Angebot), und sie dann über unseren Signalisierungsserver an den Callee senden. Das Angebot hat die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Die SDP-Zeichenkette, die das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder beim ursprünglichen `createOffer()` oder in einem der darauf folgenden Erfüllungs-Handler, wird ein Fehler gemeldet, indem unsere `window.reportError()`-Funktion aufgerufen wird.

Sobald der Erfüllungshandler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede mögliche Konfiguration, die er entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übermitteln.

#### Sitzungsverhandlung

Nun, da wir die Verhandlung mit dem anderen Peer begonnen und ein Angebot übermittelt haben, sehen wir uns an, was auf der Seite des Callee der Verbindung für eine Weile passiert. Der Callee erhält das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Sehen wir uns an, wie der Callee das `"video-offer"`-Nachricht behandelt.

##### Umgang mit der Einladung

Wenn das Angebot eintrifft, wird die `handleVideoOfferMsg()`-Funktion des Callee aufgerufen, um die erhaltene `"video-offer"`-Nachricht zu verarbeiten. Diese Funktion muss zwei Dinge tun. Zuerst muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Spuren mit dem Audio und Video von ihrem Mikrofon und ihrer Webcam dazu hinzufügen. Zweitens muss sie das erhaltene Angebot verarbeiten, eine Antwort erstellen und senden.

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

Dieser Code ist sehr ähnlich dem, was wir in der `invite()`-Funktion unter [Einen Anruf starten](#einen_anruf_starten) getan haben. Es beginnt mit der Erstellung und Konfiguration einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mithilfe unserer `createPeerConnection()`-Funktion. Dann nimmt es das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies etabliert das empfangene Angebot als Beschreibung des entfernten (Anrufer-)Endes der Verbindung. Wenn dies erfolgreich ist, startet der Promise-Erfüllungshandler (in der `then()`-Klausel) den Prozess des Zugriffs auf die Kamera und das Mikrofon des Callee über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), fügt die Spuren zur Verbindung hinzu und so weiter, wie wir es bereits in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung durch Aufrufen von [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf die SDP der Antwort gesetzt, und dann wird die Antwort über den Signalisierungsserver an den Anrufer übertragen, um ihn wissen zu lassen, wie die Antwort lautet.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` weitergeleitet, wie unter [Umgang mit getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben.

> [!NOTE]
> Wie beim Anrufer beginnt der Browser, nach Abschluss des Erfüllungshandlers von `setLocalDescription()`, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse zu senden, die der Callee verarbeiten muss, eines für jeden Kandidaten, der an den entfernten Peer übertragen werden muss.

Schließlich behandelt der Anrufer die empfangene Antwortnachricht, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Callee darstellt, und es an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Verhandlungsprozess umfasst, dass jeder Peer wiederholt Kandidaten an den anderen sendet, bis ihm alle potenziellen Möglichkeiten ausgehen, die er unterstützen kann, um die Medienanforderungen der `RTCPeerConnection` zu erfüllen. Da ICE nichts über Ihren Signalisierungsserver weiß, übernimmt Ihr Code die Übertragung jedes Kandidaten in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler erhält ein Ereignis, dessen `candidate`-Eigenschaft die SDP zur Beschreibung des Kandidaten ist (oder `null`, um anzugeben, dass der ICE-Layer keine potenziellen Konfigurationen mehr vorzuschlagen hat). Der Inhalt von `candidate` ist das, was Sie mit Ihrem Signalisierungsserver übertragen müssen. Hier ist die Implementierung unseres Beispiels:

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

Dies erstellt ein Objekt, das den Kandidaten enthält, und sendet es dann an den anderen Peer, indem die zuvor beschriebene Funktion `sendToServer()` in [Senden von Nachrichten an den Signalisierungsserver](#senden_von_nachrichten_an_den_signalisierungsserver) verwendet wird. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden muss. Dies ermöglicht es dem Signalisierungsserver, die Nachricht zu routen.
- `candidate`
  - : Die SDP, die den Kandidaten beschreibt, den der ICE-Layer an den anderen Peer senden möchte.

Das Format dieser Nachricht (wie bei allem, was Sie tun, beim Umgang mit der Signalisierung) liegt ganz bei Ihnen, je nach Ihren Anforderungen; Sie können andere Informationen hinzufügen, wenn notwendig.

> [!NOTE]
> Es ist wichtig zu bedenken, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie von Ihrem eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe der Übertragung der Daten über den Kanal Ihrer Wahl übernehmen können. Dies kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### Empfang von ICE-Kandidaten

Der Signalisierungsserver liefert jeden ICE-Kandidaten an den Ziel-Peer unter Verwendung einer beliebigen Methode; in unserem Beispiel sind dies JSON-Objekte mit einer `type`-Eigenschaft, die die Zeichenkette `"new-ice-candidate"` enthält. Unsere Funktion `handleNewICECandidateMsg()` wird von unserem Hauptcode für eingehende WebSocket-Nachrichten aufgerufen, um diese Nachrichten zu verarbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie die empfangene SDP in den Konstruktor übergibt, und übermittelt dann den Kandidaten an den ICE-Layer, indem er ihn an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dies übergibt den frischen ICE-Kandidaten an den lokalen ICE-Layer, und schließlich ist unsere Rolle im Prozess der Bearbeitung dieses Kandidaten abgeschlossen.

Jeder Peer sendet dem anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, von der er glaubt, dass sie für die ausgetauschten Medien geeignet sein könnte. Irgendwann stimmen die beiden Peers einem bestimmten Kandidaten zu, und sie öffnen die Verbindung und beginnen, Medien auszutauschen. Es ist jedoch wichtig zu beachten, dass die ICE-Verhandlung _nicht_ aufhört, sobald die Medien fließen. Stattdessen können auch Kandidaten weiterhin ausgetauscht werden, nachdem das Gespräch begonnen hat, entweder beim Versuch, eine bessere Verbindungsmethode zu finden, oder weil sie bereits beim Transport waren, als die Peers erfolgreich ihre Verbindung hergestellt haben.

Außerdem, wenn etwas passiert, das eine Änderung des Streaming-Szenarios verursacht, wird die Aushandlung erneut beginnen, wobei das [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie vorher beschrieben. Dies kann in einer Vielzahl von Situationen passieren, einschließlich:

- Änderungen im Netzwerkstatus, z.B. eine Bandbreitenänderung, der Übergang von WLAN zu mobiler Konnektivität oder ähnliches.
- Wechsel zwischen Vorder- und Rückkamera eines Telefons.
- Eine Änderung in der Konfiguration des Streams, z.B. seine Auflösung oder Bildrate.

##### Empfang neuer Streams

Wenn neue Spuren zur `RTCPeerConnection` hinzugefügt werden – entweder durch Aufrufen ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder aufgrund einer Neustart der Verhandlung des Stream-Formats – wird ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` gesendet, für jede zur Verbindung hinzugefügte Spur. Die Nutzung neuer hinzugefügter Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Eine häufige Anforderung besteht darin, die eingehenden Medien an ein geeignetes HTML-Element anzuschließen. In unserem Beispiel fügen wir den Stream der Spur zum {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird an das `"received_video"`-{{HTMLElement("video")}}-Element angehängt, und das "Auflegen"-{{HTMLElement("button")}}-Element wird aktiviert, sodass der Benutzer den Anruf auflegen kann.

Nachdem dieser Code abgeschlossen ist, wird das von dem anderen Peer gesendete Video schließlich im lokalen Browserfenster angezeigt!

##### Umgang mit der Entfernung von Spuren

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der entfernte Peer eine Spur von der Verbindung entfernt, indem [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aufgerufen wird. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code ruft den eingehenden Video-`MediaStream` vom [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigentum des `"received_video"`-{{HTMLElement("video")}}-Elements ab und ruft dann die [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode des Streams auf, um ein Array der Spuren des Streams zu erhalten.

Wenn die Länge des Arrays Null ist, was bedeutet, dass keine Spuren mehr im Stream vorhanden sind, beenden wir den Anruf, indem wir `closeVideoCall()` aufrufen. Dies stellt unser App sauber wieder in eine Zustand, in der es bereit ist, einen anderen Anruf zu starten oder zu empfangen. Siehe [Beenden des Anrufs](#beenden_des_anrufs), um zu erfahren, wie `closeVideoCall()` funktioniert.

#### Beenden des Anrufs

Es gibt viele Gründe, warum Anrufe beendet werden können. Ein Anruf könnte abgeschlossen sein, wobei eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkausfall aufgetreten oder ein Benutzer könnte seinen Browser geschlossen, einen Systemabsturz erlitten haben. In jedem Fall müssen alle guten Dinge zu einem Ende kommen.

##### Auflegen

Wenn der Benutzer den "Auflegen"-Knopf drückt, um den Anruf zu beenden, wird die `hangUpCall()`-Funktion aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen und zurückzusetzen sowie Ressourcen freizugeben. Es erstellt dann eine `"hang-up"`-Nachricht und sendet sie an das andere Ende des Anrufs, um dem anderen Peer zu sagen, dass er sich sauber herunterfahren soll.

##### Beenden des Anrufs

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

Nachdem Verweise auf die beiden {{HTMLElement("video")}}-Elemente abgerufen wurden, wird überprüft, ob eine WebRTC-Verbindung besteht; wenn ja, fahren wir fort, die Verbindung zu trennen und den Anruf zu schließen:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass streunende Ereignishandler ausgelöst werden, während die Verbindung im Prozess des Schließens ist, was potenziell zu Fehlern führen könnte.
2. Für beide, sowohl die entfernten als auch die lokalen Videostreams, iterieren wir über jede Spur und rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode auf, um jede zu schließen.
3. Wir schließen die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem wir [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufrufen.
4. Wir setzen `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code erfährt, dass kein laufender Anruf mehr besteht; dies ist nützlich, wenn der Benutzer in der Nutzerliste auf einen Namen klickt.

Dann entfernen wir sowohl für die eingehenden als auch ausgehenden {{HTMLElement("video")}}-Elemente ihre [`src`](/de/docs/Web/API/HTMLMediaElement/src)- und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaften mit ihren [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden. Dies schließt die Dissoziation der Streams von den Videoelementen ab.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` auf dem "Auflegen"-Button, was ihn unanklickbar macht, während kein Anruf läuft; dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dies erlaubt es dem Benutzer, einen anderen Benutzer zu kontaktieren oder einen eingehenden Anruf zu erhalten.

#### Umgang mit Statusänderungen

Es gibt eine Anzahl zusätzlicher Ereignisse, für die Sie Listener setzen können, um Ihrem Code über eine Vielzahl von Statusänderungen zu benachrichtigen. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event), und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungsstatus

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) von der ICE-Schicht gesendet, wann immer der Verbindungsstatus sich ändert (z.B. wenn der Anruf vom anderen Ende beendet wird).

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

Hier wenden wir unsere `closeVideoCall()`-Funktion an, wenn der ICE-Verbindungsstatus auf `"closed"` oder `"failed"` wechselt. Dies erledigt das Herunterfahren unseres Endes der Verbindung, sodass wir bereit sind, erneut einen Anruf zu starten oder anzunehmen.

> [!NOTE]
> Wir beobachten hier nicht den `disconnected`-Signalisierungsstatus, da er temporäre Probleme anzeigen kann und möglicherweise nach einiger Zeit in den `connected`-Status zurückkehrt. Ihn zu beobachten, würde den Videoanruf bei jedem temporären Netzwerkproblem schließen.

##### ICE-Signalstatus

Ähnlich überwachen wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungsstatus auf `closed` ändert, schließen wir den Anruf ebenfalls.

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
> Der `closed`-Signalisierungsstatus wurde zugunsten des `closed`-[`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) abgelehnt. Wir beobachten es hier, um ein wenig rückwärtskompatibel zu sein.

##### ICE-Sammelstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden verwendet, um Ihnen mitzuteilen, wann sich der ICE-Kandidatensammlungsprozess ändert. Unser Beispiel verwendet dies für nichts, aber es kann nützlich sein, diese Ereignisse zu beobachten, sowohl zur Fehlerbehebung als auch um zu erkennen, wenn die Sammlung der Kandidaten abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können jetzt [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/), um es in Aktion zu sehen. Öffnen Sie die Webkonsole auf beiden Geräten und sehen Sie sich die protokollierten Ausgaben an – obwohl Sie es im oben angezeigten Code nicht sehen, enthält der Code auf dem Server (und auf [GitHub](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat)) viele Konsolenausgaben, sodass Sie die Signalisierungs- und Verbindungsprozesse bei der Arbeit sehen können.

Eine weitere offensichtliche Verbesserung wäre das Hinzufügen einer „Klingel“ Funktionalität, sodass anstatt nur das Feld zur Medienfreigabe des Browsers anzuzeigen, ein „Benutzer X ruft an. Möchten Sie antworten?“ Prompt zuerst angezeigt wird.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Webmedi Technologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation) Muster

---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) erlaubt den Austausch von Medien in Echtzeit und Peer-to-Peer zwischen zwei Geräten. Eine Verbindung wird durch einen Entdeckungs- und Verhandlungsprozess namens **Signalisierung** hergestellt. Dieses Tutorial wird Sie durch den Aufbau eines gegenseitigen Videoanrufs führen.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einem zentralen Vorbehalt. Eine Art der Erkennung und Medienformatverhandlung muss stattfinden, [wie anderswo besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit sich zwei Geräte in verschiedenen Netzwerken finden können. Dieser Prozess wird **Signalisierung** genannt und beinhaltet, dass sich beide Geräte mit einem dritten, einvernehmlichen Server verbinden. Über diesen dritten Server können die beiden Geräte einander finden und Verhandlungsnachrichten austauschen.

In diesem Artikel werden wir das weiter verbessern, um einen gegenseitigen Videoanruf zwischen Benutzern zu ermöglichen. Sie können [dieses Beispiel auf Render ausprobieren](https://webrtc-from-chat.onrender.com), um auch damit zu experimentieren.
Sie können sich auch [das komplette Projekt auf GitHub ansehen](https://github.com/bsmth/examples/tree/main/webrtc-from-chat).

## Der Signalisierungsserver

Das Herstellen einer WebRTC-Verbindung zwischen zwei Geräten erfordert die Verwendung eines **Signalisierungsservers**, um zu klären, wie sie über das Internet verbunden werden können. Die Hauptaufgabe eines Signalisierungsservers ist es, als Vermittler zu dienen, um zwei Peers zu finden und eine Verbindung herzustellen, während die Offenlegung potenziell privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signalisierungsprozess tatsächlich?

Zuerst benötigen wir den Signalisierungsserver selbst. WebRTC gibt keinen Transportmechanismus für die Signalisierungsinformationen vor. Sie können alles verwenden, was Sie wollen, von [WebSocket](/de/docs/Web/API/WebSockets_API) bis [`fetch()`](/de/docs/Web/API/Window/fetch), um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server die Signalisierungsdateninhalte nicht verstehen oder interpretieren muss. Auch wenn es sich um {{Glossary("SDP", "SDP")}} handelt, spielt dies im Grunde keine große Rolle: Der Inhalt der Nachricht, die durch den Signalisierungsserver geht, ist im Grunde eine Blackbox. Was wichtig ist, ist, dass wenn das {{Glossary("ICE", "ICE")}}-Subsystem Sie anweist, Signalisierungsdaten an den anderen Peer zu senden, Sie dies tun, und der andere Peer weiß, wie er diese Information empfangen und an sein eigenes ICE-Subsystem übermitteln kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu kanalisieren. Die Inhalte spielen für den Signalisierungsserver überhaupt keine Rolle.

### Den Chat-Server für die Signalisierung vorbereiten

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen, um Aufgaben zu behandeln, wie z.B. neue Benutzer zu registrieren, Benutzernamen festzulegen und öffentliche Chat-Nachrichten zu senden.

Um dem Server die Unterstützung von Signalisierung und ICE-Verhandlung zu ermöglichen, müssen wir den Code aktualisieren. Wir müssen Nachrichten an einen bestimmten Benutzer senden können, anstatt sie an alle verbundenen Benutzer zu senden, und sicherstellen, dass nicht erkannte Nachrichtentypen durchgeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Dadurch können wir Signalisierungsnachrichten über diesen selben Server senden, anstatt einen separaten Server zu benötigen.

Werfen wir einen Blick auf die Änderungen, die wir am Chat-Server vornehmen müssen, um die WebRTC-Signalisierung zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat-server.js).

Zuerst kommt die Hinzufügung der Funktion `sendToOneUser()`. Wie der Name schon sagt, sendet dies eine stringifizierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion durchläuft die Liste der verbundenen Benutzer, bis sie einen findet, der mit dem angegebenen Benutzernamen übereinstimmt, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein stringifiziertes JSON-Objekt. Wir hätten es empfangen können, wie wir unser ursprüngliches Nachrichtenobjekt senden, aber in diesem Beispiel ist es so effizienter. Da die Nachricht bereits stringifiziert wurde, können wir sie ohne weitere Verarbeitung senden. Jedes Element in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, also können wir einfach seine [`send()`](/de/docs/Web/API/WebSocket/send)-Methode direkt aufrufen.

Unser ursprüngliches Chat-Demo unterstützte nicht das Senden von Nachrichten an einen bestimmten Benutzer. Die nächste Aufgabe ist es, den Hauptnachrichten-Handler von WebSocket zu aktualisieren, um dies zu unterstützen. Dies beinhaltet eine Änderung am Ende des "`connection"`-Nachrichtenhandlers:

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

Dieser Code prüft jetzt die anstehende Nachricht, um zu sehen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an diesen zu senden. Andernfalls wird die Nachricht an alle Benutzer gesendet, indem die Verbindungsliste durchlaufen wird und die Nachricht an jeden Benutzer gesendet wird.

Da der bestehende Code das Senden von beliebigen Nachrichtentypen erlaubt, sind keine weiteren Änderungen erforderlich. Unsere Clients können jetzt Nachrichten unbekannter Typen an einen bestimmten Benutzer senden und so Signalisierungsnachrichten hin und her senden, wie gewünscht.

Das ist alles, was wir auf der Serverseite ändern müssen. Nun schauen wir uns das Signalisierungsprotokoll an, das wir implementieren werden.

### Entwerfen des Signalisierungsprotokolls

Jetzt, da wir einen Mechanismus zum Austauschen von Nachrichten gebaut haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen werden. Dies kann auf verschiedene Arten gemacht werden; das hier demonstrierte ist nur eine mögliche Methode, um Signalisierungsnachrichten zu strukturieren.

Der Server dieses Beispiels verwendet stringifizierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format sein werden, mit Inhalten, die angeben, welche Art von Nachrichten sie sind, sowie jede zusätzliche Information, die benötigt wird, um die Nachrichten richtig zu behandeln.

#### Austauschen von Sitzungsbeschreibungen

Beim Starten des Signalisierungsprozesses wird ein **Angebot** vom Benutzer erstellt, der den Anruf initiiert. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss dem empfangenden Benutzer zugestellt werden, den wir den **Gerufenen** nennen werden. Der Gerufene antwortet auf das Angebot mit einer **Antwortnachricht**, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver verwendet WebSocket, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, spezifiziert dies den Gerufenen und umgekehrt).
- `sdp`
  - : Der SDP (Session Description Protocol)-String, der das lokale Ende der Verbindung aus Sicht des Absenders beschreibt (oder das entfernte Ende der Verbindung aus Sicht des Empfängers).

An diesem Punkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie sie die Mediendaten selbst übertragen sollen. Hier kommt die {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer zur Kommunikation verwenden kann. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, auch wenn die Medienübertragung bereits begonnen hat.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen beidseitig kompatiblen Kandidaten geeinigt haben, verwenden beide Peers den SDP-Kandidaten, um eine Verbindung zu erstellen und zu öffnen, durch die dann Medien fließen. Wenn sie sich später auf einen besseren (normalerweise leistungsfähigeren) Kandidaten einigen, kann der Stream die Formate bei Bedarf ändern.

Obwohl derzeit nicht unterstützt, könnte theoretisch ein Kandidat, der nach Beginn der Medienübertragung empfangen wurde, auch verwendet werden, um bei Bedarf auf eine Verbindung mit niedrigerer Bandbreite herunterzustufen.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht vom Typ `"new-ice-candidate"` über den Signalisierungsserver an den entfernten Peer gesendet wird. Jede Kandidatennachricht enthält folgende Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Verhandlung erfolgt; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidatstring, der die vorgeschlagene Verbindungsmethode beschreibt. Normalerweise müssen Sie nicht auf den Inhalt dieses Strings achten. Ihr Code muss ihn nur durch den Signalisierungsserver an den entfernten Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst oder ein Relais-Server ist) sowie andere Informationen vor, die benötigt werden, um die beiden Computer miteinander zu verbinden. Dies schließt NAT oder andere Netzwerkkomplexität ein.

> [!NOTE]
> Wichtig zu beachten ist Folgendes: Das Einzige, wofür Ihr Code während der ICE-Verhandlung verantwortlich ist, ist das Akzeptieren ausgehender Kandidaten von der ICE-Schicht und das Senden dieser über die Signalisierungsverbindung an den anderen Peer, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, und das Empfangen von ICE-Kandidatennachrichten vom Signalisierungsserver (wenn die `"new-ice-candidate"`-Nachricht eingetroffen ist) und deren Zustellung an Ihre ICE-Schicht durch Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate). Das war's.
>
> Der Inhalt der SDP ist in nahezu allen Fällen für Sie irrelevant. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es ist, bis Sie wirklich wissen, was Sie tun. Auf diesem Weg liegt der Wahnsinn.

Alles, was Ihr Signalisierungsserver jetzt tun muss, ist, die Nachrichten zu vermitteln, die er zu senden hat. Ihr Workflow kann auch Anmeldungs-/Authentifizierungsfunktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Promise sind beide asynchrone Aufrufe, die separat behandelt werden. Achten Sie darauf, dass Ihre Signalisierung ihre Reihenfolge nicht ändert! Beispielsweise muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Einstellen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Signalisierungsprozessablauf

Der Signalisierungsprozess umfasst diesen Austausch von Nachrichten zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess kann natürlich variieren, aber im Allgemeinen gibt es ein paar wichtige Punkte, an denen Signalisierungsnachrichten bearbeitet werden:

- Jeder Benutzerclient, der in einem Webbrowser ausgeführt wird
- Jeder Benutzer-Webbrowser
- Der Signalisierungsserver
- Der Webserver, der den Chaṭdienst hostet

Stellen Sie sich vor, Naomi und Priya sind in ein Gespräch mit der Chat-Software vertieft, und Naomi beschließt, einen Videoanruf zwischen den beiden zu initiieren. Hier ist die erwartete Abfolge der Ereignisse:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Laufe dieses Artikels weiter detailliert betrachten.

### ICE-Kandidaten-Austauschprozess

Wenn die ICE-Schicht jedes Peers beginnt Kandidaten zu senden, tritt es in einen Austausch unter den verschiedenen Punkten in der Kette ein, der folgendermaßen aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie diese von ihrer lokalen ICE-Schicht erhält; es gibt kein Abwechseln oder Gruppieren von Kandidaten. Sobald sich die beiden Peers auf einen gemeinsam nutzbaren Kandidaten einigen, der zum Austausch der Medien verwendet werden kann, beginnt der Medienfluss. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Optionen ausgehen, auch nachdem der Medienfluss bereits begonnen hat. Dies geschieht in der Hoffnung, noch bessere Optionen als die ursprünglich ausgewählte zu identifizieren.

Wenn sich die Bedingungen ändern (zum Beispiel, wenn sich die Netzwerkverbindung verschlechtert), könnte einer oder beide Peers vorschlagen, zu einer niedrigeren Bandbreiten-Medienauflösung oder zu einem alternativen Codec zu wechseln. Das löst einen neuen Austausch von Kandidaten aus, nach dem ein neuer Medienformat- und/oder Codec-Wechsel stattfinden kann. Im Leitfaden [Codecs verwendet von WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC laut Vorschrift von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs zur Verwendung auswählen können.

Optional, siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Negotiation von Kandidaten-Paaren und Beenden von ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein tieferes Verständnis davon erhalten möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und der Medienfluss beginnt, sobald die ICE-Schicht zufrieden ist. Dies wird alles hinter den Kulissen erledigt. Unsere Aufgabe ist es, die Kandidaten hin und her zu senden, durch den Signalisierungsserver.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist die Nachrichtenverarbeitung. Es ist nicht notwendig, WebSockets für die Signalisierung zu verwenden, aber es ist eine gängige Lösung. Natürlich sollten Sie einen Mechanismus zur Signalisierung wählen, der zu Ihrer Anwendung passt.

Lassen Sie uns den Chat-Client aktualisieren, um Videoanrufe zu unterstützen.

### Aktualisieren des HTML

Das HTML für unseren Client benötigt einen Ort, um das Video anzuzeigen. Dies erfordert Videoelemente und einen Knopf, um den Anruf zu beenden:

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

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, die uns die volle Kontrolle über das Seitenlayout gibt, indem sie die Verwendung von CSS ermöglicht. Wir werden die Layoutdetails in diesem Leitfaden überspringen, aber [sehen Sie sich das CSS auf GitHub an](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat.css), um zu sehen, wie wir es gehandhabt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Selbstansicht, eines für die Verbindung, und das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` zeigt das Video des verbundenen Benutzers an. Wir geben das `autoplay`-Attribut an, das sicherstellt, dass das Video, sobald es ankommt, sofort abgespielt wird. Dies beseitigt die Notwendigkeit, die Wiedergabe in unserem Code explizit zu behandeln. Das `local_video` `<video>`-Element zeigt eine Vorschau der Kamera des Benutzers; mit dem `muted`-Attribut, da wir den lokalen Ton in diesem Vorschaubildschirm nicht hören müssen.

Schließlich das `hangup-button` {{HTMLElement("button")}}, um die Verbindung zu beenden, das standardmäßig deaktiviert ist (was als unsere Standardeinstellung festgelegt ist, wenn keine Verbindung besteht) und die Funktion `hangUpCall()` bei Klick darauf anwendet. Diese Funktion ist dafür verantwortlich, den Anruf zu schließen und eine Benachrichtigung über den Signalisierungsserver an den anderen Peer zu senden, mit der Bitte, sich ebenfalls zu schließen.

### Der JavaScript-Code

Wir werden diesen Code in Funktionsbereiche unterteilen, um leichter beschreiben zu können, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der `connect()`-Funktion: Sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket) Server auf Port 6503 und stellt einen Handler bereit, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code verarbeitet im Allgemeinen Textnachrichten, wie es zuvor der Fall war.

#### Nachrichten an den Signalisierungsserver senden

Durch unseren Code hindurch rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Aufgabe zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das an diese Funktion übergebene Nachrichtenobjekt wird in einen JSON-String umgewandelt, indem `{{jsxref("JSON.stringify()")}}` aufgerufen wird, dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### UI zum Starten eines Anrufs

Der Code, der die `"user-list"`-Nachricht verarbeitet, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links neben dem Chatpanel angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Zeichenfolgen ist, das die Benutzernamen jedes verbundenen Benutzers angibt.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}, das die Liste der Benutzernamen enthält, in die Variable `listElem` bekommen haben, leeren wir die Liste, indem wir jedes ihrer Kindelemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem einzelne Benutzer hinzugefügt und entfernt werden, anstatt die ganze Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber das reicht für die Zwecke dieses Beispiels.

Dann durchlaufen wir das Array der Benutzernamen mithilfe von {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element, dann erstellen wir einen neuen Textknoten, der den Benutzernamen mit [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) enthält. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Als Nächstes setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis auf das Listenelement, sodass durch Klicken auf einen Benutzernamen unsere `invite()`-Methode aufgerufen wird, die wir im nächsten Abschnitt betrachten.

Schließlich fügen wir das neue Element dem `<ul>` hinzu, das alle Benutzernamen enthält.

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

Dies beginnt mit einem grundlegenden Sanity-Check: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er offensichtlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, aus der [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels abgerufen, und wir prüfen, ob es sich nicht um denselben Benutzer handelt, der den Anruf starten möchte.

Danach kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und die grundlegende Konfiguration durchführt.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir Zugriff auf die Kamera und das Mikrofon des Benutzers an, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, das uns über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft zur Verfügung steht. Wenn dies gelingt und das zurückgegebene Promise erfüllt wird, wird unser `then`-Handler ausgeführt. Dieser empfängt als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Strom mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der zulässigen Medieneingaben auf ein bestimmtes Gerät oder eine Gerätegruppe beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste von Geräten zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien filtern und dann die `deviceId`-Werte der ausgewählten Geräte im `mediaConstraints`-Objekt, das an `getUserMedia()` übergeben wird, verwenden. In der Praxis ist dies selten notwendig, da das meiste dieser Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir fügen den eingehenden Stream dem lokalen Vorschau-{{HTMLElement("video")}}-Element hinzu, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements festlegen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch abspielt, beginnt der Stream sofort in unserem lokalen Vorschaubereich zu spielen.

Anschließend durchlaufen wir die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn es Ihnen passend erscheint. Medien, die empfangen werden, bevor die ICE-Verhandlung abgeschlossen ist, können verwendet werden, um ICE zu helfen, den besten Verbindungsansatz zu erkennen, was somit den Verhandlungsprozess unterstützt.

Beachten Sie, dass für native Apps, wie eine Telefonanwendung, Sie das Senden nicht beginnen sollten, bis die Verbindung an beiden Enden akzeptiert wurde, um das versehentliche Senden von Video- und/oder Audiodaten zu vermeiden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt sind, löst dies an der Verbindung ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis aus, sodass die ICE-Verhandlung gestartet wird.

Wenn ein Fehler beim Versuch, den lokalen Medienstrom zu erhalten, auftritt, wird unsere catch-Klausel aufgerufen, `handleGetUserMediaError()` aufzurufen, das ein entsprechendes Fehlersignal anzeigt, wie erforderlich.

#### Umgang mit getUserMedia()-Fehlern

Wenn das Promise, das von `getUserMedia()` zurückgegeben wird, im Fehler endet, wird unsere `handleGetUserMediaError()`-Funktion ausgeführt.

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

Eine Fehlermeldung wird in allen Fällen, außer einem, angezeigt. In diesem Beispiel ignorieren wir `"SecurityError"` und `"PermissionDeniedError"`-Ergebnisse und behandeln die Ablehnung der Erlaubnis, die Medienhardware zu verwenden, genauso wie das Abbrechen des Anrufs durch den Benutzer.

Unabhängig davon, warum ein Versuch, den Strom zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu schließen und alle bereits zugewiesenen Ressourcen durch den Prozess des Versuches, den Anruf zu tätigen, freizugeben. Dieser Code wurde entworfen, um teilweise gestartete Anrufe sicher abzuwickeln.

#### Erstellung der Peer-Verbindung

Die `createPeerConnection()`-Funktion wird von sowohl dem Anrufer als auch dem Gerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu konstruieren, ihre jeweiligen Enden der WebRTC-Verbindung. Es wird von `invite()` aufgerufen, wenn der Anrufer einen Anruf zu starten versucht, und von `handleVideoOfferMsg()`, wenn der Gerufene ein Angebotsnachricht vom Anrufer erhält.

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

Wenn Sie den [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktor verwenden, geben wir ein Objekt an, das Konfigurationsparameter für die Verbindung bereitstellt. In diesem Beispiel verwenden wir nur einen dieser Parameter: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server beschreiben, die von der {{Glossary("ICE", "ICE")}}-Schicht verwendet werden, wenn versucht wird, eine Route zwischen dem Anrufer und dem Gerufenen herzustellen. Diese Server werden verwendet, um den besten Weg und die besten Protokolle für die Kommunikation zwischen den Peers zu bestimmen, auch wenn sie sich hinter einer Firewall befinden oder {{Glossary("NAT", "NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Ihnen gehören oder für die Sie spezifische Genehmigung zur Nutzung haben. Dieses Beispiel verwendet einen öffentlich bekannten STUN-Server, aber dessen Missbrauch ist unangebracht.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs bereitstellt, unter denen der angegebene Server erreicht werden kann. Es kann auch `username` und `credential` Werte bereitstellen, um Authentifizierung zu ermöglichen, falls erforderlich.

Nach der Erstellung der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), richten wir Hander für die Ereignisse ein, die für uns relevant sind.

Die ersten drei dieser Ereignishandler sind erforderlich; Sie müssen sie behandeln, um etwas mit gestreamten Medien in WebRTC zu tun. Die restlichen sind nicht unbedingt erforderlich, können aber nützlich sein, und wir werden sie erkunden. Es gibt einige andere Ereignisse, die in diesem Beispiel nicht verwendet werden, ebenfalls. Hier ist eine Zusammenfassung der Ereignishandler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignishandler auf, wenn sie Sie auffordern muss, einen ICE-Kandidaten an den anderen Peer, durch Ihren Signalisierungsserver, zu übermitteln. Weitere Informationen und den Code für dieses Beispiel finden Sie unter [Senden von ICE-Kandidaten](#senden_von_ice-kandidaten).
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis wird von der lokalen WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dies ermöglicht es Ihnen, die eingehenden Medien an ein Element anzuschließen, um sie anzuzeigen, zum Beispiel. Details finden Sie unter [Empfangen neuer Streams](#empfang_neuer_streams).
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wann immer die WebRTC-Infrastruktur von Ihnen verlangt, den Session-Verhandlungsprozess neu zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und dem Gerufenen zu senden, ihn aufzufordern, sich mit uns zu verbinden. Wie wir das handhaben, sehen Sie unter [Verhandlung starten](#verhandlung_starten).
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Diese Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu verarbeiten; es wird an die `RTCPeerConnection` gesendet, wenn der entfernte Peer einen Track von den gesendeten Medien entfernt. Siehe [Umgang mit der Entfernung von Tracks](#umgang_mit_track-entfernungen).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignis wird von der ICE-Schicht gesendet, um Sie über Änderungen am Zustand der ICE-Verbindung zu informieren. Dies kann Ihnen helfen, zu erkennen, wann die Verbindung fehlgeschlagen ist oder verloren gegangen ist. Wir werden den Code für dieses Beispiel unten unter [ICE-Verbindungszustand](#ice-verbindungszustand) betrachten.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignis, wenn sich der Status des ICE-Agenten bei der Sammlung von Kandidaten ändert (wie das Beginnen der Sammlung von Kandidaten oder das Beenden der Verhandlung). Sehen Sie sich [ICE-Sammelstatus](#ice-sammlungsstatus) unten an.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Nachricht, wenn sich der Status des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Sehen Sie unter [Signalisierungsstatus](#ice-signalisierungsstatus) unseren Code.

#### Verhandlung starten

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt hat, einen Medienstrom erstellt hat und seine Tracks zur Verbindung hinzugefügt hat, wie in [Anruf starten](#starten_eines_anrufs) gezeigt, sendet der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um anzuzeigen, dass sie bereit ist, mit dem anderen Peer zu verhandeln. Hier ist unser Code zum Behandeln des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Verhandlungsprozess zu starten, müssen wir ein SDP-Angebot erstellen und an den Peer senden, mit dem wir eine Verbindung herstellen möchten. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstrom, den wir lokal zur Verbindung hinzugefügt haben (das heißt, das Video, das wir an das andere Ende des Anrufs senden möchten), und alle bereits von der ICE-Schicht gesammelten ICE-Kandidaten. Wir erstellen dieses Angebot, indem wir [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen.

Wenn `createOffer()` erfolgreich ist (das Promise erfüllt wird), übergeben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), das die Konfiguration der Verbindung und der Medienkonfiguration für das Ende des Anrufes des Anrufers konfiguriert.

> [!NOTE]
> Technisch gesehen ist der von `createOffer()` zurückgegebene String ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das Promise, das von `setLocalDescription()` zurückgegeben wird, erfüllt wird. Dies ist der Zeitpunkt, an dem wir unser Angebot an den anderen Peer senden, indem wir eine neue `"video-offer"`-Nachricht erstellen, die die lokale Beschreibung enthält (jetzt identisch mit dem Angebot), und sie über unseren Signalisierungsserver an den Gerufenen senden. Das Angebot hat die folgenden Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Der SDP-String, der das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder im ursprünglichen `createOffer()`- oder in einem der darauf folgenden Fulfillment-Handler, wird ein Fehler durch Aufrufen unserer `window.reportError()`-Funktion gemeldet.

Sobald der Fulfillment-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potenzielle Konfiguration, die er entdeckt. Unser Handler für das `icecandidate`-Ereignis ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übermitteln.

#### Sitzungs-Verhandlung

Da wir die Verhandlung mit dem anderen Peer begonnen haben und ein Angebot übertragen haben, sehen wir uns nun an, was auf der Seite des Gerufenen für eine Weile passiert. Der Gerufene erhält das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Schauen wir uns an, wie der Gerufene die `"video-offer"`-Nachricht behandelt.

##### Umgang mit der Einladung

Wenn das Angebot eintrifft, wird die Funktion des Gerufenen `handleVideoOfferMsg()` mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge tun. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks mit dem Audio und Video von seinem Mikrofon und seiner Webcam hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten, eine Antwort erstellen und senden.

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

Dieser Code ähnelt stark dem, was wir in der Funktion `invite()` in [Anruf starten](#starten_eines_anrufs) getan haben. Es beginnt mit der Erstellung und Konfiguration einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) durch unsere `createPeerConnection()`-Funktion. Danach nimmt es das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt darzustellen, das die Sitzungsbeschreibung des Anrufers beschreibt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dies legt das empfangene Angebot als Beschreibung des entfernten (Anrufers) Endes der Verbindung fest. Wenn dies erfolgreich ist, wird der Fulfillment-Handler des Versprechens (in der `then()`-Klausel) den Prozess zum Abrufen des Zugriffs auf die Kamera und das Mikrofon des Gerufenen unter Verwendung von [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), dem Hinzufügen der Tracks zur Verbindung und so weiter, wie wir es zuvor in `invite()` gesehen haben, starten.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung an die SDP der Antwort übergeben, indem sie mit [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) gesetzt wird, und dann wird die Antwort über den Signalisierungsserver an den Anrufer übertragen, um ihm mitzuteilen, was die Antwort ist.

Jede auftretenden Fehler werden abgefangen und an `handleGetUserMediaError()` weitergegeben, das in [Umgang mit getUserMedia()-Fehlern](#handling_getusermedia_errors) beschrieben wird.

> [!NOTE]
> Wie beim Anrufer startet der Browser nach der Ausführung des `setLocalDescription()`-Fulfillment-Handlers mit dem Triggern von [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignissen, die der Gerufene verarbeiten muss, eines für jeden Kandidaten, der an den entfernten Peer übermittelt werden muss.

Schließlich behandelt der Anrufer die Antwortnachricht, die er erhalten hat, durch das Erstellen eines neuen [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekts, das die Sitzungsbeschreibung des Gerufenen darstellt und es in [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### Senden von ICE-Kandidaten

Der ICE-Verhandlungsprozess beinhaltet, dass jeder Peer wiederholt Kandidaten an den anderen sendet, bis ihm die potenziellen Möglichkeiten ausgehen, die er dem Medienübertragungsbedarf der `RTCPeerConnection` unterstützen zu können glaubt. Da ICE nichts über Ihren Signalisierungsserver weiß, kümmert sich Ihr Code in Ihrem Handler für das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis um die Übermittlung jedes Kandidaten.

Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler empfängt ein Ereignis, dessen `candidate`-Eigenschaft die SDP beschreibt, die den Kandidaten beschreibt (oder `null` ist, um anzuzeigen, dass der ICE-Schicht die potenziellen Konfigurationen ausgegangen sind, die sie vorschlagen kann). Der Inhalt von `candidate` ist, was Sie über Ihren Signalisierungsserver übermitteln müssen. Hier ist die Implementierung unseres Beispiels:

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

Dies erstellt ein Objekt, das den Kandidaten enthält, und sendet es dann mithilfe der zuvor in [Senden von Nachrichten an den Signalisierungsserver](#nachrichten_an_den_signalisierungsserver_senden) beschriebenen `sendToServer()`-Funktion an den anderen Peer. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat geliefert werden muss. Dies ermöglicht dem Signalisierungsserver, die Nachricht weiterzuleiten.
- `candidate`
  - : Der SDP, der den Kandidaten beschreibt, den die ICE-Schicht an den anderen Peer senden möchte.

Das Format dieser Nachricht (wie bei allem, was Sie tun, wenn Sie die Signalisierung verarbeiten) liegt ganz bei Ihnen, abhängig von Ihren Bedürfnissen; Sie können bei Bedarf zusätzliche Informationen bereitstellen.

> [!NOTE]
> Es ist wichtig zu beachten, dass das [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Sie werden stattdessen von Ihrem eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe der Übertragung der Daten über den von Ihnen gewählten Kanal übernehmen können. Dies kann verwirrend sein, wenn Sie neu bei WebRTC sind.

##### Empfang von ICE-Kandidaten

Der Signalisierungsserver übermittelt jedem ICE-Kandidaten an den Ziel-Peer, indem er eine Methode verwendet, die er wählt; in unserem Beispiel sind dies JSON-Objekte mit einer `type`-Eigenschaft, die den String `"new-ice-candidate"` enthält. Unsere `handleNewICECandidateMsg()`-Funktion wird von unserem Haupt [WebSocket](/de/docs/Web/API/WebSockets_API) eingehenden Nachrichtencode aufgerufen, um diese Nachrichten zu verarbeiten:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie den empfangenen SDP an ihren Konstruktor übergibt, und liefert dann den Kandidaten an die ICE-Schicht, indem sie ihn an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Damit wird der frische ICE-Kandidat an die lokale ICE-Schicht übergeben, und schließlich ist unsere Rolle im Prozess der Bearbeitung dieses Kandidaten abgeschlossen.

Jeder Peer sendet an den anderen Peer einen Kandidaten für jede mögliche Transportkonfiguration, die er für den Austausch der Medien als tragfähig erachtet. An einem bestimmten Punkt stimmen die beiden Peers zu, dass ein bestimmter Kandidat eine gute Wahl ist, und sie öffnen die Verbindung und beginnen, Medien zu teilen. Es ist jedoch wichtig zu beachten, dass die ICE-Verhandlung _nicht_ stoppt, sobald Medien fließen. Stattdessen können Kandidaten nach dem Beginn der Konversation weiterhin ausgetauscht werden, entweder während des Versuchs, eine bessere Verbindungsmethode zu finden, oder weil sie bereits in Übertragung waren, als die Peers ihre Verbindung erfolgreich herstellten.

Außerdem, wenn sich etwas ereignet, um eine Änderung des Streaming-Szenarios auszulösen, beginnt die Verhandlung erneut, mit dem [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis, das an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet wird, und der gesamte Prozess beginnt erneut, wie zuvor beschrieben. Dies kann in verschiedenen Situationen passieren, einschließlich:

- Änderungen im Netzwerkstatus, wie eine Änderung der Bandbreite, ein Übergang von Wi-Fi zur Mobilfunkverbindung oder ähnliches.
- Wechsel zwischen der Vorder- und Rückkamera auf einem Telefon.
- Eine Änderung der Konfiguration des Streams, wie seine Auflösung oder seine Bildrate.

##### Empfang neuer Streams

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden—entweder durch Aufruf ihrer [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)-Methode oder durch Neuverhandlung des Stream-Formats—wird ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` für jeden Track gesendet, der zur Verbindung hinzugefügt wird. Die Nutzung neu hinzugefügter Medien erfordert die Implementierung eines Handlers für das `track`-Ereignis. Ein häufiges Bedürfnis ist es, die eingehenden Medien an ein geeignetes HTML-Element anzuhängen. In unserem Beispiel fügen wir den Stream des Tracks dem {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Steam wird dem `"received_video"` {{HTMLElement("video")}}-Element angehängt, und das "Hang Up" {{HTMLElement("button")}}-Element wird aktiviert, sodass der Benutzer den Anruf beenden kann.

Sobald dieser Code abgeschlossen ist, wird endlich das Video, das vom anderen Peer gesendet wird, im lokalen Browserfenster angezeigt!

##### Umgang mit Track-Entfernungen

Ihr Code empfängt ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der entfernte Peer einen Track aus der Verbindung entfernt, indem er [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aufruft. Unser Handler für `"removetrack"` ist:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code ruft den eingehenden Video-`[`MediaStream`](/de/docs/Web/API/MediaStream)` von der [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)`-Eigenschaft des `"received_video"`{{HTMLElement("video")}}> Elements ab, ruft dann die`[`getTracks()`] (https://developer.mozilla.org/de/docs/Web/API/MediaStream)-Methode des Streams auf, um ein Array der Tracks des Streams zu erhalten ...

Wenn die Länge des Arrays null ist, was bedeutet, dass keine Tracks mehr im Stream vorhanden sind, beenden wir den Anruf durch Aufruf von `closeVideoCall()`. Dies stellt unseren App-Dienst bereit, um einen weiteren Anruf starten oder empfangen zu können. Informationen zur Funktionsweise von `closeVideoCall()` finden Sie unter [Den Anruf beenden](#den_anruf_beenden).

#### Den Anruf beenden

Es gibt viele Gründe, warum Anrufe enden können. Ein Anruf könnte abgeschlossen sein, indem eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat seinen Browser geschlossen oder einen Systemabsturz erlitten. In jedem Fall müssen alle guten Dinge zu einem Ende kommen.

##### Aufhängen

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung zu schließen und Ressourcen freizugeben. Dann wird eine `"hang-up"`-Nachricht erstellt und an das andere Ende des Anrufs gesendet, um den Peer zu bitten, sich sauber herunterzufahren.

##### Den Anruf beenden

Die `closeVideoCall()`-Funktion, die im Folgenden gezeigt wird, ist dafür verantwortlich, die Streams zu stoppen, aufzuräumen und das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt zu entsorgen:

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

Nachdem Referenzen auf die beiden {{HTMLElement("video")}}-Elemente gezogen wurden, prüfen wir, ob eine WebRTC-Verbindung besteht; wenn ja, fahren wir mit dem Trennen und Schließen des Anrufs fort:

1. Alle Ereignishandler werden entfernt. Dies verhindert, dass Streuereignishandler ausgelöst werden, während die Verbindung geschlossen wird, was möglicherweise Fehler verursachen könnte.
2. Für beide externen und internen Video-Streams durchlaufen wir jeden Track, rufen die [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop)-Methode auf, um jeden zu beenden.
3. Schließen Sie die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem Sie [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufrufen.
4. Setzen Sie `myPeerConnection` auf `null`, um sicherzustellen, dass unser Code lernt, dass es keinen laufenden Anruf gibt; das ist nützlich, wenn der Benutzer auf einen Namen in der Benutzerliste klickt.

Dann werden für beide eingehenden und ausgehenden {{HTMLElement("video")}}-Elemente [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) durch ihre [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute)-Methoden entfernt. Dies schließt die Dissoziation der Streams von den Video-Elementen ab.

Schließlich setzen wir die [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled)-Eigenschaft auf `true` für die "Hang Up"-Schaltfläche, damit sie nicht mehr klickbar ist, während kein Anruf in Sicht ist; dann setzen wir `targetUsername` auf `null`, da wir nicht mehr mit jemandem sprechen. So kann der Benutzer einen weiteren Benutzer anrufen oder einen eingehenden Anruf annehmen.

#### Umgang mit Statusänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Listener einrichten können, um Ihren Code über eine Vielzahl von Statusänderungen zu benachrichtigen. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungszustand

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden von der ICE-Schicht an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Verbindungszustand ändert (z. B. wenn der Anruf vom anderen Ende beendet wird).

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

Hier verwenden wir unsere `closeVideoCall()`-Funktion, wenn sich der ICE-Verbindungszustand in `"closed"` oder `"failed"` ändert. Dies handhabt die Beendigung unserer Verbindung, sodass wir bereit sind, erneut zu starten oder einen Anruf anzunehmen.

> [!NOTE]
> Wir überwachen den `disconnected`-Signalisierungszustand hier nicht, da dies auf vorübergehende Probleme hinweisen kann und nach einiger Zeit in einen `connected`-Zustand zurückkehren kann. Wenn Sie ihn beobachten, würde der Videoanruf bei jedem vorübergehenden Netzwerkproblem geschlossen.

##### ICE-Signalisierungsstatus

Ebenso überwachen wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungsstatus auf `closed` ändert, schließen wir auch den Anruf.

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
> Der `closed`-Signalisierungsstatus wurde zugunsten des `closed` [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) abgelöst. Wir beobachten es hier, um ein wenig Abwärtskompatibilität hinzuzufügen.

##### ICE-Sammlungsstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse werden verwendet, um Ihnen mitzuteilen, wenn der Zustand des ICE-Kandidatensammlungsprozesses geändert wird. Unser Beispiel nutzt dies für nichts, aber es kann nützlich sein, diese Ereignisse für Debugging-Zwecke zu beobachten sowie um zu erkennen, wenn die Sammlung von Kandidaten abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können nun [dieses Beispiel ausprobieren](https://webrtc-from-chat.onrender.com/), um es in Aktion zu sehen.
Öffnen Sie die Webkonsole auf beiden Geräten und schauen Sie sich die protokollierten Ausgaben an – auch wenn es nicht in dem oben gezeigten Code zu sehen ist, enthält der Code auf dem Server (und auf [GitHub](https://github.com/bsmth/examples/tree/main/webrtc-from-chat)) eine Menge Konsolenausgaben, sodass Sie die Signalisierungs- und Verbindungsprozesse in Aktion sehen können.

Eine weitere offensichtliche Verbesserung wäre es, eine Klingel-Funktion hinzuzufügen, sodass anstatt einfach den Benutzer um Erlaubnis zur Nutzung der Kamera und des Mikrofons zu bitten, ein "Nutzer X ruft an. Möchten Sie antworten?"-Prompt zuerst erscheint.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation) Muster

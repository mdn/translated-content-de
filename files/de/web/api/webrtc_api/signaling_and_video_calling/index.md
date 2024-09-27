---
title: Signaling und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 63297dea804061944e7430acd2c057d773770a4f
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-, Peer-to-Peer-Medienaustausch zwischen zwei Geräten. Eine Verbindung wird über einen Entdeckungs- und Aushandlungsprozess, genannt **Signaling**, hergestellt. Dieses Tutorial wird Sie durch den Aufbau eines Zwei-Wege-Videoanrufs führen.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-Technologie für den Echtzeitaustausch von Audio, Video und Daten, mit einem zentralen Vorbehalt. Eine Form der Entdeckung und Medienformataushandlung muss erfolgen, [wie an anderer Stelle besprochen](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection), damit zwei Geräte in verschiedenen Netzwerken einander finden können. Dieser Prozess wird **Signaling** genannt und umfasst, dass sich beide Geräte mit einem dritten, gemeinsam vereinbarten Server verbinden. Über diesen dritten Server können die zwei Geräte einander lokalisieren und Aushandlungsnachrichten austauschen.

In diesem Artikel werden wir den [WebSocket-Chat](https://webrtc-from-chat-v1-4.glitch.me/) weiter verbessern, der zuerst im Rahmen unserer WebSocket-Dokumentation erstellt wurde (dieser Artikel-Link ist noch ausstehend; er ist tatsächlich noch nicht online), um das Öffnen eines Zwei-Wege-Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Glitch ausprobieren](https://webrtc-from-chat-v1-4.glitch.me/) und Sie können [das Beispiel remixen](https://glitch.com/edit/#!/remix/webrtc-from-chat-v1-4), um damit zu experimentieren. Sie können sich auch das [komplette Projekt](https://github.com/mdn/samples-server/tree/master/s/webrtc-from-chat) auf GitHub ansehen.

> [!NOTE]
> Wenn Sie das Beispiel auf Glitch ausprobieren, beachten Sie bitte, dass alle Änderungen am Code sofort alle Verbindungen zurücksetzen. Darüber hinaus gibt es ein kurzes Timeout; die Glitch-Instanz ist nur für schnelle Experimente und Tests bestimmt.

## Der Signaling-Server

Für den Aufbau einer WebRTC-Verbindung zwischen zwei Geräten ist die Verwendung eines **Signaling-Servers** erforderlich, um zu klären, wie sie sich über das Internet verbinden können. Die Aufgabe eines Signaling-Servers besteht darin, als Vermittler zu dienen, um zwei Peers zu finden und eine Verbindung herzustellen, während die potenzielle Offenlegung privater Informationen so weit wie möglich minimiert wird. Wie erstellen wir diesen Server und wie funktioniert der Signaling-Prozess tatsächlich?

Zunächst benötigen wir den Signaling-Server selbst. WebRTC legt keinen Transportmechanismus für die Signaling-Informationen fest. Sie können alles verwenden, was Sie möchten, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signaling-Informationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signaling-Daten nicht verstehen oder interpretieren muss. Obwohl es sich um [SDP](/de/docs/Glossary/SDP) handelt, spielt das eigentlich keine große Rolle: Der Inhalt der Nachricht, die durch den Signaling-Server geht, ist im Wesentlichen eine Blackbox. Wichtig ist nur, dass Sie das Signaling-Daten an den anderen Peer senden, wenn das [ICE](/de/docs/Glossary/ICE)-Subsystem Sie dazu auffordert, und der andere Peer weiß, wie er diese Informationen empfangen und an sein eigenes ICE-Subsystem weiterleiten kann. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Die Inhalte sind für den Signaling-Server völlig irrelevant.

### Den Chat-Server für Signaling vorbereiten

Unser [Chat-Server](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket-API](/de/docs/Web/API/WebSockets_API), um Informationen als [JSON](/de/docs/Glossary/JSON)-Strings zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtenarten, um Aufgaben zu bearbeiten, wie das Registrieren neuer Benutzer, das Festlegen von Benutzernamen und das Senden öffentlicher Chat-Nachrichten.

Um den Server für die Unterstützung von Signaling und ICE-Aushandlung zu unterstützen, müssen wir den Code aktualisieren. Wir müssen es ermöglichen, Nachrichten an einen bestimmten Benutzer zu senden, anstatt sie an alle verbundenen Benutzer zu übertragen, und sicherstellen, dass unbekannte Nachrichtentypen durchgereicht und übermittelt werden, ohne dass der Server wissen muss, was sie sind. Damit können wir Signaling-Nachrichten über diesen Server senden, anstatt einen separaten Server zu benötigen.

Schauen wir uns die Änderungen an, die wir am Chat-Server vornehmen müssen, um WebRTC-Signaling zu unterstützen. Dies befindet sich in der Datei [`chatserver.js`](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chatserver.js).

Zuerst ist die Funktion `sendToOneUser()` hinzuzufügen. Wie der Name schon sagt, sendet dies eine stringifizierte JSON-Nachricht an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion iteriert über die Liste der verbundenen Benutzer, bis sie einen gefunden hat, der dem angegebenen Benutzernamen entspricht, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein stringifiziertes JSON-Objekt. Wir könnten es ursprünglich so gestalten, dass es unser ursprüngliches Nachrichtenobjekt empfängt, aber in diesem Beispiel ist es effizienter so. Da die Nachricht bereits stringifiziert wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir einfach seine Methode [`send()`](/de/docs/Web/API/WebSocket/send) aufrufen können.

Unser ursprüngliches Chat-Demo unterstützte nicht das Versenden von Nachrichten an einen bestimmten Benutzer. Die nächste Aufgabe besteht darin, den Haupt-Handler für WebSocket-Nachrichten zu aktualisieren, um dies zu unterstützen. Dies beinhaltet eine Änderung am Ende des Handlers für die Nachricht `"connection"`:

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

Dieser Code überprüft nun die ausstehende Nachricht, um festzustellen, ob sie eine `target`-Eigenschaft hat. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an diesen zu senden. Andernfalls wird die Nachricht durch Iteration über die Verbindungslisten an alle Benutzer gesendet.

Da der bestehende Code das Senden beliebiger Nachrichtentypen ermöglicht, sind keine weiteren Änderungen erforderlich. Unsere Clients können nun Nachrichten unbekannten Typs an jeden bestimmten Benutzer senden, sodass sie gewünschte Signaling-Nachrichten hin und her senden können.

Das ist alles, was wir auf der Serverseite der Gleichung ändern müssen. Jetzt betrachten wir das Signaling-Protokoll, das wir implementieren werden.

### Das Signaling-Protokoll entwerfen

Jetzt, da wir einen Mechanismus für den Nachrichtenaustausch erstellt haben, benötigen wir ein Protokoll, das festlegt, wie diese Nachrichten aussehen. Dies kann auf verschiedene Arten durchgeführt werden; das hier gezeigte ist nur eine mögliche Struktur für Signaling-Nachrichten.

Der Server dieses Beispiels verwendet stringifizierte JSON-Objekte, um mit seinen Clients zu kommunizieren. Dies bedeutet, dass unsere Signaling-Nachrichten im JSON-Format vorliegen, mit Inhalten, die angeben, welche Art von Nachrichten sie sind und welche zusätzlichen Informationen erforderlich sind, um die Nachrichten ordnungsgemäß zu bearbeiten.

#### Austauschen von Sitzungsbeschreibungen

Wenn der Signaling-Prozess beginnt, wird ein **Angebot** von dem Benutzer erstellt, der den Anruf initiiert. Dieses Angebot enthält eine Sitzungsbeschreibung im [SDP](/de/docs/Glossary/SDP)-Format und muss an den empfangenden Benutzer, den wir als **Callee** bezeichnen, übermittelt werden. Der Callee antwortet auf das Angebot mit einer **Antwort**-Nachricht, die ebenfalls eine SDP-Beschreibung enthält. Unser Signaling-Server verwendet WebSocket, um Angebotsnachrichten mit dem Typ `"video-offer"` zu übertragen, und Antwortnachrichten mit dem Typ `"video-answer"`. Diese Nachrichten enthalten die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung erhalten soll (wenn der Anrufer die Nachricht sendet, gibt dies den Callee an und umgekehrt).
- `sdp`
  - : Der SDP (Session Description Protocol)-String, der das lokale Ende der Verbindung aus Sicht des Absenders (oder das Remote-Ende der Verbindung aus Sicht des Empfängers) beschreibt.

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen noch nicht, wie die Mediendaten selbst übertragen werden. Hier kommt [Interactive Connectivity Establishment (ICE)](/de/docs/Glossary/ICE) ins Spiel.

### Austausch von ICE-Kandidaten

Zwei Peers müssen ICE-Kandidaten austauschen, um die eigentliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer verwenden kann, um zu kommunizieren. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiterhin Kandidaten, bis ihm die Vorschläge ausgehen, selbst wenn das Streaming bereits begonnen hat.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Vorgang des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen gemeinsam kompatiblen Kandidaten einigen, wird das SDP dieses Kandidaten von jedem Peer verwendet, um eine Verbindung zu erstellen und zu öffnen, über die dann Medien zu fließen beginnen. Wenn sie sich später auf einen besseren (in der Regel leistungsstärkeren) Kandidaten einigen, kann sich der Stream bei Bedarf ändern.

Obwohl momentan nicht unterstützt, könnte ein Kandidat, der empfangen wird, nachdem die Medien bereits fließen, theoretisch auch verwendet werden, um bei Bedarf auf eine Verbindung mit geringerer Bandbreite herunterzustufen.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem eine JSON-Nachricht des Typs `"new-ice-candidate"` über den Signaling-Server an den entfernten Peer gesendet wird. Jede Kandidatenmeldung enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Aushandlung im Gange ist; der Server wird die Nachricht nur an diesen Benutzer weiterleiten.
- `candidate`
  - : Der SDP-Kandidat, welcher die vorgeschlagene Verbindungsmethode beschreibt. Normalerweise müssen Sie sich den Inhalt dieses Strings nicht ansehen. Ihr Code muss ihn einfach durch den Signaling-Server an den Remote-Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp (zum Beispiel, ob die angegebene IP der Peer selbst oder ein Relais-Server ist), zusammen mit anderen Informationen vor, die erforderlich sind, um die beiden Computer miteinander zu verbinden. Dazu gehören auch NAT oder andere Netzwerkanforderungen.

> [!NOTE]
> Das Wichtige ist: Ihr Code ist während der ICE-Aushandlung nur dafür verantwortlich, ausgehende Kandidaten von der ICE-Schicht zu akzeptieren und sie beim Ausführen Ihres [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handlers über die Signaling-Verbindung an den anderen Peer zu senden, sowie empfangene ICE-Kandidaten-Nachrichten vom Signaling-Server (wenn die Nachricht `"new-ice-candidate"` empfangen wird) anzunehmen und sie an Ihre ICE-Schicht durch Aufruf von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) zu liefern. Das ist alles.
>
> Der Inhalt des SDP ist im Wesentlichen irrelevant für Sie in allen Fällen. Vermeiden Sie die Versuchung, es komplizierter zu machen, als es sein muss, bis Sie wirklich wissen, was Sie tun. In dieser Richtung liegt der Wahnsinn.

Alles, was Ihr Signaling-Server jetzt tun muss, ist die Nachrichten zu senden, um die er gebeten wird. Ihr Workflow kann auch Login/Auth-Funktionen erfordern, aber solche Details variieren.

> [!NOTE]
> Das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event und das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Promise sind beide asynchrone Aufrufe, die separat behandelt werden. Stellen Sie sicher, dass Ihr Signaling dabei nicht die Reihenfolge ändert! Zum Beispiel muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Setzen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Ablauf des Signaling-Transaktionsflusses

Der Signaling-Prozess umfasst diesen Austausch von Nachrichten zwischen zwei Peers mit einem Vermittler, dem Signaling-Server. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es einige wichtige Punkte, an denen Signaling-Nachrichten verarbeitet werden:

- Jeder Benutzer-Client, der innerhalb eines Webbrousers läuft
- Jeder Webbrowser des Benutzers
- Der Signaling-Server
- Der Webserver, der den Chat-Service hostet

Stellen Sie sich vor, Naomi und Priya führen eine Diskussion mit der Chat-Software, und Naomi beschließt, einen Videoanruf zwischen den beiden zu eröffnen. Hier ist die erwartete Abfolge der Ereignisse:

![Diagramm des Signaling-Prozesses](webrtc_-_signaling_diagram.svg)

Wir werden dies im Laufe dieses Artikels detaillierter sehen.

### Prozess des Austauschs von ICE-Kandidaten

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, tritt sie in einen Austausch zwischen den verschiedenen Punkten in der Kette ein, der folgendermaßen aussieht:

![Diagramm des ICE-Kandidaten-Austauschprozesses](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie diese von ihrer lokalen ICE-Schicht erhält; es gibt kein Abwechseln oder Batchen von Kandidaten. Sobald die beiden Peers einen Kandidaten vereinbaren, den sie beide verwenden können, beginnt der Medienfluss. Jeder Peer sendet weiterhin Kandidaten, bis ihm die Optionen ausgehen, selbst nachdem die Medien bereits zu fließen begonnen haben. Dies geschieht in der Hoffnung, bessere Optionen als die ursprünglich ausgewählte zu identifizieren.

Wenn sich die Bedingungen ändern (z. B. verschlechtert sich die Netzwerkverbindung), kann einer oder beide Peers vorschlagen, zu einer Medienauflösung mit niedrigerer Bandbreite zu wechseln oder zu einem alternativen Codec. Dies löst einen neuen Austausch von Kandidaten aus, nach dem möglicherweise ein weiterer Wechsel des Medienformats und/oder des Codecs stattfindet. Im Leitfaden [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Formats/WebRTC_codecs) können Sie mehr über die Codecs erfahren, die WebRTC von Browsern unterstützt werden müssen, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten Codecs auswählen, die verwendet werden sollen.

Optional, siehe {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 ("Verhandeln von Kandidatenpaaren und Abschluss des ICE")](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3), wenn Sie ein besseres Verständnis dafür wünschen, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Sie sollten beachten, dass Kandidaten ausgetauscht werden und Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. Das alles geschieht hinter den Kulissen. Unsere Aufgabe ist es, die Kandidaten über den Signaling-Server hin und her zu senden.

## Die Client-Anwendung

Der Kern jedes Signaling-Prozesses ist die Nachrichtenverarbeitung. Es ist nicht erforderlich, WebSockets für Signaling zu verwenden, aber es ist eine häufige Lösung. Sie sollten natürlich einen Mechanismus zum Austausch von Signaling-Informationen wählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chat-Client, um Videoanrufe zu unterstützen.

### Aktualisierung der HTML

Das HTML für unseren Client benötigt einen Ort, an dem das Video angezeigt werden soll. Dies erfordert Video-Elemente und einen Button, um den Anruf zu beenden:

```html
<div class="flexChild" id="camera-container">
  <div class="camera-box">
    <video id="received_video" autoplay></video>
    <video id="local_video" autoplay muted></video>
    <button id="hangup-button" onclick="hangUpCall();" disabled>Hang Up</button>
  </div>
</div>
```

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, was uns volle Kontrolle über das Seitenlayout gibt, indem es die Verwendung von CSS ermöglicht. Wir werden auf die Gestaltung in diesem Leitfaden verzichten, aber [sehen Sie sich das CSS auf GitHub an](https://github.com/mdn/samples-server/blob/master/s/webrtc-from-chat/chat.css), um zu sehen, wie wir damit umgegangen sind. Beachten Sie die zwei {{HTMLElement("video")}}-Elemente, eines für die Selbstansicht, eines für die Verbindung, sowie das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` wird das Video anzeigen, das vom verbundenen Benutzer empfangen wird. Wir geben das `autoplay`-Attribut an, um sicherzustellen, dass das Video, sobald es ankommt, sofort wiedergegeben wird. Dies beseitigt die Notwendigkeit, die Wiedergabe explizit in unserem Code zu behandeln. Das `local_video`-`<video>`-Element zeigt eine Vorschau der Benutzerkamera; das `muted`-Attribut wird angegeben, da wir keinen lokalen Ton in diesem Vorschaufenster hören müssen.

Schließlich ist der `hangup-button` {{HTMLElement("button")}}, um sich von einem Anruf zu trennen, definiert und so konfiguriert, dass er beim Start deaktiviert ist (wir setzen dies als Ausgangszustand, wenn kein Anruf stattfindet) und die Funktion `hangUpCall()` bei Klick ausführt. Diese Funktion hat die Aufgabe, den Anruf zu beenden und eine Benachrichtigung an den Signaling-Server zu senden, um den anderen Peer ebenfalls zu beenden.

### Der JavaScript-Code

Wir werden diesen Code in funktionale Bereiche unterteilen, um einfacher beschreiben zu können, wie er funktioniert. Der Hauptteil dieses Codes befindet sich in der `connect()`-Funktion: Sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket) Server auf Port 6503 und richtet einen Handler ein, um Nachrichten im JSON-Objekt-Format zu empfangen. Dieser Code behandelt in der Regel Text-Chat-Nachrichten wie bisher.

#### Nachrichten an den Signaling-Server senden

In unserem Code rufen wir `sendToServer()` auf, um Nachrichten an den Signaling-Server zu senden. Diese Funktion nutzt die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung, um ihre Arbeit zu erledigen:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das Nachrichtensystem, das als Argument in diese Funktion übergeben wird, wird in einen JSON-String konvertiert, indem {{jsxref("JSON.stringify()")}} aufgerufen wird, und dann rufen wir die [`send()`](/de/docs/Web/API/WebSocket/send)-Funktion der WebSocket-Verbindung auf, um die Nachricht an den Server zu übermitteln.

#### Die Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die `"userlist"`-Nachricht behandelt, ruft `handleUserlistMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links vom Chat-Bereich angezeigt wird. Diese Funktion erhält ein Nachrichtenobjekt, dessen `users`-Eigenschaft ein Array von Strings mit den Benutzernamen aller verbundenen Benutzer ist.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}, das die Liste der Benutzernamen enthält, in der Variablen `listElem` erhalten haben, leeren wir die Liste, indem wir jedes ihrer untergeordneten Elemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste zu aktualisieren, indem man einzelne Benutzer hinzufügt und entfernt, anstatt die gesamte Liste jedes Mal neu zu erstellen, wenn sie sich ändert, aber das ist für die Zwecke dieses Beispiels ausreichend.

Dann iterieren wir über das Array der Benutzernamen mithilfe von {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element und dann einen neuen Textknoten, der den Benutzernamen enthält, mit [`createTextNode()`](/de/docs/Web/API/Document/createTextNode). Dieser Textknoten wird als untergeordnetes Element des `<li>` hinzugefügt. Als Nächstes setzen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Event auf das Listenelement, sodass das Klicken auf einen Benutzernamen unsere `invite()`-Methode aufruft, auf die wir im nächsten Abschnitt eingehen werden.

Schließlich fügen wir das neue Element der `<ul>` hinzu, die alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die `invite()`-Funktion als Event-Handler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einer grundlegenden Sanity-Überprüfung: Ist der Benutzer bereits verbunden? Wenn es bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gibt, kann er natürlich keinen Anruf tätigen. Dann wird der Name des Benutzers, auf den geklickt wurde, vom [`textContent`](/de/docs/Web/API/Node/textContent)-Eigenschaft des Ereignisziels erhalten, und wir prüfen, ob es nicht der gleiche Benutzer ist, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und deren grundlegende Konfiguration vornimmt.

Sobald die `RTCPeerConnection` erstellt wurde, bitten wir um Zugriff auf die Kamera und das Mikrofon des Benutzers, indem wir [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) aufrufen, das uns über die [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)-Eigenschaft bereitgestellt wird. Wenn dies erfolgreich ist und das zurückgegebene Promise erfüllt wird, wird unser `then`-Handler ausgeführt. Er empfängt als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video von ihrer Webcam darstellt.

> [!NOTE]
> Wir könnten die Menge der zulässigen Medieneingaben auf ein bestimmtes Gerät oder einen Satz von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Liste von Geräten zu erhalten, die resultierende Liste basierend auf unseren gewünschten Kriterien filtern und dann die `deviceId`-Werte der ausgewählten Geräte in dem `deviceId`-Feld des `mediaConstraints`-Objekts verwenden, das an `getUserMedia()` übergeben wird. In der Praxis ist dies selten notwendig, da die meiste Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir hängen den eingehenden Stream an das lokale Vorschau-{{HTMLElement("video")}}-Element, indem wir die [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft des Elements setzen. Da das Element so konfiguriert ist, dass eingehendes Video automatisch abgespielt wird, beginnt der Stream in unserem lokalen Vorschaufenster zu spielen.

Wir iterieren dann über die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Auch wenn die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn Sie es für angemessen halten. Medien, die empfangen werden, bevor die ICE-Aushandlung abgeschlossen ist, können verwendet werden, um ICE zu unterstützen, die beste Verbindungsstrategie zu entscheiden, und damit zur Aushandlung beizutragen.

Beachten Sie, dass bei nativen Apps, wie einer Telefonanwendung, Sie nicht mit dem Senden beginnen sollten, bevor die Verbindung an beiden Enden mindestens akzeptiert wurde, um zu vermeiden, dass Video- und/oder Audiodaten unbeabsichtigt gesendet werden, wenn der Benutzer nicht darauf vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt sind, wird ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Event an die Verbindung ausgelöst, sodass die ICE-Aushandlung gestartet werden kann.

Wenn beim Versuch, den lokalen Medienstream zu erhalten, ein Fehler auftritt, ruft unsere `catch`-Klausel `handleGetUserMediaError()` auf, das bei Bedarf eine entsprechende Fehlermeldung an den Benutzer anzeigt.

#### Behandlung von getUserMedia()-Fehlern

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

In allen Fällen, bis auf einen, wird eine Fehlermeldung angezeigt. In diesem Beispiel ignorieren wir die Ergebnisse `"SecurityError"` und `"PermissionDeniedError"` und behandeln die Verweigerung der Erlaubnis zur Verwendung der Medienhardware so, als hätte der Benutzer den Anruf abgebrochen.

Unabhängig davon, warum ein Versuch, den Stream zu erhalten, fehlschlägt, rufen wir unsere `closeVideoCall()`-Funktion auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und alle bereits für den Anrufversuch zugewiesenen Ressourcen freizugeben. Dieser Code wurde so entwickelt, dass er sicher mit teilweise gestarteten Anrufen umgehen kann.

#### Erstellung der Peer-Verbindung

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Callee verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu erstellen, ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Callee ein Angebot vom Anrufer erhält.

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

Bei der Verwendung des [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection)-Konstruktors geben wir ein Objekt mit Konfigurationsparametern für die Verbindung an. Wir verwenden in diesem Beispiel nur eines davon: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server beschreiben, die von der [ICE](/de/docs/Glossary/ICE)-Schicht verwendet werden sollen, um eine Route zwischen dem Anrufer und dem Callee herzustellen. Diese Server werden verwendet, um die beste Route und die besten Protokolle zu bestimmen, die beim Kommunizieren zwischen den Peers verwendet werden sollen, selbst wenn sie hinter einer Firewall oder einem [NAT](/de/docs/Glossary/NAT) versteckt sind.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Sie selbst besitzen oder für deren Nutzung Sie speziell autorisiert sind. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber der Missbrauch solcher Ressourcen ist eine schlechte Angewohnheit.

Jedes Objekt in `iceServers` enthält mindestens ein `urls`-Feld, das URLs bereitstellt, unter denen der angegebene Server erreicht werden kann. Es kann auch `username` und `credential`-Werte bereitstellen, um gegebenenfalls die Authentifizierung zu ermöglichen.

Nachdem wir die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt haben, richten wir die Event-Handler für die Ereignisse ein, die für uns von Bedeutung sind.

Die ersten drei dieser Event-Handler sind erforderlich; Sie müssen sie behandeln, um etwas mit gestreamten Medien mit WebRTC zu tun. Der Rest ist nicht unbedingt erforderlich, kann aber nützlich sein, und wir werden sie erkunden. Es gibt noch ein paar andere Events, die in diesem Beispiel ebenfalls nicht verwendet werden. Hier ist eine Zusammenfassung jedes der Event-Handler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Das lokale ICE-Layer ruft Ihren [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Event-Handler auf, wenn es die Übertragung eines ICE-Kandidaten an den anderen Peer über Ihren Signaling-Server erfordert. Weitere Informationen und den Code für dieses Beispiel finden Sie unter [Sending ICE candidates](#sending_ice_candidates).
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Event wird von der lokalen WebRTC-Schicht aufgerufen, wenn der Verbindung ein Track hinzugefügt wird. Damit können Sie z. B. den eingehenden Medien zu einem Element hinzufügen, um sie darzustellen. Siehe [Empfang neuer Streams](#receiving_new_streams) für Details.
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird immer dann aufgerufen, wenn die WebRTC-Infrastruktur Sie benötigt, um den Verhandlungsprozess der Sitzung neu zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und zu senden, an den Callee, mit der Bitte, sich mit uns zu verbinden. Siehe [Starten der Aushandlung](#starten_der_aushandlung), um zu sehen, wie wir das handhaben.
- [`onremovetrack`](/de/docs/Web/API/RTCPeerConnection/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um das [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis zu behandeln; es wird an die `RTCPeerConnection` gesendet, wenn der Remote-Peer einen Track aus den gesendeten Medien entfernt. Siehe [Entfernen von Tracks behandeln](#handling_the_removal_of_tracks).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Event wird von der ICE-Schicht gesendet, um Sie über Änderungen des Zustands der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu wissen, wann die Verbindung fehlgeschlagen ist oder verloren gegangen ist. Wir sehen uns den Code dafür in [ICE-Verbindungsstatus](#ice_connection_state) unten an.
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Event, wenn sich der Prozess des Sammelns von Kandidaten vom ICE-Agenten ändert (wie z.B. das Starten des Kandidatensammelns oder das Abschließen der Verhandlung). Siehe [ICE-Sammel-Status](#ice_gathering_state) unten.
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen das [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Nachricht, wenn sich der Zustand des Signalisierungsprozesses ändert (oder wenn sich die Verbindung zum Signalisierungsserver ändert). Siehe [Signalisierungsstatus](#ice_signaling_state), um unseren Code zu sehen.

#### Starten der Aushandlung

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt, einen Medienstream erstellt und dessen Tracks wie in [Einen Anruf starten](#einen_anruf_starten) zur Verbindung hinzugefügt hat, sendet der Browser ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Event an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), um anzugeben, dass es bereit ist, mit dem anderen Peer zu verhande...

> [The content is too long to be processed entirely at once. For complete translation, please divide it into smaller sections and request again.]

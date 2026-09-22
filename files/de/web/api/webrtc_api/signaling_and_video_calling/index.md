---
title: Signalisierung und Videoanrufe
slug: Web/API/WebRTC_API/Signaling_and_video_calling
l10n:
  sourceCommit: 2e0b9415ed31484a4830e214eff9e06e408c7261
---

{{DefaultAPISidebar("WebRTC")}}

[WebRTC](/de/docs/Web/API/WebRTC_API) ermöglicht den Echtzeit-Medienaustausch per Peer-to-Peer zwischen zwei Geräten. Eine Verbindung wird durch einen Erkennungs- und Aushandlungsprozess hergestellt, der **Signalisierung** genannt wird. Dieses Tutorial führt Sie durch die Erstellung eines Zwei-Wege-Videoanrufs.

[WebRTC](/de/docs/Web/API/WebRTC_API) ist eine vollständig Peer-to-Peer-basierte Technologie für den Austausch von Audio, Video und Daten in Echtzeit, mit einer wesentlichen Einschränkung. Damit sich zwei Geräte in unterschiedlichen Netzwerken finden können, muss eine Form der Erkennung und Aushandlung des Medienformats stattfinden, [wie an anderer Stelle erläutert](/de/docs/Web/API/WebRTC_API/Session_lifetime#establishing_the_connection). Dieser Prozess wird **Signalisierung** genannt und umfasst, dass beide Geräte eine Verbindung zu einem dritten, gemeinsam vereinbarten Server herstellen. Über diesen dritten Server können sich die beiden Geräte gegenseitig finden und Aushandlungsnachrichten austauschen.

In diesem Artikel erweitern wir die Anwendung weiter, um das Öffnen eines Zwei-Wege-Videoanrufs zwischen Benutzern zu unterstützen. Sie können [dieses Beispiel auf Render ausprobieren](https://webrtc-from-chat.onrender.com), um ebenfalls damit zu experimentieren.
Sie können sich auch [das vollständige Projekt](https://github.com/bsmth/examples/tree/main/webrtc-from-chat) auf GitHub ansehen.

## Der Signalisierungsserver

Das Herstellen einer WebRTC-Verbindung zwischen zwei Geräten erfordert die Verwendung eines **Signalisierungsservers**, um zu bestimmen, wie sie über das Internet verbunden werden. Die Aufgabe eines Signalisierungsservers besteht darin, als Vermittler zu dienen, damit zwei Peers eine Verbindung finden und herstellen können, während potenziell private Informationen so weit wie möglich geschützt werden. Wie erstellen wir diesen Server, und wie funktioniert der Signalisierungsprozess tatsächlich?

Zunächst benötigen wir den Signalisierungsserver selbst. WebRTC schreibt keinen Transportmechanismus für die Signalisierungsinformationen vor. Sie können alles verwenden, was Sie möchten, von [WebSocket](/de/docs/Web/API/WebSockets_API) über [`fetch()`](/de/docs/Web/API/Window/fetch) bis hin zu Brieftauben, um die Signalisierungsinformationen zwischen den beiden Peers auszutauschen.

Es ist wichtig zu beachten, dass der Server den Inhalt der Signalisierungsdaten nicht verstehen oder interpretieren muss. Obwohl es sich um {{Glossary("SDP", "SDP")}} handelt, ist selbst das nicht besonders wichtig: Der Inhalt der Nachricht, die den Signalisierungsserver durchläuft, ist praktisch eine Blackbox. Wichtig ist, dass Sie die Signalisierungsdaten an den anderen Peer senden, wenn das {{Glossary("ICE", "ICE")}}-Subsystem Sie dazu auffordert, und dass der andere Peer weiß, wie diese Informationen empfangen und an sein eigenes ICE-Subsystem übergeben werden. Alles, was Sie tun müssen, ist, die Informationen hin und her zu leiten. Der Inhalt ist für den Signalisierungsserver völlig unerheblich.

### Den Chatserver für die Signalisierung vorbereiten

Unser [Chatserver](https://github.com/mdn/samples-server/tree/master/s/websocket-chat) verwendet die [WebSocket API](/de/docs/Web/API/WebSockets_API), um Informationen als {{Glossary("JSON", "JSON")}}-Zeichenfolgen zwischen jedem Client und dem Server zu senden. Der Server unterstützt mehrere Nachrichtentypen zur Verarbeitung von Aufgaben wie dem Registrieren neuer Benutzer, dem Festlegen von Benutzernamen und dem Senden öffentlicher Chatnachrichten.

Damit der Server die Signalisierung und ICE-Aushandlung unterstützen kann, müssen wir den Code aktualisieren. Wir müssen Nachrichten an einen bestimmten Benutzer statt an alle verbundenen Benutzer senden können und sicherstellen, dass nicht erkannte Nachrichtentypen durchgeleitet und zugestellt werden, ohne dass der Server wissen muss, was sie sind. Dadurch können wir Signalisierungsnachrichten über denselben Server senden, statt einen separaten Server zu benötigen.

Sehen wir uns die Änderungen an, die wir am Chatserver vornehmen müssen, um WebRTC-Signalisierung zu unterstützen. Diese befinden sich in der Datei [`chatserver.js`](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat-server.js).

Zunächst fügen wir die Funktion `sendToOneUser()` hinzu. Wie der Name andeutet, sendet sie eine JSON-Nachricht als Zeichenfolge an einen bestimmten Benutzernamen.

```js
function sendToOneUser(target, msgString) {
  connectionArray.find((conn) => conn.username === target).send(msgString);
}
```

Diese Funktion durchläuft die Liste der verbundenen Benutzer, bis sie einen Eintrag findet, der dem angegebenen Benutzernamen entspricht, und sendet dann die Nachricht an diesen Benutzer. Der Parameter `msgString` ist ein JSON-Objekt als Zeichenfolge. Wir hätten die Funktion unser ursprüngliches Nachrichtenobjekt empfangen lassen können, aber in diesem Beispiel ist diese Variante effizienter. Da die Nachricht bereits in eine Zeichenfolge umgewandelt wurde, können wir sie ohne weitere Verarbeitung senden. Jeder Eintrag in `connectionArray` ist ein [`WebSocket`](/de/docs/Web/API/WebSocket)-Objekt, sodass wir dessen Methode [`send()`](/de/docs/Web/API/WebSocket/send) direkt aufrufen können.

Unsere ursprüngliche Chat-Demo unterstützte das Senden von Nachrichten an einen bestimmten Benutzer nicht. Die nächste Aufgabe besteht darin, den Haupt-Handler für WebSocket-Nachrichten entsprechend zu aktualisieren. Dazu ist eine Änderung nahe dem Ende des `"connection"`-Nachrichten-Handlers erforderlich:

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

Dieser Code prüft nun die ausstehende Nachricht darauf, ob sie eine Eigenschaft `target` enthält. Wenn diese Eigenschaft vorhanden ist, gibt sie den Benutzernamen des Clients an, an den die Nachricht gesendet werden soll, und wir rufen `sendToOneUser()` auf, um die Nachricht an ihn zu senden. Andernfalls wird die Nachricht durch Iteration über die Verbindungsliste an alle Benutzer gesendet.

Da der vorhandene Code das Senden beliebiger Nachrichtentypen erlaubt, sind keine zusätzlichen Änderungen erforderlich. Unsere Clients können nun Nachrichten unbekannter Typen an jeden bestimmten Benutzer senden und dadurch Signalisierungsnachrichten nach Bedarf hin und her senden.

Das ist alles, was wir auf der Serverseite ändern müssen. Betrachten wir nun das Signalisierungsprotokoll, das wir implementieren werden.

### Das Signalisierungsprotokoll entwerfen

Nachdem wir einen Mechanismus zum Austausch von Nachrichten erstellt haben, benötigen wir ein Protokoll, das definiert, wie diese Nachrichten aussehen. Dies kann auf verschiedene Arten erfolgen; das hier gezeigte Verfahren ist nur eine mögliche Struktur für Signalisierungsnachrichten.

Der Server dieses Beispiels verwendet JSON-Objekte als Zeichenfolgen, um mit seinen Clients zu kommunizieren. Das bedeutet, dass unsere Signalisierungsnachrichten im JSON-Format vorliegen und Inhalte enthalten, die angeben, um welche Art von Nachrichten es sich handelt, sowie alle zusätzlichen Informationen, die für eine korrekte Verarbeitung erforderlich sind.

#### Sitzungsbeschreibungen austauschen

Beim Start des Signalisierungsprozesses erstellt der Benutzer, der den Anruf initiiert, ein **Angebot**. Dieses Angebot enthält eine Sitzungsbeschreibung im {{Glossary("SDP", "SDP")}}-Format und muss an den empfangenden Benutzer übermittelt werden, den wir den **Angerufenen** nennen. Der Angerufene antwortet auf das Angebot mit einer **Antwort**-Nachricht, die ebenfalls eine SDP-Beschreibung enthält. Unser Signalisierungsserver verwendet WebSocket, um Angebotsnachrichten mit dem Typ `"video-offer"` und Antwortnachrichten mit dem Typ `"video-answer"` zu übertragen. Diese Nachrichten haben die folgenden Felder:

- `type`
  - : Der Nachrichtentyp; entweder `"video-offer"` oder `"video-answer"`.
- `name`
  - : Der Benutzername des Absenders.
- `target`
  - : Der Benutzername der Person, die die Beschreibung empfangen soll. Wenn der Anrufer die Nachricht sendet, gibt dies den Angerufenen an, und umgekehrt.
- `sdp`
  - : Die SDP-Zeichenfolge (Session Description Protocol), die das lokale Ende der Verbindung aus Sicht des Absenders beschreibt – oder das entfernte Ende der Verbindung aus Sicht des Empfängers.

Zu diesem Zeitpunkt wissen die beiden Teilnehmer, welche [Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) und [Codec-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter) für diesen Anruf verwendet werden sollen. Sie wissen jedoch noch nicht, wie die Mediendaten selbst übertragen werden. Hier kommt {{Glossary("ICE", "Interactive Connectivity Establishment (ICE)")}} ins Spiel.

### ICE-Kandidaten austauschen

Zwei Peers müssen ICE-Kandidaten austauschen, um die tatsächliche Verbindung zwischen ihnen auszuhandeln. Jeder ICE-Kandidat beschreibt eine Methode, die der sendende Peer zur Kommunikation verwenden kann. Jeder Peer sendet Kandidaten in der Reihenfolge, in der sie entdeckt werden, und sendet weiter Kandidaten, bis ihm die Vorschläge ausgehen – auch wenn die Medien bereits gestreamt werden.

Ein [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, um den Prozess des Hinzufügens einer lokalen Beschreibung mit `pc.setLocalDescription(offer)` abzuschließen.

Sobald die beiden Peers sich auf einen gegenseitig kompatiblen Kandidaten einigen, wird dessen SDP von jedem Peer verwendet, um eine Verbindung zu erstellen und zu öffnen, über die die Medien anschließend fließen. Wenn sie sich später auf einen besseren Kandidaten einigen – in der Regel mit höherer Leistung –, kann der Stream bei Bedarf seine Formate ändern.

Obwohl dies derzeit nicht unterstützt wird, könnte ein Kandidat, der empfangen wird, nachdem die Medien bereits fließen, theoretisch auch verwendet werden, um bei Bedarf auf eine Verbindung mit geringerer Bandbreite zurückzustufen.

Jeder ICE-Kandidat wird an den anderen Peer gesendet, indem über den Signalisierungsserver eine JSON-Nachricht des Typs `"new-ice-candidate"` an den Remote-Peer gesendet wird. Jede Kandidatennachricht enthält diese Felder:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername der Person, mit der die Aushandlung erfolgt; der Server leitet die Nachricht nur an diesen Benutzer weiter.
- `candidate`
  - : Die SDP-Kandidatenzeichenfolge, die die vorgeschlagene Verbindungsmethode beschreibt. Normalerweise müssen Sie den Inhalt dieser Zeichenfolge nicht betrachten. Ihr Code muss sie lediglich über den Signalisierungsserver an den Remote-Peer weiterleiten.

Jede ICE-Nachricht schlägt ein Kommunikationsprotokoll (TCP oder UDP), eine IP-Adresse, eine Portnummer, einen Verbindungstyp vor – beispielsweise, ob die angegebene IP der Peer selbst oder ein Relay-Server ist – sowie weitere Informationen, die benötigt werden, um die beiden Computer miteinander zu verbinden. Dazu gehören NAT oder andere Netzwerkkomplexitäten.

> [!NOTE]
> Wichtig ist Folgendes: Die einzige Aufgabe Ihres Codes während der ICE-Aushandlung besteht darin, ausgehende Kandidaten aus der ICE-Schicht anzunehmen und sie über die Signalisierungsverbindung an den anderen Peer zu senden, wenn Ihr [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Handler ausgeführt wird, sowie ICE-Kandidatenmeldungen vom Signalisierungsserver zu empfangen – wenn die Nachricht `"new-ice-candidate"` empfangen wird – und sie durch Aufrufen von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) an Ihre ICE-Schicht zu übergeben. Das ist alles.
>
> Der Inhalt der SDP ist für Sie in praktisch allen Fällen irrelevant. Widerstehen Sie der Versuchung, dies komplizierter zu gestalten, bis Sie wirklich wissen, was Sie tun. Das führt sonst in den Wahnsinn.

Ihr Signalisierungsserver muss nun lediglich die Nachrichten senden, die von ihm angefordert werden. Ihr Arbeitsablauf kann außerdem Anmelde- oder Authentifizierungsfunktionen erfordern, aber solche Details unterscheiden sich.

> [!NOTE]
> Sowohl das [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignis als auch das [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer)-Promise sind asynchrone Aufrufe, die getrennt verarbeitet werden. Stellen Sie sicher, dass Ihre Signalisierung die Reihenfolge nicht verändert! Beispielsweise muss [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) mit den ICE-Kandidaten des Servers nach dem Setzen der Antwort mit [`setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufgerufen werden.

### Ablauf der Signalisierungstransaktion

Der Signalisierungsprozess umfasst diesen Nachrichtenaustausch zwischen zwei Peers unter Verwendung eines Vermittlers, des Signalisierungsservers. Der genaue Prozess variiert natürlich, aber im Allgemeinen gibt es einige Schlüsselpunkte, an denen Signalisierungsnachrichten verarbeitet werden:

- Der Client jedes Benutzers, der in einem Webbrowser ausgeführt wird
- Der Webbrowser jedes Benutzers
- Der Signalisierungsserver
- Der Webserver, der den Chatdienst hostet

Stellen Sie sich vor, Naomi und Priya führen mithilfe der Chatsoftware eine Diskussion, und Naomi beschließt, einen Videoanruf zwischen den beiden zu öffnen. Hier ist die erwartete Ereignisfolge:

![Diagramm des Signalisierungsprozesses](webrtc_-_signaling_diagram.svg)

Im Verlauf dieses Artikels werden wir dies detaillierter betrachten.

### Prozess des ICE-Kandidatenaustauschs

Wenn die ICE-Schicht jedes Peers beginnt, Kandidaten zu senden, tritt sie in einen Austausch zwischen den verschiedenen Punkten der Kette ein, der wie folgt aussieht:

![Diagramm des Prozesses zum Austausch von ICE-Kandidaten](webrtc_-_ice_candidate_exchange.svg)

Jede Seite sendet Kandidaten an die andere, sobald sie sie von ihrer lokalen ICE-Schicht empfängt; es gibt kein Abwechseln und keine Stapelverarbeitung von Kandidaten. Sobald sich die beiden Peers auf einen Kandidaten einigen, den beide zum Austausch der Medien verwenden können, beginnen die Medien zu fließen. Jeder Peer sendet weiter Kandidaten, bis ihm die Optionen ausgehen, auch nachdem die Medien bereits zu fließen begonnen haben. Dies geschieht in der Hoffnung, noch bessere Optionen als die zunächst ausgewählte zu identifizieren.

Wenn sich die Bedingungen ändern – etwa wenn sich die Netzwerkverbindung verschlechtert –, schlägt möglicherweise einer oder beide Peers vor, zu einer Medienauflösung mit geringerer Bandbreite oder zu einem alternativen Codec zu wechseln. Dies löst einen neuen Austausch von Kandidaten aus, nach dem eine weitere Änderung des Medienformats und/oder Codecs erfolgen kann. Im Leitfaden [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) erfahren Sie mehr über die Codecs, deren Unterstützung WebRTC von Browsern verlangt, welche zusätzlichen Codecs von welchen Browsern unterstützt werden und wie Sie die besten zu verwendenden Codecs auswählen.

Optional können Sie {{RFC(8445, "Interactive Connectivity Establishment")}}, [Abschnitt 2.3 („Negotiating Candidate Pairs and Concluding ICE“)](https://datatracker.ietf.org/doc/html/rfc5245#section-2.3) lesen, wenn Sie besser verstehen möchten, wie dieser Prozess innerhalb der ICE-Schicht abgeschlossen wird. Beachten Sie, dass Kandidaten ausgetauscht werden und die Medien zu fließen beginnen, sobald die ICE-Schicht zufrieden ist. All dies wird im Hintergrund erledigt. Unsere Aufgabe ist es, die Kandidaten über den Signalisierungsserver hin und her zu senden.

## Die Client-Anwendung

Der Kern jedes Signalisierungsprozesses ist dessen Nachrichtenverarbeitung. Für die Signalisierung müssen Sie nicht WebSockets verwenden, aber sie sind eine gängige Lösung. Sie sollten selbstverständlich einen Mechanismus zum Austausch von Signalisierungsinformationen auswählen, der für Ihre Anwendung geeignet ist.

Aktualisieren wir den Chatclient, damit er Videoanrufe unterstützt.

### Das HTML aktualisieren

Das HTML unseres Clients benötigt einen Bereich, in dem Video angezeigt werden kann. Dies erfordert Videoelemente sowie eine Schaltfläche zum Auflegen:

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

Die hier definierte Seitenstruktur verwendet {{HTMLElement("div")}}-Elemente, wodurch wir durch die Verwendung von CSS vollständige Kontrolle über das Seitenlayout erhalten. Wir überspringen Layoutdetails in diesem Leitfaden, aber [sehen Sie sich das CSS](https://github.com/bsmth/examples/blob/main/webrtc-from-chat/chat.css) auf GitHub an, um zu sehen, wie wir es umgesetzt haben. Beachten Sie die beiden {{HTMLElement("video")}}-Elemente, eines für Ihre Eigenansicht und eines für die Verbindung, sowie das {{HTMLElement("button")}}-Element.

Das `<video>`-Element mit der `id` `received_video` zeigt das vom verbundenen Benutzer empfangene Video an. Wir geben das Attribut `autoplay` an, um sicherzustellen, dass das Video sofort wiedergegeben wird, sobald es eintrifft. Dadurch muss die Wiedergabe nicht explizit in unserem Code behandelt werden. Das `<video>`-Element `local_video` zeigt eine Vorschau der Kamera des Benutzers; wir geben das Attribut `muted` an, da wir lokales Audio in diesem Vorschaufenster nicht hören müssen.

Schließlich wird die {{HTMLElement("button")}}-Schaltfläche `hangup-button` zum Trennen eines Anrufs definiert und so konfiguriert, dass sie zunächst deaktiviert ist – dies ist unser Standard, wenn kein Anruf verbunden ist – und bei einem Klick die Funktion `hangUpCall()` ausführt. Aufgabe dieser Funktion ist es, den Anruf zu schließen und dem anderen Peer eine Benachrichtigung über den Signalisierungsserver zu senden, mit der Aufforderung, ihn ebenfalls zu schließen.

### Der JavaScript-Code

Wir teilen diesen Code in Funktionsbereiche auf, um seine Funktionsweise leichter beschreiben zu können. Der Hauptteil dieses Codes befindet sich in der Funktion `connect()`: Sie öffnet einen [`WebSocket`](/de/docs/Web/API/WebSocket)-Server auf Port 6503 und richtet einen Handler ein, um Nachrichten im JSON-Objektformat zu empfangen. Dieser Code verarbeitet im Allgemeinen Textchatnachrichten wie zuvor.

#### Nachrichten an den Signalisierungsserver senden

In unserem gesamten Code rufen wir `sendToServer()` auf, um Nachrichten an den Signalisierungsserver zu senden. Diese Funktion verwendet die [WebSocket](/de/docs/Web/API/WebSockets_API)-Verbindung für ihre Aufgabe:

```js
function sendToServer(msg) {
  const msgJSON = JSON.stringify(msg);

  connection.send(msgJSON);
}
```

Das an diese Funktion übergebene Nachrichtenobjekt wird durch Aufrufen von {{jsxref("JSON.stringify()")}} in eine JSON-Zeichenfolge umgewandelt. Anschließend rufen wir die Funktion [`send()`](/de/docs/Web/API/WebSocket/send) der WebSocket-Verbindung auf, um die Nachricht an den Server zu übertragen.

#### Benutzeroberfläche zum Starten eines Anrufs

Der Code, der die Nachricht `"user-list"` verarbeitet, ruft `handleUserListMsg()` auf. Hier richten wir den Handler für jeden verbundenen Benutzer in der Benutzerliste ein, die links neben dem Chatfenster angezeigt wird. Diese Funktion empfängt ein Nachrichtenobjekt, dessen Eigenschaft `users` ein Array von Zeichenfolgen ist, die die Benutzernamen aller verbundenen Benutzer angeben.

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

Nachdem wir eine Referenz auf das {{HTMLElement("ul")}}, das die Liste der Benutzernamen enthält, in der Variablen `listElem` gespeichert haben, leeren wir die Liste, indem wir jedes ihrer Kindelemente entfernen.

> [!NOTE]
> Offensichtlich wäre es effizienter, die Liste durch Hinzufügen und Entfernen einzelner Benutzer zu aktualisieren, anstatt die gesamte Liste bei jeder Änderung neu zu erstellen. Für die Zwecke dieses Beispiels genügt dies jedoch.

Dann durchlaufen wir das Array der Benutzernamen mit {{jsxref("Array.forEach", "forEach()")}}. Für jeden Namen erstellen wir ein neues {{HTMLElement("li")}}-Element und anschließend mit [`createTextNode()`](/de/docs/Web/API/Document/createTextNode) einen neuen Textknoten, der den Benutzernamen enthält. Dieser Textknoten wird als Kind des `<li>`-Elements hinzugefügt. Anschließend legen wir einen Handler für das [`click`](/de/docs/Web/API/Element/click_event)-Ereignis des Listenelements fest, sodass ein Klick auf einen Benutzernamen unsere Methode `invite()` aufruft, die wir im nächsten Abschnitt betrachten.

Schließlich fügen wir das neue Element an das `<ul>` an, das alle Benutzernamen enthält.

#### Einen Anruf starten

Wenn der Benutzer auf einen Benutzernamen klickt, den er anrufen möchte, wird die Funktion `invite()` als Event-Handler für dieses [`click`](/de/docs/Web/API/Element/click_event)-Ereignis aufgerufen:

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

Dies beginnt mit einer grundlegenden Plausibilitätsprüfung: Ist der Benutzer bereits verbunden? Wenn bereits eine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) besteht, kann er offensichtlich keinen Anruf tätigen. Anschließend wird der Name des angeklickten Benutzers aus der Eigenschaft [`textContent`](/de/docs/Web/API/Node/textContent) des Event-Ziels abgerufen, und wir prüfen, ob er nicht derselbe Benutzer ist, der versucht, den Anruf zu starten.

Dann kopieren wir den Namen des Benutzers, den wir anrufen, in die Variable `targetUsername` und rufen `createPeerConnection()` auf, eine Funktion, die die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt und grundlegend konfiguriert.

Sobald die `RTCPeerConnection` erstellt wurde, fordern wir durch Aufrufen von [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), das uns über die Eigenschaft [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia) zur Verfügung steht, Zugriff auf Kamera und Mikrofon des Benutzers an. Wenn dies erfolgreich ist und das zurückgegebene Promise erfüllt wird, wird unser `then`-Handler ausgeführt. Er erhält als Eingabe ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt, das den Stream mit Audio vom Mikrofon des Benutzers und Video von seiner Webcam darstellt.

> [!NOTE]
> Wir könnten die erlaubten Medieneingaben auf ein bestimmtes Gerät oder einen bestimmten Satz von Geräten beschränken, indem wir [`navigator.mediaDevices.enumerateDevices()`](/de/docs/Web/API/MediaDevices/enumerateDevices) aufrufen, um eine Geräteliste abzurufen, die resultierende Liste anhand unserer gewünschten Kriterien filtern und anschließend die Werte [`deviceId`](/de/docs/Web/API/MediaTrackConstraints/deviceId) der ausgewählten Geräte im Feld `deviceId` des an `getUserMedia()` übergebenen Objekts `mediaConstraints` verwenden. In der Praxis ist dies selten oder nie notwendig, da der Großteil dieser Arbeit von `getUserMedia()` für Sie erledigt wird.

Wir hängen den eingehenden Stream an das lokale Vorschau-{{HTMLElement("video")}}-Element an, indem wir die Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des Elements festlegen. Da das Element so konfiguriert ist, dass es eingehendes Video automatisch wiedergibt, beginnt der Stream in unserem lokalen Vorschaufenster zu spielen.

Anschließend durchlaufen wir die Tracks im Stream und rufen [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf, um jeden Track zur `RTCPeerConnection` hinzuzufügen. Obwohl die Verbindung noch nicht vollständig hergestellt ist, können Sie mit dem Senden von Daten beginnen, wenn Sie dies für angemessen halten. Medien, die vor Abschluss der ICE-Aushandlung empfangen werden, können verwendet werden, um ICE bei der Entscheidung über den besten Verbindungsansatz zu unterstützen und so den Aushandlungsprozess zu erleichtern.

Beachten Sie, dass Sie bei nativen Anwendungen, etwa einer Telefonanwendung, zumindest nicht mit dem Senden beginnen sollten, bevor die Verbindung an beiden Enden akzeptiert wurde. So vermeiden Sie, versehentlich Video- und/oder Audiodaten zu senden, wenn der Benutzer darauf nicht vorbereitet ist.

Sobald Medien an die `RTCPeerConnection` angehängt werden, wird für die Verbindung ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis ausgelöst, sodass die ICE-Aushandlung gestartet werden kann.

Wenn beim Versuch, den lokalen Medienstrom abzurufen, ein Fehler auftritt, ruft unsere `catch`-Klausel `handleGetUserMediaError()` auf, das dem Benutzer bei Bedarf einen geeigneten Fehler anzeigt.

#### Fehler von getUserMedia() behandeln

Wenn das von `getUserMedia()` zurückgegebene Promise fehlschlägt, wird unsere Funktion `handleGetUserMediaError()` ausgeführt.

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

In allen Fällen außer einem wird eine Fehlermeldung angezeigt. In diesem Beispiel ignorieren wir die Ergebnisse `"SecurityError"` und `"PermissionDeniedError"` und behandeln die Verweigerung der Berechtigung zur Verwendung der Medienhardware genauso wie einen vom Benutzer abgebrochenen Anruf.

Unabhängig davon, warum der Versuch, den Stream abzurufen, fehlschlägt, rufen wir unsere Funktion `closeVideoCall()` auf, um die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) herunterzufahren und alle Ressourcen freizugeben, die bereits durch den Versuch, den Anruf herzustellen, zugewiesen wurden. Dieser Code ist so konzipiert, dass er teilweise gestartete Anrufe sicher verarbeitet.

#### Die Peer-Verbindung erstellen

Die Funktion `createPeerConnection()` wird sowohl vom Anrufer als auch vom Angerufenen verwendet, um ihre [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekte zu erstellen, also ihre jeweiligen Enden der WebRTC-Verbindung. Sie wird von `invite()` aufgerufen, wenn der Anrufer versucht, einen Anruf zu starten, und von `handleVideoOfferMsg()`, wenn der Angerufene eine Angebotsnachricht vom Anrufer empfängt.

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

Bei Verwendung des Konstruktors [`RTCPeerConnection()`](/de/docs/Web/API/RTCPeerConnection/RTCPeerConnection) geben wir ein Objekt an, das Konfigurationsparameter für die Verbindung bereitstellt. In diesem Beispiel verwenden wir nur einen davon: `iceServers`. Dies ist ein Array von Objekten, die STUN- und/oder TURN-Server beschreiben, welche die {{Glossary("ICE", "ICE")}}-Schicht beim Versuch verwenden soll, eine Route zwischen Anrufer und Angerufenem herzustellen. Diese Server werden verwendet, um die beste Route und die besten Protokolle für die Kommunikation zwischen den Peers zu bestimmen, selbst wenn sie sich hinter einer Firewall befinden oder {{Glossary("NAT", "NAT")}} verwenden.

> [!NOTE]
> Sie sollten immer STUN/TURN-Server verwenden, die Ihnen gehören oder für deren Verwendung Sie ausdrücklich autorisiert sind. Dieses Beispiel verwendet einen bekannten öffentlichen STUN-Server, aber deren Missbrauch ist unangemessen.

Jedes Objekt in `iceServers` enthält mindestens ein Feld `urls`, das URLs bereitstellt, unter denen der angegebene Server erreichbar ist. Es kann bei Bedarf auch die Werte `username` und `credential` enthalten, um eine Authentifizierung zu ermöglichen.

Nach dem Erstellen der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) richten wir Handler für die Ereignisse ein, die für uns relevant sind.

Die ersten drei dieser Event-Handler sind erforderlich; Sie müssen sie behandeln, um mit WebRTC etwas im Zusammenhang mit gestreamten Medien zu tun. Die übrigen sind nicht zwingend erforderlich, können aber nützlich sein, und wir werden sie untersuchen. Es gibt außerdem einige weitere verfügbare Ereignisse, die wir in diesem Beispiel nicht verwenden. Hier ist eine Zusammenfassung der einzelnen Event-Handler, die wir implementieren werden:

- [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Die lokale ICE-Schicht ruft Ihren Event-Handler [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) auf, wenn sie Sie benötigt, um einen ICE-Kandidaten über Ihren Signalisierungsserver an den anderen Peer zu übertragen. Weitere Informationen und den Code dieses Beispiels finden Sie unter [ICE-Kandidaten senden](#ice-kandidaten_senden).
- [`ontrack`](/de/docs/Web/API/RTCPeerConnection/track_event)
  - : Dieser Handler für das Ereignis [`track`](/de/docs/Web/API/RTCPeerConnection/track_event) wird von der lokalen WebRTC-Schicht aufgerufen, wenn ein Track zur Verbindung hinzugefügt wird. Dadurch können Sie beispielsweise eingehende Medien mit einem Element verbinden, um sie anzuzeigen. Einzelheiten finden Sie unter [Neue Streams empfangen](#neue_streams_empfangen).
- [`onnegotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Diese Funktion wird aufgerufen, wenn die WebRTC-Infrastruktur Sie benötigt, um den Prozess der Sitzungsaushandlung erneut zu starten. Ihre Aufgabe ist es, ein Angebot zu erstellen und an den Angerufenen zu senden, mit der Aufforderung, sich mit uns zu verbinden. Unter [Aushandlung starten](#aushandlung_starten) sehen Sie, wie wir dies behandeln.
- [`onremovetrack`](/de/docs/Web/API/MediaStream/removetrack_event)
  - : Dieses Gegenstück zu `ontrack` wird aufgerufen, um das Ereignis [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) zu behandeln; es wird an die `RTCPeerConnection` gesendet, wenn der Remote-Peer einen Track aus den gesendeten Medien entfernt. Siehe [Das Entfernen von Tracks behandeln](#das_entfernen_von_tracks_behandeln).
- [`oniceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Das Ereignis [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event) wird von der ICE-Schicht gesendet, um Sie über Änderungen des Status der ICE-Verbindung zu informieren. Dies kann Ihnen helfen zu erkennen, wann die Verbindung fehlgeschlagen ist oder verloren ging. Den Code dieses Beispiels betrachten wir unten unter [ICE-Verbindungsstatus](#ice-verbindungsstatus).
- [`onicegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Die ICE-Schicht sendet Ihnen das Ereignis [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event), wenn sich der Prozess des ICE-Agenten zum Sammeln von Kandidaten von einem Status in einen anderen verschiebt, etwa beim Beginn der Kandidatensammlung oder beim Abschluss der Aushandlung. Siehe unten [ICE-Sammlungsstatus](#ice-sammlungsstatus).
- [`onsignalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Die WebRTC-Infrastruktur sendet Ihnen die Nachricht [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event), wenn sich der Status des Signalisierungsprozesses ändert – oder wenn sich die Verbindung zum Signalisierungsserver ändert. Unter [Signalisierungsstatus](#ice-signalisierungsstatus) sehen Sie unseren Code.

#### Aushandlung starten

Sobald der Anrufer seine [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellt, einen Medienstrom erstellt und dessen Tracks wie unter [Einen Anruf starten](#einen_anruf_starten) gezeigt zur Verbindung hinzugefügt hat, stellt der Browser der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis zu, um anzugeben, dass sie bereit ist, die Aushandlung mit dem anderen Peer zu beginnen. Hier ist unser Code zur Behandlung des [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignisses:

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

Um den Aushandlungsprozess zu starten, müssen wir ein SDP-Angebot erstellen und an den Peer senden, mit dem wir uns verbinden möchten. Dieses Angebot enthält eine Liste unterstützter Konfigurationen für die Verbindung, einschließlich Informationen über den Medienstrom, den wir lokal zur Verbindung hinzugefügt haben – also das Video, das wir an das andere Ende des Anrufs senden möchten – sowie alle ICE-Kandidaten, die die ICE-Schicht bereits gesammelt hat. Wir erstellen dieses Angebot durch Aufrufen von [`myPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer).

Wenn `createOffer()` erfolgreich ist und das Promise erfüllt wird, übergeben wir die erstellten Angebotsinformationen an [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription), das den Verbindungs- und Medienkonfigurationsstatus für das Ende der Verbindung des Anrufers konfiguriert.

> [!NOTE]
> Technisch gesehen ist die von `createOffer()` zurückgegebene Zeichenfolge ein {{RFC(3264)}}-Angebot.

Wir wissen, dass die Beschreibung gültig ist und festgelegt wurde, wenn das von `setLocalDescription()` zurückgegebene Promise erfüllt wird. Dann senden wir unser Angebot an den anderen Peer, indem wir eine neue `"video-offer"`-Nachricht erstellen, die die lokale Beschreibung enthält – die nun mit dem Angebot übereinstimmt – und sie über unseren Signalisierungsserver an den Angerufenen senden. Das Angebot enthält folgende Mitglieder:

- `type`
  - : Der Nachrichtentyp: `"video-offer"`.
- `name`
  - : Der Benutzername des Anrufers.
- `target`
  - : Der Name des Benutzers, den wir anrufen möchten.
- `sdp`
  - : Die SDP-Zeichenfolge, die das Angebot beschreibt.

Wenn ein Fehler auftritt, entweder beim anfänglichen `createOffer()` oder in einem der darauf folgenden Erfüllungs-Handler, wird durch Aufrufen unserer Funktion `window.reportError()` ein Fehler gemeldet.

Sobald der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, beginnt der ICE-Agent, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) zu senden, eines für jede potenzielle Konfiguration, die er entdeckt. Unser Handler für das Ereignis `icecandidate` ist dafür verantwortlich, die Kandidaten an den anderen Peer zu übertragen.

#### Sitzungsaushandlung

Nachdem wir nun die Aushandlung mit dem anderen Peer gestartet und ein Angebot übertragen haben, betrachten wir eine Weile, was auf der Seite des Angerufenen geschieht. Der Angerufene empfängt das Angebot und ruft die Funktion `handleVideoOfferMsg()` auf, um es zu verarbeiten. Sehen wir uns an, wie der Angerufene die Nachricht `"video-offer"` behandelt.

##### Die Einladung behandeln

Wenn das Angebot eintrifft, wird die Funktion `handleVideoOfferMsg()` des Angerufenen mit der empfangenen `"video-offer"`-Nachricht aufgerufen. Diese Funktion muss zwei Dinge erledigen. Erstens muss sie ihre eigene [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) erstellen und die Tracks mit Audio und Video von Mikrofon und Webcam dazu hinzufügen. Zweitens muss sie das empfangene Angebot verarbeiten sowie ihre Antwort erstellen und senden.

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

Dieser Code ist dem, was wir in der Funktion `invite()` unter [Einen Anruf starten](#einen_anruf_starten) getan haben, sehr ähnlich. Er beginnt mit dem Erstellen und Konfigurieren einer [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) mithilfe unserer Funktion `createPeerConnection()`. Anschließend entnimmt er das SDP-Angebot aus der empfangenen `"video-offer"`-Nachricht und verwendet es, um ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt zu erstellen, das die Sitzungsbeschreibung des Anrufers darstellt.

Diese Sitzungsbeschreibung wird dann an [`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergeben. Dadurch wird das empfangene Angebot als Beschreibung des entfernten Endes der Verbindung – des Anrufers – festgelegt. Bei Erfolg beginnt der Promise-Erfüllungs-Handler – in der `then()`-Klausel – mit dem Abrufen des Zugriffs auf Kamera und Mikrofon des Angerufenen über [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia), dem Hinzufügen der Tracks zur Verbindung und so weiter, wie wir es zuvor in `invite()` gesehen haben.

Sobald die Antwort mit [`myPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erstellt wurde, wird die Beschreibung des lokalen Endes der Verbindung durch Aufrufen von [`myPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf die SDP der Antwort gesetzt. Anschließend wird die Antwort über den Signalisierungsserver an den Anrufer übertragen, um ihm mitzuteilen, wie die Antwort lautet.

Alle Fehler werden abgefangen und an `handleGetUserMediaError()` übergeben, das unter [Fehler von getUserMedia() behandeln](#handling_getusermedia_errors) beschrieben ist.

> [!NOTE]
> Wie beim Anrufer beginnt der Browser, nachdem der Erfüllungs-Handler von `setLocalDescription()` ausgeführt wurde, [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse auszulösen, die der Angerufene behandeln muss: eines für jeden Kandidaten, der an den Remote-Peer übertragen werden muss.

Schließlich behandelt der Anrufer die empfangene Antwortnachricht, indem er ein neues [`RTCSessionDescription`](/de/docs/Web/API/RTCSessionDescription)-Objekt erstellt, das die Sitzungsbeschreibung des Angerufenen repräsentiert, und es an
[`myPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) übergibt.

```js
function handleVideoAnswerMsg(msg) {
  const desc = new RTCSessionDescription(msg.sdp);
  myPeerConnection.setRemoteDescription(desc).catch(window.reportError);
}
```

##### ICE-Kandidaten senden

Der ICE-Aushandlungsprozess umfasst, dass jeder Peer wiederholt Kandidaten an den anderen sendet, bis ihm potenzielle Möglichkeiten ausgehen, die Anforderungen für den Medientransport der `RTCPeerConnection` zu unterstützen. Da ICE Ihren Signalisierungsserver nicht kennt, verarbeitet Ihr Code die Übertragung jedes Kandidaten in seinem Handler für das Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event).

Ihr Handler [`onicecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) empfängt ein Ereignis, dessen Eigenschaft `candidate` die SDP beschreibt, die den Kandidaten darstellt – oder `null` ist, um anzugeben, dass der ICE-Schicht die potenziellen Konfigurationen ausgegangen sind, die sie vorschlagen kann. Der Inhalt von `candidate` muss über Ihren Signalisierungsserver übertragen werden. Hier ist die Implementierung unseres Beispiels:

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

Dadurch wird ein Objekt erstellt, das den Kandidaten enthält, und anschließend mit der zuvor unter [Nachrichten an den Signalisierungsserver senden](#nachrichten_an_den_signalisierungsserver_senden) beschriebenen Funktion `sendToServer()` an den anderen Peer gesendet. Die Eigenschaften der Nachricht sind:

- `type`
  - : Der Nachrichtentyp: `"new-ice-candidate"`.
- `target`
  - : Der Benutzername, an den der ICE-Kandidat zugestellt werden muss. Dadurch kann der Signalisierungsserver die Nachricht weiterleiten.
- `candidate`
  - : Die SDP, die den Kandidaten repräsentiert, den die ICE-Schicht an den anderen Peer übertragen möchte.

Das Format dieser Nachricht liegt – wie bei allem, was Sie bei der Verarbeitung der Signalisierung tun – vollständig bei Ihnen und hängt von Ihren Anforderungen ab; Sie können bei Bedarf weitere Informationen bereitstellen.

> [!NOTE]
> Es ist wichtig zu bedenken, dass das Ereignis [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event) **nicht** gesendet wird, wenn ICE-Kandidaten vom anderen Ende des Anrufs eintreffen. Stattdessen werden sie vom eigenen Ende des Anrufs gesendet, damit Sie die Aufgabe übernehmen können, die Daten über den von Ihnen gewählten Kanal zu übertragen. Das kann verwirrend sein, wenn Sie WebRTC neu kennenlernen.

##### ICE-Kandidaten empfangen

Der Signalisierungsserver stellt jeden ICE-Kandidaten mit einer von ihm gewählten Methode an den Ziel-Peer zu; in unserem Beispiel geschieht dies als JSON-Objekte mit einer Eigenschaft `type`, die die Zeichenfolge `"new-ice-candidate"` enthält. Unsere Funktion `handleNewICECandidateMsg()` wird vom Code für eingehende Hauptnachrichten über [WebSocket](/de/docs/Web/API/WebSockets_API) aufgerufen, um diese Nachrichten zu behandeln:

```js
function handleNewICECandidateMsg(msg) {
  const candidate = new RTCIceCandidate(msg.candidate);

  myPeerConnection.addIceCandidate(candidate).catch(window.reportError);
}
```

Diese Funktion erstellt ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate)-Objekt, indem sie die empfangene SDP an dessen Konstruktor übergibt, und übergibt den Kandidaten dann an die ICE-Schicht, indem sie ihn an [`myPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) übergibt. Dadurch erhält die lokale ICE-Schicht den neuen ICE-Kandidaten, und schließlich ist unsere Rolle im Prozess der Verarbeitung dieses Kandidaten abgeschlossen.

Jeder Peer sendet dem anderen Peer für jede mögliche Transportkonfiguration, die er für die ausgetauschten Medien als geeignet erachtet, einen Kandidaten. Irgendwann einigen sich die beiden Peers darauf, dass ein bestimmter Kandidat eine gute Wahl ist, öffnen die Verbindung und beginnen, Medien auszutauschen. Wichtig ist jedoch, dass die ICE-Aushandlung _nicht_ stoppt, sobald Medien fließen. Stattdessen können nach Beginn des Gesprächs weiterhin Kandidaten ausgetauscht werden, entweder um eine bessere Verbindungsmethode zu finden oder weil sie sich bereits in der Übertragung befanden, als die Peers ihre Verbindung erfolgreich herstellten.

Wenn zudem etwas geschieht, das eine Änderung des Streaming-Szenarios verursacht, beginnt die Aushandlung erneut: Das Ereignis [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event) wird an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, und der gesamte Prozess beginnt erneut wie zuvor beschrieben. Dies kann in verschiedenen Situationen auftreten, darunter:

- Änderungen des Netzwerkstatus, etwa eine Änderung der Bandbreite, der Wechsel von WLAN zu Mobilfunkverbindung oder Ähnliches.
- Wechsel zwischen der vorderen und hinteren Kamera eines Telefons.
- Eine Änderung an der Konfiguration des Streams, etwa dessen Auflösung oder Bildrate.

##### Neue Streams empfangen

Wenn neue Tracks zur `RTCPeerConnection` hinzugefügt werden – entweder durch Aufrufen ihrer Methode [`addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) oder aufgrund einer erneuten Aushandlung des Streamformats –, wird für jeden zur Verbindung hinzugefügten Track ein [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis an die `RTCPeerConnection` gesendet. Um neu hinzugefügte Medien zu verwenden, muss ein Handler für das Ereignis `track` implementiert werden. Eine häufige Anforderung besteht darin, die eingehenden Medien an ein geeignetes HTML-Element anzuhängen. In unserem Beispiel fügen wir den Stream des Tracks zum {{HTMLElement("video")}}-Element hinzu, das das eingehende Video anzeigt:

```js
function handleTrackEvent(event) {
  document.getElementById("received_video").srcObject = event.streams[0];
  document.getElementById("hangup-button").disabled = false;
}
```

Der eingehende Stream wird an das {{HTMLElement("video")}}-Element `"received_video"` angehängt, und das {{HTMLElement("button")}}-Element „Auflegen“ wird aktiviert, damit der Benutzer den Anruf beenden kann.

Nachdem dieser Code ausgeführt wurde, wird schließlich das vom anderen Peer gesendete Video im lokalen Browserfenster angezeigt!

##### Das Entfernen von Tracks behandeln

Ihr Code erhält ein [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event)-Ereignis, wenn der Remote-Peer einen Track durch Aufrufen von [`RTCPeerConnection.removeTrack()`](/de/docs/Web/API/RTCPeerConnection/removeTrack) aus der Verbindung entfernt. Unser Handler für `"removetrack"` lautet:

```js
function handleRemoveTrackEvent(event) {
  const stream = document.getElementById("received_video").srcObject;
  const trackList = stream.getTracks();

  if (trackList.length === 0) {
    closeVideoCall();
  }
}
```

Dieser Code ruft den eingehenden Video-[`MediaStream`](/de/docs/Web/API/MediaStream) aus der Eigenschaft [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) des {{HTMLElement("video")}}-Elements `"received_video"` ab und ruft dann die Methode [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks) des Streams auf, um ein Array der Tracks des Streams zu erhalten.

Wenn die Länge des Arrays null ist, also keine Tracks mehr im Stream vorhanden sind, beenden wir den Anruf durch Aufrufen von `closeVideoCall()`. Dadurch wird unsere Anwendung sauber in einen Zustand zurückversetzt, in dem sie bereit ist, einen weiteren Anruf zu starten oder zu empfangen. Unter [Den Anruf beenden](#den_anruf_beenden) erfahren Sie, wie `closeVideoCall()` funktioniert.

#### Den Anruf beenden

Es gibt viele Gründe, warum Anrufe enden können. Ein Anruf könnte beendet sein, wobei eine oder beide Seiten aufgelegt haben. Vielleicht ist ein Netzwerkfehler aufgetreten, oder ein Benutzer hat seinen Browser beendet oder einen Systemabsturz gehabt. In jedem Fall muss alles Gute einmal enden.

##### Auflegen

Wenn der Benutzer auf die Schaltfläche „Auflegen“ klickt, um den Anruf zu beenden, wird die Funktion `hangUpCall()` aufgerufen:

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

`hangUpCall()` führt `closeVideoCall()` aus, um die Verbindung herunterzufahren und zurückzusetzen sowie Ressourcen freizugeben. Anschließend erstellt die Funktion eine `"hang-up"`-Nachricht und sendet sie an das andere Ende des Anrufs, um dem anderen Peer mitzuteilen, dass er sich sauber herunterfahren soll.

##### Den Anruf beenden

Die unten gezeigte Funktion `closeVideoCall()` ist dafür verantwortlich, die Streams zu stoppen, aufzuräumen und das [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt zu entsorgen:

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

Nachdem Referenzen auf die beiden {{HTMLElement("video")}}-Elemente abgerufen wurden, prüfen wir, ob eine WebRTC-Verbindung besteht. Falls ja, trennen und schließen wir den Anruf:

1. Alle Event-Handler werden entfernt. Dies verhindert, dass einzelne Event-Handler ausgelöst werden, während die Verbindung gerade geschlossen wird, und dadurch möglicherweise Fehler verursachen.
2. Für sowohl Remote- als auch lokale Videostreams durchlaufen wir jeden Track und rufen die Methode [`MediaStreamTrack.stop()`](/de/docs/Web/API/MediaStreamTrack/stop) auf, um jeden zu schließen.
3. Schließen Sie die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection), indem Sie [`myPeerConnection.close()`](/de/docs/Web/API/RTCPeerConnection/close) aufrufen.
4. Setzen Sie `myPeerConnection` auf `null`, damit unser Code erkennt, dass kein Anruf läuft; dies ist nützlich, wenn der Benutzer in der Benutzerliste auf einen Namen klickt.

Dann entfernen wir für die ein- und ausgehenden {{HTMLElement("video")}}-Elemente ihre Eigenschaften [`src`](/de/docs/Web/API/HTMLMediaElement/src) und [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject) mithilfe ihrer Methoden [`removeAttribute()`](/de/docs/Web/API/Element/removeAttribute). Damit ist die Trennung der Streams von den Videoelementen abgeschlossen.

Schließlich setzen wir die Eigenschaft [`disabled`](/de/docs/Web/API/HTMLButtonElement/disabled) der Schaltfläche „Auflegen“ auf `true`, sodass sie nicht anklickbar ist, während kein Anruf läuft. Dann setzen wir `targetUsername` auf `null`, da wir mit niemandem mehr sprechen. Dadurch kann der Benutzer einen anderen Benutzer anrufen oder einen eingehenden Anruf empfangen.

#### Umgang mit Statusänderungen

Es gibt eine Reihe zusätzlicher Ereignisse, für die Sie Listener festlegen können, um Ihren Code über verschiedene Statusänderungen zu informieren. Wir verwenden drei davon: [`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event), [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) und [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event).

##### ICE-Verbindungsstatus

[`iceconnectionstatechange`](/de/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)-Ereignisse werden von der ICE-Schicht an die [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) gesendet, wenn sich der Verbindungsstatus ändert, etwa wenn der Anruf vom anderen Ende beendet wird.

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

Hier wenden wir unsere Funktion `closeVideoCall()` an, wenn sich der ICE-Verbindungsstatus zu `"closed"` oder `"failed"` ändert. Dadurch wird unser Ende der Verbindung heruntergefahren, sodass wir wieder bereit sind, einen Anruf zu starten oder anzunehmen.

> [!NOTE]
> Wir überwachen den Signalisierungsstatus `disconnected` hier nicht, da er vorübergehende Probleme anzeigen kann und nach einiger Zeit wieder in einen Status `connected` wechseln kann. Seine Überwachung würde den Videoanruf bei jedem temporären Netzwerkproblem schließen.

##### ICE-Signalisierungsstatus

Ebenso überwachen wir [`signalingstatechange`](/de/docs/Web/API/RTCPeerConnection/signalingstatechange_event)-Ereignisse. Wenn sich der Signalisierungsstatus zu `closed` ändert, schließen wir den Anruf ebenfalls.

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
> Der Signalisierungsstatus `closed` wurde zugunsten des Status `closed` von [`iceConnectionState`](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) als veraltet markiert. Wir überwachen ihn hier, um ein wenig Abwärtskompatibilität hinzuzufügen.

##### ICE-Sammlungsstatus

[`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)-Ereignisse informieren Sie darüber, wenn sich der Status des Prozesses zum Sammeln von ICE-Kandidaten ändert. Unser Beispiel verwendet dies für nichts, aber es kann nützlich sein, diese Ereignisse für Debugging-Zwecke zu überwachen und zu erkennen, wann die Kandidatensammlung abgeschlossen ist.

```js
function handleICEGatheringStateChangeEvent(event) {
  // Our sample just logs information to console here,
  // but you can do whatever you need.
}
```

## Nächste Schritte

Sie können nun [dieses Beispiel ausprobieren](https://webrtc-from-chat.onrender.com/), um es in Aktion zu sehen.
Öffnen Sie die Webkonsole auf beiden Geräten und betrachten Sie die protokollierte Ausgabe. Obwohl Sie dies im oben gezeigten Code nicht sehen, enthält der Code auf dem Server – und auf [GitHub](https://github.com/bsmth/examples/tree/main/webrtc-from-chat) – viele Konsolenausgaben, sodass Sie die Signalisierungs- und Verbindungsprozesse bei der Arbeit sehen können.

Eine weitere naheliegende Verbesserung wäre das Hinzufügen einer „Klingeln“-Funktion, sodass nicht lediglich die Berechtigung zur Verwendung von Kamera und Mikrofon angefordert wird, sondern zunächst eine Aufforderung wie „Benutzer X ruft an. Möchten Sie antworten?“ erscheint.

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API)
- [Media Capabilities API](/de/docs/Web/API/Media_Capabilities_API)
- [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API)
- Das Muster [Perfect Negotiation](/de/docs/Web/API/WebRTC_API/Perfect_negotiation)

---
title: Einführung in das Real-time Transport Protocol (RTP)
slug: Web/API/WebRTC_API/Intro_to_RTP
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Das **Real-time Transport Protocol** (**RTP**), definiert in {{RFC(3550)}}, ist ein IETF-Standardprotokoll, das Echtzeitkonnektivität für den Austausch von Daten ermöglicht, die eine Echtzeitpriorität benötigen. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.

> [!NOTE]
> WebRTC verwendet tatsächlich **SRTP** (Secure Real-time Transport Protocol), um sicherzustellen, dass die ausgetauschten Daten angemessen gesichert und authentifiziert sind.

Eine möglichst geringe Latenzzeit ist besonders wichtig für WebRTC, da eine face-to-face Kommunikation mit so wenig [Latenz](/de/docs/Glossary/latency) wie möglich stattfinden muss. Je mehr Zeitverzögerung zwischen dem Sprechen eines Benutzers und dem Hören durch einen anderen besteht, desto wahrscheinlicher treten Kreuzgespräche und andere Formen von Verwirrung auf.

## Hauptmerkmale von RTP

Bevor wir den Einsatz von RTP im WebRTC-Kontext untersuchen, ist es nützlich, eine allgemeine Vorstellung davon zu haben, was RTP bietet und was nicht. RTP ist ein Datenübertragungsprotokoll, dessen Aufgabe es ist, Daten zwischen zwei Endpunkten so effizient wie möglich unter den aktuellen Bedingungen zu bewegen. Diese Bedingungen können durch alles beeinflusst werden, von den darunter liegenden Schichten des Netzwerkstapels bis zur physischen Netzwerkverbindung, den dazwischenliegenden Netzwerken, der Leistung des entfernten Endpunkts, Geräuschpegeln, Verkehrsniveaus und so weiter.

Da RTP ein Datenübertragungsprotokoll ist, wird es durch das eng verwandte **RTP Control Protocol** (**RTCP**) ergänzt, das in {{RFC(3550, "", 6)}} definiert ist. RTCP fügt Funktionen wie **Quality of Service** (**QoS**)-Überwachung, Teilnehmerinformationsaustausch und dergleichen hinzu. Es reicht nicht aus, um Benutzer, Mitgliedschaften, Berechtigungen usw. vollständig zu verwalten, bietet jedoch die Grundlagen für eine uneingeschränkte Multi-User-Kommunikationssitzung.

Die Tatsache, dass RTCP im gleichen RFC wie RTP definiert ist, ist ein Hinweis darauf, wie eng diese beiden Protokolle miteinander verbunden sind.

### Fähigkeiten von RTP

Die Hauptvorteile von RTP im Hinblick auf WebRTC sind:

- Generell niedrige Latenz.
- Pakete sind zur Wiederzusammensetzung in der richtigen Reihenfolge nummeriert und mit Zeitstempeln versehen. Dies ermöglicht es, mit RTP gesendete Daten über Übertragungen zu liefern, die keine Ordnung oder gar Lieferung garantieren.
- Dies bedeutet, dass RTP über [UDP](/de/docs/Glossary/UDP) genutzt werden kann — aber nicht muss — wegen seiner Leistung sowie seiner Multiplexing- und Prüfsummenfunktionen.
- RTP unterstützt Multicast; auch wenn dies für WebRTC derzeit noch nicht wichtig ist, könnte es in Zukunft von Bedeutung sein, wenn WebRTC (hoffentlich) erweitert wird, um Mehrbenutzerkonversationen zu unterstützen.
- RTP ist nicht auf den audiovisuellen Gebrauch beschränkt. Es kann für jede Form von kontinuierlichem oder aktivem Datentransfer verwendet werden, einschließlich Datenstreaming, aktive Abzeichen oder Statusanzeigeaktualisierungen oder Transport von Steuerungs- und Messinformationen.

### Dinge, die RTP nicht tut

RTP selbst bietet nicht jede mögliche Funktion, weshalb andere Protokolle ebenfalls von WebRTC verwendet werden. Einige der bemerkenswerten Dinge, die RTP nicht beinhaltet:

- RTP garantiert _nicht_ die **[Quality-of-Service](https://en.wikipedia.org/wiki/Quality-of-service)** (**QoS**).
- Obwohl RTP für den Einsatz in latenzkritischen Szenarien gedacht ist, bietet es keine inhärenten Funktionen zur Sicherstellung von QoS. Stattdessen bietet es lediglich die Informationen, die notwendig sind, damit QoS anderweitig im Stapel implementiert werden kann.
- RTP verwaltet keine Zuweisung oder Reservierung von Ressourcen, die möglicherweise benötigt werden.

Dort, wo es für WebRTC-Zwecke relevant ist, werden diese Dinge an verschiedenen Stellen innerhalb der WebRTC-Infrastruktur behandelt. Zum Beispiel übernimmt RTCP die QoS-Überwachung.

## RTCPeerConnection und RTP

Jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verfügt über Methoden, die Zugriff auf die Liste der RTP-Übertragungen bieten, die die Peer-Verbindung bedienen. Diese entsprechen den folgenden drei Arten von Übertragungen, die von `RTCPeerConnection` unterstützt werden:

- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : `RTCRtpSender`s übernehmen die Kodierung und Übertragung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Daten zu einem entfernten Peer. Die Sender für eine gegebene Verbindung können durch Aufrufen von [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) abgerufen werden.
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : `RTCRtpReceiver`s bieten die Möglichkeit, eingehende `MediaStreamTrack`-Daten zu untersuchen und Informationen darüber zu erhalten. Die Empfänger einer Verbindung können durch Aufrufen von [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) abgerufen werden.
- [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)
  - : Ein `RTCRtpTransceiver` ist ein Paar aus einem RTP-Sender und einem RTP-Empfänger, die ein gemeinsames SDP `mid`-Attribut teilen, was bedeutet, dass sie dieselbe SDP-Medienlinie (die einen bidirektionalen SRTP-Stream darstellt) teilen. Diese werden durch die Methode [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegeben, und jedes `mid` und Transceiver haben eine eins-zu-eins-Beziehung, wobei das `mid` für jede `RTCPeerConnection` eindeutig ist.

### Nutzung von RTP für die Implementierung einer "Halten"-Funktion

Da die Streams für eine `RTCPeerConnection` mit RTP und den oben beschriebenen Schnittstellen implementiert werden, können Sie den Zugriff, den dies auf die internen Abläufe der Streams bietet, nutzen, um Anpassungen vorzunehmen. Zu den einfachsten Dingen, die Sie tun können, gehört die Implementierung einer "Halten"-Funktion, bei der ein Teilnehmer eines Anrufs auf eine Schaltfläche klicken kann, um sein Mikrofon auszuschalten, Musik zum anderen Peer zu senden und den Empfang von eingehendem Audio zu stoppen.

> [!NOTE]
> Dieses Beispiel nutzt moderne JavaScript-Funktionen wie [asynchrone Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und den [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Ausdruck. Dies vereinfacht den Umgang mit den von WebRTC-Methoden zurückgegebenen Versprechen erheblich und macht den Code auch wesentlich lesbarer.

In den folgenden Beispielen bezeichnen wir den Peer, der den "Halten"-Modus aktiviert und deaktiviert, als lokalen Peer und den Benutzer, der in den Halten-Modus versetzt wird, als entfernten Peer.

#### Aktivieren des Halten-Modus

##### Lokaler Peer

Wenn der lokale Benutzer beschließt, den Halten-Modus zu aktivieren, wird die Methode `enableHold()` aufgerufen. Sie akzeptiert als Eingabe einen [`MediaStream`](/de/docs/Web/API/MediaStream), der die Musik enthält, die während des Halts gespielt werden soll.

```js
async function enableHold(audioStream) {
  try {
    await audioTransceiver.sender.replaceTrack(audioStream.getAudioTracks()[0]);
    audioTransceiver.receiver.track.enabled = false;
    audioTransceiver.direction = "sendonly";
  } catch (err) {
    /* handle the error */
  }
}
```

Die drei Codezeilen im [`try`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Block führen die folgenden Schritte aus:

1. Ersetzen ihrer ausgehenden Audiospur durch einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), der Haltemusik enthält.
2. Deaktivieren der eingehenden Audiospur.
3. Umschalten des Audiotransceivers in den Nur-Senden-Modus.

Dies löst eine Neuverhandlung der `RTCPeerConnection` aus, indem ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis gesendet wird, auf das Ihr Code mit der Generierung eines SDP-Angebots mittels [`RTCPeerConnection.createOffer`](/de/docs/Web/API/RTCPeerConnection/createOffer) und dessen Versand über den Signalisierungsserver zum entfernten Peer reagiert.

Der `audioStream`, der die zu spielende Musik anstelle der Audioausgabe des lokalen Peers enthält, kann von überall her stammen. Eine Möglichkeit ist es, ein verstecktes {{HTMLElement("audio")}}-Element zu haben und [`HTMLAudioElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) zu verwenden, um seinen Audiostream zu erhalten.

##### Entferntes Peer

Beim entfernten Peer, wenn wir ein SDP-Angebot mit der Richtung `"sendonly"` erhalten, wird dies mit der Methode `holdRequested()` behandelt, die als Eingabe einen SDP-Angebotsstring akzeptiert.

```js
async function holdRequested(offer) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(null);
    audioTransceiver.direction = "recvonly";
    await sendAnswer();
  } catch (err) {
    /* handle the error */
  }
}
```

Die hier unternommenen Schritte sind:

1. Setzen der Remote-Beschreibung auf das angegebene `offer` mittels [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription).
2. Ersetzen des Tracks des Audiotransceivers' [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) durch `null`, was bedeutet, dass kein Track vorhanden ist. Dies stoppt das Senden von Audio über den Transceiver.
3. Setzen der Direction des Audiotransceivers auf `"recvonly"`, wobei der Transceiver angewiesen wird, nur Audio zu akzeptieren und nicht zu senden.
4. Das SDP-Antwort wird generiert und gesendet über eine Methode namens `sendAnswer()`, die die Antwort mit [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) generiert und das resultierende SDP über den Signalisierungsdienst an den anderen Peer sendet.

#### Deaktivieren des Halten-Modus

##### Lokaler Peer

Wenn der lokale Benutzer auf das Schnittstellen-Widget klickt, um den Halten-Modus zu deaktivieren, wird die Methode `disableHold()` aufgerufen, um den Prozess der Wiederherstellung der normalen Funktionalität zu beginnen.

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

Dies kehrt die in `enableHold()` unternommenen Schritte wie folgt um:

1. Der Track des Audiotransceivers' `RTCRtpSender` wird durch den ersten Audiotrack des angegebenen Streams ersetzt.
2. Der eingehende Audiotrack des Transceivers wird wieder aktiviert.
3. Die Richtung des Audiotransceivers wird auf `"sendrecv"` gesetzt, was anzeigt, dass er zurückkehren soll, sowohl Audio zu senden als auch zu empfangen, anstatt nur zu senden.

Genau wie beim Eingriff des Halten-Modus löst dies erneut eine Verhandlung aus, was dazu führt, dass Ihr Code ein neues Angebot an den entfernten Peer sendet.

##### Entferntes Peer

Wenn das `"sendrecv"`-Angebot vom entfernten Peer empfangen wird, ruft es seine `holdEnded()`-Methode auf:

```js
async function holdEnded(offer, micStream) {
  try {
    await peerConnection.setRemoteDescription(offer);
    await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
    audioTransceiver.direction = "sendrecv";
    await sendAnswer();
  } catch (err) {
    /* handle the error */
  }
}
```

Die im `try`-Block durchgeführten Schritte sind:

1. Das empfangene Angebot wird durch Aufruf von `setRemoteDescription()` als Remote-Beschreibung gespeichert.
2. Die Methode [`replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack) des `RTCRtpSender` des Audiotransceivers wird verwendet, um den ausgehenden Audiotrack auf den ersten Track des Audiostreams des Mikrofons zu setzen.
3. Die Richtung des Transceivers wird auf `"sendrecv"` gesetzt, was anzeigt, dass er das Senden und Empfangen von Audio wieder aufnehmen soll.

Von diesem Zeitpunkt an wird das Mikrofon wieder aktiviert, und der entfernte Benutzer kann den lokalen Benutzer wieder hören und mit ihm sprechen.

## Siehe auch

- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebensdauer einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

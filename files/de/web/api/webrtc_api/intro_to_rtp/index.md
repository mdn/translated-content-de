---
title: Einführung in das Echtzeit-Transportprotokoll (RTP)
slug: Web/API/WebRTC_API/Intro_to_RTP
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Das **Real-time Transport Protocol** (**RTP**), definiert in {{RFC(3550)}}, ist ein IETF-Standardprotokoll, das Echtzeitkonnektivität zur Datenübertragung mit Echtzeitpriorität ermöglicht. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.

> [!NOTE]
> WebRTC verwendet tatsächlich **SRTP** (Secure Real-time Transport Protocol), um sicherzustellen, dass die ausgetauschten Daten entsprechend gesichert und authentifiziert sind.

Die Minimierung der Latenz ist besonders wichtig für WebRTC, da die Face-to-Face-Kommunikation mit so wenig {{Glossary("latency", "Latenz")}} wie möglich durchgeführt werden muss. Je größer die Zeitverzögerung zwischen dem, was ein Benutzer sagt und dem, was ein anderer hört, desto wahrscheinlicher kommt es zu Missverständnissen und anderen Formen der Verwirrung.

## Wichtige Merkmale von RTP

Bevor wir die Verwendung von RTP in WebRTC-Kontexten untersuchen, ist es nützlich, ein allgemeines Verständnis dafür zu haben, was RTP bietet und was nicht. RTP ist ein Datenübertragungsprotokoll, dessen Aufgabe es ist, Daten zwischen zwei Endpunkten unter den aktuellen Bedingungen so effizient wie möglich zu bewegen. Diese Bedingungen können durch alles beeinflusst werden, vom zugrunde liegenden Netzwerk-Stack bis zur physischen Netzwerkverbindung, den dazwischenliegenden Netzwerken, der Leistung des Remote-Endpunkts, dem Rauschniveau, den Verkehrsaufkommen und so weiter.

Da RTP ein Datenübertragungsprotokoll ist, wird es durch das eng verwandte **RTP Control Protocol** (**RTCP**), das in {{RFC(3550, "", 6)}} definiert ist, ergänzt. RTCP fügt Funktionen wie **Quality of Service** (**QoS**)-Überwachung, Teilnehmerinformationsaustausch und Ähnliches hinzu. Es ist nicht ausreichend für die vollständige Verwaltung von Benutzern, Mitgliedschaften, Berechtigungen und so weiter, bietet jedoch die grundlegenden Funktionen, die für eine uneingeschränkte Mehrbenutzerkommunikationssitzung erforderlich sind.

Die Tatsache, dass RTCP im selben RFC wie RTP definiert ist, gibt einen Hinweis darauf, wie eng diese beiden Protokolle miteinander verbunden sind.

### Fähigkeiten von RTP

Die Hauptvorteile von RTP im Hinblick auf WebRTC umfassen:

- Allgemein niedrige Latenz.
- Pakete werden mit Sequenznummern und Zeitstempeln versehen, um sie bei Ankunft in falscher Reihenfolge erneut zusammenzusetzen. Dies ermöglicht es, mit RTP gesendete Daten auf Transporten zu liefern, die keine Reihenfolge oder sogar keine Zustellung garantieren.
- Das bedeutet, dass RTP - aber nicht erforderlich - oben auf {{Glossary("UDP")}} verwendet werden kann, aufgrund seiner Leistung sowie seiner Multiplexing- und Prüfsummenfunktionen.
- RTP unterstützt Multicast; obwohl dies für WebRTC derzeit nicht wichtig ist, wird es wahrscheinlich in Zukunft von Bedeutung sein, wenn WebRTC (hoffentlich) erweitert wird, um Mehrbenutzergespräche zu unterstützen.
- RTP ist nicht auf die Verwendung in audiovisueller Kommunikation beschränkt. Es kann für jede Form von kontinuierlicher oder aktiver Datenübertragung verwendet werden, einschließlich Datenstreaming, aktive Badges oder Statusanzeige-Updates oder der Transport von Steuerungs- und Messinformationen.

### Was RTP nicht bietet

RTP selbst bietet nicht jede mögliche Funktion, weshalb auch andere Protokolle von WebRTC verwendet werden. Zu den bemerkenswertesten Dingen, die RTP nicht enthält, gehören:

- RTP garantiert _nicht_ **[Quality-of-Service](https://en.wikipedia.org/wiki/Quality-of-service)** (**QoS**).
- Während RTP für die Verwendung in latenzkritischen Szenarien gedacht ist, bietet es an sich keine Funktionen, die QoS gewährleisten. Stattdessen bietet es nur die Informationen, die erforderlich sind, um QoS anderswo im Stack zu implementieren.
- RTP bearbeitet nicht die Zuweisung oder Reservierung von möglicherweise benötigten Ressourcen.

Wo es im Hinblick auf WebRTC wichtig ist, werden diese in verschiedenen Bereichen der WebRTC-Infrastruktur behandelt. Zum Beispiel übernimmt RTCP die Überwachung der QoS.

## RTCPeerConnection und RTP

Jede {{domxref("RTCPeerConnection")}} verfügt über Methoden, die Zugriff auf die Liste der RTP-Transporte bieten, die die Peer-Verbindung bedienen. Diese entsprechen den folgenden drei Transporttypen, die von `RTCPeerConnection` unterstützt werden:

- {{domxref("RTCRtpSender")}}
  - : `RTCRtpSender` verwalten die Codierung und Übertragung von {{domxref("MediaStreamTrack")}}-Daten zu einem Remote-Peer. Die Sender für eine gegebene Verbindung können durch Aufrufen von {{domxref("RTCPeerConnection.getSenders()")}} abgerufen werden.
- {{domxref("RTCRtpReceiver")}}
  - : `RTCRtpReceiver` bieten die Möglichkeit, eingehende `MediaStreamTrack`-Daten zu überprüfen und Informationen darüber zu erhalten. Die Empfänger einer Verbindung können durch Aufrufen von {{domxref("RTCPeerConnection.getReceivers()")}} abgerufen werden.
- {{domxref("RTCRtpTransceiver")}}
  - : Ein `RTCRtpTransceiver` ist ein Paar aus einem RTP-Sender und einem RTP-Empfänger, die ein SDP `mid`-Attribut teilen, was bedeutet, dass sie die gleiche SDP-Medien-m-Zeile (die einen bidirektionalen SRTP-Strom darstellt) teilen. Diese werden durch die Methode {{domxref("RTCPeerConnection.getTransceivers()")}} zurückgegeben, und jede `mid` und jeder Transceiver haben eine Eins-zu-eins-Beziehung, wobei die `mid` für jede `RTCPeerConnection` eindeutig ist.

### Nutzung von RTP zur Implementierung einer "Hold"-Funktion

Da die Streams für eine `RTCPeerConnection` mit RTP und den oben genannten Schnittstellen implementiert sind, können Sie den Zugriff nutzen, den Ihnen dies auf die interne Struktur der Streams gibt, um Anpassungen vorzunehmen. Zu den einfachsten Dingen, die Sie tun können, gehört die Implementierung einer "Hold"-Funktion, bei der ein Teilnehmer an einem Anruf eine Taste drücken und sein Mikrofon ausschalten, statt dessen Musik an den anderen Peer senden und eingehenden Ton nicht mehr akzeptieren kann.

> [!NOTE]
> Dieses Beispiel nutzt moderne JavaScript-Funktionen, einschließlich [async functions](/de/docs/Web/JavaScript/Reference/Statements/async_function) und der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Ausdruck. Dies vereinfacht den Umgang mit den von WebRTC-Methoden zurückgegebenen Versprechen enorm und macht ihn weitaus lesbarer.

In den Beispielen unten bezeichnen wir den Peer, der den "Hold"-Modus ein- und ausschaltet, als lokalen Peer und den Benutzer, der in den Haltemodus versetzt wird, als Remote-Peer.

#### Aktivieren des Haltemodus

##### Lokaler Peer

Wenn der lokale Benutzer beschließt, den Haltemodus zu aktivieren, wird die Methode `enableHold()` unten aufgerufen. Sie akzeptiert als Eingabe einen {{domxref("MediaStream")}}, der den Ton enthält, der abgespielt werden soll, während der Anruf in der Warteschleife ist.

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

Die drei Codezeilen innerhalb des [`try`](/de/docs/Web/JavaScript/Reference/Statements/try...catch)-Blocks führen die folgenden Schritte aus:

1. Ersetzen Sie den ausgehenden Audiotrack durch einen {{domxref("MediaStreamTrack")}}, der Haltemusik enthält.
2. Deaktivieren Sie den eingehenden Audiotrack.
3. Schalten Sie den Audiotransceiver in den "Senden-Only"-Modus.

Dadurch wird eine Neuverhandlung der `RTCPeerConnection` ausgelöst, indem ein {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}-Ereignis gesendet wird, auf das Ihr Code reagiert, indem er ein SDP-Angebot mit {{domxref("RTCPeerConnection.createOffer")}} generiert und es über den Signalisierungsserver an den Remote-Peer sendet.

Der `audioStream`, der den statt des Mikrofons des lokalen Peers zu spielenden Ton enthält, kann von überall her kommen. Eine Möglichkeit besteht darin, ein verstecktes {{HTMLElement("audio")}}-Element zu haben und {{domxref("HTMLMediaElement.captureStream", "HTMLAudioElement.captureStream()")}} zu verwenden, um seinen Audiostream zu erhalten.

##### Remote-Peer

Auf dem Remote-Peer, wenn wir ein SDP-Angebot mit der auf `"sendonly"` gesetzten Richtung erhalten, wird es mit der Methode `holdRequested()` behandelt, die ein SDP-Angebot-String als Eingabe akzeptiert.

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

1. Setzen Sie die Remote-Beschreibung auf das angegebene `offer` durch Aufruf von {{domxref("RTCPeerConnection.setRemoteDescription()")}}.
2. Ersetzen Sie den Track des Audiotransceivers `RTCRtpSender` durch `null`, was bedeutet, dass kein Track gesendet wird. Dies stoppt das Senden von Audio auf dem Transceiver.
3. Setzen Sie die Eigenschaft {{domxref("RTCRtpTransceiver.direction", "direction")}} des Audiotransceivers auf `"recvonly"`, wobei dem Transceiver mitgeteilt wird, dass er nur Audio akzeptieren und nicht senden soll.
4. Die SDP-Antwort wird generiert und mit einer Methode namens `sendAnswer()` gesendet, die die Antwort mit {{domxref("RTCPeerConnection.createAnswer", "createAnswer()")}} erzeugt und dann das resultierende SDP über den Signalisierungsdienst an den anderen Peer sendet.

#### Deaktivieren des Haltemodus

##### Lokaler Peer

Wenn der lokale Benutzer auf das Schnittstellen-Widget klickt, um den Haltemodus zu deaktivieren, wird die Methode `disableHold()` aufgerufen, um den Prozess der Wiederherstellung der normalen Funktionalität zu beginnen.

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

Dies kehrt die in `enableHold()` unternommenen Schritte wie folgt um:

1. Der Track des Audiotransceivers `RTCRtpSender` wird durch den ersten Audiotrack des angegebenen Streams ersetzt.
2. Der eingehende Audiotrack des Transceivers wird wieder aktiviert.
3. Die Richtung des Audiotransceivers wird auf `"sendrecv"` gesetzt, was bedeutet, dass er sowohl das Senden als auch das Empfangen von gestreamtem Audio fortsetzen soll, anstatt nur zu senden.

Genauso wie es beim Aktivieren des Haltemodus war, wird dadurch erneut eine Verhandlung ausgelöst, die dazu führt, dass Ihr Code ein neues Angebot an den Remote-Peer sendet.

##### Remote-Peer

Wenn das `"sendrecv"`-Angebot vom Remote-Peer empfangen wird, ruft er seine Methode `holdEnded()` auf:

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

1. Das empfangene Angebot wird als Remote-Beschreibung gespeichert, indem `setRemoteDescription()` aufgerufen wird.
2. Der Track des Audiotransceivers `RTCRtpSender` wird mit der Methode {{domxref("RTCRtpSender.replaceTrack", "replaceTrack()")}} verwendet, um den ausgehenden Audiotrack auf den ersten Track des Mikrofonaudiostreams zu setzen.
3. Die Richtung des Transceivers wird auf `"sendrecv"` gesetzt, was bedeutet, dass er sowohl das Senden als auch das Empfangen von Audio fortsetzen soll.

Von diesem Punkt an ist das Mikrofon wieder aktiviert und der Remote-Benutzer kann den lokalen Benutzer wieder hören sowie mit ihm sprechen.

## Siehe auch

- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in die WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

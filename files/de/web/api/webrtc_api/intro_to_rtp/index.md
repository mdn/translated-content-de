---
title: Einführung in das Real-time Transport Protocol (RTP)
slug: Web/API/WebRTC_API/Intro_to_RTP
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Das **Real-time Transport Protocol** (**RTP**), definiert in {{RFC(3550)}}, ist ein IETF-Standardprotokoll, das Echtzeitverbindungen ermöglicht, um Daten auszutauschen, die Echtzeitpriorität erfordern. Dieser Artikel bietet einen Überblick darüber, was RTP ist und wie es im Kontext von WebRTC funktioniert.

> [!NOTE]
> WebRTC verwendet tatsächlich **SRTP** (Secure Real-time Transport Protocol), um sicherzustellen, dass die ausgetauschten Daten entsprechend gesichert und authentifiziert sind.

Die Minimierung der Latenz ist besonders wichtig für WebRTC, da die Kommunikation von Angesicht zu Angesicht mit so wenig [Latenz](/de/docs/Glossary/latency) wie möglich erfolgen muss. Je mehr Zeitverzögerung zwischen dem Sprechen eines Benutzers und dem Hören eines anderen besteht, desto wahrscheinlicher kommt es zu Übersprechen und anderen Verwirrungen.

## Hauptmerkmale von RTP

Bevor wir den Einsatz von RTP in WebRTC-Kontexten untersuchen, ist es nützlich, eine allgemeine Vorstellung davon zu haben, was RTP bietet und was nicht. RTP ist ein Datenübertragungsprotokoll, dessen Aufgabe es ist, Daten so effizient wie möglich zwischen zwei Endpunkten zu transportieren, abhängig von den aktuellen Bedingungen. Diese Bedingungen können durch alles von den zugrunde liegenden Schichten des Netzwerkstapels bis zur physischen Netzwerkverbindung, den vermittelten Netzwerken, der Leistung des entfernten Endpunkts, den Rauschpegeln, den Verkehrspegeln usw. beeinflusst werden.

Da RTP ein Datenübertragungsprotokoll ist, wird es durch das eng verwandte **RTP Control Protocol** (**RTCP**), das in {{RFC(3550, "", 6)}} definiert ist, ergänzt. RTCP fügt Funktionen wie **Quality of Service** (**QoS**)-Überwachung, Teilnehmerinformationsaustausch und Ähnliches hinzu. Es ist nicht ausreichend für die vollständige Verwaltung von Benutzern, Mitgliedschaften, Berechtigungen usw., bietet aber die notwendigen Grundlagen für eine uneingeschränkte Kommunikation in einer Mehrbenutzer-Sitzung.

Die Tatsache, dass RTCP im selben RFC wie RTP definiert ist, deutet darauf hin, wie eng miteinander verbunden diese beiden Protokolle sind.

### Fähigkeiten von RTP

Die Hauptvorteile von RTP im Hinblick auf WebRTC umfassen:

- Allgemein geringe Latenz.
- Pakete sind mit einer Sequenznummer und einem Zeitstempel versehen, um sie bei einer falschen Reihenfolge wieder zusammenzusetzen. Dies ermöglicht, dass mit RTP gesendete Daten auf Übertragungen geliefert werden können, die keine Reihenfolge oder gar keine Lieferung garantieren.
- Dies bedeutet, dass RTP über [UDP](/de/docs/Glossary/UDP) verwendet werden kann — aber nicht muss —, sowohl wegen seiner Leistung als auch wegen seiner Multiplex- und Prüfsummenfunktionen.
- RTP unterstützt Multicast; obwohl dies für WebRTC derzeit noch nicht wichtig ist, wird es in Zukunft von Bedeutung sein, wenn WebRTC (hoffentlich) um die Unterstützung von Mehrbenutzer-Konversationen erweitert wird.
- RTP ist nicht auf die audiovisuelle Kommunikation beschränkt. Es kann für jede Form der kontinuierlichen oder aktiven Datenübertragung verwendet werden, einschließlich Daten-Streaming, aktiven Badges oder Statusanzeigeaktualisierungen oder Steuerungs- und Messinformationsübertragung.

### Dinge, die RTP nicht macht

RTP selbst bietet nicht jede mögliche Funktion, weshalb WebRTC auch andere Protokolle verwendet. Einige der bemerkenswerten Dinge, die RTP nicht umfasst:

- RTP garantiert _nicht_ **[Quality-of-Service](https://en.wikipedia.org/wiki/Quality-of-service)** (**QoS**).
- Obwohl RTP für den Einsatz in latenzkritischen Szenarien vorgesehen ist, bietet es von sich aus keine Funktionen, die QoS sicherstellen. Stattdessen bietet es nur die Informationen, die erforderlich sind, um QoS an anderer Stelle im Stapel zu implementieren.
- RTP behandelt nicht die Zuweisung oder Reservierung von Ressourcen, die möglicherweise benötigt werden.

Wo dies für WebRTC wichtig ist, werden diese Punkte an verschiedenen Orten innerhalb der WebRTC-Infrastruktur behandelt. Zum Beispiel verarbeitet RTCP die QoS-Überwachung.

## RTCPeerConnection und RTP

Jede [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection) verfügt über Methoden, die Zugriff auf die Liste der RTP-Transporte bieten, die die Peer-Verbindung bedienen. Diese entsprechen den folgenden drei Arten von Transporten, die von `RTCPeerConnection` unterstützt werden:

- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
  - : `RTCRtpSender` verarbeitet die Codierung und Übertragung von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Daten zu einem entfernten Peer. Die Sender für eine gegebene Verbindung können durch Aufrufen von [`RTCPeerConnection.getSenders()`](/de/docs/Web/API/RTCPeerConnection/getSenders) erhalten werden.
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
  - : `RTCRtpReceiver` bietet die Möglichkeit, eingehende `MediaStreamTrack`-Daten zu inspizieren und Informationen darüber zu erhalten. Die Empfänger einer Verbindung können durch Aufrufen von [`RTCPeerConnection.getReceivers()`](/de/docs/Web/API/RTCPeerConnection/getReceivers) abgerufen werden.
- [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)
  - : Ein `RTCRtpTransceiver` ist ein Paar aus einem RTP-Sender und einem RTP-Empfänger, die ein gemeinsames SDP `mid`-Attribut teilen, was bedeutet, dass sie die gleiche SDP-Medienzeile (die einen bidirektionalen SRTP-Stream darstellt) teilen. Diese werden durch die Methode [`RTCPeerConnection.getTransceivers()`](/de/docs/Web/API/RTCPeerConnection/getTransceivers) zurückgegeben, und jedes `mid` und der Transceiver teilen eine Eins-zu-eins-Beziehung, wobei das `mid` für jede `RTCPeerConnection` einzigartig ist.

### RTP zur Implementierung einer "Halten"-Funktion nutzen

Da die Streams für eine `RTCPeerConnection` mit RTP und den oben genannten Schnittstellen implementiert werden, können Sie den Zugang, den Ihnen diese zum Inneren der Streams gewähren, nutzen, um Anpassungen vorzunehmen. Zu den einfachsten Dingen, die Sie tun können, gehört, eine "Halten"-Funktion zu implementieren, bei der ein Teilnehmer an einem Anruf auf eine Taste klicken kann, um sein Mikrofon auszuschalten, statt dessen Musik an den anderen Teilnehmer zu senden und den Empfang eingehender Audiosignale zu stoppen.

> [!NOTE]
> Dieses Beispiel nutzt moderne JavaScript-Funktionen, einschließlich [Async-Funktionen](/de/docs/Web/JavaScript/Reference/Statements/async_function) und der [`await`](/de/docs/Web/JavaScript/Reference/Operators/await)-Ausdruck. Dadurch wird der Code, der sich mit den von WebRTC-Methoden zurückgegebenen Versprechen beschäftigt, enorm vereinfacht und lesbarer gemacht.

In den untenstehenden Beispielen werden wir den Peer, der den "Halten"-Modus ein- und ausschaltet, als den lokalen Peer bezeichnen und den Benutzer, der in den Haltemodus versetzt wird, als den entfernten Peer.

#### Halten-Modus aktivieren

##### Lokaler Peer

Wenn der lokale Benutzer beschließt, den Halten-Modus zu aktivieren, wird die untenstehende Methode `enableHold()` aufgerufen. Sie akzeptiert als Eingabe einen [`MediaStream`](/de/docs/Web/API/MediaStream), der die Audioinhalte enthält, die abgespielt werden sollen, während der Anruf auf Halten ist.

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

Die drei Codezeilen im [`try`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block führen die folgenden Schritte aus:

1. Ersetzen Sie ihre ausgehende Audiospur durch eine [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die Musik enthält.
2. Deaktivieren Sie die eingehende Audiospur.
3. Schalten Sie den Audio-Transceiver in den Nur-Sende-Modus.

Dies löst die Neuverhandlung der `RTCPeerConnection` aus, indem sie ein [`negotiationneeded`](/de/docs/Web/API/RTCPeerConnection/negotiationneeded_event)-Ereignis sendet, auf das Ihr Code reagiert, indem er ein SDP-Angebot mit [`RTCPeerConnection.createOffer`](/de/docs/Web/API/RTCPeerConnection/createOffer) erstellt und über den Signalisierungsserver an den entfernten Peer sendet.

Der `audioStream`, der das anstelle des Mikrofonaudios des lokalen Peers abzuspielende Audio enthält, kann von überall stammen. Eine Möglichkeit ist, ein verborgenes {{HTMLElement("audio")}}-Element zu haben und [`HTMLAudioElement.captureStream()`](/de/docs/Web/API/HTMLMediaElement/captureStream) zu verwenden, um seinen Audiostream abzurufen.

##### Entfernte Peer

Beim entfernten Peer, wenn wir ein SDP-Angebot mit der auf `"sendonly"` gesetzten Richtung erhalten, bearbeiten wir es mit der Methode `holdRequested()`, die als Eingabe einen SDP-Angebotsstring akzeptiert.

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

Die hier durchgeführten Schritte sind:

1. Legen Sie die Remote-Beschreibung auf das angegebene `offer` fest, indem Sie [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) aufrufen.
2. Ersetzen Sie die Spur des [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) des Audio-Transceivers durch `null`, was bedeutet, dass keine Spur gesendet wird. Dies stoppt das Senden von Audio auf dem Transceiver.
3. Setzen Sie die [`direction`](/de/docs/Web/API/RTCRtpTransceiver/direction)-Eigenschaft des Audio-Transceivers auf `"recvonly"`, wodurch der Transceiver angewiesen wird, nur Audio zu empfangen und nicht zu senden.
4. Die SDP-Antwort wird generiert und mit einer Methode namens `sendAnswer()` gesendet, die die Antwort mit [`createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) erzeugt und das resultierende SDP über den Signaldienst an den anderen Peer sendet.

#### Halten-Modus deaktivieren

##### Lokaler Peer

Wenn der lokale Benutzer auf das Oberflächenelement klickt, um den Halten-Modus zu deaktivieren, wird die Methode `disableHold()` aufgerufen, um den normalen Betrieb wiederherzustellen.

```js
async function disableHold(micStream) {
  await audioTransceiver.sender.replaceTrack(micStream.getAudioTracks()[0]);
  audioTransceiver.receiver.track.enabled = true;
  audioTransceiver.direction = "sendrecv";
}
```

Dies kehrt die in `enableHold()` durchgeführten Schritte wie folgt um:

1. Die Spur des `RTCRtpSender` des Audio-Transceivers wird durch die erste Audiospur des angegebenen Streams ersetzt.
2. Die eingehende Audiospur des Transceivers wird wieder aktiviert.
3. Die Richtung des Audio-Transceivers wird auf `"sendrecv"` gesetzt, was bedeutet, dass er wieder sowohl Audio senden als auch empfangen soll, anstatt nur zu senden.

Wie bei der Aktivierung des Halten-Modus löst dies erneut eine Verhandlung aus, was dazu führt, dass Ihr Code ein neues Angebot an den entfernten Peer sendet.

##### Entfernte Peer

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
2. Die Methode [`replaceTrack()`](/de/docs/Web/API/RTCRtpSender/replaceTrack) des `RTCRtpSender` des Audio-Transceivers wird verwendet, um die ausgehende Audiospur auf die erste Spur des Mikrofon-Audiostreams zu setzen.
3. Die Richtung des Transceivers wird auf `"sendrecv"` gesetzt, was bedeutet, dass er das Senden und Empfangen von Audio wieder aufnehmen soll.

Ab diesem Punkt wird das Mikrofon wieder aktiviert und der entfernte Benutzer kann den lokalen Benutzer hören und ihn ansprechen.

## Siehe auch

- [WebRTC-Konnektivität](/de/docs/Web/API/WebRTC_API/Connectivity)
- [Einführung in WebRTC-Protokolle](/de/docs/Web/API/WebRTC_API/Protocols)
- [Lebenszyklus einer WebRTC-Sitzung](/de/docs/Web/API/WebRTC_API/Session_lifetime)

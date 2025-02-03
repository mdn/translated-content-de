---
title: WebRTC-Konnektivität
slug: Web/API/WebRTC_API/Connectivity
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel beschreibt, wie die verschiedenen mit WebRTC verbundenen Protokolle miteinander interagieren, um eine Verbindung herzustellen und Daten und/oder Medien zwischen den Peers zu übertragen.

> [!NOTE]
> Diese Seite benötigt eine umfassende Überarbeitung, um die strukturelle Integrität und Vollständigkeit des Inhalts zu gewährleisten. Viele Informationen sind gut, aber die Organisation ist ein Chaos, da es derzeit eher eine Sammelstelle ist.

## Signalisierung

Leider kann WebRTC keine Verbindungen ohne eine Art von Server in der Mitte herstellen. Wir nennen dies den **Signalkanal** oder **Signalisierungsdienst**. Es ist jede Art von Kommunikationskanal, um Informationen vor dem Einrichten einer Verbindung auszutauschen, sei es per E-Mail, Postkarte oder Brieftaube. Das liegt bei Ihnen.

Die Informationen, die wir austauschen müssen, sind das Angebot und die Antwort, die einfach das unten erwähnte {{Glossary("SDP", "SDP")}} enthalten.

Peer A, der der Initiator der Verbindung sein wird, erstellt ein Angebot. Dieses Angebot wird dann über den gewählten Signalkanal an Peer B gesendet. Peer B erhält das Angebot vom Signalkanal und erstellt eine Antwort. Diese wird dann über den Signalkanal an Peer A zurückgesendet.

### Sitzungsbeschreibungen

Die Konfiguration eines Endpunkts in einer WebRTC-Verbindung wird als **Sitzungsbeschreibung** bezeichnet. Die Beschreibung enthält Informationen über die Art der gesendeten Medien, ihr Format, das verwendete Übertragungsprotokoll, die IP-Adresse und den Port des Endpunkts sowie andere Informationen, die zur Beschreibung eines Medienübertragungspunktes benötigt werden. Diese Informationen werden mit dem **Session Description Protocol** ({{Glossary("SDP", "SDP")}}) ausgetauscht und gespeichert; wenn Sie Details zum Format der SDP-Daten suchen, finden Sie diese in {{RFC(8866)}}.

Wenn ein Benutzer einen WebRTC-Anruf zu einem anderen Benutzer startet, wird eine spezielle Beschreibung erstellt, die als **Angebot** bezeichnet wird. Diese Beschreibung enthält alle Informationen zur Konfiguration, die der Anrufer für den Anruf vorschlägt. Der Empfänger antwortet dann mit einer **Antwort**, die eine Beschreibung seines Endes des Anrufs darstellt. Auf diese Weise teilen beide Geräte einander die Informationen mit, die erforderlich sind, um Mediendaten auszutauschen. Dieser Austausch wird mit dem Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}})-Protokoll abgewickelt, das es zwei Geräten ermöglicht, über einen Vermittler Angebote und Antworten auszutauschen, auch wenn die beiden Geräte durch Network Address Translation ({{Glossary("NAT", "NAT")}}) getrennt sind.

Jeder Peer hält dann zwei Beschreibungen bereit: die **lokale Beschreibung**, die sich selbst beschreibt, und die **Remote-Beschreibung**, die das andere Ende des Anrufs beschreibt.

Der Angebots-/Antwortprozess wird sowohl beim ersten Herstellen eines Anrufs als auch jedes Mal durchgeführt, wenn sich das Format oder die Konfiguration des Anrufs ändern muss. Unabhängig davon, ob es sich um einen neuen Anruf oder die Neukonfiguration eines bestehenden handelt, sind dies die grundlegenden Schritte, die zum Austausch von Angebot und Antwort erforderlich sind, wobei die ICE-Schicht momentan außer Acht gelassen wird:

1. Der Anrufer erfasst lokale Medien über [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
2. Der Anrufer erstellt `RTCPeerConnection` und ruft [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf (da `addStream` veraltet ist)
3. Der Anrufer ruft [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erstellen.
4. Der Anrufer ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um dieses Angebot als _lokale Beschreibung_ festzulegen (also die Beschreibung des lokalen Endes der Verbindung).
5. Nach `setLocalDescription()` fragt der Anrufer STUN-Server an, um die ICE-Kandidaten zu generieren.
6. Der Anrufer überträgt das Angebot über den Signalisierungsserver an den beabsichtigten Empfänger des Anrufs.
7. Der Empfänger erhält das Angebot und ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um es als _Remote-Beschreibung_ aufzuzeichnen (die Beschreibung des anderen Endes der Verbindung).
8. Der Empfänger führt die für sein Ende des Anrufs notwendigen Einstellungen durch: Erfassung seiner lokalen Medien und Anbringen der einzelnen Medientracks an die Peer-Verbindung über [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack)
9. Der Empfänger erstellt dann eine Antwort, indem er [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
10. Der Empfänger ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, übergibt dabei die erstellte Antwort, um die Antwort als seine lokale Beschreibung festzulegen. Der Empfänger kennt jetzt die Konfiguration beider Enden der Verbindung.
11. Der Empfänger verwendet den Signalisierungsserver, um die Antwort an den Anrufer zu senden.
12. Der Anrufer erhält die Antwort.
13. Der Anrufer ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um die Antwort als Remote-Beschreibung für sein Ende des Anrufs festzulegen. Es kennt jetzt die Konfiguration beider Peers. Die Medienübertragung beginnt gemäß der Konfiguration.

### Ausstehende und aktuelle Beschreibungen

Wenn wir einen Schritt tiefer in den Prozess gehen, stellen wir fest, dass `localDescription` und `remoteDescription`, die Eigenschaften, die diese beiden Beschreibungen zurückgeben, nicht so einfach sind, wie sie scheinen. Da während der Neuverhandlung ein Angebot abgelehnt werden könnte, weil es ein inkompatibles Format vorschlägt, muss jeder Endpunkt die Fähigkeit haben, ein neues Format vorzuschlagen, es jedoch nicht tatsächlich zu wechseln, bis es vom anderen Peer akzeptiert wird. Aus diesem Grund verwendet WebRTC _ausstehende_ und _aktuelle_ Beschreibungen.

Die **aktuelle Beschreibung** (zurückgegeben von den Eigenschaften [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) und [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription)) stellt die Beschreibung dar, die derzeit tatsächlich von der Verbindung verwendet wird. Dies ist die aktuellste Verbindung, die beide Seiten vereinbart haben zu nutzen.

Die **ausstehende Beschreibung** (zurückgegeben von [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) und [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)) zeigt eine Beschreibung an, die zur Zeit nach einem Aufruf von `setLocalDescription()` bzw. `setRemoteDescription()` geprüft wird.

Beim Lesen der Beschreibung (zurückgegeben von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) und [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)) wird der zurückgegebene Wert `pendingLocalDescription`/`pendingRemoteDescription` sein, wenn eine ausstehende Beschreibung existiert (d. h., die ausstehende Beschreibung nicht `null` ist); andernfalls wird die aktuelle Beschreibung (`currentLocalDescription`/`currentRemoteDescription`) zurückgegeben.

Wenn Sie die Beschreibung durch Aufrufen von `setLocalDescription()` oder `setRemoteDescription()` ändern, wird die angegebene Beschreibung als ausstehende Beschreibung festgelegt, und die WebRTC-Schicht beginnt zu beurteilen, ob sie akzeptabel ist oder nicht. Sobald die vorgeschlagene Beschreibung vereinbart wurde, wird der Wert von `currentLocalDescription` oder `currentRemoteDescription` auf die ausstehende Beschreibung geändert, und die ausstehende Beschreibung wird wieder auf null gesetzt, was darauf hinweist, dass es keine ausstehende Beschreibung gibt.

> [!NOTE]
> Die `pendingLocalDescription` enthält nicht nur das in Betracht gezogene Angebot oder die Antwort, sondern auch alle lokalen ICE-Kandidaten, die bereits seit Erstellung des Angebots oder der Antwort gesammelt wurden. Ebenso umfasst die `pendingRemoteDescription` alle Remote-ICE-Kandidaten, die durch Aufrufe von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) bereitgestellt wurden.

Siehe die einzelnen Artikel zu diesen Eigenschaften und Methoden für genauere Informationen und [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs) für Informationen über von WebRTC unterstützte Codecs und deren Kompatibilität mit verschiedenen Browsern. Der Codec-Leitfaden bietet auch Anleitungen, um Ihnen bei der Auswahl der besten Codecs für Ihre Bedürfnisse zu helfen.

## ICE-Kandidaten

Neben dem Austausch von Informationen über die Medien (oben in Angebot/Antwort und SDP besprochen) müssen Peers Informationen über die Netzwerkverbindung austauschen. Dies ist bekannt als ein **ICE-Kandidat** und beschreibt die verfügbaren Methoden, mit denen der Peer kommunizieren kann (direkt oder über einen TURN-Server). Typischerweise schlägt jeder Peer seine besten Kandidaten zuerst vor und arbeitet sich zu seinen schlechteren Kandidaten hinunter. Idealerweise sind die Kandidaten UDP (da es schneller ist und Medienströme sich relativ einfach von Unterbrechungen erholen können), aber der ICE-Standard erlaubt auch TCP-Kandidaten.

> [!NOTE]
> In der Regel werden ICE-Kandidaten mit TCP nur verwendet, wenn UDP nicht verfügbar ist oder in einer Weise eingeschränkt ist, die es für Medien-Streaming ungeeignet macht. Nicht alle Browser unterstützen ICE über TCP.

ICE erlaubt es, dass Kandidaten Verbindungen über entweder {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} darstellen, wobei UDP im Allgemeinen bevorzugt wird (und breiter unterstützt wird). Jedes Protokoll unterstützt einige Arten von Kandidaten, wobei die Kandidatentypen definieren, wie die Daten von Peer zu Peer übertragen werden.

### UDP-Kandidatentypen

UDP-Kandidaten (Kandidaten, deren [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) auf `udp` gesetzt ist) können eine der folgenden Typen sein:

- `host`
  - : Ein Host-Kandidat ist einer, bei dem seine [`ip`](/de/docs/Web/API/RTCIceCandidate/address) die tatsächliche, direkte IP-Adresse des Remote-Peers ist.
- `prflx`
  - : Ein Peer-reflexiver Kandidat ist einer, dessen IP-Adresse aus einem symmetrischen NAT zwischen den beiden Peers stammt, normalerweise als zusätzlicher Kandidat während Trickle ICE (d. h. zusätzliche Kandidatenaustausche, die nach der primären Signalisierung, aber vor Abschluss der Verbindungsüberprüfung stattfinden).
- `srflx`
  - : Ein serverreflexiver Kandidat wird von einem STUN/TURN-Server generiert; der Initiator der Verbindung fordert einen Kandidaten vom STUN-Server an, der die Anfrage durch das NAT des Remote-Peers weiterleitet, was einen Kandidaten erstellt und zurückgibt, dessen IP-Adresse lokal beim Remote-Peer ist. Der STUN-Server antwortet dann auf die Anfrage des Initiators mit einem Kandidaten, dessen IP-Adresse nichts mit dem Remote-Peer zu tun hat.
- `relay`
  - : Ein Relay-Kandidat wird genauso generiert wie ein serverreflexiver Kandidat (`"srflx"`), jedoch mit {{Glossary("TURN", "TURN")}} statt {{Glossary("STUN", "STUN")}}.

### TCP-Kandidatentypen

TCP-Kandidaten (also, Kandidaten, deren [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) `tcp` ist) können folgenden Typen sein:

- `active`
  - : Der Transport versucht, eine ausgehende Verbindung zu öffnen, aber keine eingehenden Verbindungsanfragen zu empfangen. Dies ist der häufigste Typ und der einzige, den die meisten User Agents sammeln werden.
- `passive`
  - : Der Transport wird eingehende Verbindungsversuche empfangen, aber selbst keine Verbindung versuchen.
- `so`
  - : Der Transport wird versuchen, gleichzeitig eine Verbindung mit seinem Peer zu öffnen.

### Auswahl eines Kandidatenpaars

Die ICE-Ebene wählt einen der beiden Peers aus, der als **kontrollierende Agent** dient. Dies ist der ICE-Agent, der die endgültige Entscheidung darüber trifft, welches Kandidatenpaar für die Verbindung zu verwenden ist. Der andere Peer wird als **kontrollierter Agent** bezeichnet. Sie können feststellen, welchen Endpunkt Ihrer Verbindung Sie haben, indem Sie den Wert von [`RTCIceCandidate.transport.role`](/de/docs/Web/API/RTCIceTransport/role) prüfen, obwohl es im Allgemeinen egal ist, welcher welcher ist.

Der kontrollierende Agent übernimmt nicht nur die Verantwortung, die endgültige Entscheidung darüber zu treffen, welches Kandidatenpaar zu verwenden ist, sondern auch, dem kontrollierten Agenten diese Auswahl mit STUN und, falls erforderlich, einem aktualisierten Angebot zu signalisieren. Der kontrollierte Agent wartet nur darauf, mitgeteilt zu bekommen, welches Kandidatenpaar zu verwenden ist.

Es ist wichtig zu bedenken, dass eine einzelne ICE-Session dazu führen kann, dass der kontrollierende Agent mehr als ein Kandidatenpaar auswählt. Jedes Mal, wenn er dies tut und diese Informationen mit dem kontrollierten Agenten teilt, konfigurieren die beiden Peers ihre Verbindung neu, um die neue Konfiguration zu verwenden, die durch das neue Kandidatenpaar beschrieben wird.

Sobald die ICE-Session abgeschlossen ist, ist die derzeit geltende Konfiguration die endgültige, es sei denn, es kommt zu einem ICE-Reset.

Am Ende jeder Generation von Kandidaten wird eine End-of-Candidates-Benachrichtigung in Form eines [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gesendet, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft ein leerer String ist. Dieser Kandidat sollte trotzdem wie üblich der Verbindung mit der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) hinzugefügt werden, um diese Benachrichtigung dem Remote-Peer zu liefern.

Wenn es überhaupt keine weiteren Kandidaten während des aktuellen Verhandlungsaustauschs zu erwarten gibt, wird eine End-of-Candidates-Benachrichtigung gesendet, indem ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) geliefert wird, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft `null` ist. Diese Nachricht muss _nicht_ an den Remote-Peer gesendet werden. Es handelt sich um eine veraltete Benachrichtigung über einen Zustand, der stattdessen erkannt werden kann, indem darauf geachtet wird, dass sich der [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) zu `complete` ändert, indem auf das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis geachtet wird.

## Wenn etwas schiefgeht

Während der Verhandlung wird es Zeiten geben, in denen die Dinge einfach nicht funktionieren. Zum Beispiel, wenn eine Verbindung neu verhandelt wird - beispielsweise um sich an geänderte Hardware- oder Netzwerkkonfigurationen anzupassen - könnte die Verhandlung in eine Sackgasse geraten, oder es könnte irgendeine Form von Fehler auftreten, die eine Verhandlung überhaupt verhindert. Es können auch Berechtigungsprobleme oder andere Probleme auftreten.

### ICE-Rollbacks

Wenn eine Verbindung, die bereits aktiv ist, neu verhandelt wird und eine Situation auftritt, in der die Verhandlung fehlschlägt, möchten Sie den bereits laufenden Anruf nicht wirklich abbrechen. Schließlich wollten Sie höchstwahrscheinlich lediglich die Verbindung upgraden oder downgraden oder anderweitig Anpassungen an einer laufenden Sitzung vornehmen. Den Anruf abzubrechen, wäre in dieser Situation eine übertriebene Reaktion.

Stattdessen können Sie ein **ICE-Rollback** starten. Ein Rollback stellt das SDP-Angebot (und damit auch die Konfigurationsverbindung) auf die Konfiguration zurück, die es hatte, als der `signalingState` der Verbindung zuletzt `stable` war.

Um ein Rollback programmatisch zu initiieren, senden Sie eine Beschreibung, deren [`type`](/de/docs/Web/API/RTCSessionDescription/type) `rollback` ist. Alle anderen Eigenschaften im Beschreibungsobjekt werden ignoriert.

Darüber hinaus initiiert der ICE-Agent automatisch ein Rollback, wenn ein Peer, der zuvor ein Angebot erstellt hatte, ein Angebot vom Remote-Peer erhält. Mit anderen Worten, wenn der lokale Peer im Zustand `have-local-offer` ist, was darauf hinweist, dass der lokale Peer zuvor _ein_ Angebot gesendet hatte, löst der Aufruf von `setRemoteDescription()` mit einem _erhaltenen_ Angebot ein Rollback aus, sodass die Verhandlung von einem Remote-Peer als Anrufer zu einem lokalen Peer als Anrufer wechselt.

### ICE-Neustarts

Erfahren Sie mehr über den [ICE Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart)-Prozess.

## Der gesamte Austausch in einem komplizierten Diagramm

![Ein vollständiges Architekturdiagramm, das den gesamten WebRTC-Prozess zeigt.](webrtc-complete-diagram.png)

[Originalquelle](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)

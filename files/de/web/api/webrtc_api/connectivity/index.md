---
title: WebRTC-Konnektivität
slug: Web/API/WebRTC_API/Connectivity
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel beschreibt, wie die verschiedenen WebRTC-bezogenen Protokolle miteinander interagieren, um eine Verbindung zu erstellen und Daten und/oder Medien zwischen Peers zu übertragen.

> [!NOTE]
> Diese Seite muss stark umgeschrieben werden, um strukturelle Integrität und Vollständigkeit des Inhalts zu gewährleisten. Viele Informationen hier sind gut, aber die Organisation ist ein Durcheinander, da dies derzeit eine Art Sammelstelle ist.

## Signalisierung

Leider kann WebRTC keine Verbindungen ohne irgendeine Art von Server in der Mitte herstellen. Wir nennen dies den **Signalkanal** oder **Signalisierungsdienst**. Es ist jede Art von Kommunikationskanal, um Informationen auszutauschen, bevor eine Verbindung eingerichtet wird, sei es per E-Mail, Postkarte oder Brieftaube. Das liegt bei Ihnen.

Die Informationen, die wir austauschen müssen, sind das Angebot und die Antwort, die einfach das unten erwähnte [SDP](/de/docs/Glossary/SDP) enthalten.

Peer A, der Initiator der Verbindung, wird ein Angebot erstellen. Dieses Angebot schickt er dann an Peer B über den gewählten Signalisierungskanal. Peer B empfängt das Angebot über den Signalisierungskanal und erstellt eine Antwort. Diese sendet er dann zurück an Peer A über den Signalisierungskanal.

### Sitzungsbeschreibungen

Die Konfiguration eines Endpunkts in einer WebRTC-Verbindung wird als **Sitzungsbeschreibung** bezeichnet. Die Beschreibung enthält Informationen über die Art der gesendeten Medien, ihr Format, das verwendete Übertragungsprotokoll, die IP-Adresse und den Port des Endpunkts sowie andere Informationen, die zur Beschreibung eines Medientransfer-Endpunkts erforderlich sind. Diese Informationen werden mit dem **Session Description Protocol** ([SDP](/de/docs/Glossary/SDP)) ausgetauscht und gespeichert; wenn Sie Details zum Format der SDP-Daten wünschen, finden Sie diese in {{RFC(8866)}}.

Wenn ein Benutzer einen WebRTC-Anruf zu einem anderen Benutzer startet, wird eine spezielle Beschreibung erstellt, die als **Angebot** bezeichnet wird. Diese Beschreibung enthält alle Informationen über die vorgeschlagene Konfiguration des Anrufers für den Anruf. Der Empfänger antwortet dann mit einer **Antwort**, die eine Beschreibung seines Endes des Anrufs ist. Auf diese Weise teilen beide Geräte einander die Informationen mit, die zum Austausch von Mediendaten benötigt werden. Dieser Austausch erfolgt über das Interactive Connectivity Establishment ([ICE](/de/docs/Glossary/ICE)), ein Protokoll, das es zwei Geräten ermöglicht, über einen Vermittler Angebote und Antworten auszutauschen, selbst wenn die beiden Geräte durch Network Address Translation ([NAT](/de/docs/Glossary/NAT)) getrennt sind.

Jeder Peer hält dann zwei Beschreibungen bereit: die **lokale Beschreibung**, die sich selbst beschreibt, und die **ferne Beschreibung**, die das andere Ende des Anrufs beschreibt.

Der Angebot/Antwort-Prozess wird sowohl beim erstmaligen Herstellen eines Anrufs durchgeführt, als auch jedes Mal, wenn das Format des Anrufs oder eine andere Konfiguration geändert werden muss. Unabhängig davon, ob es sich um einen neuen Anruf oder die Neukonfiguration eines bestehenden handelt, sind dies die grundlegenden Schritte, die durchgeführt werden müssen, um das Angebot und die Antwort auszutauschen, wobei die ICE-Schicht vorerst weggelassen wird:

1. Der Anrufer erfasst lokale Medien über [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia).
2. Der Anrufer erstellt `RTCPeerConnection` und ruft [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf (da `addStream` veraltet ist).
3. Der Anrufer ruft [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erstellen.
4. Der Anrufer ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um das Angebot als _lokale Beschreibung_ (also die Beschreibung des lokalen Endes der Verbindung) festzulegen.
5. Nach `setLocalDescription()` fragt der Anrufer STUN-Server, um die ICE-Kandidaten zu generieren.
6. Der Anrufer überträgt das Angebot über den Signalisierungsserver an den beabsichtigten Empfänger des Anrufs.
7. Der Empfänger erhält das Angebot und ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um es als _ferne Beschreibung_ (die Beschreibung des anderen Endes der Verbindung) aufzuzeichnen.
8. Der Empfänger führt alle erforderlichen Setups für sein Ende des Anrufs durch: Erfasst seine lokalen Medien und bindet jede Medienspur in die Peer-Verbindung über [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ein.
9. Der Empfänger erstellt dann eine Antwort, indem er [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
10. Der Empfänger ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf und übergibt die erstellte Antwort, um die Antwort als lokale Beschreibung festzulegen. Der Empfänger kennt jetzt die Konfiguration beider Enden der Verbindung.
11. Der Empfänger verwendet den Signalisierungsserver, um die Antwort an den Anrufer zu senden.
12. Der Anrufer erhält die Antwort.
13. Der Anrufer ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um die Antwort als die ferne Beschreibung seines Endes des Anrufs festzulegen. Er kennt nun die Konfiguration beider Peers. Medien beginnen, wie konfiguriert, zu fließen.

### Ausstehende und aktuelle Beschreibungen

Wenn wir einen Schritt tiefer in den Prozess gehen, stellen wir fest, dass `localDescription` und `remoteDescription`, die Eigenschaften, die diese beiden Beschreibungen zurückgeben, nicht so einfach sind, wie sie aussehen. Da bei einer erneuten Verhandlung ein Angebot abgelehnt werden könnte, weil es ein inkompatibles Format vorschlägt, muss jeder Endpunkt in der Lage sein, ein neues Format vorzuschlagen, es aber nicht tatsächlich zu wechseln, bis es vom anderen Peer akzeptiert wird. Aus diesem Grund verwendet WebRTC _ausstehende_ und _aktuelle_ Beschreibungen.

Die **aktuelle Beschreibung** (die von den Eigenschaften [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) und [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben wird) repräsentiert die Beschreibung, die derzeit tatsächlich von der Verbindung verwendet wird. Dies ist die letzte Verbindung, der beide Seiten voll zugestimmt haben.

Die **ausstehende Beschreibung** (zurückgegeben von [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) und [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)) zeigt eine Beschreibung an, die derzeit nach einem Aufruf von `setLocalDescription()` bzw. `setRemoteDescription()` geprüft wird.

Beim Lesen der Beschreibung (zurückgegeben von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) und [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)) ist der zurückgegebene Wert der von `pendingLocalDescription`/`pendingRemoteDescription`, wenn es eine ausstehende Beschreibung gibt (d. h. die ausstehende Beschreibung ist nicht `null`); andernfalls wird die aktuelle Beschreibung (`currentLocalDescription`/`currentRemoteDescription`) zurückgegeben.

Beim Ändern der Beschreibung durch Aufrufen von `setLocalDescription()` oder `setRemoteDescription()` wird die angegebene Beschreibung als ausstehende Beschreibung gesetzt, und die WebRTC-Schicht beginnt zu bewerten, ob sie akzeptabel ist oder nicht. Sobald die vorgeschlagene Beschreibung vereinbart wurde, wird der Wert von `currentLocalDescription` oder `currentRemoteDescription` auf die ausstehende Beschreibung geändert, und die ausstehende Beschreibung wird wieder auf null gesetzt, was anzeigt, dass es keine ausstehende Beschreibung gibt.

> [!NOTE]
> Die `pendingLocalDescription` enthält nicht nur das zu prüfende Angebot oder die Antwort, sondern alle lokalen ICE-Kandidaten, die seit der Erstellung des Angebots oder der Antwort bereits gesammelt wurden. Ebenso umfasst `pendingRemoteDescription` alle entfernten ICE-Kandidaten, die durch Aufrufe an [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) bereitgestellt wurden.

Siehe die einzelnen Artikel zu diesen Eigenschaften und Methoden für weitere Details, und [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Informationen über von WebRTC unterstützte Codecs und deren Kompatibilität mit bestimmten Browsern. Der Codec-Leitfaden bietet auch Ratschläge, um Ihnen bei der Auswahl der besten Codecs für Ihre Bedürfnisse zu helfen.

## ICE-Kandidaten

Zusätzlich zum Austausch von Informationen über die Medien (wie oben im Angebot/Antwort und SDP besprochen), müssen Peers Informationen über die Netzwerkverbindung austauschen. Dies wird als **ICE-Kandidat** bezeichnet und beschreibt die verfügbaren Methoden, die der Peer zur Kommunikation verwenden kann (direkt oder über einen TURN-Server). Typischerweise wird jeder Peer seine besten Kandidaten zuerst vorschlagen und sich dann zu seinen schlechteren Kandidaten hocharbeiten. Idealerweise sind Kandidaten UDP (da es schneller ist und Medienstreams in der Lage sind, sich relativ leicht von Unterbrechungen zu erholen), aber der ICE-Standard erlaubt auch TCP-Kandidaten.

> [!NOTE]
> Im Allgemeinen werden ICE-Kandidaten, die TCP verwenden, nur dann genutzt, wenn UDP nicht verfügbar oder auf eine Weise eingeschränkt ist, dass es sich nicht für Medien-Streaming eignet. Nicht alle Browser unterstützen ICE über TCP.

ICE erlaubt Kandidaten, Verbindungen entweder über [TCP](/de/docs/Glossary/TCP) oder [UDP](/de/docs/Glossary/UDP) darzustellen, wobei UDP im Allgemeinen bevorzugt wird (und breiter unterstützt wird). Jedes Protokoll unterstützt ein paar Kandidatentypen, wobei die Kandidatentypen definieren, wie die Daten vom Peer zum Peer gelangen.

### UDP-Kandidatentypen

UDP-Kandidaten (Kandidaten mit ihrem [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) auf `udp` gesetzt) können einer dieser Typen sein:

- `host`
  - : Ein Host-Kandidat ist einer, dessen [`ip`](/de/docs/Web/API/RTCIceCandidate/address) Adresse die tatsächliche, direkte IP-Adresse des entfernten Peers ist.
- `prflx`
  - : Ein Peer-reflexiver Kandidat ist einer, dessen IP-Adresse von einem symmetrischen NAT zwischen den beiden Peers stammt, normalerweise als zusätzlicher Kandidat während Trickling-ICE (d. h. zusätzliche Kandidatenaustausche, die nach dem primären Signalisieren, aber vor dem Abschluss der Verbindungsüberprüfung stattfinden).
- `srflx`
  - : Ein server-reflexiver Kandidat wird von einem STUN/TURN-Server erzeugt; der Initiator der Verbindung fordert einen Kandidaten vom STUN-Server an, der die Anfrage durch das NAT des entfernten Peers weiterleitet, das einen Kandidaten erzeugt und zurückgibt, dessen IP-Adresse lokal für den entfernten Peer ist. Der STUN-Server antwortet dann auf die Anfrage des Initiators mit einem Kandidaten, dessen IP-Adresse nicht mit dem entfernten Peer verbunden ist.
- `relay`
  - : Ein Relais-Kandidat wird genauso wie ein server-reflexiver Kandidat (`"srflx"`) erzeugt, jedoch mit [TURN](/de/docs/Glossary/TURN) anstelle von [STUN](/de/docs/Glossary/STUN).

### TCP-Kandidatentypen

TCP-Kandidaten (d. h. Kandidaten mit ihrem [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) auf `tcp` gesetzt) können diese Typen sein:

- `active`
  - : Der Transport versucht, eine ausgehende Verbindung zu öffnen, nimmt jedoch keine eingehenden Verbindungsanfragen an. Dies ist der häufigste Typ und der einzige, den die meisten Benutzeragenten sammeln werden.
- `passive`
  - : Der Transport akzeptiert eingehende Verbindungsversuche, versucht jedoch nicht selbst eine Verbindung herzustellen.
- `so`
  - : Der Transport versucht gleichzeitig eine Verbindung mit seinem Peer zu öffnen.

### Auswahl eines Kandidatenpaares

Die ICE-Schicht wählt einen der beiden Peers, um als **kontrollierende Instanz** zu fungieren. Dies ist der ICE-Agent, der die endgültige Entscheidung darüber trifft, welches Kandidatenpaar für die Verbindung verwendet wird. Der andere Peer wird als **kontrollierter Agent** bezeichnet. Sie können erkennen, welcher Ihrer Verbindungsenden der ist, indem Sie den Wert von [`RTCIceCandidate.transport.role`](/de/docs/Web/API/RTCIceTransport/role) untersuchen, obwohl es im Allgemeinen keine Rolle spielt, wer wer ist.

Der kontrollierende Agent übernimmt nicht nur die Verantwortung für die endgültige Entscheidung, welches Kandidatenpaar verwendet werden soll, sondern auch für das Signalisieren dieser Auswahl an den kontrollierten Agenten durch Nutzung von STUN und ggf. einem aktualisierten Angebot. Der kontrollierte Agent wartet einfach darauf, informiert zu werden, welches Kandidatenpaar verwendet werden soll.

Es ist wichtig zu beachten, dass eine einzelne ICE-Session dazu führen kann, dass der kontrollierende Agent mehr als ein Kandidatenpaar auswählt. Jedes Mal, wenn er dies tut und diese Information mit dem kontrollierten Agenten teilt, konfigurieren die beiden Peers ihre Verbindung neu, um die neue Konfiguration zu verwenden, die durch das neue Kandidatenpaar beschrieben wird.

Sobald die ICE-Session abgeschlossen ist, ist die aktuelle Konfiguration die endgültige, es sei denn, es erfolgt ein ICE-Reset.

Am Ende jeder Generation von Kandidaten wird eine End-of-Candidates-Benachrichtigung in Form eines [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gesendet, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft ein leerer String ist. Dieser Kandidat sollte dennoch auf übliche Weise mithilfe der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) zur Verbindung hinzugefügt werden, um diese Benachrichtigung an den entfernten Peer zu übermitteln.

Wenn während des aktuellen Aushandlungsaustauschs überhaupt keine weiteren Kandidaten mehr zu erwarten sind, wird eine End-of-Candidates-Benachrichtigung gesendet, indem ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) übermittelt wird, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft `null` ist. Diese Nachricht muss _nicht_ an den entfernten Peer gesendet werden. Es handelt sich hierbei um eine Legacy-Benachrichtigung eines Zustands, der stattdessen durch das Beobachten der Änderung des [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) auf `complete` oder durch das Beobachten des [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignisses erkannt werden kann.

## Wenn etwas schiefgeht

Während der Verhandlung wird es Zeiten geben, in denen einfach nichts klappt. Beispielsweise kann bei der Neuverhandlung einer Verbindung - beispielsweise zur Anpassung an sich ändernde Hardware- oder Netzwerkkonfigurationen - ein Deadlock erreicht werden, oder es kann ein Fehler auftreten, der die Verhandlung ganz verhindert. Auch Berechtigungsprobleme oder andere Probleme könnten auftreten.

### ICE-Rollbacks

Wenn eine bereits aktive Verbindung neu verhandelt wird und eine Situation eintritt, in der die Verhandlung fehlschlägt, möchten Sie den bereits laufenden Anruf nicht wirklich beenden. Schließlich wollten Sie wahrscheinlich nur die Verbindung auf- oder abwerten oder anderweitig Anpassungen an einer laufenden Sitzung vornehmen. Die Abbruch des Anrufs wäre in dieser Situation eine übertriebene Reaktion.

Stattdessen können Sie einen **ICE-Rollback** einleiten. Ein Rollback stellt das SDP-Angebot (und die Konfigurationsverbindung) auf die Konfiguration zurück, die es hatte, als der Signalisierungszustand der Verbindung zuletzt `stable` war.

Um einen Rollback programmgesteuert einzuleiten, senden Sie eine Beschreibung, deren [`type`](/de/docs/Web/API/RTCSessionDescription/type) `rollback` ist. Alle anderen Eigenschaften im Beschreibungsobjekt werden ignoriert.

Darüber hinaus wird der ICE-Agent automatisch ein Rollback einleiten, wenn ein Peer, der zuvor ein Angebot erstellt hatte, ein Angebot vom entfernten Peer erhält. Mit anderen Worten, wenn der lokale Peer im Zustand `have-local-offer` ist, was anzeigt, dass der lokale Peer zuvor ein Angebot _gesendet_ hat, löst das Aufrufen von `setRemoteDescription()` mit einem _empfangenen_ Angebot einen Rollback aus, sodass die Verhandlung sich von der Situation verschiebt, dass der entfernte Peer der Anrufer ist, zum lokalen Peer als Anrufer.

### ICE-Neustarts

Erfahren Sie mehr über den [ICE Restart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) Prozess.

## Der gesamte Austausch in einem komplizierten Diagramm

![Ein vollständiges Architekturdiagramm, das den gesamten WebRTC-Prozess zeigt.](webrtc-complete-diagram.png)

[Originalquelle](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)

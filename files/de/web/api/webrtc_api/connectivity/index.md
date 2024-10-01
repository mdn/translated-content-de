---
title: WebRTC-Konnektivität
slug: Web/API/WebRTC_API/Connectivity
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel beschreibt, wie die verschiedenen WebRTC-bezogenen Protokolle miteinander interagieren, um eine Verbindung herzustellen und Daten und/oder Medien zwischen den Peers zu übertragen.

> [!NOTE]
> Diese Seite muss stark umgeschrieben werden, um strukturelle Integrität und inhaltliche Vollständigkeit zu erreichen. Viele Informationen hier sind gut, aber die Organisation ist ein Chaos, da dies derzeit eine Art Sammelstelle ist.

## Signalisierung

Leider kann WebRTC ohne eine Art Server in der Mitte keine Verbindungen herstellen. Wir nennen dies den **Signal-Kanal** oder **Signalisierungsdienst**. Es ist eine Art Kommunikationskanal, um Informationen vor dem Aufbau einer Verbindung auszutauschen, sei es per E-Mail, Postkarte oder einem Brieftauben. Es liegt bei Ihnen.

Die Informationen, die wir austauschen müssen, sind das Angebot und die Antwort, die nur die unten erwähnte {{Glossary("SDP", "SDP")}} enthalten.

Peer A, der Initiator der Verbindung sein wird, erstellt ein Angebot. Er sendet dieses Angebot dann an Peer B über den gewählten Signal-Kanal. Peer B erhält das Angebot vom Signal-Kanal und erstellt eine Antwort. Diese sendet er dann über den Signal-Kanal zurück an Peer A.

### Sitzungsbeschreibungen

Die Konfiguration eines Endpunkts einer WebRTC-Verbindung wird als **Sitzungsbeschreibung** bezeichnet. Die Beschreibung enthält Informationen über die Art der gesendeten Medien, ihr Format, das verwendete Übertragungsprotokoll, die IP-Adresse und den Port des Endpunkts sowie andere Informationen, die zur Beschreibung eines Medienübertragungsendpunkts erforderlich sind. Diese Informationen werden unter Verwendung des **Session Description Protocol** ({{Glossary("SDP", "SDP")}}) ausgetauscht und gespeichert; wenn Sie Details zum Format von SDP-Daten wünschen, können Sie diese in {{RFC(8866)}} finden.

Wenn ein Benutzer einen WebRTC-Anruf zu einem anderen Benutzer startet, wird eine spezielle Beschreibung erstellt, die als **Angebot** bezeichnet wird. Diese Beschreibung enthält alle Informationen über die vorgeschlagene Konfiguration des Anrufs durch den Anrufer. Der Empfänger antwortet dann mit einer **Antwort**, die eine Beschreibung seines Endes des Anrufs ist. Auf diese Weise teilen beide Geräte einander die Informationen mit, die zum Austausch von Mediendaten benötigt werden. Dieser Austausch wird mithilfe des Interactive Connectivity Establishment ({{Glossary("ICE", "ICE")}}) Protokolls abgewickelt, das es zwei Geräten ermöglicht, einen Vermittler für den Austausch von Angeboten und Antworten zu verwenden, selbst wenn die beiden Geräte durch Network Address Translation ({{Glossary("NAT", "NAT")}}) getrennt sind.

Jeder Peer hält dann zwei Beschreibungen bereit: die **lokale Beschreibung**, die sich selbst beschreibt, und die **Remote-Beschreibung**, die das andere Ende des Anrufs beschreibt.

Der Angebot-/Antwortprozess wird sowohl beim ersten Herstellen eines Anrufs als auch jedes Mal durchgeführt, wenn das Format des Anrufs oder andere Konfigurationen geändert werden müssen. Unabhängig davon, ob es sich um einen neuen Anruf oder die Neukonfiguration eines bestehenden Anrufs handelt, sind dies die grundlegenden Schritte, die durchgeführt werden müssen, um das Angebot und die Antwort auszutauschen, wobei die ICE-Ebene im Moment ausgelassen wird:

1. Der Anrufer erfasst lokale Medien über [`MediaDevices.getUserMedia`](/de/docs/Web/API/MediaDevices/getUserMedia)
2. Der Anrufer erstellt `RTCPeerConnection` und ruft [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) auf (Da `addStream` veraltet ist)
3. Der Anrufer ruft [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) auf, um ein Angebot zu erstellen.
4. Der Anrufer ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf, um dieses Angebot als _lokale Beschreibung_ festzulegen (das heißt, die Beschreibung des lokalen Endes der Verbindung).
5. Nach setLocalDescription() fragt der Anrufer STUN-Server, um die ICE-Kandidaten zu erzeugen
6. Der Anrufer verwendet den Signalisierungsserver, um das Angebot an den beabsichtigten Empfänger des Anrufs zu übertragen.
7. Der Empfänger erhält das Angebot und ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um es als _Remote-Beschreibung_ (die Beschreibung des anderen Endes der Verbindung) aufzuzeichnen.
8. Der Empfänger führt alle erforderlichen Einrichtungsschritte für sein Ende des Anrufs aus: Erfasst seine lokalen Medien und bindet jede Medienspur in die Peer-Verbindung über [`RTCPeerConnection.addTrack()`](/de/docs/Web/API/RTCPeerConnection/addTrack) ein
9. Der Empfänger erstellt dann eine Antwort, indem er [`RTCPeerConnection.createAnswer()`](/de/docs/Web/API/RTCPeerConnection/createAnswer) aufruft.
10. Der Empfänger ruft [`RTCPeerConnection.setLocalDescription()`](/de/docs/Web/API/RTCPeerConnection/setLocalDescription) auf und übergibt die erstellte Antwort, um die Antwort als seine lokale Beschreibung festzulegen. Der Empfänger kennt nun die Konfiguration beider Enden der Verbindung.
11. Der Empfänger verwendet den Signalisierungsserver, um die Antwort an den Anrufer zu senden.
12. Der Anrufer erhält die Antwort.
13. Der Anrufer ruft [`RTCPeerConnection.setRemoteDescription()`](/de/docs/Web/API/RTCPeerConnection/setRemoteDescription) auf, um die Antwort als die Remote-Beschreibung für sein Ende des Anrufs festzulegen. Er kennt nun die Konfiguration beider Peers. Die Medien beginnen wie konfiguriert zu fließen.

### Anstehende und aktuelle Beschreibungen

Wenn wir einen Schritt tiefer in den Prozess eintauchen, stellen wir fest, dass `localDescription` und `remoteDescription`, die Eigenschaften, die diese beiden Beschreibungen zurückgeben, nicht so einfach sind, wie sie aussehen. Da während einer Neuverhandlung ein Angebot abgelehnt werden kann, weil es ein inkompatibles Format vorschlägt, muss jeder Endpunkt die Möglichkeit haben, ein neues Format vorzuschlagen, es aber nicht tatsächlich zu verwenden, bis es vom anderen Peer akzeptiert wird. Aus diesem Grund verwendet WebRTC _anstehende_ und _aktuelle_ Beschreibungen.

Die **aktuelle Beschreibung** (die von den Eigenschaften [`RTCPeerConnection.currentLocalDescription`](/de/docs/Web/API/RTCPeerConnection/currentLocalDescription) und [`RTCPeerConnection.currentRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/currentRemoteDescription) zurückgegeben wird) repräsentiert die Beschreibung, die derzeit tatsächlich von der Verbindung verwendet wird. Dies ist die letzte Verbindung, die von beiden Seiten vollständig genutzt werden soll.

Die **anstehende Beschreibung** (zurückgegeben von [`RTCPeerConnection.pendingLocalDescription`](/de/docs/Web/API/RTCPeerConnection/pendingLocalDescription) und [`RTCPeerConnection.pendingRemoteDescription`](/de/docs/Web/API/RTCPeerConnection/pendingRemoteDescription)) zeigt eine Beschreibung an, die derzeit nach einem Aufruf von `setLocalDescription()` bzw. `setRemoteDescription()` in Erwägung gezogen wird.

Beim Lesen der Beschreibung (zurückgegeben von [`RTCPeerConnection.localDescription`](/de/docs/Web/API/RTCPeerConnection/localDescription) und [`RTCPeerConnection.remoteDescription`](/de/docs/Web/API/RTCPeerConnection/remoteDescription)) ist der zurückgegebene Wert der Wert von `pendingLocalDescription`/`pendingRemoteDescription`, wenn es eine anstehende Beschreibung gibt (das heißt, die anstehende Beschreibung nicht `null` ist); andernfalls wird die aktuelle Beschreibung (`currentLocalDescription`/`currentRemoteDescription`) zurückgegeben.

Beim Ändern der Beschreibung durch einen Aufruf von `setLocalDescription()` oder `setRemoteDescription()` wird die angegebene Beschreibung als anstehende Beschreibung festgelegt, und die WebRTC-Schicht beginnt die Bewertung, ob sie akzeptabel ist oder nicht. Sobald die vorgeschlagene Beschreibung akzeptiert wurde, wird der Wert von `currentLocalDescription` oder `currentRemoteDescription` auf die anstehende Beschreibung geändert, und die anstehende Beschreibung wird wieder auf null gesetzt, was anzeigt, dass es keine anstehende Beschreibung mehr gibt.

> [!NOTE]
> Die `pendingLocalDescription` enthält nicht nur das in Betracht gezogene Angebot oder die Antwort, sondern auch alle lokalen ICE-Kandidaten, die seit der Erstellung des Angebots oder der Antwort bereits gesammelt wurden. Ebenso enthält `pendingRemoteDescription` alle Remote-ICE-Kandidaten, die durch Aufrufe von [`RTCPeerConnection.addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate) bereitgestellt wurden.

Sehen Sie sich die einzelnen Artikel zu diesen Eigenschaften und Methoden für weitere Details an und [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Informationen über Codecs, die von WebRTC unterstützt werden und welche mit welchen Browsern kompatibel sind. Der Codecs-Leitfaden bietet auch Leitlinien zur Auswahl der besten Codecs für Ihre Bedürfnisse.

## ICE-Kandidaten

Neben dem Austausch von Informationen über die Medien (oben im Abschnitt Angebot/Antwort und SDP besprochen) müssen Peers Informationen über die Netzwerkverbindung austauschen. Dies wird als **ICE-Kandidat** bezeichnet und beschreibt die verfügbaren Methoden, mit denen der Peer kommunizieren kann (direkt oder über einen TURN-Server). Typischerweise wird jeder Peer zuerst seine besten Kandidaten vorschlagen und sich dann zu seinen schlechteren Kandidaten vorarbeiten. Idealerweise sind die Kandidaten UDP (da es schneller ist und Medienströme sich relativ leicht von Unterbrechungen erholen können), aber der ICE-Standard erlaubt auch TCP-Kandidaten.

> [!NOTE]
> Im Allgemeinen werden ICE-Kandidaten, die TCP verwenden, nur verwendet, wenn UDP nicht verfügbar ist oder in einer Weise eingeschränkt ist, die es für das Streaming von Medien ungeeignet macht. Nicht alle Browser unterstützen ICE über TCP.

ICE erlaubt Kandidaten, Verbindungen entweder über {{Glossary("TCP", "TCP")}} oder {{Glossary("UDP", "UDP")}} darzustellen, wobei UDP im Allgemeinen bevorzugt wird (und breiter unterstützt wird). Jedes Protokoll unterstützt einige Kandidatentypen, wobei die Kandidatentypen definieren, wie die Daten von Peer zu Peer gelangen.

### Kandidatentypen für UDP

UDP-Kandidaten (Kandidaten, deren [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) auf `udp` gesetzt ist) können einer dieser Typen sein:

- `host`
  - : Ein Host-Kandidat ist einer, dessen [`ip`](/de/docs/Web/API/RTCIceCandidate/address) Adresse die tatsächliche, direkte IP-Adresse des Remote-Peers ist.
- `prflx`
  - : Ein Peer-reflexiver Kandidat ist einer, dessen IP-Adresse von einem symmetrischen NAT zwischen den beiden Peers stammt, in der Regel als zusätzlicher Kandidat während des Trickling-ICE (das heißt, zusätzliche Kandidatenaustausche, die nach dem primären Signalisieren, aber vor dem Abschluss der Verbindungsüberprüfungsphase stattfinden).
- `srflx`
  - : Ein Server-reflexiver Kandidat wird von einem STUN/TURN-Server generiert; der Initiator der Verbindung fordert einen Kandidaten vom STUN-Server an, der die Anfrage durch das NAT des Remote-Peers weiterleitet, wodurch ein Kandidat erstellt und zurückgegeben wird, dessen IP-Adresse lokal zum Remote-Peer ist. Der STUN-Server antwortet dann auf die Anfrage des Initiators mit einem Kandidaten, dessen IP-Adresse nicht mit dem Remote-Peer zusammenhängt.
- `relay`
  - : Ein Relay-Kandidat wird genauso wie ein Server-reflexiver Kandidat (`"srflx"`) generiert, aber mit {{Glossary("TURN", "TURN")}} statt {{Glossary("STUN", "STUN")}}.

### Kandidatentypen für TCP

TCP-Kandidaten (das heißt, Kandidaten, deren [`protocol`](/de/docs/Web/API/RTCIceCandidate/protocol) `tcp` ist) können von diesen Typen sein:

- `active`
  - : Der Transport wird versuchen, eine ausgehende Verbindung zu öffnen, aber keine eingehenden Verbindungsanfragen empfangen. Dies ist der häufigste Typ und der einzige, den die meisten Benutzeragenten sammeln werden.
- `passive`
  - : Der Transport empfängt eingehende Verbindungsversuche, wird aber selbst keine Verbindung versuchen.
- `so`
  - : Der Transport wird versuchen, gleichzeitig eine Verbindung mit seinem Peer herzustellen.

### Auswahl eines Kandidatenpaars

Die ICE-Schicht wählt einen der beiden Peers als **steuernden Agenten** aus. Dies ist der ICE-Agent, der die endgültige Entscheidung darüber trifft, welches Kandidatenpaar für die Verbindung verwendet wird. Der andere Peer wird als **kontrollierter Agent** bezeichnet. Sie können erkennen, welcher Endpunkt Ihrer Verbindung welchem Agenten entspricht, indem Sie den Wert von [`RTCIceCandidate.transport.role`](/de/docs/Web/API/RTCIceTransport/role) überprüfen, obwohl es im Allgemeinen keine Rolle spielt, welcher Endpunkt welcher ist.

Der steuernde Agent übernimmt nicht nur die Verantwortung für die endgültige Entscheidung, welches Kandidatenpaar verwendet werden soll, sondern auch dafür, diese Auswahl dem kontrollierten Agenten mithilfe von STUN und einem aktualisierten Angebot mitzuteilen, falls erforderlich. Der kontrollierte Agent wartet einfach darauf, welches Kandidatenpaar verwendet werden soll.

Es ist wichtig im Hinterkopf zu behalten, dass eine einzelne ICE-Sitzung dazu führen kann, dass der steuernde Agent mehr als ein Kandidatenpaar auswählt. Jedes Mal, wenn er dies tut und diese Information dem kontrollierten Agenten mitteilt, rekonfigurieren die beiden Peers ihre Verbindung, um die neue Konfiguration zu verwenden, die durch das neue Kandidatenpaar beschrieben wird.

Sobald die ICE-Sitzung abgeschlossen ist, ist die gerade wirksame Konfiguration die endgültige, es sei denn, es tritt ein ICE-Reset auf.

Am Ende jeder Generation von Kandidaten wird eine Ende-der-Kandidaten-Benachrichtigung in Form eines [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) gesendet, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft eine leere Zeichenkette ist. Dieser Kandidat sollte dennoch der Verbindung hinzugefügt werden, wie üblich mit der Methode [`addIceCandidate()`](/de/docs/Web/API/RTCPeerConnection/addIceCandidate), um diese Benachrichtigung dem Remote-Peer zu übermitteln.

Wenn während des aktuellen Aushandlungsaustauschs überhaupt keine weiteren Kandidaten mehr erwartet werden, wird eine Ende-der-Kandidaten-Benachrichtigung gesendet, indem ein [`RTCIceCandidate`](/de/docs/Web/API/RTCIceCandidate) geliefert wird, dessen [`candidate`](/de/docs/Web/API/RTCIceCandidate/candidate) Eigenschaft `null` ist. Diese Nachricht muss nicht an den Remote-Peer gesendet werden. Es handelt sich um eine veraltete Benachrichtigung eines Zustands, der stattdessen erkannt werden kann, indem das [`iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) überwacht wird, das sich in `complete` ändert, indem auf das [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) Ereignis geachtet wird.

## Wenn etwas schiefgeht

Während der Aushandlung gibt es Zeiten, in denen die Dinge einfach nicht funktionieren. Beispielsweise kann es bei der Neuverhandlung einer Verbindung - beispielsweise um sich an sich ändernde Hardware- oder Netzwerkkonfigurationen anzupassen - zu einem Stillstand bei der Aushandlung kommen oder es kann ein Fehler auftreten, der eine Aushandlung vollständig verhindert. Es kann auch Berechtigungsprobleme oder andere Probleme geben.

### ICE Rollbacks

Wenn Sie eine bereits aktive Verbindung neu verhandeln und dabei ein Problem auftritt, möchten Sie den bereits laufenden Anruf nicht wirklich beenden. Schließlich haben Sie wahrscheinlich nur versucht, die Verbindung zu verbessern oder zu verschlechtern oder anderweitig Anpassungen an einer laufenden Sitzung vorzunehmen. Das Abbrechen des Anrufs wäre in dieser Situation eine übermäßige Reaktion.

Stattdessen können Sie einen **ICE Rollback** initiieren. Ein Rollback stellt das SDP-Angebot (und damit die Verbindungskonfiguration) auf die Konfiguration wieder her, die es hatte, als der [`signalingState`](/de/docs/Web/API/RTCPeerConnection/signalingState) der Verbindung zuletzt `stable` war.

Um programmiert einen Rollback zu initiieren, senden Sie eine Beschreibung, deren [`type`](/de/docs/Web/API/RTCSessionDescription/type) `rollback` ist. Alle anderen Eigenschaften im Beschreibungsobjekt werden ignoriert.

Der ICE-Agent wird außerdem automatisch einen Rollback initiieren, wenn ein Peer, der zuvor ein Angebot erstellt hat, ein Angebot vom Remote-Peer erhält. Mit anderen Worten, wenn der lokale Peer sich im Zustand `have-local-offer` befindet, was anzeigt, dass der lokale Peer zuvor ein Angebot gesendet hat, löst der Aufruf von `setRemoteDescription()` mit einem empfangenen Angebot einen Rollback aus, sodass die Aushandlung vom Remote-Peer, der Anrufer ist, zum lokalen Peer, der Anrufer ist, wechselt.

### ICE Neustarts

Erfahren Sie mehr über den [ICE Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart)-Prozess.

## Der gesamte Austausch in einem komplizierten Diagramm

![Ein vollständiges architektonisches Diagramm, das den gesamten WebRTC-Prozess zeigt.](webrtc-complete-diagram.png)

[Ursprüngliche Quelle](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)

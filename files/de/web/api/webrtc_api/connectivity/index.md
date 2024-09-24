---
title: WebRTC-Konnektivität
slug: Web/API/WebRTC_API/Connectivity
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

In diesem Artikel wird beschrieben, wie die verschiedenen WebRTC-bezogenen Protokolle miteinander interagieren, um eine Verbindung herzustellen und Daten und/oder Medien zwischen Peers auszutauschen.

> [!NOTE]
> Diese Seite benötigt eine umfangreiche Überarbeitung für strukturelle Integrität und Vollständigkeit des Inhalts. Viele Informationen hier sind gut, aber die Organisation ist ein Durcheinander, da dies momentan eine Art Ablageplatz ist.

## Signalisierung

Leider kann WebRTC keine Verbindungen ohne eine Art von Server in der Mitte erstellen. Wir nennen dies den **Signal-Kanal** oder den **Signalisierungsdienst**. Es ist jeder Art von Kommunikationskanal, um Informationen auszutauschen, bevor eine Verbindung hergestellt wird, sei es per E-Mail, Postkarte oder Rauchzeichen. Es liegt an Ihnen.

Die Informationen, die wir austauschen müssen, sind das Angebot und die Antwort, die einfach das unten erwähnte {{Glossary("SDP")}} enthalten.

Peer A, der Initiator der Verbindung, wird ein Angebot erstellen. Dieses Angebot wird dann über den gewählten Signalkanal an Peer B gesendet. Peer B wird das Angebot über den Signalkanal erhalten und eine Antwort erstellen. Diese wird dann über den Signalkanal an Peer A zurückgesendet.

### Sitzungsbeschreibungen

Die Konfiguration eines Endpunkts einer WebRTC-Verbindung wird als **Sitzungsbeschreibung** bezeichnet. Die Beschreibung enthält Informationen über die Art der gesendeten Medien, deren Format, das verwendete Übertragungsprotokoll, die IP-Adresse und den Port des Endpunkts sowie andere Informationen, die zur Beschreibung eines Medientransfer-Endpunkts benötigt werden. Diese Informationen werden unter Verwendung des **Session Description Protocol** ({{Glossary("SDP")}}) ausgetauscht und gespeichert; wenn Sie Details zum Format der SDP-Daten benötigen, finden Sie diese in {{RFC(8866)}}.

Wenn ein Benutzer einen WebRTC-Anruf mit einem anderen Benutzer startet, wird eine spezielle Beschreibung erstellt, die als **Angebot** bezeichnet wird. Diese Beschreibung enthält alle Informationen über die vorgeschlagene Konfiguration des Anrufers für den Anruf. Der Empfänger antwortet dann mit einer **Antwort**, die eine Beschreibung ihres Endes des Anrufs ist. Auf diese Weise teilen beide Geräte einander die Informationen mit, die zum Austausch von Mediendaten benötigt werden. Dieser Austausch erfolgt über Interactive Connectivity Establishment ({{Glossary("ICE")}}), ein Protokoll, das es zwei Geräten ermöglicht, einen Vermittler zu nutzen, um Angebote und Antworten auszutauschen, selbst wenn die beiden Geräte durch Network Address Translation ({{Glossary("NAT")}}) getrennt sind.

Jeder Peer hält dann zwei Beschreibungen bereit: die **lokale Beschreibung**, die ihn selbst beschreibt, und die **remote Beschreibung**, die das andere Ende des Anrufs beschreibt.

Der Prozess des Angebots und der Antwort wird sowohl beim ersten Anruf als auch jedes Mal durchgeführt, wenn sich das Format oder die Konfiguration des Anrufs ändern muss. Unabhängig davon, ob es sich um einen neuen Anruf oder um die Neukonfiguration eines bestehenden handelt, sind dies die grundlegenden Schritte, die durchgeführt werden müssen, um das Angebot und die Antwort auszutauschen, wobei die ICE-Schicht vorerst ausgelassen wird:

1. Der Anrufer erfasst lokale Medien über {{domxref("MediaDevices.getUserMedia")}}
2. Der Anrufer erstellt `RTCPeerConnection` und ruft {{domxref("RTCPeerConnection.addTrack()")}} auf (da `addStream` veraltet ist)
3. Der Anrufer ruft {{domxref("RTCPeerConnection.createOffer()")}} auf, um ein Angebot zu erstellen.
4. Der Anrufer ruft {{domxref("RTCPeerConnection.setLocalDescription()")}} auf, um dieses Angebot als seine _lokale Beschreibung_ festzulegen (also die Beschreibung des lokalen Endes der Verbindung).
5. Nach setLocalDescription() fragt der Anrufer STUN-Server, um die ICE-Kandidaten zu generieren.
6. Der Anrufer verwendet den Signalisierungsserver, um das Angebot an den vorgesehenen Empfänger des Anrufs zu senden.
7. Der Empfänger erhält das Angebot und ruft {{domxref("RTCPeerConnection.setRemoteDescription()")}} auf, um es als _remote Beschreibung_ (die Beschreibung des anderen Endes der Verbindung) zu protokollieren.
8. Der Empfänger führt alle notwendigen Schritte für sein Ende des Anrufs aus: Erfassen seiner lokalen Medien und das Anhängen jedes Medienspurs in die Peer-Verbindung über {{domxref("RTCPeerConnection.addTrack()")}}
9. Der Empfänger erstellt dann eine Antwort, indem er {{domxref("RTCPeerConnection.createAnswer()")}} aufruft.
10. Der Empfänger ruft {{domxref("RTCPeerConnection.setLocalDescription()")}} auf, wobei er die erstellte Antwort übergibt, um die Antwort als seine lokale Beschreibung festzulegen. Der Empfänger kennt nun die Konfiguration beider Enden der Verbindung.
11. Der Empfänger verwendet den Signalisierungsserver, um die Antwort an den Anrufer zu senden.
12. Der Anrufer erhält die Antwort.
13. Der Anrufer ruft {{domxref("RTCPeerConnection.setRemoteDescription()")}} auf, um die Antwort als remote Beschreibung für sein Ende des Anrufs festzulegen. Jetzt kennt er die Konfiguration beider Peers. Medien beginnen wie konfiguriert zu fließen.

### Ausstehende und aktuelle Beschreibungen

Ein Schritt weiter in den Prozess, finden wir, dass `localDescription` und `remoteDescription`, die Eigenschaften, die diese beiden Beschreibungen zurückgeben, nicht so einfach sind, wie sie aussehen. Während der Neuverhandlung kann ein Angebot möglicherweise abgelehnt werden, da es ein inkompatibles Format vorschlägt. Daher ist es notwendig, dass jeder Endpunkt in der Lage ist, ein neues Format vorzuschlagen, jedoch erst dann tatsächlich darauf umzuschalten, wenn es vom anderen Peer akzeptiert wird. Aus diesem Grund verwendet WebRTC _ausstehende_ und _aktuelle_ Beschreibungen.

Die **aktuelle Beschreibung** (die durch die Eigenschaften {{domxref("RTCPeerConnection.currentLocalDescription")}} und {{domxref("RTCPeerConnection.currentRemoteDescription")}} zurückgegeben wird) repräsentiert die Beschreibung, die derzeit tatsächlich von der Verbindung verwendet wird. Dies ist die aktuellste Verbindung, deren Verwendung beide Seiten vollständig zugestimmt haben.

Die **ausstehende Beschreibung** (zurückgegeben durch {{domxref("RTCPeerConnection.pendingLocalDescription")}} und {{domxref("RTCPeerConnection.pendingRemoteDescription")}}) zeigt eine Beschreibung an, die derzeit in Betracht gezogen wird, nachdem ein Aufruf von `setLocalDescription()` oder `setRemoteDescription()` erfolgt ist.

Beim Lesen der Beschreibung (zurückgegeben durch {{domxref("RTCPeerConnection.localDescription")}} und {{domxref("RTCPeerConnection.remoteDescription")}}) ist der zurückgegebene Wert der von `pendingLocalDescription`/`pendingRemoteDescription`, wenn es eine ausstehende Beschreibung gibt (das heißt, die ausstehende Beschreibung ist nicht `null`); ansonsten wird die aktuelle Beschreibung (`currentLocalDescription`/`currentRemoteDescription`) zurückgegeben.

Beim Ändern der Beschreibung durch Aufruf von `setLocalDescription()` oder `setRemoteDescription()` wird die angegebene Beschreibung als ausstehende Beschreibung festgelegt, und die WebRTC-Schicht beginnt zu evaluieren, ob sie akzeptabel ist. Sobald die vorgeschlagene Beschreibung vereinbart wurde, ändern sich die Werte von `currentLocalDescription` oder `currentRemoteDescription` zur ausstehenden Beschreibung und die ausstehende Beschreibung wird wieder auf null gesetzt, was anzeigt, dass es keine ausstehende Beschreibung mehr gibt.

> [!NOTE]
> Die `pendingLocalDescription` enthält nicht nur das zu betrachtende Angebot oder die Antwort, sondern alle lokalen ICE-Kandidaten, die seit der Erstellung des Angebots oder der Antwort gesammelt wurden. Ähnlich umfasst `pendingRemoteDescription` alle ICE-Kandidaten des Remote-Peers, die durch Aufrufe von {{domxref("RTCPeerConnection.addIceCandidate()")}} bereitgestellt wurden.

Sehen Sie sich die einzelnen Artikel zu diesen Eigenschaften und Methoden für genauere Details an, und [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Formats/WebRTC_codecs) für Informationen über von WebRTC unterstützte Codecs und welche mit welchen Browsern kompatibel sind. Der Codecs-Leitfaden bietet auch Hinweise zur Auswahl der besten Codecs für Ihre Bedürfnisse.

## ICE-Kandidaten

Neben dem Austausch von Informationen über die Medien (oben beim Angebot/Antwort und SDP besprochen), müssen Peers Informationen über die Netzwerkverbindung austauschen. Dies wird als **ICE-Kandidat** bezeichnet und beschreibt die verfügbaren Methoden, die der Peer nutzen kann, um zu kommunizieren (direkt oder über einen TURN-Server). Typischerweise schlägt jeder Peer seine besten Kandidaten zuerst vor und arbeitet sich weiter zu seinen schlechteren Kandidaten vor. Idealerweise sind Kandidaten UDP (da es schneller ist und Medienströme relativ leicht von Unterbrechungen erholen können), aber der ICE-Standard erlaubt auch TCP-Kandidaten.

> [!NOTE]
> Generell werden ICE-Kandidaten, die TCP verwenden, nur dann genutzt, wenn UDP nicht verfügbar ist oder in einer Weise eingeschränkt ist, die es für das Medien-Streaming ungeeignet macht. Nicht alle Browser unterstützen ICE über TCP.

ICE ermöglicht es Kandidaten, Verbindungen über entweder {{Glossary("TCP")}} oder {{Glossary("UDP")}} darzustellen, wobei UDP im Allgemeinen bevorzugt wird (und breiter unterstützt wird). Jedes Protokoll unterstützt einige Arten von Kandidaten, wobei die Kandidatentypen definieren, wie die Daten von Peer zu Peer gelangen.

### UDP-Kandidatentypen

UDP-Kandidaten (Kandidaten mit ihrem {{domxref("RTCIceCandidate.protocol", "protocol")}} auf `udp` gesetzt) können von diesen Typen sein:

- `host`
  - : Ein Host-Kandidat ist einer, bei dem seine {{domxref("RTCIceCandidate/address", "ip")}} Adresse die tatsächliche, direkte IP-Adresse des Remote-Peers ist.
- `prflx`
  - : Ein Peer-reflexiver Kandidat ist einer, dessen IP-Adresse von einem symmetrischen NAT zwischen den beiden Peers stammt, normalerweise als zusätzlicher Kandidat während Trickle ICE (d.h. zusätzliche Kandidatenaustausche, die nach dem primären Signalisieren, aber vor Abschluss der Verifikationsphase der Verbindung auftreten).
- `srflx`
  - : Ein serverreflexiver Kandidat wird von einem STUN/TURN-Server generiert; der Initiator der Verbindung fordert einen Kandidaten vom STUN-Server an, der die Anfrage an das NAT des Remote-Peers weiterleitet, was einen Kandidaten erzeugt und zurücksendet, dessen IP-Adresse lokal für den Remote-Peer ist. Der STUN-Server antwortet dann auf die Anfrage des Initiators mit einem Kandidaten, dessen IP-Adresse nicht mit dem Remote-Peer in Zusammenhang steht.
- `relay`
  - : Ein Relay-Kandidat wird genau wie ein serverreflexiver Kandidat (`"srflx"`) generiert, jedoch mit {{Glossary("TURN")}} anstelle von {{Glossary("STUN")}}.

### TCP-Kandidatentypen

TCP-Kandidaten (d.h. Kandidaten, deren {{domxref("RTCIceCandidate.protocol", "protocol")}} auf `tcp` gesetzt ist) können von diesen Typen sein:

- `active`
  - : Der Transport wird versuchen, eine ausgehende Verbindung zu öffnen, aber keine eingehenden Verbindungsanfragen empfangen. Dies ist der häufigste Typ und der einzige, den die meisten Benutzeragenten sammeln werden.
- `passive`
  - : Der Transport wird eingehende Verbindungsversuche empfangen, aber selbst keine Verbindung versuchen.
- `so`
  - : Der Transport wird versuchen, gleichzeitig eine Verbindung mit seinem Peer zu öffnen.

### Auswahl eines Kandidatenpaares

Die ICE-Schicht wählt einen der beiden Peers aus, um als **kontrollierender Agent** zu dienen. Dies ist der ICE-Agent, der die endgültige Entscheidung darüber trifft, welches Kandidatenpaar für die Verbindung verwendet wird. Der andere Peer wird als **kontrollierter Agent** bezeichnet. Sie können erkennen, welcher Ihr Ende der Verbindung ist, indem Sie den Wert von {{domxref("RTCIceTransport.role", "RTCIceCandidate.transport.role")}} überprüfen, obwohl es im Allgemeinen keine Rolle spielt, welcher welcher ist.

Der kontrollierende Agent übernimmt nicht nur die Verantwortung für die endgültige Entscheidung, welches Kandidatenpaar verwendet werden soll, sondern auch für das Signalisieren dieser Auswahl an den kontrollierten Agenten durch Verwendung von STUN und gegebenenfalls durch ein aktualisiertes Angebot. Der kontrollierte Agent wartet einfach darauf, informiert zu werden, welches Kandidatenpaar er verwenden soll.

Es ist wichtig zu beachten, dass eine einzelne ICE-Sitzung dazu führen kann, dass der kontrollierende Agent mehr als ein Kandidatenpaar auswählt. Jedes Mal, wenn er dies tut und diese Informationen mit dem kontrollierten Agenten teilt, rekonfigurieren die beiden Peers ihre Verbindung, um die neue Konfiguration zu verwenden, die durch das neue Kandidatenpaar beschrieben wird.

Nach Abschluss der ICE-Sitzung ist die aktuell wirksame Konfiguration die endgültige, es sei denn, es tritt ein ICE-Reset auf.

Am Ende jeder Generation von Kandidaten wird eine End-of-Candidates-Benachrichtigung in Form eines {{domxref("RTCIceCandidate")}} gesendet, dessen {{domxref("RTCIceCandidate.candidate", "candidate")}} Eigenschaft eine leere Zeichenkette ist. Dieser Kandidat sollte weiterhin wie gewohnt mit der Methode {{domxref("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}} zur Verbindung hinzugefügt werden, um diese Benachrichtigung an den Remote-Peer zu übermitteln.

Wenn während des aktuellen Verhandlungsapparatgesprächs keine weiteren Kandidaten mehr erwartet werden, wird eine End-of-Candidates-Benachrichtigung gesendet, indem ein {{domxref("RTCIceCandidate")}} übermittelt wird, dessen {{domxref("RTCIceCandidate.candidate", "candidate")}} Eigenschaft `null` ist. Diese Nachricht muss _nicht_ an den Remote-Peer gesendet werden. Es handelt sich um eine veraltete Benachrichtigung über einen Zustand, der stattdessen durch Beobachten erkannt werden kann, wenn sich der {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} in `complete` ändert, indem das {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}-Ereignis beobachtet wird.

## Wenn etwas schiefgeht

Während der Verhandlung wird es Zeiten geben, in denen einfach nichts funktioniert. Wenn beispielsweise eine Verbindung neu verhandelt wird – zum Beispiel zur Anpassung an sich ändernde Hardware- oder Netzwerkkonfigurationen – ist es möglich, dass die Verhandlung in einem toten Ende endet oder dass irgendeine Art von Fehler auftritt, der eine Verhandlung völlig verhindert. Es kann auch Berechtigungsprobleme oder andere Schwierigkeiten geben.

### ICE-Rollbacks

Wenn eine bereits aktive Verbindung neu verhandelt wird und eine Situation auftritt, in der die Verhandlung fehlschlägt, möchten Sie den bereits laufenden Anruf wirklich nicht abbrechen. Schließlich wollten Sie höchstwahrscheinlich gerade die Verbindung aktualisieren oder herabstufen oder anderweitig Anpassungen an einer laufenden Sitzung vornehmen. Den Anruf abzubrechen, wäre in dieser Situation eine übertriebene Reaktion.

Stattdessen können Sie einen **ICE-Rollback** initiieren. Ein Rollback stellt das SDP-Angebot (und damit die Konfiguration der Verbindung) auf die Konfiguration zurück, die es beim letzten Mal hatte, als der {{domxref("RTCPeerConnection.signalingState", "signalingState")}} der Verbindung `stable` war.

Um programmgesteuert ein Rollback einzuleiten, senden Sie eine Beschreibung, deren {{domxref("RTCSessionDescription.type", "type")}} `rollback` ist. Alle anderen Eigenschaften im Beschreibungsobjekt werden ignoriert.

Darüber hinaus wird der ICE-Agent automatisch ein Rollback einleiten, wenn ein Peer, der zuvor ein Angebot erstellt hat, ein Angebot von dem entfernten Peer erhält. Mit anderen Worten, wenn sich der lokale Peer im Zustand `have-local-offer` befindet, was anzeigt, dass der lokale Peer zuvor ein Angebot _gesendet_ hat, löst das Aufrufen von `setRemoteDescription()` mit einem _erhaltenen_ Angebot ein Rollback aus, sodass die Verhandlung vom entfernten Peer als Anrufer zum lokalen Peer als Anrufer wechselt.

### ICE-Neustarts

Erfahren Sie mehr über den [ICE Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart).

## Der gesamte Austausch in einem komplizierten Diagramm

![Ein vollständiges architektonisches Diagramm, das den gesamten WebRTC-Prozess zeigt.](webrtc-complete-diagram.png)

[Ursprüngliche Quelle](https://hacks.mozilla.org/2013/07/webrtc-and-the-ocean-of-acronyms/)

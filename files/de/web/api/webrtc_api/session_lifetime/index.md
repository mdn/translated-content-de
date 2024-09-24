---
title: Lebensdauer einer WebRTC-Sitzung
slug: Web/API/WebRTC_API/Session_lifetime
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC ermöglicht den Aufbau von Peer-to-Peer-Kommunikation für beliebige Daten, Audio oder Video – oder jede Kombination davon – in eine Browseranwendung. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, von der Herstellung der Verbindung bis hin zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.

Dieser Artikel geht nicht ins Detail über die eigentlichen APIs, die bei der Einrichtung und Verwaltung einer WebRTC-Verbindung beteiligt sind; er gibt einen allgemeinen Überblick über den Prozess mit einigen Informationen dazu, warum jeder Schritt erforderlich ist. Siehe [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für ein tatsächliches Beispiel mit einer Schritt-für-Schritt-Erklärung, was der Code tut.

> [!NOTE]
> Diese Seite befindet sich derzeit im Aufbau, und einige der Inhalte werden auf andere Seiten verschoben, während das WebRTC-Leitfadenmaterial erstellt wird. Wir bitten um Ihr Verständnis!

## Verbindung herstellen

Das Internet ist groß. Wirklich groß. Es ist so groß, dass schlaue Leute bereits vor Jahren erkannten, wie groß es war, wie schnell es wuchs, und die [Einschränkungen](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) des 32-Bit-IP-Adressierungssystems, und sie erkannten, dass etwas getan werden musste, bevor uns die Adressen ausgingen. Also begannen sie, ein neues 64-Bit-Adressierungssystem zu entwerfen. Aber sie erkannten, dass der Übergang länger dauern würde, als die 32-Bit-Adressen reichen würden, sodass andere schlaue Leute einen Weg fanden, um mehreren Computern die gemeinsame Nutzung derselben 32-Bit-IP-Adresse zu ermöglichen. Network Address Translation ({{Glossary("NAT")}}) ist ein Standard, der dieses Adress-Sharing unterstützt, indem er die Weiterleitung von Daten zu und von Geräten in einem LAN verwaltet, die alle eine einzige WAN (weltweite) IP-Adresse teilen.

Das Problem für die Nutzer ist, dass nicht mehr unbedingt jeder einzelne Computer im Internet eine einzigartige IP-Adresse hat, und, in der Tat, sich die IP-Adresse jedes Geräts ändern kann, nicht nur, wenn sie von einem Netzwerk zu einem anderen wechseln, sondern auch, wenn die Adresse ihres Netzwerks durch {{Glossary("NAT")}} und/oder [DHCP](https://en.wikipedia.org/wiki/DHCP) geändert wird. Für Entwickler, die versuchen, Peer-to-Peer-Netzwerke zu realisieren, stellt dies ein Dilemma dar: ohne einen eindeutigen Bezeichner für jedes Benutzergerät ist es nicht möglich, sofort und automatisch zu wissen, wie man eine Verbindung zu einem bestimmten Gerät im Internet aufbaut. Auch wenn Sie wissen, mit wem Sie sprechen möchten, wissen Sie möglicherweise nicht, wie Sie ihn erreichen oder sogar, was seine Adresse ist.

Das ist so, als würden Sie versuchen, ein Paket an Ihre Freundin Michelle zu schicken, indem Sie es mit "Michelle" beschriften und in einen Briefkasten werfen, ohne ihre Adresse zu kennen. Sie müssen ihre Adresse nachschlagen und sie auf das Paket schreiben, sonst fragt sie sich, warum Sie schon wieder ihren Geburtstag vergessen haben.

Hier kommt die Signalisierung ins Spiel.

### Signalisierung

Signalisierung ist der Prozess des Sendens von Steuerinformationen zwischen zwei Geräten, um die Kommunikationsprotokolle, Kanäle, Mediacodecs und Formate sowie die Methode der Datenübertragung festzulegen, einschließlich aller erforderlichen Routing-Informationen. Das Wichtigste, das Sie über den Signalisierungsprozess für WebRTC wissen müssen: **es ist nicht in der Spezifikation definiert**.

Sie fragen sich vielleicht, warum etwas so Grundsätzliches für den Prozess des Aufbaus einer WebRTC-Verbindung in der Spezifikation weggelassen wurde? Die Antwort ist einfach: Da die beiden Geräte keine Möglichkeit haben, sich direkt miteinander zu verbinden, und die Spezifikation nicht jeden möglichen Anwendungsfall für WebRTC vorhersagen kann, ist es sinnvoller, dem Entwickler die Wahl einer geeigneten Netzwerktechnologie und eines Messaging-Protokolls zu überlassen.

Insbesondere wenn ein Entwickler bereits über eine Methode verfügt, zwei Geräte zu verbinden, macht es keinen Sinn, dass er eine weitere verwenden muss, die von der Spezifikation definiert ist, nur für WebRTC. Da WebRTC nicht isoliert existiert, gibt es wahrscheinlich andere Verbindungen, daher ist es sinnvoll, zusätzliche Verbindungskanäle für die Signalisierung zu vermeiden, wenn ein bestehender verwendet werden kann.

Um Signalisierungsinformationen auszutauschen, können Sie JSON-Objekte über eine WebSocket-Verbindung senden, oder Sie könnten XMPP oder SIP über einen geeigneten Kanal verwenden, oder {{domxref("Window/fetch", "fetch()")}} über {{Glossary("HTTPS")}} mit Polling, oder jede andere Kombination von Technologien, die Sie sich ausdenken können. Sie könnten sogar E-Mail als Signalisierungskanal verwenden.

Es ist auch erwähnenswert, dass der Kanal für die Durchführung der Signalisierung nicht einmal über das Netzwerk erfolgen muss. Ein Peer könnte ein Datenobjekt ausgeben, das ausgedruckt, physisch transportiert (zu Fuß oder per Brieftaube) zu einem anderen Gerät gebracht, dort eingegeben werden und eine dann von diesem Gerät ausgegebene Antwort zurück über denselben Weg übertragen werden, bis die WebRTC-Peer-Verbindung geöffnet ist. Die Latenz wäre sehr hoch, aber es könnte getan werden.

#### Informationen, die während der Signalisierung ausgetauscht werden

Es gibt drei grundlegende Arten von Informationen, die während der Signalisierung ausgetauscht werden müssen:

- Steuerungsnachrichten zur Einrichtung, Öffnung und Schließung des Kommunikationskanals und zur Fehlerbehandlung.
- Informationen, die für die Herstellung der Verbindung benötigt werden: die IP-Adressierung und Portinformationen, die für die Peers erforderlich sind, um miteinander kommunizieren zu können.
- Mediakodex- und -formatfähigkeitsvereinbarung: Welche Codecs und Mediadatenformate können die Peers verstehen? Diese müssen vereinbart werden, bevor die WebRTC-Sitzung beginnen kann.

Erst wenn die Signalisierung erfolgreich abgeschlossen ist, kann der eigentliche Prozess der Öffnung der WebRTC-Peer-Verbindung beginnen.

Es ist wichtig zu beachten, dass der Signalisierungsserver die durch die beiden Peers während der Signalisierung ausgetauschten Daten nicht verstehen oder bearbeiten muss. Der Signalisierungsserver ist im Wesentlichen ein Relais: ein gemeinsamer Punkt, den beide Seiten kennen und zu dem sie wissen, dass ihre Signalisierungsdaten darüber übertragen werden können. Der Server muss auf diese Informationen in keiner Weise reagieren.

#### Der Signalisierungsprozess

Es gibt eine Reihenfolge von Dingen, die geschehen müssen, um es möglich zu machen, eine WebRTC-Sitzung zu beginnen:

1. Jeder Peer erstellt ein {{domxref("RTCPeerConnection")}}-Objekt, das ihr Ende der WebRTC-Sitzung repräsentiert.
2. Jeder Peer richtet einen Handler für {{domxref("RTCPeerConnection/icecandidate_event", "icecandidate")}}-Ereignisse ein, der sich mit dem Senden dieser Kandidaten über den Signalisierungskanal an den anderen Peer befasst.
3. Jeder Peer richtet einen Handler für {{domxref("RTCPeerConnection.track_event", "track")}}-Ereignisse ein, die empfangen werden, wenn der entfernte Peer einen Track zum Stream hinzufügt. Dieser Code sollte die Tracks mit ihrem Verbraucher verbinden, wie z. B. ein {{HTMLElement("video")}}-Element.
4. Der Anrufer erstellt und teilt mit dem empfangenden Peer einen eindeutigen Bezeichner oder ein Token, damit der Anruf zwischen ihnen vom Code auf dem Signalisierungsserver identifiziert werden kann. Die genauen Inhalte und die Form dieses Bezeichners liegen bei Ihnen.
5. Jeder Peer stellt eine Verbindung zu einem vereinbarten Signalisierungsserver her, wie z. B. einem WebSocket-Server, mit dem sie beide wissen, wie sie Nachrichten austauschen.
6. Jeder Peer teilt dem Signalisierungsserver mit, dass sie derselben WebRTC-Sitzung beitreten möchten (identifiziert durch das in Schritt 4 erstellte Token).
7. **_Beschreibungen, Kandidaten, usw. — es folgt mehr_**

## ICE-Neustart

Manchmal ändern sich die Netzwerkbedingungen während der Lebensdauer einer WebRTC-Sitzung. Einer der Nutzer könnte von einem Mobilfunknetz in ein Wi-Fi-Netz wechseln, oder das Netzwerk könnte ausgelastet werden, zum Beispiel. In diesem Fall kann der ICE-Agent sich dafür entscheiden, einen **ICE-Neustart** durchzuführen. Dabei wird die Netzwerkverbindung neu verhandelt, genau so wie bei der anfänglichen ICE-Verhandlung, mit einer Ausnahme: Die Medienübermittlung läuft weiterhin über die ursprüngliche Netzwerkverbindung, bis die neue einsatzbereit ist. Dann wechselt die Medienübertragung zur neuen Netzwerkverbindung und die alte wird geschlossen.

> [!NOTE]
> Unterschiedliche Browser unterstützen ICE-Neustart unter verschiedenen Bedingungen. Nicht alle Browser werden einen ICE-Neustart aufgrund von Netzwerküberlastung durchführen, zum Beispiel.

Wenn Sie die Konfiguration der Verbindung auf irgendeine Weise ändern müssen (wie z. B. das Wechseln zu einem anderen Satz von ICE-Servern), können Sie dies vor dem Neustart von ICE tun, indem Sie {{domxref("RTCPeerConnection.setConfiguration()")}} mit einem aktualisierten Konfigurationsobjekt aufrufen, bevor Sie ICE neu starten.

Um den ICE-Neustart explizit auszulösen, starten Sie den Neuverhandlungsprozess, indem Sie {{domxref("RTCPeerConnection.createOffer()")}} aufrufen und die `iceRestart`-Option mit einem Wert von `true` angeben. Führen Sie dann den Verbindungsprozess so weiter, wie Sie es normalerweise tun würden. Dadurch werden neue Werte für das ICE-Benutzernamen-Fragment (ufrag) und das Passwort generiert, die im Neuverhandlungsprozess und bei der resultierenden Verbindung verwendet werden.

Die antwortende Seite der Verbindung wird automatisch mit dem ICE-Neustart beginnen, wenn neue Werte für das ICE-Ufrag und das ICE-Passwort erkannt werden.

## Übertragung

## Empfang

---
title: Lebensdauer einer WebRTC-Sitzung
slug: Web/API/WebRTC_API/Session_lifetime
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation beliebiger Daten, Audio oder Video - oder jede Kombination davon - in eine Browseranwendung zu integrieren. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, von der Herstellung der Verbindung bis hin zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.

Dieser Artikel geht nicht ins Detail zu den tatsächlichen APIs, die beim Aufbau und der Handhabung einer WebRTC-Verbindung beteiligt sind; er betrachtet den Prozess im Allgemeinen mit einigen Informationen darüber, warum jeder Schritt erforderlich ist. Siehe [Signaling und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für ein tatsächliches Beispiel mit einer Schritt-für-Schritt-Erklärung, was der Code macht.

> [!NOTE]
> Diese Seite befindet sich derzeit im Aufbau, und ein Teil des Inhalts wird auf andere Seiten verschoben, während das WebRTC-Leitfadenmaterial ausgearbeitet wird. Wir bitten um Ihr Verständnis!

## Herstellung der Verbindung

Das Internet ist groß. Wirklich groß. Es ist so groß, dass kluge Köpfe schon vor Jahren erkannten, wie groß es ist, wie schnell es wächst und die [Einschränkungen](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) des 32-Bit-IP-Adressierungssystems, und realisierten, dass etwas unternommen werden musste, bevor uns die Adressen ausgehen würden, also begannen sie, ein neues 64-Bit-Adressierungssystem zu entwerfen. Aber sie erkannten, dass der Übergang länger dauern würde, als die 32-Bit-Adressen ausreichen würden, also entwickelten andere kluge Köpfe eine Möglichkeit, mehrere Computer dieselbe 32-Bit-IP-Adresse nutzen zu lassen. Network Address Translation ([NAT](/de/docs/Glossary/NAT)) ist ein Standard, der diese Adressfreigabe unterstützt, indem er die Weiterleitung von Daten eingehend und ausgehend zu und von Geräten in einem LAN verwaltet, die alle eine einzige WAN (globale) IP-Adresse teilen.

Das Problem für Benutzer ist, dass jeder einzelne Computer im Internet nicht mehr zwingend eine eindeutige IP-Adresse hat und tatsächlich die IP-Adresse jedes Geräts sich nicht nur ändern kann, wenn sie von einem Netz zum anderen wechseln, sondern auch, wenn die Adresse ihres Netzwerks von [NAT](/de/docs/Glossary/NAT) und/oder [DHCP](https://en.wikipedia.org/wiki/DHCP) geändert wird. Für Entwickler, die versuchen, Peer-to-Peer-Netzwerke zu erstellen, stellt dies ein Rätsel dar: Ohne eindeutige Identifikation für jedes Benutzergerät ist es nicht möglich, sofort und automatisch zu wissen, wie man ein bestimmtes Gerät im Internet erreicht. Auch wenn Sie wissen, mit wem Sie sprechen möchten, wissen Sie nicht unbedingt, wie Sie sie erreichen oder sogar welche Adresse sie haben.

Das ist wie wenn Sie versuchen, ein Paket an Ihre Freundin Michelle zu versenden, indem Sie es mit "Michelle" beschriften und in einen Briefkasten werfen, obwohl Sie ihre Adresse nicht kennen. Sie müssen ihre Adresse herausfinden und auf das Paket schreiben, sonst wundert sie sich, warum Sie ihren Geburtstag wieder vergessen haben.

Hier kommt das Signaling ins Spiel.

### Signaling

Signaling ist der Prozess des Sendens von Steuerinformationen zwischen zwei Geräten, um die Kommunikationsprotokolle, Kanäle, Mediencodecs und -formate sowie die Methode der Datenübertragung zu bestimmen und um alle erforderlichen Routing-Informationen bereitzustellen. Das Wichtigste, was man über den Signalisierungsprozess für WebRTC wissen muss: **Er ist nicht in der Spezifikation definiert**.

Warum, könnten Sie sich fragen, ist etwas so Grundlegendes für den Aufbau einer WebRTC-Verbindung nicht in der Spezifikation enthalten? Die Antwort ist einfach: Da die beiden Geräte keine Möglichkeit haben, direkt miteinander zu kommunizieren, und die Spezifikation nicht jeden möglichen Anwendungsfall für WebRTC vorhersehen kann, ist es sinnvoller, dem Entwickler die Wahl der geeigneten Netzwerktechnologie und des Nachrichtenprotokolls zu überlassen.

Besonders wenn ein Entwickler bereits eine Methode zum Verbinden von zwei Geräten hat, macht es keinen Sinn, dass er eine andere, von der Spezifikation definierte Methode, nur für WebRTC verwenden muss. Da WebRTC nicht in einem Vakuum existiert, gibt es wahrscheinlich andere Konnektivitäten, daher ist es sinnvoll, zusätzliche Verbindungskanäle für Signalisierung zu vermeiden, wenn ein bestehender Kanal genutzt werden kann.

Um Signalisierungsinformationen auszutauschen, können Sie JSON-Objekte über eine WebSocket-Verbindung hin und her senden, oder Sie könnten XMPP oder SIP über einen geeigneten Kanal verwenden, oder Sie könnten [`fetch()`](/de/docs/Web/API/Window/fetch) über [HTTPS](/de/docs/Glossary/HTTPS) mit Polling verwenden, oder jede andere Kombination von Technologien, die Ihnen einfällt. Sie könnten sogar E-Mail als Signalisierungskanal verwenden.

Es ist auch erwähnenswert, dass der Kanal zur Durchführung der Signalisierung nicht einmal über das Netzwerk laufen muss. Ein Partner kann ein Datenobjekt, das er ausgibt, ausdrucken, es physisch (zu Fuß oder per Brieftaube) zu einem anderen Gerät tragen, es dort eingeben und dann eine Antwort von diesem Gerät ausgeben, die zu Fuß zurückgebracht wird, und so weiter, bis die WebRTC-Peer-Verbindung offen ist. Es wäre eine sehr hohe Latenz, aber es könnte funktionieren.

#### Informationen, die während des Signalisierens ausgetauscht werden

Es gibt drei grundlegende Arten von Informationen, die während des Signalings ausgetauscht werden müssen:

- Steuerungsnachrichten, die zum Einrichten, Öffnen und Schließen des Kommunikationskanals und zur Fehlerbehandlung verwendet werden.
- Informationen, die zum Aufbau der Verbindung erforderlich sind: die IP-Adressen- und Portinformationen, die die Peers benötigen, um miteinander sprechen zu können.
- Aushandlung der Medienfähigkeiten: Welche Codecs und Mediendatenformate können die Peers verstehen? Diese müssen vereinbart werden, bevor die WebRTC-Sitzung beginnen kann.

Erst nachdem das Signaling erfolgreich abgeschlossen wurde, kann der eigentliche Prozess des Öffnens der WebRTC-Peer-Verbindung beginnen.

Es ist erwähnenswert, dass der Signalisierungsserver die Daten, die während des Signalings zwischen den beiden Peers ausgetauscht werden, nicht einmal verstehen oder bearbeiten muss. Der Signalisierungsserver ist im Wesentlichen ein Relais: ein gemeinsamer Punkt, bei dem beide Seiten wissen, dass ihre Signaldaten durch ihn übertragen werden können. Der Server muss auf diese Informationen in keiner Weise reagieren.

#### Der Signalisierungsprozess

Es gibt eine Abfolge von Dingen, die passieren müssen, um eine WebRTC-Sitzung beginnen zu können:

1. Jeder Peer erstellt ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, das sein Ende der WebRTC-Sitzung darstellt.
2. Jeder Peer richtet einen Handler für [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse ein, der dafür zuständig ist, diese Kandidaten über den Signalisierungskanal an den anderen Peer zu senden.
3. Jeder Peer richtet einen Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis ein, das empfangen wird, wenn der entfernte Peer einen Track zum Stream hinzufügt. Dieser Code sollte die Tracks mit ihrem Verbraucher verbinden, wie einem {{HTMLElement("video")}}-Element.
4. Der Anrufer erstellt und teilt mit dem empfangenden Peer einen eindeutigen Bezeichner oder ein Token, damit der Anruf zwischen ihnen vom Code auf dem Signalisierungsserver identifiziert werden kann. Der genaue Inhalt und die Form dieses Bezeichners liegt bei Ihnen.
5. Jeder Peer verbindet sich mit einem vereinbarten Signalisierungsserver, wie etwa einem WebSocket-Server, mit dem sie beide wissen, wie sie Nachrichten austauschen können.
6. Jeder Peer teilt dem Signalisierungsserver mit, dass er derselben WebRTC-Sitzung beitreten möchte (identifiziert durch das in Schritt 4 festgelegte Token).
7. **_Beschreibungen, Kandidaten usw. — mehr kommt noch_**

## ICE-Neustart

Manchmal ändern sich während der Lebensdauer einer WebRTC-Sitzung die Netzwerkbedingungen. Einer der Benutzer könnte von einem Mobilfunknetz zu einem WLAN wechseln, oder das Netzwerk könnte überlastet werden, zum Beispiel. In diesem Fall kann der ICE-Agent einen **ICE-Neustart** durchführen. Dies ist ein Prozess, bei dem die Netzwerkverbindung auf die gleiche Weise neu verhandelt wird, wie die ursprüngliche ICE-Verhandlung durchgeführt wurde, mit einer Ausnahme: Medien fließen weiterhin über die ursprüngliche Netzwerkverbindung, bis die neue Verbindung bereit ist. Dann wechseln die Medien zur neuen Netzwerkverbindung und die alte wird geschlossen.

> [!NOTE]
> Verschiedene Browser unterstützen den ICE-Neustart unter unterschiedlichen Bedingungen. Nicht alle Browser führen einen ICE-Neustart aufgrund von Netzwerküberlastung durch, beispielsweise.

Wenn Sie die Konfiguration der Verbindung in irgendeiner Weise ändern müssen (wie z. B. das Wechseln zu einem anderen Satz von ICE-Servern), können Sie dies tun, bevor Sie ICE neu starten, indem Sie [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) mit einem aktualisierten Konfigurationsobjekt aufrufen, bevor Sie ICE neu starten.

Um den ICE-Neustart ausdrücklich zu initiieren, starten Sie den Neuverhandlungsprozess, indem Sie [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen und die `iceRestart`-Option mit dem Wert `true` angeben. Handhaben Sie dann den Verbindungsprozess von dort an wie gewohnt. Dies generiert neue Werte für das ICE-Benutzernamenfragment (ufrag) und das Passwort, die vom Neuverhandlungsprozess und der resultierenden Verbindung verwendet werden.

Die antwortende Seite der Verbindung wird automatisch den ICE-Neustart beginnen, wenn neue Werte für das ICE-ufrag und das ICE-Passwort erkannt werden.

## Übertragung

## Empfang

---
title: Lebensdauer einer WebRTC-Sitzung
slug: Web/API/WebRTC_API/Session_lifetime
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC ermöglicht Ihnen den Aufbau von Peer-to-Peer-Kommunikation für beliebige Daten, Audio oder Video – oder jede Kombination davon – in einer Browseranwendung. In diesem Artikel betrachten wir die Lebensdauer einer WebRTC-Sitzung, vom Aufbau der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.

Dieser Artikel geht nicht auf die Details der tatsächlichen APIs ein, die zum Aufbau und zur Verwaltung einer WebRTC-Verbindung verwendet werden. Er behandelt den Prozess im Allgemeinen mit einigen Informationen darüber, warum jeder Schritt erforderlich ist. Siehe [Signalisierung und Videoanrufe](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für ein tatsächliches Beispiel mit einer schrittweisen Erklärung, was der Code tut.

> [!NOTE]
> Diese Seite befindet sich derzeit im Aufbau, und einige Inhalte werden auf andere Seiten verschoben, während das WebRTC-Leitfaden-Material erstellt wird. Bitte entschuldigen Sie etwaige Unannehmlichkeiten!

## Aufbau der Verbindung

Das Internet ist groß. Wirklich groß. Es ist so groß, dass vor Jahren kluge Leute erkannten, wie groß es war, wie schnell es wuchs und die [Einschränkungen](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) des 32-Bit-IP-Adressierungssystems und realisierten, dass etwas getan werden musste, bevor uns die Adressen ausgehen, und begannen, ein neues 64-Bit-Adressierungssystem zu entwerfen. Aber sie erkannten, dass der Übergang länger dauern würde, als die 32-Bit-Adressen ausreichen würden, also entwickelten andere kluge Leute eine Möglichkeit, mehreren Computern dieselbe 32-Bit-IP-Adresse zuzuweisen. Network Address Translation ([NAT](/de/docs/Glossary/NAT)) ist ein Standard, der diese Adressfreigabe unterstützt, indem er das Routing von eingehenden und ausgehenden Daten zu und von Geräten in einem LAN verwaltet, die alle eine einzige WAN (globale) IP-Adresse teilen.

Das Problem für Benutzer besteht darin, dass nicht mehr unbedingt jeder einzelne Computer im Internet eine eindeutige IP-Adresse hat und sich die IP-Adresse eines Geräts tatsächlich ändern kann, nicht nur, wenn es von einem Netzwerk in ein anderes wechselt, sondern auch, wenn die Adresse seines Netzwerks durch [NAT](/de/docs/Glossary/NAT) und/oder [DHCP](https://en.wikipedia.org/wiki/DHCP) geändert wird. Für Entwickler, die Peer-to-Peer-Netzwerke aufbauen möchten, stellt dies ein Dilemma dar: Ohne einen eindeutigen Identifikator für jedes Benutzergerät ist es nicht möglich, sofort und automatisch zu wissen, wie man eine Verbindung zu einem bestimmten Gerät im Internet herstellt. Selbst wenn Sie wissen, mit wem Sie sprechen möchten, wissen Sie nicht unbedingt, wie Sie diese Person erreichen können oder welche Adresse sie hat.

Das ist wie der Versuch, ein Paket an Ihre Freundin Michelle zu schicken, indem Sie es mit "Michelle" beschriften und in einen Briefkasten werfen, wenn Sie ihre Adresse nicht kennen. Sie müssen ihre Adresse heraussuchen und auf das Paket schreiben, oder sie fragt sich, warum Sie wieder ihren Geburtstag vergessen haben.

Hier kommt die Signalisierung ins Spiel.

### Signalisierung

Signalisierung ist der Prozess des Sendens von Steuerinformationen zwischen zwei Geräten, um die Kommunikationsprotokolle, Kanäle, Medien-Codecs und -Formate sowie die Methode des Datentransfers sowie alle erforderlichen Routeninformationen zu bestimmen. Das Wichtigste, was Sie über den Signalisierungsprozess für WebRTC wissen sollten: **Er ist nicht in der Spezifikation definiert**.

Warum, fragen Sie sich vielleicht, ist etwas Wesentliches für den Aufbau einer WebRTC-Verbindung in der Spezifikation nicht enthalten? Die Antwort ist einfach: Da die beiden Geräte keine Möglichkeit haben, sich direkt zu kontaktieren, und die Spezifikation nicht jeden möglichen Anwendungsfall für WebRTC vorhersagen kann, ist es sinnvoller, dem Entwickler die Auswahl einer geeigneten Netzwerktechnologie und eines Nachrichtenprotokolls zu überlassen.

Insbesondere wenn ein Entwickler bereits eine Methode zum Verbinden zweier Geräte hat, ergibt es keinen Sinn, dass er eine andere, von der Spezifikation vorgeschriebene verwenden muss, nur für WebRTC. Da WebRTC nicht in einem Vakuum existiert, gibt es wahrscheinlich andere Verbindungen, so dass es sinnvoll ist, zu vermeiden, zusätzliche Verbindungskanäle für die Signalisierung hinzuzufügen, wenn ein vorhandener verwendet werden kann.

Um Signalisierungsinformationen auszutauschen, können Sie JSON-Objekte über eine WebSocket-Verbindung hin und her senden, oder Sie könnten XMPP oder SIP über einen geeigneten Kanal verwenden, oder Sie könnten [`fetch()`](/de/docs/Web/API/Window/fetch) über [HTTPS](/de/docs/Glossary/HTTPS) mit Polling verwenden oder jede andere Kombination von Technologien, die Ihnen einfällt. Sie könnten sogar E-Mail als Signalisierungskanal verwenden.

Es ist auch erwähnenswert, dass der Kanal für die Durchführung von Signalisierungen nicht einmal über das Netzwerk verlaufen muss. Ein Peer kann ein Datenobjekt ausgeben, das gedruckt, physisch (zu Fuß oder per Brieftaube) zu einem anderen Gerät transportiert, in dieses Gerät eingegeben und eine Antwort dann von diesem Gerät ausgegeben und zu Fuß zurückgebracht werden kann, und so weiter, bis die WebRTC-Peer-Verbindung geöffnet ist. Es würde eine sehr hohe Latenz haben, aber es wäre möglich.

#### Informationen, die während der Signalisierung ausgetauscht werden

Es gibt drei grundlegende Arten von Informationen, die während der Signalisierung ausgetauscht werden müssen:

- Steuerungsnachrichten, die zum Einrichten, Öffnen und Schließen des Kommunikationskanals sowie zur Fehlerbehandlung verwendet werden.
- Informationen, die zum Einrichten der Verbindung benötigt werden: die IP-Adressen und Portinformationen, die benötigt werden, damit die Peers miteinander kommunizieren können.
- Medienfähigkeitsverhandlung: Welche Codecs und Datentypen können die Peers verstehen? Diese müssen vor Beginn der WebRTC-Sitzung abgestimmt werden.

Erst nachdem die Signalisierung erfolgreich abgeschlossen wurde, kann der eigentliche Prozess des Öffnens der WebRTC-Peer-Verbindung beginnen.

Es ist erwähnenswert, dass der Signalisierungsserver die von den beiden Peers während der Signalisierung durch ihn ausgetauschten Daten nicht tatsächlich verstehen oder verarbeiten muss. Der Signalisierungsserver ist im Wesentlichen ein Relais: ein gemeinsamer Punkt, zu dem beide Seiten eine Verbindung herstellen in dem Wissen, dass ihre Signalisierungsdaten durch ihn übertragen werden können. Der Server muss auf diese Informationen in keiner Weise reagieren.

#### Der Signalisierungsprozess

Es gibt eine Abfolge von Dingen, die geschehen müssen, um den Beginn einer WebRTC-Sitzung zu ermöglichen:

1. Jeder Peer erstellt ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, das ihre Seite der WebRTC-Sitzung darstellt.
2. Jeder Peer legt einen Handler für [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse fest, der diese Kandidaten über den Signalisierungskanal an den anderen Peer sendet.
3. Jeder Peer legt einen Handler für das [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignis fest, das empfangen wird, wenn der entfernte Peer einen Track zum Stream hinzufügt. Dieser Code sollte die Tracks mit ihrem Verbraucher verbinden, wie einem {{HTMLElement("video")}}-Element.
4. Der Anrufer erstellt und teilt mit dem empfangenden Peer eine eindeutige Kennung oder ein Token irgendeiner Art, damit der Anruf zwischen ihnen vom Code auf dem Signalisierungsserver identifiziert werden kann. Der genaue Inhalt und die Form dieser Kennung liegen bei Ihnen.
5. Jeder Peer verbindet sich mit einem vereinbarten Signalisierungsserver, wie einem WebSocket-Server, mit dem sie beide wissen, wie Nachrichten ausgetauscht werden können.
6. Jeder Peer teilt dem Signalisierungsserver mit, dass er derselben WebRTC-Sitzung beitreten möchte (identifiziert durch das in Schritt 4 festgelegte Token).
7. **_Beschreibungen, Kandidaten, usw. — mehr in Kürze_**

## ICE-Neustart

Manchmal ändern sich während der Lebensdauer einer WebRTC-Sitzung die Netzwerkbedingungen. Einer der Benutzer könnte von einem Mobilfunknetzwerk zu einem WLAN wechseln oder das Netzwerk könnte überlastet werden, zum Beispiel. In solchen Fällen kann der ICE-Agent wählen, einen **ICE-Neustart** durchzuführen. Dies ist ein Prozess, bei dem die Netzverbindung neu ausgehandelt wird, genau wie bei der anfänglichen ICE-Verhandlung, mit einer Ausnahme: Medien fließen weiterhin über die ursprüngliche Netzverbindung, bis die neue in Betrieb ist. Dann wechselt die Medienübertragung zur neuen Netzverbindung und die alte wird geschlossen.

> [!NOTE]
> Verschiedene Browser unterstützen den ICE-Neustart unter verschiedenen Bedingungen. Nicht alle Browser führen einen ICE-Neustart aufgrund von Netzwerküberlastung durch, zum Beispiel.

Wenn Sie die Konfiguration der Verbindung in irgendeiner Weise ändern müssen (z. B. durch Wechsel zu einem anderen Satz von ICE-Servern), können Sie dies tun, bevor sie ICE neu starten, indem Sie [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) mit einem aktualisierten Konfigurationsobjekt aufrufen, bevor ICE neu gestartet wird.

Um einen ICE-Neustart explizit auszulösen, starten Sie den Neuverhandlungsprozess, indem Sie [`RTCPeerConnection.createOffer()`](/de/docs/Web/API/RTCPeerConnection/createOffer) aufrufen und die Option `iceRestart` mit einem Wert von `true` angeben. Dann behandeln Sie den Verbindungsprozess von diesem Punkt an, wie Sie es normalerweise tun würden. Dies generiert neue Werte für das ICE Benutzername-Fragment (ufrag) und Passwort, die vom Neuverhandlungsprozess und der resultierenden Verbindung verwendet werden.

Die antwortende Seite der Verbindung wird automatisch mit dem ICE-Neustart beginnen, wenn neue Werte für das ICE ufrag und das ICE-Passwort erkannt werden.

## Übertragung

## Empfang

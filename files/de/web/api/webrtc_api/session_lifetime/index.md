---
title: Lebenszyklus einer WebRTC-Sitzung
slug: Web/API/WebRTC_API/Session_lifetime
l10n:
  sourceCommit: 7336c394a1406850b293f743c7dcb3f2ee661952
---

{{DefaultAPISidebar("WebRTC")}}

WebRTC ermöglicht es Ihnen, Peer-to-Peer-Kommunikation mit beliebigen Daten, Audio oder Video – oder einer beliebigen Kombination davon – in eine Browseranwendung einzubinden. In diesem Artikel betrachten wir den Lebenszyklus einer WebRTC-Sitzung, vom Aufbau der Verbindung bis zum Schließen der Verbindung, wenn sie nicht mehr benötigt wird.

Dieser Artikel geht nicht im Detail auf die tatsächlichen APIs ein, die beim Aufbauen und Verwalten einer WebRTC-Verbindung beteiligt sind; er gibt einen allgemeinen Überblick über den Prozess mit einigen Informationen darüber, warum jeder Schritt erforderlich ist. Siehe [Signalisierung und Videotelefonie](/de/docs/Web/API/WebRTC_API/Signaling_and_video_calling) für ein konkretes Beispiel mit einer schrittweisen Erklärung des Codes.

> [!NOTE]
> Diese Seite befindet sich derzeit im Aufbau, und einige Inhalte werden auf andere Seiten verschoben, während das WebRTC-Leitfadenmaterial erweitert wird. Bitte entschuldigen Sie die Unannehmlichkeiten!

## Aufbau der Verbindung

Das Internet ist groß. Wirklich groß. Es ist so groß, dass vor Jahren kluge Leute sahen, wie groß es war, wie schnell es wuchs und die [Einschränkungen](https://en.wikipedia.org/wiki/IPv4_address_exhaustion) des 32-Bit-IP-Adressierungssystems, und sie erkannten, dass etwas getan werden musste, bevor uns die Adressen ausgehen, also begannen sie mit der Gestaltung eines neuen 64-Bit-Adressierungssystems. Doch sie erkannten, dass der Übergang länger dauern würde, als die 32-Bit-Adressen halten würden, also entwickelten andere kluge Leute eine Möglichkeit, mehreren Computern die gemeinsame Nutzung der gleichen 32-Bit-IP-Adresse zu ermöglichen. Das Network Address Translation ({{Glossary("NAT", "NAT")}}) ist ein Standard, der diese Adressenteilung unterstützt, indem er die Weiterleitung von Daten zu und von Geräten in einem lokalen Netzwerk (LAN) verwaltet, die alle eine einzige globale (WAN) IP-Adresse teilen.

Das Problem für Benutzer ist, dass jeder einzelne Computer im Internet nicht mehr unbedingt eine eindeutige IP-Adresse hat und, tatsächlich, sich die IP-Adresse jedes Geräts nicht nur ändern kann, wenn es von einem Netzwerk zu einem anderen wechselt, sondern auch, wenn die Adresse seines Netzwerks durch {{Glossary("NAT", "NAT")}} und/oder [DHCP](https://en.wikipedia.org/wiki/DHCP) geändert wird. Für Entwickler, die ein Peer-to-Peer-Netzwerk aufbauen möchten, ergibt sich daraus ein Dilemma: Ohne eine eindeutige Kennung für jedes Benutzergerät ist es nicht möglich, sofort und automatisch zu wissen, wie man ein bestimmtes Gerät im Internet erreicht. Auch wenn Sie wissen, mit wem Sie sprechen möchten, wissen Sie nicht unbedingt, wie Sie sie erreichen oder sogar, was ihre Adresse ist.

Das ist, als würden Sie versuchen, ein Paket an Ihre Freundin Michelle zu senden, indem Sie es mit "Michelle" beschriften und in einen Briefkasten werfen, ohne ihre Adresse zu kennen. Sie müssen ihre Adresse ermitteln und auf das Paket schreiben, sonst wird sie sich fragen, warum Sie ihren Geburtstag wieder vergessen haben.

Hier kommt die Signalisierung ins Spiel.

### Signalisierung

Signalisierung ist der Prozess der Übermittlung von Steuerungsinformationen zwischen zwei Geräten, um die Kommunikationsprotokolle, Kanäle, Medien-Codecs und -Formate sowie die Methode des Datentransfers zu bestimmen, ebenso wie jede erforderliche Routing-Information. Das Wichtigste, was Sie über den Signalisierungsprozess bei WebRTC wissen müssen: **Er ist nicht in der Spezifikation definiert**.

Warum, könnten Sie fragen, ist etwas, das für den Aufbau einer WebRTC-Verbindung grundlegend ist, in der Spezifikation ausgelassen? Die Antwort ist einfach: Da die beiden Geräte keine Möglichkeit haben, sich direkt zu kontaktieren, und die Spezifikation nicht jeden möglichen Anwendungsfall für WebRTC vorhersehen kann, erscheint es sinnvoller, dem Entwickler die Wahl einer geeigneten Netzwerktechnologie und eines geeigneten Nachrichtenprotokolls zu überlassen.

Insbesondere wenn ein Entwickler bereits eine Methode zum Verbinden von zwei Geräten hat, macht es keinen Sinn, dass er eine weitere, von der Spezifikation definierte Methode nur für WebRTC verwenden muss. Da WebRTC nicht isoliert existiert, sind wahrscheinlich andere Verbindungen im Spiel, sodass es sinnvoll ist, zusätzliche Verbindungskanäle für die Signalisierung zu vermeiden, falls ein bestehender Kanal genutzt werden kann.

Um Signalisierungsinformationen auszutauschen, können Sie wählen, JSON-Objekte über eine WebSocket-Verbindung hin und her zu senden, oder Sie könnten XMPP oder SIP über einen geeigneten Kanal verwenden, oder Sie könnten [`fetch()`](/de/docs/Web/API/Window/fetch) über {{Glossary("HTTPS", "HTTPS")}} mit Abfrage verwenden oder eine andere Kombination aus Technologien, die Sie sich ausdenken können. Sie könnten sogar E-Mail als Signalisierungskanal verwenden.

Es ist auch erwähnenswert, dass der Kanal für die Durchführung der Signalisierung nicht einmal über das Netzwerk verlaufen muss. Ein Peer kann ein Datenobjekt ausgeben, das ausgedruckt, physisch (zu Fuß oder durch Brieftaube) zu einem anderen Gerät gebracht, in dieses Gerät eingegeben und dann von diesem Gerät eine Antwort ausgegeben wird, die zu Fuß zurückgebracht werden kann, und so weiter, bis die WebRTC-Peer-Verbindung geöffnet ist. Es wäre sehr latenzreich, aber es könnte getan werden.

#### Informationen, die während der Signalisierung ausgetauscht werden

Es gibt drei grundlegende Arten von Informationen, die während der Signalisierung ausgetauscht werden müssen:

- Steuerungsmeldungen, die zum Einrichten, Öffnen und Schließen des Kommunikationskanals und zur Fehlerbehandlung verwendet werden.
- Informationen, die zum Einrichten der Verbindung benötigt werden: die IP-Adressierung und Portinformationen, die für die Kommunikation der Peers erforderlich sind.
- Medienfähigkeitsverhandlung: Welche Codecs und Medienformate können die Peers verstehen? Diese müssen vereinbart werden, bevor die WebRTC-Sitzung beginnen kann.

Erst wenn die Signalisierung erfolgreich abgeschlossen wurde, kann der eigentliche Prozess des Öffnens der WebRTC-Peer-Verbindung beginnen.

Es ist erwähnenswert, dass der Signalisierungsserver die von den beiden Peers während der Signalisierung über ihn ausgetauschten Daten nicht verstehen oder verarbeiten muss. Der Signalisierungsserver ist im Wesentlichen ein Relais: ein gemeinsamer Punkt, zu dem beide Seiten eine Verbindung herstellen, in dem Wissen, dass ihre Signalisierungsdaten durch ihn übertragen werden können. Der Server muss auf diese Informationen in keiner Weise reagieren.

#### Der Signalisierungsprozess

Es gibt eine Abfolge von Dingen, die geschehen müssen, um eine WebRTC-Sitzung starten zu können:

1. Jeder Peer erstellt ein [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Objekt, das sein Ende der WebRTC-Sitzung repräsentiert.
2. Jeder Peer richtet einen Handler für [`icecandidate`](/de/docs/Web/API/RTCPeerConnection/icecandidate_event)-Ereignisse ein, der für das Senden dieser Kandidaten an den anderen Peer über den Signalisierungskanal verantwortlich ist.
3. Jeder Peer richtet einen Handler für [`track`](/de/docs/Web/API/RTCPeerConnection/track_event)-Ereignisse ein, die empfangen werden, wenn der entfernte Peer einer Spur zum Stream hinzufügt. Dieser Code sollte die Spuren mit ihrem Verbraucher verbinden, wie z.B. einem {{HTMLElement("video")}}-Element.
4. Der Anrufer erstellt und teilt mit dem empfangenden Peer eine eindeutige Kennung oder ein Token, damit der Anruf zwischen ihnen vom Code auf dem Signalisierungsserver erkannt werden kann. Der genaue Inhalt und die Form dieser Kennung liegt bei Ihnen.
5. Jeder Peer verbindet sich mit einem vereinbarten Signalisierungsserver, wie z.B. einem WebSocket-Server, mit dem sie beide wissen, wie sie Nachrichten austauschen können.
6. Jeder Peer teilt dem Signalisierungsserver mit, dass sie derselben WebRTC-Sitzung beitreten möchten (identifiziert durch das in Schritt 4 festgelegte Token).
7. **_Beschreibungen, Kandidaten usw. — mehr folgt_**

## ICE-Neustart

Manchmal ändern sich während des Lebenszyklus einer WebRTC-Sitzung die Netzwerkbedingungen. Einer der Benutzer könnte von einem Mobilfunknetzwerk zu einem WLAN-Netzwerk wechseln oder das Netzwerk könnte z.B. überlastet werden. Wenn dies geschieht, kann der ICE-Agent sich entscheiden, einen **ICE-Neustart** durchzuführen. Dies ist ein Prozess, bei dem die Netzwerkverbindung neu verhandelt wird, genau auf die gleiche Weise, wie die ursprüngliche ICE-Verhandlung durchgeführt wurde, mit einer Ausnahme: Die Medienübertragung läuft weiterhin über die ursprüngliche Netzwerkverbindung, bis die neue Verbindung aufgebaut ist. Dann wird auf die neue Netzwerkverbindung umgeschaltet und die alte wird geschlossen.

> [!NOTE]
> Verschiedene Browser unterstützen den ICE-Neustart unter verschiedenen Bedingungen. Nicht alle Browser führen einen ICE-Neustart aufgrund von Netzwerküberlastung durch, zum Beispiel.

Die Behandlung des `failed` [ICE-Verbindungszustands](/de/docs/Web/API/RTCPeerConnection/iceConnectionState) unten zeigt, wie Sie die Verbindung möglicherweise neu starten.

```js
pc.oniceconnectionstatechange = () => {
  if (pc.iceConnectionState === "failed") {
    pc.setConfiguration(restartConfig);
    pc.restartIce();
  }
};
```

Der Code ruft zunächst [`RTCPeerConnection.setConfiguration()`](/de/docs/Web/API/RTCPeerConnection/setConfiguration) mit einem aktualisierten Konfigurationsobjekt auf. Dies sollte vor dem Neustart von ICE durchgeführt werden, wenn Sie die Verbindungskonfiguration in irgendeiner Weise ändern müssen (z.B. auf ein anderes Set von ICE-Servern umstellen).

Der Handler ruft dann [`RTCPeerConnection.restartIce()`](/de/docs/Web/API/RTCPeerConnection/restartIce) auf. Dies teilt der ICE-Schicht mit, das `iceRestart`-Flag automatisch zu dem nächsten `createOffer()`-Aufruf hinzuzufügen, was einen ICE-Neustart auslöst. Es werden auch neue Werte für das ICE-Benutzernamenfragment (ufrag) und das Passwort erzeugt, die während des Neuverhandlungsprozesses und in der resultierenden Verbindung verwendet werden.

Die Antwortseite der Verbindung beginnt automatisch mit dem ICE-Neustart, wenn neue Werte für das ICE-ufrag und das ICE-Passwort erkannt werden.

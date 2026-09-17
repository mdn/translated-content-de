---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: a4c63d2855b2f557e7d1ee821dee65011d569a41
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel stellt die Protokolle vor, auf denen die WebRTC-API aufbaut.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das Ihrem Webbrowser die Verbindung mit Peers ermöglicht. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktioniert. Sie muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse geben, wenn Ihr Gerät – wie in den meisten Fällen – keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers zulässt. ICE verwendet hierfür STUN- und/oder TURN-Server, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und Einschränkungen Ihres Routers festzustellen, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients und der Information antwortet, ob der Client hinter dem NAT des Routers erreichbar ist.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung unter Beteiligung eines STUN-Servers.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse bereitzustellen. Ein Router hat eine öffentliche IP-Adresse, und jedes mit dem Router verbundene Gerät hat eine private IP-Adresse. Anfragen werden von der privaten IP-Adresse des Geräts über einen eindeutigen Port in die öffentliche IP-Adresse des Routers übersetzt. Auf diese Weise benötigen Sie nicht für jedes Gerät eine eindeutige öffentliche IP-Adresse und können dennoch im Internet gefunden werden.

Einige Router beschränken, wer sich mit Geräten im Netzwerk verbinden kann. Das kann bedeuten, dass nicht jeder eine Verbindung herstellen kann, obwohl wir die vom STUN-Server ermittelte öffentliche IP-Adresse haben. In dieser Situation müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, setzen eine Einschränkung namens „Symmetric NAT“ ein. Das bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, mit denen Sie zuvor eine Verbindung hergestellt haben.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) dient dazu, die Einschränkung durch Symmetric NAT zu umgehen, indem eine Verbindung mit einem TURN-Server geöffnet und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung mit einem TURN-Server herstellen und allen Peers mitteilen, Pakete an den Server zu senden, der sie anschließend an Sie weiterleitet. Dies bringt offensichtlich einen gewissen Overhead mit sich und wird daher nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung unter Beteiligung von STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung der Multimedia-Inhalte einer Verbindung, etwa Auflösung, Formate, Codecs, Verschlüsselung usw., sodass beide Peers einander verstehen können, sobald Daten übertragen werden. Im Wesentlichen handelt es sich dabei um Metadaten, die den Inhalt beschreiben, und nicht um den Medieninhalt selbst.

Streng genommen ist SDP daher kein echtes Protokoll, sondern ein Datenformat zur Beschreibung einer Verbindung, die Medien zwischen Geräten austauscht.

Eine Dokumentation von SDP würde den Rahmen dieser Dokumentation bei Weitem sprengen; es gibt jedoch einige Punkte, die hier erwähnenswert sind.

### Struktur

SDP besteht aus einer oder mehreren Zeilen UTF-8-Text. Jede beginnt mit einem ein Zeichen langen Typ, gefolgt von einem Gleichheitszeichen (`"="`) und anschließendem strukturiertem Text, der aus einem Wert oder einer Beschreibung besteht und dessen Format vom Typ abhängt. Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden im Allgemeinen als „_Buchstabe_-Zeilen“ bezeichnet. Beispielsweise haben Zeilen mit Medienbeschreibungen den Typ `"m"` und werden daher als „m-Zeilen“ bezeichnet.

### Weitere Informationen

Weitere Informationen über SDP finden Sie in den folgenden nützlichen Ressourcen:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Register der SDP-Parameter](https://www.iana.org/assignments/sip-parameters)

## Videokonferenzen mit mehreren Teilnehmern

In WebRTC-Peer-to-Peer-Netzwerken handeln Peers auf Grundlage der Gerätefähigkeiten und der Netzwerkbandbreite geeignete Video-Codecs und -Streams aus.
Jeder Sender sendet dann einen einzelnen Stream mit Videoinformationen („singlecast“) an sein entsprechendes Peer-Gegenstück.

Videokonferenzen zwischen mehreren Parteien sind komplexer, da die Peers unterschiedliche Fähigkeiten und Netzwerkbedingungen haben können: Eine bestimmte Video-Stream-Auflösung, -Rate und -Qualität ist möglicherweise nicht für alle Empfänger geeignet. Gleichzeitig ist es für einen Sender weder effizient noch skalierbar, mehrere Streams für viele Empfänger zu erzeugen und zu senden.

Der gebräuchlichste Ansatz zur Bewältigung dieser Probleme besteht darin, einen zwischengeschalteten Server zu verwenden, der als _Selective Forwarding Unit_ (SFU) oder _Selective Forwarding Middlebox_ (SFM) bezeichnet wird.
Sender geben Video so kodiert aus, dass die SFM für jeden Empfänger selektiv einen geeigneten Video-Stream weiterleiten kann.
WebRTC verwendet in diesem Fall zwei Haupttechnologien zur Videokodierung: Simulcast und skalierbare Videokodierung.

### Simulcast

_Simulcast_ sendet mehrere gleichzeitige Versionen derselben Quelle mit unterschiedlichen Auflösungen und Bitraten in separaten Streams.
Die SFM leitet auf Grundlage der Netzwerkbedingungen und Gerätefähigkeiten jedes Empfängers den am besten geeigneten Stream weiter.

Die SFM ist darauf angewiesen, Frame-Abhängigkeitsbeziehungen bestimmen zu können, etwa zwischen einer Kette von Interframes bis zurück zum letzten Keyframe, um Pakete weiterzuleiten und Simulcast-Ebenen zu wechseln, ohne dass ein Empfänger dies bemerkt.

Die Codecs VP8 und VP9 können Frame-Abhängigkeitsinformationen jeweils im VP8-Payload-Deskriptor und VP9-Payload-Deskriptor enthalten.
Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Aktuelle Browser-Implementierungen verwenden üblicherweise den DD-Header für alle Codecs, da er codec-agnostisch ist, was die Implementierung der SFM vereinfachen kann.
Da er außerdem Teil des RTP-Headers und nicht der Payload ist, kann er in End-to-End-Verschlüsselungsszenarien verwendet werden.

### Skalierbare Videokodierung

[Scalable Video Coding (SVC)](https://w3c.github.io/webrtc-svc/) kodiert eine Videoquelle in einem einzelnen Stream mit mehreren Ebenen, die selektiv dekodiert werden können, um Videos mit bestimmten Auflösungen, Bitraten oder Qualitätsstufen zu erhalten.
Eine SFM kann eine Teilmenge der Ebenen weiterleiten, um einen Stream zu senden, der für das Netzwerk und Gerät jedes Empfängers geeignet ist.

Beachten Sie, dass die Abhängigkeiten wesentlich komplexer sind als für die Auswahl weiterzuleitender Streams bei der Verwendung von Simulcast erforderlich ist (siehe die [Abhängigkeitsdiagramme](https://w3c.github.io/webrtc-svc/#dependencydiagrams*) in der SVC-Spezifikation, um einen Eindruck von der Komplexität zu erhalten).
Der SVC-Stream besteht aus einer Basisebene, die ein Mindestmaß an Qualität bereitstellt, und kann eine Reihe von Erweiterungsebenen umfassen, die unterschiedliche Bildraten („zeitliche Skalierbarkeit“), eine höhere Auflösung („räumliche Skalierbarkeit“) sowie dieselbe Auflösung bei unterschiedlichen Bitraten ermöglichen.
Der VP8-Codec unterstützt nur zeitliche Ebenen, während VP9 sowohl zeitliche als auch räumliche Ebenen unterstützt.

Die Codecs VP8 und VP9 können Frame-Abhängigkeitsinformationen jeweils im VP8-Payload-Deskriptor und VP9-Payload-Deskriptor enthalten.
Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Wie bei Simulcast verwenden aktuelle Browser-Implementierungen üblicherweise den DD-Header für alle Codecs, die SVC unterstützen, um die Implementierung der SFM zu vereinfachen und weil er End-to-End-Verschlüsselungsszenarien unterstützt.

Chrome 111 und höher unterstützt SVC.
Firefox unterstützt SVC zum Zeitpunkt der Erstellung dieses Dokuments nicht (etwa FF136).

### Dependency Descriptor RTP Header Extension

Die [Dependency Descriptor (DD) RTP Header Extension](https://aomediacodec.github.io/av1-rtp-spec/#43-dependency-descriptor-rtp-header-extension), die in der Spezifikation _RTP Payload Format For AV1 (v1.0)_ definiert ist, bietet eine codec-agnostische, flexible, effiziente und erweiterbare Möglichkeit zur Beschreibung der Beziehungen zwischen Frames in einem mehrschichtigen Video-Stream.

Sie kann von einer SFM verwendet werden, um Pakete auszuwählen und weiterzuleiten, die mit den für einen Empfänger vorgesehenen Ebenen verbunden sind.
Da der Header eine echte Erweiterung ist, ist er nicht Teil der Payload und daher in End-to-End-Verschlüsselungsszenarien (E2EE) weiterhin für die SFM verfügbar.

Chrome und Firefox (136+) unterstützen den DD-Header.

### Von WebRTC unterstützte Codecs

Diese Informationen finden Sie unter [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

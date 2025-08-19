---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: 74e7902b0875b6378d77df6d2d925a2d09d19f5d
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel stellt die Protokolle vor, auf denen die WebRTC-API aufgebaut ist.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das es Ihrem Webbrowser ermöglicht, mit Peers zu verbinden. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktionieren kann. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse zuweisen, wenn Ihr Gerät, wie in den meisten Situationen, keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers zulässt. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und Einschränkungen in Ihrem Router zu bestimmen, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients und der Information, ob der Client hinter dem NAT des Routers erreichbar ist, antwortet.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung mit einem STUN-Server.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zuzuweisen. Ein Router hat eine öffentliche IP-Adresse und jedes mit dem Router verbundene Gerät hat eine private IP-Adresse. Anfragen werden von der privaten IP des Geräts auf die öffentliche IP des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP für jedes Gerät, können aber dennoch im Internet entdeckt werden.

Einige Router haben Einschränkungen, wer sich mit Geräten im Netzwerk verbinden kann. Dies kann bedeuten, dass selbst wenn wir die vom STUN-Server gefundene öffentliche IP-Adresse haben, nicht jeder eine Verbindung herstellen kann. In diesem Fall müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, setzen eine Einschränkung namens "Symmetric NAT" ein. Das bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, mit denen Sie zuvor verbunden waren.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) soll die Einschränkung des Symmetric NAT umgehen, indem eine Verbindung mit einem TURN-Server hergestellt wird und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung zu einem TURN-Server erstellen und alle Peers anweisen, Pakete an den Server zu senden, die dann an Sie weitergeleitet werden. Dies bringt offensichtlich einen gewissen Overhead mit sich, daher wird es nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung mit STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung des Multimedia-Inhalts der Verbindung, wie Auflösung, Formate, Codecs, Verschlüsselung usw., damit beide Peers einander verstehen, sobald die Daten übertragen werden. Das ist im Wesentlichen die Metadatenbeschreibung des Inhalts und nicht der Inhaltsmedien selbst.

Technisch gesehen ist SDP also nicht wirklich ein Protokoll, sondern ein Datenformat, das verwendet wird, um eine Verbindung zu beschreiben, die Medien zwischen Geräten teilt.

Die Dokumentation von SDP liegt weit außerhalb des Rahmens dieser Dokumentation; es gibt jedoch einige Dinge, die hier erwähnenswert sind.

### Struktur

SDP besteht aus einer oder mehreren Zeilen UTF-8-Text, die jeweils mit einem einstelligen Typ beginnen, gefolgt von einem Gleichheitszeichen (`"="`), gefolgt von strukturiertem Text, der einen Wert oder eine Beschreibung umfasst, deren Format vom Typ abhängt. Die Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden im Allgemeinen als "_Buchstaben_-Zeilen" bezeichnet. Zum Beispiel haben Zeilen, die Medienbeschreibungen liefern, den Typ `"m"`, weshalb diese Zeilen als "m-Zeilen" bezeichnet werden.

### Weitere Informationen

Um mehr über SDP zu erfahren, schauen Sie sich die folgenden nützlichen Ressourcen an:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Register der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

## Mehrparteien-Videokonferenzen

In WebRTC-Peer-to-Peer-Netzwerken verhandeln die Peers geeignete Videocodecs und -ströme basierend auf Gerätefähigkeiten und Netzwerkbandbreite.
Jeder Sender sendet dann ("singlecastet") einen einzelnen Stream, der Videoinformationen an sein Peer-Gegenstück enthält.

Videokonferenzen zwischen mehreren Parteien sind komplexer, da die Peers unterschiedliche Fähigkeiten und Netzwerkbedingungen haben können: Ein bestimmter Videostream hinsichtlich Auflösung, Rate und Qualität, ist möglicherweise nicht für alle Empfänger geeignet, und gleichzeitig ist es nicht effizient oder skalierbar, dass ein Sender mehrere Streams an viele Empfänger generiert und sendet.

Der gebräuchlichste Ansatz zur Lösung dieser Probleme ist die Verwendung eines Zwischenservers, bekannt als _Selective Forwarding Unit_ (SFU) oder _Selective Forwarding Middlebox_ (SFM).
Sender geben Video so kodiert aus, dass die SFM einen geeigneten Videostream für jeden Empfänger selektiv weiterleiten kann.
Es gibt zwei Haupttechnologien, die von WebRTC für die Videokodierung in diesem Fall verwendet werden: Simulcast und skalierbare Videokodierung.

### Simulcast

_Simulcast_ sendet mehrere gleichzeitige Versionen derselben Quelle mit unterschiedlichen Auflösungen und Bitraten in separaten Streams.
Die SFM leitet den am besten geeigneten Stream an jeden Empfänger basierend auf deren Netzwerkbedingungen und Gerätefähigkeiten weiter.

Die SFM verlässt sich darauf, die Abhängigkeitsbeziehungen zwischen den Frames bestimmen zu können, wie zwischen einer Kette von Interframes bis zurück zum letzten Schlüsselbild, um Pakete weiterzuleiten und Simulcast-Ebenen zu wechseln, ohne dass ein Empfänger es bemerkt.

Die Codecs VP8 und VP9 können Frame-Abhängigkeitsinformationen im VP8-Payload-Deskriptor bzw. VP9-Payload-Deskriptor enthalten.
Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Aktuelle Browser-Implementierungen verwenden häufig den DD-Header für alle Codecs, da er codec-unabhängig ist, was die Implementierung der SFM vereinfachen kann.
Außerdem, da es sich um einen Teil des RTP-Headers und nicht der Nutzlast handelt, kann es in End-to-End-Verschlüsselungsszenarien verwendet werden.

### Skalierbare Videokodierung

[Scalable Video Coding (SVC)](https://w3c.github.io/webrtc-svc/) kodiert eine Videoquelle in einem einzelnen Stream mit mehreren Schichten, die selektiv dekodiert werden können, um Video mit bestimmten Auflösungen, Bitraten oder Qualitäten zu erhalten.
Eine SFM kann eine Teilmenge der Schichten weiterleiten, um einen Stream zu senden, der für das Netzwerk und das Gerät jedes Empfängers geeignet ist.

Beachten Sie, dass die Abhängigkeiten viel komplizierter sind als für die Auswahl von Streams zur Weiterleitung bei Verwendung von Simulcast (siehe die [Abhängigkeitsdiagramme](https://w3c.github.io/webrtc-svc/#dependencydiagrams*) in der SVC-Spezifikation für einen "Geschmack" der Komplexität).
Der SVC-Stream besteht aus einer Basisschicht, die ein Mindestmaß an Qualität bietet, und kann eine Reihe von Verbesserungsschichten enthalten, die unterschiedliche Bildraten ("temporale Skalierbarkeit"), erhöhte Auflösung ("räumliche Skalierbarkeit") und dieselbe Auflösung bei unterschiedlichen Bitraten ermöglichen.
Der VP8-Codec unterstützt nur temporale Schichten, während VP9 sowohl temporale als auch räumliche Schichten unterstützt.

Die Codecs VP8 und VP9 können Frame-Abhängigkeitsinformationen im VP8-Payload-Deskriptor bzw. VP9-Payload-Deskriptor enthalten.
Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Wie beim Simulcast verwenden aktuelle Browser-Implementierungen häufig den DD-Header für alle Codecs, die SVC unterstützen, um die Implementierung der SFM zu vereinfachen und da er End-to-End-Verschlüsselungsszenarien unterstützt.

Chrome 111 und spätere Versionen unterstützen SVC.
Firefox unterstützt SVC zum Zeitpunkt des Schreibens (um FF136) nicht.

### Dependency Descriptor RTP Header Extension

Die [Dependency Descriptor (DD) RTP Header Extension](https://aomediacodec.github.io/av1-rtp-spec/#43-dependency-descriptor-rtp-header-extension), definiert in der Spezifikation _RTP Payload Format For AV1 (v1.0)_, bietet eine codec-agnostische, flexible, effiziente und erweiterbare Möglichkeit, die Beziehungen zwischen Frames in einem mehrschichtigen Videostream zu beschreiben.

Diese können von einer SFM verwendet werden, um Pakete auszuwählen und weiterzuleiten, die für einen Empfänger bestimmte Schichten betreffen.
Da der Header eine echte Erweiterung ist, ist er nicht Teil der Nutzlast und somit in End-to-End-Verschlüsselungsszenarien (E2EE) für die SFM verfügbar.

Chrome und Firefox (136+) unterstützen den DD-Header.

### Von WebRTC unterstützte Codecs

Diese Informationen finden Sie in [Codecs used by WebRTC](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs).

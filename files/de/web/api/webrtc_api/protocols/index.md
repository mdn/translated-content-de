---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API aufgebaut ist.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das es Ihrem Webbrowser ermöglicht, Verbindungen mit Peers herzustellen. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktionieren würde. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse geben, wenn Ihr Gerät wie in den meisten Fällen keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers ermöglicht. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und eventuelle Einschränkungen Ihres Routers festzustellen, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients und der Info, ob der Client hinter dem NAT des Routers erreichbar ist, antwortet.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung, die einen STUN-Server einbezieht.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zuzuweisen. Ein Router hat eine öffentliche IP-Adresse und jedes mit dem Router verbundene Gerät hat eine private IP-Adresse. Anfragen werden von der privaten IP des Geräts zur öffentlichen IP des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP für jedes Gerät, können aber dennoch im Internet gefunden werden.

Einige Router haben Einschränkungen, wer eine Verbindung zu Geräten im Netzwerk herstellen kann. Das kann bedeuten, dass obwohl wir die öffentliche IP-Adresse gefunden haben, die der STUN-Server bereitgestellt hat, nicht jeder eine Verbindung aufbauen kann. In diesem Fall müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, setzen eine Einschränkung namens "Symmetric NAT" ein. Das bedeutet, der Router akzeptiert nur Verbindungen von Peers, mit denen Sie zuvor eine Verbindung hergestellt haben.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) dient dazu, die Symmetric NAT-Einschränkung zu umgehen, indem eine Verbindung zu einem TURN-Server aufgebaut und alle Informationen durch diesen Server geleitet werden. Sie würden eine Verbindung zu einem TURN-Server herstellen und allen Peers mitteilen, Pakete an diesen Server zu senden, der diese dann an Sie weiterleitet. Dies bringt natürlich einen gewissen Overhead mit sich, wird aber nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Nutzern einer WebRTC-Anwendung, die STUN- und TURN-Server einbezieht.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung der Multimedia-Inhalte der Verbindung wie Auflösung, Formate, Codecs, Verschlüsselung usw., sodass beide Peers sich verständigen können, sobald die Daten übertragen werden. Im Wesentlichen handelt es sich um die Metadaten zur Beschreibung der Inhalte und nicht um die Medieninhalte selbst.

Technisch gesehen ist SDP also kein richtiges Protokoll, sondern ein Datenformat, das verwendet wird, um Verbindungen zu beschreiben, die Medien zwischen Geräten teilen.

Die Dokumentation von SDP liegt weit außerhalb des Umfangs dieser Dokumentation; dennoch gibt es hier einige erwähnenswerte Punkte.

### Struktur

SDP besteht aus einer oder mehreren Zeilen UTF-8-Text, die jeweils mit einem einstelligen Typ beginnen, gefolgt von einem Gleichheitszeichen (`"="`) und strukturiertem Text, der einen Wert oder eine Beschreibung enthält, dessen Format vom Typ abhängt. Die Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden allgemein als "_letter_-Zeilen" bezeichnet. Zum Beispiel haben Zeilen, die Medienbeschreibungen liefern, den Typ `"m"`, daher werden diese Zeilen als "m-Zeilen" bezeichnet.

### Für weitere Informationen

Um mehr über SDP zu erfahren, sehen Sie sich die folgenden nützlichen Ressourcen an:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Registrierung der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

## Mehrparteien-Videokonferenzen

In WebRTC-Peer-to-Peer-Netzwerken verhandeln Peers geeignete Video-Codecs-/Streams basierend auf den Geräteeigenschaften und der Netzwerkbandbreite.
Jeder Sender sendet dann einen einzelnen Stream ("Singlecast") mit Videoinformationen an seinen Peerkollegen.

Videokonferenzen zwischen mehreren Teilnehmern sind komplexer, da die Peers unterschiedliche Funktionen und Netzbedingungen haben können: Ein bestimmter Videostream, Auflösung, Rate und Qualität passen möglicherweise nicht für alle Empfänger, und gleichzeitig ist es nicht effizient oder skalierbar, wenn ein Sender mehrere Streams für viele Empfänger erzeugt und sendet.

Der häufigste Ansatz, um diese Probleme zu lösen, ist die Verwendung eines Zwischenservers, bekannt als _Selective Forwarding Unit_ (SFU) oder _Selective Forwarding Middlebox_ (SFM).
Sender geben Videos so codiert aus, dass das SFM einen geeigneten Videostream für jeden Empfänger selektiv weiterleiten kann.
Für das Videocoding werden in diesem Fall hauptsächlich zwei Technologien von WebRTC verwendet: Simulcast und skalierbare Videocodierung.

### Simulcast

_Simulcast_ sendet mehrere gleichzeitige Versionen derselben Quelle mit unterschiedlichen Auflösungen und Bitraten in separaten Streams.
Das SFM leitet den für den jeweiligen Empfänger am besten geeigneten Stream basierend auf dessen Netzwerkbedingungen und Geräteeigenschaften weiter.

Das SFM stützt sich auf die Fähigkeit, Abhängigkeitsbeziehungen der Frames zu bestimmen, wie beispielsweise zwischen einer Kette von Interframes zurück zum letzten Keyframe, um Pakete weiterzuleiten und Simulcast-Ebenen zu wechseln, ohne dass ein Empfänger dies bemerkt.

VP8 und VP9 Codecs können Abhängigkeitsinformationen der Frames im VP8-Payload-Descriptor und VP9-Payload-Descriptor enthalten.
Für den AV1-Codec werden diese Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Aktuelle Browserimplementierungen verwenden in der Regel den DD-Header für alle Codecs, da dieser codec-agnostisch ist, was die Umsetzung des SFM vereinfachen kann.
Außerdem kann er, da er Teil des RTP-Headers und nicht des Payloads ist, in End-to-End-Verschlüsselungsszenarien genutzt werden.

### Skalierbare Videocodierung

[Scalable Video Coding (SVC)](https://w3c.github.io/webrtc-svc/) codiert eine Videoquelle in einem einzigen Stream, mit mehreren Ebenen, die selektiv dekodiert werden können, um Video mit bestimmten Auflösungen, Bitraten oder Qualitäten zu erhalten.
Ein SFM kann eine Teilmenge der Ebenen weiterleiten, um einen Stream zu senden, der für jedes Netzwerk und jedes Gerät des Empfängers geeignet ist.

Beachten Sie, dass die Abhängigkeiten viel komplizierter sind als bei der Auswahl von Streams, die bei der Nutzung von Simulcast weitergeleitet werden (siehe die [Abhängigkeitsdiagramme](https://w3c.github.io/webrtc-svc/#dependencydiagrams*) in der SVC-Spezifikation, um einen Eindruck von der Komplexität zu bekommen).
Der SVC-Stream besteht aus einer Basisschicht, die ein Mindestmaß an Qualität bietet, und kann eine Anzahl von Verbesserungsschichten enthalten, die unterschiedliche Bildraten ("temporale Skalierbarkeit"), erhöhte Auflösung ("räumliche Skalierbarkeit") und dieselbe Auflösung bei unterschiedlichen Bitraten bieten.
Der VP8-Codec unterstützt nur temporale Schichten, während VP9 sowohl temporale als auch räumliche Schichten unterstützt.

VP8 und VP9 Codecs können Abhängigkeitsinformationen der Frames im VP8-Payload-Descriptor und VP9-Payload-Descriptor enthalten.
Für den AV1-Codec werden diese Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Wie bei Simulcast verwenden aktuelle Browserimplementierungen in der Regel den DD-Header für alle Codecs, die SVC unterstützen, um die Umsetzung des SFM zu vereinfachen, und weil er End-to-End-Verschlüsselungsszenarien unterstützt.

Chrome 111 und höher unterstützt SVC.
Firefox unterstützt SVC zum Zeitpunkt des Schreibens (um FF136 herum) nicht.

### Dependency Descriptor RTP Header Extension

Die [Dependency Descriptor (DD) RTP Header Extension](https://aomediacodec.github.io/av1-rtp-spec/#43-dependency-descriptor-rtp-header-extension), definiert in der Spezifikation _RTP Payload Format For AV1 (v1.0)_, bietet eine codec-agnostische, flexible, effiziente und erweiterbare Möglichkeit, die Beziehungen zwischen Frames in einem mehrschichtigen Videostream zu beschreiben.

Diese können von einem SFM verwendet werden, um Pakete auszuwählen und weiterzuleiten, die für einen Empfänger bestimmte Ebenen enthalten. Da der Header eine echte Erweiterung ist, ist er nicht Teil des Payloads und steht daher dem SFM in End-to-End-Verschlüsselungs-(E2EE)-Szenarien zur Verfügung.

Chrome und Firefox (ab Version 136) unterstützen den DD-Header.

### Von WebRTC unterstützte Codecs

Diese Informationen finden Sie in [Codecs, die von WebRTC verwendet werden](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

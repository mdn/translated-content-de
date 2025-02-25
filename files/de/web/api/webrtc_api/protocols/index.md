---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: 5e3272a0eca109a48adeba7daf0a0d32d791bd69
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API basiert.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das es Ihrem Webbrowser ermöglicht, sich mit Peers zu verbinden. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktioniert. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse geben, wenn wie in den meisten Situationen Ihr Gerät keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung zu Peers zulässt. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu entdecken und eventuelle Einschränkungen in Ihrem Router zu bestimmen, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients und der Information antwortet, ob der Client hinter dem NAT des Routers zugänglich ist.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Verwendung eines STUN-Servers.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zu geben. Ein Router hat eine öffentliche IP-Adresse, und jedes Gerät, das mit dem Router verbunden ist, erhält eine private IP-Adresse. Anfragen werden von der privaten IP des Geräts zur öffentlichen IP des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP für jedes Gerät, können aber dennoch im Internet gefunden werden.

Einige Router haben Einschränkungen, wer Verbindungen zu Geräten im Netzwerk herstellen kann. Dies kann bedeuten, dass, obwohl wir die öffentliche IP-Adresse gefunden haben, die vom STUN-Server geliefert wurde, nicht jeder eine Verbindung herstellen kann. In dieser Situation müssen wir TURN verwenden.

## TURN

Einige NAT-verwendende Router setzen eine Einschränkung namens 'Symmetrisches NAT' ein. Dies bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, mit denen Sie zuvor verbunden waren.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) soll die Einschränkung des Symmetrischen NAT umgehen, indem eine Verbindung mit einem TURN-Server geöffnet und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung mit einem TURN-Server herstellen und allen Peers mitteilen, dass sie Pakete an den Server senden sollen, die dann an Sie weitergeleitet werden. Dies bringt offensichtlich einige Nachteile mit sich, daher wird es nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Verwendung von STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung der Multimedia-Inhalte der Verbindung, wie Auflösung, Formate, Codecs, Verschlüsselung usw., damit beide Peers einander verstehen können, sobald die Daten übertragen werden. Dies ist im Wesentlichen die Metadatenbeschreibung des Inhalts und nicht der Medieninhalt selbst.

Technisch gesehen ist SDP somit kein wirkliches Protokoll, sondern ein Datenformat, das verwendet wird, um Verbindungen zu beschreiben, die Medien zwischen Geräten teilen.

Die Dokumentation von SDP liegt weit außerhalb des Umfangs dieser Dokumentation; jedoch gibt es hier einige Dinge, die erwähnenswert sind.

### Struktur

SDP besteht aus einer oder mehreren Zeilen von UTF-8-Text, von denen jede mit einem einstelligen Typ beginnt, gefolgt von einem Gleichheitszeichen (`"="`), gefolgt von strukturiertem Text, der einen Wert oder eine Beschreibung umfasst, deren Format vom Typ abhängt. Die Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden im Allgemeinen als "_Buchstabentyp_-Zeilen" bezeichnet. Zum Beispiel haben Zeilen, die Medienbeschreibungen bereitstellen, den Typ `"m"`, daher werden diese Zeilen als "m-lines" bezeichnet.

### Für weitere Informationen

Um mehr über SDP zu erfahren, siehe die folgenden nützlichen Ressourcen:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Register der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

## Mehrparteien-Videokonferenzen

In WebRTC Peer-to-Peer-Netzwerken verhandeln Peers über geeignete Video-Codecs/Streams basierend auf Gerätefähigkeiten und Netzwerkbandbreite. Jeder Sender sendet dann ("singlecastet") einen einzigen Stream, der Videoinformationen an seinen Gegenüber-Peer enthält.

Videokonferenzen zwischen mehreren Parteien sind komplexer, weil die Peers unterschiedliche Fähigkeiten und Netzwerkbedingungen haben können: Eine bestimmte Video-Stream-Auflösung, -Rate und -Qualität passt möglicherweise nicht zu allen Empfängern und gleichzeitig ist es weder effizient noch skalierbar, für einen Sender mehrere Streams zu generieren und an viele Empfänger zu senden.

Der häufigste Ansatz zur Lösung dieser Probleme ist die Verwendung eines zwischengeschalteten Servers, bekannt als _Selective Forwarding Unit_ (SFU) oder _Selective Forwarding Middlebox_ (SFM). Absender geben Video in einer Weise aus, dass das SFM selektiv einen geeigneten Videostream für jeden Empfänger weiterleiten kann. Es gibt zwei Haupttechnologien, die von WebRTC zur Codierung von Videos in diesem Fall verwendet werden: Simulcast und skalierbare Videocodierung.

### Simulcast

_Simulcast_ sendet mehrere gleichzeitige Versionen derselben Quelle mit unterschiedlichen Auflösungen und Bitraten in separaten Streams. Das SFM leitet den am besten geeigneten Stream an jeden Empfänger basierend auf seinen Netzwerkbedingungen und Gerätefähigkeiten weiter.

Das SFM verlässt sich auf die Fähigkeit, Beziehungen zwischen Rahmenabhängigkeiten zu bestimmen, wie beispielsweise zwischen einer Interframe-Kette zurück bis zum letzten Keyframe, um Pakete weiterzuleiten und Simulcast-Schichten zu wechseln, ohne dass ein Empfänger dies bemerkt.

VP8- und VP9-Codecs können Rahmenabhängigkeitsinformationen im VP8-Payload-Descriptor bzw. VP9-Payload-Descriptor enthalten. Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Aktuelle Browserimplementierungen verwenden häufig den DD-Header für alle Codecs, da er codec-agnostisch ist, was die SFM-Implementierung vereinfachen kann. Zudem kann er, da er Teil des RTP-Headers und nicht der Nutzlast ist, in End-to-End-Verschlüsselungsszenarien verwendet werden.

### Skalierbare Videocodierung

[Scalable Video Coding (SVC)](https://www.w3.org/TR/webrtc-svc/) codiert eine Videoquelle in einem einzigen Stream mit mehreren Schichten, die selektiv decodiert werden können, um Video mit bestimmten Auflösungen, Bitrate oder Qualität zu erhalten. Ein SFM kann ein Teilset dieser Schichten weiterleiten, um einen Stream zu senden, der für das Netzwerk und das Gerät jedes Empfängers geeignet ist.

Beachten Sie, dass die Abhängigkeiten weitaus komplizierter sind als beim Auswählen von Streams zur Weiterleitung bei Verwendung von Simulcast (siehe die [Abhängigkeitsdiagramme](https://www.w3.org/TR/webrtc-svc/#dependencydiagrams*) in der SVC-Spezifikation für einen Eindruck der Komplexität). Der SVC-Stream besteht aus einer Basisschicht, die ein Mindestmaß an Qualität bietet, und kann eine Anzahl von Verbesserungsschichten enthalten, die unterschiedliche Bildraten ("temporale Skalierbarkeit"), erhöhte Auflösung ("räumliche Skalierbarkeit") und dieselbe Auflösung bei unterschiedlichen Bitraten ermöglichen. Der VP8-Codec unterstützt nur temporale Schichten, während VP9 sowohl temporale als auch räumliche Schichten unterstützt.

VP8- und VP9-Codecs können Rahmenabhängigkeitsinformationen im VP8-Payload-Descriptor bzw. VP9-Payload-Descriptor enthalten. Für den AV1-Codec werden die Informationen in der [Dependency Descriptor (DD) RTP Header Extension](#dependency_descriptor_rtp_header_extension) gesendet.

Wie bei Simulcast verwenden aktuelle Browserimplementierungen häufig den DD-Header für alle Codecs, die SVC unterstützen, um die SFM-Implementierung zu vereinfachen und da er End-to-End-Verschlüsselungsszenarien unterstützt.

Chrome 111 und später unterstützt SVC. Firefox unterstützt SVC zum Zeitpunkt des Schreibens (um FF136) nicht.

### Dependency Descriptor RTP Header Extension

Die [Dependency Descriptor (DD) RTP Header Extension](https://aomediacodec.github.io/av1-rtp-spec/#43-dependency-descriptor-rtp-header-extension), definiert in der Spezifikation _RTP Payload Format For AV1 (v1.0)_, bietet eine codec-agnostische, flexible, effiziente und erweiterbare Möglichkeit, die Beziehungen zwischen Rahmen in einem mehrschichtigen Videostream zu beschreiben.

Diese können von einem SFM verwendet werden, um Pakete auszuwählen und weiterzuleiten, die für die Schichten bestimmt sind, die für einen Empfänger vorgesehen sind. Da der Header eine echte Erweiterung ist, ist er nicht Teil der Nutzlast und daher in End-to-End-Verschlüsselungsszenarien (E2EE) weiterhin für das SFM verfügbar.

Chrome und Firefox (136+) unterstützen den DD-Header.

### Von WebRTC unterstützte Codecs

Diese Informationen finden Sie in [Von WebRTC verwendete Codecs](/de/docs/Web/Media/Guides/Formats/WebRTC_codecs)

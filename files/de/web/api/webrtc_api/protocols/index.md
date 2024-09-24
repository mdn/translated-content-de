---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: c07322a82a6027c7681eba49ef0a73c1fab365f4
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC API basiert.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das es Ihrem Webbrowser ermöglicht, Verbindungen mit Peers herzustellen. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktioniert. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse geben, wenn Ihr Gerät so wie in den meisten Situationen keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers zulässt. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und Einschränkungen in Ihrem Router festzustellen, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients antwortet und darüber informiert, ob der Client hinter dem NAT des Routers zugänglich ist.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Einbeziehung eines STUN-Servers.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zuzuweisen. Ein Router wird eine öffentliche IP-Adresse haben und jedes mit dem Router verbundene Gerät wird eine private IP-Adresse haben. Anfragen werden von der privaten IP des Geräts zur öffentlichen IP des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP-Adresse für jedes Gerät, können aber dennoch im Internet entdeckt werden.

Einige Router haben Einschränkungen, wer sich mit Geräten im Netzwerk verbinden kann. Das kann bedeuten, dass selbst wenn wir die öffentliche IP-Adresse haben, die vom STUN-Server gefunden wurde, nicht jeder eine Verbindung aufbauen kann. In dieser Situation müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, setzen eine Einschränkung namens "Symmetrisches NAT" ein. Dies bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, zu denen Sie zuvor eine Verbindung hergestellt haben.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) soll die Einschränkung des Symmetrischen NAT umgehen, indem eine Verbindung mit einem TURN-Server geöffnet wird und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung mit einem TURN-Server herstellen und allen Peers mitteilen, Pakete an den Server zu senden, die dann an Sie weitergeleitet werden. Dies bringt offensichtlich einen gewissen Overhead mit sich, weshalb TURN nur verwendet wird, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Einbeziehung von STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung des Multimedia-Inhalts der Verbindung, wie Auflösung, Formate, Codecs, Verschlüsselung usw., damit beide Peers sich verstehen können, sobald die Datenübertragung beginnt. Im Wesentlichen handelt es sich um die Metadaten, die den Inhalt beschreiben, nicht um den Medieninhalt selbst.

Technisch gesehen ist SDP also kein echtes Protokoll, sondern ein Datenformat zur Beschreibung einer Verbindung, die Medien zwischen Geräten austauscht.

Die Dokumentation von SDP liegt weit außerhalb des Umfangs dieser Dokumentation; es gibt jedoch einige Punkte, die hier erwähnenswert sind.

### Struktur

SDP besteht aus einer oder mehreren Zeilen von UTF-8-Text, die jeweils mit einem einbuchstabigen Typ beginnen, gefolgt von einem Gleichheitszeichen (`"="`), gefolgt von strukturiertem Text, der einen Wert oder eine Beschreibung enthält, dessen Format vom Typ abhängt. Die Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden im Allgemeinen als "_Buchstabe_-Zeilen" bezeichnet. Beispielsweise haben Zeilen, die Medienbeschreibungen liefern, den Typ `"m"`, weshalb diese Zeilen als "m-Zeilen" bezeichnet werden.

### Weitere Informationen

Um mehr über SDP zu erfahren, sehen Sie sich die folgenden nützlichen Ressourcen an:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Register der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

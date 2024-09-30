---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: c07322a82a6027c7681eba49ef0a73c1fab365f4
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC-API aufbaut.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das Ihrem Webbrowser ermöglicht, eine Verbindung mit Peers herzustellen. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktionieren wird. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse geben, wenn Ihr Gerät, wie in den meisten Situationen, keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers zulässt. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und festzustellen, ob es Einschränkungen in Ihrem Router gibt, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients antwortet und angibt, ob der Client hinter dem NAT des Routers erreichbar ist.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung mit einem STUN-Server.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zu geben. Ein Router hat eine öffentliche IP-Adresse und jedes Gerät, das mit dem Router verbunden ist, hat eine private IP-Adresse. Anfragen werden von der privaten IP des Geräts zur öffentlichen IP des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP für jedes Gerät, können aber trotzdem im Internet entdeckt werden.

Einige Router haben Einschränkungen, wer sich mit Geräten im Netzwerk verbinden kann. Das kann bedeuten, dass auch wenn wir die vom STUN-Server gefundene öffentliche IP-Adresse haben, nicht jeder eine Verbindung herstellen kann. In dieser Situation müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, implementieren eine Einschränkung, die 'Symmetric NAT' genannt wird. Dies bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, mit denen Sie zuvor verbunden waren.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) ist dazu gedacht, die Einschränkung von Symmetric NAT zu umgehen, indem eine Verbindung mit einem TURN-Server geöffnet und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung mit einem TURN-Server herstellen und allen Peers mitteilen, Pakete an den Server zu senden, die dann an Sie weitergeleitet werden. Dies bringt offensichtlich etwas Overhead mit sich, daher wird es nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung mit STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung von Multimedia-Inhalten der Verbindung wie Auflösung, Formate, Codecs, Verschlüsselung usw., damit beide Peers sich verstehen können, sobald die Datenübertragung beginnt. Dies ist im Wesentlichen die Metadatenbeschreibung des Inhalts und nicht der Mediendaten selbst.

Technisch gesehen ist SDP also kein echtes Protokoll, sondern ein Datenformat zur Beschreibung der Verbindung, die Medien zwischen Geräten teilt.

Die Dokumentation von SDP liegt weit außerhalb des Umfangs dieser Dokumentation; jedoch gibt es einige Dinge, die hier erwähnt werden sollten.

### Struktur

SDP besteht aus einer oder mehreren Zeilen UTF-8-Text, die jeweils mit einem ein Zeichen langen Typ beginnen, gefolgt von einem Gleichheitszeichen (`"="`), gefolgt von strukturiertem Text, der einen Wert oder eine Beschreibung darstellt, deren Format vom Typ abhängt. Die Textzeilen, die mit einem gegebenen Buchstaben beginnen, werden allgemein als "_letter_-lines" bezeichnet. Zum Beispiel haben Zeilen, die Medienbeschreibungen liefern, den Typ `"m"`, weshalb diese Zeilen als "m-lines" bezeichnet werden.

### Für weitere Informationen

Um mehr über SDP zu erfahren, schauen Sie sich die folgenden nützlichen Ressourcen an:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Registry der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

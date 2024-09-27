---
title: Einführung in WebRTC-Protokolle
slug: Web/API/WebRTC_API/Protocols
l10n:
  sourceCommit: c07322a82a6027c7681eba49ef0a73c1fab365f4
---

{{DefaultAPISidebar("WebRTC")}}

Dieser Artikel führt in die Protokolle ein, auf denen die WebRTC API aufgebaut ist.

## ICE

[Interactive Connectivity Establishment (ICE)](https://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) ist ein Framework, das es Ihrem Webbrowser ermöglicht, Verbindungen mit Peers herzustellen. Es gibt viele Gründe, warum eine direkte Verbindung von Peer A zu Peer B nicht funktionieren würde. Es muss Firewalls umgehen, die das Öffnen von Verbindungen verhindern würden, Ihnen eine eindeutige Adresse zuweisen, wenn Ihr Gerät, wie in den meisten Situationen, keine öffentliche IP-Adresse hat, und Daten über einen Server weiterleiten, wenn Ihr Router keine direkte Verbindung mit Peers zulässt. ICE verwendet STUN- und/oder TURN-Server, um dies zu erreichen, wie unten beschrieben.

## STUN

[Session Traversal Utilities for NAT (STUN)](https://en.wikipedia.org/wiki/STUN) ist ein Protokoll, um Ihre öffentliche Adresse zu ermitteln und festzustellen, ob es Einschränkungen in Ihrem Router gibt, die eine direkte Verbindung mit einem Peer verhindern würden.

Der Client sendet eine Anfrage an einen STUN-Server im Internet, der mit der öffentlichen Adresse des Clients antwortet und mitteilt, ob der Client hinter dem NAT des Routers erreichbar ist.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Einbeziehung eines STUN-Servers.](webrtc-stun.png)

## NAT

[Network Address Translation (NAT)](https://en.wikipedia.org/wiki/Network_address_translation) wird verwendet, um Ihrem Gerät eine öffentliche IP-Adresse zu geben. Ein Router hat eine öffentliche IP-Adresse und jedes mit dem Router verbundene Gerät hat eine private IP-Adresse. Anfragen werden von der privaten IP-Adresse des Geräts zur öffentlichen IP-Adresse des Routers mit einem eindeutigen Port übersetzt. Auf diese Weise benötigen Sie keine eindeutige öffentliche IP-Adresse für jedes Gerät, können aber dennoch im Internet entdeckt werden.

Einige Router haben Einschränkungen darüber, wer sich mit Geräten im Netzwerk verbinden kann. Dies kann bedeuten, dass, obwohl wir die öffentliche IP-Adresse vom STUN-Server erhalten haben, nicht jeder eine Verbindung erstellen kann. In dieser Situation müssen wir TURN verwenden.

## TURN

Einige Router, die NAT verwenden, setzen eine Einschränkung namens 'Symmetrisches NAT'. Das bedeutet, dass der Router nur Verbindungen von Peers akzeptiert, mit denen Sie zuvor verbunden waren.

[Traversal Using Relays around NAT (TURN)](https://en.wikipedia.org/wiki/TURN) soll die Symmetrische NAT-Einschränkung umgehen, indem eine Verbindung mit einem TURN-Server geöffnet wird und alle Informationen über diesen Server weitergeleitet werden. Sie würden eine Verbindung mit einem TURN-Server herstellen und allen Peers mitteilen, Pakete an den Server zu senden, die dann an Sie weitergeleitet werden. Dies bringt offensichtlich einen gewissen Overhead mit sich und wird daher nur verwendet, wenn es keine anderen Alternativen gibt.

![Eine Interaktion zwischen zwei Benutzern einer WebRTC-Anwendung unter Einbeziehung von STUN- und TURN-Servern.](webrtc-turn.png)

## SDP

[Session Description Protocol (SDP)](https://en.wikipedia.org/wiki/Session_Description_Protocol) ist ein Standard zur Beschreibung der Multimedia-Inhalte der Verbindung wie Auflösung, Formate, Codecs, Verschlüsselung usw., damit beide Peers einander verstehen können, sobald die Daten übertragen werden. Im Wesentlichen handelt es sich hierbei um die Metadaten, die den Inhalt beschreiben und nicht um die Medieninhalte selbst.

Technisch gesehen ist SDP also kein echtes Protokoll, sondern ein Datenformat zur Beschreibung der Verbindung, die Medien zwischen Geräten teilt.

Die Dokumentation von SDP liegt weit außerhalb des Umfangs dieser Dokumentation; es gibt jedoch ein paar Dinge, die hier erwähnenswert sind.

### Struktur

SDP besteht aus einer oder mehreren Zeilen von UTF-8-Text, die jeweils mit einem einstelligen Typ beginnen, gefolgt von einem Gleichheitszeichen (`"="`), gefolgt von strukturiertem Text, der einen Wert oder eine Beschreibung darstellt, dessen Format vom Typ abhängt. Die Textzeilen, die mit einem bestimmten Buchstaben beginnen, werden allgemein als "_Buchstabe_-Zeilen" bezeichnet. Zum Beispiel haben Zeilen, die Medienbeschreibungen bereitstellen, den Typ `"m"`, daher werden diese Zeilen als "m-Zeilen" bezeichnet.

### Weitere Informationen

Um mehr über SDP zu erfahren, sehen Sie sich die folgenden nützlichen Ressourcen an:

- Spezifikation: {{RFC(8866, "SDP: Session Description Protocol")}}
- [IANA-Register der SDP-Parameter](https://www.iana.org/assignments/sip-parameters/sip-parameters.xhtml)

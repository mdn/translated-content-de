---
title: Grundlagen von HTTP
slug: conflicting/Web/HTTP
original_slug: Web/HTTP/Basics_of_HTTP
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{HTTPSidebar}}

HTTP ist ein erweiterbares Protokoll, das auf Konzepten wie Ressourcen und Uniform Resource Identifiers (URIs), einfacher Nachrichtenstruktur und Client-Server-Kommunikationsfluss basiert. Auf diesen grundlegenden Konzepten aufbauend wurden im Laufe der Jahre zahlreiche Erweiterungen entwickelt, die aktualisierte Funktionalitäten und Semantiken mit neuen HTTP-Methoden oder Headern hinzufügen.

## Artikel

- [Überblick über HTTP](/de/docs/Web/HTTP/Overview)
  - : Beschreibt, was HTTP ist und seine Rolle in der Web-Architektur, einschließlich seiner Position im Protokoll-Stack.
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP)
  - : HTTP wurde in den frühen 1990er Jahren entwickelt und mehrmals erweitert. Dieser Artikel behandelt seine Geschichte und beschreibt HTTP/0.9, HTTP/1.0, HTTP/1.1 und das moderne HTTP/2 sowie die im Laufe der Jahre eingeführten Neuerungen.
- [URIs](/de/docs/Web/URI)
  - : URIs werden verwendet, um Ressourcen im Web zu lokalisieren und können als Ziele von HTTP-Anfragen genutzt werden.
- [MIME-Typen](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
  - : Seit HTTP/1.0 können verschiedene Arten von Inhalten übertragen werden. Dieser Artikel erklärt, wie dies mit Hilfe des {{HTTPHeader("Content-Type")}} Headers und des MIME-Standards erreicht wird.
- [Ablauf einer HTTP-Sitzung](/de/docs/Web/HTTP/Session)
  - : Dieser Artikel beschreibt eine typische HTTP-Sitzung; d.h. was passiert, wenn Sie einem Link folgen oder ein Bild in eine Webseite laden.
- [HTTP-Nachrichten](/de/docs/Web/HTTP/Messages)
  - : HTTP-Nachrichten, die während Anfragen oder Antworten übertragen werden, haben eine sehr klare Struktur. Dieser einführende Artikel beschreibt diese Struktur, ihren Zweck und ihre Möglichkeiten.
- [Rahmen- und Nachrichtenstruktur in HTTP/2](/de/docs/Web/HTTP/Frame_and_message_structure_in_HTTP_2)
  - : HTTP/2 kapselt HTTP/1.x Nachrichten in einem binären Rahmen. Dieser Artikel erklärt die Rahmenstruktur, ihren Zweck und die Art und Weise, wie sie codiert wird.
- [Verwaltung von Verbindungen in HTTP/1.x](/de/docs/Web/HTTP/Connection_management_in_HTTP_1.x)
  - : HTTP/1.1 war die erste Version von HTTP, die persistente Verbindungen und Pipelining unterstützte. Dieser Artikel erklärt beide Konzepte.
- [Verwaltung von Verbindungen in HTTP/2](/de/docs/Web/HTTP/Connection_management_in_HTTP_2)
  - : HTTP/2 hat die Art und Weise, wie Verbindungen erstellt und verwaltet werden, komplett überarbeitet. Dieser Artikel erklärt, wie HTTP-Rahmen Multiplexing ermöglichen und das „Head-of-Line“-Blockierungsproblem früherer HTTP-Versionen lösen.
- [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
  - : HTTP führt eine Reihe von Headern ein, beginnend mit [`Accept`](/de/docs/Web/HTTP/Headers/Accept), als Möglichkeit für einen Browser, das bevorzugte Format, die bevorzugte Sprache oder die bevorzugte Codierung bekanntzugeben. Dieser Artikel erklärt, wie diese Ankündigung erfolgt, wie der Server erwartet wird zu reagieren und wie er die am besten geeignete Antwort auswählt.

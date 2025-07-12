---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**UDP** (User Datagram Protocol) ist ein lang bestehendes {{Glossary("protocol", "Protokoll")}}, das zusammen mit {{Glossary("IPv6", "IP")}} verwendet wird, wenn Übertragungsgeschwindigkeit und Effizienz wichtiger sind als Sicherheit und Zuverlässigkeit.

UDP verwendet ein einfaches [verbindungsloses Kommunikationsmodell](https://en.wikipedia.org/wiki/Connectionless_communication) mit einem Minimum an Protokollmechanismen. UDP bietet [Prüfsummen](https://en.wikipedia.org/wiki/Checksum) für die Datenintegrität und [Portnummern](https://en.wikipedia.org/wiki/Port_numbers) zur Adressierung verschiedener Funktionen am Ursprung und Ziel des Datagramms. Es gibt keine [Handshake](https://en.wikipedia.org/wiki/Handshaking)-Dialoge, wodurch das Programm des Nutzers der möglichen [Unzuverlässigkeit](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>) des zugrunde liegenden Netzwerks ausgesetzt wird; Es gibt keine Garantie für die Lieferung, Reihenfolge oder Duplikatschutz. Wenn Fehlerkorrekturfunktionen auf der Ebene der Netzwerkschnittstelle benötigt werden, kann eine Anwendung das [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) oder das [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) verwenden, die für diesen Zweck entwickelt wurden.

UDP ist geeignet für Zwecke, bei denen Fehlerprüfung und -korrektur entweder nicht notwendig sind oder in der Anwendung durchgeführt werden. UDP vermeidet den Overhead solcher Verarbeitung im [Protokoll-Stack](https://en.wikipedia.org/wiki/Protocol_stack). Zeitkritische Anwendungen verwenden häufig UDP, weil das Abwerfen von Paketen einer Wartezeit auf Pakete, die aufgrund von [Wiederübertragung](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>) verzögert sind, vorzuziehen ist, was in einem [Echtzeitsystem](https://en.wikipedia.org/wiki/Real-time_system) möglicherweise keine Option ist.

## Siehe auch

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) auf Wikipedia
- [Spezifikation](https://datatracker.ietf.org/doc/html/rfc768)

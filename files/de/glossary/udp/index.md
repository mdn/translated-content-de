---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

**UDP** (User Datagram Protocol) ist ein langjähriges {{Glossary("protocol", "Protokoll")}}, das zusammen mit {{Glossary("IPv6", "IP")}} verwendet wird, um Daten zu senden, wenn Übertragungsgeschwindigkeit und Effizienz wichtiger sind als Sicherheit und Zuverlässigkeit.

UDP verwendet ein einfaches [verbindungsloses Kommunikationsmodell](https://en.wikipedia.org/wiki/Connectionless_communication) mit einem Minimum an Protokollmechanismen. UDP bietet [Prüfsummen](https://en.wikipedia.org/wiki/Checksum) für die Datenintegrität und [Portnummern](https://en.wikipedia.org/wiki/Port_numbers) zur Adressierung verschiedener Funktionen an der Quelle und am Ziel des Datagramms. Es gibt keine [Handshake-Dialoge](https://en.wikipedia.org/wiki/Handshaking), sodass das Benutzerprogramm möglichen [Unzuverlässigkeiten](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>) des zugrunde liegenden Netzwerks ausgesetzt ist; es gibt keine Garantie für Lieferung, Reihenfolge oder Duplikatschutz. Wenn Fehlerkorrektureinrichtungen auf der Netzwerkschnittstellenebene erforderlich sind, kann eine Anwendung das [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) oder das [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) verwenden, die für diesen Zweck entwickelt wurden.

UDP eignet sich für Zwecke, bei denen Fehlerprüfung und -korrektur entweder nicht erforderlich sind oder in der Anwendung durchgeführt werden; UDP vermeidet den Overhead einer solchen Verarbeitung im [Protokoll-Stack](https://en.wikipedia.org/wiki/Protocol_stack). Zeitkritische Anwendungen verwenden oft UDP, da das Verwerfen von Paketen vorzuziehen ist gegenüber dem Warten auf Pakete, die aufgrund von [Wiederübertragung](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>) verzögert werden, was in einem [Echtzeitsystem](https://en.wikipedia.org/wiki/Real-time_system) möglicherweise keine Option ist.

## Siehe auch

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) auf Wikipedia
- [Spezifikation](https://datatracker.ietf.org/doc/html/rfc768)

---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**UDP** (User Datagram Protocol) ist ein seit langem bestehendes {{glossary("protocol", "Protokoll")}}, das zusammen mit {{glossary("IPv6","IP")}} verwendet wird, um Daten zu senden, wenn Übertragungsgeschwindigkeit und Effizienz wichtiger sind als Sicherheit und Zuverlässigkeit.

UDP nutzt ein einfaches [verbindungsloses Kommunikationsmodell](https://en.wikipedia.org/wiki/Connectionless_communication) mit minimalem Protokollmechanismus. UDP bietet [Prüfsummen](https://en.wikipedia.org/wiki/Checksum) zur Datenintegrität und [Portnummern](https://en.wikipedia.org/wiki/Port_numbers) zur Adressierung verschiedener Funktionen am Quell- und Zielort des Datagramms. Es gibt keine [Handshaking](https://en.wikipedia.org/wiki/Handshaking)-Dialoge, wodurch das Programm des Nutzers jeglicher [Unzuverlässigkeit](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>) des darunterliegenden Netzwerks ausgesetzt ist; Es gibt keine Garantie für Lieferung, Reihenfolge oder Duplikatenschutz. Wenn Fehlerkorrekturfunktionen auf der Netzwerkschnittstellenebene benötigt werden, kann eine Anwendung das [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) oder [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) verwenden, die für diesen Zweck entwickelt wurden.

UDP eignet sich für Zwecke, bei denen Fehlerprüfung und -korrektur entweder nicht notwendig sind oder in der Anwendung durchgeführt werden; UDP vermeidet den Overhead einer solchen Verarbeitung im [Protokollstapel](https://en.wikipedia.org/wiki/Protocol_stack). Zeitkritische Anwendungen verwenden häufig UDP, da es vorzuziehen ist, Pakete zu verwerfen, anstatt auf Pakete zu warten, die aufgrund von [Retransmission](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>) verzögert wurden, was in einem [Echtzeitsystem](https://en.wikipedia.org/wiki/Real-time_system) möglicherweise keine Option ist.

## Siehe auch

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) auf Wikipedia
- [Spezifikation](https://datatracker.ietf.org/doc/html/rfc768)

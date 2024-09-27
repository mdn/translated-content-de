---
title: UDP (User Datagram Protocol)
slug: Glossary/UDP
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**UDP** (User Datagram Protocol) ist ein langjähriges [Protokoll](/de/docs/Glossary/protocol), das zusammen mit [IP](/de/docs/Glossary/IPv6) verwendet wird, um Daten zu senden, wenn Übertragungsgeschwindigkeit und Effizienz wichtiger sind als Sicherheit und Zuverlässigkeit.

UDP verwendet ein einfaches [verbindungsloses Kommunikationsmodell](https://en.wikipedia.org/wiki/Connectionless_communication) mit einem Minimum an Protokollmechanismen. UDP bietet [Prüfsummen](https://en.wikipedia.org/wiki/Checksum) für die Datenintegrität und [Portnummern](https://en.wikipedia.org/wiki/Port_numbers) zur Adressierung verschiedener Funktionen an der Quelle und am Ziel des Datagramms. Es gibt keine [Handshake-Dialoge](https://en.wikipedia.org/wiki/Handshaking), daher ist das Benutzerprogramm anfällig für jede [Unzuverlässigkeit](<https://en.wikipedia.org/wiki/Reliability_(computer_networking)>) des zugrunde liegenden Netzwerks; Es gibt keine Garantie für Lieferung, Reihenfolge oder Duplikatschutz. Wenn Fehlerkorrektureinrichtungen auf der Netzwerkschnittstellenebene benötigt werden, kann eine Anwendung das [Transmission Control Protocol](https://en.wikipedia.org/wiki/Transmission_Control_Protocol) (TCP) oder das [Stream Control Transmission Protocol](https://en.wikipedia.org/wiki/Stream_Control_Transmission_Protocol) (SCTP) verwenden, die für diesen Zweck entwickelt wurden.

UDP eignet sich für Zwecke, bei denen Fehlerprüfung und -korrektur entweder nicht notwendig sind oder in der Anwendung durchgeführt werden; UDP vermeidet den Aufwand einer solchen Verarbeitung im [Protokollstapel](https://en.wikipedia.org/wiki/Protocol_stack). Zeitkritische Anwendungen nutzen oft UDP, da es vorzuziehen ist, Pakete fallen zu lassen, anstatt auf aufgrund von [Neusendungen](<https://en.wikipedia.org/wiki/Retransmission_(data_networks)>) verzögerte Pakete zu warten, was in einem [Echtzeitsystem](https://en.wikipedia.org/wiki/Real-time_system) möglicherweise keine Option ist.

## Siehe auch

- [User Datagram Protocol](https://en.wikipedia.org/wiki/User_Datagram_Protocol) auf Wikipedia
- [Spezifikation](https://datatracker.ietf.org/doc/html/rfc768)

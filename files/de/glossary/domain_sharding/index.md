---
title: Domain-Sharding
slug: Glossary/Domain_sharding
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Browser begrenzen die Anzahl aktiver Verbindungen für jede Domain. Um gleichzeitige Downloads von Ressourcen zu ermöglichen, die dieses Limit überschreiten, teilt das **Domain-Sharding** Inhalte auf mehrere Subdomains auf. Wenn mehrere Domains verwendet werden, um mehrere Ressourcen zu bedienen, können Browser mehr Ressourcen gleichzeitig herunterladen, was zu einer schnelleren Ladezeit der Seite und einer verbesserten Benutzererfahrung führt.

Das Problem beim Domain-Sharding in Bezug auf die Leistung sind die Kosten zusätzlicher DNS-Lookups für jede Domain und der Overhead beim Aufbau jeder TCP-Verbindung.

Die initiale Antwort auf eine HTTP-Anfrage ist in der Regel eine HTML-Datei, die andere Ressourcen wie JavaScript, CSS, Bilder und andere Mediendateien auflistet, die heruntergeladen werden müssen. Da Browser die Anzahl aktiver Verbindungen pro Domain begrenzen, könnte das Bereitstellen aller erforderlichen Ressourcen von einer einzigen Domain langsam sein, da die Ressourcen nacheinander heruntergeladen werden müssen. Beim Domain-Sharding werden die erforderlichen Downloads von mehr als einer Domain bereitgestellt, sodass der Browser benötigte Ressourcen gleichzeitig herunterladen kann. Mehrere Domains sind jedoch ein Anti-Pattern, da DNS-Lookups die anfänglichen Ladezeiten verlangsamen.

HTTP2 unterstützt unbegrenzte gleichzeitige Anfragen, wodurch Domain-Sharding überflüssig wird, wenn HTTP/2 aktiviert ist.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("DNS", "DNS")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}

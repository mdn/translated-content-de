---
title: Domain-Sharding
slug: Glossary/Domain_sharding
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Browser begrenzen die Anzahl aktiver Verbindungen pro Domain. Um gleichzeitige Downloads von Inhalten, die dieses Limit überschreiten, zu ermöglichen, teilt das **Domain-Sharding** Inhalte auf mehrere Subdomains auf. Wenn mehrere Domains verwendet werden, um verschiedene Assets bereitzustellen, können Browser mehr Ressourcen gleichzeitig herunterladen, was zu einer schnelleren Ladezeit der Seite und einer verbesserten Benutzererfahrung führt.

Das Problem beim Domain-Sharding in Bezug auf die Leistung besteht in den Kosten zusätzlicher DNS-Lookups für jede Domain und dem Overhead, der bei der Einrichtung jeder TCP-Verbindung entsteht.

Die anfängliche Antwort auf eine HTTP-Anfrage ist im Allgemeinen eine HTML-Datei, die andere Ressourcen wie JavaScript, CSS, Bilder und andere Mediendateien auflistet, die heruntergeladen werden müssen. Da Browser die Anzahl aktiver Verbindungen pro Domain begrenzen, könnte das Bereitstellen aller erforderlichen Ressourcen von einer einzelnen Domain langsam sein, da die Inhalte nacheinander heruntergeladen werden müssen. Mit Domain-Sharding werden die erforderlichen Downloads von mehr als einer Domain bereitgestellt, sodass der Browser die benötigten Ressourcen gleichzeitig herunterladen kann. Mehrere Domains zu verwenden, ist jedoch ein Anti-Pattern, da DNS-Lookups die anfänglichen Ladezeiten verlangsamen.

HTTP2 unterstützt unbegrenzte gleichzeitige Anfragen, wodurch Domain-Sharding bei aktiviertem HTTP/2 eine veraltete Voraussetzung ist.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("TLS")}}
  - {{Glossary("DNS")}}
  - {{Glossary("HTTP 2", "HTTP/2")}}

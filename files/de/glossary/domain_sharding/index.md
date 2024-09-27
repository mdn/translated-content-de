---
title: Domain Sharding
slug: Glossary/Domain_sharding
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Browser begrenzen die Anzahl der aktiven Verbindungen pro Domain. Um gleichzeitige Downloads von Ressourcen zu ermöglichen, die dieses Limit überschreiten, teilt das **Domain Sharding** Inhalte auf mehrere Subdomains auf. Wenn mehrere Domains genutzt werden, um mehrere Ressourcen bereitzustellen, können Browser mehr Ressourcen gleichzeitig herunterladen, was zu einer schnelleren Ladezeit der Seite und einer verbesserten Benutzererfahrung führt.

Das Problem beim Domain Sharding in Bezug auf die Leistung ist die Kosten für zusätzliche DNS-Abfragen für jede Domain und der Overhead beim Aufbau jeder TCP-Verbindung.

Die anfängliche Antwort auf eine HTTP-Anfrage ist in der Regel eine HTML-Datei, die andere Ressourcen wie JavaScript, CSS, Bilder und andere Mediendateien auflistet, die heruntergeladen werden müssen. Da Browser die Anzahl der aktiven Verbindungen pro Domain beschränken, könnte die Bereitstellung aller benötigten Ressourcen von einer einzigen Domain aus langsam sein, da die Ressourcen nacheinander heruntergeladen werden müssen. Mit Domain Sharding werden die erforderlichen Downloads von mehr als einer Domain bereitgestellt, was dem Browser ermöglicht, benötigte Ressourcen gleichzeitig herunterzuladen. Mehrere Domains sind jedoch ein Anti-Pattern, da DNS-Abfragen die anfänglichen Ladezeiten verlangsamen.

HTTP2 unterstützt unbegrenzte gleichzeitige Anfragen, wodurch Domain Sharding eine veraltete Anforderung wird, wenn HTTP/2 aktiviert ist.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [TLS](/de/docs/Glossary/TLS)
  - [DNS](/de/docs/Glossary/DNS)
  - [HTTP/2](/de/docs/Glossary/HTTP_2)

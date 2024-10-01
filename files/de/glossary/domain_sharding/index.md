---
title: Domain Sharding
slug: Glossary/Domain_sharding
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Browser limitieren die Anzahl aktiver Verbindungen für jede Domain. Um gleichzeitige Downloads von Inhalten, die dieses Limit überschreiten, zu ermöglichen, teilt **Domain Sharding** Inhalte auf mehrere Subdomains auf. Wenn mehrere Domains verwendet werden, um mehrere Inhalte bereitzustellen, sind Browser in der Lage, mehr Ressourcen gleichzeitig herunterzuladen, was zu einer schnelleren Seitenladezeit und einer verbesserten Benutzererfahrung führt.

Das Problem mit Domain Sharding in Bezug auf die Leistung sind die zusätzlichen Kosten für DNS-Abfragen für jede Domain und der Overhead beim Herstellen jeder TCP-Verbindung.

Die anfängliche Antwort auf eine HTTP-Anfrage ist in der Regel eine HTML-Datei, die andere Ressourcen wie JavaScript, CSS, Bilder und andere Mediendateien auflistet, die heruntergeladen werden müssen. Da Browser die Anzahl aktiver Verbindungen pro Domain begrenzen, könnte die Bereitstellung aller erforderlichen Ressourcen von einer einzigen Domain aus langsam sein, da Inhalte nacheinander heruntergeladen werden müssen. Mit Domain Sharding werden die erforderlichen Downloads von mehr als einer Domain bereitgestellt, sodass der Browser die benötigten Ressourcen gleichzeitig herunterladen kann. Mehrere Domains sind jedoch ein Antimuster, da DNS-Abfragen die anfängliche Ladezeit verlangsamen.

HTTP/2 unterstützt unbegrenzte gleichzeitige Anfragen, was Domain Sharding zu einer überflüssigen Anforderung macht, wenn HTTP/2 aktiviert ist.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("TLS", "TLS")}}
  - {{Glossary("DNS", "DNS")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}

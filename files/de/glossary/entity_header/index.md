---
title: Entity header
slug: Glossary/Entity_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

> [!WARNING]
> Die aktuelle HTTP/1.1-Spezifikation verweist nicht mehr auf Entitäten, Entitäts-Header oder Entitätskörper. Einige der Felder werden jetzt als {{Glossary("Representation_header", "Representation header")}}-Felder bezeichnet.

Ein Entity-Header ist ein {{Glossary("HTTP_header", "HTTP header")}}, der den {{Glossary("HTTP_content", "Inhalt")}} einer HTTP-Nachricht beschreibt (d.h. Metadaten über den Nachrichtenkörper). Zu den Entity-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}} usw. Entity-Header können sowohl in HTTP-Anfragen als auch in HTTP-Antwortnachrichten vorhanden sein.

Im folgenden Beispiel ist {{HTTPHeader("Content-Length")}} ein Entity-Header, während {{HTTPHeader("Host")}} und {{HTTPHeader("User-Agent")}} Anforderungs-Header sind:

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Representation header")}}

---
title: Entität-Header
slug: Glossary/Entity_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

> [!WARNING]
> Die aktuelle HTTP/1.1-Spezifikation bezieht sich nicht mehr auf Entitäten, Entität-Header oder Entitätskörper. Einige der Felder werden jetzt als {{glossary("Representation header")}} Felder bezeichnet.

Ein Entität-Header ist ein {{glossary("HTTP_header", "HTTP-Header")}}, der den {{Glossary("HTTP content", "Inhalt")}} einer HTTP-Nachricht beschreibt (d. h. Metadaten über den Nachrichtenkörper). Entität-Header beinhalten: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}} usw. Entität-Header können in sowohl HTTP-Anfrage- als auch Antwortnachrichten vorhanden sein.

Im folgenden Beispiel ist {{HTTPHeader("Content-Length")}} ein Entität-Header, während {{HTTPHeader("Host")}} und {{HTTPHeader("User-Agent")}} Anfrage-Header sind:

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Representation header")}}

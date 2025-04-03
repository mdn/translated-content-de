---
title: Header für Entität
slug: Glossary/Entity_header
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GlossarySidebar}}

> [!WARNING]
> Die aktuelle HTTP/1.1-Spezifikation bezieht sich nicht mehr auf Entitäten, Entität-Header oder Entität-Körper. Einige der Felder werden jetzt als {{Glossary("Representation_header", "Repräsentations-Header")}}-Felder bezeichnet.

Ein Header für eine Entität ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der den {{Glossary("HTTP_content", "Inhalt")}} einer HTTP-Nachricht beschreibt (d.h. Metadaten über den Nachrichtenkörper). Entität-Header umfassen: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, usw. Entität-Header können sowohl in HTTP-Anfrage- als auch Antwortnachrichten vorhanden sein.

Im folgenden Beispiel ist {{HTTPHeader("Content-Length")}} ein Entität-Header, während {{HTTPHeader("Host")}} und {{HTTPHeader("User-Agent")}} Anfragen-Header sind:

```http
POST /my-form.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentations-Header")}}

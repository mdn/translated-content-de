---
title: Entity-Header
slug: Glossary/Entity_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

> [!WARNING]
> Die aktuelle HTTP/1.1-Spezifikation bezieht sich nicht mehr auf Entitäten, Entitäts-Header oder Entitätskörper. Einige der Felder werden jetzt als {{Glossary("Representation_header", "Darstellungs-Header")}}-Felder bezeichnet.

Ein Entity-Header ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der den {{Glossary("HTTP_content", "Inhalt")}} einer HTTP-Nachricht beschreibt (d.h. Metadaten über den Nachrichtentext). Zu den Entity-Headern gehören: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, etc. Entity-Header können sowohl in HTTP-Request- als auch in HTTP-Response-Nachrichten vorhanden sein.

Im folgenden Beispiel ist {{HTTPHeader("Content-Length")}} ein Entity-Header, während {{HTTPHeader("Host")}} und {{HTTPHeader("User-Agent")}} Request-Header sind:

```http
POST /my-form.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Darstellungs-Header")}}

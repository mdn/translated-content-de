---
title: Entity header
slug: Glossary/Entity_header
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{GlossarySidebar}}

> [!WARNING]
> Die aktuelle HTTP/1.1-Spezifikation verweist nicht mehr auf Entitäten, Entitäten-Header oder Entitätskörper. Einige der Felder werden jetzt als [Representation header](/de/docs/Glossary/Representation_header) Felder bezeichnet.

Ein Entity-Header ist ein [HTTP-Header](/de/docs/Glossary/HTTP_header), der den [Inhalt](/de/docs/Glossary/HTTP_content) einer HTTP-Nachricht beschreibt (d. h. Metadaten über den Nachrichtenkörper). Entitäts-Header umfassen: {{HTTPHeader("Content-Length")}}, {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Encoding")}}, {{HTTPHeader("Content-Type")}}, {{HTTPHeader("Expires")}}, etc. Entitäts-Header können sowohl in HTTP-Anfrage- als auch in Antwortnachrichten vorhanden sein.

Im folgenden Beispiel ist {{HTTPHeader("Content-Length")}} ein Entity-Header, während {{HTTPHeader("Host")}} und {{HTTPHeader("User-Agent")}} Anforderungs-Header sind:

```http
POST /myform.html HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Content-Length: 128
```

## Siehe auch

- Verwandte Glossarbegriffe:
  - [Representation header](/de/docs/Glossary/Representation_header)

---
title: Fetch-Metadaten-Anforderungsheader
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: baac7f2a43813a7930ff97b11d9c38b413f97c78
---

{{GlossarySidebar}}

Ein **Fetch-Metadaten-Anforderungsheader** ist ein {{Glossary("Request_header", "HTTP-Anforderungsheader")}}, der zusätzliche Informationen über den Kontext liefert, aus dem die Anfrage stammt. Dadurch kann der Server Entscheidungen darüber treffen, ob eine Anfrage sinnvoll ist basierend darauf, woher die Anfrage kommt und wie die Ressource verwendet wird.

Mit diesen Informationen kann ein Server eine Richtlinie zur Ressourcentrennung implementieren, die es externen Seiten ermöglicht, nur die Ressourcen anzufordern, die für die gemeinsame Nutzung vorgesehen sind und die geeignet verwendet werden. Dieser Ansatz kann dazu beitragen, gängige webseitenübergreifende Sicherheitslücken wie {{Glossary("CSRF", "CSRF")}}, Cross-site Script Inclusion (XSSI), Timing-Angriffe und länderübergreifende Informationslecks abzumildern.

Diese Header sind mit `Sec-` vorangestellt und haben daher {{Glossary("Forbidden_header_name", "verbotene Header-Namen")}}. Sie können daher nicht von JavaScript aus geändert werden.

Die Fetch-Metadaten-Anforderungsheader sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", da sie nicht in der gleichen Spezifikation aufgeführt sind, aber ebenfalls Informationen über den Kontext liefern, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die Informationen, die zurückgegeben werden:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Liste aller HTTP-Header > Fetch-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- Verwandte Glossareinträge:
  - {{Glossary("Representation_header", "Repräsentationsheader")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Response_header", "Antwortheader")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}

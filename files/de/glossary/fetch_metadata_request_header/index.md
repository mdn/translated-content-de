---
title: Abruf-Metadaten-Anforderungsheader
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **Abruf-Metadaten-Anforderungsheader** ist ein {{Glossary("Request_header", "HTTP-Anforderungsheader")}}, der zusätzliche Informationen über den Kontext bereitstellt, aus dem die Anfrage stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anfrage basierend darauf, woher sie stammt und wie die Ressource genutzt wird, zugelassen werden soll.

Mit diesen Informationen kann ein Server eine Ressourcen-Isolationsrichtlinie implementieren, die es externen Websites erlaubt, nur die Ressourcen anzufordern, die für das Teilen vorgesehen und angemessen genutzt werden. Dieser Ansatz kann helfen, gängige Webseiten-Schwachstellen wie {{Glossary("CSRF", "CSRF")}}, Cross-Site Script Inclusion (XSSI), Zeitangriffs und Cross-Origin-Informationslecks zu entschärfen.

Diese Header sind mit `Sec-` vorangestellt und sind daher {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}}. Daher können sie nicht von JavaScript aus geändert werden.

Die Abruf-Metadaten-Anforderungsheader sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Abruf-Metadaten-Anforderungsheader", da sie sich nicht in derselben Spezifikation befinden, aber ebenfalls Informationen über den Nutzungskontext einer Ressource bereitstellen. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu modifizieren:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Liste aller HTTP-Header > Abruf-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentationsheader")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Response_header", "Antwortheader")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}

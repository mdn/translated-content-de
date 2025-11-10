---
title: Abrufen von Metadatenanforderungsheadern
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Abrufen von Metadatenanforderungsheader** ist ein {{Glossary("Request_header", "HTTP-Anforderungsheader")}}, der zusätzliche Informationen über den Kontext bereitstellt, aus dem die Anfrage stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anfrage basierend darauf, woher die Anfrage stammt und wie die Ressource verwendet wird, erlaubt werden sollte.

Mit diesen Informationen kann ein Server eine Ressourcenkontrollrichtlinie implementieren, die es externen Seiten erlaubt, nur jene Ressourcen anzufordern, die zum Teilen vorgesehen sind und die angemessen verwendet werden. Dieser Ansatz kann helfen, häufige Cross-Site-Web-Schwachstellen wie {{Glossary("CSRF", "CSRF")}}, Cross-Site Script Inclusion (XSSI), Timing-Attacken und Cross-Origin-Informationslecks zu mildern.

Diese Header sind mit `Sec-` präfixiert und sind daher {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}}. Sie können daher nicht von JavaScript aus modifiziert werden.

Die Abrufen von Metadatenanforderungsheadern sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Abrufen von Metadatenanforderungsheadern", da sie nicht in derselben Spezifikation enthalten sind, aber ebenfalls Informationen über den Kontext bereitstellen, wie eine Ressource verwendet wird.
Ein Server könnte sie verwenden, um sein Caching-Verhalten zu ändern oder die zurückgegebenen Informationen anzupassen:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Liste aller HTTP-Header > Abrufen von Metadatenanforderungsheadern](/de/docs/Web/HTTP/Reference/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Darstellungsheader")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Response_header", "Antwortheader")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}

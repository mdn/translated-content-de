---
title: Fetch-Metadaten-Anforderungsheader
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{GlossarySidebar}}

Ein **Fetch-Metadaten-Anforderungsheader** ist ein {{Glossary("Request_header", "HTTP-Anforderungsheader")}}, der zusätzliche Informationen über den Kontext liefert, aus dem die Anforderung stammt. Damit kann der Server entscheiden, ob eine Anforderung basierend darauf, woher sie kommt und wie die Ressource verwendet wird, erlaubt werden sollte.

Mit diesen Informationen kann ein Server eine Ressourcenisolation umsetzen, die es externen Sites erlaubt, nur die Ressourcen anzufordern, die für das Teilen vorgesehen sind und die angemessen verwendet werden. Dieser Ansatz kann helfen, häufige Web-Sicherheitslücken wie {{Glossary("CSRF", "CSRF")}}, Cross-site Script Inclusion (XSSI), Timing-Angriffe und Cross-Origin-Informationslecks zu mildern.

Diese Header sind mit `Sec-` vorangestellt und sind daher {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}}. Somit können sie nicht von JavaScript aus verändert werden.

Die Fetch-Metadaten-Anforderungsheader sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch-Metadaten-Anforderungsheader", da sie nicht in derselben Spezifikation enthalten sind, aber sie liefern ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird. Ein Server könnte sie benutzen, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Testumgebung](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Liste aller HTTP-Header > Fetch-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentationsheader")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Response_header", "Antwortheader")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}

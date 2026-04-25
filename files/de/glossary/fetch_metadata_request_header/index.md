---
title: Fetch-Metadaten-Anforderungsheader
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 81bf621759d3a52fdf737c2d75f186a0073d1406
---

Ein **Fetch-Metadaten-Anforderungsheader** ist ein {{Glossary("Request_header", "HTTP-Anforderungsheader")}}, der zusätzliche Informationen über den Kontext liefert, aus dem die Anforderung stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anforderung auf Grundlage ihres Ursprungs und der vorgesehenen Nutzung der Ressource zugelassen werden sollte.

Mit diesen Informationen kann ein Server eine Ressourcenschutzrichtlinie implementieren, die es externen Seiten erlaubt, nur jene Ressourcen anzufordern, die für die gemeinsame Nutzung bestimmt und die angemessen verwendet werden. Dieser Ansatz kann helfen, häufige webseitenübergreifende Sicherheitslücken wie {{Glossary("CSRF", "CSRF")}}, Cross-site Script Inclusion (XSSI), Timing-Angriffe und informationsbezogene Cross-Origin-Lecks zu mildern.

Diese Header sind mit `Sec-` vorangestellt und sind daher {{Glossary("Forbidden_request_header", "verbotene Anforderungsheader")}}. Sie können also nicht aus JavaScript heraus modifiziert werden.

Die Fetch-Metadaten-Anforderungsheader sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng_ "Fetch-Metadaten-Anforderungsheader", da sie nicht in derselben Spezifikation enthalten sind, aber ähnlich Informationen darüber liefern, wie eine Ressource verwendet wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen anzupassen:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Fetch-Metadaten](/de/docs/Web/HTTP/Guides/Fetch_metadata)
- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch-Metadaten](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- [Liste aller HTTP-Header > Fetch-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Reference/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Darstellungsheader")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Response_header", "Antwort-Header")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}

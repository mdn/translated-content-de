---
title: Fetch metadata request header
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{GlossarySidebar}}

Ein **Fetch Metadata Request Header** ist ein [HTTP-Anforderungsheader](/de/docs/Glossary/Request_header), der zusätzliche Informationen über den Kontext liefert, aus dem die Anfrage stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anfrage basierend auf ihrem Ursprung und der Nutzung der Ressource zugelassen werden sollte.

Mit diesen Informationen kann ein Server eine Isolationsrichtlinie für Ressourcen implementieren, die es externen Websites erlaubt, nur die Ressourcen anzufordern, die zum Teilen vorgesehen und angemessen verwendet werden. Dieser Ansatz kann helfen, häufige webseitenübergreifende Sicherheitslücken wie [CSRF](/de/docs/Glossary/CSRF), Cross-site Script Inclusion ('XSSI'), Timing-Angriffe und ursprungsübergreifende Informationslecks zu mindern.

Diese Header sind mit `Sec-` vorangestellt und haben daher [verbotene Headernamen](/de/docs/Glossary/Forbidden_header_name). Daher können sie nicht von JavaScript aus geändert werden.

Die Fetch Metadata Request Header sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Fetch Metadata Request Header", da sie nicht in derselben Spezifikation enthalten sind, liefern aber ähnlich Informationen über den Kontext, wie eine Ressource verwendet wird.
Ein Server könnte sie nutzen, um sein Caching-Verhalten oder zurückgegebene Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielwiese](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Liste aller HTTP-Header > Fetch Metadata Request Headers](/de/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - [Representation header](/de/docs/Glossary/Representation_header)
  - [HTTP header](/de/docs/Glossary/HTTP_header)
  - [Response header](/de/docs/Glossary/Response_header)
  - [Request header](/de/docs/Glossary/Request_header)

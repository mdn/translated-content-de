---
title: Abruf-Metadaten-Anforderungsheader
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{GlossarySidebar}}

Ein **Abruf-Metadaten-Anforderungsheader** ist ein {{Glossary("Request header", "HTTP request header")}}, der zusätzliche Informationen über den Kontext liefert, aus dem die Anforderung stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anforderung erlaubt werden sollte, basierend darauf, woher sie stammt und wie die Ressource genutzt wird.

Mit diesen Informationen kann ein Server eine Ressourcen-Isolationsrichtlinie implementieren, die es externen Websites erlaubt, nur auf diejenigen Ressourcen zuzugreifen, die für das Teilen vorgesehen sind und die angemessen genutzt werden. Dieser Ansatz kann helfen, häufige webseitenübergreifende Sicherheitslücken wie {{Glossary("CSRF")}}, Cross-site Script Inclusion ('XSSI'), Timing-Angriffe und informationslecks über Ursprung hinweg zu mildern.

Diese Header sind mit `Sec-` vorangestellt und haben daher {{Glossary("Forbidden header name", "forbidden header names")}}. Daher können sie nicht aus JavaScript geändert werden.

Die Abruf-Metadaten-Anforderungsheader sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungsheader sind nicht _streng genommen_ "Abruf-Metadaten-Anforderungsheader", da sie nicht in derselben Spezifikation enthalten sind, bieten jedoch ebenfalls Informationen über den Kontext, wie eine Ressource verwendet werden soll. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Webangriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers playground](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Liste aller HTTP-Header > Abruf-Metadaten-Anforderungsheader](/de/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation header")}}
  - {{Glossary("HTTP_header","HTTP header")}}
  - {{Glossary("Response header")}}
  - {{Glossary("Request header")}}

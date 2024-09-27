---
title: Fetch metadata request header
slug: Glossary/Fetch_metadata_request_header
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{GlossarySidebar}}

Ein **Fetch-Metadata-Anforderungs-Header** ist ein [HTTP-Anforderungs-Header](/de/docs/Glossary/Request_header), der zusätzliche Informationen über den Kontext bereitstellt, aus dem die Anfrage stammt. Dies ermöglicht es dem Server, Entscheidungen darüber zu treffen, ob eine Anfrage basierend auf ihrer Herkunft und der Verwendung der Ressource erlaubt werden sollte.

Mit diesen Informationen kann ein Server eine Richtlinie zur Ressourcenisolation umsetzen, die es externen Seiten erlaubt, nur die Ressourcen anzufordern, die für das Teilen vorgesehen und angemessen genutzt werden. Dieser Ansatz kann helfen, gängige webseitenübergreifende Sicherheitslücken wie [CSRF](/de/docs/Glossary/CSRF), Cross-site Script Inclusion ('XSSI'), Timing-Angriffe und Informationslecks über Ursprungsgrenzen hinweg zu mildern.

Diese Header sind mit `Sec-` vorangestellt und haben daher [verbotene Header-Namen](/de/docs/Glossary/Forbidden_header_name). Sie können daher nicht von JavaScript aus geändert werden.

Die Fetch-Metadata-Anforderungs-Header sind:

- {{HTTPHeader("Sec-Fetch-Site")}}
- {{HTTPHeader("Sec-Fetch-Mode")}}
- {{HTTPHeader("Sec-Fetch-User")}}
- {{HTTPHeader("Sec-Fetch-Dest")}}

Die folgenden Anforderungs-Header sind nicht _strikt_ "Fetch-Metadata-Anforderungs-Header", da sie nicht in der gleichen Spezifikation enthalten sind, aber ähnlich Informationen über den Kontext bereitstellen, wie eine Ressource genutzt wird. Ein Server könnte sie verwenden, um sein Caching-Verhalten oder die zurückgegebenen Informationen zu ändern:

- {{HTTPHeader("Sec-Purpose")}}
- {{HTTPHeader("Service-Worker-Navigation-Preload")}}

## Siehe auch

- [Schützen Sie Ihre Ressourcen vor Web-Angriffen mit Fetch Metadata](https://web.dev/articles/fetch-metadata) (web.dev)
- [Fetch Metadata Request Headers Spielplatz](https://secmetadata.appspot.com/) (secmetadata.appspot.com)
- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- [Liste aller HTTP-Header > Fetch-Metadata-Anforderungs-Header](/de/docs/Web/HTTP/Headers#fetch_metadata_request_headers)
- Verwandte Glossarbegriffe:
  - [Representation header](/de/docs/Glossary/Representation_header)
  - [HTTP header](/de/docs/Glossary/HTTP_header)
  - [Response header](/de/docs/Glossary/Response_header)
  - [Request header](/de/docs/Glossary/Request_header)

---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{GlossarySidebar}}

Das HyperText Transfer Protocol (**HTTP**) ist das zugrunde liegende Netzwerk{{Glossary("protocol", "protokoll")}}, das den Transfer von Hypermediendokumenten im {{Glossary("World_Wide_Web", "Web")}} ermöglicht, typischerweise zwischen einem Browser und einem Server, sodass Menschen sie lesen können. Die aktuelle Version der HTTP-Spezifikation wird als {{Glossary("HTTP_2", "HTTP/2")}} bezeichnet.

Als Teil eines {{Glossary("URI", "URI")}} wird das "http" in "http\://example.com/" als "Schema" bezeichnet. Ressourcen, die das "http"-Schema verwenden, werden typischerweise über unverschlüsselte Verbindungen mit dem HTTP-Protokoll transportiert. Das "https"-Schema (wie in "https\://developer.mozilla.org") zeigt an, dass eine Ressource mit dem HTTP-Protokoll, aber über einen sicheren {{Glossary("TLS", "TLS")}}-Kanal transportiert wird.

HTTP ist textbasiert (alle Kommunikation erfolgt im Klartext) und zustandslos (keine Kommunikation ist sich früherer Kommunikationen bewusst). Diese Eigenschaft macht es ideal für Menschen, Dokumente (Websites) im World Wide Web zu lesen. HTTP kann jedoch auch als Grundlage für {{Glossary("REST", "REST")}}-Webdienste von Server zu Server oder [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen innerhalb von Websites genutzt werden, um sie dynamischer zu gestalten.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) auf Wikipedia

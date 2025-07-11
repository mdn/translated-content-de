---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Das HyperText Transfer Protocol (**HTTP**) ist das zugrunde liegende Netzwerk-{{Glossary("protocol", "Protokoll")}}, das den Transfer von Hypermedia-Dokumenten im {{Glossary("World_Wide_Web", "Web")}} ermöglicht, typischerweise zwischen einem Browser und einem Server, sodass Menschen sie lesen können. Die aktuelle Version der HTTP-Spezifikation heißt {{Glossary("HTTP_2", "HTTP/2")}}.

Als Teil eines {{Glossary("URI", "URI")}} wird das "http" innerhalb "http\://example.com/" als "Scheme" bezeichnet. Ressourcen, die das "http"-Schema verwenden, werden typischerweise über unverschlüsselte Verbindungen unter Verwendung des HTTP-Protokolls transportiert. Das "https"-Schema (wie in "https\://developer.mozilla.org") zeigt an, dass eine Ressource über das HTTP-Protokoll transportiert wird, jedoch über einen sicheren {{Glossary("TLS", "TLS")}}-Kanal.

HTTP ist textbasiert (alle Kommunikation erfolgt im Klartext) und zustandslos (keine Kommunikation kennt frühere Kommunikationen). Diese Eigenschaft macht es ideal für Menschen, um Dokumente (Websites) im World Wide Web zu lesen. HTTP kann jedoch auch als Grundlage für {{Glossary("REST", "REST")}}-Webdienste von Server zu Server oder [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen innerhalb von Websites verwendet werden, um sie dynamischer zu gestalten.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) auf Wikipedia

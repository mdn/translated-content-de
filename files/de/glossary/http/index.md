---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 9584088475846ff014dadddf8f6eff25c0796bbb
---

Das HyperText Transfer Protocol (**HTTP**) ist das zugrunde liegende Netzwerk-{{Glossary("protocol", "Protokoll")}}, das den Transfer von Hypermedia-Dokumenten im {{Glossary("World_Wide_Web", "Web")}} ermöglicht, typischerweise zwischen einem Browser und einem Server, damit Menschen sie lesen können. Die aktuelle Version der HTTP-Spezifikation wird als {{Glossary("HTTP_2", "HTTP/2")}} bezeichnet.

Als Teil einer {{Glossary("URI", "URI")}} wird das "http" in "http\://example.com/" als "Schema" bezeichnet. Ressourcen, die das "http"-Schema verwenden, werden typischerweise über unverschlüsselte Verbindungen mit dem HTTP-Protokoll transportiert. Das "https"-Schema (wie in "https\://developer.mozilla.org") gibt an, dass eine Ressource über das HTTP-Protokoll, aber über einen sicheren {{Glossary("TLS", "TLS")}}-Kanal transportiert wird.

HTTP ist textuell (die gesamte Kommunikation erfolgt im Klartext) und zustandslos (keine Kommunikation kennt vorherige Kommunikationen). Diese Eigenschaft macht es ideal, um Menschen zu ermöglichen, Dokumente (Websites) im World Wide Web zu lesen. HTTP kann jedoch auch als Grundlage für {{Glossary("REST", "REST")}}-Webdienste von Server zu Server oder für [`fetch()`](/de/docs/Web/API/Window/fetch)-Anfragen innerhalb von Websites verwendet werden, um sie dynamischer zu gestalten.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) auf Wikipedia

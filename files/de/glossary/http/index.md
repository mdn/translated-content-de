---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{GlossarySidebar}}

Das HyperText Transfer Protocol (**HTTP**) ist das zugrunde liegende Netzwerk-{{glossary("protocol")}}, das die Übertragung von Hypermedia-Dokumenten im {{glossary("World Wide Web","Web")}} ermöglicht, typischerweise zwischen einem Browser und einem Server, sodass Menschen sie lesen können. Die aktuelle Version der HTTP-Spezifikation wird {{glossary("HTTP_2", "HTTP/2")}} genannt.

Als Teil einer {{glossary("URI")}} wird das "http" in "http\://example.com/" als "Schema" bezeichnet. Ressourcen, die das "http"-Schema verwenden, werden typischerweise über unverschlüsselte Verbindungen mit dem HTTP-Protokoll transportiert. Das "https"-Schema (wie in "https\://developer.mozilla.org") zeigt an, dass eine Ressource unter Verwendung des HTTP-Protokolls, aber über einen sicheren {{glossary("TLS")}}-Kanal, transportiert wird.

HTTP ist textuell (die gesamte Kommunikation erfolgt in Klartext) und zustandslos (keine Kommunikation kennt vorherige Kommunikationen). Diese Eigenschaft macht es ideal für Menschen, um Dokumente (Webseiten) im World Wide Web zu lesen. HTTP kann jedoch auch als Grundlage für {{glossary("REST")}} Webdienste von Server zu Server oder {{domxref("Window/fetch", "fetch()")}}-Anfragen innerhalb von Webseiten verwendet werden, um diese dynamischer zu gestalten.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) auf Wikipedia

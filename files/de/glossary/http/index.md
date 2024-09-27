---
title: HTTP
slug: Glossary/HTTP
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{GlossarySidebar}}

Das HyperText Transfer Protocol (**HTTP**) ist das zugrunde liegende Netzwerk-[Protokoll](/de/docs/Glossary/protocol), das den Transfer von Hypermedia-Dokumenten im [Web](/de/docs/Glossary/World_Wide_Web) ermöglicht, typischerweise zwischen einem Browser und einem Server, damit Menschen sie lesen können. Die aktuelle Version der HTTP-Spezifikation wird [HTTP/2](/de/docs/Glossary/HTTP_2) genannt.

Als Teil eines [URI](/de/docs/Glossary/URI) wird das "http" innerhalb "http\://example.com/" als "Schema" bezeichnet. Ressourcen, die das "http"-Schema verwenden, werden typischerweise über unverschlüsselte Verbindungen mit dem HTTP-Protokoll transportiert. Das "https"-Schema (wie in "https\://developer.mozilla.org") zeigt an, dass eine Ressource unter Verwendung des HTTP-Protokolls, jedoch über einen sicheren [TLS](/de/docs/Glossary/TLS)-Kanal, transportiert wird.

HTTP ist textbasiert (alle Kommunikation erfolgt im Klartext) und zustandslos (keine Kommunikation kennt vorherige Kommunikationen). Diese Eigenschaft macht es ideal, um Dokumente (Webseiten) im World Wide Web zu lesen. Allerdings kann HTTP auch als Basis für [REST](/de/docs/Glossary/REST)-Webdienste von Server zu Server oder für `fetch()`-Anfragen innerhalb von Webseiten verwendet werden, um diese dynamischer zu gestalten.

## Siehe auch

- [HTTP auf MDN](/de/docs/Web/HTTP)
- [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) auf Wikipedia

---
title: Clickjacking
slug: Glossary/Clickjacking
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{GlossarySidebar}}

**Clickjacking** ist ein angriffsbasierter Angriff, der Website-Benutzer dazu bringt, ungewollt auf schädliche Links zu klicken. Beim Clickjacking betten die Angreifer ihre schädlichen Links in Schaltflächen oder legitime Seiten einer Website ein. In einer infizierten {{glossary("Site")}}, wenn ein Benutzer auf einen legitimen Link klickt, erhält der Angreifer die vertraulichen Informationen dieses Benutzers, was letztendlich die Privatsphäre des Benutzers im Internet gefährdet.

Clickjacking kann verhindert werden, indem eine [Content Security Policy (frame-ancestors)](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) implementiert wird und [Set-Cookie-Attribute](/de/docs/Web/HTTP/Headers/Set-Cookie#attributes) angewendet werden.

## Siehe auch

- [Websicherheit: Clickjacking-Schutz](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking)
- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) auf Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) auf OWASP

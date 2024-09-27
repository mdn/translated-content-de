---
title: Clickjacking
slug: Glossary/Clickjacking
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{GlossarySidebar}}

**Clickjacking** ist ein interface-basierter Angriff, bei dem Website-Nutzer dazu verleitet werden, unwissentlich auf bösartige Links zu klicken. Beim Clickjacking betten die Angreifer ihre bösartigen Links in Schaltflächen oder legitime Seiten einer Website ein. In einer infizierten [Site](/de/docs/Glossary/Site) erhält der Angreifer, wann immer ein Benutzer auf einen legitimen Link klickt, die vertraulichen Informationen des Nutzers, was letztlich die Privatsphäre des Nutzers im Internet gefährdet.

Clickjacking kann verhindert werden, indem eine [Content Security Policy (frame-ancestors)](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) implementiert und [Set-Cookie attributes](/de/docs/Web/HTTP/Headers/Set-Cookie#attributes) verwendet werden.

## Siehe auch

- [Web-Sicherheit: Schutz vor Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking)
- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) auf Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) auf OWASP

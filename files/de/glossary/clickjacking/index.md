---
title: Clickjacking
slug: Glossary/Clickjacking
l10n:
  sourceCommit: 7e97f3c5ada65b6638909bde92881a4b8d46a2b8
---

{{GlossarySidebar}}

**Clickjacking** ist ein auf Benutzeroberflächen basierender Angriff, der Website-Benutzer dazu verleitet, unbewusst auf bösartige Links zu klicken. Beim Clickjacking betten die Angreifer ihre bösartigen Links in Schaltflächen oder legitime Seiten einer Website ein. In einer infizierten {{Glossary("Site", "Site")}} erhält der Angreifer jedes Mal, wenn ein Benutzer auf einen legitimen Link klickt, vertrauliche Informationen dieses Benutzers, was letztendlich die Privatsphäre des Benutzers im Internet gefährdet.

Clickjacking kann durch die Implementierung einer [Content Security Policy (frame-ancestors)](/de/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) und das Implementieren von [Set-Cookie Attributen](/de/docs/Web/HTTP/Headers/Set-Cookie#attributes) verhindert werden.

## Siehe auch

- [Web-Sicherheit: Schutz vor Clickjacking](/de/docs/Web/Security/Practical_implementation_guides/Clickjacking)
- [Clickjacking](https://en.wikipedia.org/wiki/Clickjacking) auf Wikipedia
- [Clickjacking](https://owasp.org/www-community/attacks/Clickjacking) auf OWASP

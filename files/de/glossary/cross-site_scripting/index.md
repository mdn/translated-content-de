---
title: Cross-site scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Cross-site scripting** (XSS) ist ein Sicherheitsangriff, der es einem Angreifer ermöglicht, bösartigen clientseitigen Code in eine Website einzuschleusen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugriffsbeschränkungen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS im Jahr 2017 die [siebthäufigste Schwachstelle von Webanwendungen](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>).

Diese Angriffe sind erfolgreich, wenn die Webanwendung nicht ausreichend Validierung oder Kodierung einsetzt. Der Browser des Benutzers kann nicht erkennen, dass das bösartige Skript unzuverlässig ist, und gibt ihm daher Zugriff auf Cookies, Sitzungs-Tokens oder andere sensible, seitenbezogene Informationen, oder lässt das bösartige Skript den [HTML](/de/docs/Glossary/HTML)-Inhalt umschreiben.

## Siehe auch

- [Art der Angriffe: Cross-site scripting (XSS)](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
- [Cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) auf Wikipedia
- [Cross-site scripting auf OWASP](https://owasp.org/www-community/attacks/xss/)
- [Ein weiterer Artikel über Cross-site scripting](https://www.acunetix.com/blog/articles/dom-xss-explained/)

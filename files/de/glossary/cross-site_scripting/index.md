---
title: Cross-site Scripting (XSS)
slug: Glossary/Cross-site_scripting
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

**Cross-site Scripting** (XSS) ist ein Sicherheitsangriff, der es einem Angreifer ermöglicht, bösartigen clientseitigen Code in eine Website einzuschleusen. Dieser Code wird von den Opfern ausgeführt und ermöglicht es den Angreifern, Zugriffskontrollen zu umgehen und Benutzer zu imitieren. Laut dem Open Web Application Security Project war XSS im Jahr 2017 die [siebt häufigste Schwachstelle bei Webanwendungen](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>).

Diese Angriffe haben Erfolg, wenn die Webanwendung nicht genügend Validierung oder Kodierung verwendet. Der Browser des Benutzers kann nicht erkennen, dass das bösartige Script nicht vertrauenswürdig ist und gewährt ihm daher Zugriff auf alle Cookies, Sitzungstoken oder andere sensible, site-spezifische Informationen oder ermöglicht es dem bösartigen Script, den {{glossary("HTML")}}-Inhalt neu zu schreiben.

## Siehe auch

- [Typen von Angriffen: Cross-site Scripting (XSS)](/de/docs/Web/Security/Types_of_attacks#cross-site_scripting_xss)
- [Cross-site Scripting](https://en.wikipedia.org/wiki/Cross-site_scripting) auf Wikipedia
- [Cross-site Scripting auf OWASP](https://owasp.org/www-community/attacks/xss/)
- [Ein weiterer Artikel über Cross-site Scripting](https://www.acunetix.com/blog/articles/dom-xss-explained/)

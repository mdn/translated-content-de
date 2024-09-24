---
title: HSTS
slug: Glossary/HSTS
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**HTTP Strict Transport Security** ermöglicht es einer Website, dem Browser mitzuteilen, dass die Seite niemals über HTTP geladen werden sollte und alle Versuche, auf die Seite über HTTP zuzugreifen, automatisch in HTTPS-Anfragen umgewandelt werden sollten. Es besteht aus einem HTTP-Header, {{HTTPHeader("Strict-Transport-Security")}}, der vom Server mit der Ressource gesendet wird.

Mit anderen Worten, es sagt dem Browser, dass die Umstellung des Protokolls von HTTP zu HTTPS in einer URL funktioniert (und sicherer ist) und bittet den Browser, dies bei jeder Anfrage zu tun.

## Siehe auch

- {{HTTPHeader("Strict-Transport-Security")}}
- OWASP-Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)

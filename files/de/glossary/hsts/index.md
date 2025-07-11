---
title: HSTS
slug: Glossary/HSTS
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**HTTP Strict Transport Security** ermöglicht es einer Website, dem Browser mitzuteilen, dass sie niemals über HTTP geladen werden sollte und stattdessen alle Versuche, die Seite über HTTP aufzurufen, automatisch in HTTPS-Anfragen umgewandelt werden sollten. Es besteht aus einem HTTP-Header, {{HTTPHeader("Strict-Transport-Security")}}, der vom Server mit der Ressource gesendet wird.

Mit anderen Worten, es informiert den Browser darüber, dass das Wechseln des Protokolls von HTTP zu HTTPS in einer URL funktioniert (und sicherer ist) und bittet den Browser, dies für jede Anfrage zu tun.

## Siehe auch

- {{HTTPHeader("Strict-Transport-Security")}}
- OWASP-Artikel: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security)

---
title: CSRF
slug: Glossary/CSRF
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**CSRF** (Cross-Site Request Forgery) ist ein Angriff, der einen vertrauenswürdigen Benutzer imitiert und einer Website unerwünschte Befehle sendet.

Dies kann zum Beispiel durch das Einfügen von schädlichen Parametern in eine [URL](/de/docs/Glossary/URL) hinter einem Link erfolgen, der vorgibt, woanders hinzugehen:

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

Für Benutzer, die Änderungsberechtigungen auf `https://www.example.com` haben, führt das `<img>`-Element eine Aktion auf `https://www.example.com` aus, ohne dass sie es bemerken, selbst wenn das Element nicht auf `https://www.example.com` ist.

Es gibt viele Möglichkeiten, CSRF zu verhindern, wie z.B. die Implementierung von [RESTful API](/de/docs/Glossary/REST), das Hinzufügen von sicheren Tokens usw.

## Siehe auch

- [Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) auf Wikipedia
- [Präventionsmaßnahmen](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

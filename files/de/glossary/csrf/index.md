---
title: CSRF
slug: Glossary/CSRF
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**CSRF** (Cross-Site Request Forgery) ist ein Angriff, bei dem ein vertrauenswürdiger Benutzer imitiert wird, um einer Website unerwünschte Befehle zu senden.

Dies kann zum Beispiel geschehen, indem bösartige Parameter in eine [URL](/de/docs/Glossary/URL) hinter einem Link eingefügt werden, der vorgibt, woanders hinzugehen:

```html
<img src="https://www.example.com/index.php?action=delete&id=123" />
```

Für Benutzer, die Berechtigungen zur Änderung auf `https://www.example.com` haben, führt das `<img>`-Element eine Aktion auf `https://www.example.com` aus, ohne dass sie es bemerken, selbst wenn sich das Element nicht auf `https://www.example.com` befindet.

Es gibt viele Möglichkeiten, CSRF zu verhindern, wie z.B. die Implementierung von [RESTful API](/de/docs/Glossary/REST), das Hinzufügen von sicheren Tokens usw.

## Siehe auch

- [Cross-site request forgery](https://en.wikipedia.org/wiki/Cross-site_request_forgery) auf Wikipedia
- [Präventionsmaßnahmen](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)

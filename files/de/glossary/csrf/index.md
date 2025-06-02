---
title: Cross-Site-Request-Forgery (CSRF)
slug: Glossary/CSRF
l10n:
  sourceCommit: 86fa532a00024e7c85a4c0d6339adce8b1bd9f61
---

{{GlossarySidebar}}

Bei einem **Cross-Site-Request-Forgery** (CSRF)-Angriff bringt ein Angreifer den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Anmeldedaten des Benutzers und führt dazu, dass der Server eine schädliche Aktion durchführt, in der Annahme, dass der Benutzer dies beabsichtigt hat.

Ein CSRF-Angriff ist möglich, wenn eine Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern
- Nur Cookies verwendet, um zu überprüfen, dass die Anfrage von einem authentifizierten Benutzer stammt
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann

Es gibt mehrere Abwehrmechanismen gegen CSRF-Angriffe, darunter [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF#csrf_tokens), die Verwendung von [Fetch-Metadaten](/de/docs/Web/Security/Attacks/CSRF#fetch_metadata), um bestimmte Cross-Site-Anfragen zu blockieren, und das [Setzen des `SameSite`-Attributs](/de/docs/Web/Security/Attacks/CSRF#defense_in_depth_samesite_cookies) für Cookies, die zur Authentifizierung sensibler Anfragen verwendet werden.

## Siehe auch

- [Cross-Site-Request-Forgery](/de/docs/Web/Security/Attacks/CSRF)
- [Leitfaden zur Vermeidung von Cross-Site-Request-Forgery](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) bei [owasp.org](https://owasp.org/)

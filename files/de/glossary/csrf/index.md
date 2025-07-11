---
title: Cross-site request forgery (CSRF)
slug: Glossary/CSRF
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Bei einem **Cross-site request forgery** (CSRF)-Angriff täuscht ein Angreifer den Browser dazu, eine HTTP-Anfrage an die Zielseite von einer bösartigen Seite aus zu stellen. Die Anfrage enthält die Anmeldedaten des Benutzers und veranlasst den Server, eine schädliche Aktion durchzuführen, im Glauben, der Benutzer habe dies gewollt.

Ein CSRF-Angriff ist möglich, wenn eine Website:

- HTTP-Anfragen verwendet, um einen Zustand auf dem Server zu ändern
- Nur Cookies benutzt, um zu überprüfen, dass die Anfrage von einem authentifizierten Benutzer stammt
- Nur Parameter in der Anfrage verwendet, die ein Angreifer vorhersagen kann

Es gibt mehrere Verteidigungsmaßnahmen gegen CSRF-Angriffe, einschließlich [CSRF-Token](/de/docs/Web/Security/Attacks/CSRF#csrf_tokens), dem Einsatz von [Fetch-Metadaten](/de/docs/Web/Security/Attacks/CSRF#fetch_metadata), um bestimmte siteübergreifende Anfragen zu blockieren, und dem [Setzen des `SameSite`-Attributs](/de/docs/Web/Security/Attacks/CSRF#defense_in_depth_samesite_cookies) auf Cookies, die zur Authentifizierung sensibler Anfragen verwendet werden.

## Siehe auch

- [Cross-site request forgery](/de/docs/Web/Security/Attacks/CSRF)
- [Cross-Site Request Forgery Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) auf [owasp.org](https://owasp.org/)

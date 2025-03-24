---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{AddonSidebar}}

Der `SameSiteStatus` Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über den `SameSite` Zustand eines Cookies.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `no_restriction`
  - : Entspricht einem Cookie, das mit `SameSite=None` gesetzt wurde.
- `lax`
  - : Entspricht einem Cookie, das mit `SameSite=Lax` gesetzt wurde.
- `strict`
  - : Entspricht einem Cookie, das mit `SameSite=Strict` gesetzt wurde.
- `unspecified`
  - : Entspricht einem Cookie, das ohne das `SameSite` Attribut gesetzt wurde. Dieser Zustand ist kein Teil eines SameSite-Standards und wird nur von Browsern unterstützt, die diesen Zustand intern speichern. Andere Browser ordnen das Fehlen des SameSite-Flags einem Standardzustand zu (z.B. Lax). Details hierzu finden Sie in der Browser-Kompatibilitätstabelle.

Siehe [SameSite Cookies](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

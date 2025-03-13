---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{AddonSidebar}}

Der Typ `SameSiteStatus` der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über den `SameSite`-Zustand eines Cookies.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `no_restriction`
  - : Entspricht einem Cookie, das mit `SameSite=None` gesetzt wurde.
- `lax`
  - : Entspricht einem Cookie, das mit `SameSite=Lax` gesetzt wurde.
- `strict`
  - : Entspricht einem Cookie, das mit `SameSite=Strict` gesetzt wurde.
- `unspecified`
  - : Entspricht einem Cookie, das ohne das `SameSite`-Attribut gesetzt wurde. Dieser Zustand ist nicht Teil eines SameSite-Standards und wird nur von Browsern unterstützt, die diesen Zustand intern speichern. Andere Browser ordnen das Fehlen des SameSite-Flags dem Standardzustand zu (z.B. Lax). Weitere Details finden Sie in der Browser-Kompatibilitätstabelle.

Siehe [SameSite-Cookies](/de/docs/Web/HTTP/Guides/Cookies#samesite_cookies) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

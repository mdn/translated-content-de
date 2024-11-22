---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: 6f58b8afb8e045e0d706ac0f0fdeacfaea487f86
---

{{AddonSidebar}}

Der Typ `SameSiteStatus` der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über den `SameSite`-Status eines Cookies.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `no_restriction`
  - : Entspricht einem Cookie, das mit `SameSite=None` gesetzt wurde.
- `lax`
  - : Entspricht einem Cookie, das mit `SameSite=Lax` gesetzt wurde.
- `strict`
  - : Entspricht einem Cookie, das mit `SameSite=Strict` gesetzt wurde.
- `unspecified`
  - : Entspricht einem Cookie, das ohne das `SameSite`-Attribut gesetzt wurde. Dieser Zustand ist nicht Teil eines SameSite-Standards und wird nur von Browsern unterstützt, die diesen Zustand intern speichern. Andere Browser ordnen das Fehlen des SameSite-Flags dem Standardzustand (z.B. Lax) zu. Weitere Informationen finden Sie in der Browser-Kompatibilitätstabelle.

Weitere Informationen finden Sie unter [SameSite-Cookies](/de/docs/Web/HTTP/Cookies#samesite_cookies).

## Browser-Kompatibilität

{{Compat}}

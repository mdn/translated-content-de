---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
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
  - : Entspricht einem Cookie, das ohne das `SameSite`-Attribut gesetzt wurde. Dieser Status ist kein Teil eines SameSite-Standards und wird nur von Browsern unterstützt, die diesen Status intern speichern. Andere Browser ordnen das Fehlen des SameSite-Flags dem Standardstatus zu (z.B. Lax). Weitere Details finden Sie in der Tabelle zur Browserkompatibilität.

Siehe [SameSite-Cookies](/de/docs/Web/HTTP/Cookies#samesite_cookies) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

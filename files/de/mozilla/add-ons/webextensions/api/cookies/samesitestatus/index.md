---
title: cookies.SameSiteStatus
slug: Mozilla/Add-ons/WebExtensions/API/cookies/SameSiteStatus
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `SameSiteStatus`-Typ der {{WebExtAPIRef("cookies")}} API repräsentiert Informationen über den `SameSite`-Status eines Cookies.

## Typ

Werte dieses Typs sind Zeichenketten. Mögliche Werte sind:

- `no_restriction`
  - : Entspricht einem Cookie, das mit `SameSite=None` gesetzt ist.
- `lax`
  - : Entspricht einem Cookie, das mit `SameSite=Lax` gesetzt ist.
- `strict`
  - : Entspricht einem Cookie, das mit `SameSite=Strict` gesetzt ist.
- `unspecified`
  - : Entspricht einem Cookie, das ohne das `SameSite`-Attribut gesetzt ist. Dieser Zustand ist nicht Teil eines offiziellen SameSite-Standards und wird nur von Browsern unterstützt, die diesen Zustand intern speichern. Andere Browser ordnen das Fehlen des SameSite-Attributs dem Standardzustand zu (z.B. Lax). Weitere Details finden Sie in der Browser-Kompatibilitätsübersicht.

Weitere Informationen finden Sie unter [SameSite-Cookies](/de/docs/Web/HTTP/Guides/Cookies#controlling_third-party_cookies_with_samesite).

## Browser-Kompatibilität

{{Compat}}

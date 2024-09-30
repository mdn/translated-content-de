---
title: "Blocked: Alle Anfragen auf Zugriff auf Drittanbieter-Speicher"
slug: Web/Privacy/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_Access_Policy/Errors")}}

## Nachricht

Firefox:

```plain
CookieBlockedForeign=Request to access cookies or storage on "X" was blocked because we are blocking all third-party storage access requests and content blocking is enabled.
```

## Was ist schiefgelaufen?

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, weil sie von einem Drittanbieter (einem anderen Ursprung) kam und das Inhaltsblockieren aktiviert ist.

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Inhaltsblockierung_ und entweder
- eine Ausnahme mit dem _Ausnahmen verwalten_…-Button hinzufügen
- die _Benutzerdefinierte_ Inhaltsblockierung wählen und das _Cookies_-Kontrollkästchen abwählen

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem entsprechenden Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

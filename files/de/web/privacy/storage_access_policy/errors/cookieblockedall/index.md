---
title: "Blocked: Alle Speicherzugriffsanfragen"
slug: Web/Privacy/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_Access_Policy/Errors")}}

## Nachricht

Firefox:

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## Was ist schiefgelaufen?

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser alle Speicherzugriffe blockiert.

Die Berechtigung kann geändert oder entfernt werden, indem Sie:

- Zu _Einstellungen > Inhaltsblockierung_ gehen
- Im Abschnitt _Benutzerdefinierte_ Inhaltsblockierung für den Punkt _Cookies_ einen anderen Wert als _Alle Cookies_ auswählen

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie Ihrem Element ein `crossorigin="anonymous"` Attribut hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

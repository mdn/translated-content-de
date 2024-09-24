---
title: "Blockiert: Alle Zugriffsanfragen auf Drittanbieter-Speicher"
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

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da sie von einem Drittanbieter (einem anderen Ursprung) kam und das Inhaltsblockieren aktiviert ist.

Die Berechtigung kann geändert oder entfernt werden durch:

- Aufrufen von _Einstellungen > Inhaltsblockierung_ und entweder
- Hinzufügen einer Ausnahme mit der Schaltfläche _Ausnahmen verwalten_...
- die _Benutzerdefinierte_ Inhaltsblockierung wählen und das Kontrollkästchen _Cookies_ deaktivieren

Wenn die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem betreffenden Element ein `crossorigin="anonymous"` Attribut hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

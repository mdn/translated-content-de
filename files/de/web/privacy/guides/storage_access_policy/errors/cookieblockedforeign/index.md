---
title: "Blockiert: Alle Anfragen zum Zugriff auf Drittanbieter-Speicher"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da sie von einem Drittanbieter (einem anderen Ursprung) kam und Inhaltsblockierung aktiviert ist.

## Nachricht

Firefox:

```plain
CookieBlockedForeign=Request to access cookies or storage on "X" was blocked because we are blocking all third-party storage access requests and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Inhaltsblockierung_ und entweder
- eine Ausnahme hinzufügen mit der Schaltfläche _Ausnahmen verwalten_…
- die _Benutzerdefinierte_ Inhaltsblockierung wählen und das _Cookies_ Kontrollkästchen deaktivieren

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie ein `crossorigin="anonymous"` Attribut zum entsprechenden Element hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

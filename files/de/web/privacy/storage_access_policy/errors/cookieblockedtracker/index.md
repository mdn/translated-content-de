---
title: "Blockiert: Speicherzugriffsanfragen von Trackern"
slug: Web/Privacy/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{QuicklinksWithSubPages("Web/Privacy/Storage_Access_Policy/Errors")}}

## Nachricht

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## Was ist schiefgelaufen?

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser sie als von einem Tracker stammend identifiziert hat und Inhaltsblockierung aktiviert ist.

Die Berechtigung kann geändert oder entfernt werden, indem Sie:

- Zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ gehen und entweder

  - eine Ausnahme mit dem Button _Ausnahmen verwalten_ hinzufügen
  - _Benutzerdefiniert_ bei der Inhaltsblockierung wählen und das Kontrollkästchen _Tracker_ deaktivieren

Wenn die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie ein `crossorigin="anonymous"`-Attribut zum relevanten Element hinzufügen.

## Siehe auch

- [Erweiterter Schutz vor Aktivitätenverfolgung in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

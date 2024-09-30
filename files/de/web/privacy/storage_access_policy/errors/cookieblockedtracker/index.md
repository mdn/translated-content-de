---
title: "Blocked: Speicherzugriffsanfragen von Trackern"
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

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, weil der Browser sie als von einem Tracker stammend identifiziert hat und die Inhaltsblockierung aktiviert ist.

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ und entweder

  - fügen Sie eine Ausnahme hinzu mit dem _Ausnahmen verwalten_…-Button
  - wählen Sie die _Benutzerdefinierte_ Inhaltsblockierung und deaktivieren Sie das _Tracker_-Kontrollkästchen

Falls die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem entsprechenden Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Verbesserter Schutz vor Aktivitätenverfolgung in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

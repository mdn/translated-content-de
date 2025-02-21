---
title: "Blockiert: Speicherzugriffsanfragen von Trackern"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser diese als von einem Tracker kommend identifiziert hat und Inhaltsblockierung aktiviert ist.

## Nachricht

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ und entweder

  - fügen Sie eine Ausnahme mit der Schaltfläche _Ausnahmen verwalten_… hinzu
  - wählen Sie die _Benutzerdefinierte_ Inhaltsblockierung und deaktivieren Sie das _Tracker_-Kontrollkästchen

Falls die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem relevanten Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Verbesserter Schutz vor Aktivitätenverfolgung in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

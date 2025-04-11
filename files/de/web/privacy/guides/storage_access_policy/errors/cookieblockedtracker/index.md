---
title: "Blockiert: Speicherzugriffsanfragen von Trackern"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, weil der Browser sie als von einem Tracker kommend identifiziert hat und Inhaltsblockierung aktiviert ist.

## Meldung

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ und entweder

  - eine Ausnahme mit der Schaltfläche _Ausnahmen verwalten_... hinzufügen
  - den _Benutzerdefinierten_ Inhaltsblocker auswählen und das Kontrollkästchen _Tracker_ deaktivieren

Wenn die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem relevanten Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Verbesserter Schutz vor Aktivitätenverfolgung in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

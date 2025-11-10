---
title: "Blockiert: Speicherzugriffsanfragen von Trackern"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: ab458cefeb4e268c9298e1c6b8119c80397dc9ef
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, weil der Browser sie als von einem Tracker stammend identifiziert hat und Inhaltsblockierung aktiviert ist.

## Meldung

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden, indem Sie:

- Zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ gehen und entweder
  - eine Ausnahme mit dem Button _Ausnahmen verwalten_... hinzufügen
  - die Option _Benutzerdefiniert_ bei der Inhaltsblockierung wählen und das Kontrollkästchen _Verfolgungsinhalte_ abwählen

Wenn die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie das Attribut `crossorigin="anonymous"` zum entsprechenden Element hinzufügen.

## Siehe auch

- [Verbesserter Schutz vor Aktivitätenverfolgung in Firefox für den Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

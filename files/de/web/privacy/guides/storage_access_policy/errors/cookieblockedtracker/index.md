---
title: "Blockiert: Speicherzugriffsanforderungen von Trackern"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedTracker
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Eine Anforderung zum Zugriff auf Cookies oder Speicher wurde blockiert, weil der Browser sie als von einem Tracker kommend identifiziert hat und Inhaltsblockierung aktiviert ist.

## Nachricht

Firefox:

```plain
Request to access cookie or storage on “X” was blocked because it came from a tracker and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden, indem man:

- Zu _Einstellungen > Datenschutz & Sicherheit > Erweitertes Tracking-Schutz_ geht und entweder
  - eine Ausnahme mit dem Button _Ausnahmen verwalten_… hinzufügt
  - den _Benutzerdefinierten_ Inhaltsblocker wählt und das Kontrollkästchen _Tracker_ deaktiviert

Falls die blockierte Ressource keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie dem entsprechenden Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Erweiterter Tracking-Schutz in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

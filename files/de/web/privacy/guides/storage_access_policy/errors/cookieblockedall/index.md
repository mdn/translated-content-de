---
title: "Blockiert: Alle Speicherzugriffsanfragen"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: 6722199b4d63fad3c33db1146af380fc98b6c202
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser den gesamten Speicherzugriff blockiert.

## Nachricht

Firefox:

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Datenschutz & Sicherheit > Erweiterter Schutz vor Aktivitätenverfolgung_.
- Wählen Sie im Bereich _Benutzerdefinierte_ Inhaltsblockierung für das Element _Cookies_ einen anderen Wert als _Alle Cookies_ aus.

Wenn die blockierte Ressource keine Authentifizierung erfordert, können Sie die Warnmeldung beheben, indem Sie Ihrem Element ein `crossorigin="anonymous"`-Attribut hinzufügen.

## Siehe auch

- [Erweiterter Schutz vor Aktivitätenverfolgung in Firefox für den Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

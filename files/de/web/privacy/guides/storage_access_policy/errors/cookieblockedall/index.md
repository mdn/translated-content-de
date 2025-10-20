---
title: "Blockiert: Alle Speicherzugriffsanfragen"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: 04a955e882cfcf4aaa1b19b68b9813a6afcfe540
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser den gesamten Speicherzugriff blockiert.

## Meldung

Firefox:

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Datenschutz & Sicherheit > Erweitertes Schutz vor Aktivitätenverfolgung_.
- Im Abschnitt _Benutzerdefinierte_ Inhaltsblockierung wählen Sie einen anderen Wert als _Alle Cookies_ für das Element _Cookies_.

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie ein `crossorigin="anonymous"` Attribut zu Ihrem Element hinzufügen.

## Siehe auch

- [Erweitertes Schutz vor Aktivitätenverfolgung in Firefox für Desktop](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-deskto) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

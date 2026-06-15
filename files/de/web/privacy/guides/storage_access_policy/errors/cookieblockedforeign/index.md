---
title: "Blockiert: Alle Anfragen zum Zugriff auf Speicher von Drittanbietern"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: fc801f51100908ad3f4471918cc634d767898874
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da sie von einem Drittanbieter (einem anderen Ursprung) stammte und die Inhaltsblockierung aktiviert ist.

## Nachricht

Firefox:

```plain
CookieBlockedForeign=Request to access cookies or storage on "X" was blocked because we are blocking all third-party storage access requests and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden, indem Sie zu _Einstellungen > Datenschutz & Sicherheit > Verbesserter Schutz vor Aktivitätenverfolgung_ gehen und eine Ausnahme mit der Schaltfläche _Ausnahmen verwalten_... hinzufügen.

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie ein `crossorigin="anonymous"`-Attribut zu dem relevanten Element hinzufügen.

## Siehe auch

- [Verbesserter Schutz vor Aktivitätenverfolgung in Firefox für den Desktop](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

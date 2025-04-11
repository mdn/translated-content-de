---
title: "Blockiert: Alle Zugriffsanfragen auf Drittanbieter-Speicher"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedForeign
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Eine Anfrage auf den Zugriff auf Cookies oder Speicher wurde blockiert, da sie von einem Drittanbieter (einem anderen Ursprung) stammt und Inhaltsblockierung aktiviert ist.

## Meldung

Firefox:

```plain
CookieBlockedForeign=Request to access cookies or storage on "X" was blocked because we are blocking all third-party storage access requests and content blocking is enabled.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Inhaltsblockierung_ und entweder
- Fügen Sie eine Ausnahme mit der Schaltfläche _Ausnahmen verwalten_… hinzu
- Wählen Sie die _Benutzerdefinierte_ Inhaltsblockierung und entfernen Sie das Häkchen im _Cookies_-Kästchen

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie ein `crossorigin="anonymous"` Attribut zum entsprechenden Element hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

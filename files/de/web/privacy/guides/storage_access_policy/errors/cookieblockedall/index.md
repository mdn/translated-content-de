---
title: "Blockiert: Alle Speicherzugriffsanfragen"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, weil der Browser alle Speicherzugriffe blockiert.

## Meldung

Firefox:

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Inhaltsblockierung_
- In der _Benutzerdefinierten_ Inhaltsblockierungssektion wählen Sie einen anderen Wert als _Alle Cookies_ für das _Cookies_-Element

Wenn die Ressource, die blockiert wird, keine Authentifizierung benötigt, können Sie die Warnmeldung beheben, indem Sie Ihr Element um ein `crossorigin="anonymous"`-Attribut ergänzen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin`-Attribut](/de/docs/Web/HTML/Reference/Attributes/crossorigin)

---
title: "Blockiert: Alle Speicherzugriffsanfragen"
slug: Web/Privacy/Guides/Storage_Access_Policy/Errors/CookieBlockedAll
l10n:
  sourceCommit: 775df1c62a1cbe555c4374ff9122d4ef15bd6f60
---

Eine Anfrage zum Zugriff auf Cookies oder Speicher wurde blockiert, da der Browser alle Speicherzugriffe blockiert.

## Meldung

Firefox:

```plain
CookieBlockedAll=Request to access cookies or storage on "X" was blocked because we are blocking all storage access requests.
```

## Was getan werden kann

Die Berechtigung kann geändert oder entfernt werden durch:

- Gehen Sie zu _Einstellungen > Inhaltsblockierung_
- Wählen Sie im Abschnitt _Benutzerdefinierte_ Inhaltsblockierung einen anderen Wert als _Alle Cookies_ für das Element _Cookies_

Wenn die Ressource, die blockiert wird, keine Authentifizierung erfordert, können Sie die Warnmeldung beheben, indem Sie Ihrem Element ein `crossorigin="anonymous"` Attribut hinzufügen.

## Siehe auch

- [Inhaltsblockierung](https://support.mozilla.org/en-US/kb/content-blocking) auf [support.mozilla.org](https://support.mozilla.org/)
- [Das `crossorigin` Attribut](/de/docs/Web/HTML/Attributes/crossorigin)

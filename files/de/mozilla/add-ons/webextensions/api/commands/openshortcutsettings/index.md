---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
l10n:
  sourceCommit: fa98e7a82bde55434e22f26e72bdcb509e7d169f
---

{{AddonSidebar}}

Öffnet die Benutzeroberfläche des Browsers, die es Nutzern ermöglicht, Tastenkombinationen einer Erweiterung zu konfigurieren.

In Firefox öffnet diese Funktion die Option [Erweiterungstastenkombinationen verwalten](https://support.mozilla.org/en-US/kb/manage-extension-shortcuts-firefox).

Chrome unterstützt diese Funktion nicht. In Chrome kann `chrome://extensions/shortcuts` mit der Funktion `tabs.create` geöffnet werden.

## Syntax

```js-nolint
let openedShortcutSettings = browser.commands.openShortcutSettings();
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Schnittstelle zur Verwaltung der Erweiterungskurzbefehle geöffnet wird. Scheitert die Anfrage, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

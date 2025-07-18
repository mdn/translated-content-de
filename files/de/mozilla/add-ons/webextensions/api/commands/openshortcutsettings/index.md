---
title: openShortcutSettings()
slug: Mozilla/Add-ons/WebExtensions/API/commands/openShortcutSettings
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Öffnet die Browser-Oberfläche, die es Benutzern ermöglicht, die Tastenkombinationen einer Erweiterung zu konfigurieren.

In Firefox öffnet diese Funktion die Option [Erweiterungstastenkombinationen verwalten](https://support.mozilla.org/de/kb/manage-extension-shortcuts-firefox).

Chrome unterstützt diese Funktion nicht. In Chrome kann `chrome://extensions/shortcuts` mithilfe der Funktion `tabs.create` geöffnet werden.

## Syntax

```js-nolint
let openedShortcutSettings = browser.commands.openShortcutSettings();
```

### Parameter

Keine.

### Rückgabewert

Ein {{JSxRef("Promise")}}, das ohne Argumente erfüllt wird, wenn die Schnittstelle zur Verwaltung der Erweiterungstastenkombinationen geöffnet wird. Wenn die Anfrage fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
